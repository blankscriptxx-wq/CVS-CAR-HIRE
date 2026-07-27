/**
 * Chauffeur pricing.
 *
 * Three products, priced by the journey's REACH — how far the furthest point of
 * the trip (pick-up OR drop-off) is from the Birmingham base. So "Coventry →
 * Birmingham" is priced on the Coventry distance (~22 mi), not the Birmingham
 * drop-off. Price = base + reach × perMile (+ London premium for a day hire),
 * rounded to £10.
 *
 *   • One-way (drop-off):        oneWayBase + reach × oneWayPerMile
 *   • Return, drop & collect:    returnDropBase + reach × returnDropPerMile  (≤30 mi)
 *   • Return, car waits (day):   dayBase + reach × dayPerMile (+ London premium)
 *
 * Bases are tuned so Birmingham jobs (reach ≈ a few miles) hit CVS's firm
 * anchors and nearby towns scale up (e.g. Phantom return: Birmingham £400,
 * Coventry £500). The team reviews every instant quote and can adjust.
 */

/** Beyond this reach, "drop & return" is not offered — the car waits. */
export const DROP_RETURN_MAX_MILES = 30;

/** Hours covered by a day rate before the hourly extension applies. */
export const STANDARD_DAY_HOURS = 8;

export type ChauffeurMode = "one-way" | "return-drop" | "return-wait";

export interface ChauffeurRate {
  slug: string;
  label: string;
  // One-way drop-off
  oneWayBase: number;
  oneWayPerMile: number;
  // Return, drop & collect later (local two-job)
  returnDropBase: number;
  returnDropPerMile: number;
  // Return, car waits (day hire)
  dayBase: number;
  dayPerMile: number;
  londonPremium: number;
  extraHourRate: number;
  // Shared
  perStopFee: number;
  maxPassengers: number;
}

// Bases below are the "at Birmingham base" figures minus a few miles of reach,
// so the Birmingham anchor lands exactly once ~4 miles of reach is added.
export const chauffeurRates: ChauffeurRate[] = [
  {
    slug: "rolls-royce-phantom-hire",
    label: "Rolls-Royce Phantom",
    oneWayBase: 284,
    oneWayPerMile: 4,
    returnDropBase: 378,
    returnDropPerMile: 5.5,
    dayBase: 620,
    dayPerMile: 1.5,
    londonPremium: 100,
    extraHourRate: 150,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "rolls-royce-ghost-hire",
    label: "Rolls-Royce Ghost",
    oneWayBase: 284,
    oneWayPerMile: 4,
    returnDropBase: 378,
    returnDropPerMile: 5.5,
    dayBase: 620,
    dayPerMile: 1.5,
    londonPremium: 100,
    extraHourRate: 150,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "rolls-royce-cullinan-hire",
    label: "Rolls-Royce Cullinan",
    oneWayBase: 472,
    oneWayPerMile: 7,
    returnDropBase: 756,
    returnDropPerMile: 11,
    dayBase: 1200,
    dayPerMile: 2,
    londonPremium: 40,
    extraHourRate: 180,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "lamborghini-urus-performante-hire",
    label: "Lamborghini Urus",
    oneWayBase: 568,
    oneWayPerMile: 8,
    returnDropBase: 944,
    returnDropPerMile: 14,
    dayBase: 1300,
    dayPerMile: 2,
    londonPremium: 40,
    extraHourRate: 180,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "mercedes-amg-g63-hire",
    label: "Mercedes-AMG G 63 (G-Wagon)",
    oneWayBase: 472,
    oneWayPerMile: 7,
    returnDropBase: 660,
    returnDropPerMile: 10,
    dayBase: 820,
    dayPerMile: 0.8,
    londonPremium: 0,
    extraHourRate: 120,
    perStopFee: 20,
    maxPassengers: 4,
  },
  {
    slug: "mercedes-v-class-hire",
    label: "Mercedes V-Class (up to 8)",
    oneWayBase: 284,
    oneWayPerMile: 4,
    returnDropBase: 472,
    returnDropPerMile: 7,
    dayBase: 550,
    dayPerMile: 1.2,
    londonPremium: 60,
    extraHourRate: 90,
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
