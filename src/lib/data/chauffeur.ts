/**
 * Chauffeur pricing.
 *
 * Two products, one rate card per vehicle:
 *
 *  • Chauffeured DAY HIRE (car waits with you) — priced by a FAIR DISTANCE
 *    FORMULA so every UK city is costed by how far it is from the Birmingham
 *    base, not lumped into flat zones:
 *
 *        day rate = dayBase + (miles from Birmingham × dayPerMile)
 *                            + (destination in London ? londonPremium : 0)
 *
 *    rounded to the nearest £10. Covers a standard day (STANDARD_DAY_HOURS);
 *    longer days add the extra-hour rate. Calibrated to CVS's rough estimates
 *    (e.g. Cullinan ≈ £1,400 to a ~100-mile city, ≈ £1,500 to London).
 *
 *  • TRANSFER (one-way, or return drop-off where the car doesn't wait) — priced
 *    on mileage (per mile, with a minimum fare).
 *
 * These are indicative and fully configurable (docs/PRICING-CONFIG.md).
 */

/** Hours covered by a day rate before the hourly extension applies. */
export const STANDARD_DAY_HOURS = 8;

export interface ChauffeurRate {
  slug: string;
  label: string;
  // ── Day hire (car waits) — fair distance formula ──
  dayBase: number; // £ at the Birmingham base (0 miles)
  dayPerMile: number; // £ per mile of distance from Birmingham to the destination
  londonPremium: number; // £ added when the destination is in London
  extraHourRate: number; // £/hour beyond the standard day
  // ── Transfer (drop-off) ──
  perMileRate: number; // £/mile
  transferMinFare: number; // £ minimum fare for a transfer
  perStopFee: number; // £ per additional stop
  maxPassengers: number;
}

export const chauffeurRates: ChauffeurRate[] = [
  {
    slug: "rolls-royce-phantom-hire",
    label: "Rolls-Royce Phantom",
    dayBase: 600,
    dayPerMile: 1.5,
    londonPremium: 100,
    extraHourRate: 150,
    perMileRate: 3.5,
    transferMinFare: 250,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "rolls-royce-ghost-hire",
    label: "Rolls-Royce Ghost",
    dayBase: 600,
    dayPerMile: 1.5,
    londonPremium: 100,
    extraHourRate: 150,
    perMileRate: 2.5,
    transferMinFare: 200,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "rolls-royce-cullinan-hire",
    label: "Rolls-Royce Cullinan",
    dayBase: 1200,
    dayPerMile: 2.0,
    londonPremium: 40,
    extraHourRate: 180,
    perMileRate: 3.0,
    transferMinFare: 250,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "lamborghini-urus-performante-hire",
    label: "Lamborghini Urus",
    dayBase: 1300,
    dayPerMile: 2.0,
    londonPremium: 40,
    extraHourRate: 180,
    perMileRate: 2.75,
    transferMinFare: 250,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "mercedes-amg-g63-hire",
    label: "Mercedes-AMG G 63 (G-Wagon)",
    dayBase: 820,
    dayPerMile: 0.8,
    londonPremium: 0,
    extraHourRate: 120,
    perMileRate: 2.5,
    transferMinFare: 180,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "mercedes-v-class-hire",
    label: "Mercedes V-Class (up to 8)",
    dayBase: 550,
    dayPerMile: 1.2,
    londonPremium: 60,
    extraHourRate: 90,
    perMileRate: 2.0,
    transferMinFare: 150,
    perStopFee: 15,
    maxPassengers: 8,
  },
];

/** Fair distance-based day rate (rounded to the nearest £10). */
export function dayRateFor(rate: ChauffeurRate, milesFromBase: number, isLondon: boolean): number {
  const raw =
    rate.dayBase + Math.max(0, milesFromBase) * rate.dayPerMile + (isLondon ? rate.londonPremium : 0);
  return Math.round(raw / 10) * 10;
}

/** Event types — captured for context/routing only; they do NOT change price. */
export const chauffeurEventTypes = [
  "Wedding",
  "Prom",
  "Airport transfer",
  "Corporate / business",
  "Night out / event",
  "Other",
] as const;

export function getChauffeurRate(slug: string): ChauffeurRate | undefined {
  return chauffeurRates.find((r) => r.slug === slug);
}
