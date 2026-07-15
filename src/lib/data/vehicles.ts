import type { Vehicle, ImageAsset } from "@/lib/types";

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
  return { src: `/images/fleet/${slug}/${name}`, alt, caption, placeholder: true };
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
    heroImage: img("lamborghini-huracan-performante-spyder-hire", "hero.jpg", "Lamborghini Huracán Performante Spyder for supercar hire at CVS Car Hire"),
    gallery: [
      img("lamborghini-huracan-performante-spyder-hire", "roof-down.jpg", "Lamborghini Huracán Performante Spyder with the roof lowered"),
      img("lamborghini-huracan-performante-spyder-hire", "interior.jpg", "Lamborghini Huracán Performante Spyder cockpit"),
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
    heroImage: img("audi-r8-spyder-hire", "hero.jpg", "Audi R8 Spyder available for self-drive supercar hire at CVS Car Hire Birmingham"),
    gallery: [
      img("audi-r8-spyder-hire", "side.jpg", "Profile of the Audi R8 Spyder"),
      img("audi-r8-spyder-hire", "interior.jpg", "Audi R8 Spyder virtual cockpit interior"),
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
    heroImage: img("lamborghini-urus-performante-hire", "hero.jpg", "Lamborghini Urus Performante for luxury SUV hire at CVS Car Hire Birmingham"),
    gallery: [
      img("lamborghini-urus-performante-hire", "front.jpg", "Front of the Lamborghini Urus Performante"),
      img("lamborghini-urus-performante-hire", "interior.jpg", "Lamborghini Urus Performante interior"),
      img("lamborghini-urus-performante-hire", "rear.jpg", "Rear quarter of the Lamborghini Urus Performante"),
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
    heroImage: img("mercedes-amg-g63-hire", "hero.jpg", "Mercedes-AMG G 63 for luxury 4x4 hire at CVS Car Hire Birmingham"),
    gallery: [
      img("mercedes-amg-g63-hire", "front.jpg", "Front of the Mercedes-AMG G 63"),
      img("mercedes-amg-g63-hire", "interior.jpg", "Mercedes-AMG G 63 luxury interior"),
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
    heroImage: img("rolls-royce-cullinan-hire", "hero.jpg", "Rolls-Royce Cullinan for luxury SUV and chauffeur hire at CVS Car Hire"),
    gallery: [
      img("rolls-royce-cullinan-hire", "front.jpg", "Front of the Rolls-Royce Cullinan"),
      img("rolls-royce-cullinan-hire", "interior.jpg", "Rolls-Royce Cullinan hand-finished interior"),
      img("rolls-royce-cullinan-hire", "rear.jpg", "Rear of the Rolls-Royce Cullinan"),
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
    selfDriveAvailable: true,
    chauffeurAvailable: true,
    availabilityStatus: "available",
    featured: true,
    recommendedOccasions: ["wedding", "chauffeur", "corporate", "self-drive"],
    relatedVehicles: ["rolls-royce-ghost-hire", "mercedes-amg-g63-hire", "lamborghini-urus-performante-hire"],
    metaTitle: "Rolls-Royce Cullinan Hire Birmingham | Luxury SUV & Chauffeur | CVS Car Hire",
    metaDescription:
      "Hire the Rolls-Royce Cullinan in Birmingham with CVS Car Hire. Self-drive and chauffeur-driven options, nationwide UK delivery. Check availability today.",
  },
  {
    id: "range-rover-sport",
    slug: "range-rover-sport-hire",
    manufacturer: "Land Rover",
    model: "Range Rover Sport",
    year: 2023,
    category: "luxury-4x4",
    bodyType: "suv",
    heroImage: img("range-rover-sport-hire", "hero.jpg", "Range Rover Sport for luxury 4x4 hire at CVS Car Hire Birmingham"),
    gallery: [
      img("range-rover-sport-hire", "front.jpg", "Front of the Range Rover Sport"),
      img("range-rover-sport-hire", "interior.jpg", "Range Rover Sport interior"),
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
    chauffeurAvailable: true,
    availabilityStatus: "available",
    featured: true,
    minimumAge: 23,
    dailyPriceFrom: 350,
    weekendPriceFrom: 900,
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
      img("range-rover-svr-hire", "interior.jpg", "Range Rover Sport SVR sports interior"),
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
    chauffeurAvailable: true,
    availabilityStatus: "available",
    featured: true,
    minimumAge: 23,
    dailyPriceFrom: 400,
    weekendPriceFrom: 1000,
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
    chauffeurAvailable: true,
    availabilityStatus: "available",
    minimumAge: 23,
    dailyPriceFrom: 250,
    weekendPriceFrom: 650,
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
    bodyType: "saloon",
    heroImage: img("audi-rs3-hire", "hero.jpg", "Audi RS3 for performance car hire at CVS Car Hire Birmingham"),
    shortDescription:
      "The five-cylinder cult hero — compact size, outsized character.",
    fullDescription:
      "The Audi RS3 has earned genuine cult status, and it is all down to that unmistakable five-cylinder engine — an off-beat, addictive soundtrack you will find yourself chasing on every slip road. Compact, everyday-usable and devastatingly quick, the RS3 delivers a huge amount of the supercar sensation in a car you could genuinely live with. For a driver who wants thrills without the theatre, it is one of the most rewarding cars we offer.",
    seats: 5,
    doors: 4,
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
    heroImage: img("mercedes-glc-43-amg-hire", "hero.jpg", "Mercedes-AMG GLC 43 for performance SUV hire at CVS Car Hire"),
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
    chauffeurAvailable: true,
    availabilityStatus: "available",
    featured: true,
    minimumAge: 23,
    dailyPriceFrom: 350,
    weekendPriceFrom: 900,
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
    heroImage: img("vw-golf-r-hire", "hero.jpg", "Volkswagen Golf R for performance car hire at CVS Car Hire Birmingham"),
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
    heroImage: img("rolls-royce-ghost-hire", "hero.jpg", "Rolls-Royce Ghost for prestige and wedding car hire at CVS Car Hire"),
    gallery: [
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
    selfDriveAvailable: true,
    chauffeurAvailable: true,
    availabilityStatus: "available",
    featured: true,
    recommendedOccasions: ["wedding", "chauffeur", "corporate", "self-drive"],
    relatedVehicles: ["rolls-royce-cullinan-hire", "mercedes-e-class-hire", "mercedes-v-class-hire"],
    metaTitle: "Rolls-Royce Ghost Hire Birmingham | Wedding & Prestige Car | CVS Car Hire",
    metaDescription:
      "Hire the Rolls-Royce Ghost in Birmingham with CVS Car Hire. Chauffeur-driven and self-drive options for weddings and occasions. Check availability today.",
  },
  {
    id: "mercedes-e-class",
    slug: "mercedes-e-class-hire",
    manufacturer: "Mercedes-Benz",
    model: "E-Class",
    category: "prestige",
    bodyType: "saloon",
    heroImage: img("mercedes-e-class-hire", "hero.jpg", "Mercedes-Benz E-Class for executive and chauffeur hire at CVS Car Hire"),
    shortDescription:
      "The executive standard — composed, comfortable and quietly impressive.",
    fullDescription:
      "The Mercedes-Benz E-Class is the executive saloon by which others are judged. Refined, spacious and beautifully finished, it is the natural choice for business travel, airport transfers and chauffeur-driven journeys where comfort and composure matter most. It carries you and your guests in quiet, understated class — professional, dependable and always appropriate.",
    seats: 5,
    doors: 4,
    transmission: "automatic",
    fuelType: "diesel",
    drivetrain: "rwd",
    selfDriveAvailable: true,
    chauffeurAvailable: true,
    availabilityStatus: "available",
    minimumAge: 21,
    dailyPriceFrom: 250,
    weekendPriceFrom: 650,
    excessMileageCharge: 0.5,
    recommendedOccasions: ["corporate", "airport", "chauffeur", "self-drive"],
    relatedVehicles: ["mercedes-v-class-hire", "rolls-royce-ghost-hire", "bmw-x5-hire"],
    metaTitle: "Mercedes E-Class Hire Birmingham | Executive & Chauffeur | CVS Car Hire",
    metaDescription:
      "Hire the Mercedes-Benz E-Class in Birmingham with CVS Car Hire. Executive self-drive and chauffeur options, nationwide UK delivery. Check availability today.",
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
    relatedVehicles: ["audi-r8-spyder-hire", "mercedes-e-class-hire", "vw-golf-r-hire"],
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
    heroImage: img("mercedes-v-class-hire", "hero.jpg", "Mercedes-Benz V-Class for group travel and chauffeur hire at CVS Car Hire"),
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
    excessMileageCharge: 0.8,
    recommendedOccasions: ["airport", "wedding", "corporate", "chauffeur"],
    relatedVehicles: ["mercedes-e-class-hire", "range-rover-sport-hire", "bmw-x5-hire"],
    metaTitle: "Mercedes V-Class Hire Birmingham | Group Travel & Chauffeur | CVS Car Hire",
    metaDescription:
      "Hire the Mercedes-Benz V-Class in Birmingham with CVS Car Hire. Group travel, airport transfers and chauffeur options. Check availability today.",
  },
];

// ── Derived helpers ──────────────────────────────────────────

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export function getFeaturedVehicles(): Vehicle[] {
  return vehicles.filter((v) => v.featured);
}

export function getVehiclesByCategory(category: string): Vehicle[] {
  return vehicles.filter((v) => v.category === category);
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
