/**
 * Chauffeur pricing.
 *
 * Two products, one rate card per vehicle:
 *
 *  • Chauffeured DAY HIRE (car waits with you) — priced by a DAY RATE that
 *    varies by destination zone (Local Birmingham / Regional UK / London).
 *    Covers a standard day (up to STANDARD_DAY_HOURS); longer days add an
 *    hourly extension. This mirrors how CVS actually quotes full-day trips.
 *
 *  • TRANSFER (one-way, or return drop-off where the car doesn't wait) — priced
 *    on mileage (per mile, with a minimum fare).
 *
 * The same card also carries per-stop and passenger info. Day rates for London
 * and Regional are CVS-supplied; Local rates and the transfer/extension figures
 * are indicative and marked for confirmation (docs/CONTENT-TODO.md).
 */

/** Hours covered by a day rate before the hourly extension applies. */
export const STANDARD_DAY_HOURS = 8;

export type ChauffeurZone = "local" | "regional" | "london";

export const zoneLabels: Record<ChauffeurZone, string> = {
  local: "Local (Birmingham & West Midlands)",
  regional: "Regional (rest of UK)",
  london: "London",
};

export interface ChauffeurRate {
  slug: string;
  label: string;
  /** Full-day (car waits) rate by destination zone. */
  dayRate: Record<ChauffeurZone, number>;
  extraHourRate: number; // £/hour beyond the standard day
  perMileRate: number; // £/mile (transfers)
  transferMinFare: number; // £ minimum fare for a transfer
  perStopFee: number; // £ per additional stop
  maxPassengers: number;
}

/**
 * Rate card. London & Regional day rates from CVS's own pricing examples;
 * Local day rates + transfer/extension rates are indicative (to confirm).
 */
export const chauffeurRates: ChauffeurRate[] = [
  {
    slug: "rolls-royce-phantom-hire",
    label: "Rolls-Royce Phantom",
    dayRate: { local: 650, regional: 750, london: 900 },
    extraHourRate: 150,
    perMileRate: 3.5,
    transferMinFare: 250,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "rolls-royce-ghost-hire",
    label: "Rolls-Royce Ghost",
    dayRate: { local: 650, regional: 750, london: 900 },
    extraHourRate: 150,
    perMileRate: 2.5,
    transferMinFare: 200,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "rolls-royce-cullinan-hire",
    label: "Rolls-Royce Cullinan",
    dayRate: { local: 1250, regional: 1400, london: 1500 },
    extraHourRate: 180,
    perMileRate: 3.0,
    transferMinFare: 250,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "lamborghini-urus-performante-hire",
    label: "Lamborghini Urus",
    dayRate: { local: 1350, regional: 1500, london: 1600 },
    extraHourRate: 180,
    perMileRate: 2.75,
    transferMinFare: 250,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "mercedes-amg-g63-hire",
    label: "Mercedes-AMG G 63 (G-Wagon)",
    dayRate: { local: 850, regional: 900, london: 900 },
    extraHourRate: 120,
    perMileRate: 2.5,
    transferMinFare: 180,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "mercedes-v-class-hire",
    label: "Mercedes V-Class (up to 8)",
    dayRate: { local: 550, regional: 650, london: 750 },
    extraHourRate: 90,
    perMileRate: 2.0,
    transferMinFare: 150,
    perStopFee: 15,
    maxPassengers: 8,
  },
];

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
