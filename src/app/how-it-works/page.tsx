import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyActionBar } from "@/components/StickyActionBar";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { rateStructure } from "@/lib/data/pricing";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "How It Works | Simple Luxury Car Hire",
  description:
    "How luxury car hire with CVS works — from enquiry to handover. Flexible daily, weekend, weekly and monthly rates, self-drive or chauffeur, delivery or collection.",
  path: "/how-it-works",
});

const steps = [
  { title: "Enquire", body: "Start a conversation via live chat, WhatsApp, our quick enquiry form or a phone call. Tell us the vehicle or occasion, your dates and location." },
  { title: "We confirm", body: "We check availability and confirm everything you need to know — the car, the requirements, delivery options and a clear quote." },
  { title: "Collection or delivery", body: "Collect from us in Birmingham, or we deliver your car to your door, hotel or venue — nationwide, subject to availability." },
  { title: "Enjoy & return", body: "We hand over an immaculately prepared car and stay on hand throughout. At the end of your hire, return or collection is just as simple." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="The Process"
        title={<>How It Works</>}
        intro="Luxury hire, made simple. From first message to final return, we make every step effortless."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "How It Works", path: "/how-it-works" }]} />

      <section className="shell py-16 md:py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className="border-t border-line pt-5">
              <span className="font-display text-4xl text-champagne">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-4 font-display text-2xl text-warm-white">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-silver">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Rate structure */}
      <section className="border-t border-line bg-charcoal/30 py-16 md:py-20">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Flexible Rates</span>
            <h2 className="mt-4 text-display-sm font-display text-warm-white">
              Hire by the day, weekend, week or month.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-silver">
              Every vehicle is priced across four rental periods, so you only pay for what you need.
              Indicative &ldquo;from&rdquo; prices are shown on each vehicle page — we&rsquo;ll
              confirm the exact quote, deposit and included mileage when you enquire.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {rateStructure.map((r, i) => (
              <Reveal key={r.period} delay={i * 0.05} className="border border-line bg-black/30 p-6 text-center">
                <p className="font-display text-2xl text-warm-white">{r.period}</p>
                <p className="mt-1 text-xs uppercase tracking-wide2 text-silver">{r.note}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-silver">
            Need help choosing?{" "}
            <Link href="/fleet" className="text-champagne underline">
              Browse the fleet
            </Link>{" "}
            or{" "}
            <Link href="/delivery" className="text-champagne underline">
              see delivery options
            </Link>
            .
          </p>
        </div>
      </section>

      <FinalCTA />
      <StickyActionBar context={{ page: "how-it-works" }} />
    </>
  );
}
