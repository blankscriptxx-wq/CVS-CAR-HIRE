import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocationBySlug } from "@/lib/data/locations";
import { getVehicleBySlug, getFeaturedVehicles } from "@/lib/data/vehicles";
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
import { buildMetadata, locationSchema, faqSchema } from "@/lib/seo";
import { locationWhatsAppMessage } from "@/lib/whatsapp";
import { LocationTracker } from "@/components/LocationTracker";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return buildMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/locations/${location.slug}`,
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

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const recommended: Vehicle[] = (location.recommendedVehicles ?? [])
    .map(getVehicleBySlug)
    .filter((v): v is Vehicle => Boolean(v));
  const vehicleList = recommended.length ? recommended : getFeaturedVehicles().slice(0, 4);
  const nearby = (location.nearbyLocations ?? [])
    .map(getLocationBySlug)
    .filter(Boolean);
  const waMessage = locationWhatsAppMessage(location.city);

  return (
    <>
      <LocationTracker city={location.city} slug={location.slug} />
      <JsonLd data={[locationSchema(location), faqSchema(location.faqs)]} />

      <PageHero
        eyebrow={`${location.region} • ${location.nation}`}
        title={<>Luxury Car Hire {location.city}</>}
        intro={location.intro}
        image={{
          src: `/images/locations/${location.slug}.jpg`,
          alt: `Luxury car hire in ${location.city}`,
          placeholder: true,
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: location.city, path: `/locations/${location.slug}` },
        ]}
      />

      {/* Serving + delivery */}
      <section className="shell grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr] md:py-20">
        <Reveal>
          <span className="eyebrow">How we serve {location.city}</span>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-warm-white">
            {location.serving}
          </p>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-silver">
            {location.delivery}
          </p>
          {location.occasions.length > 0 && (
            <div className="mt-8">
              <h2 className="eyebrow">Popular occasions in {location.city}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {location.occasions.map((o) => (
                  <li key={o} className="border border-line px-3 py-1.5 text-xs text-silver">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <InfoList title="Motorway access" items={location.motorways} />
          <InfoList title="Nearby airports" items={location.airports} />
          <InfoList title="Business districts" items={location.businessDistricts} />
          <InfoList title="Wedding venues" items={location.weddingVenues} />
          <InfoList title="Local landmarks" items={location.landmarks} />
        </Reveal>
      </section>

      {/* Recommended vehicles */}
      <section className="border-t border-line py-16 md:py-20">
        <div className="shell">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Frequently hired</span>
              <h2 className="mt-4 text-display-sm font-display text-warm-white">
                Popular in {location.city}
              </h2>
            </div>
            <Link href="/fleet" className="link-underline text-xs uppercase tracking-wide2">
              View full fleet
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vehicleList.map((v) => (
              <VehicleCard
                key={v.slug}
                vehicle={v}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquire" className="scroll-mt-24 border-t border-line bg-charcoal/30 py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">Check Availability</span>
            <h2 className="mt-4 text-display-sm font-display text-warm-white">
              Luxury car hire in {location.city}.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-silver">
              Tell us your dates and we&rsquo;ll confirm availability and delivery to {location.city}.
            </p>
            {nearby.length > 0 && (
              <div className="mt-8">
                <h3 className="eyebrow">Nearby locations</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {nearby.map((l) => (
                    <li key={l!.slug}>
                      <Link
                        href={`/locations/${l!.slug}`}
                        className="border border-line px-3 py-1.5 text-xs text-silver hover:border-champagne hover:text-warm-white"
                      >
                        {l!.city}
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
      {location.faqs.length > 0 && (
        <section className="border-t border-line py-16 md:py-20">
          <div className="shell max-w-3xl">
            <span className="eyebrow">Frequently Asked</span>
            <h2 className="mt-4 text-display-sm font-display text-warm-white">
              Luxury car hire {location.city} — your questions
            </h2>
            <div className="mt-8">
              <FaqAccordion faqs={location.faqs} />
            </div>
          </div>
        </section>
      )}

      <FinalCTA whatsappMessage={waMessage} />
      <StickyActionBar whatsappMessage={waMessage} context={{ page: "location", slug: location.slug }} />
    </>
  );
}
