import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getFleetVehicles } from "@/lib/data/vehicles";
import { collections } from "@/lib/data/collections";
import { FleetShowroom } from "@/components/fleet/FleetShowroom";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyActionBar } from "@/components/StickyActionBar";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Fleet | Luxury, Supercar & Prestige Car Hire",
  description:
    "The CVS Car Hire fleet — supercars, luxury 4x4s, performance, prestige and convertibles, self-drive or chauffeur, in Birmingham and the UK.",
  path: "/fleet",
});

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="The Digital Showroom"
        title={<>Our Fleet</>}
        intro="Over 50 luxury, prestige and performance vehicles. Filter, shortlist and find the car for your occasion — then check availability in a couple of taps."
      />
      <Suspense fallback={<div className="shell py-20 text-silver">Loading the fleet…</div>}>
        <FleetShowroom vehicles={getFleetVehicles()} />
      </Suspense>

      {/* Hire by marque — links to the collection landing pages */}
      <section className="border-t border-line py-12">
        <div className="shell">
          <span className="eyebrow">Hire by marque</span>
          <div className="mt-5 flex flex-wrap gap-2">
            {collections.map((c) => (
              <Link
                key={c.slug}
                href={`/hire/${c.slug}`}
                className="border border-line px-4 py-2 text-xs uppercase tracking-wide2 text-silver hover:border-champagne hover:text-warm-white"
              >
                {c.heading}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyActionBar context={{ page: "fleet" }} />
    </>
  );
}
