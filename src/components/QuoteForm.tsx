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
  zoneLabels,
  type ChauffeurZone,
} from "@/lib/data/chauffeur";
import { airports } from "@/lib/data/airports";
import { whatsappLink } from "@/lib/whatsapp";
import { track, captureUtm } from "@/lib/analytics";
import { openLiveChat } from "@/components/ActionLinks";
import { ArrowRight, WhatsAppIcon, ChatIcon, CheckIcon } from "@/components/ui/Icons";

type Mode = "self-drive" | "chauffeur";

const inputClass =
  "w-full min-w-0 min-h-[48px] bg-black/40 border border-line px-4 text-warm-white placeholder:text-silver/60 focus:border-champagne focus:outline-none";
const dateClass = `${inputClass} appearance-none`;
const labelClass = "block text-[11px] uppercase tracking-wide2 text-silver mb-2";

const selfDriveVehicles = vehicles.filter((v) => selfDriveRatesFor(v) !== null);

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
        <span className="text-xs uppercase tracking-wide2 text-silver">
          Indicative total{quote.from ? " (from)" : ""}
        </span>
        <span className="font-display text-3xl text-champagne">
          {quote.from ? "from " : ""}
          {formatPrice(quote.total)}
        </span>
      </div>
    </div>
  );
}

type DistStatus = "idle" | "loading" | "ok" | "error";

