import type { FAQ } from "@/lib/types";

/**
 * Marque / model-line landing pages ("collections"), served at /hire/[slug].
 *
 * These consolidate all the cars of a make (or model line) onto one page so the
 * site can rank for the short, high-intent head terms — "Lamborghini hire",
 * "Ferrari hire", "Rolls-Royce hire", "G-Wagon hire", "Range Rover hire",
 * "Audi hire", "BMW hire", "Mercedes hire" — that the individual full-model
 * vehicle pages don't target directly. Each links out to the specific vehicle
 * pages, which own the model-level terms.
 *
 * `body` is long-form, crawlable copy rendered under the fleet grid. It carries
 * the head term, the "near me" / areas-served signals and the self-drive vs
 * chauffeur / long-term angles that turn a thin list into a genuine hub page.
 */
export interface Collection {
  slug: string;
  name: string; // e.g. "Lamborghini"
  heading: string; // H1, e.g. "Lamborghini Hire"
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  /** Long-form paragraphs rendered as the on-page content block. */
  body: string[];
  /** SEO keyword hints for metadata. */
  keywords: string[];
  vehicleSlugs: string[];
  faqs: FAQ[];
}

/** Shared closing paragraph — areas served + how to book. Keeps the local /
 * "near me" signal consistent across every hub without duplicating full text. */
const areasServed = (marque: string): string =>
  `Based in Birmingham, we are the natural choice when you search for ${marque} hire near you across the West Midlands — Solihull, Wolverhampton, Coventry and Sutton Coldfield — and we deliver nationwide, from London and Manchester to Leeds, Bristol and beyond, subject to vehicle and location. Choose your model above and message us on WhatsApp or call to check availability and confirm your dates.`;

