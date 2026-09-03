/**
 * Central site configuration. Single source of truth for contact details,
 * chat, reviews, socials and analytics ids.
 *
 * Values fall back to confirmed public details from the existing CVS site,
 * but every field can be overridden with an environment variable so the
 * business owner can change them without touching code.
 */

export const siteConfig = {
  name: "CVS Car Hire",
  legalName: "Central Vehicle Solutions Ltd",
  tradingName: "CVS Hire",
  companyNumber: "09119432", // Companies House
  tagline: "Luxury Without Compromise",
  description:
    "Birmingham's leading collection of luxury, prestige and performance vehicles — available for self-drive, chauffeur hire and nationwide UK delivery.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.cvshire.co.uk",
  foundedYear: 2014,
  fleetSize: "50+",

  // ── Contact ────────────────────────────────────────────────
  // Phone kept as raw digits for tel:, plus a display version.
  phone: {
    raw: process.env.NEXT_PUBLIC_CVS_PHONE || "01215723422",
    display: "0121 572 3422",
  },
  email: process.env.NEXT_PUBLIC_CVS_EMAIL || "info@cvshire.co.uk",
  // WhatsApp in international format (no +, no spaces) for wa.me links.
  whatsappNumber: process.env.NEXT_PUBLIC_CVS_WHATSAPP_NUMBER || "447772233314",

  address: {
    streetAddress: "70 Glover Street",
    locality: "Birmingham",
    region: "West Midlands",
    postalCode: "B9 4EN",
    country: "United Kingdom",
  },

  coverage:
    "Birmingham & West Midlands, with nationwide UK delivery available subject to vehicle and location.",

  // ── Trust ──────────────────────────────────────────────────
  memberships: ["BVRLA"],

  // Geo of the Birmingham premises (B9 4EN, 70 Glover Street).
  geo: { lat: 52.475219, lng: -1.875752 },

  // Opening hours (visible on the Contact page; also emitted as schema).
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "17:00" },
    { days: ["Saturday", "Sunday"], opens: "11:00", closes: "14:00" },
  ] as { days: string[]; opens: string; closes: string }[],

  // ── Socials ────────────────────────────────────────────────
  social: {
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/cvshire",
    instagramHandle: "@cvshire",
    tiktok: "https://www.tiktok.com/@cvshire",
    facebook: "https://www.facebook.com/cvshire",
    // Google Business Profile (Maps) — used for sameAs and "read our reviews" links.
    // Profile: "CVS Self Drive and Wedding Car Hire".
    googleBusinessProfile:
      process.env.NEXT_PUBLIC_GBP_URL || "https://share.google/ImohPqIYRzeHmXBa3",
  },

  // ── Reviews (keyless Google reviews) ───────────────────────
  // The Google Place ID powers keyless "read reviews" and "leave a review"
  // deep-links (no API key needed). For inline review cards, either connect the
  // profile on featurable.com and set the widget id below, or provide a Google
  // Places API key server-side (GOOGLE_PLACES_API_KEY) — both use this Place ID.
  reviews: {
    googlePlaceId:
      process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "ChIJTz31FLu7cEgRv2o0D6e5URQ",
    // CVS Hire Featurable widget (public id). Reviews render natively via the
    // widget API once the Google Business Profile is connected on featurable.com.
    featurableWidgetId:
      process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID || "73fcadc5-63a4-476a-bc9c-0fd1f5d21ab8",
  },

  // ── Aniro.ai chat widget ───────────────────────────────────
  aniro: {
    widgetKey:
      process.env.NEXT_PUBLIC_ANIRO_WIDGET_KEY || "wgt_d880cbef-97dd-4ddd-9ca2-0e67645ecac3",
  },

  // ── Analytics ids (consent-gated, optional) ────────────────
  analytics: {
    ga4: process.env.NEXT_PUBLIC_GA4_ID || "",
    gtm: process.env.NEXT_PUBLIC_GTM_ID || "",
    metaPixel: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
    tiktokPixel: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || "",
    googleAds: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Human-friendly phone for display, e.g. "0121 572 3422". */
export const phoneDisplay = siteConfig.phone.display;
/** tel: href target. */
export const phoneHref = `tel:+44${siteConfig.phone.raw.replace(/^0/, "")}`;

/**
 * Keyless Google review deep-links built from the Place ID (no API key needed).
 * `read` opens the reviews panel; `write` opens the "leave a review" dialog.
 * Falls back to the Google Business Profile link if no Place ID is set.
 */
export const googleReviewLinks = (() => {
  const placeId = siteConfig.reviews.googlePlaceId;
  if (!placeId) {
    const gbp = siteConfig.social.googleBusinessProfile;
    return { read: gbp, write: gbp };
  }
  return {
    read: `https://search.google.com/local/reviews?placeid=${placeId}`,
    write: `https://search.google.com/local/writereview?placeid=${placeId}`,
  };
})();
