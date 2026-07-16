/**
 * Chauffeur pricing — Rolls-Royce only for now.
 *
 * Rates are benchmarked against typical UK luxury-chauffeur pricing (2025/26),
 * positioned for a Birmingham/regional operator rather than central London.
 * They are INDICATIVE and fully configurable — CVS can adjust in one place
 * (see docs/CONTENT-TODO.md). By UK convention these are treated as inclusive
 * of the chauffeur, fuel and parking.
 *
 * Pricing is driven by two dimensions — HOURS and MILEAGE — and the same rate
 * card applies to every event type (weddings, proms, airport, corporate, etc.).
 * Which dimension leads depends on one question: does the car stay with you?
 *
 *   • Stays with you ("as directed") → billed on HOURS (hourly rate, minimum
 *     hours), with a generous mileage allowance; only extra miles are charged.
 *   • Drop-off ("transfer / point-to-point") → billed on MILEAGE (per mile),
 *     with a minimum fare. One-way or return, plus any additional stops.
 */

export interface ChauffeurRate {
  slug: string;
  label: string;
  hourlyRate: number; // £/hour (as-directed)
  minHours: number; // minimum billable hours
  includedMilesPerHour: number; // mileage allowance within an as-directed hire
  perMileRate: number; // £/mile (transfers, and extra miles on as-directed)
  transferMinFare: number; // £ minimum for a point-to-point transfer
  perStopFee: number; // £ per additional stop
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
    includedMilesPerHour: 15,
    perMileRate: 3.5,
    transferMinFare: 200,
    perStopFee: 20,
  },
  {
    slug: "rolls-royce-ghost-hire",
    label: "Rolls-Royce Ghost",
    hourlyRate: 150,
    minHours: 3,
    includedMilesPerHour: 15,
    perMileRate: 2.5,
    transferMinFare: 150,
    perStopFee: 20,
  },
  {
    slug: "rolls-royce-cullinan-hire",
    label: "Rolls-Royce Cullinan",
    hourlyRate: 180,
    minHours: 3,
    includedMilesPerHour: 15,
    perMileRate: 3.0,
    transferMinFare: 180,
    perStopFee: 20,
  },
  {
    slug: "lamborghini-urus-performante-hire",
    label: "Lamborghini Urus",
    hourlyRate: 160,
    minHours: 3,
    includedMilesPerHour: 15,
    perMileRate: 2.75,
    transferMinFare: 160,
    perStopFee: 20,
  },
  {
    slug: "mercedes-amg-g63-hire",
    label: "Mercedes-AMG G 63 (G-Wagon)",
    hourlyRate: 120,
    minHours: 3,
    includedMilesPerHour: 15,
    perMileRate: 2.5,
    transferMinFare: 130,
    perStopFee: 20,
  },
  {
    slug: "mercedes-v-class-hire",
    label: "Mercedes V-Class (up to 8)",
    hourlyRate: 75,
    minHours: 3,
    includedMilesPerHour: 15,
    perMileRate: 2.0,
    transferMinFare: 120,
    perStopFee: 15,
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
