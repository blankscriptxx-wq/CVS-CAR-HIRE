/**
 * Shared content types. These mirror the fields an eventual headless CMS
 * (Sanity / Payload) would expose, so the local content layer can migrate
 * cleanly. Optional fields that are unconfirmed are left `undefined` and are
 * NEVER rendered on the frontend.
 */

export type VehicleCategory =
  | "supercar"
  | "luxury-4x4"
  | "performance"
  | "prestige"
  | "convertible"
  | "chauffeur"
  | "group-travel";

export type BodyType =
  | "coupe"
  | "convertible"
  | "suv"
  | "saloon"
  | "estate"
  | "mpv"
  | "hatchback";

export type Transmission = "automatic" | "manual" | "semi-automatic";
export type FuelType = "petrol" | "diesel" | "hybrid" | "electric";
export type Drivetrain = "awd" | "rwd" | "fwd";
export type AvailabilityStatus = "available" | "on-request" | "coming-soon";

export type Occasion =
  | "wedding"
  | "prom"
  | "corporate"
  | "airport"
  | "production"
  | "birthday"
  | "weekend"
  | "track"
  | "self-drive"
  | "chauffeur";

export interface ImageAsset {
  /** Path under /public, or remote URL. */
  src: string;
  alt: string;
  caption?: string;
  /** Marks a slot awaiting real photography — renders the on-brand placeholder. */
  placeholder?: boolean;
}

export interface Vehicle {
  id: string;
  slug: string;
  manufacturer: string;
  model: string;
  edition?: string;
  year?: number;
  category: VehicleCategory;
  bodyType?: BodyType;

  heroImage: ImageAsset;
  gallery?: ImageAsset[];
  video?: { src: string; poster?: string };

  shortDescription: string;
  fullDescription: string;

  // Specifications — only rendered when confirmed (non-undefined).
  seats?: number;
  doors?: number;
  transmission?: Transmission;
  fuelType?: FuelType;
  drivetrain?: Drivetrain;
  power?: string; // e.g. "657 bhp" — owner to confirm
  colour?: string;
  interiorColour?: string;

  // Hire type
  selfDriveAvailable: boolean;
  chauffeurAvailable: boolean;

  // Commercials — UNCONFIRMED unless owner sets them (see CONTENT-TODO.md).
  minimumAge?: number;
  dailyPriceFrom?: number; // GBP
  weekendPriceFrom?: number; // GBP (3-day rate)
  weeklyPriceFrom?: number; // GBP (7-day rate)
  monthlyPriceFrom?: number; // GBP (28-day rate)
  deposit?: number; // GBP
  includedMileage?: number; // miles/day
  excessMileageCharge?: number; // GBP/mile

  availabilityStatus: AvailabilityStatus;
  featured?: boolean;
  newArrival?: boolean;

  recommendedOccasions?: Occasion[];
  relatedVehicles?: string[]; // slugs

  metaTitle?: string;
  metaDescription?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceContent {
  slug: string;
  name: string; // e.g. "Supercar Hire"
  navLabel?: string;
  category?: VehicleCategory; // links to matching fleet filter
  hero: {
    eyebrow: string;
    heading: string;
    intro: string;
  };
  overview: string;
  benefits: string[];
  occasions: string[];
  /** Slugs of vehicles to feature. If empty, resolved by category. */
  recommendedVehicles?: string[];
  process?: { title: string; body: string }[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
}

export interface LocationContent {
  slug: string;
  city: string;
  region: string;
  nation: "England" | "Scotland" | "Wales" | "Northern Ireland";
  intro: string;
  serving: string; // how CVS serves the location
  delivery: string;
  motorways?: string[];
  airports?: string[];
  weddingVenues?: string[];
  businessDistricts?: string[];
  landmarks?: string[];
  occasions: string[];
  recommendedVehicles?: string[]; // slugs
  nearbyLocations?: string[]; // slugs
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
  /** Approx geo for map + LocalBusiness schema (owner to confirm exact). */
  geo?: { lat: number; lng: number };
}

export interface Testimonial {
  author: string;
  location?: string;
  occasion?: string;
  quote: string;
  rating?: number; // 1-5, only when genuine
  source?: "Google" | "Direct";
}

export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingMinutes: number;
  publishedAt: string; // ISO date
  heroImage: ImageAsset;
  /** Body as an array of simple blocks to keep the scaffold dependency-free. */
  body: { type: "p" | "h2" | "h3"; text: string }[];
  metaTitle: string;
  metaDescription: string;
}
