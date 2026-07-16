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
confirmed pricing guide; chauffeur rates are **benchmarked to typical UK luxury-chauffeur pricing
(2025/26)** and priced on **hours + mileage** with the same rate card for every event type. The
model asks whether the car stays with you: *stays = hourly (as directed)*, *drop-off = per-mile
transfer*. Please review and confirm:
Available chauffeur vehicles (hourly / per-mile / transfer min fare — indicative):
- [ ] Rolls-Royce Phantom — £200/hr · £3.50/mi · £200 min
- [ ] Rolls-Royce Ghost — £150/hr · £2.50/mi · £150 min
- [ ] Rolls-Royce Cullinan — £180/hr · £3.00/mi · £180 min
- [ ] Lamborghini Urus — £160/hr · £2.75/mi · £160 min
- [ ] Mercedes-AMG G 63 (G-Wagon) — £120/hr · £2.50/mi · £130 min
- [ ] Mercedes V-Class (up to 8) — £75/hr · £2.00/mi · £120 min

Shared settings to confirm:
- [ ] Minimum hours (3) and included mileage allowance (15 mi/hour) on as-directed hires.
- [ ] Per-stop fee (£20, or £15 for the V-Class; UK norm £15–£30).
- [ ] VAT-inclusive assumed (UK convention), inclusive of chauffeur, fuel and parking
      (congestion/ULEZ where applicable).
- [ ] UK benchmarks used: regional Rolls-Royce hourly ~£150–220/hr (London higher); luxury
      per-mile ~£1.50–£3.50. Note: the Phantom does not yet have a fleet page — add one if you
      want it browsable, or keep it chauffeur-only.

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
