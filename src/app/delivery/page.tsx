import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyActionBar } from "@/components/StickyActionBar";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { deliveryPricing } from "@/lib/data/pricing";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Nationwide Luxury Car Delivery | CVS Car Hire",
  description:
    "Nationwide UK delivery for luxury car hire. Your chosen vehicle delivered to your door, hotel or venue — subject to vehicle and location. Clear distance-based rates.",
  path: "/delivery",
});

export default function DeliveryPage() {
  return (
    <>
      <PageHero
        eyebrow="Nationwide UK"
        title={<>Delivery &amp; Collection</>}
        intro="Your chosen car, delivered to you. We bring the fleet across the UK — subject to vehicle and location — so distance is never a barrier to the right car."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Delivery", path: "/delivery" }]} />

      <section className="shell py-16 md:py-20">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">How Delivery Works</span>
          <p className="mt-6 text-lg leading-relaxed text-warm-white">{deliveryPricing.intro}</p>
          <p className="mt-4 text-sm leading-relaxed text-silver">{deliveryPricing.cap}</p>
        </Reveal>

        {/* Pricing table */}
        <Reveal className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="py-4 pr-4 text-xs uppercase tracking-wide2 text-champagne">
                  Distance from base
                </th>
                <th className="py-4 text-xs uppercase tracking-wide2 text-champagne">
                  Cost (each way)
                </th>
              </tr>
            </thead>
            <tbody>
              {deliveryPricing.bands.map((b) => (
                <tr key={b.distance} className="border-b border-line">
                  <td className="py-4 pr-4 text-warm-white">{b.distance}</td>
                  <td className="py-4 text-silver">{b.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-silver/80">
          Delivery and collection are charged individually (not combined). Rates are a guide — we
          confirm the exact cost for your address and dates when you enquire.
        </p>
      </section>

      <FinalCTA
        heading="Where shall we bring it?"
        copy="Tell us your location and dates, and we'll confirm delivery for your chosen vehicle."
      />
      <StickyActionBar context={{ page: "delivery" }} />
    </>
  );
}
