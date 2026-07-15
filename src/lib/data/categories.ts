import type { VehicleCategory, Occasion } from "@/lib/types";

export interface CategoryMeta {
  slug: VehicleCategory;
  label: string;
  short: string; // short label for filters/chips
  blurb: string;
}

/** Fleet categories — used for browse-by-experience and fleet filtering. */
export const categories: CategoryMeta[] = [
  {
    slug: "supercar",
    label: "Supercars",
    short: "Supercars",
    blurb: "Ferrari, Lamborghini and the icons that turn a journey into an event.",
  },
  {
    slug: "luxury-4x4",
    label: "Luxury 4x4s",
    short: "Luxury 4x4s",
    blurb: "Commanding presence and effortless comfort, from Cullinan to G63.",
  },
  {
    slug: "performance",
    label: "Performance",
    short: "Performance",
    blurb: "Precision-engineered speed for those who feel every input.",
  },
  {
    slug: "prestige",
    label: "Prestige",
    short: "Prestige",
    blurb: "Understated luxury that speaks before a word is said.",
  },
  {
    slug: "convertible",
    label: "Convertibles",
    short: "Convertibles",
    blurb: "Open-top elegance for warmer days and unforgettable evenings.",
  },
  {
    slug: "chauffeur",
    label: "Chauffeur",
    short: "Chauffeur",
    blurb: "Arrive composed. A professional at the wheel, the moment yours.",
  },
  {
    slug: "group-travel",
    label: "Group Travel",
    short: "Group Travel",
    blurb: "Space and refinement for the whole party to travel together.",
  },
];

export function categoryLabel(slug: VehicleCategory): string {
  return categories.find((c) => c.slug === slug)?.label ?? slug;
}

export const occasionLabels: Record<Occasion, string> = {
  wedding: "Weddings",
  prom: "Proms",
  corporate: "Corporate",
  airport: "Airport transfers",
  production: "Production & music video",
  birthday: "Birthdays & celebrations",
  weekend: "Weekend escapes",
  track: "Track & driving days",
  "self-drive": "Self-drive",
  chauffeur: "Chauffeur-driven",
};
