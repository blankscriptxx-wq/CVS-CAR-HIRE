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
    slug: "short-term-supercar-hire",
    name: "Short-Term Supercar Hire",
    navLabel: "Short-Term Supercar Hire",
    category: "supercar",
    hero: {
      eyebrow: "Flexible Self-Drive",
      heading: "Short-Term Supercar Hire",
      intro:
        "A supercar for a day, a weekend or a week — flexible self-drive hire for birthdays, celebrations, road trips and the drive you have always promised yourself.",
    },
    overview:
      "Short-term supercar hire is the fastest way to get behind the wheel of a genuine icon. Whether you want a Ferrari for a landmark birthday, a Lamborghini for a weekend away, or an Audi R8 for a driving day, we make it simple to hire a supercar for exactly as long as you need — a single day, a Friday-to-Monday weekend, or a full week. Every car is prepared to the highest standard and priced on clear published daily, weekend and weekly rates, so you know where you stand before you book. Collect from us in Birmingham or arrange nationwide delivery, and our team stays on hand from your first enquiry to the moment the keys come back.",
    benefits: [
      "Hire by the day, the weekend or the week",
      "A curated collection of genuine supercar icons",
      "Clear published daily, weekend and weekly rates",
      "Ideal for birthdays, celebrations, road trips and content",
      "Collection in Birmingham or nationwide delivery, subject to availability",
      "Direct, human support from enquiry to return",
    ],
    occasions: ["Landmark birthdays", "Weekend escapes", "Driving days", "Photoshoots & content", "Special occasions"],
    recommendedVehicles: [
      "ferrari-roma-hire",
      "lamborghini-huracan-performante-spyder-hire",
      "audi-r8-spyder-hire",
      "lamborghini-urus-performante-hire",
    ],
    process: [
      { title: "Choose your car & dates", body: "Tell us the supercar you have in mind and whether you need it for a day, a weekend or a week — or let us recommend one." },
      { title: "We confirm availability & rate", body: "We check the fleet and confirm the rate, mileage and everything you need to know before you commit." },
      { title: "Collection or delivery", body: "Collect from us in Birmingham, or arrange delivery to your chosen location where available." },
      { title: "Enjoy the drive", body: "We hand over a beautifully prepared car and stay on hand throughout your short-term hire." },
    ],
    faqs: [
      { question: "Can I hire a supercar for just one day?", answer: "Yes — supercars are available for a single day, a weekend or a week. Tell us your dates and the car you want and we'll confirm availability and the rate." },
      { question: "How much does it cost to hire a supercar for a weekend?", answer: "Weekend hire uses our published weekend (3-day) rate, which varies by vehicle. Use our instant quote tool or contact us with your dates and we'll confirm the price for your chosen car." },
      { question: "What do I need to hire a supercar short-term?", answer: "Requirements such as minimum age, driving licence and deposit vary by vehicle. Start a conversation with our team and we'll talk you through exactly what's needed for the car you'd like." },
      { question: "Can I have a supercar delivered for the weekend?", answer: "Yes — nationwide UK delivery is available on many vehicles, subject to the car and the location. Contact us with your address and dates and we'll confirm." },
      { question: "Can I hire a supercar for a week?", answer: "Yes — as well as daily and weekend hire, we offer weekly rates that work out better value for a longer stay. Tell us the car and your dates and we'll confirm the weekly price." },
      { question: "Is weekend supercar hire available near me?", answer: "We're based in Birmingham and cover the West Midlands directly, with nationwide UK delivery for weekend hire. Tell us where you are and we'll confirm we can reach you." },
    ],
    metaTitle: "Short-Term Supercar Hire | Daily & Weekend Ferrari & Lamborghini Hire | CVS Car Hire",
    metaDescription:
      "Short-term supercar hire in Birmingham and across the UK — hire a Ferrari, Lamborghini or Audi R8 for a day, a weekend or a week. Clear rates, nationwide delivery. Check availability.",
  },
  {
    slug: "long-term-supercar-hire",
    name: "Long-Term Supercar Hire",
    navLabel: "Long-Term Supercar Hire",
    category: "supercar",
    hero: {
      eyebrow: "Extended Self-Drive",
      heading: "Long-Term Supercar Hire",
      intro:
        "A Ferrari, Lamborghini or Audi R8 for weeks or months at a time — the experience of ownership, without the deposit, the depreciation or a long finance commitment.",
    },
    overview:
      "Long-term supercar hire gives you a genuine supercar for an extended period — a month, a season, or longer — on a single, straightforward rate. Think of it as a flexible alternative to a lease or contract hire, or a supercar subscription: monthly luxury car rental without the deposit against a purchase, the depreciation to absorb or the resale to worry about. It suits anyone who wants the car without the ownership: a relocation or extended stay in Birmingham or beyond, a film or content project, a run of business travel, or simply the chance to live with a supercar before deciding whether to buy. We tailor every extended hire around you: the right car (or a rotation of cars), the duration and the mileage that fits your plans, with delivery across Birmingham and the UK. Weekly and monthly rates apply, and our team is your single point of contact throughout.",
    benefits: [
      "Weekly and monthly rates for genuine supercars",
      "A flexible alternative to leasing or contract hire — no long finance agreement",
      "The supercar experience without ownership, depreciation or resale",
      "One car for a season or a project — or rotate between models",
      "Flexible durations and mileage, arranged around your plans",
      "Delivery across Birmingham and the UK, subject to availability",
      "A single, dedicated point of contact from enquiry to return",
    ],
    occasions: ["Extended stays & relocations", "Film & content projects", "Business travel", "Try before you buy", "Seasonal driving"],
    recommendedVehicles: [
      "lamborghini-urus-performante-hire",
      "lamborghini-huracan-performante-spyder-hire",
      "audi-r8-spyder-hire",
      "ferrari-roma-hire",
    ],
    process: [
      { title: "Tell us your plans", body: "Share how long you need the car, the model you have in mind and roughly how many miles you'll cover." },
      { title: "We tailor the terms", body: "We confirm the weekly or monthly rate, mileage and everything else before you commit — no long finance contract." },
      { title: "Delivery or collection", body: "Take delivery at your chosen location, or collect from us in Birmingham." },
      { title: "Drive, with support", body: "Enjoy the car for the full term, with our team on hand throughout and a simple return at the end." },
    ],
    faqs: [
      { question: "Can I hire a supercar long-term in the UK?", answer: "Yes — we offer extended, long-term supercar hire by the week or month, tailored around your duration and mileage. Tell us your plans and we'll put together the right arrangement." },
      { question: "How much does long-term supercar hire cost?", answer: "Long-term hire uses our weekly and monthly rates, which vary by vehicle. Some models have published monthly rates; others are quoted on enquiry. Contact us with the car and duration and we'll confirm the price." },
      { question: "Is long-term supercar hire an alternative to leasing or buying?", answer: "For many people, yes. You get the car without a deposit against a purchase, without depreciation and without a long finance contract — you pay one rate for the period you need. Talk to us about what suits your situation." },
      { question: "Do you offer a supercar subscription or monthly rental?", answer: "Yes — our monthly rate works like a supercar subscription: one all-in price for the month, with the flexibility to extend or switch cars. It's ideal if you want a supercar for a season without a lease or contract hire commitment." },
      { question: "Can I arrange long-term car hire in Birmingham?", answer: "Yes — we're based in Birmingham and arrange long-term and monthly supercar hire locally and across the UK, with delivery available. Tell us your dates and mileage and we'll tailor the arrangement." },
      { question: "What is the longest I can hire a supercar for?", answer: "Extended hires of several weeks or months are arranged individually. Share your intended dates and we'll confirm availability for that period." },
      { question: "Do you deliver long-term hire cars?", answer: "Yes — nationwide UK delivery and collection are available on many vehicles, subject to the car and location. We'll confirm for your area when you enquire." },
    ],
    metaTitle: "Long-Term Supercar Hire | Monthly Ferrari & Lamborghini Hire UK | CVS Car Hire",
    metaDescription:
      "Long-term supercar hire in Birmingham and across the UK — Ferrari, Lamborghini and more by the week or month. The supercar experience without ownership or depreciation. Check availability.",
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
      "Luxury is in the detail: the way a car looks as it pulls up, the hush of the cabin, the sense of occasion it creates. Our luxury car hire spans the finest names in motoring — Rolls-Royce, Lamborghini, Ferrari, Mercedes-AMG, Range Rover, Audi and BMW — chosen for their presence and refinement. Whether you want luxury car rental for a day, a weekend or longer, self-drive or chauffeur-driven, we help you find the car that fits the occasion perfectly and take care of everything around the hire so you can simply enjoy it.",
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
      { question: "Is there luxury car hire near me?", answer: "We're based in Birmingham and cover the West Midlands directly, with nationwide UK delivery from London and Manchester to Leeds, Bristol and beyond. Tell us where you are and we'll confirm we can reach you." },
      { question: "How much is luxury car hire?", answer: "It depends on the car — from performance models and prestige SUVs to supercars — with clear daily, weekend, weekly and monthly rates. Message us your dates and chosen vehicle and we'll confirm the exact price." },
    ],
    metaTitle: "Luxury Car Hire Birmingham | Prestige & Supercar Rental | CVS Car Hire",
    metaDescription:
      "Luxury car hire in Birmingham and across the UK. Self-drive and chauffeur luxury car rental from a fleet of 50+ prestige, supercar and performance vehicles. Check availability.",
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
    name: "Luxury SUV & 4x4 Hire",
    navLabel: "Luxury 4x4 Hire",
    category: "luxury-4x4",
    hero: {
      eyebrow: "Self-Drive & Chauffeur",
      heading: "Luxury SUV & 4x4 Hire",
      intro:
        "Commanding presence and effortless comfort — from the Rolls-Royce Cullinan and Mercedes-AMG G 63 to the Range Rover and Lamborghini Urus.",
    },
    overview:
      "SUV hire has become the first choice for anyone who wants presence, space and refinement in one car. Our luxury SUV and 4x4 collection spans the very best — the Rolls-Royce Cullinan, Mercedes-AMG G63 (G-Wagon), the full Range Rover line-up, the Lamborghini Urus Performante and the BMW X5 — imposing, beautifully finished and equally suited to a wedding, a business trip, a family occasion or a weekend away. Whether you want to hire an SUV for the day, the weekend or longer, self-drive or chauffeur-driven, a luxury 4x4 makes the arrival unforgettable.",
    benefits: [
      "Icons including the Cullinan, G63 G-Wagon, Range Rover and Urus",
      "Space and comfort for the whole party",
      "Self-drive or chauffeur-driven",
      "Hire by the day, weekend, week or month",
      "A firm favourite for weddings and productions",
      "Nationwide delivery, subject to availability",
    ],
    occasions: ["Weddings", "Productions & music videos", "Family occasions", "Corporate", "Weekend escapes"],
    faqs: [
      { question: "Which luxury SUV has the most presence?", answer: "The Rolls-Royce Cullinan and Mercedes-AMG G63 (G-Wagon) are both showstoppers, while the Lamborghini Urus adds supercar pace. We'll help you choose the right 4x4 for your occasion and style." },
      { question: "Can I hire an SUV or 4x4 near me?", answer: "We're based in Birmingham and cover the West Midlands directly, with nationwide UK delivery on many vehicles. Tell us your location and dates and we'll confirm we can reach you." },
      { question: "How much does luxury SUV hire cost?", answer: "It depends on the vehicle — the G63 (G-Wagon) starts from £700 per day, with Range Rover, Urus and Cullinan quoted on enquiry, and weekend, weekly and monthly rates available. Message us your dates for an exact price." },
    ],
    metaTitle: "Luxury SUV & 4x4 Hire Birmingham | Cullinan, G-Wagon, Range Rover | CVS",
    metaDescription:
      "Luxury SUV and 4x4 hire in Birmingham and nationwide. Rolls-Royce Cullinan, Mercedes G63 G-Wagon, Range Rover, Lamborghini Urus and more, self-drive or chauffeur. Check availability.",
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
    name: "Executive & Corporate Car Hire",
    navLabel: "Corporate Hire",
    hero: {
      eyebrow: "Self-Drive & Chauffeur",
      heading: "Executive & Corporate Car Hire",
      intro:
        "Composed, professional travel that reflects your business — self-drive or chauffeur-driven.",
    },
    overview:
      "The right vehicle says something before the meeting begins. Our executive car hire provides refined, dependable travel for executives, clients and teams across Birmingham and the UK — whether that's a prestige saloon for a day of meetings, an SUV for a site visit, or a chauffeur-driven arrival for an important guest. Reliable, discreet and always appropriate, with self-drive and chauffeur options and flexible terms from a single day to long-term corporate accounts.",
    benefits: [
      "Executive saloons, prestige SUVs and group vehicles",
      "Self-drive or professional chauffeur",
      "Ideal for client travel and executive use",
      "Punctual and discreet",
      "Long-term, monthly and repeat business arrangements available",
    ],
    occasions: ["Client meetings", "Executive travel", "Corporate events", "Site visits"],
    faqs: [
      { question: "Do you offer accounts for regular business hire?", answer: "We support long-term, monthly and repeat business arrangements. Speak to our team about setting up regular executive hire for your company." },
      { question: "Is there executive car hire near me?", answer: "We're based in Birmingham and serve the West Midlands directly, with nationwide UK delivery available for corporate clients. Tell us your location and requirements and we'll confirm." },
    ],
    metaTitle: "Executive Car Hire Birmingham | Corporate & Business Travel | CVS Car Hire",
    metaDescription:
      "Executive and corporate car hire in Birmingham and nationwide. Prestige vehicles for executive travel, self-drive or chauffeur, with long-term and monthly business options. Check availability.",
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
      "Sometimes you need a premium vehicle for longer than a weekend. Our long-term car hire in Birmingham offers a flexible alternative for extended trips, business needs or while you decide on a purchase — a quality car on your terms, without the commitment of ownership, leasing or contract hire. Whether you want monthly car rental for a few weeks, a longer arrangement, or a rolling monthly subscription, tell us your timescale and requirements and we'll tailor it around you, with delivery across Birmingham and the UK.",
    benefits: [
      "Flexible terms for weeks or months — no long finance agreement",
      "Monthly car rental and rolling subscription options",
      "Premium, prestige and performance vehicles",
      "Ideal for business, relocations and extended needs",
      "A quality alternative to leasing or ownership",
      "Tailored to your timescale, with UK delivery available",
    ],
    occasions: ["Extended business use", "Relocations", "Interim vehicles"],
    faqs: [
      { question: "How long can I hire a vehicle for?", answer: "We offer flexible long-term arrangements spanning weeks or months. Speak to our team about your requirements and we'll tailor the terms." },
      { question: "Do you offer monthly car rental or a subscription?", answer: "Yes — our monthly rate works as a rolling car subscription, one price per month with the flexibility to extend, ideal as an alternative to leasing or contract hire. Tell us the vehicle and duration and we'll confirm the rate." },
      { question: "Is long-term car hire available near me in Birmingham?", answer: "Yes — we're based in Birmingham and arrange long-term and monthly hire locally and nationwide, with delivery available. Tell us your location and dates and we'll confirm." },
    ],
    metaTitle: "Long-Term Car Hire Birmingham | Monthly Rental & Subscription | CVS",
    metaDescription:
      "Long-term car hire in Birmingham — flexible monthly car rental and subscription for premium vehicles, a simple alternative to leasing or contract hire. UK delivery. Check availability.",
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
