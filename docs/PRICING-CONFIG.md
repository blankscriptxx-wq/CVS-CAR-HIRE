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

Two products on one card. Destination **zone** is detected automatically from the drop-off postcode
(London / Regional = rest of UK / Local = near Birmingham).

### 2a. Full-day hire (car waits) — DAY RATE by zone
Covers a standard day of **8 hours**; longer days add the extra-hour rate. *(London & Regional are
your figures; Local rates are indicative — please confirm.)*

| Vehicle | Local day | Regional day | London day | Extra £/hr (beyond 8) | Max pax | New values / notes |
|---|---|---|---|---|---|---|
| Rolls-Royce Phantom | £650 | £750 | £900 | £150 | 4 | |
| Rolls-Royce Ghost | £650 | £750 | £900 | £150 | 4 | |
| Rolls-Royce Cullinan | £1,250 | £1,400 | £1,500 | £180 | 4 | |
| Lamborghini Urus | £1,350 | £1,500 | £1,600 | £180 | 4 | |
| Mercedes-AMG G 63 (G-Wagon) | £850 | £900 | £900 | £120 | 4 | |
| Mercedes V-Class (up to 8) | £550 | £650 | £750 | £90 | 8 | |

*Matches your data: Cullinan London day = £1,500 · Cullinan Manchester/Cardiff/Bradford (regional) = £1,400 · Cullinan London 10 hrs = £1,860 (£1,500 + 2×£180).*

### 2b. Transfer (one-way, or return drop-off — car doesn't wait) — per mile
| Vehicle | Per mile | Min fare | Per stop | New values / notes |
|---|---|---|---|---|
| Rolls-Royce Phantom | £3.50 | £250 | £20 | |
| Rolls-Royce Ghost | £2.50 | £200 | £20 | |
| Rolls-Royce Cullinan | £3.00 | £250 | £20 | |
| Lamborghini Urus | £2.75 | £250 | £20 | |
| Mercedes-AMG G 63 (G-Wagon) | £2.50 | £180 | £20 | |
| Mercedes V-Class (up to 8) | £2.00 | £150 | £15 | |

**Transfer pricing:** One-way = one-way miles × per-mile (min fare). · Return drop-off = 2× miles × per-mile (min fare).
**Zone rules:** drop-off in London → London; within ~25 mi of Birmingham → Local; otherwise Regional.
**Mileage factor** (`src/lib/distance.ts`): straight-line × **1.3** — raise for higher estimates, lower for tighter. Exact mileage confirmed on enquiry.

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
