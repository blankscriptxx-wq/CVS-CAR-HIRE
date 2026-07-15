import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/lib/data/locations";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyActionBar } from "@/components/StickyActionBar";
import { ArrowRight } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Locations | Luxury Car Hire Across the UK",
  description:
    "Luxury, supercar and prestige car hire across the UK. Based in Birmingham with nationwide delivery to London, Manchester and beyond, subject to availability.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Serve"
        title={<>Locations</>}
        intro="Based in Birmingham, serving the UK. Explore luxury car hire in your area — with nationwide delivery available, subject to vehicle and location."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }]} />

      <section className="shell py-14 md:py-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l, i) => (
            <Reveal key={l.slug} delay={(i % 3) * 0.05}>
              <Link
                href={`/locations/${l.slug}`}
                className="group flex h-full flex-col justify-between border border-line bg-charcoal/40 p-6 transition-colors hover:border-champagne"
              >
                <div>
                  <span className="eyebrow text-[10px]">{l.region}</span>
                  <h2 className="mt-3 font-display text-2xl text-warm-white">
                    Luxury Car Hire {l.city}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-silver line-clamp-3">{l.intro}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-wide2 text-champagne">
                  Explore {l.city} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
      <StickyActionBar context={{ page: "locations" }} />
    </>
  );
}
