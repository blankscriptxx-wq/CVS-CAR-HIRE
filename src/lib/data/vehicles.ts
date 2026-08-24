import type { Vehicle, ImageAsset, VehicleCategory } from "@/lib/types";

/**
 * Fleet data. Copy is original and premium. Specifications are limited to
 * safe, standard manufacturer configuration facts (seats, doors, transmission,
 * fuel, drivetrain, body). Power figures, pricing, deposits, mileage and
 * minimum age are intentionally left undefined until confirmed by CVS —
 * see docs/CONTENT-TODO.md. Undefined fields are never rendered.
 */

/** Build a hero/gallery image slot that renders the branded placeholder until
 *  real photography is dropped in at the given path. */
function img(slug: string, name: string, alt: string, caption?: string): ImageAsset {
  return { src: `/images/fleet/${slug}/${name}`, alt, caption, placeholder: false };
}

export const vehicles: Vehicle[] = [
  // ── Supercars ──────────────────────────────────────────────
  {
    id: "ferrari-roma",
    slug: "ferrari-roma-hire",
    manufacturer: "Ferrari",
    model: "Roma",
    category: "supercar",
    bodyType: "coupe",
    heroImage: img("ferrari-roma-hire", "hero.jpg", "Ferrari Roma available for luxury self-drive hire from CVS Car Hire Birmingham"),
    gallery: [
      img("ferrari-roma-hire", "front.jpg", "Front three-quarter view of the Ferrari Roma"),
      img("ferrari-roma-hire", "interior.jpg", "Ferrari Roma driver-focused interior"),
      img("ferrari-roma-hire", "rear.jpg", "Rear of the Ferrari Roma"),
    ],
    shortDescription:
      "La Nuova Dolce Vita — Ferrari's front-engined grand tourer, effortless and utterly magnetic.",
    fullDescription:
      "The Ferrari Roma is restraint and drama in perfect measure. Where other supercars shout, the Roma persuades — a clean, sculpted grand tourer that carries the weight of Ferrari's heritage with modern calm. Slip inside and the cabin wraps around you, every surface considered. On the open road it delivers the sensation only a front-engined Ferrari can, yet it remains composed enough for an evening in the city. It is the car for the arrival that lingers in memory.",
    seats: 4,
    doors: 2,
    transmission: "automatic",
    fuelType: "petrol",
    drivetrain: "rwd",
    selfDriveAvailable: true,
    chauffeurAvailable: false,
    availabilityStatus: "available",
    featured: true,
    recommendedOccasions: ["self-drive", "weekend", "production", "birthday"],
    relatedVehicles: ["lamborghini-huracan-performante-spyder-hire", "audi-r8-spyder-hire", "lamborghini-urus-performante-hire"],
    metaTitle: "Ferrari Roma Hire Birmingham | Self-Drive Supercar Hire | CVS Car Hire",
    metaDescription:
      "Hire the Ferrari Roma in Birmingham with CVS Car Hire. Self-drive supercar hire with nationwide UK delivery available. Check availability today.",
  },
  {
    id: "lamborghini-huracan-performante-spyder",
    slug: "lamborghini-huracan-performante-spyder-hire",
    manufacturer: "Lamborghini",
    model: "Huracán Performante",
    edition: "Spyder",
    category: "supercar",
    bodyType: "convertible",
    heroImage: img("lamborghini-huracan-performante-spyder-hire", "hero.jpg", "Matte black Lamborghini Huracán Performante Spyder for supercar hire at CVS Car Hire"),
    gallery: [
      img("lamborghini-huracan-performante-spyder-hire", "front.jpg", "Front three-quarter of the Lamborghini Huracán Performante Spyder with the roof down"),
      img("lamborghini-huracan-performante-spyder-hire", "front-angle.jpg", "Front of the matte black Lamborghini Huracán Performante Spyder"),
      img("lamborghini-huracan-performante-spyder-hire", "rear.jpg", "Rear three-quarter of the Lamborghini Huracán Performante Spyder showing the fixed wing"),
      img("lamborghini-huracan-performante-spyder-hire", "cockpit.jpg", "Lamborghini Huracán Performante Spyder cockpit with the roof lowered"),
      img("lamborghini-huracan-performante-spyder-hire", "interior.jpg", "Lamborghini Huracán Performante Spyder dashboard and steering wheel"),
      img("lamborghini-huracan-performante-spyder-hire", "seats.jpg", "Lamborghini Huracán Performante Spyder sports seats"),
      img("lamborghini-huracan-performante-spyder-hire", "seat-detail.jpg", "Alcantara seat detail in the Lamborghini Huracán Performante Spyder"),
      img("lamborghini-huracan-performante-spyder-hire", "door.jpg", "Performante detailing on the Lamborghini Huracán Spyder door"),
      img("lamborghini-huracan-performante-spyder-hire", "wheel.jpg", "Lamborghini Huracán Performante Spyder wheel and blue brake caliper"),
      img("lamborghini-huracan-performante-spyder-hire", "sill.jpg", "Performante side sill detail on the Lamborghini Huracán Spyder"),
      img("lamborghini-huracan-performante-spyder-hire", "lineup.jpg", "Lamborghini Huracán Performante Spyder alongside a second Huracán"),
    ],
    shortDescription:
      "Open-top theatre — the naturally aspirated V10 with the sky above you.",
    fullDescription:
      "Few experiences compare to the Huracán Performante Spyder with the roof down and the V10 climbing towards its crescendo. This is Lamborghini at its most emotional: razor-sharp, dramatic and unmistakable from a hundred metres away. The Spyder adds the one thing a coupé cannot — the full, unfiltered sound and sensation of one of the greatest engines ever built. For a landmark birthday, a photoshoot or simply a day you will never forget, little else comes close.",
    seats: 2,
    doors: 2,
    transmission: "automatic",
    fuelType: "petrol",
    drivetrain: "awd",
    selfDriveAvailable: true,
    chauffeurAvailable: false,
    availabilityStatus: "available",
    featured: true,
    minimumAge: 25,
    dailyPriceFrom: 1200,
    weekendPriceFrom: 3200,
    weeklyPriceFrom: 5000,
    monthlyPriceFrom: 8900,
    excessMileageCharge: 2.0,
    recommendedOccasions: ["self-drive", "birthday", "production", "weekend"],
    relatedVehicles: ["audi-r8-spyder-hire", "ferrari-roma-hire", "lamborghini-urus-performante-hire"],
    metaTitle: "Lamborghini Huracán Performante Spyder Hire Birmingham | CVS Car Hire",
    metaDescription:
      "Hire the Lamborghini Huracán Performante Spyder in Birmingham. Self-drive supercar hire with nationwide UK delivery. Check availability with CVS Car Hire.",
  },
  {
    id: "audi-r8-spyder",
    slug: "audi-r8-spyder-hire",
    manufacturer: "Audi",
    model: "R8 Spyder",
    year: 2023,
    category: "supercar",
    bodyType: "convertible",
    heroImage: img("audi-r8-spyder-hire", "hero.jpg", "Blue Audi R8 Spyder with the roof down, available for self-drive supercar hire at CVS Car Hire Birmingham"),
    gallery: [
      img("audi-r8-spyder-hire", "front.jpg", "Front of the blue Audi R8 Spyder with the roof down"),
      img("audi-r8-spyder-hire", "front-city.jpg", "Audi R8 Spyder in the city with the roof down"),
      img("audi-r8-spyder-hire", "front-angle.jpg", "Front three-quarter view of the Audi R8 Spyder"),
      img("audi-r8-spyder-hire", "rear.jpg", "Rear three-quarter view of the Audi R8 Spyder"),
      img("audi-r8-spyder-hire", "rear-angle.jpg", "Rear of the Audi R8 Spyder"),
      img("audi-r8-spyder-hire", "front-3q.jpg", "Front three-quarter view of the Audi R8 Spyder on the street"),
      img("audi-r8-spyder-hire", "interior.jpg", "Audi R8 Spyder virtual cockpit and red leather interior"),
      img("audi-r8-spyder-hire", "cockpit.jpg", "Audi R8 Spyder steering wheel and red quilted seats"),
      img("audi-r8-spyder-hire", "seats.jpg", "Audi R8 Spyder red quilted leather seats"),
    ],
    shortDescription:
      "Everyday supercar usability with a genuine V10 heart and open-top freedom.",
    fullDescription:
      "The Audi R8 Spyder is the supercar you could drive every day — and want to. Beneath its precise, understated bodywork sits a naturally aspirated V10 that transforms an ordinary route into an occasion, while the quattro all-wheel-drive makes its performance approachable and confidence-inspiring. Drop the roof and the character changes entirely. Composed, beautifully built and endlessly desirable, it is a superb introduction to supercar ownership for a weekend.",
    seats: 2,
    doors: 2,
    transmission: "automatic",
    fuelType: "petrol",
    drivetrain: "awd",
    selfDriveAvailable: true,
    chauffeurAvailable: false,
    availabilityStatus: "available",
    featured: true,
    minimumAge: 25,
    dailyPriceFrom: 700,
    weekendPriceFrom: 1800,
    weeklyPriceFrom: 3000,
    monthlyPriceFrom: 6500,
    excessMileageCharge: 1.85,
    recommendedOccasions: ["self-drive", "weekend", "birthday", "production"],
    relatedVehicles: ["lamborghini-huracan-performante-spyder-hire", "ferrari-roma-hire", "bmw-4-series-convertible-hire"],
    metaTitle: "Audi R8 Spyder Hire Birmingham | Self-Drive Supercar Hire | CVS Car Hire",
    metaDescription:
      "Hire the Audi R8 Spyder in Birmingham with CVS Car Hire. Self-drive supercar hire, nationwide UK delivery available. Check availability today.",
  },

  // ── Luxury 4x4s ────────────────────────────────────────────
  {
    id: "lamborghini-urus-performante",
    slug: "lamborghini-urus-performante-hire",
    manufacturer: "Lamborghini",
    model: "Urus Performante",
    category: "luxury-4x4",
    bodyType: "suv",
    heroImage: img("lamborghini-urus-performante-hire", "hero.jpg", "Giallo Inti yellow Lamborghini Urus Performante for luxury SUV hire at CVS Car Hire Birmingham"),
    gallery: [
      img("lamborghini-urus-performante-hire", "rear.jpg", "Rear of the yellow Lamborghini Urus Performante"),
      img("lamborghini-urus-performante-hire", "interior.jpg", "Lamborghini Urus Performante sports seats with yellow stitching"),
    ],
    shortDescription:
      "Supercar presence with everyday practicality — designed to dominate every arrival.",
    fullDescription:
      "Designed to dominate every arrival, the Lamborghini Urus Performante combines genuine supercar presence with everyday SUV practicality. It is the rare vehicle that carries a family and its luggage in comfort, then transforms the moment the road opens up. Aggressive, sculpted and instantly recognisable, the Performante is the flagship of the modern super-SUV — equally at home outside a Mayfair hotel, a Birmingham wedding or a film set. If you want one car that does everything and misses nothing, this is it.",
    seats: 5,
    doors: 5,
    transmission: "automatic",
    fuelType: "petrol",
    drivetrain: "awd",
    selfDriveAvailable: true,
    chauffeurAvailable: true,
    availabilityStatus: "available",
    featured: true,
    newArrival: true,
    minimumAge: 25,
    dailyPriceFrom: 1200,
    weekendPriceFrom: 3200,
    weeklyPriceFrom: 5000,
    monthlyPriceFrom: 8900,
    excessMileageCharge: 2.0,
    recommendedOccasions: ["self-drive", "wedding", "production", "corporate", "weekend"],
    relatedVehicles: ["mercedes-amg-g63-hire", "rolls-royce-cullinan-hire", "ferrari-roma-hire"],
    metaTitle: "Lamborghini Urus Performante Hire Birmingham | Luxury SUV Hire | CVS Car Hire",
    metaDescription:
      "Hire the Lamborghini Urus Performante in Birmingham with CVS Car Hire. Self-drive and chauffeur options, nationwide UK delivery. Check availability today.",
  },
  {
    id: "mercedes-amg-g63",
    slug: "mercedes-amg-g63-hire",
    manufacturer: "Mercedes-AMG",
    model: "G 63",
    category: "luxury-4x4",
    bodyType: "suv",
    heroImage: img("mercedes-amg-g63-hire", "hero.jpg", "Black Mercedes-AMG G 63 for luxury 4x4 hire at CVS Car Hire Birmingham"),
    gallery: [
      img("mercedes-amg-g63-hire", "front.jpg", "Front of the black Mercedes-AMG G 63"),
      img("mercedes-amg-g63-hire", "front-angle.jpg", "Front three-quarter view of the Mercedes-AMG G 63"),
      img("mercedes-amg-g63-hire", "side.jpg", "Side profile of the Mercedes-AMG G 63"),
      img("mercedes-amg-g63-hire", "rear.jpg", "Rear of the Mercedes-AMG G 63 with its side-hinged spare wheel"),
      img("mercedes-amg-g63-hire", "interior.jpg", "Mercedes-AMG G 63 dashboard with red leather interior"),
      img("mercedes-amg-g63-hire", "cockpit.jpg", "Mercedes-AMG G 63 steering wheel and digital cockpit"),
      img("mercedes-amg-g63-hire", "console.jpg", "Mercedes-AMG G 63 centre console with red detailing"),
      img("mercedes-amg-g63-hire", "door.jpg", "Mercedes-AMG G 63 red leather seats"),
      img("mercedes-amg-g63-hire", "lineup.jpg", "Mercedes-AMG G 63 alongside a Range Rover Sport"),
    ],
    shortDescription:
      "The definitive icon — unmistakable shape, commanding stance, AMG muscle.",
    fullDescription:
      "The Mercedes-AMG G 63 is a genuine icon: a shape unchanged in spirit for decades, reimagined with handcrafted AMG power and a cabin of jewel-like precision. Nothing else on the road commands attention quite like it. Upright, purposeful and endlessly cool, the G-Wagon is the vehicle of choice for those who value presence above all — a fixture of weddings, music videos and high-profile arrivals across the UK. Step up, settle in, and the world simply moves aside.",
    seats: 5,
    doors: 5,
    transmission: "automatic",
    fuelType: "petrol",
    drivetrain: "awd",
    selfDriveAvailable: true,
    chauffeurAvailable: true,
    availabilityStatus: "available",
    featured: true,
    minimumAge: 25,
    dailyPriceFrom: 700,
    weekendPriceFrom: 1800,
    weeklyPriceFrom: 3000,
    monthlyPriceFrom: 6500,
    excessMileageCharge: 1.8,
    recommendedOccasions: ["self-drive", "wedding", "production", "corporate"],
    relatedVehicles: ["lamborghini-urus-performante-hire", "rolls-royce-cullinan-hire", "range-rover-sport-hire"],
    metaTitle: "Mercedes G63 Hire Birmingham | G-Wagon Luxury 4x4 Hire | CVS Car Hire",
    metaDescription:
      "Hire the Mercedes-AMG G63 (G-Wagon) in Birmingham with CVS Car Hire. Self-drive and chauffeur options, nationwide UK delivery. Check availability today.",
  },
  {
    id: "rolls-royce-cullinan",
    slug: "rolls-royce-cullinan-hire",
    manufacturer: "Rolls-Royce",
    model: "Cullinan",
    category: "luxury-4x4",
    bodyType: "suv",
    heroImage: img("rolls-royce-cullinan-hire", "hero.jpg", "Rolls-Royce Cullinan with its rear coach door open, for luxury SUV and chauffeur hire at CVS Car Hire"),
    gallery: [
      img("rolls-royce-cullinan-hire", "front-3q.jpg", "Front three-quarter view of the Rolls-Royce Cullinan"),
      img("rolls-royce-cullinan-hire", "front.jpg", "Front of the Rolls-Royce Cullinan"),
      img("rolls-royce-cullinan-hire", "side.jpg", "Side profile of the Rolls-Royce Cullinan"),
      img("rolls-royce-cullinan-hire", "rear.jpg", "Rear of the Rolls-Royce Cullinan"),
      img("rolls-royce-cullinan-hire", "rear-angle.jpg", "Rear three-quarter view of the Rolls-Royce Cullinan"),
      img("rolls-royce-cullinan-hire", "dashboard.jpg", "Rolls-Royce Cullinan dashboard and cockpit"),
      img("rolls-royce-cullinan-hire", "cockpit.jpg", "Rolls-Royce Cullinan steering wheel and controls"),
      img("rolls-royce-cullinan-hire", "rear-seats.jpg", "Rolls-Royce Cullinan rear seats in black and white leather"),
      img("rolls-royce-cullinan-hire", "rear-cabin.jpg", "Rolls-Royce Cullinan hand-finished rear cabin"),
      img("rolls-royce-cullinan-hire", "lineup-fleet.jpg", "Rolls-Royce Cullinan with the CVS luxury fleet"),
      img("rolls-royce-cullinan-hire", "lineup-g-wagon.jpg", "Rolls-Royce Cullinan alongside a Mercedes-AMG G 63"),
    ],
    shortDescription:
      "The pinnacle of luxury motoring — serene, imposing and beyond compare.",
    fullDescription:
      "The Rolls-Royce Cullinan is the summit. It is the only vehicle that offers the full Rolls-Royce experience — the effortless 'magic carpet ride', the hand-finished cabin, the sheer sense of occasion — in a form commanding enough for any arrival. Whether self-driven for a milestone celebration or chauffeur-driven for a wedding, the Cullinan makes a statement that requires no explanation. Every detail, from the coach doors to the starlight headliner, exists to make the ordinary feel extraordinary.",
    seats: 5,
    doors: 4,
    transmission: "automatic",
    fuelType: "petrol",
    drivetrain: "awd",
    selfDriveAvailable: false,
    chauffeurAvailable: true,
    availabilityStatus: "available",
    featured: true,
    recommendedOccasions: ["wedding", "chauffeur", "corporate"],
    relatedVehicles: ["rolls-royce-ghost-hire", "mercedes-amg-g63-hire", "lamborghini-urus-performante-hire"],
    metaTitle: "Rolls-Royce Cullinan Chauffeur Hire Birmingham | Luxury SUV | CVS Car Hire",
    metaDescription:
      "Chauffeur-driven Rolls-Royce Cullinan hire in Birmingham with CVS Car Hire — weddings, corporate and occasions. Nationwide UK delivery. Check availability today.",
  },
  {
    id: "range-rover-vogue",
    slug: "range-rover-vogue-hire",
    manufacturer: "Land Rover",
    model: "Range Rover Vogue",
    year: 2024,
    category: "luxury-4x4",
    bodyType: "suv",
    heroImage: img("range-rover-vogue-hire", "hero.jpg", "Black 2024 Range Rover Vogue for luxury 4x4 and chauffeur hire at CVS Car Hire Birmingham"),
    gallery: [
      img("range-rover-vogue-hire", "front.jpg", "Front of the black 2024 Range Rover Vogue"),
      img("range-rover-vogue-hire", "rear.jpg", "Rear three-quarter view of the black Range Rover Vogue"),
    ],
    shortDescription:
      "The flagship Range Rover — serene, imposing and quietly unmistakable.",
    fullDescription:
      "The full-size Range Rover Vogue is modern British luxury at its most complete. Finished in black with a reductive, architectural design, it carries a presence that needs no badges to explain itself — the choice of boardrooms, wedding parties and discreet arrivals alike. Inside, it is a hushed, beautifully appointed sanctuary that isolates you from the world outside, whether you are behind the wheel or seated in the back with a chauffeur at the helm. Commanding on the motorway and effortless in the city, the Vogue is the one car that suits every occasion without ever raising its voice.",
    seats: 5,
    doors: 5,
    transmission: "automatic",
    drivetrain: "awd",
    selfDriveAvailable: true,
    chauffeurAvailable: true,
    availabilityStatus: "available",
    featured: true,
    newArrival: true,
    recommendedOccasions: ["wedding", "chauffeur", "corporate", "airport", "self-drive"],
    relatedVehicles: ["rolls-royce-cullinan-hire", "range-rover-svr-hire", "mercedes-amg-g63-hire"],
    metaTitle: "Range Rover Vogue Hire Birmingham | Luxury 4x4 & Chauffeur | CVS Car Hire",
    metaDescription:
      "Hire the 2024 Range Rover Vogue in Birmingham with CVS Car Hire. Self-drive and chauffeur options, nationwide UK delivery. Check availability today.",
  },
  {
    id: "range-rover-sport",
    slug: "range-rover-sport-hire",
    manufacturer: "Land Rover",
    model: "Range Rover Sport",
    year: 2023,
    category: "luxury-4x4",
    bodyType: "suv",
    heroImage: img("range-rover-sport-hire", "hero.jpg", "White 2023 Range Rover Sport for luxury 4x4 hire at CVS Car Hire Birmingham"),
    gallery: [
      img("range-rover-sport-hire", "front.jpg", "Front three-quarter view of the white Range Rover Sport"),
      img("range-rover-sport-hire", "front-brick.jpg", "Front of the white Range Rover Sport"),
      img("range-rover-sport-hire", "rear.jpg", "Rear three-quarter view of the Range Rover Sport"),
      img("range-rover-sport-hire", "interior.jpg", "Range Rover Sport cabin with burgundy leather interior"),
      img("range-rover-sport-hire", "cockpit.jpg", "Range Rover Sport steering wheel and digital cockpit"),
      img("range-rover-sport-hire", "infotainment.jpg", "Range Rover Sport curved infotainment display"),
    ],
    shortDescription:
      "Modern British luxury — refined, versatile and quietly confident.",
    fullDescription:
      "The latest Range Rover Sport is the definition of modern British luxury: clean, architectural design outside, and a calm, technology-rich sanctuary within. It is the all-rounder that never feels like a compromise — composed on the motorway, commanding in the city and genuinely capable wherever the road ends. For business travel, family occasions or an assured weekend away, the Range Rover Sport delivers presence and comfort in equal measure.",
    seats: 5,
    doors: 5,
    transmission: "automatic",
    fuelType: "diesel",
    drivetrain: "awd",
    selfDriveAvailable: true,
    chauffeurAvailable: false,
    availabilityStatus: "available",
    featured: true,
    minimumAge: 23,
    dailyPriceFrom: 350,
    weekendPriceFrom: 900,
    weeklyPriceFrom: 1500,
    monthlyPriceFrom: 3500,
    excessMileageCharge: 1.0,
    recommendedOccasions: ["self-drive", "corporate", "wedding", "weekend", "airport"],
    relatedVehicles: ["range-rover-svr-hire", "bmw-x5-hire", "mercedes-amg-g63-hire"],
    metaTitle: "Range Rover Sport Hire Birmingham | Luxury 4x4 Hire | CVS Car Hire",
    metaDescription:
      "Hire the Range Rover Sport in Birmingham with CVS Car Hire. Self-drive and chauffeur options, nationwide UK delivery available. Check availability today.",
  },
  {
    id: "range-rover-svr",
    slug: "range-rover-svr-hire",
    manufacturer: "Land Rover",
    model: "Range Rover Sport SVR",
    category: "luxury-4x4",
    bodyType: "suv",
    heroImage: img("range-rover-svr-hire", "hero.jpg", "Range Rover Sport SVR for performance 4x4 hire at CVS Car Hire"),
    gallery: [
      img("range-rover-svr-hire", "front.jpg", "Front of the Range Rover Sport SVR"),
      img("range-rover-svr-hire", "interior.jpg", "Range Rover Sport SVR centre console"),
      img("range-rover-svr-hire", "infotainment.jpg", "Range Rover Sport SVR infotainment display"),
    ],
    shortDescription:
      "A supercharged V8 in a luxury SUV suit — luxury with a harder edge.",
    fullDescription:
      "The Range Rover Sport SVR takes everything refined about the Range Rover and gives it a harder, more thrilling edge. Its supercharged V8 announces itself the moment you start it, and its bespoke SVO styling sets it apart from every other SUV in the car park. This is the luxury 4x4 for those who want comfort and drama in one — the practicality of a Range Rover with a genuinely visceral character. A firm favourite for standout arrivals.",
    seats: 5,
    doors: 5,
    transmission: "automatic",
    fuelType: "petrol",
    drivetrain: "awd",
    selfDriveAvailable: true,
    chauffeurAvailable: false,
    availabilityStatus: "available",
    featured: true,
    minimumAge: 23,
    dailyPriceFrom: 400,
    weekendPriceFrom: 1000,
    weeklyPriceFrom: 2000,
    monthlyPriceFrom: 4200,
    excessMileageCharge: 1.15,
    recommendedOccasions: ["self-drive", "wedding", "production", "weekend"],
    relatedVehicles: ["range-rover-sport-hire", "mercedes-amg-g63-hire", "bmw-x5-hire"],
    metaTitle: "Range Rover SVR Hire Birmingham | Performance Luxury 4x4 | CVS Car Hire",
    metaDescription:
      "Hire the Range Rover Sport SVR in Birmingham with CVS Car Hire. Self-drive and chauffeur options, nationwide UK delivery. Check availability today.",
  },
  {
    id: "bmw-x5",
    slug: "bmw-x5-hire",
    manufacturer: "BMW",
    model: "X5",
    category: "luxury-4x4",
    bodyType: "suv",
    heroImage: img("bmw-x5-hire", "hero.jpg", "BMW X5 for luxury 4x4 hire at CVS Car Hire Birmingham"),
    shortDescription:
      "The complete luxury SUV — spacious, refined and effortlessly capable.",
    fullDescription:
      "The BMW X5 is the benchmark luxury SUV for good reason: it balances space, technology and driving polish better than almost anything at its size. This seven-seat example is comfortable enough for long motorway journeys and refined enough for the school run or an airport transfer — the sensible-yet-premium choice for those who want quality without excess. A dependable, high-quality all-rounder for business or family use.",
    seats: 7,
    doors: 5,
    transmission: "automatic",
    fuelType: "diesel",
    drivetrain: "awd",
    selfDriveAvailable: true,
    chauffeurAvailable: false,
    availabilityStatus: "available",
    minimumAge: 23,
    dailyPriceFrom: 250,
    weekendPriceFrom: 650,
    weeklyPriceFrom: 1000,
    monthlyPriceFrom: 2300,
    excessMileageCharge: 0.65,
    recommendedOccasions: ["self-drive", "corporate", "airport", "weekend"],
    relatedVehicles: ["range-rover-sport-hire", "mercedes-glc-43-amg-hire", "range-rover-svr-hire"],
    metaTitle: "BMW X5 Hire Birmingham | Luxury SUV Hire | CVS Car Hire",
    metaDescription:
      "Hire the BMW X5 in Birmingham with CVS Car Hire. Self-drive and chauffeur options, nationwide UK delivery available. Check availability today.",
  },

  // ── Performance ────────────────────────────────────────────
  {
    id: "audi-rs3",
    slug: "audi-rs3-hire",
    manufacturer: "Audi",
    model: "RS3",
    category: "performance",
    bodyType: "hatchback",
    heroImage: img("audi-rs3-hire", "hero.jpg", "Black Audi RS3 Sportback for performance car hire at CVS Car Hire Birmingham"),
    gallery: [
      img("audi-rs3-hire", "front.jpg", "Front of the black Audi RS3 Sportback"),
      img("audi-rs3-hire", "side.jpg", "Side profile of the Audi RS3 Sportback"),
      img("audi-rs3-hire", "rear.jpg", "Rear three-quarter view of the Audi RS3 with its RS exhaust and diffuser"),
      img("audi-rs3-hire", "rear-angle.jpg", "Rear three-quarter view of the Audi RS3 Sportback"),
      img("audi-rs3-hire", "wheel.jpg", "Audi RS3 alloy wheel and performance tyre"),
      img("audi-rs3-hire", "seats.jpg", "Audi RS3 RS sports seats with honeycomb stitching"),
      img("audi-rs3-hire", "cockpit.jpg", "Audi RS3 flat-bottomed steering wheel and virtual cockpit"),
      img("audi-rs3-hire", "console.jpg", "Audi RS3 centre console with the RS drive-mode controls"),
      img("audi-rs3-hire", "grille.jpg", "Audi RS3 gloss-black RS grille detail"),
    ],
    shortDescription:
      "The five-cylinder cult hero — compact size, outsized character.",
    fullDescription:
      "The Audi RS3 has earned genuine cult status, and it is all down to that unmistakable five-cylinder engine — an off-beat, addictive soundtrack you will find yourself chasing on every slip road. Compact, everyday-usable and devastatingly quick, the RS3 delivers a huge amount of the supercar sensation in a car you could genuinely live with. For a driver who wants thrills without the theatre, it is one of the most rewarding cars we offer.",
    seats: 5,
    doors: 5,
    transmission: "automatic",
    fuelType: "petrol",
    drivetrain: "awd",
    selfDriveAvailable: true,
    chauffeurAvailable: false,
    availabilityStatus: "available",
    featured: true,
    recommendedOccasions: ["self-drive", "weekend", "birthday"],
    relatedVehicles: ["mercedes-glc-43-amg-hire", "audi-r8-spyder-hire", "vw-golf-r-hire"],
    metaTitle: "Audi RS3 Hire Birmingham | Performance Car Hire | CVS Car Hire",
    metaDescription:
      "Hire the Audi RS3 in Birmingham with CVS Car Hire. Self-drive performance car hire, nationwide UK delivery available. Check availability today.",
  },
  {
    id: "mercedes-glc-43-amg",
    slug: "mercedes-glc-43-amg-hire",
    manufacturer: "Mercedes-AMG",
    model: "GLC 43",
    category: "performance",
    bodyType: "suv",
    heroImage: img("mercedes-glc-43-amg-hire", "hero.jpg", "Grey Mercedes-AMG GLC 43 Coupé for performance SUV hire at CVS Car Hire"),
    gallery: [
      img("mercedes-glc-43-amg-hire", "front.jpg", "Front three-quarter view of the Mercedes-AMG GLC 43"),
      img("mercedes-glc-43-amg-hire", "interior.jpg", "Mercedes-AMG GLC 43 steering wheel and interior"),
    ],
    shortDescription:
      "AMG performance in a usable, refined SUV package.",
    fullDescription:
      "The Mercedes-AMG GLC 43 is the sweet spot between everyday usability and genuine AMG attitude. It has the badge, the bite and the beautifully finished interior, wrapped in an SUV body that suits real life. Quick, comfortable and understated, it is an ideal choice for a driver who wants something special without stepping into a full supercar — and a strong all-rounder for corporate travel or a weekend away.",
    seats: 5,
    doors: 5,
    transmission: "automatic",
    fuelType: "petrol",
    drivetrain: "awd",
    selfDriveAvailable: true,
    chauffeurAvailable: false,
    availabilityStatus: "available",
    featured: true,
    minimumAge: 23,
    dailyPriceFrom: 350,
    weekendPriceFrom: 900,
    weeklyPriceFrom: 1500,
    monthlyPriceFrom: 3500,
    excessMileageCharge: 0.75,
    recommendedOccasions: ["self-drive", "corporate", "weekend"],
    relatedVehicles: ["audi-rs3-hire", "bmw-x5-hire", "range-rover-sport-hire"],
    metaTitle: "Mercedes GLC 43 AMG Hire Birmingham | Performance SUV | CVS Car Hire",
    metaDescription:
      "Hire the Mercedes-AMG GLC 43 in Birmingham with CVS Car Hire. Self-drive and chauffeur options, nationwide UK delivery. Check availability today.",
  },
  {
    id: "vw-golf-r",
    slug: "vw-golf-r-hire",
    manufacturer: "Volkswagen",
    model: "Golf R",
    category: "performance",
    bodyType: "hatchback",
    heroImage: img("vw-golf-r-hire", "hero.jpg", "White Volkswagen Golf R for performance car hire at CVS Car Hire Birmingham"),
    gallery: [
      img("vw-golf-r-hire", "front.jpg", "Front of the white Volkswagen Golf R"),
      img("vw-golf-r-hire", "side.jpg", "Side profile of the white Volkswagen Golf R"),
      img("vw-golf-r-hire", "rear.jpg", "Rear of the Volkswagen Golf R with its quad exhaust"),
      img("vw-golf-r-hire", "rear-angle.jpg", "Rear three-quarter view of the white Volkswagen Golf R"),
      img("vw-golf-r-hire", "grille.jpg", "Volkswagen Golf R front grille detail"),
      img("vw-golf-r-hire", "cockpit.jpg", "Volkswagen Golf R steering wheel and digital cockpit"),
      img("vw-golf-r-hire", "seats.jpg", "Volkswagen Golf R sports seats with blue R detailing"),
      img("vw-golf-r-hire", "seat-detail.jpg", "Golf R seat detail with the blue R logo and diamond stitching"),
      img("vw-golf-r-hire", "console.jpg", "Volkswagen Golf R centre console and gear selector"),
    ],
    shortDescription:
      "The everyday hot hatch benchmark — fast, four-wheel-drive and discreet.",
    fullDescription:
      "The Volkswagen Golf R is the thinking driver's performance car: rapid, all-weather capable and entirely unassuming. It delivers serious pace and four-wheel-drive traction in a package that remains practical, comfortable and easy to place on a British B-road. For a spirited weekend, a first taste of a performance car, or simply a quality drive without any fuss, the Golf R remains the benchmark.",
    seats: 5,
    doors: 5,
    transmission: "automatic",
    fuelType: "petrol",
    drivetrain: "awd",
    selfDriveAvailable: true,
    chauffeurAvailable: false,
    availabilityStatus: "available",
    minimumAge: 23,
    dailyPriceFrom: 250,
    weekendPriceFrom: 700,
    weeklyPriceFrom: 1000,
    monthlyPriceFrom: 3000,
    excessMileageCharge: 0.9,
    recommendedOccasions: ["self-drive", "weekend"],
    relatedVehicles: ["audi-rs3-hire", "mercedes-glc-43-amg-hire", "audi-r8-spyder-hire"],
    metaTitle: "Volkswagen Golf R Hire Birmingham | Performance Car Hire | CVS Car Hire",
    metaDescription:
      "Hire the Volkswagen Golf R in Birmingham with CVS Car Hire. Self-drive performance hire, nationwide UK delivery available. Check availability today.",
  },

  // ── Prestige ───────────────────────────────────────────────
  {
    id: "rolls-royce-ghost",
    slug: "rolls-royce-ghost-hire",
    manufacturer: "Rolls-Royce",
    model: "Ghost",
    category: "prestige",
    bodyType: "saloon",
    heroImage: img("rolls-royce-ghost-hire", "hero.jpg", "Black and champagne Rolls-Royce Ghosts from the CVS Car Hire fleet"),
    gallery: [
      img("rolls-royce-ghost-hire", "pair.jpg", "A pair of Rolls-Royce Ghosts in black and champagne"),
      img("rolls-royce-ghost-hire", "rear.jpg", "Rear three-quarter view of the champagne Rolls-Royce Ghost"),
      img("rolls-royce-ghost-hire", "interior.jpg", "Rolls-Royce Ghost rear cabin with starlight headliner"),
    ],
    shortDescription:
      "Effortless serenity — the definitive luxury saloon for weddings and occasions.",
    fullDescription:
      "The Rolls-Royce Ghost is understated luxury in its purest form. Where the Cullinan commands, the Ghost quietly reassures — a serene, beautifully proportioned saloon defined by the whisper of its cabin and the smoothness of its progress. It is, for many, the ultimate wedding car: dignified, timeless and photographed to perfection. Chauffeur-driven or self-driven, the Ghost turns an occasion into a memory.",
    seats: 5,
    doors: 4,
    transmission: "automatic",
    fuelType: "petrol",
    drivetrain: "rwd",
    selfDriveAvailable: false,
    chauffeurAvailable: true,
    availabilityStatus: "available",
    featured: true,
    recommendedOccasions: ["wedding", "chauffeur", "corporate"],
    relatedVehicles: ["rolls-royce-cullinan-hire", "rolls-royce-ghost-hire", "mercedes-v-class-hire"],
    metaTitle: "Rolls-Royce Ghost Chauffeur Hire Birmingham | Wedding & Prestige | CVS Car Hire",
    metaDescription:
      "Chauffeur-driven Rolls-Royce Ghost hire in Birmingham with CVS Car Hire — the definitive wedding and prestige car. Nationwide UK delivery. Check availability today.",
  },
  // ── Convertibles ───────────────────────────────────────────
  {
    id: "bmw-4-series-convertible",
    slug: "bmw-4-series-convertible-hire",
    manufacturer: "BMW",
    model: "4 Series Convertible",
    category: "convertible",
    bodyType: "convertible",
    heroImage: img("bmw-4-series-convertible-hire", "hero.jpg", "BMW 4 Series Convertible for open-top hire at CVS Car Hire Birmingham"),
    shortDescription:
      "Effortless open-top style for warmer days and city evenings.",
    fullDescription:
      "The BMW 4 Series Convertible is open-top motoring made easy and elegant. Drop the roof and it transforms any drive — a coastal run, a summer evening, a relaxed weekend — into something to savour, while the quality cabin and composed handling keep it genuinely enjoyable to drive. Stylish without shouting, it is the ideal choice for those who want the pleasure of a convertible in a refined, everyday package.",
    seats: 4,
    doors: 2,
    transmission: "automatic",
    fuelType: "petrol",
    drivetrain: "rwd",
    selfDriveAvailable: true,
    chauffeurAvailable: false,
    availabilityStatus: "available",
    featured: true,
    recommendedOccasions: ["self-drive", "weekend", "birthday"],
    relatedVehicles: ["audi-r8-spyder-hire", "audi-rs3-hire", "vw-golf-r-hire"],
    metaTitle: "BMW 4 Series Convertible Hire Birmingham | Open-Top Car Hire | CVS Car Hire",
    metaDescription:
      "Hire the BMW 4 Series Convertible in Birmingham with CVS Car Hire. Self-drive open-top hire, nationwide UK delivery available. Check availability today.",
  },

  // ── Group travel / chauffeur ───────────────────────────────
  {
    id: "mercedes-v-class",
    slug: "mercedes-v-class-hire",
    manufacturer: "Mercedes-Benz",
    model: "V-Class",
    category: "group-travel",
    bodyType: "mpv",
    heroImage: img("mercedes-v-class-hire", "hero.jpg", "Black Mercedes-Benz V-Class for group travel and chauffeur hire at CVS Car Hire"),
    gallery: [
      img("mercedes-v-class-hire", "front-angle.jpg", "Front three-quarter view of the black Mercedes-Benz V-Class"),
    ],
    shortDescription:
      "Luxury for the whole party — space, comfort and refinement together.",
    fullDescription:
      "The Mercedes-Benz V-Class proves that group travel need not mean compromise. With seating for up to eight, a quiet, well-appointed cabin and the reassurance of the three-pointed star, it carries the whole party in genuine comfort. It is the natural choice for airport transfers, wedding parties, corporate groups and event travel — everyone arriving together, relaxed and on time. Available self-drive or with a professional chauffeur.",
    seats: 8,
    doors: 5,
    transmission: "automatic",
    fuelType: "diesel",
    drivetrain: "rwd",
    selfDriveAvailable: true,
    chauffeurAvailable: true,
    availabilityStatus: "available",
    featured: true,
    minimumAge: 23,
    dailyPriceFrom: 350,
    weekendPriceFrom: 900,
    weeklyPriceFrom: 1000,
    monthlyPriceFrom: 2500,
    excessMileageCharge: 0.8,
    recommendedOccasions: ["airport", "wedding", "corporate", "chauffeur"],
    relatedVehicles: ["mercedes-v-class-hire", "range-rover-sport-hire", "bmw-x5-hire"],
    metaTitle: "Mercedes V-Class Hire Birmingham | Group Travel & Chauffeur | CVS Car Hire",
    metaDescription:
      "Hire the Mercedes-Benz V-Class in Birmingham with CVS Car Hire. Group travel, airport transfers and chauffeur options. Check availability today.",
  },

  // ── New arrivals ───────────────────────────────────────────
  {
    id: "lamborghini-huracan-evo",
    slug: "lamborghini-huracan-evo-hire",
    manufacturer: "Lamborghini",
    model: "Huracán Evo",
    edition: "Spyder",
    category: "supercar",
    bodyType: "convertible",
    heroImage: img("lamborghini-huracan-evo-hire", "hero.jpg", "Red Lamborghini Huracán Evo Spyder for supercar hire at CVS Car Hire Birmingham"),
    gallery: [
      img("lamborghini-huracan-evo-hire", "front.jpg", "Front three-quarter view of the red Lamborghini Huracán Evo Spyder"),
      img("lamborghini-huracan-evo-hire", "front-roof-down.jpg", "Red Lamborghini Huracán Evo Spyder with the roof down"),
      img("lamborghini-huracan-evo-hire", "side.jpg", "Side profile of the Lamborghini Huracán Evo Spyder"),
      img("lamborghini-huracan-evo-hire", "rear.jpg", "Rear three-quarter view of the Lamborghini Huracán Evo Spyder"),
      img("lamborghini-huracan-evo-hire", "rear-angle.jpg", "Rear of the red Lamborghini Huracán Evo Spyder"),
      img("lamborghini-huracan-evo-hire", "rear-detail.jpg", "Lamborghini Huracán Evo Spyder rear detail"),
      img("lamborghini-huracan-evo-hire", "front-static.jpg", "Red Lamborghini Huracán Evo Spyder parked"),
    ],
    shortDescription:
      "Naturally aspirated V10 drama — open-top, and finished in striking red.",
    fullDescription:
      "The Lamborghini Huracán Evo is the definitive modern V10 supercar, and in Spyder form with the roof down it is pure theatre. The naturally aspirated engine builds to a spine-tingling crescendo that no turbocharged rival can match, while the sharpened Evo styling turns every arrival into an event. Dramatic, loud and unmistakably Lamborghini, this red Spyder is built for the days you want to be seen and heard — a landmark birthday, a photoshoot, or simply the drive of a lifetime.",
    seats: 2,
    doors: 2,
    transmission: "automatic",
    fuelType: "petrol",
    drivetrain: "awd",
    selfDriveAvailable: true,
    chauffeurAvailable: false,
    availabilityStatus: "available",
    featured: true,
    newArrival: true,
    minimumAge: 25,
    recommendedOccasions: ["self-drive", "birthday", "production", "weekend"],
    relatedVehicles: ["lamborghini-huracan-performante-spyder-hire", "audi-r8-spyder-hire", "ferrari-roma-hire"],
    metaTitle: "Lamborghini Huracán Evo Spyder Hire Birmingham | Supercar Hire | CVS Car Hire",
    metaDescription:
      "Hire the Lamborghini Huracán Evo Spyder in Birmingham with CVS Car Hire. Self-drive supercar hire, nationwide UK delivery available. Check availability today.",
  },
  {
    id: "bmw-m3",
    slug: "bmw-m3-hire",
    manufacturer: "BMW",
    model: "M3",
    category: "performance",
    bodyType: "saloon",
    heroImage: img("bmw-m3-hire", "hero.jpg", "Matte blue BMW M3 with gold wheels for performance car hire at CVS Car Hire Birmingham"),
    gallery: [
      img("bmw-m3-hire", "rear.jpg", "Rear three-quarter view of the matte blue BMW M3"),
      img("bmw-m3-hire", "interior.jpg", "BMW M3 cockpit with its M steering wheel"),
    ],
    shortDescription:
      "The definitive sports saloon — savage pace with genuine everyday usability.",
    fullDescription:
      "The BMW M3 is the benchmark super-saloon: a car that delivers proper supercar pace and a chassis to match, yet remains comfortable and practical enough to use every day. Finished in a striking matte blue over gold wheels, this M3 has real road presence to go with its performance. Rapid, engaging and endlessly capable, it is the enthusiast's choice for a spirited weekend or a standout arrival — a performance car you could genuinely live with.",
    seats: 5,
    doors: 4,
    transmission: "automatic",
    fuelType: "petrol",
    selfDriveAvailable: true,
    chauffeurAvailable: false,
    availabilityStatus: "available",
    featured: true,
    newArrival: true,
    recommendedOccasions: ["self-drive", "weekend", "birthday"],
    relatedVehicles: ["audi-rs3-hire", "mercedes-glc-43-amg-hire", "audi-r8-spyder-hire"],
    metaTitle: "BMW M3 Hire Birmingham | Performance Car Hire | CVS Car Hire",
    metaDescription:
      "Hire the BMW M3 in Birmingham with CVS Car Hire. Self-drive performance car hire, nationwide UK delivery available. Check availability today.",
  },
  {
    id: "mercedes-amg-a35",
    slug: "mercedes-amg-a35-hire",
    manufacturer: "Mercedes-AMG",
    model: "A 35",
    category: "performance",
    bodyType: "hatchback",
    heroImage: img("mercedes-amg-a35-hire", "hero.jpg", "Black Mercedes-AMG A 35 for performance car hire at CVS Car Hire Birmingham"),
    gallery: [
      img("mercedes-amg-a35-hire", "front.jpg", "Front three-quarter view of the black Mercedes-AMG A 35"),
      img("mercedes-amg-a35-hire", "side.jpg", "Side profile of the Mercedes-AMG A 35"),
      img("mercedes-amg-a35-hire", "rear.jpg", "Rear three-quarter view of the Mercedes-AMG A 35"),
      img("mercedes-amg-a35-hire", "rear-angle.jpg", "Rear of the black Mercedes-AMG A 35"),
      img("mercedes-amg-a35-hire", "seats.jpg", "Mercedes-AMG A 35 sports seats in red and black"),
      img("mercedes-amg-a35-hire", "rear-seats.jpg", "Mercedes-AMG A 35 rear seats with red detailing"),
      img("mercedes-amg-a35-hire", "cockpit.jpg", "Mercedes-AMG A 35 steering wheel and cockpit"),
      img("mercedes-amg-a35-hire", "console.jpg", "Mercedes-AMG A 35 centre console"),
      img("mercedes-amg-a35-hire", "badge.jpg", "Mercedes-AMG A 35 rear badge"),
    ],
    shortDescription:
      "AMG performance in an everyday hatch — fast, four-wheel-drive and stylish.",
    fullDescription:
      "The Mercedes-AMG A 35 packs genuine AMG attitude into a compact, everyday-usable hatchback. With 4MATIC all-wheel drive, a punchy turbocharged engine and a beautifully finished cabin in red and black, it delivers real pace and a sense of occasion without the running costs of a full supercar. Sharp to look at and easy to place on a British road, the A 35 is an ideal first performance car, a spirited weekend companion, or a stylish arrival for a prom or celebration.",
    seats: 5,
    doors: 5,
    transmission: "automatic",
    fuelType: "petrol",
    drivetrain: "awd",
    selfDriveAvailable: true,
    chauffeurAvailable: false,
    availabilityStatus: "available",
    featured: true,
    newArrival: true,
    recommendedOccasions: ["self-drive", "weekend", "birthday", "prom"],
    relatedVehicles: ["audi-rs3-hire", "vw-golf-r-hire", "mercedes-glc-43-amg-hire"],
    metaTitle: "Mercedes-AMG A35 Hire Birmingham | Performance Car Hire | CVS Car Hire",
    metaDescription:
      "Hire the Mercedes-AMG A 35 in Birmingham with CVS Car Hire. Self-drive performance hatchback, nationwide UK delivery available. Check availability today.",
  },
  {
    id: "mercedes-amg-g63-red",
    slug: "mercedes-amg-g63-red-hire",
    manufacturer: "Mercedes-AMG",
    model: "G 63",
    category: "luxury-4x4",
    bodyType: "suv",
    heroImage: img("mercedes-amg-g63-red-hire", "hero.jpg", "Red Mercedes-AMG G 63 for luxury 4x4 hire at CVS Car Hire Birmingham"),
    gallery: [
      img("mercedes-amg-g63-red-hire", "front.jpg", "Front three-quarter view of the red Mercedes-AMG G 63"),
      img("mercedes-amg-g63-red-hire", "rear.jpg", "Rear of the red Mercedes-AMG G 63 with its side-hinged spare wheel"),
      img("mercedes-amg-g63-red-hire", "side.jpg", "Side profile of the red Mercedes-AMG G 63"),
      img("mercedes-amg-g63-red-hire", "city.jpg", "Red Mercedes-AMG G 63 in the city"),
      img("mercedes-amg-g63-red-hire", "front-head-on.jpg", "Front of the red Mercedes-AMG G 63"),
    ],
    shortDescription:
      "The G-Wagon icon in standout red — commanding presence, AMG muscle.",
    fullDescription:
      "The Mercedes-AMG G 63 is a genuine icon, and finished in this striking red it turns heads before it has even moved. Upright, purposeful and handcrafted, the G-Wagon pairs unmistakable road presence with proper AMG performance — a fixture of weddings, music videos and high-profile arrivals across the UK. If you want the boldest statement in our fleet in a colour to match, this is the one.",
    seats: 5,
    doors: 5,
    transmission: "automatic",
    fuelType: "petrol",
    drivetrain: "awd",
    selfDriveAvailable: true,
    chauffeurAvailable: false,
    availabilityStatus: "available",
    featured: true,
    newArrival: true,
    minimumAge: 25,
    recommendedOccasions: ["self-drive", "wedding", "production", "weekend"],
    relatedVehicles: ["mercedes-amg-g63-hire", "lamborghini-urus-performante-hire", "range-rover-svr-hire"],
    metaTitle: "Red Mercedes-AMG G63 Hire Birmingham | Self-Drive G-Wagon | CVS Car Hire",
    metaDescription:
      "Hire this striking red Mercedes-AMG G63 (G-Wagon) in Birmingham with CVS Car Hire. Self-drive luxury 4x4, nationwide UK delivery. Check availability today.",
  },
];

