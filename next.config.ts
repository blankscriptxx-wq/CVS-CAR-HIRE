import type { NextConfig } from "next";

/**
 * Redirect map from the legacy Wix site (cvshire.co.uk) to the new URL structure.
 * Preserves ranking equity. Add new mappings here as further legacy URLs are discovered.
 */
const legacyRedirects = [
  { source: "/ourfleet", destination: "/fleet", permanent: true },
  { source: "/luxurycarhire", destination: "/services/luxury-car-hire", permanent: true },
  { source: "/super-car-hire", destination: "/services/supercar-hire", permanent: true },
  { source: "/prestige-car-hire", destination: "/services/prestige-car-hire", permanent: true },
  { source: "/promhire", destination: "/services/prom-car-hire", permanent: true },
  { source: "/services", destination: "/services", permanent: true },
  { source: "/plans-pricing", destination: "/how-it-works", permanent: true },
  { source: "/contact", destination: "/contact", permanent: true },
  { source: "/music-video-car-hire", destination: "/services/production-car-hire", permanent: true },
  { source: "/wedding-car-hire", destination: "/services/wedding-car-hire", permanent: true },
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
