import type { ServiceContent } from "@/lib/types";

/**
 * Service landing pages. Original premium copy; no invented pricing, insurance
 * terms or age requirements. Recommended vehicles resolve by slug or category.
 */
export const services: ServiceContent[] = [
  {
    slug: "supercar-hire",
    name: "Supercar Hire",
    navLabel: "Supercar Hire",
    category: "supercar",
    hero: {
      eyebrow: "Self-Drive",
      heading: "Supercar Hire",
      intro:
        "Ferrari, Lamborghini and the icons that turn a day into an event — available for self-drive across Birmingham and the UK.",
    },
    overview:
      "A supercar is not simply a car; it is a feeling you carry long after the keys are returned. Our supercar collection brings together some of the most desirable machines in the world, prepared to the highest standard and ready for the drive of your life. Whether it is a landmark birthday, a once-in-a-lifetime road trip or a photoshoot that demands the very best, we help you choose the right car and handle every detail around it.",
    benefits: [
      "A curated collection of genuine supercar icons",
      "Self-drive hire for a day, a weekend or longer",
      "Immaculately presented, carefully maintained vehicles",
      "Collection or nationwide delivery, subject to availability",
      "Direct, human support from enquiry to return",
    ],
    occasions: ["Landmark birthdays", "Driving experiences", "Photoshoots & content", "Weekend escapes"],
    process: [
      { title: "Tell us your plans", body: "Share the dates, the occasion and the car you have in mind — or let us recommend one." },
      { title: "We confirm availability", body: "We check the fleet and confirm everything you need to know before you commit." },
      { title: "Collection or delivery", body: "Collect from us in Birmingham, or arrange delivery to your chosen location where available." },
      { title: "Enjoy the drive", body: "We hand over a beautifully prepared car and stay on hand throughout your hire." },
    ],
    faqs: [
      { question: "Can I hire a supercar for a single day?", answer: "Yes — supercars are available for a day, a weekend or longer. Tell us your dates and we'll confirm availability." },
      { question: "Do you deliver supercars outside Birmingham?", answer: "Nationwide UK delivery is available on many vehicles, subject to the car and the location. Contact us and we'll confirm for your area." },
      { question: "What do I need to hire a supercar?", answer: "Requirements such as minimum age, licence and deposit vary by vehicle. Start a conversation with our team and we'll talk you through exactly what's needed for your chosen car." },
    ],
    metaTitle: "Supercar Hire Birmingham | Ferrari, Lamborghini & More | CVS Car Hire",
    metaDescription:
      "Self-drive supercar hire in Birmingham and across the UK. Ferrari, Lamborghini and more from CVS Car Hire. Nationwide delivery available. Check availability.",
  },
  {
    slug: "luxury-car-hire",
    name: "Luxury Car Hire",
    navLabel: "Luxury Car Hire",
    hero: {
      eyebrow: "Self-Drive & Chauffeur",
      heading: "Luxury Car Hire",
      intro:
        "Birmingham's leading collection of luxury, prestige and performance vehicles — for the occasions that deserve them.",
    },
    overview:
      "Luxury is in the detail: the way a car looks as it pulls up, the hush of the cabin, the sense of occasion it creates. Our luxury collection spans the finest names in motoring, chosen for their presence and refinement. Whatever the occasion, we help you find the car that fits it perfectly — and take care of everything around the hire so you can simply enjoy it.",
    benefits: [
      "A fleet of over 50 luxury, prestige and performance vehicles",
      "Self-drive and chauffeur-driven options",
      "Established since 2014 and BVRLA member",
      "Personal recommendations for your occasion",
      "Nationwide delivery available, subject to vehicle and location",
    ],
    occasions: ["Weddings", "Corporate & business", "Celebrations", "Weekend escapes"],
    faqs: [
      { question: "What counts as a luxury car?", answer: "Our luxury collection ranges from prestige saloons and SUVs to supercars — Rolls-Royce, Lamborghini, Mercedes-AMG, Range Rover and more. Tell us the occasion and we'll suggest the right fit." },
      { question: "Do you offer both self-drive and chauffeur?", answer: "Yes. Many vehicles are available either way. We'll confirm which option suits your plans." },
    ],
    metaTitle: "Luxury Car Hire Birmingham | Prestige & Performance | CVS Car Hire",
    metaDescription:
      "Luxury car hire in Birmingham and across the UK. Self-drive and chauffeur options from a fleet of 50+ prestige and performance vehicles. Check availability.",
  },
  {
    slug: "prestige-car-hire",
    name: "Prestige Car Hire",
    navLabel: "Prestige Car Hire",
    category: "prestige",
    hero: {
      eyebrow: "Self-Drive & Chauffeur",
      heading: "Prestige Car Hire",
      intro:
        "Understated luxury that speaks before a word is said — the finest saloons and SUVs for business and occasion.",
    },
    overview:
      "Prestige is quiet confidence. It is the car that makes the right impression without ever trying too hard — refined, beautifully finished and always appropriate. Our prestige collection is ideal for business travel, weddings and any occasion where composure matters. We'll help you choose, and make the process effortless.",
    benefits: [
      "Refined saloons and SUVs from the finest marques",
      "Ideal for business, weddings and formal occasions",
      "Self-drive or professional chauffeur",
      "Immaculate presentation, every time",
      "Delivery or collection to suit you",
    ],
    occasions: ["Corporate & executive", "Weddings", "Formal events", "Airport transfers"],
    faqs: [
      { question: "Which cars are best for a wedding?", answer: "Rolls-Royce models are perennial favourites, but the right choice depends on your style and party size. We're happy to advise." },
    ],
    metaTitle: "Prestige Car Hire Birmingham | Executive & Wedding Cars | CVS Car Hire",
    metaDescription:
      "Prestige car hire in Birmingham. Refined saloons and SUVs for business, weddings and occasions. Self-drive and chauffeur options. Check availability.",
  },
  {
    slug: "performance-car-hire",
    name: "Performance Car Hire",
    navLabel: "Performance Car Hire",
    category: "performance",
    hero: {
      eyebrow: "Self-Drive",
      heading: "Performance Car Hire",
      intro:
        "Precision-engineered speed for those who feel every input — usable, thrilling and endlessly rewarding.",
    },
    overview:
      "Not every thrill needs a supercar badge. Our performance collection delivers genuine excitement in cars you could live with every day — quick, engaging and full of character. For a spirited weekend, a first taste of real performance or simply the joy of a great drive, these are the cars that put a smile on your face on every road.",
    benefits: [
      "Engaging, everyday-usable performance cars",
      "A superb introduction to fast driving",
      "Self-drive hire for a day, weekend or longer",
      "Carefully maintained and immaculately presented",
      "Collection or delivery available",
    ],
    occasions: ["Weekend drives", "Birthdays", "Driving days"],
    faqs: [
      { question: "What's the difference between a performance car and a supercar?", answer: "Performance cars deliver serious pace and character in a more usable, everyday package, while supercars prioritise outright drama and exclusivity. We can help you pick the right level of thrill." },
    ],
    metaTitle: "Performance Car Hire Birmingham | RS3, Golf R & More | CVS Car Hire",
    metaDescription:
      "Self-drive performance car hire in Birmingham. Engaging, everyday-usable performance from CVS Car Hire. Nationwide delivery available. Check availability.",
  },
  {
    slug: "luxury-4x4-hire",
    name: "Luxury 4x4 Hire",
    navLabel: "Luxury 4x4 Hire",
    category: "luxury-4x4",
    hero: {
      eyebrow: "Self-Drive & Chauffeur",
      heading: "Luxury 4x4 Hire",
      intro:
        "Commanding presence and effortless comfort — from Rolls-Royce Cullinan to Mercedes-AMG G 63.",
    },
    overview:
      "The luxury 4x4 has become the vehicle of choice for those who want presence, space and refinement in one. Our collection spans the very best — imposing, beautifully finished and equally suited to a wedding, a business trip or a weekend away. Whatever the plan, a luxury 4x4 makes the arrival unforgettable.",
    benefits: [
      "Icons including the Cullinan, G 63 and Range Rover",
      "Space and comfort for the whole party",
      "Self-drive or chauffeur-driven",
      "A firm favourite for weddings and productions",
      "Nationwide delivery, subject to availability",
    ],
    occasions: ["Weddings", "Productions & music videos", "Family occasions", "Corporate"],
    faqs: [
      { question: "Which luxury 4x4 has the most presence?", answer: "The Rolls-Royce Cullinan and Mercedes-AMG G 63 are both showstoppers. We'll help you choose based on your occasion and style." },
    ],
    metaTitle: "Luxury 4x4 Hire Birmingham | Cullinan, G-Wagon & More | CVS Car Hire",
    metaDescription:
      "Luxury 4x4 hire in Birmingham. Rolls-Royce Cullinan, Mercedes G63, Range Rover and more. Self-drive and chauffeur options. Check availability.",
  },
  {
    slug: "chauffeur-hire",
    name: "Chauffeur Hire",
    navLabel: "Chauffeur Hire",
    category: "chauffeur",
    hero: {
      eyebrow: "Chauffeur-Driven",
      heading: "Chauffeur Hire",
      intro:
        "Arrive composed. A professional at the wheel, the moment entirely yours.",
    },
    overview:
      "Sometimes the greatest luxury is simply to be driven. Our chauffeur service pairs the right vehicle with a professional driver, so you can relax, work or simply enjoy the occasion. From weddings and corporate travel to airport transfers and special events, we take care of the journey so you can focus on the destination.",
    benefits: [
      "Professional, discreet chauffeurs",
      "A luxury or prestige vehicle to match the occasion",
      "Ideal for weddings, business and events",
      "Punctual, composed and stress-free",
      "Tailored to your itinerary",
    ],
    occasions: ["Weddings", "Corporate travel", "Airport transfers", "Special events"],
    faqs: [
      { question: "Can I choose the chauffeur vehicle?", answer: "Yes — tell us the occasion and party size and we'll recommend the right vehicle, or arrange the specific car you have in mind, subject to availability." },
    ],
    metaTitle: "Chauffeur Hire Birmingham | Wedding & Executive Chauffeur | CVS Car Hire",
    metaDescription:
      "Professional chauffeur hire in Birmingham for weddings, business and events. Luxury and prestige vehicles with a driver. Check availability with CVS Car Hire.",
  },
  {
    slug: "wedding-car-hire",
    name: "Wedding Car Hire",
    navLabel: "Wedding Car Hire",
    hero: {
      eyebrow: "Self-Drive & Chauffeur",
      heading: "Wedding Car Hire",
      intro:
        "The car that carries you into the next chapter — timeless, photographed to perfection.",
    },
    overview:
      "Your wedding car is part of the story — the entrance, the photographs, the moment you arrive. We help couples across Birmingham and the UK choose a car that reflects their day, from the timeless elegance of a Rolls-Royce to the bold presence of a super-SUV. Chauffeur-driven for peace of mind, or self-driven if you prefer, every detail handled with care.",
    benefits: [
      "Timeless and contemporary options to suit any style",
      "Chauffeur-driven for a relaxed, seamless day",
      "Immaculate presentation for the photographs",
      "Coordination around your schedule and venue",
      "Available across Birmingham and nationwide",
    ],
    occasions: ["Ceremonies", "Receptions", "Wedding photography", "Bridal party travel"],
    recommendedVehicles: ["rolls-royce-ghost-hire", "rolls-royce-cullinan-hire", "mercedes-amg-g63-hire", "mercedes-v-class-hire"],
    faqs: [
      { question: "How far in advance should we book a wedding car?", answer: "As early as possible — popular vehicles and summer dates book up quickly. Get in touch to check availability for your date." },
      { question: "Can you provide cars for the whole wedding party?", answer: "Yes. Alongside the main wedding car, options such as the Mercedes V-Class carry the party in comfort. Tell us your numbers and we'll advise." },
    ],
    metaTitle: "Wedding Car Hire Birmingham | Rolls-Royce & Luxury Wedding Cars | CVS",
    metaDescription:
      "Wedding car hire in Birmingham. Rolls-Royce, luxury 4x4s and chauffeur-driven options for your day. Nationwide availability. Check your date with CVS Car Hire.",
  },
  {
    slug: "prom-car-hire",
    name: "Prom Car Hire",
    navLabel: "Prom Car Hire",
    hero: {
      eyebrow: "Chauffeur-Driven",
      heading: "Prom Car Hire",
      intro:
        "Make the entrance everyone remembers — the standout arrival of the night.",
    },
    overview:
      "Prom is a milestone, and the arrival sets the tone. We help students and parents across Birmingham arrange a standout car for the big night — from head-turning supercars to commanding luxury 4x4s — with a chauffeur for a safe, stress-free evening. A photograph they'll keep forever.",
    benefits: [
      "Show-stopping supercars and luxury 4x4s",
      "Chauffeur-driven for safety and peace of mind",
      "The arrival everyone remembers",
      "Perfect for photographs",
      "Coordinated around the school's schedule",
    ],
    occasions: ["School proms", "Leavers' events", "Celebrations"],
    faqs: [
      { question: "Is a chauffeur included for prom hire?", answer: "Prom hire is typically chauffeur-driven for safety and simplicity. We'll confirm the arrangements when you enquire." },
    ],
    metaTitle: "Prom Car Hire Birmingham | Supercars & Luxury Prom Cars | CVS Car Hire",
    metaDescription:
      "Prom car hire in Birmingham. Head-turning supercars and luxury 4x4s, chauffeur-driven for a safe, unforgettable night. Check availability with CVS Car Hire.",
  },
  {
    slug: "corporate-car-hire",
    name: "Corporate Car Hire",
    navLabel: "Corporate Hire",
    hero: {
      eyebrow: "Self-Drive & Chauffeur",
      heading: "Corporate & Business Hire",
      intro:
        "Composed, professional travel that reflects your business — self-drive or chauffeur-driven.",
    },
    overview:
      "The right vehicle says something before the meeting begins. Our corporate service provides refined, dependable travel for executives, clients and teams — whether that's a prestige saloon for a day of meetings, an SUV for a site visit, or a chauffeur-driven arrival for an important guest. Reliable, discreet and always appropriate.",
    benefits: [
      "Prestige saloons, SUVs and group vehicles",
      "Self-drive or professional chauffeur",
      "Ideal for client travel and executive use",
      "Punctual and discreet",
      "Long-term and repeat arrangements available",
    ],
    occasions: ["Client meetings", "Executive travel", "Corporate events", "Site visits"],
    faqs: [
      { question: "Do you offer accounts for regular business hire?", answer: "We support long-term and repeat business arrangements. Speak to our team about setting up regular hire for your company." },
    ],
    metaTitle: "Corporate Car Hire Birmingham | Executive & Business Travel | CVS Car Hire",
    metaDescription:
      "Corporate and business car hire in Birmingham. Prestige vehicles for executive travel, self-drive or chauffeur. Long-term options. Check availability.",
  },
  {
    slug: "airport-transfer",
    name: "Airport Transfer",
    navLabel: "Airport Transfers",
    hero: {
      eyebrow: "Chauffeur-Driven",
      heading: "Airport Transfers",
      intro:
        "Begin and end your journey in comfort — punctual, private and composed.",
    },
    overview:
      "Travel should start and finish calmly. Our chauffeur-driven airport transfers take the stress out of the journey to and from the terminal, in a vehicle to match the occasion — a refined saloon for a solo trip, or a spacious V-Class for the family and luggage. Punctual, private and comfortable, every time.",
    benefits: [
      "Punctual, private chauffeur transfers",
      "Executive saloons and spacious group vehicles",
      "Comfortable travel with luggage",
      "Ideal for business and family travel",
      "Serving Birmingham Airport and beyond",
    ],
    occasions: ["Business travel", "Family holidays", "Group airport travel"],
    recommendedVehicles: ["mercedes-e-class-hire", "mercedes-v-class-hire", "range-rover-sport-hire", "bmw-x5-hire"],
    faqs: [
      { question: "Which airports do you cover?", answer: "We regularly serve Birmingham Airport and can arrange transfers to other UK airports on request. Tell us your route and we'll confirm." },
    ],
    metaTitle: "Airport Transfer Birmingham | Chauffeur Airport Transfers | CVS Car Hire",
    metaDescription:
      "Chauffeur-driven airport transfers in Birmingham. Executive and group vehicles, punctual and private. Serving Birmingham Airport and beyond. Check availability.",
  },
  {
    slug: "production-car-hire",
    name: "Production & Music Video Car Hire",
    navLabel: "Production Hire",
    hero: {
      eyebrow: "Content & Events",
      heading: "Production & Music Video Hire",
      intro:
        "Vehicles that command the frame — for music videos, content and events.",
    },
    overview:
      "The right car can define a shoot. Our fleet is a regular fixture in music videos, brand content and events, bringing genuine presence to the screen. We work with artists, directors and production teams to supply the right vehicles, prepared and presented to the standard the camera demands.",
    benefits: [
      "Standout vehicles with genuine on-screen presence",
      "A broad range of makes, models and colours",
      "Experience supporting music videos and content",
      "Immaculate, camera-ready presentation",
      "Flexible arrangements for production schedules",
    ],
    occasions: ["Music videos", "Brand content", "Editorial & photography", "Events & launches"],
    faqs: [
      { question: "Can you supply multiple vehicles for a shoot?", answer: "Yes — with a fleet of over 50 vehicles we can supply several cars for a production. Share your brief and we'll put options together." },
    ],
    metaTitle: "Music Video & Production Car Hire Birmingham | CVS Car Hire",
    metaDescription:
      "Music video and production car hire in Birmingham. Standout luxury and supercars for content, shoots and events. Check availability with CVS Car Hire.",
  },
  {
    slug: "long-term-hire",
    name: "Long-Term Vehicle Hire",
    navLabel: "Long-Term Hire",
    hero: {
      eyebrow: "Flexible Terms",
      heading: "Long-Term Vehicle Hire",
      intro:
        "The right car for weeks or months — flexible, premium and hassle-free.",
    },
    overview:
      "Sometimes you need a premium vehicle for longer than a weekend. Our long-term hire offers a flexible alternative for extended trips, business needs or while you decide on a purchase — a quality car, on your terms, without the commitment of ownership. Tell us your timescale and requirements and we'll tailor an arrangement.",
    benefits: [
      "Flexible terms for weeks or months",
      "Premium and prestige vehicles",
      "Ideal for business and extended needs",
      "A quality alternative to ownership",
      "Tailored to your timescale",
    ],
    occasions: ["Extended business use", "Relocations", "Interim vehicles"],
    faqs: [
      { question: "How long can I hire a vehicle for?", answer: "We offer flexible long-term arrangements spanning weeks or months. Speak to our team about your requirements and we'll tailor the terms." },
    ],
    metaTitle: "Long-Term Car Hire Birmingham | Flexible Premium Vehicle Hire | CVS",
    metaDescription:
      "Long-term and business vehicle hire in Birmingham. Flexible premium car hire for weeks or months. Tailored terms. Check availability with CVS Car Hire.",
  },
  {
    slug: "nationwide-delivery",
    name: "Nationwide Luxury Car Delivery",
    navLabel: "Nationwide Delivery",
    hero: {
      eyebrow: "UK-Wide",
      heading: "Nationwide Luxury Car Delivery",
      intro:
        "Your chosen car, delivered to you — across the UK, subject to vehicle and location.",
    },
    overview:
      "Distance need not stand between you and the right car. We offer nationwide UK delivery on many of our vehicles, bringing your chosen car to your door, hotel or venue — subject to the vehicle and the location. Wherever you are, we make luxury hire simple.",
    benefits: [
      "Delivery across the UK, subject to availability",
      "Your car brought to home, hotel or venue",
      "Ideal for weddings, events and business",
      "Seamless collection at the end of your hire",
      "One point of contact throughout",
    ],
    occasions: ["Destination weddings", "Events", "Business travel", "Weekend escapes"],
    faqs: [
      { question: "Where do you deliver?", answer: "We offer nationwide UK delivery on many vehicles, subject to the car and the location. Contact us with your address and dates and we'll confirm availability and arrangements." },
    ],
    metaTitle: "Nationwide Luxury Car Delivery UK | CVS Car Hire Birmingham",
    metaDescription:
      "Nationwide luxury car delivery across the UK from CVS Car Hire, Birmingham. Your chosen vehicle delivered to your door, subject to availability. Check now.",
  },
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}