// ── Derived helpers ──────────────────────────────────────────

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export function getFeaturedVehicles(): Vehicle[] {
  return vehicles.filter((v) => v.featured);
}

/**
 * Vehicles that legitimately belong to more than one fleet category, so a car
 * appears under every relevant filter (e.g. a Spyder is a supercar AND a
 * convertible). Kept in one place rather than scattered through the data.
 */
const CATEGORY_OVERLAPS: Record<string, VehicleCategory[]> = {
  "ferrari-roma-hire": ["prestige"],
  "lamborghini-huracan-performante-spyder-hire": ["convertible"],
  "audi-r8-spyder-hire": ["convertible"],
  "lamborghini-urus-performante-hire": ["supercar", "performance"],
  "mercedes-amg-g63-hire": ["performance"],
  "rolls-royce-cullinan-hire": ["prestige"],
  "range-rover-sport-hire": ["prestige"],
  "range-rover-svr-hire": ["performance"],
  "bmw-x5-hire": ["group-travel"],
  "mercedes-glc-43-amg-hire": ["luxury-4x4"],
  "bmw-4-series-convertible-hire": ["prestige"],
};

/**
 * Does a vehicle belong to a fleet category? Matches the primary category, any
 * declared secondary categories, and the overlap map above. The "chauffeur"
 * category is resolved from chauffeurAvailable so chauffeur-driven cars always
 * populate that filter without needing a separate tag.
 */
export function vehicleInCategory(v: Vehicle, category: string): boolean {
  if (category === "chauffeur") return v.chauffeurAvailable;
  if (v.category === category) return true;
  if (v.categories?.includes(category as VehicleCategory)) return true;
  return (CATEGORY_OVERLAPS[v.slug] ?? []).includes(category as VehicleCategory);
}

export function getVehiclesByCategory(category: string): Vehicle[] {
  return vehicles.filter((v) => vehicleInCategory(v, category));
}

export function getRelatedVehicles(vehicle: Vehicle, limit = 3): Vehicle[] {
  const bySlug = (vehicle.relatedVehicles ?? [])
    .map(getVehicleBySlug)
    .filter((v): v is Vehicle => Boolean(v));
  if (bySlug.length >= limit) return bySlug.slice(0, limit);
  // Fill from same category.
  const fill = vehicles.filter(
    (v) => v.category === vehicle.category && v.slug !== vehicle.slug && !bySlug.includes(v)
  );
  return [...bySlug, ...fill].slice(0, limit);
}

export const allVehicleSlugs = vehicles.map((v) => v.slug);
