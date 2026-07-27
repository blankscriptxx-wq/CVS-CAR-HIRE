import type { MetadataRoute } from "next";
import { vehicles } from "@/lib/data/vehicles";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { journalPosts } from "@/lib/data/journal";
import { CITY_SERVICES } from "@/lib/data/cityServices";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1.0 },
    { path: "/fleet", priority: 0.9 },
    { path: "/quote", priority: 0.8 },
    { path: "/services", priority: 0.8 },
    { path: "/locations", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/how-it-works", priority: 0.6 },
    { path: "/delivery", priority: 0.6 },
    { path: "/faqs", priority: 0.5 },
    { path: "/reviews", priority: 0.5 },
    { path: "/journal", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy-policy", priority: 0.2 },
    { path: "/cookie-policy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ].map((r) => ({
    url: absoluteUrl(r.path),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: r.priority,
  }));

  const vehicleRoutes = vehicles.map((v) => ({
    url: absoluteUrl(`/fleet/${v.slug}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: absoluteUrl(`/services/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationRoutes = locations.map((l) => ({
    url: absoluteUrl(`/locations/${l.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const journalRoutes = journalPosts.map((p) => ({
    url: absoluteUrl(`/journal/${p.slug}`),
    lastModified: new Date(p.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  // City × service local landing pages (/[city]/[service]).
  const cityServiceRoutes = locations.flatMap((l) =>
    CITY_SERVICES.map((s) => ({
      url: absoluteUrl(`/${l.slug}/${s.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [
    ...staticRoutes,
    ...vehicleRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...cityServiceRoutes,
    ...journalRoutes,
  ];
}
