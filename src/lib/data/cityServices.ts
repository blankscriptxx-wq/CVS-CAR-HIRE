import type { LocationContent, FAQ } from "@/lib/types";

/**
 * City × service landing pages (/[city]/[service]).
 *
 * Each of the five services below is composed with a city's LocationContent to
 * produce a genuinely differentiated page — the copy, featured fleet, local
 * context (venues, airports, business districts, landmarks) and FAQs all draw
 * on real per-city data, so these are NOT thin doorway pages. Delivery language
 * stays accurate ("nationwide delivery, subject to vehicle and location").
 */

export interface CityServiceDef {
  slug: string; // service slug, also the URL segment
  name: string; // "Supercar Hire"
  short: string; // "supercar hire"
  eyebrow: string;
  /** Featured fleet (vehicle slugs) for this service. */
  fleet: string[];
  intro: (loc: LocationContent) => string;
  angleTitle: string;
  angle: (loc: LocationContent) => string;
  faqs: (loc: LocationContent) => FAQ[];
  metaTitle: (loc: LocationContent) => string;
  metaDescription: (loc: LocationContent) => string;
}

/** Safely read the nth item of an optional list, with a neutral fallback. */
const at = (arr: string[] | undefined, i: number, fallback: string) =>
  arr && arr[i] ? arr[i] : arr && arr[0] ? arr[0] : fallback;

const list = (arr: string[] | undefined, fallback: string) =>
  arr && arr.length ? arr.slice(0, 3).join(", ") : fallback;

