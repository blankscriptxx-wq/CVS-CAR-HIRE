# Content To Confirm (for CVS Car Hire)

Everything below is either unconfirmed or requires owner/solicitor sign-off. Unconfirmed fields are
**not shown** on the site until populated, so nothing misleading appears in the meantime.

## Pricing & commercials (`src/lib/data/vehicles.ts`)
Confirmed from the pricing guideline and already live on the relevant vehicles: daily & weekend "from"
prices, minimum ages, excess-mileage rates. Still to confirm **per vehicle**:

- [ ] **Security deposit** amount (`deposit`) — not currently shown for any vehicle.
- [ ] **Included daily mileage** (`includedMileage`) — the excess rate is set, but the included
      allowance is not; confirm so it can be displayed.
- [ ] Pricing for vehicles not in the guideline: **Ferrari Roma, Rolls-Royce Cullinan, Rolls-Royce
      Ghost, BMW 4 Series Convertible, Audi RS3** currently show no price (marked "on enquiry"). Add
      `dailyPriceFrom` / `weekendPriceFrom` / `minimumAge` / `excessMileageCharge` if you want them shown.
- [ ] Confirm **power (bhp)** figures if you want them displayed (left blank to avoid unverified specs).

## Fleet accuracy
- [ ] Confirm the final list of vehicles currently available (add/remove in `vehicles.ts`).
- [ ] Confirm seat counts / transmission where a specific car differs from the standard config.
- [ ] Confirm which vehicles are **self-drive**, **chauffeur**, or both.

## Business details (`src/lib/siteConfig.ts`)
- [ ] Public **email** address (blank → not shown).
- [ ] **Street address / postcode** if you want it published (blank → only city/region shown).
- [ ] **Google Business Profile URL** (for the live reviews link + map).

## Integrations (`.env.local`)
- [ ] `NEXT_PUBLIC_RESPONDIO_WIDGET_ID` — Respond.io web-chat widget id.
- [ ] `RESPONDIO_WEBHOOK_URL` / `RESPONDIO_API_TOKEN` — server-side enquiry forwarding (secret).
- [ ] Analytics ids: GA4 / GTM / Meta Pixel / TikTok Pixel / Google Ads.
- [ ] Confirm the WhatsApp number (`NEXT_PUBLIC_CVS_WHATSAPP_NUMBER`, currently 447772233314).

## Chauffeur pricing (`src/lib/data/chauffeur.ts`)
The Get a Quote tool includes Rolls-Royce chauffeur pricing. Self-drive rates come from your
confirmed pricing guide, but chauffeur rates are **estimates** based on typical UK luxury-chauffeur
pricing so the tool works end-to-end. Please review and confirm:
- [ ] Hourly rate + minimum hours per Rolls-Royce (currently Ghost £95/hr, Cullinan £110/hr, min 3 hrs).
- [ ] Travel surcharges from Birmingham by distance band (currently £0 local → from £600 nationwide).
- [ ] Whether to add chauffeur pricing for other vehicles (only the Rolls-Royce collection for now).

## Reviews (`src/lib/data/testimonials.ts`)
- [ ] Provide **genuine** testimonials (with permission) or connect a live Google Reviews feed.
      The array is intentionally empty — we do not fabricate reviews. The Reviews section degrades
      gracefully to a Google/Instagram prompt until populated.

## Legal (requires approval)
- [ ] **Privacy Policy**, **Cookie Policy**, **Terms & Conditions** — the drafts are clearly marked
      as placeholders and must be reviewed/approved by CVS and a solicitor before launch.
- [ ] Confirm complaints procedure (incl. BVRLA conciliation reference).

## Photography
- [ ] See `ASSET-CHECKLIST.md` — real images per vehicle and section.
