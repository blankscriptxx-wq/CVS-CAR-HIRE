/**
 * Central site configuration. Single source of truth for contact details,
 * chat/WhatsApp settings, socials and analytics ids.
 *
 * Values fall back to confirmed public details from the existing CVS site,
 * but every field can be overridden with an environment variable so the
 * business owner can change them without touching code.
 */

export const siteConfig = {
  name: "CVS Car Hire",
  legalName: "CVS Car Hire",
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
  // WhatsApp in international format (no +, no spaces) for wa.me links.
  whatsappNumber: process.env.NEXT_PUBLIC_CVS_WHATSAPP_NUMBER || "447772233314",
  email: process.env.NEXT_PUBLIC_CVS_EMAIL || "", // owner to confirm — not rendered when empty

  address: {
    locality: "Birmingham",
    region: "West Midlands",
    country: "United Kingdom",
    // Street address to be confirmed by owner — left blank so it is not rendered.
    streetAddress: "",
    postalCode: "",
  },

  coverage:
    "Birmingham & West Midlands, with nationwide UK delivery available subject to vehicle and location.",

  // ── Trust ──────────────────────────────────────────────────
  memberships: ["BVRLA"],

  // ── Live chat (Respond.io) ─────────────────────────────────
  respondio: {
    widgetId: process.env.NEXT_PUBLIC_RESPONDIO_WIDGET_ID || "",
    welcomeMessage:
      "Welcome to CVS Car Hire. Which vehicle or service are you interested in?",
    quickReplies: [
      "Check vehicle availability",
      "Get a price",
      "Browse the fleet",
      "Chauffeur hire",
      "Wedding or prom hire",
      "Nationwide delivery",
      "Speak to the team",
    ],
  },

  // ── Socials ────────────────────────────────────────────────
  social: {
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/cvshire",
    instagramHandle: "@cvshire",
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
