"use client";

import { useEffect, useMemo, useState } from "react";
import { vehicles } from "@/lib/data/vehicles";
import { vehicleName } from "@/lib/vehicleDisplay";
import { formatPrice } from "@/lib/data/pricing";
import {
  selfDriveQuote,
  selfDriveRatesFor,
  chauffeurQuote,
  daysBetween,
  type QuoteResult,
  type ChauffeurJourney,
} from "@/lib/quote";
import {
  chauffeurRates,
  chauffeurEventTypes,
  DROP_RETURN_MAX_MILES,
  type ChauffeurMode,
} from "@/lib/data/chauffeur";
import { airports } from "@/lib/data/airports";
import { sendToAniro } from "@/lib/aniro";
import { track, captureUtm } from "@/lib/analytics";
import { CallLink } from "@/components/ActionLinks";
import { ArrowRight, ChatIcon, CheckIcon, RefreshIcon, PhoneIcon } from "@/components/ui/Icons";

type Mode = "self-drive" | "chauffeur";

const inputClass =
  "w-full min-w-0 min-h-[48px] bg-black/40 border border-line px-4 text-warm-white placeholder:text-silver/60 focus:border-champagne focus:outline-none";
const dateClass = `${inputClass} appearance-none`;
const labelClass = "block text-[11px] uppercase tracking-wide2 text-silver mb-2";
const segClass = (active: boolean) =>
  `min-h-[44px] px-2 text-[11px] font-medium uppercase tracking-wide2 transition-colors ${
    active ? "bg-champagne text-black" : "text-silver hover:text-warm-white"
  }`;

const selfDriveVehicles = vehicles.filter((v) => selfDriveRatesFor(v) !== null);

type DistStatus = "idle" | "loading" | "ok" | "error";

/** Duration in hours from two HH:MM times (crossing midnight allowed). */
function hoursFromTimes(pickup: string, ret: string): number {
  if (!pickup || !ret) return 8;
  const toMin = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + (m || 0);
  };
  let diff = toMin(ret) - toMin(pickup);
  if (diff <= 0) diff += 24 * 60;
  return Math.max(1, Math.round(diff / 60));
}

