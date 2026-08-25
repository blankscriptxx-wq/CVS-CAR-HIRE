import type { FAQ } from "@/lib/types";

/**
 * Marque / model-line landing pages ("collections"), served at /hire/[slug].
 *
 * These consolidate all the cars of a make (or model line) onto one page so the
 * site can rank for the short, high-intent head terms — "Lamborghini hire",
 * "Ferrari hire", "Rolls-Royce hire", "G-Wagon hire", "Range Rover hire" — that
 * the individual full-model vehicle pages don't target directly. Each links out
 * to the specific vehicle pages, which own the model-level terms.
 */
export interface Collection {
  slug: string;
  name: string; // e.g. "Lamborghini"
  heading: string; // H1, e.g. "Lamborghini Hire"
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  vehicleSlugs: string[];
  faqs: FAQ[];
}

export const collections: Collection[] = [
  {
    slug: "lamborghini",
    name: "Lamborghini",
    heading: "Lamborghini Hire",
    eyebrow: "Lamborghini Hire",
    metaTitle: "Lamborghini Hire Birmingham | Urus & Huracán Hire | CVS Car Hire",
    metaDescription:
      "Lamborghini hire in Birmingham with CVS Car Hire — hire the Urus Performante and Huracán, self-drive or chauffeur, with nationwide UK delivery. Check availability today.",
    intro:
      "Hire a Lamborghini with CVS Car Hire. From the Urus Performante super-SUV to the V10 drama of the Huracán, our Lamborghini fleet is available self-drive or chauffeur-driven, in Birmingham and delivered nationwide. Choose your model below and we'll confirm availability.",
    vehicleSlugs: [
      "lamborghini-urus-performante-hire",
      "lamborghini-huracan-performante-spyder-hire",
      "lamborghini-huracan-evo-hire",
    ],
    faqs: [
      {
        question: "How much is it to hire a Lamborghini?",
        answer:
          "Lamborghini hire starts from £1,200 per day for the Urus Performante and Huracán, with weekend, weekly and monthly rates available. Tell us your dates and we'll confirm the exact price.",
      },
      {
        question: "Can I hire a Lamborghini Urus or Huracán in Birmingham?",
        answer:
          "Yes — both the Lamborghini Urus Performante and the Huracán are available from our Birmingham base, self-drive or chauffeur-driven, with nationwide UK delivery on request.",
      },
    ],
  },
  {
    slug: "ferrari",
    name: "Ferrari",
    heading: "Ferrari Hire",
    eyebrow: "Ferrari Hire",
    metaTitle: "Ferrari Hire Birmingham | Ferrari Roma Self-Drive Hire | CVS Car Hire",
    metaDescription:
      "Ferrari hire in Birmingham with CVS Car Hire. Self-drive the Ferrari Roma grand tourer, with nationwide UK delivery available. Check availability today.",
    intro:
      "Hire a Ferrari with CVS Car Hire. Our Ferrari Roma pairs front-engined grand-touring elegance with unmistakable Prancing Horse presence — available for self-drive hire from Birmingham with nationwide delivery. Enquire below to check dates.",
    vehicleSlugs: ["ferrari-roma-hire"],
    faqs: [
      {
        question: "Which Ferrari can I hire?",
        answer:
          "We offer the Ferrari Roma for self-drive hire — a modern V8 grand tourer. Contact us for current availability and pricing.",
      },
    ],
  },
  {
    slug: "rolls-royce",
    name: "Rolls-Royce",
    heading: "Rolls-Royce Hire",
    eyebrow: "Rolls-Royce Hire",
    metaTitle: "Rolls-Royce Hire Birmingham | Cullinan & Ghost Chauffeur Hire | CVS Car Hire",
    metaDescription:
      "Rolls-Royce hire in Birmingham with CVS Car Hire — chauffeur-driven Cullinan and Ghost for weddings, corporate and occasions. Nationwide UK delivery. Check availability.",
    intro:
      "Hire a Rolls-Royce with CVS Car Hire. The Cullinan and Ghost are the ultimate expression of luxury motoring — offered chauffeur-driven for weddings, milestone occasions and executive travel, from Birmingham and across the UK.",
    vehicleSlugs: ["rolls-royce-cullinan-hire", "rolls-royce-ghost-hire"],
    faqs: [
      {
        question: "Can I hire a Rolls-Royce for a wedding?",
        answer:
          "Yes — the Rolls-Royce Cullinan and Ghost are popular wedding cars, supplied chauffeur-driven. We'll confirm availability for your date and can tailor the package.",
      },
      {
        question: "Is Rolls-Royce hire self-drive or chauffeur?",
        answer:
          "Our Rolls-Royce Cullinan and Ghost are offered chauffeur-driven, so you can relax and enjoy the occasion while our chauffeur takes care of the rest.",
      },
    ],
  },
  {
    slug: "g-wagon",
    name: "Mercedes G-Wagon",
    heading: "G-Wagon Hire",
    eyebrow: "G-Wagon Hire",
    metaTitle: "G-Wagon Hire Birmingham | Mercedes G63 AMG Hire | CVS Car Hire",
    metaDescription:
      "G-Wagon hire in Birmingham with CVS Car Hire. Hire the Mercedes-AMG G63 (G-Wagon) in black or red, self-drive or chauffeur, with nationwide UK delivery. Check availability.",
    intro:
      "Hire a G-Wagon with CVS Car Hire. The Mercedes-AMG G63 is the definitive icon — commanding, handcrafted and unmistakable. Available in black or red, self-drive or chauffeur-driven, from Birmingham and delivered nationwide.",
    vehicleSlugs: ["mercedes-amg-g63-hire", "mercedes-amg-g63-red-hire"],
    faqs: [
      {
        question: "How much is G63 / G-Wagon hire?",
        answer:
          "Mercedes-AMG G63 (G-Wagon) hire starts from £700 per day, with weekend, weekly and monthly rates available. We have the G63 in black and red.",
      },
      {
        question: "Can I hire a G-Wagon self-drive?",
        answer:
          "Yes — the G63 is available self-drive (minimum age 25) as well as chauffeur-driven. Tell us your dates and we'll confirm availability.",
      },
    ],
  },
  {
    slug: "range-rover",
    name: "Range Rover",
    heading: "Range Rover Hire",
    eyebrow: "Range Rover Hire",
    metaTitle: "Range Rover Hire Birmingham | Vogue, Sport & SVR Hire | CVS Car Hire",
    metaDescription:
      "Range Rover hire in Birmingham with CVS Car Hire — the Vogue, Sport and SVR, self-drive or chauffeur, with nationwide UK delivery. Check availability today.",
    intro:
      "Hire a Range Rover with CVS Car Hire. From the flagship Vogue to the supercharged Sport SVR, our Range Rover fleet blends British luxury with genuine presence — self-drive or chauffeur-driven, from Birmingham and across the UK.",
    vehicleSlugs: ["range-rover-vogue-hire", "range-rover-sport-hire", "range-rover-svr-hire"],
    faqs: [
      {
        question: "Which Range Rovers can I hire?",
        answer:
          "We offer the Range Rover Vogue, Range Rover Sport and the performance Range Rover Sport SVR. Contact us for availability and pricing.",
      },
    ],
  },
  {
    slug: "audi",
    name: "Audi",
    heading: "Audi Hire",
    eyebrow: "Audi Hire",
    metaTitle: "Audi Hire Birmingham | R8 Spyder & RS3 Hire | CVS Car Hire",
    metaDescription:
      "Audi hire in Birmingham with CVS Car Hire — the R8 Spyder supercar and the RS3, self-drive with nationwide UK delivery. Check availability today.",
    intro:
      "Hire an Audi with CVS Car Hire. From the naturally aspirated V10 R8 Spyder to the cult five-cylinder RS3, our Audi fleet delivers everyday-usable performance with real drama — self-drive from Birmingham with nationwide delivery.",
    vehicleSlugs: ["audi-r8-spyder-hire", "audi-rs3-hire"],
    faqs: [
      {
        question: "Which Audis can I hire?",
        answer:
          "We offer the Audi R8 Spyder and the Audi RS3 for self-drive hire. Tell us your dates and we'll confirm availability and pricing.",
      },
    ],
  },
  {
    slug: "bmw",
    name: "BMW",
    heading: "BMW Hire",
    eyebrow: "BMW Hire",
    metaTitle: "BMW Hire Birmingham | M3, X5 & 3 Series Hire | CVS Car Hire",
    metaDescription:
      "BMW hire in Birmingham with CVS Car Hire — the M3, X5, 3 Series and 4 Series Convertible, self-drive with nationwide UK delivery. Check availability today.",
    intro:
      "Hire a BMW with CVS Car Hire. From the M3 Competition to the versatile X5, the 3 Series M Sport and the 4 Series Convertible, our BMW fleet covers performance, prestige and practicality — self-drive from Birmingham with nationwide delivery.",
    vehicleSlugs: ["bmw-m3-hire", "bmw-x5-hire", "bmw-3-series-hire", "bmw-4-series-convertible-hire"],
    faqs: [
      {
        question: "Which BMWs can I hire?",
        answer:
          "We offer the BMW M3, X5, 3 Series M Sport and 4 Series Convertible. Contact us for current availability and pricing.",
      },
    ],
  },
];

export const collectionSlugs = collections.map((c) => c.slug);

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
