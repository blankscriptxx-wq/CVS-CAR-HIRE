# Content & Config To Confirm (CVS Hire)

What remains before / around go-live. Unconfirmed fields are **not shown** on the
site until populated, so nothing misleading appears in the meantime.

## ✅ Already confirmed and live
- Business details — trading name, company number (09119432), registered address
  (70 Glover Street, Birmingham, B9 4EN), phone, email (info@cvshire.co.uk),
  opening hours, socials and Google Business Profile — all set in `siteConfig.ts`.
- Legal — Privacy, Cookie and Terms policies are the solicitor-approved final
  versions; a "Manage cookie preferences" control is wired into the footer.
- Self-drive pricing — daily/weekend/weekly/monthly rates live on the priced
  vehicles; the Get-a-Quote engine uses them.
- Chauffeur pricing — reach-based model (see `docs/CHAUFFEUR-PRICING.md`) across
  the six chauffeur vehicles (Cullinan, Ghost, V-Class, Vogue, Urus, G-Wagon).
- Reviews — Google Place ID wired; keyless "Read Google Reviews" and "Leave a
  review" links are live. Chat is Aniro (WhatsApp/Respond.io removed).
- Photography — every vehicle has real imagery (no placeholders remaining).

## Pricing & commercials (`src/lib/data/vehicles.ts`)
- [ ] **Security deposit** (`deposit`) — not shown for any vehicle; add if you want it displayed.
- [ ] **Included daily mileage** (`includedMileage`) — excess rate is set, but the included allowance is not.
- [ ] Vehicles currently shown as "on enquiry" (no price): **Ferrari Roma, Rolls-Royce
      Cullinan, Rolls-Royce Ghost, BMW 4 Series Convertible, Audi RS3**. Add
      `dailyPriceFrom` / `weekendPriceFrom` / `minimumAge` / `excessMileageCharge` to show prices.
- [ ] **Power (bhp)** figures — left blank to avoid unverified specs; provide if you want them shown.

## Integrations / config (env vars — `.env.example`)
- [ ] **Aniro allowed origins** — add `https://cvshire.co.uk` and `https://www.cvshire.co.uk`
      in the Aniro dashboard before the domain migration (chat + lead-send are blocked otherwise).
- [ ] Analytics ids: `NEXT_PUBLIC_GA4_ID` / `GTM` / `META_PIXEL` / `TIKTOK_PIXEL` / `GOOGLE_ADS_ID`.
- [ ] (Optional) Review **cards** on-site — either connect the Google profile at
      featurable.com and set `NEXT_PUBLIC_FEATURABLE_WIDGET_ID`, or provide a
      `GOOGLE_PLACES_API_KEY`. Both use the Place ID already configured.
- [ ] (Optional) `LEAD_WEBHOOK_URL` / `LEAD_WEBHOOK_TOKEN` — server-side CRM backstop
      for `/api/enquiry` (primary lead delivery is the Aniro chat hand-off).

## Reviews / testimonials (`src/lib/data/testimonials.ts`)
- [ ] The testimonials array is intentionally empty — we do not fabricate reviews.
      Provide genuine testimonials (with permission) or switch on live Google
      review cards via the options above.

## Fleet
- [ ] Confirm the final list of vehicles currently available (add/remove in `vehicles.ts`).
- [ ] (Optional) The Rolls-Royce Phantom appears in chauffeur quotes but has no
      browsable fleet page — add one if you want it listed on the fleet grid.

## Domain migration
- [ ] Point `cvshire.co.uk` at Vercel, verify the 301 redirects resolve, and submit
      the sitemap to Google Search Console.
