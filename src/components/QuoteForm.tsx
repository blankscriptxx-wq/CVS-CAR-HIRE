"use client";

import { useMemo, useState } from "react";
import { vehicles } from "@/lib/data/vehicles";
import { vehicleName } from "@/lib/vehicleDisplay";
import { formatPrice } from "@/lib/data/pricing";
import {
  selfDriveQuote,
  selfDriveRatesFor,
  chauffeurQuote,
  daysBetween,
  type QuoteResult,
} from "@/lib/quote";
import { chauffeurRates, chauffeurDistanceBands, getDistanceBand } from "@/lib/data/chauffeur";
import { whatsappLink } from "@/lib/whatsapp";
import { track, captureUtm } from "@/lib/analytics";
import { openLiveChat } from "@/components/ActionLinks";
import { ArrowRight, WhatsAppIcon, ChatIcon, CheckIcon } from "@/components/ui/Icons";

type Mode = "self-drive" | "chauffeur";

const inputClass =
  "w-full min-w-0 min-h-[48px] bg-black/40 border border-line px-4 text-warm-white placeholder:text-silver/60 focus:border-champagne focus:outline-none";
const dateClass = `${inputClass} appearance-none`;
const labelClass = "block text-[11px] uppercase tracking-wide2 text-silver mb-2";

// Vehicles that have a full self-drive rate set (quotable).
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

export function QuoteForm() {
  const [mode, setMode] = useState<Mode>("self-drive");

  // Self-drive state
  const [sdVehicle, setSdVehicle] = useState(selfDriveVehicles[0]?.slug ?? "");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // Chauffeur state
  const [chVehicle, setChVehicle] = useState(chauffeurRates[0]?.slug ?? "");
  const [chDate, setChDate] = useState("");
  const [hours, setHours] = useState(3);
  const [bandId, setBandId] = useState(chauffeurDistanceBands[0]?.id ?? "local");

  // Contact
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const days = useMemo(() => (start && end ? daysBetween(start, end) : 0), [start, end]);

  const selfQuote = useMemo(() => {
    const v = selfDriveVehicles.find((x) => x.slug === sdVehicle);
    const rates = v ? selfDriveRatesFor(v) : null;
    if (!rates || days < 1) return null;
    return selfDriveQuote(days, rates);
  }, [sdVehicle, days]);

  const chQuote = useMemo(() => {
    const rate = chauffeurRates.find((r) => r.slug === chVehicle);
    const band = getDistanceBand(bandId);
    if (!rate || !band) return null;
    return chauffeurQuote(hours, rate, band);
  }, [chVehicle, hours, bandId]);

  const activeQuote = mode === "self-drive" ? selfQuote : chQuote;

  const summary = useMemo(() => {
    if (mode === "self-drive") {
      const v = selfDriveVehicles.find((x) => x.slug === sdVehicle);
      if (!v || !selfQuote) return "";
      return `Self-drive hire of the ${vehicleName(v)} for ${days} day${days === 1 ? "" : "s"} (${start} to ${end}). Indicative total: ${formatPrice(selfQuote.total)}.`;
    }
    const rate = chauffeurRates.find((r) => r.slug === chVehicle);
    const band = getDistanceBand(bandId);
    if (!rate || !band || !chQuote) return "";
    return `Chauffeur hire of the ${rate.label}${chDate ? ` on ${chDate}` : ""}, ${Math.max(rate.minimumHours, hours)} hours, ${band.label}. Indicative total: ${chQuote.from ? "from " : ""}${formatPrice(chQuote.total)}.`;
  }, [mode, sdVehicle, selfQuote, days, start, end, chVehicle, bandId, chQuote, chDate, hours]);

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
            <div>
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
              <p className="mt-2 text-[11px] text-silver/80">
                Chauffeur hire currently available for our Rolls-Royce collection.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="min-w-0">
                <label className={labelClass} htmlFor="ch-date">
                  Date
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
                <label className={labelClass} htmlFor="ch-hours">
                  Hours (min 3)
                </label>
                <input
                  id="ch-hours"
                  type="number"
                  min={3}
                  max={24}
                  inputMode="numeric"
                  className={inputClass}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                />
              </div>
            </div>
            <div>
              <label className={labelClass} htmlFor="ch-band">
                Destination (from Birmingham)
              </label>
              <select
                id="ch-band"
                className={inputClass}
                value={bandId}
                onChange={(e) => setBandId(e.target.value)}
              >
                {chauffeurDistanceBands.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.label}
                  </option>
                ))}
              </select>
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
        team before booking. Self-drive rates follow our published pricing guide; chauffeur rates are
        a guide based on the vehicle, hours and distance from Birmingham.
      </p>
    </div>
  );
}
