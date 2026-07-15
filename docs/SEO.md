# SEO Strategy & Technical Reference

## URL structure (new)

```
/                                  Home
/fleet                             Digital showroom (filterable)
/fleet/[slug]                      Vehicle pages (e.g. /fleet/lamborghini-urus-performante-hire)
/services                          Services overview
/services/[slug]                   Service landing pages (13)
/locations                         Locations overview
/locations/[slug]                  Location pages (Birmingham, London, Manchester, …)
/about /how-it-works /delivery     Trust & info
/faqs /reviews /contact
/journal /journal/[slug]           Editorial / topical authority
/privacy-policy /cookie-policy /terms
```

## Legacy → new redirect map (301, in `next.config.ts`)

| Legacy (Wix) | New |
| --- | --- |
| `/ourfleet` | `/fleet` |
| `/luxurycarhire` | `/services/luxury-car-hire` |
| `/super-car-hire` | `/services/supercar-hire` |
| `/prestige-car-hire` | `/services/prestige-car-hire` |
| `/promhire` | `/services/prom-car-hire` |
| `/plans-pricing` | `/how-it-works` |
| `/music-video-car-hire` | `/services/production-car-hire` |
| `/wedding-car-hire` | `/services/wedding-car-hire` |
| `/contact` | `/contact` |

> Add any further legacy URLs (from Google Search Console / old sitemap) to the `legacyRedirects`
> array as they're discovered.

## Metadata plan
- Global template `%s | CVS Car Hire` with per-page `title` + `description` (`buildMetadata()` in `src/lib/seo.ts`).
- Canonical URL on every page; Open Graph + Twitter cards; `en_GB` locale.
- `sitemap.ts` and `robots.ts` auto-generate from the content layer.

## Structured data (JSON-LD) implemented
| Schema | Where |
| --- | --- |
| Organization, WebSite, AutoRental (LocalBusiness) | Global (layout) |
| Car (Vehicle) + FAQPage + BreadcrumbList | Vehicle pages |
| Service + FAQPage + BreadcrumbList | Service pages |
| AutoRental (local) + FAQPage + BreadcrumbList | Location pages |
| FAQPage | FAQs page |

No fake review scores, prices or availability are ever emitted.

## Keyword map (primary intent per template)

| Template | Target patterns |
| --- | --- |
| Home | luxury car hire Birmingham, supercar hire Birmingham |
| `/fleet` | luxury car hire fleet, prestige car hire Birmingham |
| Vehicle | `[model] hire Birmingham` (e.g. Lamborghini Urus hire, G-Wagon hire, Rolls-Royce Cullinan hire) |
| Service | `[service] Birmingham` (supercar/wedding/prom/chauffeur/airport transfer) |
| Location | `luxury car hire [city]`, `supercar hire [city]`, `wedding car hire [city]` |
| Journal | informational: "best wedding cars Birmingham", "how to hire a supercar" |

## Internal linking
- Vehicles → related vehicles (same category) + fleet.
- Services → recommended vehicles + service areas (locations) + fleet.
- Locations → recommended vehicles + nearby locations + fleet.
- Footer links to popular services + locations + company pages (no orphan pages).
- Journal cross-links + links back to fleet/services.

## Local SEO (scalable, non-spammy)
- Each location page has **unique** content: intro, how CVS serves the area, delivery accuracy,
  motorways, airports, venues, business districts, landmarks, recommended vehicles, nearby links, FAQs.
- Seeded with Birmingham, London, Manchester, Coventry, Leicester, Nottingham, Wolverhampton, plus a
  West Midlands scope. **Add new cities only with genuinely local content** — do not clone.
- Ready for Google Business Profile connection, map embed and live review integration.

## Technical SEO checklist
- [x] Canonical URLs · [x] Sitemap · [x] robots.txt · [x] 301 redirect map
- [x] Breadcrumb schema · [x] FAQ schema · [x] OG/Twitter cards · [x] JSON-LD validated shape
- [x] Correct heading hierarchy (single h1/page) · [x] Descriptive alt text
- [x] Mobile-first, no horizontal overflow · [x] Fast static/SSG rendering · [x] Route-level code splitting
- [ ] Connect Google Search Console + submit sitemap (post-launch)
- [ ] Add image sitemap once real photography is in place
- [ ] Confirm Core Web Vitals in production (real images optimised via `next/image`)

## AI-search / EEAT notes
- Clear question-style headings + FAQ schema aid AI Overviews / featured snippets.
- Entity clarity: consistent NAP (name/address/phone), Organization schema, BVRLA membership.
- Original copy and (once supplied) original photography reduce duplicate-content risk.
