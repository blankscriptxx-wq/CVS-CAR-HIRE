import { Suspense } from "react";
import type { Metadata } from "next";
import { vehicles } from "@/lib/data/vehicles";
import { FleetShowroom } from "@/components/fleet/FleetShowroom";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyActionBar } from "@/components/StickyActionBar";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Fleet | Luxury, Supercar & Prestige Car Hire",
  description:
    "Explore the CVS Car Hire fleet — supercars, luxury 4x4s, performance, prestige and convertibles for self-drive and chauffeur hire in Birmingham and across the UK.",
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
        <FleetShowroom vehicles={vehicles} />
      </Suspense>
      <FinalCTA />
      <StickyActionBar context={{ page: "fleet" }} />
    </>
  );
}
