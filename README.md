# CVS Car Hire — Luxury Car Hire Website

A cinematic, mobile-first, **conversation-led** website for CVS Car Hire (Birmingham) —
luxury, prestige, supercar and performance vehicle hire with self-drive, chauffeur and nationwide
UK delivery. Built for qualified enquiries (Check Availability → live chat / WhatsApp / call / form),
not e-commerce.

Built with **Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion**, ready to deploy on
**Vercel**.

---

## ✨ Features

- Cinematic, dark, editorial design system (mobile-first, WCAG 2.2 AA-minded)
- Full site: home, digital-showroom fleet, individual vehicle pages, all service landing pages,
  location pages, About, How It Works, Delivery, FAQs, Reviews, Journal, Contact, legal pages
- Staged/progressive quick-enquiry panel with WhatsApp / live-chat handoff
- WhatsApp integration (page-aware, pre-filled messages, single config source)
- Respond.io live-chat loader (public widget id) + secure server-side enquiry forwarding
- Sticky mobile action bar (Live Chat · WhatsApp · Call), fleet filtering, shortlist & recently-viewed
- Consent-aware analytics event layer (GA4 / GTM / Meta / TikTok ready)
- SEO: per-page metadata, canonical, sitemap, robots, legacy redirects, rich JSON-LD structured data
- Typed local content layer (CMS-migration-ready) — no external accounts needed to run

---

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local
#    → fill in WhatsApp number, Respond.io widget id, analytics ids, etc.

# 3. Run the dev server
npm run dev        # http://localhost:3000

# Other scripts
npm run build      # production build
npm run start      # run the production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

**Requirements:** Node 20+ (developed on Node 22).

---

## 🔑 Environment variables

See [`.env.example`](./.env.example). Key ones:

| Variable | Purpose | Secret? |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical/sitemap/OG base URL | No |
| `NEXT_PUBLIC_CVS_WHATSAPP_NUMBER` | WhatsApp number (intl, no `+`) | No |
| `NEXT_PUBLIC_CVS_PHONE` | Phone for `tel:` links | No |
| `NEXT_PUBLIC_RESPONDIO_WIDGET_ID` | Respond.io web-chat widget id | No |
| `RESPONDIO_WEBHOOK_URL` / `RESPONDIO_API_TOKEN` | Server-side enquiry forwarding | **Yes** |
| `NEXT_PUBLIC_GA4_ID` / `NEXT_PUBLIC_GTM_ID` / `NEXT_PUBLIC_META_PIXEL_ID` / `NEXT_PUBLIC_TIKTOK_PIXEL_ID` | Analytics (consent-gated) | No |

> ⚠️ Never put private API keys in a `NEXT_PUBLIC_*` variable — those are exposed to the browser.
> Server secrets are read only in `src/app/api/enquiry/route.ts`.

---

## 🗂 Project structure

```
src/
├─ app/                    # App Router pages, sitemap.ts, robots.ts, api/enquiry
│  ├─ fleet/[slug]         # vehicle template
│  ├─ services/[slug]      # service landing template
│  ├─ locations/[slug]     # location template
│  └─ journal/[slug]       # journal article template
├─ components/             # UI + sections + integrations
│  ├─ ui/                  # primitives (Media, Button, Reveal, SectionHeading, …)
│  ├─ sections/            # homepage sections
│  └─ fleet/               # FleetShowroom
└─ lib/
   ├─ data/                # THE CONTENT LAYER (vehicles, services, locations, …)
   ├─ siteConfig.ts        # contact / chat / analytics config (env-overridable)
   ├─ whatsapp.ts          # wa.me link + message builders
   ├─ analytics.ts         # consent-aware event layer
   └─ seo.ts               # metadata + JSON-LD builders
```

---

## ✏️ Editing content (the "CMS")

All content is typed data in `src/lib/data/` — edit these files (no rebuild-time external service):

- **Vehicles** → `vehicles.ts` (full schema; unconfirmed fields left `undefined` are never shown)
- **Services** → `services.ts`
- **Locations** → `locations.ts`
- **Pricing / delivery** → `pricing.ts`
- **FAQs / testimonials / journal** → `faqs.ts`, `testimonials.ts`, `journal.ts`
- **Contact / chat / socials / analytics** → `siteConfig.ts` (or override via env)

The schema mirrors a headless CMS (Sanity/Payload), so migrating later is a data move, not a rewrite.

See [`docs/CONTENT-TODO.md`](./docs/CONTENT-TODO.md) for fields awaiting owner confirmation and
[`docs/ASSET-CHECKLIST.md`](./docs/ASSET-CHECKLIST.md) for the photography plan.

---

## 🖼 Images

Vehicle/section images use an on-brand **placeholder** component until real photography is added.
Drop real files at the paths listed in `docs/ASSET-CHECKLIST.md` and set `placeholder: false` (or
remove the flag) on the matching asset in the data files.

---

## ☁️ Deployment (Vercel)

1. Push this repo to GitHub.
2. Import the repo in Vercel (framework auto-detected as Next.js).
3. Add the environment variables from `.env.example` in Vercel → Project → Settings → Environment Variables.
4. Deploy. Set the production domain (e.g. `www.cvshire.co.uk`) and update `NEXT_PUBLIC_SITE_URL`.
5. Point DNS at Vercel. Legacy Wix URL redirects are handled in `next.config.ts`.

---

## 📈 SEO & analytics

- Structured data, metadata and the redirect map are documented in [`docs/SEO.md`](./docs/SEO.md).
- Analytics events fire through a consent-gated `dataLayer` (`src/lib/analytics.ts`) — wire GA4 /
  Meta / TikTok via GTM using those events.

---

## 📄 Docs

- [`docs/AUDIT.md`](./docs/AUDIT.md) — existing-site audit (keep / rewrite / remove / replace)
- [`docs/SEO.md`](./docs/SEO.md) — URL inventory, redirects, keyword & internal-link map, local SEO
- [`docs/ASSET-CHECKLIST.md`](./docs/ASSET-CHECKLIST.md) — photography/video needed per slot
- [`docs/CONTENT-TODO.md`](./docs/CONTENT-TODO.md) — fields for CVS to confirm
