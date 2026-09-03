import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import type { Vehicle, FAQ, LocationContent } from "@/lib/types";

const BASE = siteConfig.url.replace(/\/$/, "");

export function absoluteUrl(path = ""): string {
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Standard metadata builder with canonical + Open Graph + Twitter. */
export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  images?: string[];
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(opts.path);
  const provided = opts.images?.map((i) => (i.startsWith("http") ? i : absoluteUrl(i)));
  // Fall back to the brand social image so every page has a valid share preview.
  const images = provided && provided.length ? provided : [absoluteUrl("/brand/cvs-og.jpg")];
  return {
    // `absolute` prevents the root layout's "%s | CVS Car Hire" template from
    // doubling the brand — our metaTitle strings already include it.
    title: { absolute: opts.title },
    description: opts.description,
    ...(opts.keywords && opts.keywords.length ? { keywords: opts.keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: siteConfig.name,
      locale: "en_GB",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images,
    },
  };
}

// ── JSON-LD builders ─────────────────────────────────────────
// Never emit fake prices, review scores or availability.

// Stable entity IDs so Organization / LocalBusiness / WebSite reference one
// another instead of creating contradictory duplicate entities.
export const ORG_ID = `${BASE}/#organization`;
export const LOCALBUSINESS_ID = `${BASE}/#localbusiness`;
export const WEBSITE_ID = `${BASE}/#website`;

const TEL = `+44${siteConfig.phone.raw.replace(/^0/, "")}`;
const SAME_AS = [
  siteConfig.social.instagram,
  siteConfig.social.facebook,
  siteConfig.social.tiktok,
  siteConfig.social.googleBusinessProfile,
].filter(Boolean);

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  ...(siteConfig.address.streetAddress ? { streetAddress: siteConfig.address.streetAddress } : {}),
  addressLocality: siteConfig.address.locality,
  addressRegion: siteConfig.address.region,
  ...(siteConfig.address.postalCode ? { postalCode: siteConfig.address.postalCode } : {}),
  addressCountry: "GB",
} as const;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: BASE,
    logo: absoluteUrl("/brand/cvs-logo.png"),
    image: absoluteUrl("/brand/cvs-og.jpg"),
    description: siteConfig.description,
    foundingDate: String(siteConfig.foundedYear),
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    telephone: TEL,
    address: POSTAL_ADDRESS,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Companies House",
      value: siteConfig.companyNumber,
    },
    sameAs: SAME_AS,
    memberOf: siteConfig.memberships.map((m) => ({ "@type": "Organization", name: m })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: TEL,
      email: siteConfig.email,
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "@id": LOCALBUSINESS_ID,
    name: siteConfig.name,
    url: BASE,
    image: absoluteUrl("/brand/cvs-og.jpg"),
    logo: absoluteUrl("/brand/cvs-logo.png"),
    description: siteConfig.description,
    telephone: TEL,
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    priceRange: "£££",
    parentOrganization: { "@id": ORG_ID },
    address: POSTAL_ADDRESS,
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Birmingham" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    sameAs: SAME_AS,
    memberOf: siteConfig.memberships.map((m) => ({ "@type": "Organization", name: m })),
    // Opening hours only emitted when the owner supplies them (no invented hours).
    ...(siteConfig.openingHours.length
      ? {
          openingHoursSpecification: siteConfig.openingHours.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.days,
            opens: h.opens,
            closes: h.closes,
          })),
        }
      : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: BASE,
    inLanguage: "en-GB",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/**
 * ItemList of vehicles for a marque / collection hub page, so search engines
 * understand the page as a curated list pointing at the individual Car pages.
 */
export function itemListSchema(opts: {
  name: string;
  path: string;
  items: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: opts.name,
    url: absoluteUrl(opts.path),
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: absoluteUrl(it.path),
    })),
  };
}

/**
 * AggregateRating + Review markup for the business, built ONLY from genuine
 * reviews that are actually displayed on the page (never fabricated). Attaches
 * to the existing AutoRental/LocalBusiness entity via its @id so Google merges
 * the rating onto the real business node rather than creating a duplicate.
 */
export function reviewsRatingSchema(opts: {
  rating: number;
  count: number;
  reviews?: { author: string; rating: number; text: string; datePublished?: string }[];
}) {
  const node: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "@id": LOCALBUSINESS_ID,
    name: siteConfig.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: Number(opts.rating.toFixed(1)),
      reviewCount: opts.count,
      bestRating: 5,
      worstRating: 1,
    },
  };
  if (opts.reviews && opts.reviews.length) {
    node.review = opts.reviews.slice(0, 12).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: r.text,
      ...(r.datePublished ? { datePublished: r.datePublished } : {}),
    }));
  }
  return node;
}

export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "United Kingdom" },
  };
}

export function vehicleSchema(vehicle: Vehicle) {
  // Product/Car schema WITHOUT invented offers/reviews.
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Car",
    name: `${vehicle.manufacturer} ${vehicle.model}${vehicle.edition ? ` ${vehicle.edition}` : ""}`,
    brand: { "@type": "Brand", name: vehicle.manufacturer },
    model: vehicle.model,
    description: vehicle.shortDescription,
    url: absoluteUrl(`/fleet/${vehicle.slug}`),
  };
  if (vehicle.year) schema.vehicleModelDate = String(vehicle.year);
  if (vehicle.seats) schema.seatingCapacity = vehicle.seats;
  if (vehicle.doors) schema.numberOfDoors = vehicle.doors;
  if (vehicle.fuelType) schema.fuelType = vehicle.fuelType;
  if (vehicle.transmission) schema.vehicleTransmission = vehicle.transmission;
  return schema;
}

export function locationSchema(location: LocationContent) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: `${siteConfig.name} — Luxury Car Hire ${location.city}`,
    url: absoluteUrl(`/locations/${location.slug}`),
    telephone: `+44${siteConfig.phone.raw.replace(/^0/, "")}`,
    areaServed: { "@type": "City", name: location.city },
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.region,
      addressCountry: "GB",
    },
  };
  if (location.geo) {
    schema.geo = { "@type": "GeoCoordinates", latitude: location.geo.lat, longitude: location.geo.lng };
  }
  return schema;
}
