import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocationBySlug } from "@/lib/data/locations";
import { CITY_SERVICES, getCityService } from "@/lib/data/cityServices";
import { getVehicleBySlug } from "@/lib/data/vehicles";
import type { Vehicle } from "@/lib/types";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { VehicleCard } from "@/components/VehicleCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EnquiryPanel } from "@/components/EnquiryPanel";
import { StickyActionBar } from "@/components/StickyActionBar";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildMetadata, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

/** Only the 75 valid city × service combinations render; everything else 404s. */
export const dynamicParams = false;

export function generateStaticParams() {
  return locations.flatMap((loc) =>
    CITY_SERVICES.map((svc) => ({ city: loc.slug, service: svc.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city, service } = await params;
  const loc = getLocationBySlug(city);
  const svc = getCityService(service);
  if (!loc || !svc) return {};
  return buildMetadata({
    title: svc.metaTitle(loc),
    description: svc.metaDescription(loc),
    path: `/${loc.slug}/${svc.slug}`,
  });
}

function InfoList({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="border-t border-line pt-5">
      <h3 className="eyebrow">{title}</h3>
      <ul className="mt-3 space-y-1.5">
        {items.map((it) => (
          <li key={it} className="text-sm text-silver">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city, service } = await params;
  const loc = getLocationBySlug(city);
  const svc = getCityService(service);
  if (!loc || !svc) notFound();

  const fleet: Vehicle[] = svc.fleet
    .map(getVehicleBySlug)
    .filter((v): v is Vehicle => Boolean(v));
  const heroImage = fleet[0]?.heroImage ?? {
    src: `/images/locations/${loc.slug}.jpg`,
    alt: `${svc.name} in ${loc.city}`,
    placeholder: true as const,
  };

  const otherServices = CITY_SERVICES.filter((s) => s.slug !== svc.slug);
  const nearby = (loc.nearbyLocations ?? [])
    .map(getLocationBySlug)
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  const crumbs = [
    { name: "Home", path: "/" },
    { name: loc.city, path: `/locations/${loc.slug}` },
    { name: svc.name, path: `/${loc.slug}/${svc.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${svc.name} in ${loc.city}`,
            description: svc.metaDescription(loc),
            path: `/${loc.slug}/${svc.slug}`,
          }),
          faqSchema(svc.faqs(loc)),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHero
        eyebrow={`${svc.eyebrow} • ${loc.city}`}
        title={
          <>
            {svc.name} in {loc.city}
          </>
        }
        intro={svc.intro(loc)}
        image={heroImage}
      />
      <Breadcrumbs items={crumbs} />

      {/* Local context */}
      <section className="shell grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr] md:py-20">
        <Reveal>
          <span className="eyebrow">{svc.angleTitle} {loc.city}</span>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-warm-white">
            {svc.angle(loc)}
          </p>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-silver">
            {loc.delivery}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="inline-flex min-h-[48px] items-center justify-center bg-champagne px-6 text-xs font-medium uppercase tracking-wide2 text-black hover:bg-champagne-soft"
            >
              Get a Quote
            </Link>
            <Link
              href={`/services/${svc.slug}`}
              className="inline-flex min-h-[48px] items-center justify-center border border-line px-6 text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne"
            >
              More on {svc.name}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <InfoList title="Motorway access" items={loc.motorways} />
          <InfoList title="Nearby airports" items={loc.airports} />
          {svc.slug === "chauffeur-hire" || svc.slug === "luxury-car-hire" ? (
            <InfoList title="Business districts" items={loc.businessDistricts} />
          ) : null}
          {svc.slug === "wedding-car-hire" ? (
            <InfoList title="Wedding venues" items={loc.weddingVenues} />
          ) : null}
          <InfoList title={`Landmarks in ${loc.city}`} items={loc.landmarks} />
        </Reveal>
      </section>

      {/* Featured fleet */}
      {fleet.length > 0 && (
        <section className="border-t border-line py-16 md:py-20">
          <div className="shell">
            <div className="flex items-end justify-between gap-6">
              <div>
                <span className="eyebrow">The Fleet</span>
                <h2 className="mt-4 text-display-sm font-display text-warm-white">
                  For {svc.short} in {loc.city}
                </h2>
              </div>
              <Link href="/fleet" className="link-underline text-xs uppercase tracking-wide2">
                View full fleet
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {fleet.map((v) => (
                <VehicleCard
                  key={v.slug}
                  vehicle={v}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry + cross-links */}
      <section id="enquire" className="scroll-mt-24 border-t border-line bg-charcoal/30 py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">Check Availability</span>
            <h2 className="mt-4 text-display-sm font-display text-warm-white">
              {svc.name} in {loc.city}.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-silver">
              Tell us your dates and we&rsquo;ll confirm availability and delivery to {loc.city}.
            </p>

            <div className="mt-8">
              <h3 className="eyebrow">Also in {loc.city}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${loc.slug}/${s.slug}`}
                      className="border border-line px-3 py-1.5 text-xs text-silver hover:border-champagne hover:text-warm-white"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {nearby.length > 0 && (
              <div className="mt-6">
                <h3 className="eyebrow">{svc.name} nearby</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {nearby.map((l) => (
                    <li key={l.slug}>
                      <Link
                        href={`/${l.slug}/${svc.slug}`}
                        className="border border-line px-3 py-1.5 text-xs text-silver hover:border-champagne hover:text-warm-white"
                      >
                        {l.city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
          <Reveal delay={0.1}>
            <EnquiryPanel />
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-line py-16 md:py-20">
        <div className="shell max-w-3xl">
          <span className="eyebrow">Frequently Asked</span>
          <h2 className="mt-4 text-display-sm font-display text-warm-white">
            {svc.name} {loc.city} — your questions
          </h2>
          <div className="mt-8">
            <FaqAccordion faqs={svc.faqs(loc)} />
          </div>
        </div>
      </section>

      <FinalCTA
        heading={`${svc.name} in ${loc.city}`}
        copy={`Tell us what you need and our team will recommend the right vehicle and confirm availability in ${loc.city}.`}
      />
      <StickyActionBar context={{ page: "location" }} />
    </>
  );
}
