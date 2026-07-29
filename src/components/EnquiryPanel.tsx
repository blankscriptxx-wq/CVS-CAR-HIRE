"use client";

import { useState } from "react";
import { track, captureUtm } from "@/lib/analytics";
import { sendToAniro } from "@/lib/aniro";
import { CallLink } from "@/components/ActionLinks";
import { ArrowRight, ChatIcon, CheckIcon, PhoneIcon } from "@/components/ui/Icons";
import { vehicles } from "@/lib/data/vehicles";
import { categories } from "@/lib/data/categories";
import { vehicleName } from "@/lib/vehicleDisplay";

type Fields = {
  vehicle: string;
  start: string;
  end: string;
  collection: string;
  age: string;
  occasion: string;
  name: string;
  mobile: string;
};

const EMPTY: Fields = {
  vehicle: "",
  start: "",
  end: "",
  collection: "",
  age: "",
  occasion: "",
  name: "",
  mobile: "",
};

const inputClass =
  "w-full min-w-0 min-h-[48px] bg-black/40 border border-line px-4 text-warm-white placeholder:text-silver/60 focus:border-champagne focus:outline-none";
// Date/native inputs: strip iOS intrinsic sizing so they don't overflow the grid.
const dateClass = `${inputClass} appearance-none [&::-webkit-date-and-time-value]:text-left`;
const labelClass = "block text-[11px] uppercase tracking-wide2 text-silver mb-2";

/**
 * Staged, progressive quick-enquiry panel. On completion it POSTs to the secure
 * /api/enquiry route (CRM/Respond.io forwarding) and offers to continue on
 * the Aniro chat with the collected context.
 */
