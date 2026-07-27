# CVS Car Hire — Pricing Control Sheet

This is the **single place to review and adjust every price** the website's quote tool uses.
Test the quotes on `/quote`, and if any number isn't what you want:

1. Put your preferred figure in the **"New value"** column (leave blank to keep as-is).
2. Add any notes.
3. Send this sheet back and we'll apply the changes.

Everything here maps directly to a file in the codebase (noted per section) — no other price
lives anywhere else.

---

## 1. Self-drive rates — `src/lib/data/vehicles.ts`

Per-vehicle rates from your pricing guide. Blank rows = "price on enquiry" (not quotable online yet;
add rates if you want them quotable).

| Vehicle | Daily | Weekend (3d) | Weekly (7d) | Monthly (28d) | Min age | Excess £/mile | New values / notes |
|---|---|---|---|---|---|---|---|
| Mercedes E-Class | £250 | £650 | £800 | £1,800 | 21 | £0.50 | |
| BMW X5 (7 seat) | £250 | £650 | £1,000 | £2,300 | 23 | £0.65 | |
| Mercedes GLC 43 AMG | £350 | £900 | £1,500 | £3,500 | 23 | £0.75 | |
| Range Rover Sport | £350 | £900 | £1,500 | £3,500 | 23 | £1.00 | |
| VW Golf R | £250 | £700 | £1,000 | £3,000 | 23 | £0.90 | |
| Mercedes V-Class (8 seat) | £350 | £900 | £1,000 | £2,500 | 23 | £0.80 | |
| Range Rover SVR | £400 | £1,000 | £2,000 | £4,200 | 23 | £1.15 | |
| Mercedes-AMG G 63 | £700 | £1,800 | £3,000 | £6,500 | 25 | £1.80 | |
| Lamborghini Urus Performante | £1,200 | £3,200 | £5,000 | £8,900 | 25 | £2.00 | |
| Lamborghini Huracán Perf. Spyder | £1,200 | £3,200 | £5,000 | £8,900 | 25 | £2.00 | |
| Audi R8 Spyder | £700 | £1,800 | £3,000 | £6,500 | 25 | £1.85 | |
| Ferrari Roma | on enquiry | – | – | – | – | – | add rates? |
| Rolls-Royce Cullinan | on enquiry | – | – | – | – | – | add rates? |
| Rolls-Royce Ghost | on enquiry | – | – | – | – | – | add rates? |
| Audi RS3 | on enquiry | – | – | – | – | – | add rates? |
| BMW 4 Series Convertible | on enquiry | – | – | – | – | – | add rates? |

**How multi-day pricing is calculated** (change only if you want a different structure):
- 1–2 days = daily rate × days
- 3 days = the weekend (3-day) rate
- 4–6 days = weekend rate + a daily rate per extra day
- 7+ days = weekly rate + a daily rate per extra day
- 28+ days = monthly rate + the remainder on top
- The tool always uses the **cheapest** combination, so a customer never pays more for a shorter
  hire (e.g. 9 days = 1 weekly + 2 daily). Tier lengths (3 / 7 / 28 days) can be changed in
  `src/lib/quote.ts` if needed.

---

## 2. Chauffeur rates — `src/lib/data/chauffeur.ts`

Three products, all scaled by **distance from Birmingham**. Jobs within a **15-mile local radius**
are priced at the Birmingham anchor exactly; beyond that, only the mileage above 15 is charged, so
local jobs match your firm Birmingham rates and distant jobs scale fairly. All figures round to £10.

> **price = base + max(0, milesFromBirmingham − 15) × perMile ( + London premium for day hire )**

**"Drop & return" is only offered within 30 miles** — beyond that the car waits (it can't sensibly
return to base mid-job). London is auto-detected from the drop-off postcode.

### 2a. One-way (drop-off)
| Vehicle | Birmingham (base) | Per mile | New values / notes |
|---|---|---|---|
| Rolls-Royce Phantom | £300 | £3.00 | |
| Rolls-Royce Ghost | £300 | £3.00 | |
| Rolls-Royce Cullinan | £500 | £4.00 | |
| Lamborghini Urus | £600 | £4.00 | |
| Mercedes-AMG G 63 (G-Wagon) | £500 | £3.00 | |
| Mercedes V-Class (up to 8) | £300 | £2.50 | |

### 2b. Return — drop off & collect later (local only, ≤30 mi)
| Vehicle | Birmingham (base) | Per mile | New values / notes |
|---|---|---|---|
| Rolls-Royce Phantom | £400 | £4.00 | |
| Rolls-Royce Ghost | £400 | £4.00 | |
| Rolls-Royce Cullinan | £800 | £6.00 | |
| Lamborghini Urus | £1,000 | £6.00 | |
| Mercedes-AMG G 63 (G-Wagon) | £700 | £5.00 | |
| Mercedes V-Class (up to 8) | £500 | £4.00 | |

### 2c. Return — car waits (full day)
Covers a standard **8-hour** day; longer days add the extra-hour rate. London adds a premium.
| Vehicle | Birmingham (base) | Per mile | London premium | Extra £/hr | Max pax | New values / notes |
|---|---|---|---|---|---|---|
| Rolls-Royce Phantom | £620 | £1.50 | £100 | £150 | 4 | |
| Rolls-Royce Ghost | £620 | £1.50 | £100 | £150 | 4 | |
| Rolls-Royce Cullinan | £1,200 | £2.00 | £40 | £180 | 4 | |
| Lamborghini Urus | £1,300 | £2.00 | £40 | £180 | 4 | |
| Mercedes-AMG G 63 (G-Wagon) | £820 | £0.80 | £0 | £120 | 4 | |
| Mercedes V-Class (up to 8) | £550 | £1.20 | £60 | £90 | 8 | |

*Verified against your anchors: Cullinan Birmingham one-way £500 · Birmingham return (drop) £800 · London return (car waits, ~131 mi) £1,470 · Urus Birmingham return £1,000 · Ghost Birmingham one-way £300.*
**Mileage factor** (`src/lib/distance.ts`): straight-line × **1.3**. **Local radius / drop-return cut-off**: 15 / 30 miles (`chauffeur.ts`).

---

## 3. Delivery & collection — `src/lib/data/pricing.ts`

Self-drive delivery (each way, charged individually, £500 cap):

| Distance from Birmingham | Cost (each way) | New value / notes |
|---|---|---|
| Local (Birmingham / out of town) | from £50 | |
| Up to 100 miles | £200 | |
| Up to 150 miles | £250 | |
| Beyond 150 miles | £1.80 per extra mile (to £500 cap) | |

---

## Quick reference — what lives where
| To change… | Edit |
|---|---|
| Self-drive vehicle rates / ages / excess mileage | `src/lib/data/vehicles.ts` |
| Multi-day tier logic (3/7/28 day lengths) | `src/lib/quote.ts` |
| Chauffeur rates / passengers | `src/lib/data/chauffeur.ts` |
| Mileage road factor | `src/lib/distance.ts` |
| Delivery bands | `src/lib/data/pricing.ts` |
| Airport list | `src/lib/data/airports.ts` |
