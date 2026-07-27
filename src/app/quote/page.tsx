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
  "Instant estimate in under a minute — self-drive or chauffeur",
  "Self-drive: daily, weekend, weekly and monthly rates",
  "Chauffeur: priced by vehicle, journey and distance, Birmingham to nationwide",
  "Reviewed by our team — we'll confirm your final quote personally",
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title={<>Get a Quote</>}
        intro="Get an instant estimate for self-drive or chauffeur hire. Tell us a few details and see your indicative price in seconds — our team then reviews every request and confirms your final quote."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Get a Quote", path: "/quote" }]} />

      <section className="shell grid gap-12 py-16 lg:grid-cols-[1fr_1.1fr] md:py-20">
        <Reveal className="lg:pt-4">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-4 text-display-sm font-display text-warm-white">
            An instant quote, personally confirmed.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-silver">
            Self-drive follows our clear published rates and always gives you the best combination.
            Chauffeur hire is priced by the vehicle, your journey and the distance from Birmingham —
            a one-way drop-off, a local drop-and-return, or a full day with the car at your side.
            Whatever you choose, our team reviews it and confirms your final price.
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