export function QuoteForm() {
  const [mode, setMode] = useState<Mode>("self-drive");

  // Self-drive state
  const [sdVehicle, setSdVehicle] = useState(selfDriveVehicles[0]?.slug ?? "");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // Chauffeur state
  const [chVehicle, setChVehicle] = useState(chauffeurRates[0]?.slug ?? "");
  const [eventType, setEventType] = useState<string>(chauffeurEventTypes[0]);
  const [chDate, setChDate] = useState("");
  const [chTime, setChTime] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [airportCode, setAirportCode] = useState("");
  const [journey, setJourney] = useState<ChauffeurJourney>("return");
  const [stays, setStays] = useState(false);
  const [distanceMiles, setDistanceMiles] = useState<number>(0);
  const [zone, setZone] = useState<ChauffeurZone>("regional");
  const [distStatus, setDistStatus] = useState<DistStatus>("idle");
  const [waitingHours, setWaitingHours] = useState(8);
  const [stops, setStops] = useState(0);
  const [passengers, setPassengers] = useState(2);
  const [requests, setRequests] = useState("");

  // Contact
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Auto-estimate mileage from pickup + drop-off postcodes (debounced).
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
          if (data.zone) setZone(data.zone as ChauffeurZone);
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

  const days = useMemo(() => (start && end ? daysBetween(start, end) : 0), [start, end]);

  const selfQuote = useMemo(() => {
    const v = selfDriveVehicles.find((x) => x.slug === sdVehicle);
    const rates = v ? selfDriveRatesFor(v) : null;
    if (!rates || days < 1) return null;
    return selfDriveQuote(days, rates);
  }, [sdVehicle, days]);

  const chRate = chauffeurRates.find((r) => r.slug === chVehicle);
  const maxPassengers = chRate?.maxPassengers ?? 4;

  // Keep passengers within the selected vehicle's capacity.
  useEffect(() => {
    setPassengers((p) => Math.min(p, maxPassengers));
  }, [maxPassengers]);

  const chQuote = useMemo(() => {
    if (!chRate) return null;
    return chauffeurQuote(
      { journey, stays, distanceMiles, hours: waitingHours, zone, stops },
      chRate
    );
  }, [chRate, journey, stays, distanceMiles, waitingHours, zone, stops]);

  const activeQuote = mode === "self-drive" ? selfQuote : chQuote;

  const summary = useMemo(() => {
    if (mode === "self-drive") {
      const v = selfDriveVehicles.find((x) => x.slug === sdVehicle);
      if (!v || !selfQuote) return "";
      return `Self-drive hire of the ${vehicleName(v)} for ${days} day${days === 1 ? "" : "s"} (${start} to ${end}). Indicative total: ${formatPrice(selfQuote.total)}.`;
    }
    const rate = chauffeurRates.find((r) => r.slug === chVehicle);
    if (!rate || !chQuote) return "";
    const when = [chDate, chTime].filter(Boolean).join(" ");
    const svc =
      journey === "return" && stays
        ? `full day, car waits (${waitingHours}h, ${zoneLabels[zone]})`
        : journey === "return"
          ? "return drop-off"
          : "one-way drop-off";
    const route = pickup && dropoff ? ` ${pickup} → ${dropoff}` : "";
    const milesTxt = stays ? "" : `, ~${distanceMiles} miles one-way`;
    const stopsTxt = stops > 0 ? `, ${stops} stop${stops === 1 ? "" : "s"}` : "";
    const pax = ` for ${passengers} passenger${passengers === 1 ? "" : "s"}`;
    const req = requests ? ` Special requests: ${requests}.` : "";
    return `${eventType} chauffeur hire of the ${rate.label}${when ? ` on ${when}` : ""} —${route} ${svc}${milesTxt}${stopsTxt}${pax}. Indicative total: from ${formatPrice(chQuote.total)}.${req}`;
  }, [
    mode, sdVehicle, selfQuote, days, start, end,
    chVehicle, chQuote, chDate, chTime, waitingHours, eventType, stays,
    journey, distanceMiles, zone, stops, pickup, dropoff, passengers, requests,
  ]);

  const waMessage = `Hi CVS Car Hire, I'd like to confirm this quote — ${summary}${name ? ` My name is ${name}.` : ""}`;

  async function submit() {
    if (!activeQuote) return;
    setSubmitting(true);
    track("submit_enquiry", { source: "quote", mode, total: activeQuote.total });
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          mobile,
          source: `quote-${mode}`,
          message: summary,
          vehicle: mode === "self-drive" ? sdVehicle : chVehicle,
          ...(mode === "chauffeur"
            ? { pickup, dropoff, date: chDate, time: chTime, passengers, requests, eventType }
            : { start, end }),
          ...captureUtm(),
        }),
      });
    } catch {
      /* non-blocking */
    }
    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="border border-line bg-charcoal/70 p-6 backdrop-blur sm:p-8">
        <div className="flex items-center gap-3 text-champagne">
          <CheckIcon className="h-6 w-6" />
          <h3 className="font-display text-2xl text-warm-white">Quote request received</h3>
        </div>
        <p className="mt-3 text-sm text-silver">
          Thank you{name ? `, ${name.split(" ")[0]}` : ""}. We&rsquo;ll confirm your quote and
          availability shortly. For the fastest response, continue now:
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("click_whatsapp", { source: "quote-success" })}
            className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 bg-champagne px-6 text-xs font-medium uppercase tracking-wide2 text-black hover:bg-champagne-soft"
          >
            <WhatsAppIcon className="h-4 w-4" /> Continue on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => openLiveChat({ source: "quote-success" })}
            className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 border border-line px-6 text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne"
          >
            <ChatIcon className="h-4 w-4 text-champagne" /> Start Live Chat
          </button>
        </div>
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
            className={`min-h-[44px] text-xs font-medium uppercase tracking-wide2 transition-colors ${
              mode === m ? "bg-champagne text-black" : "text-silver hover:text-warm-white"
            }`}
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
                <input
                  id="sd-start"
                  type="date"
                  className={dateClass}
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                />
              </div>
              <div className="min-w-0">
                <label className={labelClass} htmlFor="sd-end">
                  End date
                </label>
                <input
                  id="sd-end"
                  type="date"
                  className={dateClass}
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                />
              </div>
            </div>
            {start && end && days < 1 && (
              <p className="text-xs text-champagne-soft">
                Please choose an end date after the start date.
              </p>
            )}
            {selfQuote && (
              <>
                <p className="text-xs uppercase tracking-wide2 text-silver">
                  {days} day{days === 1 ? "" : "s"} hire
                </p>
                <Breakdown quote={selfQuote} />
              </>
            )}
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="min-w-0">
                <label className={labelClass} htmlFor="ch-event">
                  Event type
                </label>
                <select
                  id="ch-event"
                  className={inputClass}
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                >
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
                <select
                  id="ch-vehicle"
                  className={inputClass}
                  value={chVehicle}
                  onChange={(e) => setChVehicle(e.target.value)}
                >
                  {chauffeurRates.map((r) => (
                    <option key={r.slug} value={r.slug}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date + time */}
            <div className="grid grid-cols-2 gap-4">
              <div className="min-w-0">
                <label className={labelClass} htmlFor="ch-date">
                  Date of hire
                </label>
                <input
                  id="ch-date"
                  type="date"
                  className={dateClass}
                  value={chDate}
                  onChange={(e) => setChDate(e.target.value)}
                />
              </div>
              <div className="min-w-0">
                <label className={labelClass} htmlFor="ch-time">
                  Pick-up time
                </label>
                <input
                  id="ch-time"
                  type="time"
                  className={dateClass}
                  value={chTime}
                  onChange={(e) => setChTime(e.target.value)}
                />
              </div>
            </div>

            {/* Airport picker (fills drop-off for airport transfers) */}
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
                <p className="mt-2 text-[11px] text-silver/80">
                  Selecting an airport fills the drop-off location. Swap pick-up/drop-off for arrivals.
                </p>
              </div>
            )}

            {/* Pick-up / drop-off postcodes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="min-w-0">
                <label className={labelClass} htmlFor="ch-pickup">
                  Pick-up postcode
                </label>
                <input
                  id="ch-pickup"
                  type="text"
                  autoComplete="postal-code"
                  placeholder="e.g. B1 1AA"
                  className={inputClass}
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value.toUpperCase())}
                />
              </div>
              <div className="min-w-0">
                <label className={labelClass} htmlFor="ch-dropoff">
                  Drop-off postcode
                </label>
                <input
                  id="ch-dropoff"
                  type="text"
                  autoComplete="postal-code"
                  placeholder="e.g. TW6 1EW"
                  className={inputClass}
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value.toUpperCase())}
                />
              </div>
            </div>

            {/* Distance status */}
            <div className="text-[11px]">
              {distStatus === "loading" && <span className="text-silver">Calculating mileage…</span>}
              {distStatus === "ok" && (
                <span className="text-champagne-soft">
                  ≈ {distanceMiles} miles one-way · {zoneLabels[zone]}{" "}
                  <span className="text-silver">— estimated, confirmed on enquiry</span>
                </span>
              )}
              {distStatus === "error" && (
                <span className="text-silver">
                  Couldn&rsquo;t find those postcodes — you can set the distance below manually.
                </span>
              )}
              {distStatus === "idle" && (
                <span className="text-silver/70">
                  Enter both postcodes for an automatic mileage estimate.
                </span>
              )}
            </div>

            {/* Journey + stops */}
            <div className="grid grid-cols-2 gap-4">
              <div className="min-w-0">
                <span className={labelClass}>Journey</span>
                <div className="grid grid-cols-2 gap-2 border border-line p-1">
                  {(
                    [
                      ["one-way", "One-way"],
                      ["return", "Return"],
                    ] as [ChauffeurJourney, string][]
                  ).map(([val, label]) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setJourney(val)}
                      className={`min-h-[44px] text-[11px] font-medium uppercase tracking-wide2 transition-colors ${
                        journey === val ? "bg-champagne text-black" : "text-silver hover:text-warm-white"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="min-w-0">
                <label className={labelClass} htmlFor="ch-stops">
                  Extra stops
                </label>
                <input
                  id="ch-stops"
                  type="number"
                  min={0}
                  max={10}
                  inputMode="numeric"
                  className={inputClass}
                  value={stops}
                  onChange={(e) => setStops(Number(e.target.value))}
                />
              </div>
            </div>

            {/* Does the car wait? — only for return journeys */}
            {journey === "return" && (
              <div>
                <span className={labelClass}>Does the car wait with you?</span>
                <div className="grid grid-cols-2 gap-2 border border-line p-1">
                  {(
                    [
                      [false, "No — drop & return"],
                      [true, "Yes — car waits"],
                    ] as [boolean, string][]
                  ).map(([val, label]) => (
                    <button
                      key={String(val)}
                      type="button"
                      onClick={() => setStays(val)}
                      className={`min-h-[44px] px-2 text-[11px] font-medium uppercase tracking-wide2 transition-colors ${
                        stays === val ? "bg-champagne text-black" : "text-silver hover:text-warm-white"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-[11px] text-silver/80">
                  {stays
                    ? `Full-day chauffeured hire — the car stays with you all day. Priced at the ${zoneLabels[zone].toLowerCase()} day rate.`
                    : "The car drops you off and returns to collect you later — priced on mileage."}
                </p>
              </div>
            )}
            {journey === "one-way" && (
              <p className="text-[11px] text-silver/80">
                One-way drop-off — the car doesn&rsquo;t wait. Choose Return above if you need the car
                to bring you back or wait with you.
              </p>
            )}

            {/* Distance + passengers */}
            <div className="grid grid-cols-2 gap-4">
              <div className="min-w-0">
                <label className={labelClass} htmlFor="ch-miles">
                  Distance (miles, one-way)
                </label>
                <input
                  id="ch-miles"
                  type="number"
                  min={0}
                  max={600}
                  inputMode="numeric"
                  className={inputClass}
                  value={distanceMiles}
                  onChange={(e) => {
                    setDistanceMiles(Number(e.target.value));
                    setDistStatus("idle");
                  }}
                />
              </div>
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
                  onChange={(e) =>
                    setPassengers(Math.min(maxPassengers, Math.max(1, Number(e.target.value))))
                  }
                />
              </div>
            </div>

            {/* Duration — only for a full-day (car waits) hire */}
            {journey === "return" && stays && (
              <div className="min-w-0">
                <label className={labelClass} htmlFor="ch-hours">
                  Duration (hours) — day rate covers 8
                </label>
                <input
                  id="ch-hours"
                  type="number"
                  min={1}
                  max={24}
                  inputMode="numeric"
                  className={inputClass}
                  value={waitingHours}
                  onChange={(e) => setWaitingHours(Number(e.target.value))}
                />
              </div>
            )}
            <div>
              <label className={labelClass} htmlFor="ch-req">
                Any special requests
              </label>
              <textarea
                id="ch-req"
                rows={2}
                placeholder="Ribbons, champagne, child seat, specific route…"
                className={`${inputClass} min-h-[72px] py-3`}
                value={requests}
                onChange={(e) => setRequests(e.target.value)}
              />
            </div>

            {chQuote && <Breakdown quote={chQuote} />}
          </>
        )}

        {/* Contact */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="min-w-0">
            <label className={labelClass} htmlFor="q-name">
              Name
            </label>
            <input
              id="q-name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              className={inputClass}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="min-w-0">
            <label className={labelClass} htmlFor="q-mobile">
              Mobile
            </label>
            <input
              id="q-mobile"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="07…"
              className={inputClass}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={submit}
          disabled={!activeQuote || submitting}
          className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 bg-champagne px-6 text-xs font-medium uppercase tracking-wide2 text-black hover:bg-champagne-soft disabled:opacity-50"
        >
          {submitting ? "Sending…" : "Request This Quote"} <ArrowRight className="h-4 w-4" />
        </button>
        <a
          href={whatsappLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("click_whatsapp", { source: "quote" })}
          className={`inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 border border-line px-6 text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne ${
            activeQuote ? "" : "pointer-events-none opacity-50"
          }`}
        >
          <WhatsAppIcon className="h-4 w-4 text-champagne" /> Send on WhatsApp
        </a>
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-silver/70">
        This is an indicative quote. Final pricing, deposit and availability are confirmed by our
        team before booking. Self-drive rates follow our published pricing guide; chauffeur rates
        are calculated from the vehicle, hours and mileage (estimated from your postcodes), and are
        benchmarked to typical UK luxury-chauffeur pricing (inclusive of chauffeur, fuel and parking).
      </p>
    </div>
  );
}
