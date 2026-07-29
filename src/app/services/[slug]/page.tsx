import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/lib/data/services";
import { vehicles, getVehicleBySlug, getVehiclesByCategory } from "@/lib/data/vehicles";
import type { Vehicle } from "@/lib/types";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { VehicleCard } from "@/components/VehicleCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EnquiryPanel } from "@/components/EnquiryPanel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyActionBar } from "@/components/StickyActionBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { CheckIcon } from "@/components/ui/Icons";
import { buildMetadata, serviceSchema, faqSchema } from "@/lib/seo";
import { locations } from "@/lib/data/locations";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

function resolveVehicles(service: ReturnType<typeof getServiceBySlug>): Vehicle[] {
  if (!service) return [];
  if (service.recommendedVehicles?.length) {
    return service.recommendedVehicles
      .map(getVehicleBySlug)
      .filter((v): v is Vehicle => Boolean(v));
  }
  if (service.category) return getVehiclesByCategory(service.category).slice(0, 6);
  return vehicles.filter((v) => v.featured).slice(0, 6);
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const recommended = resolveVehicles(service);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
          }),
          faqSchema(service.faqs),
        ]}
      />

      <PageHero
        eyebrow={service.hero.eyebrow}
        title={service.hero.heading}
        intro={service.hero.intro}
        image={{
          src: `/images/services/${service.slug}.jpg`,
          alt: `${service.name} from CVS Car Hire`,
          placeholder: false,
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />

      {/* Overview + benefits */}
      <section className="shell grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr] md:py-20">
        <Reveal>
          <span className="eyebrow">Overview</span>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-warm-white">
            {service.overview}
          </p>
          {service.occasions.length > 0 && (
            <div className="mt-8">
              <h2 className="eyebrow">Suitable occasions</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.occasions.map((o) => (
                  <li key={o} className="border border-line px-3 py-1.5 text-xs text-silver">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-line bg-charcoal/40 p-6">
            <h2 className="font-display text-2xl text-warm-white">Why choose CVS</h2>
            <ul className="mt-5 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                  <span className="text-sm text-silver">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Process */}
      {service.process && service.process.length > 0 && (
        <section className="border-t border-line bg-charcoal/30 py-16 md:py-20">
          <div className="shell">
            <span className="eyebrow">How It Works</span>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.06} className="border-t border-line pt-5">
                  <span className="font-display text-3xl text-champagne">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-warm-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-silver">{step.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recommended vehicles */}
      {recommended.length > 0 && (
        <section className="border-t border-line py-16 md:py-20">
          <div className="shell">
            <div className="flex items-end justify-between gap-6">
              <div>
                <span className="eyebrow">Recommended</span>
                <h2 className="mt-4 text-display-sm font-display text-warm-white">
                  Vehicles for {service.name.toLowerCase()}
                </h2>
              </div>
              <Link href="/fleet" className="link-underline text-xs uppercase tracking-wide2">
                View full fleet
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recommended.slice(0, 6).map((v) => (
                <VehicleCard key={v.slug} vehicle={v} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry */}
      <section id="enquire" className="scroll-mt-24 border-t border-line bg-charcoal/30 py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">Enquire</span>
            <h2 className="mt-4 text-display-sm font-display text-warm-white">
              Ready when you are.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-silver">
              Tell us about your {service.name.toLowerCase()} requirements and we&rsquo;ll take care
              of the rest.
            </p>
            <div className="mt-8">
              <h3 className="eyebrow">Service areas</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {locations.slice(0, 6).map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/locations/${l.slug}`}
                      className="border border-line px-3 py-1.5 text-xs text-silver hover:border-champagne hover:text-warm-white"
                    >
                      {l.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <EnquiryPanel />
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="border-t border-line py-16 md:py-20">
          <div className="shell max-w-3xl">
            <span className="eyebrow">Frequently Asked</span>
            <h2 className="mt-4 text-display-sm font-display text-warm-white">
              {service.name} — your questions
            </h2>
            <div className="mt-8">
              <FaqAccordion faqs={service.faqs} />
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
      <StickyActionBar context={{ page: "service", slug: service.slug }} />
    </>
  );
}
