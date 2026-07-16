import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StickyActionBar } from "@/components/StickyActionBar";
import { CheckIcon } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Get a Quote | Self-Drive & Chauffeur Hire",
  description:
    "Get an instant indicative quote for self-drive luxury car hire or Rolls-Royce chauffeur hire with CVS Car Hire, Birmingham. Prices confirmed by our team.",
  path: "/quote",
});

const points = [
  "Instant indicative pricing from our published rate guide",
  "Self-drive daily, weekend, weekly and monthly rates",
  "Rolls-Royce chauffeur hire, Birmingham to nationwide",
  "No obligation — we confirm availability before booking",
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title={<>Get a Quote</>}
        intro="Build an instant, indicative quote for self-drive or chauffeur hire. Choose your vehicle and dates, and we'll confirm availability and finalise the details."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Get a Quote", path: "/quote" }]} />

      <section className="shell grid gap-12 py-16 lg:grid-cols-[1fr_1.1fr] md:py-20">
        <Reveal className="lg:pt-4">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-4 text-display-sm font-display text-warm-white">
            Transparent pricing, no surprises.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-silver">
            Our self-drive quotes follow the same clear rate structure for every vehicle — daily, a
            three-day rate, weekly and monthly — and always give you the best combination. Longer
            hires automatically benefit from the better rate.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                <span className="text-sm text-silver">{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-md text-xs leading-relaxed text-silver/70">
            Example: a 9-day self-drive hire is charged as one weekly rate plus two daily rates — you
            always pay the lower of the available combinations.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <QuoteForm />
        </Reveal>
      </section>

      <StickyActionBar context={{ page: "quote" }} />
    </>
  );
}
