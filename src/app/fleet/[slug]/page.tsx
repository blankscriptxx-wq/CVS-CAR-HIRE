import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getVehicleBySlug,
  getRelatedVehicles,
  allVehicleSlugs,
} from "@/lib/data/vehicles";
import {
  vehicleName,
  specPairs,
  commercialPairs,
  vehicleFaqs,
  hireTypeLabel,
} from "@/lib/vehicleDisplay";
import { categoryLabel } from "@/lib/data/categories";
import { occasionLabels } from "@/lib/data/categories";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { VehicleCard } from "@/components/VehicleCard";
import { EnquiryPanel } from "@/components/EnquiryPanel";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StickyActionBar } from "@/components/StickyActionBar";
import { VehicleTracker } from "@/components/VehicleTracker";
import { ShortlistButton } from "@/components/ShortlistButton";
import { WhatsAppLink, CallLink, LiveChatButton } from "@/components/ActionLinks";
import { JsonLd } from "@/components/ui/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon, PhoneIcon, ChatIcon, ArrowRight } from "@/components/ui/Icons";
import { buildMetadata, vehicleSchema, faqSchema } from "@/lib/seo";
import { vehicleWhatsAppMessage } from "@/lib/whatsapp";

export function generateStaticParams() {
  return allVehicleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return {};
  const name = vehicleName(vehicle);
  return buildMetadata({
    title: vehicle.metaTitle ?? `${name} Hire | CVS Car Hire`,
    description: vehicle.metaDescription ?? vehicle.shortDescription,
    path: `/fleet/${vehicle.slug}`,
    images: vehicle.heroImage.placeholder ? undefined : [vehicle.heroImage.src],
  });
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) notFound();

  const name = vehicleName(vehicle);
  const related = getRelatedVehicles(vehicle);
  const faqs = vehicleFaqs(vehicle);
  const specs = specPairs(vehicle);
  const commercials = commercialPairs(vehicle);
  const waMessage = vehicleWhatsAppMessage(name);
  const gallery = vehicle.gallery ?? [];

  return (
    <>
      <VehicleTracker slug={vehicle.slug} name={name} />
      <JsonLd data={[vehicleSchema(vehicle), faqSchema(faqs)]} />

      {/* Full-screen hero */}
      <section className="relative min-h-[86svh] overflow-hidden border-b border-line">
        <div className="absolute inset-0">
          <Media asset={vehicle.heroImage} plain sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/40" />
        </div>
        <div className="shell relative z-10 flex min-h-[86svh] flex-col justify-end pb-16 pt-32">
          <Reveal className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="eyebrow">{categoryLabel(vehicle.category)}</span>
              {vehicle.newArrival && (
                <span className="bg-champagne px-3 py-1 text-[10px] font-medium uppercase tracking-wide2 text-black">
                  New Arrival
                </span>
              )}
            </div>
            <h1 className="mt-4 text-display font-display text-warm-white">{name}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-silver sm:text-lg">
              {vehicle.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="#enquire" variant="primary" size="lg">
                Check Availability <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <WhatsAppLink
                message={waMessage}
                context={{ page: "vehicle", slug: vehicle.slug }}
                className="inline-flex min-h-[56px] items-center gap-2 border border-line px-8 text-[13px] uppercase tracking-wide2 text-warm-white hover:border-champagne"
              >
                <WhatsAppIcon className="h-4 w-4 text-champagne" /> WhatsApp
              </WhatsAppLink>
              <span className="ml-1">
                <ShortlistButton slug={vehicle.slug} name={name} />
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Fleet", path: "/fleet" },
          { name, path: `/fleet/${vehicle.slug}` },
        ]}
      />

      {/* Overview + specs */}
      <section className="shell grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr] lg:gap-16 md:py-20">
        <div>
          <Reveal>
            <span className="eyebrow">The Experience</span>
            <h2 className="mt-4 text-display-sm font-display text-warm-white">
              {hireTypeLabel(vehicle)}
            </h2>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-silver">
              {vehicle.fullDescription}
            </p>
          </Reveal>

          {vehicle.recommendedOccasions && vehicle.recommendedOccasions.length > 0 && (
            <Reveal className="mt-10">
              <h3 className="eyebrow">Ideal for</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {vehicle.recommendedOccasions.map((o) => (
                  <li key={o} className="border border-line px-3 py-1.5 text-xs text-silver">
                    {occasionLabels[o]}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>

        {/* Spec card */}
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div className="border border-line bg-charcoal/40 p-6">
            <h3 className="font-display text-2xl text-warm-white">Specification</h3>
            <dl className="mt-5 divide-y divide-line">
              {specs.map((s) => (
                <div key={s.label} className="flex items-center justify-between py-3">
                  <dt className="text-xs uppercase tracking-wide2 text-silver">{s.label}</dt>
                  <dd className="text-sm text-warm-white">{s.value}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-8 font-display text-2xl text-warm-white">Hire details</h3>
            <dl className="mt-5 divide-y divide-line">
              {commercials.map((s) => (
                <div key={s.label} className="flex items-center justify-between py-3">
                  <dt className="text-xs uppercase tracking-wide2 text-silver">{s.label}</dt>
                  <dd className="text-sm text-warm-white">{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[11px] leading-relaxed text-silver/70">
              Deposit and included mileage confirmed on enquiry. Prices are a guide and subject to
              availability.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="border-t border-line py-16 md:py-20">
          <div className="shell">
            <span className="eyebrow">Gallery</span>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((img, i) => (
                <Reveal key={i} delay={(i % 3) * 0.06} className="relative aspect-[4/3] overflow-hidden border border-line">
                  <Media asset={img} label={name} sizes="(max-width: 640px) 100vw, 33vw" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry */}
      <section id="enquire" className="scroll-mt-24 border-t border-line bg-charcoal/30 py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">Check Availability</span>
            <h2 className="mt-4 text-display-sm font-display text-warm-white">
              Enquire about the {vehicle.model}.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-silver">
              Tell us your dates and we&rsquo;ll confirm availability, or reach us instantly on
              WhatsApp, live chat or by phone.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppLink
                message={waMessage}
                context={{ page: "vehicle", slug: vehicle.slug }}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-line px-6 text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne"
              >
                <WhatsAppIcon className="h-4 w-4 text-champagne" /> WhatsApp
              </WhatsAppLink>
              <LiveChatButton
                context={{ page: "vehicle", slug: vehicle.slug }}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-line px-6 text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne"
              >
                <ChatIcon className="h-4 w-4 text-champagne" /> Live Chat
              </LiveChatButton>
              <CallLink
                context={{ page: "vehicle", slug: vehicle.slug }}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-line px-6 text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne"
              >
                <PhoneIcon className="h-4 w-4 text-champagne" /> Call
              </CallLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <EnquiryPanel presetVehicle={name} />
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-line py-16 md:py-20">
        <div className="shell max-w-3xl">
          <span className="eyebrow">Frequently Asked</span>
          <h2 className="mt-4 text-display-sm font-display text-warm-white">
            {vehicle.model} hire — your questions
          </h2>
          <div className="mt-8">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Similar vehicles */}
      {related.length > 0 && (
        <section className="border-t border-line py-16 md:py-20">
          <div className="shell">
            <div className="flex items-end justify-between gap-6">
              <div>
                <span className="eyebrow">You may also like</span>
                <h2 className="mt-4 text-display-sm font-display text-warm-white">Similar vehicles</h2>
              </div>
              <Link href="/fleet" className="link-underline text-xs uppercase tracking-wide2">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((v) => (
                <VehicleCard key={v.slug} vehicle={v} />
              ))}
            </div>
          </div>
        </section>
      )}

      <StickyActionBar
        checkAvailabilityHref="#enquire"
        whatsappMessage={waMessage}
        context={{ page: "vehicle", slug: vehicle.slug }}
      />
    </>
  );
}