export function QuoteForm() {
  const [mode, setMode] = useState<Mode>("self-drive");

  // Self-drive
  const [sdVehicle, setSdVehicle] = useState(selfDriveVehicles[0]?.slug ?? "");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // Chauffeur
  const [eventType, setEventType] = useState<string>(chauffeurEventTypes[0]);
  const [chVehicle, setChVehicle] = useState(chauffeurRates[0]?.slug ?? "");
  const [journey, setJourney] = useState<ChauffeurJourney>("return");
  const [chDate, setChDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [airportCode, setAirportCode] = useState("");
  const [carOption, setCarOption] = useState<"drop" | "wait">("drop");
  const [distanceMiles, setDistanceMiles] = useState(0);
  const [milesFromBase, setMilesFromBase] = useState(0);
  const [isLondon, setIsLondon] = useState(false);
  const [distStatus, setDistStatus] = useState<DistStatus>("idle");
  const [stops, setStops] = useState(0);
  const [passengers, setPassengers] = useState(2);
  const [requests, setRequests] = useState("");

  // Contact
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Auto-estimate mileage + zone from pickup/drop-off postcodes.
  useEffect(() => {
    if (!pickup.trim() || !dropoff.trim()) {
      setDistStatus("idle");
      return;
    }
    setDistStatus("loading");
    const t = setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/distance?from=${encodeURIComponent(pickup)}&to=${encodeURIComponent(dropoff)}`
        );
        const data = await res.json();
        if (data.ok && typeof data.miles === "number") {
          setDistanceMiles(data.miles);
          if (typeof data.milesFromBase === "number") setMilesFromBase(data.milesFromBase);
          setIsLondon(Boolean(data.isLondon));
          setDistStatus("ok");
        } else {
          setDistStatus("error");
        }
      } catch {
        setDistStatus("error");
      }
    }, 700);
    return () => clearTimeout(t);
  }, [pickup, dropoff]);

  const chRate = chauffeurRates.find((r) => r.slug === chVehicle);
  const maxPassengers = chRate?.maxPassengers ?? 4;
  useEffect(() => {
    setPassengers((p) => Math.min(p, maxPassengers));
  }, [maxPassengers]);

  const isReturn = journey === "return";
  const localReturn = isReturn && milesFromBase <= DROP_RETURN_MAX_MILES;

  // Resolve the pricing mode from journey + distance + choice.
  const chMode: ChauffeurMode = !isReturn
    ? "one-way"
    : localReturn && carOption === "drop"
      ? "return-drop"
      : "return-wait";

  const durationHours = useMemo(
    () => hoursFromTimes(pickupTime, returnTime),
    [pickupTime, returnTime]
  );

  const days = useMemo(() => (start && end ? daysBetween(start, end) : 0), [start, end]);

  const selfQuote = useMemo(() => {
    const v = selfDriveVehicles.find((x) => x.slug === sdVehicle);
    const rates = v ? selfDriveRatesFor(v) : null;
    if (!rates || days < 1) return null;
    return selfDriveQuote(days, rates);
  }, [sdVehicle, days]);

  const chQuote = useMemo(() => {
    if (!chRate) return null;
    return chauffeurQuote(
      { mode: chMode, milesFromBase, isLondon, hours: durationHours, stops },
      chRate
    );
  }, [chRate, chMode, milesFromBase, isLondon, durationHours, stops]);

  const activeQuote = mode === "self-drive" ? selfQuote : chQuote;

  const summary = useMemo(() => {
    if (mode === "self-drive") {
      const v = selfDriveVehicles.find((x) => x.slug === sdVehicle);
      if (!v || !selfQuote) return "";
      return `Self-drive hire of the ${vehicleName(v)} for ${days} day${days === 1 ? "" : "s"} (${start} to ${end}).`;
    }
    const rate = chauffeurRates.find((r) => r.slug === chVehicle);
    if (!rate) return "";
    const when = [chDate, pickupTime].filter(Boolean).join(" ");
    const svc =
      chMode === "one-way"
        ? "one-way drop-off"
        : chMode === "return-drop"
          ? "return (drop off & collect later)"
          : `return, car waits${returnTime ? ` until ${returnTime}` : ""}${isLondon ? " (London)" : ""}`;
    const route = pickup && dropoff ? ` ${pickup} → ${dropoff}` : "";
    const stopsTxt = stops > 0 ? `, ${stops} stop${stops === 1 ? "" : "s"}` : "";
    const pax = ` for ${passengers} passenger${passengers === 1 ? "" : "s"}`;
    const req = requests ? ` Special requests: ${requests}.` : "";
    return `${eventType} chauffeur hire of the ${rate.label}${when ? ` on ${when}` : ""} —${route} ${svc}${stopsTxt}${pax}.${req}`;
  }, [
    mode, sdVehicle, selfQuote, days, start, end, chVehicle, chMode, chDate, pickupTime,
    returnTime, isLondon, pickup, dropoff, stops, passengers, requests, eventType,
  ]);

  const canSubmit = Boolean(activeQuote && name.trim() && mobile.trim());

  /** Full lead + vehicle details, composed for the Aniro chat hand-off. */
  const leadMessage = [
    "New website quote enquiry.",
    `Name: ${name}`,
    `Mobile: ${mobile}`,
    email ? `Email: ${email}` : "",
    `Details: ${summary}`,
    activeQuote ? `Estimated: from ${formatPrice(activeQuote.total)}.` : "",
  ]
    .filter(Boolean)
    .join("\n");

  async function submit() {
    if (!canSubmit || !activeQuote) return;
    setSubmitting(true);
    track("submit_enquiry", { source: "quote", mode, total: activeQuote.total });
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          mobile,
          email,
          source: `quote-${mode}`,
          message: summary,
          estimate: activeQuote.total,
          vehicle: mode === "self-drive" ? sdVehicle : chVehicle,
          ...(mode === "chauffeur"
            ? {
                eventType, pickup, dropoff, date: chDate, pickupTime, returnTime,
                journey, carOption: chMode, passengers, stops, requests,
                milesFromBase, isLondon,
              }
            : { start, end }),
          ...captureUtm(),
        }),
      });
    } catch {
      /* non-blocking */
    }
    // Hand the collected customer + vehicle details to the Aniro chat widget.
    sendToAniro(leadMessage);
    setSubmitting(false);
    setDone(true);
  }

  /** Reset the form so the visitor can run another quote. */
  function newQuote() {
    setDone(false);
    setName("");
    setMobile("");
    setEmail("");
    setStart("");
    setEnd("");
    setPickup("");
    setDropoff("");
    setChDate("");
    setPickupTime("");
    setReturnTime("");
    setStops(0);
    setPassengers(2);
    setRequests("");
    setDistanceMiles(0);
    setMilesFromBase(0);
    setIsLondon(false);
    setDistStatus("idle");
    track("begin_enquiry", { source: "quote-new" });
  }

  // ── Success: reveal the instant estimate + team-review note ──
  if (done && activeQuote) {
    return (
      <div className="border border-line bg-charcoal/70 p-6 backdrop-blur sm:p-8">
        <div className="flex items-center gap-3 text-champagne">
          <CheckIcon className="h-6 w-6" />
          <h3 className="font-display text-2xl text-warm-white">Your instant estimate</h3>
        </div>
        <p className="mt-2 text-sm text-silver">
          Thank you{name ? `, ${name.split(" ")[0]}` : ""} — here&rsquo;s your indicative price.
        </p>
        <div className="mt-5">
          <Breakdown quote={activeQuote} />
        </div>
        <p className="mt-4 text-[11px] leading-relaxed text-silver/80">
          This is an instant estimate. Our team will review your request and confirm the final quote
          &mdash; we may call to finalise the details and can tailor the price to your booking.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => sendToAniro(leadMessage)}
            className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 bg-champagne px-6 text-xs font-medium uppercase tracking-wide2 text-black hover:bg-champagne-soft"
          >
            <ChatIcon className="h-4 w-4" /> Continue in chat
          </button>
          <CallLink
            context={{ source: "quote-success" }}
            className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 border border-line px-6 text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne"
          >
            <PhoneIcon className="h-4 w-4 text-champagne" /> Call us
          </CallLink>
        </div>
        <button
          type="button"
          onClick={newQuote}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 text-xs uppercase tracking-wide2 text-silver transition-colors hover:text-champagne"
        >
          <RefreshIcon className="h-4 w-4" /> Start a new quote
        </button>
      </div>
    );
  }

  return (
    <div className="border border-line bg-charcoal/70 p-6 backdrop-blur sm:p-8">
      {/* Mode tabs */}
      <div className="grid grid-cols-2 gap-2 border border-line p-1">
        {(["self-drive", "chauffeur"] as Mode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={segClass(mode === m)}
          >
            {m === "self-drive" ? "Self-Drive" : "Chauffeur"}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-5">
        {mode === "self-drive" ? (
          <>
            <div>
              <label className={labelClass} htmlFor="sd-vehicle">
                Vehicle
              </label>
              <select
                id="sd-vehicle"
                className={inputClass}
                value={sdVehicle}
                onChange={(e) => setSdVehicle(e.target.value)}
              >
                {selfDriveVehicles.map((v) => (
                  <option key={v.slug} value={v.slug}>
                    {vehicleName(v)}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="min-w-0">
                <label className={labelClass} htmlFor="sd-start">
                  Start date
                </label>
                <input id="sd-start" type="date" className={dateClass} value={start} onChange={(e) => setStart(e.target.value)} />
              </div>
              <div className="min-w-0">
                <label className={labelClass} htmlFor="sd-end">
                  End date
                </label>
                <input id="sd-end" type="date" className={dateClass} value={end} onChange={(e) => setEnd(e.target.value)} />
              </div>
            </div>
            {start && end && days < 1 && (
              <p className="text-xs text-champagne-soft">Please choose an end date after the start date.</p>
            )}
          </>
        ) : (
          <>
            {/* 1 · Occasion + vehicle */}
            <div className="grid grid-cols-2 gap-4">
              <div className="min-w-0">
                <label className={labelClass} htmlFor="ch-event">
                  Event type
                </label>
                <select id="ch-event" className={inputClass} value={eventType} onChange={(e) => setEventType(e.target.value)}>
                  {chauffeurEventTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="min-w-0">
                <label className={labelClass} htmlFor="ch-vehicle">
                  Vehicle
                </label>
                <select id="ch-vehicle" className={inputClass} value={chVehicle} onChange={(e) => setChVehicle(e.target.value)}>
                  {chauffeurRates.map((r) => (
                    <option key={r.slug} value={r.slug}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 2 · Journey */}
            <div>
              <span className={labelClass}>Journey</span>
              <div className="grid grid-cols-2 gap-2 border border-line p-1">
                {(
                  [
                    ["one-way", "One-way"],
                    ["return", "Return"],
                  ] as [ChauffeurJourney, string][]
                ).map(([val, label]) => (
                  <button key={val} type="button" onClick={() => setJourney(val)} className={segClass(journey === val)}>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3 · Date + times */}
            <div>
              <label className={labelClass} htmlFor="ch-date">
                Date of hire
              </label>
              <input id="ch-date" type="date" className={dateClass} value={chDate} onChange={(e) => setChDate(e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="min-w-0">
                <label className={labelClass} htmlFor="ch-ptime">
                  Pick-up time
                </label>
                <input id="ch-ptime" type="time" className={dateClass} value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} />
              </div>
              {isReturn && (
                <div className="min-w-0">
                  <label className={labelClass} htmlFor="ch-rtime">
                    Return time
                  </label>
                  <input id="ch-rtime" type="time" className={dateClass} value={returnTime} onChange={(e) => setReturnTime(e.target.value)} />
                </div>
              )}
            </div>

            {/* 4 · Airport (if applicable) + locations */}
            {eventType === "Airport transfer" && (
              <div>
                <label className={labelClass} htmlFor="ch-airport">
                  Airport
                </label>
                <select
                  id="ch-airport"
                  className={inputClass}
                  value={airportCode}
                  onChange={(e) => {
                    setAirportCode(e.target.value);
                    const a = airports.find((x) => x.code === e.target.value);
                    if (a) setDropoff(a.postcode);
                  }}
                >
                  <option value="">Select an airport…</option>
                  {airports.map((a) => (
                    <option key={a.code} value={a.code}>
                      {a.name} ({a.code})
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-[11px] text-silver/80">Fills the drop-off; swap for arrivals.</p>
              </div>
            )}
            <div className="grid grid-cols-2 gap-4">
              <div className="min-w-0">
                <label className={labelClass} htmlFor="ch-pickup">
                  Pick-up postcode
                </label>
                <input id="ch-pickup" type="text" autoComplete="postal-code" placeholder="e.g. B1 1AA" className={inputClass} value={pickup} onChange={(e) => setPickup(e.target.value.toUpperCase())} />
              </div>
              <div className="min-w-0">
                <label className={labelClass} htmlFor="ch-dropoff">
                  Drop-off postcode
                </label>
                <input id="ch-dropoff" type="text" autoComplete="postal-code" placeholder="e.g. SW1A 1AA" className={inputClass} value={dropoff} onChange={(e) => setDropoff(e.target.value.toUpperCase())} />
              </div>
            </div>
            <div className="text-[11px]">
              {distStatus === "loading" && <span className="text-silver">Estimating distance…</span>}
              {distStatus === "ok" && (
                <span className="text-champagne-soft">
                  ≈ {distanceMiles} mi journey · ~{milesFromBase} mi from Birmingham{isLondon ? " · London" : ""}
                </span>
              )}
              {distStatus === "error" && (
                <span className="text-silver">Postcodes not found — we&rsquo;ll confirm distance when we review.</span>
              )}
              {distStatus === "idle" && (
                <span className="text-silver/70">Enter both postcodes for an accurate estimate.</span>
              )}
            </div>

            {/* 5 · Car option (return only) */}
            {isReturn && localReturn && (
              <div>
                <span className={labelClass}>Should the car wait, or drop off &amp; return later?</span>
                <div className="grid grid-cols-2 gap-2 border border-line p-1">
                  {(
                    [
                      ["drop", "Drop & return later"],
                      ["wait", "Car waits with me"],
                    ] as ["drop" | "wait", string][]
                  ).map(([val, label]) => (
                    <button key={val} type="button" onClick={() => setCarOption(val)} className={segClass(carOption === val)}>
                      {label}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-[11px] text-silver/80">
                  {carOption === "wait"
                    ? "The car and chauffeur stay with you throughout (day rate)."
                    : "The car drops you off and returns to collect you later — ideal for local trips."}
                </p>
              </div>
            )}
            {isReturn && !localReturn && distStatus === "ok" && (
              <p className="text-[11px] leading-relaxed text-silver/80">
                For a trip this far from Birmingham the car stays with you for the day — it isn&rsquo;t
                practical for it to return to base between journeys.
              </p>
            )}

            {/* 6 · Party + stops */}
            <div className="grid grid-cols-2 gap-4">
              <div className="min-w-0">
                <label className={labelClass} htmlFor="ch-pax">
                  Passengers (max {maxPassengers})
                </label>
                <input
                  id="ch-pax"
                  type="number"
                  min={1}
                  max={maxPassengers}
                  inputMode="numeric"
                  className={inputClass}
                  value={passengers}
                  onChange={(e) => setPassengers(Math.min(maxPassengers, Math.max(1, Number(e.target.value))))}
                />
              </div>
              <div className="min-w-0">
                <label className={labelClass} htmlFor="ch-stops">
                  Extra stops
                </label>
                <input id="ch-stops" type="number" min={0} max={10} inputMode="numeric" className={inputClass} value={stops} onChange={(e) => setStops(Number(e.target.value))} />
              </div>
            </div>

            {/* 7 · Special requests */}
            <div>
              <label className={labelClass} htmlFor="ch-req">
                Any special requests
              </label>
              <textarea id="ch-req" rows={2} placeholder="Ribbons, champagne, child seat, specific route…" className={`${inputClass} min-h-[72px] py-3`} value={requests} onChange={(e) => setRequests(e.target.value)} />
            </div>
          </>
        )}

        {/* Contact — required before we reveal the estimate */}
        <div className="border-t border-line pt-5">
          <p className="text-[11px] uppercase tracking-wide2 text-champagne">Your details</p>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="min-w-0">
              <label className={labelClass} htmlFor="q-name">
                Name
              </label>
              <input id="q-name" type="text" autoComplete="name" placeholder="Your name" className={inputClass} value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="min-w-0">
              <label className={labelClass} htmlFor="q-mobile">
                Mobile
              </label>
              <input id="q-mobile" type="tel" autoComplete="tel" inputMode="tel" placeholder="07…" className={inputClass} value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </div>
          </div>
          <div className="mt-4">
            <label className={labelClass} htmlFor="q-email">
              Email <span className="normal-case text-silver/60">(optional)</span>
            </label>
            <input id="q-email" type="email" autoComplete="email" placeholder="you@email.com" className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={submit}
        disabled={!canSubmit || submitting}
        className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-2 bg-champagne px-6 text-xs font-medium uppercase tracking-wide2 text-black hover:bg-champagne-soft disabled:opacity-50"
      >
        {submitting ? "Getting your quote…" : "Get My Instant Quote"} <ArrowRight className="h-4 w-4" />
      </button>
      {!canSubmit && (
        <p className="mt-2 text-center text-[11px] text-silver/70">
          Add your name and mobile to see your instant estimate.
        </p>
      )}
      <p className="mt-4 text-[11px] leading-relaxed text-silver/70">
        Instant estimate, reviewed by our team before booking. Self-drive follows our published rates;
        chauffeur is priced by vehicle, journey and distance from Birmingham. Final pricing is confirmed
        with you.
      </p>
    </div>
  );
}

function Breakdown({ quote }: { quote: QuoteResult }) {
  return (
    <div className="border border-line bg-black/30 p-5">
      <ul className="divide-y divide-line">
        {quote.lines.map((line, i) => (
          <li key={i} className="flex items-start justify-between gap-4 py-3">
            <div>
              <p className="text-sm text-warm-white">{line.label}</p>
              {line.detail && <p className="text-[11px] text-silver">{line.detail}</p>}
            </div>
            <p className="whitespace-nowrap text-sm text-warm-white">{formatPrice(line.amount)}</p>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center justify-between border-t border-line pt-4">
        <span className="text-xs uppercase tracking-wide2 text-silver">Indicative total (from)</span>
        <span className="font-display text-3xl text-champagne">from {formatPrice(quote.total)}</span>
      </div>
    </div>
  );
}
