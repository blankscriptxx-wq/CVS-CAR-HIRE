/**
 * Chauffeur pricing.
 *
 * Three products, priced fairly by distance from the Birmingham base. Within a
 * LOCAL_RADIUS the price is exactly the Birmingham anchor; beyond it, only the
 * mileage above the radius is charged, so local jobs match CVS's firm Birmingham
 * rates and distant jobs scale fairly.
 *
 *   • One-way (drop-off): oneWayBase + excessMiles × oneWayPerMile
 *   • Return, drop & collect later (LOCAL only, car does two jobs):
 *       returnDropBase + excessMiles × returnDropPerMile
 *   • Return, car waits (day hire — the sensible option once out of town):
 *       dayBase + excessMiles × dayPerMile (+ London premium), plus extra hours
 *
 * Birmingham anchors are CVS-supplied and firm; distance scaling + London
 * premium are calibrated estimates the team can adjust (docs/PRICING-CONFIG.md).
 * The quote is presented as an instant estimate for the team to review/confirm.
 */

/** Jobs within this many miles of Birmingham are priced at the local anchor. */
export const LOCAL_RADIUS_MILES = 15;

/** Beyond this distance, "drop & return" is not offered — the car waits. */
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

export const chauffeurRates: ChauffeurRate[] = [
  {
    slug: "rolls-royce-phantom-hire",
    label: "Rolls-Royce Phantom",
    oneWayBase: 300,
    oneWayPerMile: 3,
    returnDropBase: 400,
    returnDropPerMile: 4,
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
    oneWayBase: 300,
    oneWayPerMile: 3,
    returnDropBase: 400,
    returnDropPerMile: 4,
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
    oneWayBase: 500,
    oneWayPerMile: 4,
    returnDropBase: 800,
    returnDropPerMile: 6,
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
    oneWayBase: 600,
    oneWayPerMile: 4,
    returnDropBase: 1000,
    returnDropPerMile: 6,
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
    oneWayBase: 500,
    oneWayPerMile: 3,
    returnDropBase: 700,
    returnDropPerMile: 5,
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
    oneWayBase: 300,
    oneWayPerMile: 2.5,
    returnDropBase: 500,
    returnDropPerMile: 4,
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

/** Chargeable miles beyond the free local radius. */
export function excessMiles(milesFromBase: number): number {
  return Math.max(0, milesFromBase - LOCAL_RADIUS_MILES);
}

export function getChauffeurRate(slug: string): ChauffeurRate | undefined {
  return chauffeurRates.find((r) => r.slug === slug);
}
