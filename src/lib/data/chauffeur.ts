/**
 * Chauffeur pricing — Rolls-Royce only for now (as requested).
 *
 * These figures are ESTIMATES based on typical UK luxury-chauffeur pricing,
 * provided so the quote tool works end-to-end. CVS should review and confirm
 * them (see docs/CONTENT-TODO.md). Everything here is configurable.
 *
 * Model: a chauffeured hire is billed on time (an hourly rate with a minimum
 * number of hours), plus a travel charge based on distance from the Birmingham
 * base — because a nationwide job requires the chauffeur to position the car
 * out and back. This keeps local Birmingham hires affordable while fairly
 * pricing longer-distance work.
 */

export interface ChauffeurVehicleRate {
  /** Vehicle slug this rate applies to. */
  slug: string;
  label: string;
  hourlyRate: number; // £ per hour
  minimumHours: number; // minimum billable hours
}

export interface ChauffeurDistanceBand {
  id: string;
  label: string;
  /** Additional travel charge from the Birmingham base (£). "from" when noted. */
  surcharge: number;
  from?: boolean; // surcharge is a starting point (e.g. nationwide)
}

/** Rolls-Royce chauffeur rates (estimates — owner to confirm). */
export const chauffeurRates: ChauffeurVehicleRate[] = [
  { slug: "rolls-royce-ghost-hire", label: "Rolls-Royce Ghost", hourlyRate: 95, minimumHours: 3 },
  { slug: "rolls-royce-cullinan-hire", label: "Rolls-Royce Cullinan", hourlyRate: 110, minimumHours: 3 },
];

/**
 * Travel bands from Birmingham. Surcharges cover the chauffeur's positioning
 * time and mileage out from — and back to — the West Midlands base.
 */
export const chauffeurDistanceBands: ChauffeurDistanceBand[] = [
  { id: "local", label: "Birmingham & West Midlands", surcharge: 0 },
  { id: "50", label: "Up to 50 miles (e.g. Cotswolds, Stoke)", surcharge: 120 },
  { id: "100", label: "Up to 100 miles (e.g. Manchester, London fringe)", surcharge: 250 },
  { id: "150", label: "Up to 150 miles (e.g. London, Leeds)", surcharge: 400 },
  { id: "nationwide", label: "Nationwide (150+ miles)", surcharge: 600, from: true },
];

export function getChauffeurRate(slug: string): ChauffeurVehicleRate | undefined {
  return chauffeurRates.find((r) => r.slug === slug);
}

export function getDistanceBand(id: string): ChauffeurDistanceBand | undefined {
  return chauffeurDistanceBands.find((b) => b.id === id);
}
