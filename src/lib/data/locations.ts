import type { LocationContent } from "@/lib/types";

/**
 * Location pages. Each is genuinely differentiated (local context, venues,
 * airports, motorways) — NOT thin doorway pages. Delivery claims are kept
 * accurate: "nationwide UK delivery, subject to vehicle and location".
 * Seeded with key cities; the template scales to any UK location.
 */
export const locations: LocationContent[] = [
  {
    slug: "birmingham",
    city: "Birmingham",
    region: "West Midlands",
    nation: "England",
    intro:
      "Birmingham is home. As a Birmingham-based hire company established in 2014, CVS Car Hire knows the city intimately — from the Jewellery Quarter to Edgbaston, Solihull to the city centre. Our fleet of over 50 luxury, prestige and performance vehicles is ready for collection locally, with delivery across the West Midlands.",
    serving:
      "Whether you need a supercar for a landmark celebration, a Rolls-Royce for a wedding at a Warwickshire venue, or a chauffeur-driven arrival for a business event at the ICC, we're on your doorstep. Local collection is straightforward, and delivery across Birmingham and the wider West Midlands is quick and simple.",
    delivery:
      "Local collection from our Birmingham base, with delivery across the city and West Midlands. Nationwide UK delivery is also available, subject to vehicle and location.",
    motorways: ["M6", "M5", "M42", "M40", "M6 Toll"],
    airports: ["Birmingham Airport (BHX)"],
    weddingVenues: ["The ICC", "Edgbaston Park Hotel", "Aston Hall", "Hogarths Hotel"],
    businessDistricts: ["Colmore Row", "Brindleyplace", "Snow Hill", "Jewellery Quarter"],
    landmarks: ["Bullring & Grand Central", "Library of Birmingham", "Cadbury World", "Edgbaston Cricket Ground"],
    occasions: ["Weddings", "Proms", "Corporate events", "Music videos", "Airport transfers"],
    recommendedVehicles: ["lamborghini-urus-performante-hire", "rolls-royce-cullinan-hire", "mercedes-amg-g63-hire", "ferrari-roma-hire"],
    nearbyLocations: ["coventry", "wolverhampton", "leicester"],
    faqs: [
      { question: "Do you deliver luxury cars across Birmingham?", answer: "Yes — as a Birmingham-based company we offer local collection and delivery across the city and West Midlands, with nationwide delivery available subject to vehicle and location." },
      { question: "Can I hire a car for a wedding in Birmingham?", answer: "Absolutely. We regularly supply wedding cars for Birmingham and Warwickshire venues, self-drive or chauffeur-driven. Get in touch with your date and venue to check availability." },
    ],
    metaTitle: "Luxury Car Hire Birmingham | Supercar & Prestige Hire | CVS Car Hire",
    metaDescription:
      "Luxury, supercar and prestige car hire in Birmingham. Established 2014, 50+ vehicles, self-drive and chauffeur. Local delivery across the West Midlands. Check availability.",
    geo: { lat: 52.4862, lng: -1.8904 },
  },
  {
    slug: "london",
    city: "London",
    region: "Greater London",
    nation: "England",
    intro:
      "The capital sets the standard, and CVS Car Hire meets it. We bring our collection of supercars, luxury 4x4s and prestige vehicles to London through our nationwide delivery service — your chosen car delivered to your home, hotel or venue, subject to availability.",
    serving:
      "From a Lamborghini for a Mayfair weekend to a Rolls-Royce for a wedding in the City, or a chauffeur-driven arrival for a premiere or corporate event, we make luxury hire in London effortless. Tell us the occasion and the location and we'll confirm delivery.",
    delivery:
      "London is served through our nationwide delivery service — your vehicle delivered to your chosen London address, subject to vehicle and location. Collection is arranged to suit you.",
    motorways: ["M25", "M4", "M1", "M40"],
    airports: ["Heathrow (LHR)", "Gatwick (LGW)", "London City (LCY)", "Luton (LTN)"],
    weddingVenues: ["Mayfair hotels", "The City", "Kensington & Chelsea venues"],
    businessDistricts: ["Mayfair", "The City", "Canary Wharf", "Knightsbridge"],
    landmarks: ["The West End", "Hyde Park", "The Shard", "Harrods"],
    occasions: ["Weddings", "Corporate & premieres", "Music videos", "Weekend hire"],
    recommendedVehicles: ["ferrari-roma-hire", "lamborghini-urus-performante-hire", "rolls-royce-cullinan-hire", "mercedes-amg-g63-hire"],
    nearbyLocations: ["birmingham"],
    faqs: [
      { question: "Do you deliver luxury cars to London?", answer: "Yes. We deliver to London through our nationwide service — your chosen vehicle brought to your home, hotel or venue, subject to availability. Contact us with your address and dates." },
      { question: "Can I hire a supercar in London for the weekend?", answer: "Yes, many of our supercars are available for weekend hire in London via delivery. Get in touch to confirm the car and dates." },
    ],
    metaTitle: "Luxury Car Hire London | Supercar & Prestige Delivery | CVS Car Hire",
    metaDescription:
      "Luxury and supercar hire delivered across London. Ferrari, Lamborghini, Rolls-Royce and more, self-drive or chauffeur, subject to availability. Check availability.",
    geo: { lat: 51.5072, lng: -0.1276 },
  },
  {
    slug: "manchester",
    city: "Manchester",
    region: "Greater Manchester",
    nation: "England",
    intro:
      "Manchester moves fast, and its appetite for the exceptional is well earned. CVS Car Hire serves the city through nationwide delivery, bringing supercars, luxury 4x4s and prestige vehicles to Manchester for weddings, events, content and celebrations.",
    serving:
      "From a G-Wagon for a standout arrival to a Rolls-Royce for a wedding, or a supercar for a music video in the Northern Quarter, we deliver the right vehicle to your Manchester location — beautifully presented and ready to go.",
    delivery:
      "Manchester is served through our nationwide delivery service, subject to vehicle and location. Your car is delivered to your chosen address, with collection arranged around you.",
    motorways: ["M60", "M62", "M56", "M6"],
    airports: ["Manchester Airport (MAN)"],
    weddingVenues: ["City-centre hotels", "Cheshire venues", "Manchester suburbs"],
    businessDistricts: ["Spinningfields", "Deansgate", "MediaCityUK"],
    landmarks: ["Northern Quarter", "Old Trafford", "Etihad Stadium", "The Trafford Centre"],
    occasions: ["Weddings", "Music videos", "Corporate", "Celebrations"],
    recommendedVehicles: ["mercedes-amg-g63-hire", "lamborghini-huracan-performante-spyder-hire", "rolls-royce-cullinan-hire", "range-rover-svr-hire"],
    nearbyLocations: ["birmingham"],
    faqs: [
      { question: "Do you deliver luxury cars to Manchester?", answer: "Yes — Manchester is covered by our nationwide delivery service, subject to vehicle and location. Contact us with your dates and address to confirm." },
    ],
    metaTitle: "Luxury Car Hire Manchester | Supercar & Prestige Delivery | CVS Car Hire",
    metaDescription:
      "Luxury and supercar hire delivered to Manchester. Lamborghini, Mercedes G63, Rolls-Royce and more, self-drive or chauffeur. Subject to availability. Check now.",
    geo: { lat: 53.4808, lng: -2.2426 },
  },
  {
    slug: "coventry",
    city: "Coventry",
    region: "West Midlands",
    nation: "England",
    intro:
      "Right on our doorstep, Coventry is well served by CVS Car Hire. With our Birmingham base close by, local delivery and collection across Coventry and Warwickshire is quick and simple — for weddings, proms, business and celebrations.",
    serving:
      "A short hop from our base, Coventry benefits from easy local delivery. Whether it's a prom car that makes the night, a wedding car for a Warwickshire venue, or a prestige vehicle for business, we make it effortless.",
    delivery:
      "Local delivery and collection across Coventry and Warwickshire from our nearby Birmingham base. Nationwide delivery is also available, subject to vehicle and location.",
    motorways: ["M6", "M69", "M40", "M42"],
    airports: ["Birmingham Airport (BHX)", "Coventry Airport (CVT)"],
    weddingVenues: ["Warwickshire country venues", "Coombe Abbey", "City-centre hotels"],
    businessDistricts: ["Coventry city centre", "Ansty Park", "Friargate"],
    landmarks: ["Coventry Cathedral", "The Wave", "War Memorial Park"],
    occasions: ["Weddings", "Proms", "Corporate", "Celebrations"],
    recommendedVehicles: ["mercedes-amg-g63-hire", "range-rover-sport-hire", "audi-r8-spyder-hire", "rolls-royce-ghost-hire"],
    nearbyLocations: ["birmingham", "leicester", "wolverhampton"],
    faqs: [
      { question: "Do you deliver to Coventry?", answer: "Yes — Coventry is close to our Birmingham base, so local delivery and collection are quick and simple. Get in touch to check availability for your date." },
    ],
    metaTitle: "Luxury Car Hire Coventry | Supercar, Wedding & Prom | CVS Car Hire",
    metaDescription:
      "Luxury, wedding and prom car hire in Coventry & Warwickshire. Local delivery from our Birmingham base. Self-drive and chauffeur. Check availability with CVS Car Hire.",
    geo: { lat: 52.4068, lng: -1.5197 },
  },
  {
    slug: "leicester",
    city: "Leicester",
    region: "Leicestershire",
    nation: "England",
    intro:
      "Leicester is well within easy reach of our Birmingham base, and a regular destination for CVS Car Hire. From supercars for celebrations to wedding cars and prestige vehicles for business, we bring the fleet to Leicester and Leicestershire with ease.",
    serving:
      "A straightforward journey up the M69 and M1 corridor, Leicester enjoys quick delivery and collection. We're a popular choice for weddings, proms and standout celebrations across the county.",
    delivery:
      "Delivery and collection across Leicester and Leicestershire, with our Birmingham base close by. Nationwide delivery is available, subject to vehicle and location.",
    motorways: ["M1", "M69", "M6"],
    airports: ["Birmingham Airport (BHX)", "East Midlands Airport (EMA)"],
    weddingVenues: ["Leicestershire country venues", "City-centre hotels"],
    businessDistricts: ["Leicester city centre", "Meridian Business Park"],
    landmarks: ["King Power Stadium", "Highcross", "National Space Centre"],
    occasions: ["Weddings", "Proms", "Corporate", "Celebrations"],
    recommendedVehicles: ["lamborghini-urus-performante-hire", "mercedes-amg-g63-hire", "range-rover-sport-hire", "ferrari-roma-hire"],
    nearbyLocations: ["coventry", "nottingham", "birmingham"],
    faqs: [
      { question: "Do you deliver to Leicester?", answer: "Yes — Leicester is an easy journey from our Birmingham base, so delivery and collection are straightforward. Contact us to check availability." },
    ],
    metaTitle: "Luxury Car Hire Leicester | Supercar, Wedding & Prom | CVS Car Hire",
    metaDescription:
      "Luxury, wedding and prom car hire in Leicester & Leicestershire. Delivery from our Birmingham base. Self-drive and chauffeur. Check availability with CVS Car Hire.",
    geo: { lat: 52.6369, lng: -1.1398 },
  },
  {
    slug: "nottingham",
    city: "Nottingham",
    region: "Nottinghamshire",
    nation: "England",
    intro:
      "Nottingham's style and energy are a natural fit for our fleet. CVS Car Hire serves the city and Nottinghamshire with delivery of supercars, luxury 4x4s and prestige vehicles for weddings, events and celebrations.",
    serving:
      "An easy run from Birmingham via the M1, Nottingham benefits from smooth delivery and collection. We're a favourite for weddings, proms and celebrations that call for something special.",
    delivery:
      "Delivery and collection across Nottingham and Nottinghamshire. Nationwide delivery is available, subject to vehicle and location.",
    motorways: ["M1", "A52", "A453"],
    airports: ["East Midlands Airport (EMA)", "Birmingham Airport (BHX)"],
    weddingVenues: ["Nottinghamshire country houses", "City-centre hotels"],
    businessDistricts: ["Nottingham city centre", "NG2 Business Park"],
    landmarks: ["Nottingham Castle", "Trent Bridge", "The City Ground"],
    occasions: ["Weddings", "Proms", "Corporate", "Celebrations"],
    recommendedVehicles: ["mercedes-amg-g63-hire", "rolls-royce-cullinan-hire", "audi-r8-spyder-hire", "range-rover-svr-hire"],
    nearbyLocations: ["leicester", "birmingham"],
    faqs: [
      { question: "Do you deliver to Nottingham?", answer: "Yes — Nottingham is served by our delivery service, with an easy route from our Birmingham base. Get in touch to confirm availability." },
    ],
    metaTitle: "Luxury Car Hire Nottingham | Supercar, Wedding & Prom | CVS Car Hire",
    metaDescription:
      "Luxury, wedding and prom car hire in Nottingham & Nottinghamshire. Delivery from our Birmingham base. Self-drive and chauffeur. Check availability with CVS Car Hire.",
    geo: { lat: 52.9548, lng: -1.1581 },
  },
  {
    slug: "wolverhampton",
    city: "Wolverhampton",
    region: "West Midlands",
    nation: "England",
    intro:
      "Part of our home region, Wolverhampton is served directly by CVS Car Hire. With our Birmingham base nearby, local delivery and collection across Wolverhampton and the Black Country are quick and simple.",
    serving:
      "Close to home, Wolverhampton enjoys easy local delivery for weddings, proms, business and celebrations. Whatever the occasion, the right car is only a short journey away.",
    delivery:
      "Local delivery and collection across Wolverhampton and the Black Country from our nearby Birmingham base. Nationwide delivery is also available, subject to vehicle and location.",
    motorways: ["M6", "M54", "M6 Toll", "M5"],
    airports: ["Birmingham Airport (BHX)"],
    weddingVenues: ["Staffordshire country venues", "Local hotels"],
    businessDistricts: ["Wolverhampton city centre", "i54 business park"],
    landmarks: ["Molineux Stadium", "West Park", "Wightwick Manor"],
    occasions: ["Weddings", "Proms", "Corporate", "Celebrations"],
    recommendedVehicles: ["mercedes-amg-g63-hire", "range-rover-sport-hire", "lamborghini-urus-performante-hire", "rolls-royce-ghost-hire"],
    nearbyLocations: ["birmingham", "coventry"],
    faqs: [
      { question: "Do you deliver to Wolverhampton?", answer: "Yes — Wolverhampton is part of our home region, so local delivery and collection are quick and simple. Contact us to check your date." },
    ],
    metaTitle: "Luxury Car Hire Wolverhampton | Supercar, Wedding & Prom | CVS Car Hire",
    metaDescription:
      "Luxury, wedding and prom car hire in Wolverhampton & the Black Country. Local delivery from our Birmingham base. Self-drive and chauffeur. Check availability.",
    geo: { lat: 52.5862, lng: -2.1288 },
  },
];

export function getLocationBySlug(slug: string): LocationContent | undefined {
  return locations.find((l) => l.slug === slug);
}
