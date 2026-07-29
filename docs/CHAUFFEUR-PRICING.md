# CVS Hire — Chauffeur Pricing Guide (Aniro Knowledge Source)

This document explains exactly how CVS Hire's chauffeur-driven quotes are
calculated on the website, so the assistant can give the **same** indicative
prices in chat. Every quote is a **guide** — the CVS team reviews it and
confirms the final price before booking, and can tailor it.

Base location: **Birmingham** (all pricing is measured from here).

---

## 1. The core idea — pricing by "reach"

Chauffeur prices scale with the **reach** of the journey: **how far the furthest
point of the trip (either the pick-up OR the drop-off) is from Birmingham**, in
road miles.

- So **Coventry → Birmingham** is priced on the **Coventry** distance (~22 mi),
  **not** the Birmingham drop-off. It's the same price as Birmingham → Coventry.
- Local Birmingham jobs have a reach of only a few miles, so they land on CVS's
  standard anchor prices.

> **reach = the larger of (miles from Birmingham to pick-up) and (miles from Birmingham to drop-off).**

Road miles are estimated as straight-line distance × 1.3. Exact mileage is
confirmed by the team.

---

## 2. The three chauffeur products

Ask the customer what they need, then use the matching formula.

| # | Product | When to use | Formula |
|---|---------|-------------|---------|
| 1 | **One-way (drop-off)** | A single journey in one direction (e.g. an airport drop, or A→B, car does not wait or return) | `oneWayBase + reach × oneWayPerMile` |
| 2 | **Return — drop & collect later** | A return trip where the furthest point is **within 30 miles** of Birmingham and the customer is happy for the car to drop them and come back later | `returnDropBase + reach × returnDropPerMile` |
| 3 | **Chauffeured day — car waits** | A return trip that is **over 30 miles** from Birmingham, **or** any time the customer wants the car and chauffeur to **stay with them**. Covers up to **8 hours** | `dayBase + reach × dayPerMile` (+ London premium) |

**Rules:**
- "Drop & collect later" (product 2) is only offered when reach is **30 miles or
  less**. Beyond that, a return is always priced as a **chauffeured day** (product 3).
- If the customer wants the car to wait with them the whole time, use product 3
  even for local trips.

---

## 3. Add-ons and rounding

Apply these on top of the product formula:

- **Rounding:** the base formula result is rounded to the nearest **£10**.
  (Add-ons below are then added on.)
- **Extra hours (day hire only):** a chauffeured day covers **8 hours**. Each hour
  beyond 8 is charged at that vehicle's **extra-hour rate**.
- **London premium (day hire only):** if the pick-up **or** drop-off is in London,
  add the vehicle's **London premium** to the day rate. (Does not apply to one-way
  or drop & collect.)
- **Additional stops (any product):** add the vehicle's **per-stop fee** for each
  extra stop.
- **Event type** (wedding, prom, airport, corporate, etc.) is captured for context
  only — it **does not change** the price.

---

## 4. Per-vehicle rate card

All figures in **£**. "per mile" figures multiply the **reach**.

| Vehicle | Max pax | One-way base | One-way /mi | Drop&collect base | Drop&collect /mi | Day base | Day /mi | London premium | Extra hour | Per stop |
|---------|:------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Rolls-Royce Phantom** | 4 | 284 | 4 | 378 | 5.5 | 620 | 1.5 | 100 | 150 | 20 |
| **Rolls-Royce Ghost** | 4 | 284 | 4 | 378 | 5.5 | 620 | 1.5 | 100 | 150 | 20 |
| **Rolls-Royce Cullinan** | 4 | 472 | 7 | 756 | 11 | 1200 | 2 | 40 | 180 | 20 |
| **Lamborghini Urus** | 4 | 568 | 8 | 944 | 14 | 1300 | 2 | 40 | 180 | 20 |
| **Mercedes-AMG G 63 (G-Wagon)** | 4 | 472 | 7 | 660 | 10 | 820 | 0.8 | 0 | 120 | 20 |
| **Mercedes V-Class (up to 8)** | 8 | 284 | 4 | 472 | 7 | 550 | 1.2 | 60 | 90 | 15 |