export function EnquiryPanel({
  presetVehicle,
  compact = false,
}: {
  presetVehicle?: string;
  compact?: boolean;
}) {
  const [step, setStep] = useState(0);
  const [fields, setFields] = useState<Fields>({ ...EMPTY, vehicle: presetVehicle ?? "" });
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (k: keyof Fields, v: string) => setFields((f) => ({ ...f, [k]: v }));

  /** Full lead + vehicle details, composed for the Aniro chat hand-off. */
  const leadMessage = [
    "New website availability enquiry.",
    fields.name ? `Name: ${fields.name}` : "",
    fields.mobile ? `Mobile: ${fields.mobile}` : "",
    fields.vehicle ? `Interested in: ${fields.vehicle}` : "Interested in: not sure yet",
    fields.start ? `Dates: ${fields.start}${fields.end ? ` to ${fields.end}` : ""}` : "",
    fields.collection ? `Collection/delivery: ${fields.collection}` : "",
    fields.age ? `Driver age: ${fields.age}` : "",
    fields.occasion ? `Occasion: ${fields.occasion}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const next = () => {
    if (step === 0) track("begin_enquiry", { vehicle: fields.vehicle || "unspecified" });
    setStep((s) => Math.min(s + 1, 2));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  async function submit() {
    setSubmitting(true);
    track("submit_enquiry", { vehicle: fields.vehicle || "unspecified", occasion: fields.occasion });
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, ...captureUtm(), source: "quick-enquiry" }),
      });
    } catch {
      // Non-blocking: the chat hand-off still works.
    }
    // Hand the collected customer + vehicle details to the Aniro chat widget.
    sendToAniro(leadMessage);
    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="border border-line bg-charcoal/70 p-6 backdrop-blur sm:p-8">
        <div className="flex items-center gap-3 text-champagne">
          <CheckIcon className="h-6 w-6" />
          <h3 className="font-display text-2xl text-warm-white">Enquiry received</h3>
        </div>
        <p className="mt-3 text-sm text-silver">
          Thank you{fields.name ? `, ${fields.name.split(" ")[0]}` : ""}. Our team will be in touch
          shortly. For the fastest response, continue the conversation now:
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
            context={{ source: "enquiry-success" }}
            className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 border border-line px-6 text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne"
          >
            <PhoneIcon className="h-4 w-4 text-champagne" /> Call us
          </CallLink>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-line bg-charcoal/70 p-6 backdrop-blur sm:p-8">
      <div className="flex items-center justify-between">
        <div>
          <span className="eyebrow">Check Availability</span>
          <h3 className={`mt-2 font-display ${compact ? "text-2xl" : "text-3xl"} text-warm-white`}>
            Find your car
          </h3>
        </div>
        <span className="text-xs text-silver">Step {step + 1} of 3</span>
      </div>

      {/* Progress */}
      <div className="mt-4 flex gap-1.5" aria-hidden>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-0.5 flex-1 transition-colors ${i <= step ? "bg-champagne" : "bg-line"}`}
          />
        ))}
      </div>

      <div className="mt-6 space-y-5">
        {step === 0 && (
          <>
            <div>
              <label className={labelClass} htmlFor="q-vehicle">
                Vehicle or category
              </label>
              <select
                id="q-vehicle"
                className={inputClass}
                value={fields.vehicle}
                onChange={(e) => set("vehicle", e.target.value)}
              >
                <option value="">Any / not sure yet</option>
                <optgroup label="Categories">
                  {categories.map((c) => (
                    <option key={c.slug} value={c.label}>
                      {c.label}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Vehicles">
                  {vehicles.map((v) => (
                    <option key={v.slug} value={vehicleName(v)}>
                      {vehicleName(v)}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="min-w-0">
                <label className={labelClass} htmlFor="q-start">
                  Start date
                </label>
                <input
                  id="q-start"
                  type="date"
                  className={dateClass}
                  value={fields.start}
                  onChange={(e) => set("start", e.target.value)}
                />
              </div>
              <div className="min-w-0">
                <label className={labelClass} htmlFor="q-end">
                  End date
                </label>
                <input
                  id="q-end"
                  type="date"
                  className={dateClass}
                  value={fields.end}
                  onChange={(e) => set("end", e.target.value)}
                />
              </div>
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <div>
              <label className={labelClass} htmlFor="q-collection">
                Collection or delivery
              </label>
              <select
                id="q-collection"
                className={inputClass}
                value={fields.collection}
                onChange={(e) => set("collection", e.target.value)}
              >
                <option value="">Select…</option>
                <option value="collection from Birmingham">Collection (Birmingham)</option>
                <option value="delivery">Delivery to me</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="min-w-0">
                <label className={labelClass} htmlFor="q-age">
                  Driver age
                </label>
                <input
                  id="q-age"
                  type="number"
                  min={18}
                  max={99}
                  inputMode="numeric"
                  placeholder="e.g. 28"
                  className={inputClass}
                  value={fields.age}
                  onChange={(e) => set("age", e.target.value)}
                />
              </div>
              <div className="min-w-0">
                <label className={labelClass} htmlFor="q-occasion">
                  Occasion
                </label>
                <select
                  id="q-occasion"
                  className={inputClass}
                  value={fields.occasion}
                  onChange={(e) => set("occasion", e.target.value)}
                >
                  <option value="">Select…</option>
                  {["Self-drive", "Wedding", "Prom", "Corporate", "Airport transfer", "Production", "Other"].map(
                    (o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label className={labelClass} htmlFor="q-name">
                Name
              </label>
              <input
                id="q-name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className={inputClass}
                value={fields.name}
                onChange={(e) => set("name", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="q-mobile">
                Mobile number
              </label>
              <input
                id="q-mobile"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="07…"
                className={inputClass}
                value={fields.mobile}
                onChange={(e) => set("mobile", e.target.value)}
              />
            </div>
            <p className="text-[11px] leading-relaxed text-silver/80">
              By submitting you agree to be contacted about your enquiry. No spam, ever.
            </p>
          </>
        )}
      </div>

      {/* Controls */}
      <div className="mt-7 flex items-center gap-3">
        {step > 0 && (
          <button
            type="button"
            onClick={back}
            className="min-h-[48px] px-4 text-xs uppercase tracking-wide2 text-silver hover:text-warm-white"
          >
            Back
          </button>
        )}
        {step < 2 ? (
          <button
            type="button"
            onClick={next}
            className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 bg-champagne px-6 text-xs font-medium uppercase tracking-wide2 text-black hover:bg-champagne-soft"
          >
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={submitting}
            className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 bg-champagne px-6 text-xs font-medium uppercase tracking-wide2 text-black hover:bg-champagne-soft disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Submit Enquiry"} <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Direct chat shortcut */}
      <div className="mt-4 border-t border-line pt-4 text-center">
        <button
          type="button"
          onClick={() => sendToAniro(leadMessage)}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wide2 text-silver hover:text-champagne"
        >
          <ChatIcon className="h-4 w-4 text-champagne" /> Prefer to chat? Message us now
        </button>
      </div>

    </div>
  );
}
