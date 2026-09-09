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
  /**
   * Optional deeper, H2-headed content sections rendered below the body.
   * Used for the highest-priority hubs that warrant a fuller guide.
   */
  sections?: { heading: string; body: string[] }[];
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
    metaTitle: "Lamborghini Models to Hire | CVS Car Hire",
    metaDescription:
      "Lamborghini hire in Birmingham and nationwide — hire the Urus Performante and Huracán self-drive or chauffeur-driven, by the day, weekend, week or month.",
    keywords: [
      "lamborghini hire",
      "lamborghini hire birmingham",
      "lamborghini urus hire",
      "lamborghini huracan hire",
      "hire a lamborghini",
      "lamborghini rental uk",
    ],
    intro:
      "Hire a Lamborghini with CVS Car Hire. From the new V12 hybrid Revuelto flagship and the Urus Performante super-SUV to the naturally aspirated drama of the Huracán, our Lamborghini fleet is available self-drive or chauffeur-driven, in Birmingham and delivered nationwide. Choose your model below and we'll confirm availability.",
    body: [
      "Lamborghini hire is the fastest way to put a genuine icon on your driveway for a day, a weekend or longer. Our Birmingham-based Lamborghini fleet is led by the Revuelto — the 1,000bhp V12 hybrid flagship — and spans the Urus Performante super-SUV and the naturally aspirated V10 Huracán in Performante Spyder and Evo forms, so whether you want the ultimate halo car, everyday drama or open-top theatre, there is a Lamborghini for the occasion.",
      "Every available Lamborghini is offered self-drive (minimum age and deposit confirmed on enquiry) or chauffeur-driven for weddings, milestone birthdays, music videos and content shoots. Hire by the day, take it for the weekend, or arrange a weekly or monthly rate for an extended stay — with clear weekend and long-term rates on request.",
      "We're also expanding the Lamborghini line-up: the track-bred Huracán STO, the all-new V8 hybrid Temerario and the extreme Aventador SVJ are joining the fleet soon. Each has its own page where you can register your interest and we'll be in touch the moment it's available to hire.",
      areasServed("Lamborghini"),
    ],
    vehicleSlugs: [
      "lamborghini-revuelto-hire",
      "lamborghini-urus-performante-hire",
      "lamborghini-huracan-performante-spyder-hire",
      "lamborghini-huracan-evo-hire",
      "lamborghini-huracan-sto-hire",
      "lamborghini-temerario-hire",
      "lamborghini-aventador-svj-hire",
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
    metaTitle: "Ferrari Models to Hire | CVS Car Hire",
    metaDescription:
      "Ferrari hire in Birmingham and nationwide — the SF90, the Roma grand tourer and the four-seat Purosangue, self-drive or chauffeur.",
    keywords: [
      "ferrari hire",
      "ferrari hire birmingham",
      "ferrari hire uk",
      "ferrari sf90 hire",
      "ferrari roma hire",
      "ferrari purosangue hire",
      "hire a ferrari",
      "ferrari rental uk",
    ],
    intro:
      "Hire a Ferrari with CVS Car Hire. From the near-1,000bhp SF90 hybrid flagship and the elegant Roma grand tourer to the extraordinary four-seat Purosangue, our Ferrari fleet brings one of motoring's most emotive badges within reach — self-drive or chauffeur-driven, from Birmingham with nationwide delivery.",
    body: [
      "Ferrari hire puts one of the most desirable badges in the world on your driveway for a day, a weekend or a longer escape. Our fleet is led by the SF90 Stradale — Ferrari's plug-in hybrid flagship, with close to a thousand horsepower — alongside the Roma, a modern front-engined V8 grand tourer that is La Nuova Dolce Vita made metal, and the Purosangue, the first four-door, four-seat Ferrari and a genuine V12 thoroughbred.",
      "Whether it is a landmark birthday, an anniversary drive, a proposal, a wedding or a photoshoot, there is a Ferrari for the moment — the SF90 and Roma self-drive so the day is entirely yours, and the four-seat Purosangue self-drive or chauffeur-driven. Deposit, mileage and minimum age are confirmed on enquiry.",
      "The Ferrari story continues with more models joining our fleet soon — the twin-turbo V8 488 and the naturally aspirated V12 12Cilindri grand tourer. Each already has its own page where you can register your interest and we'll confirm availability the moment it arrives.",
      areasServed("Ferrari"),
    ],
    vehicleSlugs: [
      "ferrari-sf90-hire",
      "ferrari-roma-hire",
      "ferrari-purosangue-hire",
      "ferrari-488-hire",
      "ferrari-12cilindri-hire",
    ],
    faqs: [
      {
        question: "Which Ferraris can I hire?",
        answer:
          "Our available Ferrari fleet includes the SF90 hybrid supercar, the Roma grand tourer and the four-seat Purosangue. The 488 and 12Cilindri are joining soon — register your interest on their pages. Contact us for current availability and pricing.",
      },
      {
        question: "Can I hire a Ferrari in Birmingham for the weekend?",
        answer:
          "Yes — our Ferraris are available for weekend self-drive hire from our Birmingham base, with nationwide UK delivery on request. Message us with your dates and the model and we'll confirm availability and the rate.",
      },
      {
        question: "Can I hire a Ferrari for a wedding?",
        answer:
          "The four-seat Ferrari Purosangue can be hired self-drive or chauffeur-driven, making it a striking wedding or occasion car. Tell us your date and we'll confirm availability.",
      },
    ],
  },
  {
    slug: "rolls-royce",
    name: "Rolls-Royce",
    heading: "Rolls-Royce Hire",
    eyebrow: "Rolls-Royce Hire",
    metaTitle: "Rolls-Royce Models to Hire | CVS Car Hire",
    metaDescription:
      "Rolls-Royce hire in Birmingham and nationwide — chauffeur-driven Phantom, Cullinan and Ghost for weddings, corporate and occasions. UK delivery.",
    keywords: [
      "rolls royce hire",
      "rolls royce hire birmingham",
      "rolls royce phantom hire",
      "rolls royce cullinan hire",
      "rolls royce ghost hire",
      "rolls royce wedding car hire",
      "hire a rolls royce",
    ],
    intro:
      "Hire a Rolls-Royce with CVS Car Hire. From the flagship Phantom to the commanding Cullinan and the Ghost, our Rolls-Royce fleet is the ultimate expression of luxury motoring — offered chauffeur-driven for weddings, milestone occasions and executive travel, from Birmingham and across the UK.",
    body: [
      "Rolls-Royce hire is the definition of arriving well. Our fleet is crowned by the Phantom — the eighth-generation flagship and the pinnacle of the marque — alongside the commanding Cullinan SUV and the Ghost saloon, the most requested Rolls-Royce models for weddings. Each is offered chauffeur-driven so you can step out composed while our driver takes care of every detail. For the photographs, the entrance and the moment itself, nothing else comes close.",
      "Beyond weddings, Rolls-Royce hire suits milestone anniversaries, proms, executive travel and any occasion that deserves genuine occasion. We coordinate around your venue, timings and route, and can supply ribbons and finishing touches for the day.",
      "The collection is growing, too: the updated Cullinan Series II, the all-electric Spectre and the open-top Dawn are joining our fleet soon. Each has its own page where you can register your interest and we'll confirm availability the moment it arrives.",
      areasServed("Rolls-Royce"),
    ],
    vehicleSlugs: [
      "rolls-royce-phantom-hire",
      "rolls-royce-cullinan-hire",
      "rolls-royce-ghost-hire",
      "rolls-royce-cullinan-series-2-hire",
      "rolls-royce-spectre-hire",
      "rolls-royce-dawn-hire",
    ],
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
    metaTitle: "G-Wagon Hire Birmingham | CVS Car Hire",
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
    metaTitle: "Range Rover Models to Hire | CVS Car Hire",
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
    metaTitle: "Audi Models to Hire | R8 Spyder & RS3 Fleet | CVS Car Hire",
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
    sections: [
      {
        heading: "RS3 or R8 Spyder — which Audi should you hire?",
        body: [
          "The two Audis we offer are very different cars for very different days. The Audi RS3 is the everyday hero: a compact five-door Sportback with the legendary turbocharged five-cylinder engine, quattro grip and a warble unlike anything else on the road. It seats five, swallows a weekend's luggage and is devastatingly quick — the ideal choice for a spirited weekend, a birthday treat or a first taste of serious performance without the theatre.",
          "The Audi R8 Spyder is the step up to a true supercar. Its naturally aspirated 5.2-litre V10 sits behind the seats, the roof drops for open-top drama, and quattro all-wheel drive keeps all that performance approachable. With two seats and genuine presence, it is the car for a landmark celebration, a proposal, a photoshoot or a music video — from £700 per day, minimum age 25.",
          "In short: choose the RS3 for usable, everyday thrills and space for the group; choose the R8 Spyder when the occasion calls for a headline supercar. Not sure? Tell us the occasion and we'll recommend the right one.",
        ],
      },
      {
        heading: "Audi hire in Birmingham and near you",
        body: [
          "We're a Birmingham-based hire company, so if you're searching for Audi hire near you in the city or across the West Midlands — Solihull, Sutton Coldfield, Wolverhampton, Coventry or Walsall — you can collect directly from us. For everyone else, we deliver nationwide, from London and Manchester to Leeds, Bristol and beyond, subject to vehicle and location.",
          "Both the RS3 and R8 Spyder are self-drive, so the day is entirely yours. We'll confirm the driving-licence requirements, deposit and minimum age for your chosen car when you enquire, and can deliver to your home, hotel or venue so the experience begins the moment the car arrives.",
        ],
      },
      {
        heading: "How much does Audi hire cost?",
        body: [
          "Audi R8 Spyder hire starts from £700 per day, with a weekend (3-day) rate from £1,800, a weekly rate from £3,000 and monthly rates for longer stays. The RS3 is priced on enquiry with the same clear daily, weekend and weekly structure. Rates depend on the dates, the duration and the mileage you need — the longer the hire, the better the effective daily rate.",
          "For an exact quote, message us on WhatsApp or use the instant quote tool with your chosen Audi and dates, and we'll confirm the price and availability.",
        ],
      },
      {
        heading: "Weekend, weekly and long-term Audi hire",
        body: [
          "Weekend Audi hire is one of our most popular options — pick the car up on Friday and drop it back Monday on our weekend rate. Weekly hire works out better value again for a longer stay or a road trip, and for extended needs we offer monthly rates and long-term arrangements, a flexible alternative to leasing or buying. Whatever the duration, tell us your dates and we'll tailor it around you.",
        ],
      },
    ],
    vehicleSlugs: ["audi-r8-spyder-hire", "audi-rs3-hire"],
    faqs: [
      {
        question: "Which Audis can I hire?",
        answer:
          "We offer the Audi R8 Spyder — a naturally aspirated V10 supercar — and the Audi RS3, the cult five-cylinder super-hatch, both for self-drive hire. Tell us your dates and we'll confirm availability and pricing.",
      },
      {
        question: "Is there Audi hire near me?",
        answer:
          "We're based in Birmingham and cover the West Midlands directly — Solihull, Sutton Coldfield, Wolverhampton, Coventry and Walsall — with nationwide UK delivery available. Tell us where you are and we'll confirm we can reach you.",
      },
      {
        question: "How much does it cost to hire an Audi?",
        answer:
          "Audi R8 Spyder hire starts from £700 per day, with a weekend rate from £1,800 and a weekly rate from £3,000. The RS3 is quoted on enquiry with the same daily, weekend and weekly structure. Message us your dates for an exact price.",
      },
      {
        question: "Can I hire an Audi RS3 or R8 for the weekend?",
        answer:
          "Yes — both are popular weekend hires, available by the day, weekend or week. The R8 Spyder weekend rate starts from £1,800. Message us your dates and we'll confirm the rate and availability.",
      },
      {
        question: "How old do I need to be to hire an Audi?",
        answer:
          "The Audi R8 Spyder has a minimum age of 25. Age, licence and deposit requirements for the RS3 are confirmed on enquiry, as they vary by vehicle. Get in touch and we'll talk you through exactly what's needed.",
      },
      {
        question: "What's the difference between the RS3 and the R8 Spyder?",
        answer:
          "The RS3 is a five-seat, five-door super-hatch — usable, quick and great value for an everyday thrill. The R8 Spyder is a two-seat, open-top V10 supercar for a genuine headline occasion. Choose the RS3 for a spirited weekend with space, the R8 for maximum drama.",
      },
      {
        question: "Is Audi hire self-drive or chauffeur?",
        answer:
          "Both the Audi R8 Spyder and RS3 are offered self-drive, so you're behind the wheel for the whole hire, with delivery available across Birmingham and the UK.",
      },
      {
        question: "Can I hire an Audi long-term or monthly?",
        answer:
          "Yes — as well as daily and weekend hire, we offer weekly and monthly Audi rates for extended stays, a flexible alternative to leasing. Tell us your dates and mileage and we'll tailor the arrangement.",
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
    metaTitle: "Mercedes Models to Hire | CVS Car Hire",
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
  {
    slug: "porsche",
    name: "Porsche",
    heading: "Porsche Hire",
    eyebrow: "Porsche Hire",
    metaTitle: "Porsche Hire UK | Porsche 911 GT3 RS Hire | CVS Car Hire",
    metaDescription:
      "Porsche hire in Birmingham and nationwide — self-drive the 911 GT3 RS, the road-legal, naturally aspirated track weapon. UK delivery.",
    keywords: [
      "porsche hire",
      "porsche hire uk",
      "porsche hire birmingham",
      "porsche 911 hire",
      "porsche gt3 rs hire",
      "hire a porsche",
      "porsche rental uk",
    ],
    intro:
      "Hire a Porsche with CVS Car Hire. Our fleet is headlined by the 911 GT3 RS — the most focused, track-honed naturally aspirated 911 Porsche builds — available self-drive from Birmingham with nationwide delivery. Enquire below to check dates.",
    body: [
      "Porsche hire is about precision as much as pace. The 911 GT3 RS is a road-legal racing car in all but name: a 9,000rpm naturally aspirated flat-six, active motorsport aerodynamics and a giant swan-neck rear wing that generates real downforce. For a driving enthusiast, few experiences come close — which is exactly why it is one of the most requested self-drive cars we offer for a landmark occasion, a track-focused weekend or a photoshoot.",
      "The GT3 RS is offered self-drive so the day is entirely yours, by the day, the weekend or longer. Deposit, mileage and minimum age are confirmed on enquiry. Whether you are marking a milestone, treating a fellow enthusiast or capturing content, we'll have the car immaculately prepared and delivered to your chosen address.",
      areasServed("Porsche"),
    ],
    sections: [
      {
        heading: "Why hire the 911 GT3 RS?",
        body: [
          "The GT3 RS sits at the sharp end of the 911 range, developed hand-in-hand with Porsche Motorsport. Everything about it — the ultra-high-revving flat-six, the DRS-style adjustable rear wing, the lightweight construction and the track-tuned chassis — exists to make it faster and more engaging against the clock. Unlike turbocharged rivals it builds its drama towards a spine-tingling top end, rewarding commitment with a purity of response that has made it a modern icon.",
          "It is the ideal car for someone who values driving above all: a once-in-a-while experience for a special birthday, a gift for an enthusiast, or a headline vehicle for a shoot. It also pairs beautifully with our supercars — many clients combine the GT3 RS with a Lamborghini or Ferrari across a weekend.",
        ],
      },
      {
        heading: "Porsche hire in Birmingham and near you",
        body: [
          "We're a Birmingham-based hire company, so if you're searching for Porsche hire near you in the city or across the West Midlands — Solihull, Sutton Coldfield, Wolverhampton and Coventry — you can collect directly from us. For everyone else, we deliver nationwide, from London and Manchester to Leeds, Bristol and beyond, subject to vehicle and location.",
        ],
      },
    ],
    vehicleSlugs: ["porsche-911-gt3-rs-hire"],
    faqs: [
      {
        question: "Which Porsche can I hire?",
        answer:
          "We offer the Porsche 911 GT3 RS for self-drive hire — the road-legal, naturally aspirated track weapon. Contact us for current availability and pricing, and ask about pairing it with our supercars.",
      },
      {
        question: "Is there Porsche hire near me?",
        answer:
          "We're based in Birmingham and cover the West Midlands directly, with nationwide UK delivery available. Tell us where you are and we'll confirm we can reach you.",
      },
      {
        question: "Can I hire the 911 GT3 RS for the weekend?",
        answer:
          "Yes — the GT3 RS is available by the day, the weekend or longer, self-drive. Message us your dates and we'll confirm availability and the rate.",
      },
    ],
  },
  {
    slug: "land-rover",
    name: "Land Rover",
    heading: "Land Rover Hire",
    eyebrow: "Land Rover Hire",
    metaTitle: "Land Rover Models to Hire | CVS Car Hire",
    metaDescription:
      "Land Rover hire in Birmingham and nationwide — the reinvented Defender joining soon, plus the Range Rover Vogue, Sport and SVR available now.",
    keywords: [
      "land rover hire",
      "land rover defender hire",
      "defender hire",
      "defender hire uk",
      "land rover defender hire birmingham",
      "hire a defender",
    ],
    intro:
      "Land Rover hire with CVS Car Hire. The reinvented Land Rover Defender — rugged character wrapped in modern luxury — is joining our fleet soon. Register your interest for upcoming availability below, or explore our Range Rover fleet, available now.",
    body: [
      "The Land Rover Defender is one of the most characterful luxury 4x4s on the road — go-anywhere capability and unmistakable upright styling paired with a beautifully finished, technology-rich cabin. Equally suited to a country escape, a weekend away, the school run or a production, it brings genuine presence without the formality of a full luxury saloon.",
      "The Defender is joining the CVS Hire fleet soon. Register your interest on its page and we'll be in touch the moment it's available to hire, with pricing and availability confirmed on arrival. In the meantime, our Range Rover fleet — the Vogue, Sport and supercharged Sport SVR — is available now for those who want British luxury SUV motoring today.",
      areasServed("Land Rover"),
    ],
    vehicleSlugs: ["land-rover-defender-hire"],
    faqs: [
      {
        question: "Can I hire a Land Rover Defender?",
        answer:
          "The Land Rover Defender is joining our fleet soon. You can register your interest on its page now and we'll confirm availability and pricing the moment it arrives.",
      },
      {
        question: "Can I hire a Range Rover in the meantime?",
        answer:
          "Yes — our Range Rover fleet is available now, including the Vogue, Sport and Sport SVR, self-drive or chauffeur-driven. See our Range Rover hire page for the full line-up.",
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