Standard day = **8 hours**. Drop & collect available only when reach ≤ **30 miles**.

---

## 5. Typical reach reference (approximate)

Reach = approx road miles from Birmingham. Use these to estimate; the team
confirms exact distance.

| Destination | Approx reach (mi) |
|-------------|:---:|
| Birmingham (city / local) | 3–6 |
| Birmingham Airport (BHX) | ~9 |
| Solihull / Sutton Coldfield / Walsall | ~9–10 |
| Wolverhampton | ~16 |
| **Coventry** | **~22** |
| Leicester / Derby | ~40 |
| Stoke-on-Trent | ~45 |
| Nottingham | ~52 |
| Manchester | ~85 |
| Liverpool | ~100 |
| Leeds | ~118 |
| **London** (incl. Heathrow) | **~130** |

---

## 6. Worked examples

**Phantom / Ghost**
- One-way, local Birmingham (reach 4): 284 + 4×4 = 300 → **£300**
- One-way, Coventry (reach 22): 284 + 22×4 = 372 → **£370**
- Return drop & collect, Birmingham (reach 4): 378 + 4×5.5 = 400 → **£400**
- Return drop & collect, **Coventry (reach 22): 378 + 22×5.5 = 499 → £500**
- Chauffeured day, Birmingham, 8 hrs (reach 4): 620 + 4×1.5 = 626 → **£630**
- Chauffeured day, London wedding, 12 hrs (reach 130): 620 + 130×1.5 + 100 London = 915 → £920, **+ 4 extra hrs × £150 = £600 → £1,520**

**Rolls-Royce Cullinan**
- One-way, local (reach 4): 472 + 4×7 = 500 → **£500**
- Return drop & collect, Birmingham (reach 4): 756 + 4×11 = 800 → **£800**
- Return drop & collect, Coventry (reach 22): 756 + 22×11 = 998 → **£1,000**
- Chauffeured day, Birmingham, 8 hrs (reach 4): 1200 + 4×2 = 1208 → **£1,210**

**Lamborghini Urus**
- Return drop & collect, Birmingham (reach 4): 944 + 4×14 = 1000 → **£1,000**
- Chauffeured day, Birmingham, 8 hrs (reach 4): 1300 + 4×2 = 1308 → **£1,310**

**Mercedes-AMG G 63**
- Return drop & collect, Birmingham (reach 4): 660 + 4×10 = 700 → **£700**
- Chauffeured day, Birmingham, 8 hrs (reach 4): 820 + 4×0.8 = 823 → **£820**

**Mercedes V-Class (up to 8 passengers)**
- One-way, local (reach 4): 284 + 4×4 = 300 → **£300**
- Return drop & collect, Birmingham (reach 4): 472 + 4×7 = 500 → **£500**
- Chauffeured day, Birmingham, 8 hrs (reach 4): 550 + 4×1.2 = 555 → **£550**

---

## 7. How to answer a pricing question in chat

1. Identify the **vehicle** (or suggest one; note the 4-passenger cap on all except
   the V-Class, which seats up to 8).
2. Ask **pick-up and drop-off** (or general area) to estimate the **reach**, and the
   **date/times**.
3. Ask whether it's **one-way**, a **return where the car drops off and collects
   later**, or a day where the **car waits** with them.
4. Apply the matching formula, round to £10, then add extra hours (day only),
   London premium (day only), and any extra stops.
5. Always present it as an **indicative "from" price**, and offer to have the team
   confirm and tailor it. Collect the customer's **name and mobile/email** so the
   team can follow up with the exact quote.

**Never** invent discounts or quote a firm final price — the team confirms every
booking and can often improve on the guide price.
