import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyActionBar } from "@/components/StickyActionBar";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArrowRight } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services | Luxury, Supercar, Wedding & Chauffeur Hire",
  description:
    "Explore CVS Car Hire services — supercar, luxury, prestige and performance hire, chauffeur, weddings, proms, corporate, airport transfers, production and nationwide delivery.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={<>Services</>}
        intro="Whatever the occasion, we have a service tailored to it — and a fleet of over 50 vehicles to match. Explore how we can help."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />

      <section className="shell py-14 md:py-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col justify-between border border-line bg-charcoal/40 p-6 transition-colors hover:border-champagne"
              >
                <div>
                  <span className="eyebrow text-[10px]">{s.hero.eyebrow}</span>
                  <h2 className="mt-3 font-display text-2xl text-warm-white">{s.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-silver">{s.hero.intro}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-wide2 text-champagne">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
      <StickyActionBar context={{ page: "services" }} />
    </>
  );
}