export const collections: Collection[] = [
  {
    slug: "lamborghini",
    name: "Lamborghini",
    heading: "Lamborghini Hire",
    eyebrow: "Lamborghini Hire",
    metaTitle: "Lamborghini Hire Birmingham | Urus & Huracán Hire | CVS Car Hire",
    metaDescription:
      "Lamborghini hire in Birmingham and nationwide — hire the Urus Performante and Huracán self-drive or chauffeur-driven, by the day, weekend, week or month. Check availability today.",
    keywords: [
      "lamborghini hire",
      "lamborghini hire birmingham",
      "lamborghini urus hire",
      "lamborghini huracan hire",
      "hire a lamborghini",
      "lamborghini rental uk",
    ],
    intro:
      "Hire a Lamborghini with CVS Car Hire. From the Urus Performante super-SUV to the V10 drama of the Huracán, our Lamborghini fleet is available self-drive or chauffeur-driven, in Birmingham and delivered nationwide. Choose your model below and we'll confirm availability.",
    body: [
      "Lamborghini hire is the fastest way to put a genuine icon on your driveway for a day, a weekend or longer. Our Birmingham-based Lamborghini fleet spans the Urus Performante — the super-SUV that turned Sant'Agata into a household name — and the naturally aspirated V10 Huracán in Performante Spyder and Evo forms, so whether you want everyday drama or open-top theatre, there is a car for the occasion.",
      "Every Lamborghini is offered self-drive (minimum age and deposit confirmed on enquiry) or chauffeur-driven for weddings, milestone birthdays, music videos and content shoots. Hire by the day, take it for the weekend, or arrange a weekly or monthly rate for an extended stay — Lamborghini hire from £1,200 per day, with clear weekend and long-term rates on request.",
      areasServed("Lamborghini"),
    ],
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
      {
        question: "Can I hire a Lamborghini for the weekend?",
        answer:
          "Yes — weekend Lamborghini hire is one of our most popular options, using our published weekend rate. We can also arrange weekly and monthly hire for longer stays. Message us with your dates to confirm.",
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
      "Ferrari hire in Birmingham and nationwide. Self-drive the Ferrari Roma grand tourer by the day, weekend, week or month, with UK delivery. Check availability today.",
    keywords: [
      "ferrari hire",
      "ferrari hire birmingham",
      "ferrari roma hire",
      "hire a ferrari",
      "ferrari rental uk",
    ],
    intro:
      "Hire a Ferrari with CVS Car Hire. Our Ferrari Roma pairs front-engined grand-touring elegance with unmistakable Prancing Horse presence — available for self-drive hire from Birmingham with nationwide delivery. Enquire below to check dates.",
    body: [
      "Ferrari hire brings one of the most emotive badges in motoring within reach for a day, a weekend or a longer escape. The Ferrari Roma is a modern V8 grand tourer — La Nuova Dolce Vita made metal — with the pace of a supercar and the manners of a car you could drive to the coast and back. It is the perfect choice for a landmark birthday, an anniversary drive, a proposal or a photoshoot.",
      "The Roma is offered self-drive so the day is entirely yours, hired by the day, over the weekend, or by the week and month for an extended stay. Deposit, mileage and minimum age are confirmed on enquiry.",
      areasServed("Ferrari"),
    ],
    vehicleSlugs: ["ferrari-roma-hire"],
    faqs: [
      {
        question: "Which Ferrari can I hire?",
        answer:
          "We offer the Ferrari Roma for self-drive hire — a modern V8 grand tourer. Contact us for current availability and pricing.",
      },
      {
        question: "Can I hire a Ferrari in Birmingham for the weekend?",
        answer:
          "Yes — the Ferrari Roma is available for weekend self-drive hire from our Birmingham base, with nationwide UK delivery on request. Message us with your dates and we'll confirm availability and the rate.",
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
      "Rolls-Royce hire in Birmingham and nationwide — chauffeur-driven Cullinan and Ghost for weddings, corporate and occasions. UK delivery. Check availability.",
    keywords: [
      "rolls royce hire",
      "rolls royce hire birmingham",
      "rolls royce cullinan hire",
      "rolls royce ghost hire",
      "rolls royce wedding car hire",
      "hire a rolls royce",
    ],
    intro:
      "Hire a Rolls-Royce with CVS Car Hire. The Cullinan and Ghost are the ultimate expression of luxury motoring — offered chauffeur-driven for weddings, milestone occasions and executive travel, from Birmingham and across the UK.",
    body: [
      "Rolls-Royce hire is the definition of arriving well. The Cullinan — the marque's commanding SUV — and the Ghost saloon are the two most requested Rolls-Royce models for weddings, and both are offered chauffeur-driven so you can step out composed while our driver takes care of every detail. For the photographs, the entrance and the moment itself, nothing else comes close.",
      "Beyond weddings, Rolls-Royce hire suits milestone anniversaries, proms, executive travel and any occasion that deserves genuine occasion. We coordinate around your venue, timings and route, and can supply ribbons and finishing touches for the day.",
      areasServed("Rolls-Royce"),
    ],
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
      {
        question: "Do you offer Rolls-Royce hire near me?",
        answer:
          "We're based in Birmingham and serve the whole of the West Midlands, with nationwide UK delivery for weddings and events. Tell us your location and date and we'll confirm we can cover it.",
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
      "G-Wagon hire in Birmingham and nationwide. Hire the Mercedes-AMG G63 (G-Wagon) in black or red, self-drive or chauffeur, from £700/day. Check availability.",
    keywords: [
      "g wagon hire",
      "g wagon hire birmingham",
      "g63 hire",
      "mercedes g63 hire",
      "g wagon rental",
      "hire a g wagon",
    ],
    intro:
      "Hire a G-Wagon with CVS Car Hire. The Mercedes-AMG G63 is the definitive icon — commanding, handcrafted and unmistakable. Available in black or red, self-drive or chauffeur-driven, from Birmingham and delivered nationwide.",
    body: [
      "G-Wagon hire puts the most recognisable SUV on the road at your disposal. The Mercedes-AMG G63 — the G-Wagon in its most potent form — pairs a 577bhp twin-turbo V8 with hand-finished luxury and a silhouette that has barely changed in forty years. We have the G63 in classic black and in a striking red, so you can match the car to the moment.",
      "G63 hire starts from £700 per day, with weekend, weekly and monthly rates for longer stays, and the option of self-drive (minimum age 25) or chauffeur-driven for weddings, videos and events. It is a favourite for music videos, milestone birthdays and making an entrance.",
      areasServed("G-Wagon"),
    ],
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
      {
        question: "Can I hire a G-Wagon long-term or for the weekend?",
        answer:
          "Yes — as well as daily and weekend hire, we offer weekly and monthly G63 rates for extended stays. Message us with your dates and we'll confirm the best rate.",
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
      "Range Rover hire in Birmingham and nationwide — the Vogue, Sport and SVR, self-drive or chauffeur, by day, weekend, week or month. Check availability today.",
    keywords: [
      "range rover hire",
      "range rover hire birmingham",
      "range rover vogue hire",
      "range rover sport hire",
      "range rover svr hire",
      "range rover rental uk",
    ],
    intro:
      "Hire a Range Rover with CVS Car Hire. From the flagship Vogue to the supercharged Sport SVR, our Range Rover fleet blends British luxury with genuine presence — self-drive or chauffeur-driven, from Birmingham and across the UK.",
    body: [
      "Range Rover hire is British luxury at its most versatile — equally at home outside a Mayfair hotel, at a wedding or on a Highlands road trip. Our fleet runs from the flagship Range Rover Vogue, with its serene cabin and commanding stance, to the athletic Range Rover Sport and the supercharged Sport SVR for those who want a performance edge.",
      "Every Range Rover is offered self-drive or chauffeur-driven, by the day, the weekend, or the week and month for an extended hire or business use. Spacious, refined and endlessly capable, it is one of our most requested SUVs for families, corporate travel and weekends away.",
      areasServed("Range Rover"),
    ],
    vehicleSlugs: ["range-rover-vogue-hire", "range-rover-sport-hire", "range-rover-svr-hire"],
    faqs: [
      {
        question: "Which Range Rovers can I hire?",
        answer:
          "We offer the Range Rover Vogue, Range Rover Sport and the performance Range Rover Sport SVR. Contact us for availability and pricing.",
      },
      {
        question: "Can I hire a Range Rover for the weekend or long-term?",
        answer:
          "Yes — Range Rover hire is available by the day, the weekend, and by the week or month for longer and business needs. Tell us your dates and we'll confirm the rate.",
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
      "Audi hire in Birmingham and nationwide — the R8 Spyder supercar and the RS3, self-drive by day, weekend or week, with UK delivery. Check availability today.",
    keywords: [
      "audi hire",
      "audi hire birmingham",
      "audi hire near me",
      "audi r8 hire",
      "audi rs3 hire",
      "audi rental uk",
    ],
    intro:
      "Hire an Audi with CVS Car Hire. From the naturally aspirated V10 R8 Spyder to the cult five-cylinder RS3, our Audi fleet delivers everyday-usable performance with real drama — self-drive from Birmingham with nationwide delivery.",
    body: [
      "Audi hire covers both ends of the performance spectrum. The Audi R8 Spyder is a genuine supercar — a naturally aspirated 5.2-litre V10 behind your shoulders and the roof down — while the Audi RS3 is the cult five-cylinder super-hatch that has become one of the most sought-after cars we offer, endlessly usable yet seriously quick.",
      "Both are offered self-drive for a day, a weekend or a week, so you can pick the level of drama to suit the occasion — the R8 for a landmark celebration or photoshoot, the RS3 for a spirited weekend or a first taste of real performance. Deposit, mileage and minimum age are confirmed on enquiry.",
      areasServed("Audi"),
    ],
    vehicleSlugs: ["audi-r8-spyder-hire", "audi-rs3-hire"],
    faqs: [
      {
        question: "Which Audis can I hire?",
        answer:
          "We offer the Audi R8 Spyder and the Audi RS3 for self-drive hire. Tell us your dates and we'll confirm availability and pricing.",
      },
      {
        question: "Is there Audi hire near me?",
        answer:
          "We're based in Birmingham and cover the West Midlands directly, with nationwide UK delivery available. Tell us where you are and we'll confirm we can reach you.",
      },
      {
        question: "Can I hire an Audi RS3 or R8 for the weekend?",
        answer:
          "Yes — both are popular weekend hires, available by the day, weekend or week. Message us your dates and we'll confirm the rate and availability.",
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
      "BMW hire in Birmingham and nationwide — the M3, X5, 3 Series and 4 Series Convertible, self-drive by day, weekend or week. Check availability today.",
    keywords: [
      "bmw hire",
      "bmw hire birmingham",
      "bmw hire near me",
      "bmw m3 hire",
      "bmw x5 hire",
      "bmw rental uk",
    ],
    intro:
      "Hire a BMW with CVS Car Hire. From the M3 Competition to the versatile X5, the 3 Series M Sport and the 4 Series Convertible, our BMW fleet covers performance, prestige and practicality — self-drive from Birmingham with nationwide delivery.",
    body: [
      "BMW hire spans the whole range of what the marque does best. The BMW M3 Competition is a 500bhp saloon with genuine track pedigree; the X5 is the do-everything luxury SUV for families and group travel; the 3 Series M Sport is the executive all-rounder; and the 4 Series Convertible is made for open-top summer miles.",
      "All are offered self-drive, by the day, the weekend or the week, whether you want a fast weekend in the M3, a practical SUV for a trip, or an executive saloon for business. Deposit, mileage and minimum age are confirmed on enquiry.",
      areasServed("BMW"),
    ],
    vehicleSlugs: ["bmw-m3-hire", "bmw-x5-hire", "bmw-3-series-hire", "bmw-4-series-convertible-hire"],
    faqs: [
      {
        question: "Which BMWs can I hire?",
        answer:
          "We offer the BMW M3, X5, 3 Series M Sport and 4 Series Convertible. Contact us for current availability and pricing.",
      },
      {
        question: "Is there BMW hire near me?",
        answer:
          "We're based in Birmingham and serve the West Midlands directly, with nationwide UK delivery available. Tell us your location and we'll confirm.",
      },
    ],
  },
  {
    slug: "mercedes",
    name: "Mercedes-Benz",
    heading: "Mercedes Hire",
    eyebrow: "Mercedes Hire",
    metaTitle: "Mercedes Hire Birmingham | G63, GLC, A35 & V-Class Hire | CVS Car Hire",
    metaDescription:
      "Mercedes hire in Birmingham and nationwide — the AMG G63, GLC 43, A35 and V-Class, self-drive or chauffeur, by day, weekend or longer. Check availability today.",
    keywords: [
      "mercedes hire",
      "mercedes hire birmingham",
      "mercedes hire near me",
      "mercedes g63 hire",
      "mercedes v class hire",
      "mercedes amg hire",
    ],
    intro:
      "Hire a Mercedes with CVS Car Hire. From the icon G63 (G-Wagon) and the AMG GLC 43 to the hot A35 hatch and the executive V-Class people carrier, our Mercedes fleet spans presence, performance and space — self-drive or chauffeur-driven, from Birmingham with nationwide delivery.",
    body: [
      "Mercedes hire with CVS covers the marque's most-wanted models. The Mercedes-AMG G63 is the definitive luxury SUV and one of our signature cars; the AMG GLC 43 blends everyday usability with genuine AMG pace; the AMG A35 is the affordable hot-hatch entry point to performance hire; and the V-Class is the executive people carrier of choice for group travel, airport transfers and productions.",
      "Whether you want a self-drive weekend in an AMG, a chauffeur-driven G63 for a wedding, or a spacious V-Class for the whole party, we tailor the hire around you — by the day, the weekend, or the week and month for longer needs. For the G-Wagon specifically, see our dedicated G-Wagon hire page.",
      areasServed("Mercedes"),
    ],
    vehicleSlugs: [
      "mercedes-amg-g63-hire",
      "mercedes-glc-43-amg-hire",
      "mercedes-amg-a35-hire",
      "mercedes-v-class-hire",
    ],
    faqs: [
      {
        question: "Which Mercedes models can I hire?",
        answer:
          "We offer the Mercedes-AMG G63 (G-Wagon), the AMG GLC 43, the AMG A35 and the V-Class. Self-drive and chauffeur options are available depending on the model. Contact us for availability and pricing.",
      },
      {
        question: "Is there Mercedes hire near me?",
        answer:
          "We're based in Birmingham and serve the West Midlands directly, with nationwide UK delivery available on many vehicles. Tell us your location and dates and we'll confirm.",
      },
      {
        question: "Can I hire a Mercedes V-Class for group travel or an airport transfer?",
        answer:
          "Yes — the V-Class is our go-to for group travel, airport transfers and productions, available self-drive or chauffeur-driven. Message us with your dates and party size and we'll confirm.",
      },
    ],
  },
];

export const collectionSlugs = collections.map((c) => c.slug);

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

/** The marque hub a given vehicle belongs to (first match), for cross-linking. */
export function getCollectionForVehicle(vehicleSlug: string): Collection | undefined {
  return collections.find((c) => c.vehicleSlugs.includes(vehicleSlug));
}
