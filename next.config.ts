import type { NextConfig } from "next";

/**
 * Redirect map from the legacy Wix site (cvshire.co.uk) to the new URL structure.
 * Preserves ranking equity. Add new mappings here as further legacy URLs are discovered.
 */
const legacyRedirects = [
  // ── Category / service pages ──────────────────────────────
  { source: "/ourfleet", destination: "/fleet", permanent: true },
  { source: "/shop", destination: "/fleet", permanent: true },
  { source: "/luxurycarhire", destination: "/services/luxury-car-hire", permanent: true },
  { source: "/super-car-hire", destination: "/services/supercar-hire", permanent: true },
  { source: "/sports-car-hire", destination: "/services/performance-car-hire", permanent: true },
  { source: "/prestige-car-hire", destination: "/services/prestige-car-hire", permanent: true },
  { source: "/4x4-car-hire", destination: "/services/luxury-4x4-hire", permanent: true },
  { source: "/wedding-car-hire", destination: "/services/wedding-car-hire", permanent: true },
  { source: "/asianweddingphotography", destination: "/services/wedding-car-hire", permanent: true },
  { source: "/promhire", destination: "/services/prom-car-hire", permanent: true },
  { source: "/music-video-car-hire", destination: "/services/production-car-hire", permanent: true },
  { source: "/copy-of-airport-transfers", destination: "/services/airport-transfer", permanent: true },
  { source: "/copy-of-corporate-hire", destination: "/services/corporate-car-hire", permanent: true },
  { source: "/copy-of-21-self-drive", destination: "/fleet", permanent: true },
  { source: "/exotic-credit-hire", destination: "/contact", permanent: true },
  { source: "/members-club", destination: "/contact", permanent: true },
  { source: "/copy-of-members-club", destination: "/contact", permanent: true },
  { source: "/plans-pricing", destination: "/quote", permanent: true },
  { source: "/form", destination: "/contact", permanent: true },
  { source: "/contact-5", destination: "/contact", permanent: true },

  // ── Vehicle pages (Wix store products) ────────────────────
  { source: "/product-page/ferrari-roma", destination: "/fleet/ferrari-roma-hire", permanent: true },
  { source: "/product-page/mercedes-glc43-amg-coupe", destination: "/fleet/mercedes-glc-43-amg-hire", permanent: true },
  { source: "/product-page/bmw-x5-m-sport-hire-7-seater", destination: "/fleet/bmw-x5-hire", permanent: true },
  { source: "/product-page/rolls-royce-cullinan-hire", destination: "/fleet/rolls-royce-cullinan-hire", permanent: true },
  { source: "/product-page/range-rover-svr-hire", destination: "/fleet/range-rover-svr-hire", permanent: true },
  { source: "/product-page/2023-audi-r8-spyder-performance-hire", destination: "/fleet/audi-r8-spyder-hire", permanent: true },
  { source: "/product-page/audi-rs3-saloon-vorsprung-hire", destination: "/fleet/audi-rs3-hire", permanent: true },
  { source: "/product-page/lamborghini-huracan-performante-spyder-hire", destination: "/fleet/lamborghini-huracan-performante-spyder-hire", permanent: true },
  { source: "/product-page/2023-range-rover-sport-arriving-july", destination: "/fleet/range-rover-sport-hire", permanent: true },
  { source: "/product-page/2024-range-rover-sport-vogue-black", destination: "/fleet/range-rover-sport-hire", permanent: true },
  { source: "/product-page/bmw-4-series-convertible-m-spost", destination: "/fleet/bmw-4-series-convertible-hire", permanent: true },
  { source: "/product-page/mercedes-g63-hire", destination: "/fleet/mercedes-amg-g63-hire", permanent: true },
  { source: "/product-page/mercedes-g63-red", destination: "/fleet/mercedes-amg-g63-hire", permanent: true },
  { source: "/product-page/mercedes-v-class-8-seats-v300d-amg", destination: "/fleet/mercedes-v-class-hire", permanent: true },
  { source: "/product-page/lamborghini-urus-performante-yellow", destination: "/fleet/lamborghini-urus-performante-hire", permanent: true },
  // Vehicles we no longer list → closest match / relevant category
  { source: "/product-page/mercedes-e-class-convertible", destination: "/fleet/bmw-4-series-convertible-hire", permanent: true },
  { source: "/product-page/mercedes-e-class-saloon-amg-line-night-pack", destination: "/services/prestige-car-hire", permanent: true },
  { source: "/product-page/audi-q7-hire", destination: "/services/luxury-4x4-hire", permanent: true },

  // ── Vehicle pages (legacy root slugs) ─────────────────────
  { source: "/audi-r8-hire", destination: "/fleet/audi-r8-spyder-hire", permanent: true },
  { source: "/audi-rsq8-hire", destination: "/services/luxury-4x4-hire", permanent: true },
  { source: "/audi-q7-hire", destination: "/services/luxury-4x4-hire", permanent: true },
  { source: "/audi-s3-hire", destination: "/fleet/audi-rs3-hire", permanent: true },
  { source: "/golf-r-hire", destination: "/fleet/vw-golf-r-hire", permanent: true },
  { source: "/copy-of-volkswagen-golf-r-hire", destination: "/fleet/vw-golf-r-hire", permanent: true },
  { source: "/range-rover-svr-hire", destination: "/fleet/range-rover-svr-hire", permanent: true },
  { source: "/range-rover-sport-hire", destination: "/fleet/range-rover-sport-hire", permanent: true },
  { source: "/news-shape-range-rover-sport-hire", destination: "/fleet/range-rover-sport-hire", permanent: true },
  { source: "/rolls-royce-cullinan-hire", destination: "/fleet/rolls-royce-cullinan-hire", permanent: true },
  { source: "/rollsroyceghosthire", destination: "/fleet/rolls-royce-ghost-hire", permanent: true },
  { source: "/rollsroyceghosthire-1", destination: "/fleet/rolls-royce-ghost-hire", permanent: true },
  { source: "/rollsroycephantomhire", destination: "/fleet/rolls-royce-ghost-hire", permanent: true },
  { source: "/rollsroycewraithhire", destination: "/fleet/rolls-royce-ghost-hire", permanent: true },
  { source: "/rollsroycedawnhire", destination: "/fleet/rolls-royce-ghost-hire", permanent: true },
  { source: "/lamborghini-urus-hire", destination: "/fleet/lamborghini-urus-performante-hire", permanent: true },
  { source: "/lamborghini-huracan-hire", destination: "/fleet/lamborghini-huracan-performante-spyder-hire", permanent: true },
  { source: "/lamborghini-huracan-performante-hire", destination: "/fleet/lamborghini-huracan-performante-spyder-hire", permanent: true },
  { source: "/mercedes-g63-hire", destination: "/fleet/mercedes-amg-g63-hire", permanent: true },
  { source: "/mercedes-v-class-hire", destination: "/fleet/mercedes-v-class-hire", permanent: true },
  { source: "/bmw-4-series-convertible-hire", destination: "/fleet/bmw-4-series-convertible-hire", permanent: true },
  { source: "/mercedes-c-class-hire", destination: "/services/prestige-car-hire", permanent: true },
  { source: "/mercedes-e-class-hire", destination: "/services/prestige-car-hire", permanent: true },
  { source: "/mercedes-e-class-convertible-hire", destination: "/fleet/bmw-4-series-convertible-hire", permanent: true },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Allow referencing legacy CVS media if/when migrated to a remote host.
      { protocol: "https", hostname: "static.wixstatic.com" },
    ],
  },
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
