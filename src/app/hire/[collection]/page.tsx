import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { collections, getCollectionBySlug } from "@/lib/data/collections";
import { getVehicleBySlug } from "@/lib/data/vehicles";
import type { Vehicle } from "@/lib/types";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { VehicleCard } from "@/components/VehicleCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyActionBar } from "@/components/StickyActionBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { ArrowRight } from "@/components/ui/Icons";
import { buildMetadata, breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/seo";
import { vehicleName } from "@/lib/vehicleDisplay";

export const dynamicParams = false;

export function generateStaticParams() {
  return collections.map((c) => ({ collection: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const { collection } = await params;
  const c = getCollectionBySlug(collection);
  if (!c) return {};
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: `/hire/${c.slug}`,
    keywords: c.keywords,
  });
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ collection: string }>;
}) {
  const { collection } = await params;
  const c = getCollectionBySlug(collection);
  if (!c) notFound();

  const cars = c.vehicleSlugs
    .map(getVehicleBySlug)
    .filter((v): v is Vehicle => Boolean(v));

  const others = collections.filter((x) => x.slug !== c.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Fleet", path: "/fleet" },
            { name: c.heading, path: `/hire/${c.slug}` },
          ]),
          itemListSchema({
            name: c.heading,
            path: `/hire/${c.slug}`,
            items: cars.map((v) => ({
              name: vehicleName(v),
              path: `/fleet/${v.slug}`,
            })),
          }),
          faqSchema(c.faqs),
        ]}
      />

      <PageHero eyebrow={c.eyebrow} title={<>{c.heading}</>} intro={c.intro} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Fleet", path: "/fleet" },
          { name: c.heading, path: `/hire/${c.slug}` },
        ]}
      />

      {/* Vehicles in this collection */}
      <section className="shell py-14 md:py-20">
        <span className="eyebrow">The {c.name} fleet</span>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((v, i) => (
            <VehicleCard key={v.slug} vehicle={v} priority={i < 3} />
          ))}
        </div>
      </section>

      {/* Long-form content — the crawlable hub copy */}
      {c.body.length > 0 && (
        <section className="border-t border-line py-14 md:py-20">
          <div className="shell max-w-3xl">
            <span className="eyebrow">About {c.heading.toLowerCase()}</span>
            <div className="mt-6 space-y-5">
              {c.body.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-silver">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deeper H2-headed content sections (priority hubs) */}
      {c.sections && c.sections.length > 0 && (
        <section className="border-t border-line py-14 md:py-20">
          <div className="shell max-w-3xl space-y-12">
            {c.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-display-sm font-display text-warm-white">{s.heading}</h2>
                <div className="mt-5 space-y-5">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-base leading-relaxed text-silver">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQs */}
      {c.faqs.length > 0 && (
        <section className="border-t border-line py-14 md:py-20">
          <div className="shell max-w-3xl">
            <span className="eyebrow">Frequently Asked</span>
            <h2 className="mt-4 text-display-sm font-display text-warm-white">
              {c.heading} — your questions
            </h2>
            <div className="mt-8">
              <FaqAccordion faqs={c.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Cross-links to other marques */}
      <section className="border-t border-line py-12">
        <div className="shell">
          <span className="eyebrow">Hire by marque</span>
          <div className="mt-5 flex flex-wrap gap-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/hire/${o.slug}`}
                className="border border-line px-4 py-2 text-xs uppercase tracking-wide2 text-silver hover:border-champagne hover:text-warm-white"
              >
                {o.heading}
              </Link>
            ))}
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 border border-line px-4 py-2 text-xs uppercase tracking-wide2 text-champagne hover:border-champagne"
            >
              View all vehicles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyActionBar context={{ page: "collection", collection: c.slug }} />
    </>
  );
}
