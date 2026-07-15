# Existing Website Audit — cvshire.co.uk

Audit of the current CVS Car Hire website (Wix-based) as the basis for the rebuild.

## Confirmed factual information (retained)

| Item | Value |
| --- | --- |
| Founded | 2014 |
| Fleet size | 50+ vehicles |
| Base | Birmingham, West Midlands |
| Coverage | Nationwide UK delivery, subject to vehicle & location |
| Membership | BVRLA |
| Phone | 0121 572 3422 |
| WhatsApp | +44 7772 233314 |
| Instagram | @cvshire |
| Hire types | Self-drive & chauffeur |

**Fleet (models identified):** Lamborghini Urus / Urus Performante / Huracán / Huracán Performante,
Ferrari Roma, Audi R8 Spyder / RSQ8 / Q7 / S3 / RS3, Mercedes G63 AMG / V-Class / E-Class / E & C
Cabriolet / GLC 43 AMG, BMW 4 Series Cabriolet, Rolls-Royce Cullinan / Ghost / Dawn / Wraith,
Range Rover SVR / Sport, VW Golf R.

**Confirmed pricing** — supplied by CVS in the pricing guideline (used in `vehicles.ts` / `pricing.ts`):
daily/weekend/weekly/monthly rates, minimum ages (21–25 by class) and excess-mileage rates, plus the
delivery & collection cost bands.

## What was RETAINED
- All confirmed business facts above.
- The fleet line-up and service categories.
- Genuine trust signals (est. 2014, 50+ fleet, BVRLA, Birmingham).
- Confirmed pricing structure and minimum ages.

## What was REWRITTEN
- **All copy.** Every headline and description rewritten to a premium, confident, British editorial
  tone. Original site copy ("second to none", "premium service without charging a premium price")
  replaced with distinctive, brand-led writing.
- Page titles / meta descriptions rewritten for each page with local-SEO intent.
- Vehicle descriptions rewritten to sell the *experience*, not just list specs.

## What was REMOVED / REPLACED
- **Wix template chrome** → bespoke Next.js design system.
- **E-commerce-style "book now" flows** → conversation-led enquiry (Check Availability → chat/WhatsApp/call/form). No cart.
- **24-item mega-menu of individual vehicles** → clean primary nav + filterable digital showroom.
- **Duplicate/overlapping service pages** → one canonical service template with distinct landing pages.
- **Generic stock feel** → cinematic dark editorial identity.

## Weaknesses in the current site (addressed)
| Weakness | Fix in rebuild |
| --- | --- |
| Dated, template-like visual design | Bespoke luxury design system |
| Cluttered navigation (24+ fleet links) | Filterable fleet + concise nav |
| Inconsistent, salesy copy | Rewritten premium editorial copy |
| Weak mobile experience | Mobile-first, sticky action bar, 44px targets |
| Thin/duplicate service content | Distinct, structured service pages |
| Limited structured data / SEO | Full JSON-LD, metadata, sitemap, redirects |
| No clear single conversion path | "Check Availability" primary CTA throughout |
| Pricing scattered / unclear | Confirmed per-vehicle "from" rates + delivery table |

## Missing information (flagged for owner — see CONTENT-TODO.md)
- Real photography (rights-cleared, high-resolution) for each vehicle & section.
- Security deposit amounts and included daily mileage per vehicle.
- Exact street address (if to be published) and Google Business Profile URL.
- Genuine review content / live Google reviews connection.
- Final legal copy (privacy, cookies, terms) for solicitor approval.