export const CITY_SERVICES: CityServiceDef[] = [
  {
    slug: "supercar-hire",
    name: "Supercar Hire",
    short: "supercar hire",
    eyebrow: "Self-Drive",
    fleet: [
      "ferrari-roma-hire",
      "lamborghini-huracan-performante-spyder-hire",
      "audi-r8-spyder-hire",
      "lamborghini-urus-performante-hire",
    ],
    intro: (loc) =>
      `There is nowhere quite like the right road in a supercar, and ${loc.city} puts some of the best of them within reach. CVS Car Hire brings genuine icons — Ferrari, Lamborghini and the Audi R8 — to ${loc.city}, prepared to the highest standard and ready for a day, a weekend or longer. Whether it is a landmark birthday near ${at(loc.landmarks, 0, "the city")}, a photoshoot or a driving escape beyond ${loc.city}, we help you choose the car and take care of every detail around it.`,
    angleTitle: "Driving from",
    angle: (loc) =>
      `${loc.city} sits close to some outstanding driving roads, with quick links via ${list(loc.motorways, "the local motorway network")}. We deliver your supercar to your chosen address in ${loc.city} — home, hotel or venue — so the experience begins the moment it arrives, subject to vehicle and location.`,
    faqs: (loc) => [
      {
        question: `Can I hire a supercar for a day in ${loc.city}?`,
        answer: `Yes — supercars are available for a day, a weekend or longer, delivered across ${loc.city} subject to vehicle and location. Tell us your dates and we'll confirm availability.`,
      },
      {
        question: `Do you deliver supercars to ${loc.city}?`,
        answer: loc.delivery,
      },
    ],
    metaTitle: (loc) => `Supercar Hire ${loc.city} | Ferrari & Lamborghini Hire | CVS Car Hire`,
    metaDescription: (loc) =>
      `Self-drive supercar hire in ${loc.city} — Ferrari, Lamborghini and Audi R8. Delivery across ${loc.city} from CVS Car Hire, subject to availability. Check availability.`,
  },
  {
    slug: "luxury-car-hire",
    name: "Luxury Car Hire",
    short: "luxury car hire",
    eyebrow: "Self-Drive & Chauffeur",
    fleet: [
      "rolls-royce-cullinan-hire",
      "rolls-royce-ghost-hire",
      "lamborghini-urus-performante-hire",
      "mercedes-amg-g63-hire",
    ],
    intro: (loc) =>
      `Luxury is felt the moment the car arrives. CVS Car Hire brings its collection of over 50 luxury, prestige and performance vehicles to ${loc.city} — Rolls-Royce, Lamborghini, Mercedes-AMG and more — for the occasions that deserve them. From a self-drive weekend to a chauffeur-driven arrival around ${at(loc.businessDistricts, 0, at(loc.landmarks, 0, "the city"))}, we help you find the car that fits the moment and handle everything around the hire.`,
    angleTitle: "Across",
    angle: (loc) =>
      `We serve ${loc.city} and the surrounding area, from ${list(loc.landmarks, "the city centre")} to private addresses across the region. ${loc.serving}`,
    faqs: (loc) => [
      {
        question: `Do you offer luxury car hire across ${loc.city}?`,
        answer: loc.delivery,
      },
      {
        question: `Can I hire a luxury car self-drive or with a chauffeur in ${loc.city}?`,
        answer: `Both — many of our vehicles are available self-drive or chauffeur-driven in ${loc.city}. Tell us the occasion and we'll recommend the right option.`,
      },
    ],
    metaTitle: (loc) => `Luxury Car Hire ${loc.city} | Prestige & Supercar Hire | CVS Car Hire`,
    metaDescription: (loc) =>
      `Luxury car hire in ${loc.city} — Rolls-Royce, Lamborghini, Mercedes-AMG and more. Self-drive and chauffeur from CVS Car Hire, subject to availability.`,
  },
  {
    slug: "chauffeur-hire",
    name: "Chauffeur Hire",
    short: "chauffeur hire",
    eyebrow: "Chauffeur-Driven",
    fleet: [
      "rolls-royce-ghost-hire",
      "rolls-royce-cullinan-hire",
      "mercedes-v-class-hire",
      "mercedes-amg-g63-hire",
    ],
    intro: (loc) =>
      `A chauffeur-driven arrival changes the tone of any occasion. In ${loc.city}, CVS Car Hire provides professional chauffeur hire in the Rolls-Royce Ghost and Cullinan, the Mercedes V-Class and more — for weddings, business travel, airport transfers and evenings out. You sit back and enjoy the journey while we take care of the route, the timing and every detail.`,
    angleTitle: "Business & airports",
    angle: (loc) =>
      `For corporate travel we cover ${list(loc.businessDistricts, "the city's business districts")}, and for airport transfers we serve ${list(loc.airports, "your nearest airport")}. Chauffeur hire in ${loc.city} is arranged around your schedule, subject to availability.`,
    faqs: (loc) => [
      {
        question: `Do you provide chauffeur-driven cars in ${loc.city}?`,
        answer: `Yes — chauffeur hire is available across ${loc.city} for weddings, corporate travel, airport transfers and events, subject to availability. Share your date and itinerary and we'll confirm.`,
      },
      {
        question: `Can you do airport transfers in ${loc.city}?`,
        answer: `Yes — we cover ${list(loc.airports, "your nearest airport")} and beyond. Tell us your flight details and pick-up point and we'll arrange it.`,
      },
    ],
    metaTitle: (loc) => `Chauffeur Hire ${loc.city} | Rolls-Royce & Executive Chauffeur | CVS Car Hire`,
    metaDescription: (loc) =>
      `Chauffeur hire in ${loc.city} — Rolls-Royce, Mercedes and executive vehicles for weddings, business and airport transfers. CVS Car Hire. Check availability.`,
  },
  {
    slug: "wedding-car-hire",
    name: "Wedding Car Hire",
    short: "wedding car hire",
    eyebrow: "Self-Drive & Chauffeur",
    fleet: [
      "rolls-royce-ghost-hire",
      "rolls-royce-cullinan-hire",
      "mercedes-v-class-hire",
      "bmw-4-series-convertible-hire",
    ],
    intro: (loc) =>
      `The wedding car is the entrance everyone remembers. CVS Car Hire supplies wedding cars across ${loc.city} — the timeless Rolls-Royce Ghost and Cullinan, the Mercedes V-Class for the wedding party, and elegant convertibles — self-drive or chauffeur-driven. From venues such as ${at(loc.weddingVenues, 0, "your ceremony")} to the reception, we make sure the car is as memorable as the day.`,
    angleTitle: "Venues we serve",
    angle: (loc) =>
      `We regularly supply wedding cars to venues across ${loc.city} and the surrounding area${loc.weddingVenues && loc.weddingVenues.length ? `, including ${list(loc.weddingVenues, "")}` : ""}. Ribbons and presentation are taken care of, and timings are planned around your day, subject to availability.`,
    faqs: (loc) => [
      {
        question: `Can I hire a wedding car for a ${loc.city} venue?`,
        answer: `Yes — we supply wedding cars across ${loc.city}, self-drive or chauffeur-driven, subject to availability. Get in touch with your date and venue and we'll confirm.`,
      },
      {
        question: `Which cars are best for a wedding?`,
        answer: `The Rolls-Royce Ghost and Cullinan are perennial favourites, with the Mercedes V-Class for the wedding party and convertibles for summer ceremonies. We'll help you choose for your ${loc.city} venue and style.`,
      },
    ],
    metaTitle: (loc) => `Wedding Car Hire ${loc.city} | Rolls-Royce Wedding Cars | CVS Car Hire`,
    metaDescription: (loc) =>
      `Wedding car hire in ${loc.city} — Rolls-Royce Ghost & Cullinan, Mercedes V-Class and convertibles. Self-drive or chauffeur from CVS Car Hire. Check availability.`,
  },
  {
    slug: "prom-car-hire",
    name: "Prom Car Hire",
    short: "prom car hire",
    eyebrow: "The Arrival",
    fleet: [
      "lamborghini-urus-performante-hire",
      "ferrari-roma-hire",
      "mercedes-amg-g63-hire",
      "lamborghini-huracan-performante-spyder-hire",
    ],
    intro: (loc) =>
      `Prom is the night to arrive in style, and nothing turns heads in ${loc.city} like the right car. CVS Car Hire brings supercars and statement vehicles — Lamborghini, Ferrari and the Mercedes-AMG G 63 — to proms across ${loc.city}, delivered to home or school for photos and the big entrance. Reliable, beautifully presented and unforgettable.`,
    angleTitle: "How prom hire works",
    angle: (loc) =>
      `We deliver to your ${loc.city} address in good time for photos${loc.landmarks && loc.landmarks.length ? ` — popular backdrops include ${list(loc.landmarks, "")}` : ""}, then to the venue for the arrival. Chauffeur-driven options mean parents can relax, and everything is arranged around your evening, subject to availability.`,
    faqs: (loc) => [
      {
        question: `Can I hire a car for a prom in ${loc.city}?`,
        answer: `Yes — prom cars are available across ${loc.city}, self-drive (subject to age and licence) or chauffeur-driven, subject to availability. Book early for prom season as dates go quickly.`,
      },
      {
        question: `Do you deliver prom cars to home or school?`,
        answer: `Yes — we deliver to your chosen ${loc.city} address for photos and take you to the venue in style, subject to vehicle and location.`,
      },
    ],
    metaTitle: (loc) => `Prom Car Hire ${loc.city} | Supercar Prom Arrivals | CVS Car Hire`,
    metaDescription: (loc) =>
      `Prom car hire in ${loc.city} — Lamborghini, Ferrari and the Mercedes-AMG G 63 delivered for the big arrival. CVS Car Hire, subject to availability. Check availability.`,
  },
];

export const CITY_SERVICE_SLUGS = CITY_SERVICES.map((s) => s.slug);

export function getCityService(slug: string): CityServiceDef | undefined {
  return CITY_SERVICES.find((s) => s.slug === slug);
}
