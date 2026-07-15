# Asset Replacement Checklist

> **Current state:** temporary **stock photography** (from Unsplash — free for commercial use) is now
> wired into every image slot so the site looks complete. These are generic/brand-representative shots,
> **not CVS's own vehicles**. Replace them with real, rights-cleared photography of the actual fleet for
> launch — overwrite the files at the same paths below (no code change needed). The gold CVS logo
> (`public/brand/`) and favicon are the real brand assets.

The layouts also support elegant on-brand **placeholders** (set `placeholder: true` on any asset to show
one) so nothing ever looks broken while you swap imagery. Vehicle photos already exist on the current Wix
site (static.wixstatic.com) — export the originals at full resolution and drop them in at the paths
below. (We deliberately did **not** auto-scrape and assign those images, because the source files are
hash-named and could be mismatched to the wrong vehicle — always match by eye.)

## How to replace an image
1. Add the file under `public/…` at the path shown below (keep the exact filename).
2. In the matching data file, set the asset's `placeholder` to `false` (or delete the flag).
3. Use **descriptive filenames** and keep the existing **alt text** (edit it if the shot differs).
4. Prefer landscape 3:2 or 4:3 for cards, 16:9+ for heroes. Export high-res; `next/image` handles
   responsive sizing and modern formats (AVIF/WebP) automatically. Do not pre-stretch or over-compress.

## Global / brand
| Path | Asset |
| --- | --- |
| `public/brand/cvs-logo.png` | Logo (white/transparent) for schema + header |
| `public/brand/cvs-og.jpg` | 1200×630 social share image |
| `public/images/home/hero.jpg` | Homepage hero — hero vehicle, cinematic, dark |
| `public/images/home/signature-service.jpg` | Handover / service portrait (4:5) |
| `public/images/home/final-cta.jpg` | Night city + vehicle, full-width |
| `public/images/about/story.jpg` | Fleet/brand image for About |
| `public/images/experiences/*.jpg` | supercars, luxury-4x4s, chauffeur, weddings, prom, production-events |
| `public/images/services/[slug].jpg` | One hero per service (e.g. `supercar-hire.jpg`) |
| `public/images/locations/[slug].jpg` | One image per location (Birmingham, London, …) |
| `public/images/journal/[slug]/hero.jpg` | One hero per journal article |

## Per-vehicle (in `public/images/fleet/[slug]/`)
Each vehicle expects a `hero.jpg` and (for featured cars) gallery images. Recommended shot list per
the brief: **exterior, interior, driving, night, lifestyle, close-ups** (+ wedding/corporate/airport
context where relevant).

| Vehicle slug | Files expected |
| --- | --- |
| `ferrari-roma-hire` | hero.jpg, front.jpg, interior.jpg, rear.jpg |
| `lamborghini-huracan-performante-spyder-hire` | hero.jpg, roof-down.jpg, interior.jpg |
| `audi-r8-spyder-hire` | hero.jpg, side.jpg, interior.jpg |
| `lamborghini-urus-performante-hire` | hero.jpg, front.jpg, interior.jpg, rear.jpg |
| `mercedes-amg-g63-hire` | hero.jpg, front.jpg, interior.jpg |
| `rolls-royce-cullinan-hire` | hero.jpg, front.jpg, interior.jpg, rear.jpg |
| `range-rover-sport-hire` | hero.jpg, front.jpg, interior.jpg |
| `range-rover-svr-hire` | hero.jpg, front.jpg, interior.jpg |
| `bmw-x5-hire` | hero.jpg |
| `audi-rs3-hire` | hero.jpg |
| `mercedes-glc-43-amg-hire` | hero.jpg |
| `vw-golf-r-hire` | hero.jpg |
| `rolls-royce-ghost-hire` | hero.jpg, interior.jpg |
| `mercedes-e-class-hire` | hero.jpg |
| `bmw-4-series-convertible-hire` | hero.jpg |
| `mercedes-v-class-hire` | hero.jpg |

> Filenames are defined by the `img()` helper and `gallery` arrays in `src/lib/data/vehicles.ts` —
> adjust there if you prefer different names.

## Video (optional, progressive enhancement)
- Homepage hero supports a poster + muted looping video. Keep it short, provide a poster image, and
  the image fallback already guarantees a fast LCP on slow mobile connections.

## Original photography (recommended long-term)
Per the brief, commissioning original photography (or high-end renders) strengthens the brand, avoids
duplicate-image issues and gives an SEO advantage over competitors reusing manufacturer stock.
