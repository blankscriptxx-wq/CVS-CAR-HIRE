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
      "Birmingham is home. For luxury car hire in Birmingham, CVS Car Hire is the city's specialist — a Birmingham-based car hire company established in 2014 that knows the city intimately, from the Jewellery Quarter to Edgbaston, Solihull to the city centre. Our fleet of over 50 luxury, prestige and performance vehicles is ready for collection locally, with delivery across the West Midlands.",
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
      { question: "Where can I find car hire in Birmingham?", answer: "CVS Car Hire is a Birmingham-based car hire company established in 2014, with local collection from our Birmingham base and delivery across the city and the West Midlands. We specialise in luxury, supercar, prestige and performance car hire, self-drive or chauffeur-driven." },
      { question: "Do you deliver cars across Birmingham?", answer: "Yes — as a Birmingham-based company we offer local collection and delivery across the city and West Midlands, with nationwide delivery available subject to vehicle and location." },
      { question: "Do you offer car hire near Birmingham Airport?", answer: "Yes — we can deliver to addresses near Birmingham Airport (BHX) and across the city, subject to vehicle and location. Tell us your pick-up point and dates and we'll confirm." },
      { question: "Are you a luxury or standard car hire company in Birmingham?", answer: "We're a luxury and prestige car hire specialist — supercars, luxury 4x4s, prestige saloons and performance cars — rather than standard economy rental. If you want a car with genuine presence for an occasion, a weekend or longer, we're the Birmingham team to call." },
      { question: "Can I hire a car for a wedding in Birmingham?", answer: "Absolutely. We regularly supply wedding cars for Birmingham and Warwickshire venues, self-drive or chauffeur-driven. Get in touch with your date and venue to check availability." },
    ],
    metaTitle: "Car Hire Birmingham | Luxury, Supercar & Prestige Hire | CVS Car Hire",
    metaDescription:
      "Car hire in Birmingham — luxury, supercar, prestige and performance car hire from CVS Car Hire. Established 2014, 50+ vehicles, self-drive or chauffeur, with local delivery across the West Midlands. Check availability.",
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
  {
    slug: "leeds",
    city: "Leeds",
    region: "West Yorkshire",
    nation: "England",
    intro:
      "Leeds is Yorkshire's commercial capital, and CVS Car Hire brings its collection of supercars, luxury 4x4s and prestige vehicles to the city through nationwide delivery — your chosen car delivered to your home, hotel or venue, subject to availability.",
    serving:
      "From a Lamborghini for a weekend in Roundhay to a Rolls-Royce for a wedding at Rudding Park, or a chauffeur-driven arrival at Wellington Place, we make luxury hire in Leeds effortless. Tell us the occasion and location and we'll confirm delivery.",
    delivery:
      "Leeds is served through our nationwide delivery service, subject to vehicle and location. Collection is arranged to suit you.",
    motorways: ["M1", "M62", "A1(M)"],
    airports: ["Leeds Bradford (LBA)"],
    weddingVenues: ["Rudding Park", "Oulton Hall", "Denton Hall"],
    businessDistricts: ["Wellington Place", "Park Square", "Leeds city centre"],
    landmarks: ["Leeds Corn Exchange", "Roundhay Park", "Trinity Leeds"],
    occasions: ["Weddings", "Proms", "Corporate events", "Celebrations"],
    recommendedVehicles: ["lamborghini-huracan-performante-spyder-hire", "rolls-royce-ghost-hire", "range-rover-sport-hire", "mercedes-amg-g63-hire"],
    nearbyLocations: ["manchester", "sheffield"],
    faqs: [
      { question: "Do you deliver luxury cars to Leeds?", answer: "Yes — Leeds is covered by our nationwide delivery service, subject to vehicle and location. Share your dates and address and we'll confirm." },
    ],
    metaTitle: "Luxury Car Hire Leeds | Supercar, Wedding & Prom | CVS Car Hire",
    metaDescription:
      "Luxury, supercar, wedding and prom car hire in Leeds. Nationwide delivery from CVS Car Hire, self-drive and chauffeur. Check availability.",
    geo: { lat: 53.8008, lng: -1.5491 },
  },
  {
    slug: "liverpool",
    city: "Liverpool",
    region: "Merseyside",
    nation: "England",
    intro:
      "Liverpool wears its style with confidence, and CVS Car Hire matches it. We bring supercars, luxury 4x4s and prestige vehicles to the city through our nationwide delivery service, delivered to your chosen address, subject to availability.",
    serving:
      "From a supercar for a waterfront weekend to a Rolls-Royce for a wedding at 30 James Street, or a chauffeur-driven arrival at the Royal Albert Dock, we make luxury hire in Liverpool simple. Tell us the occasion and we'll confirm delivery.",
    delivery:
      "Liverpool is served through our nationwide delivery service, subject to vehicle and location. Collection is arranged to suit you.",
    motorways: ["M62", "M57", "M58"],
    airports: ["Liverpool John Lennon (LPL)", "Manchester (MAN)"],
    weddingVenues: ["Titanic Hotel", "30 James Street", "Leverhulme Hotel"],
    businessDistricts: ["Liverpool Business District", "Royal Albert Dock", "Liverpool ONE"],
    landmarks: ["Royal Albert Dock", "Royal Liver Building", "Anfield", "Sefton Park"],
    occasions: ["Weddings", "Proms", "Corporate events", "Celebrations"],
    recommendedVehicles: ["ferrari-roma-hire", "rolls-royce-cullinan-hire", "lamborghini-urus-performante-hire", "audi-r8-spyder-hire"],
    nearbyLocations: ["manchester", "leeds"],
    faqs: [
      { question: "Do you deliver to Liverpool?", answer: "Yes — Liverpool is covered by our nationwide delivery service, subject to vehicle and location. Get in touch with your date and address to confirm." },
    ],
    metaTitle: "Luxury Car Hire Liverpool | Supercar, Wedding & Prom | CVS Car Hire",
    metaDescription:
      "Luxury, supercar, wedding and prom car hire in Liverpool. Nationwide delivery from CVS Car Hire, self-drive and chauffeur. Check availability.",
    geo: { lat: 53.4084, lng: -2.9916 },
  },
  {
    slug: "sheffield",
    city: "Sheffield",
    region: "South Yorkshire",
    nation: "England",
    intro:
      "On the edge of the Peak District, Sheffield pairs city life with some of England's finest driving roads — and CVS Car Hire brings the cars to match, delivered across the city through our nationwide service, subject to availability.",
    serving:
      "From a supercar for a Peak District drive to a Rolls-Royce for a wedding at Whitley Hall, or a chauffeur-driven arrival in the city centre, we make luxury hire in Sheffield straightforward. Tell us the occasion and we'll confirm delivery.",
    delivery:
      "Sheffield is served through our nationwide delivery service, subject to vehicle and location. Collection is arranged to suit you.",
    motorways: ["M1", "Sheffield Parkway", "A57 Snake Pass"],
    airports: ["East Midlands (EMA)", "Manchester (MAN)"],
    weddingVenues: ["Whitley Hall", "Kenwood Hall", "Tankersley Manor"],
    businessDistricts: ["Sheffield city centre", "Digital Campus"],
    landmarks: ["Peak District", "Winter Garden", "Bramall Lane", "Meadowhall"],
    occasions: ["Weddings", "Proms", "Driving experiences", "Celebrations"],
    recommendedVehicles: ["lamborghini-huracan-performante-spyder-hire", "audi-r8-spyder-hire", "range-rover-sport-hire", "rolls-royce-ghost-hire"],
    nearbyLocations: ["leeds", "nottingham"],
    faqs: [
      { question: "Can I hire a supercar to drive in the Peak District?", answer: "Yes — Sheffield sits right on the Peak District, a favourite for driving days. We deliver across the city, subject to vehicle and location. Get in touch to check availability." },
    ],
    metaTitle: "Luxury Car Hire Sheffield | Supercar, Wedding & Prom | CVS Car Hire",
    metaDescription:
      "Luxury, supercar, wedding and prom car hire in Sheffield & the Peak District. Nationwide delivery from CVS Car Hire. Check availability.",
    geo: { lat: 53.3811, lng: -1.4701 },
  },
  {
    slug: "bristol",
    city: "Bristol",
    region: "South West England",
    nation: "England",
    intro:
      "Bristol is the cultural heart of the South West, and CVS Car Hire brings its collection of supercars, luxury 4x4s and prestige vehicles to the city through nationwide delivery, to your chosen address, subject to availability.",
    serving:
      "From a supercar for a Clifton weekend to a Rolls-Royce for a wedding at Ashton Court, or a chauffeur-driven arrival at Temple Quay, we make luxury hire in Bristol effortless. Tell us the occasion and we'll confirm delivery.",
    delivery:
      "Bristol is served through our nationwide delivery service, subject to vehicle and location. Collection is arranged to suit you.",
    motorways: ["M4", "M5", "M32"],
    airports: ["Bristol Airport (BRS)"],
    weddingVenues: ["Ashton Court Estate", "Berkeley Square Hotel", "The Bristol Hotel"],
    businessDistricts: ["Temple Quay", "Bristol Harbourside", "Cabot Circus"],
    landmarks: ["Clifton Suspension Bridge", "Bristol Harbourside", "SS Great Britain"],
    occasions: ["Weddings", "Proms", "Corporate events", "Celebrations"],
    recommendedVehicles: ["ferrari-roma-hire", "lamborghini-urus-performante-hire", "rolls-royce-cullinan-hire", "mercedes-amg-g63-hire"],
    nearbyLocations: ["cardiff"],
    faqs: [
      { question: "Do you deliver luxury cars to Bristol?", answer: "Yes — Bristol is covered by our nationwide delivery service, subject to vehicle and location. Share your date and address and we'll confirm." },
    ],
    metaTitle: "Luxury Car Hire Bristol | Supercar, Wedding & Prom | CVS Car Hire",
    metaDescription:
      "Luxury, supercar, wedding and prom car hire in Bristol. Nationwide delivery from CVS Car Hire, self-drive and chauffeur. Check availability.",
    geo: { lat: 51.4545, lng: -2.5879 },
  },
  {
    slug: "newcastle",
    city: "Newcastle upon Tyne",
    region: "Tyne and Wear",
    nation: "England",
    intro:
      "Newcastle brings unmistakable energy to the North East, and CVS Car Hire brings the cars to match — supercars, luxury 4x4s and prestige vehicles delivered to the city through our nationwide service, subject to availability.",
    serving:
      "From a supercar for a Quayside weekend to a Rolls-Royce for a wedding at Jesmond Dene House, or a chauffeur-driven arrival in the city centre, we make luxury hire in Newcastle simple. Tell us the occasion and we'll confirm delivery.",
    delivery:
      "Newcastle is served through our nationwide delivery service, subject to vehicle and location. Collection is arranged to suit you.",
    motorways: ["A1(M)", "A19", "A167(M)"],
    airports: ["Newcastle International (NCL)"],
    weddingVenues: ["Jesmond Dene House", "Matfen Hall", "Newcastle Civic Centre"],
    businessDistricts: ["Quayside", "Newcastle city centre"],
    landmarks: ["Tyne Bridge", "Newcastle Quayside", "St James' Park", "Grey's Monument"],
    occasions: ["Weddings", "Proms", "Corporate events", "Celebrations"],
    recommendedVehicles: ["lamborghini-urus-performante-hire", "rolls-royce-ghost-hire", "mercedes-amg-g63-hire", "range-rover-sport-hire"],
    nearbyLocations: ["leeds"],
    faqs: [
      { question: "Do you deliver to Newcastle and the North East?", answer: "Yes — Newcastle is covered by our nationwide delivery service, subject to vehicle and location. Get in touch with your date and address to confirm." },
    ],
    metaTitle: "Luxury Car Hire Newcastle | Supercar, Wedding & Prom | CVS Car Hire",
    metaDescription:
      "Luxury, supercar, wedding and prom car hire in Newcastle upon Tyne. Nationwide delivery from CVS Car Hire. Check availability.",
    geo: { lat: 54.9783, lng: -1.6178 },
  },
  {
    slug: "cardiff",
    city: "Cardiff",
    region: "South Wales",
    nation: "Wales",
    intro:
      "Cardiff is the Welsh capital and a city built for occasions, and CVS Car Hire brings its collection of supercars, luxury 4x4s and prestige vehicles to it through nationwide delivery, to your chosen address, subject to availability.",
    serving:
      "From a supercar for a weekend in Pontcanna to a Rolls-Royce for a wedding at Cardiff Castle, or a chauffeur-driven arrival at Cardiff Bay, we make luxury hire in Cardiff effortless. Tell us the occasion and we'll confirm delivery.",
    delivery:
      "Cardiff is served through our nationwide delivery service, subject to vehicle and location. Collection is arranged to suit you.",
    motorways: ["M4", "A470", "A48(M)"],
    airports: ["Cardiff Airport (CWL)"],
    weddingVenues: ["Cardiff Castle", "Hensol Castle", "The Exchange Hotel"],
    businessDistricts: ["Cardiff Bay", "Callaghan Square", "Cardiff city centre"],
    landmarks: ["Principality Stadium", "Cardiff Castle", "Cardiff Bay", "Bute Park"],
    occasions: ["Weddings", "Proms", "Corporate events", "Celebrations"],
    recommendedVehicles: ["ferrari-roma-hire", "rolls-royce-cullinan-hire", "lamborghini-huracan-performante-spyder-hire", "mercedes-amg-g63-hire"],
    nearbyLocations: ["bristol"],
    faqs: [
      { question: "Do you deliver luxury cars to Cardiff and South Wales?", answer: "Yes — Cardiff is covered by our nationwide delivery service, subject to vehicle and location. Share your date and address and we'll confirm." },
    ],
    metaTitle: "Luxury Car Hire Cardiff | Supercar, Wedding & Prom | CVS Car Hire",
    metaDescription:
      "Luxury, supercar, wedding and prom car hire in Cardiff. Nationwide delivery from CVS Car Hire, self-drive and chauffeur. Check availability.",
    geo: { lat: 51.4816, lng: -3.1791 },
  },
  {
    slug: "derby",
    city: "Derby",
    region: "Derbyshire",
    nation: "England",
    intro:
      "Derby sits on the doorstep of the Peak District and within easy reach of our Birmingham base, so CVS Car Hire delivers its supercars, luxury 4x4s and prestige vehicles across the city quickly and easily, subject to availability.",
    serving:
      "From a supercar for a Peak District drive to a Rolls-Royce for a wedding at Morley Hayes, or a chauffeur-driven arrival at Pride Park, we make luxury hire in Derby straightforward. Tell us the occasion and we'll confirm delivery.",
    delivery:
      "Derby is within comfortable reach of our Birmingham base, with delivery across the city and nationwide delivery available, subject to vehicle and location.",
    motorways: ["A38", "A50", "M1"],
    airports: ["East Midlands (EMA)", "Birmingham (BHX)"],
    weddingVenues: ["Morley Hayes", "Donington Manor", "Kedleston Hall"],
    businessDistricts: ["Pride Park", "Derby city centre"],
    landmarks: ["Derby Cathedral", "Pride Park Stadium", "Peak District"],
    occasions: ["Weddings", "Proms", "Driving experiences", "Celebrations"],
    recommendedVehicles: ["lamborghini-urus-performante-hire", "range-rover-sport-hire", "audi-r8-spyder-hire", "rolls-royce-ghost-hire"],
    nearbyLocations: ["nottingham", "leicester"],
    faqs: [
      { question: "Do you deliver to Derby?", answer: "Yes — Derby is within easy reach of our Birmingham base, so delivery and collection are quick. Nationwide delivery is also available, subject to vehicle and location." },
    ],
    metaTitle: "Luxury Car Hire Derby | Supercar, Wedding & Prom | CVS Car Hire",
    metaDescription:
      "Luxury, supercar, wedding and prom car hire in Derby. Delivery from our Birmingham base, self-drive and chauffeur. Check availability.",
    geo: { lat: 52.9228, lng: -1.4767 },
  },
  {
    slug: "stoke-on-trent",
    city: "Stoke-on-Trent",
    region: "Staffordshire",
    nation: "England",
    intro:
      "Stoke-on-Trent sits on the M6 within easy reach of our Birmingham base, so CVS Car Hire delivers its supercars, luxury 4x4s and prestige vehicles across the city and Staffordshire quickly and easily, subject to availability.",
    serving:
      "From a supercar for a weekend to a Rolls-Royce for a wedding at Trentham Estate, or a chauffeur-driven arrival at Festival Park, we make luxury hire in Stoke-on-Trent simple. Tell us the occasion and we'll confirm delivery.",
    delivery:
      "Stoke-on-Trent is within comfortable reach of our Birmingham base via the M6, with delivery across the city and nationwide delivery available, subject to vehicle and location.",
    motorways: ["M6", "A50", "A500"],
    airports: ["Manchester (MAN)", "East Midlands (EMA)", "Birmingham (BHX)"],
    weddingVenues: ["Trentham Estate", "The Upper House", "The Ashes"],
    businessDistricts: ["Festival Park", "Stoke-on-Trent city centre"],
    landmarks: ["Trentham Gardens", "bet365 Stadium", "Emma Bridgewater Factory"],
    occasions: ["Weddings", "Proms", "Corporate", "Celebrations"],
    recommendedVehicles: ["mercedes-amg-g63-hire", "range-rover-sport-hire", "lamborghini-urus-performante-hire", "rolls-royce-ghost-hire"],
    nearbyLocations: ["wolverhampton", "derby"],
    faqs: [
      { question: "Do you deliver to Stoke-on-Trent?", answer: "Yes — Stoke sits on the M6 within easy reach of our Birmingham base, so delivery and collection are quick. Nationwide delivery is also available, subject to vehicle and location." },
    ],
    metaTitle: "Luxury Car Hire Stoke-on-Trent | Supercar, Wedding & Prom | CVS Car Hire",
    metaDescription:
      "Luxury, supercar, wedding and prom car hire in Stoke-on-Trent & Staffordshire. Delivery from our Birmingham base. Check availability.",
    geo: { lat: 53.0027, lng: -2.1794 },
  },
  {
    slug: "solihull",
    city: "Solihull",
    region: "West Midlands",
    nation: "England",
    intro:
      "Solihull is right on our doorstep. As a Birmingham-based hire company established in 2014, CVS Car Hire serves Solihull, Shirley, Dorridge and Knowle with local collection and quick delivery — luxury, supercar and prestige vehicles ready for the occasions this affluent corner of the West Midlands is known for.",
    serving:
      "Whether it's a supercar for a landmark birthday in Solihull, a Rolls-Royce for a wedding at a nearby venue, or a chauffeur-driven arrival for business at Blythe Valley Park, we're minutes away. With Birmingham Airport and the NEC on Solihull's edge, we're perfectly placed for events, arrivals and celebrations.",
    delivery:
      "Fast local delivery and collection across Solihull, Shirley, Dorridge and Knowle from our nearby Birmingham base. Nationwide UK delivery is also available, subject to vehicle and location.",
    motorways: ["M42", "M40", "M6", "A34"],
    airports: ["Birmingham Airport (BHX)"],
    weddingVenues: ["Nailcote Hall", "Hogarths Hotel & Spa", "The St. Johns Hotel", "Ardencote"],
    businessDistricts: ["Blythe Valley Park", "Solihull town centre", "Birmingham Business Park"],
    landmarks: ["Touchwood", "Tudor Grange Park", "The NEC", "Knowle & Dorridge"],
    occasions: ["Weddings", "Proms", "Corporate events", "Airport arrivals", "Celebrations"],
    recommendedVehicles: ["lamborghini-urus-performante-hire", "mercedes-amg-g63-hire", "rolls-royce-cullinan-hire", "audi-r8-spyder-hire"],
    nearbyLocations: ["birmingham", "coventry"],
    faqs: [
      { question: "Do you deliver luxury cars to Solihull?", answer: "Yes — Solihull is right beside our Birmingham base, so local collection and delivery to Solihull, Shirley, Dorridge and Knowle are quick and easy. Nationwide delivery is also available, subject to vehicle and location." },
      { question: "Can I hire a car near Birmingham Airport or the NEC?", answer: "Absolutely — both sit on Solihull's edge and we regularly deliver for arrivals and events there. Tell us your pick-up point and dates and we'll confirm." },
    ],
    metaTitle: "Luxury Car Hire Solihull | Supercar, Wedding & Prom Hire | CVS Car Hire",
    metaDescription:
      "Luxury, supercar, wedding and prom car hire in Solihull — self-drive or chauffeur, with fast local delivery from our nearby Birmingham base. Check availability.",
    geo: { lat: 52.4118, lng: -1.7776 },
  },
  {
    slug: "milton-keynes",
    city: "Milton Keynes",
    region: "Buckinghamshire",
    nation: "England",
    intro:
      "CVS Car Hire brings its collection of supercars, luxury 4x4s and prestige vehicles to Milton Keynes through our nationwide delivery service — your chosen car delivered to your home, hotel or venue, subject to availability. Straight down the M1 from our Birmingham base, MK is well within easy reach.",
    serving:
      "From a Lamborghini for a weekend in Milton Keynes to a Rolls-Royce for a wedding, or a chauffeur-driven arrival for a corporate event in Central Milton Keynes, we make luxury hire effortless. Tell us the occasion and the location and we'll confirm delivery.",
    delivery:
      "Milton Keynes is served through our nationwide delivery service, with quick access via the M1 — your vehicle delivered to your chosen MK address, subject to vehicle and location. Collection is arranged to suit you.",
    motorways: ["M1", "A5", "A421"],
    airports: ["Luton (LTN)", "Birmingham (BHX)"],
    weddingVenues: ["Horwood House", "Woughton House", "The Old Rectory"],
    businessDistricts: ["Central Milton Keynes (CMK)", "Kents Hill Business Park"],
    landmarks: ["thecentre:mk", "Stadium MK", "Xscape", "Bletchley Park"],
    occasions: ["Weddings", "Proms", "Corporate events", "Celebrations", "Weekend hire"],
    recommendedVehicles: ["lamborghini-urus-performante-hire", "ferrari-roma-hire", "mercedes-amg-g63-hire", "rolls-royce-cullinan-hire"],
    nearbyLocations: ["birmingham"],
    faqs: [
      { question: "Do you deliver luxury cars to Milton Keynes?", answer: "Yes — MK is a straight run down the M1 from our Birmingham base, so delivery and collection are simple. We deliver to your home, hotel or venue, subject to vehicle and location." },
      { question: "Can I hire a supercar in Milton Keynes for the weekend?", answer: "Yes — many of our supercars are available for weekend hire in Milton Keynes via delivery. Get in touch to confirm the car and dates." },
    ],
    metaTitle: "Luxury Car Hire Milton Keynes | Supercar & Prestige Hire | CVS Car Hire",
    metaDescription:
      "Luxury and supercar hire delivered across Milton Keynes — Lamborghini, Ferrari, Rolls-Royce and more, self-drive or chauffeur, subject to availability. Check availability.",
    geo: { lat: 52.0406, lng: -0.7594 },
  },
  {
    slug: "oxford",
    city: "Oxford",
    region: "Oxfordshire",
    nation: "England",
    intro:
      "CVS Car Hire delivers its collection of supercars, luxury 4x4s and prestige vehicles to Oxford and across Oxfordshire through our nationwide service — the perfect match for the county's beautiful venues, country weddings and dreaming-spires backdrops. Your chosen car brought to your door, subject to availability.",
    serving:
      "From a supercar for a celebration among the Cotswolds to a Rolls-Royce for a wedding at an Oxfordshire manor, or a chauffeur-driven arrival for a college or business event, we make luxury hire in Oxford seamless. Tell us the occasion and location and we'll confirm delivery.",
    delivery:
      "Oxford and Oxfordshire are served through our nationwide delivery service, with access via the M40 — your vehicle delivered to your chosen address, subject to vehicle and location. Collection is arranged to suit you.",
    motorways: ["M40", "A34", "A40"],
    airports: ["London Oxford Airport", "Heathrow (LHR)", "Birmingham (BHX)"],
    weddingVenues: ["Heythrop Park", "Weston Manor", "The Bay Tree", "Caswell House"],
    businessDistricts: ["Oxford city centre", "Oxford Science Park", "Botley Road"],
    landmarks: ["The dreaming spires", "Blenheim Palace", "Ashmolean Museum", "Radcliffe Camera"],
    occasions: ["Weddings", "Celebrations", "Corporate & college events", "Weekend hire"],
    recommendedVehicles: ["rolls-royce-cullinan-hire", "ferrari-roma-hire", "lamborghini-urus-performante-hire", "mercedes-amg-g63-hire"],
    nearbyLocations: ["birmingham"],
    faqs: [
      { question: "Do you deliver luxury cars to Oxford?", answer: "Yes — we deliver to Oxford and across Oxfordshire through our nationwide service via the M40, bringing your chosen vehicle to your home, hotel or venue, subject to availability." },
      { question: "Can I hire a wedding car for an Oxfordshire venue?", answer: "Absolutely — the Cotswolds and Oxfordshire have some of the country's finest wedding venues, and we regularly deliver wedding cars there. Share your date and venue and we'll confirm." },
    ],
    metaTitle: "Luxury Car Hire Oxford | Supercar, Wedding & Prestige Hire | CVS Car Hire",
    metaDescription:
      "Luxury and supercar hire delivered across Oxford & Oxfordshire — Rolls-Royce, Ferrari, Lamborghini and more, self-drive or chauffeur. Check availability.",
    geo: { lat: 51.7520, lng: -1.2577 },
  },
];

export function getLocationBySlug(slug: string): LocationContent | undefined {
  return locations.find((l) => l.slug === slug);
}
