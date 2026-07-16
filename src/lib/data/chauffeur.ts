/**
 * Chauffeur pricing — Rolls-Royce only for now.
 *
 * Rates are benchmarked against typical UK luxury-chauffeur pricing (2025/26),
 * positioned for a Birmingham/regional operator rather than central London.
 * They are INDICATIVE and fully configurable — CVS can adjust in one place
 * (see docs/CONTENT-TODO.md). By UK convention these are treated as inclusive
 * of the chauffeur, fuel and parking.
 *
 * Priced on MILEAGE, with a waiting charge when the car stays. Same rate card
 * for every event type (weddings, proms, airport, corporate, etc.).
 *
 *   • One-way → the car drops off and leaves: one-way mileage only.
 *   • Return, drop-off → the car returns to collect later: return mileage (2×).
 *   • Return, car waits → return mileage (2×) PLUS a waiting charge
 *     (waiting hours × hourly rate) for the time the car stays with you.
 *
 * A minimum fare applies to the mileage; additional stops add a per-stop fee.
 */

export interface ChauffeurRate {
  slug: string;
  label: string;
  hourlyRate: number; // £/hour — used for waiting time when the car stays
  minHours: number; // minimum billable waiting hours
  perMileRate: number; // £/mile
  transferMinFare: number; // £ minimum fare for the mileage
  perStopFee: number; // £ per additional stop
  maxPassengers: number; // seating capacity for a chauffeured hire
}

/**
 * Chauffeur rate card (indicative, benchmarked to UK market). Positioned by
 * tier: the Rolls-Royce Phantom flagship at the top, down to the Mercedes
 * V-Class executive people-carrier as the value / group option.
 */
export const chauffeurRates: ChauffeurRate[] = [
  {
    slug: "rolls-royce-phantom-hire",
    label: "Rolls-Royce Phantom",
    hourlyRate: 200,
    minHours: 3,
    perMileRate: 3.5,
    transferMinFare: 200,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "rolls-royce-ghost-hire",
    label: "Rolls-Royce Ghost",
    hourlyRate: 150,
    minHours: 3,
    perMileRate: 2.5,
    transferMinFare: 150,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "rolls-royce-cullinan-hire",
    label: "Rolls-Royce Cullinan",
    hourlyRate: 180,
    minHours: 3,
    perMileRate: 3.0,
    transferMinFare: 180,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "lamborghini-urus-performante-hire",
    label: "Lamborghini Urus",
    hourlyRate: 160,
    minHours: 3,
    perMileRate: 2.75,
    transferMinFare: 160,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "mercedes-amg-g63-hire",
    label: "Mercedes-AMG G 63 (G-Wagon)",
    hourlyRate: 120,
    minHours: 3,
    perMileRate: 2.5,
    transferMinFare: 130,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "mercedes-v-class-hire",
    label: "Mercedes V-Class (up to 8)",
    hourlyRate: 75,
    minHours: 3,
    perMileRate: 2.0,
    transferMinFare: 120,
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
