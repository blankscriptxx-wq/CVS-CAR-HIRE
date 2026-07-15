import type { FAQ } from "@/lib/types";

/**
 * General site FAQs. Answers stay within what is confirmed: minimum ages and
 * delivery pricing come from the CVS pricing guideline; anything unconfirmed
 * (e.g. exact deposit) is described honestly and deferred to the enquiry.
 */
export const generalFaqs: FAQ[] = [
  {
    question: "How do I hire a car with CVS?",
    answer:
      "It starts with a conversation. Tell us the vehicle or occasion, your dates and where you are, and we'll confirm availability and everything you need to know. You can check availability through live chat, WhatsApp, a quick enquiry form or a phone call — whichever suits you.",
  },
  {
    question: "What is the minimum age to hire?",
    answer:
      "It depends on the vehicle. Minimum age typically ranges from 21 for our executive saloons up to 25 for our supercars and flagship models. Each vehicle page and our team can confirm the exact requirement for your chosen car.",
  },
  {
    question: "Do you offer self-drive and chauffeur hire?",
    answer:
      "Both. Many vehicles are available either self-driven or with a professional chauffeur. Chauffeur hire is popular for weddings, corporate travel, airport transfers and proms.",
  },
  {
    question: "Do you deliver nationwide?",
    answer:
      "Yes — nationwide UK delivery is available on many vehicles, subject to the car and the location. Delivery and collection are priced individually, starting from £50 locally, with clear distance-based rates. We'll confirm the cost for your address when you enquire.",
  },
  {
    question: "Is there a security deposit?",
    answer:
      "A refundable security deposit applies to hires. The amount varies by vehicle — our team will confirm the deposit for your chosen car when you enquire, along with what's included.",
  },
  {
    question: "How is mileage handled?",
    answer:
      "Each hire includes a mileage allowance, with a clear per-mile charge for any additional miles that varies by vehicle. We'll confirm the included mileage and any excess rate for your chosen car before you commit.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "As early as possible — popular vehicles, weekends and wedding dates are in high demand. If your plans are last-minute, still get in touch: we'll always do our best to help.",
  },
  {
    question: "Are you a member of any trade body?",
    answer:
      "Yes. CVS Car Hire is a member of the BVRLA (British Vehicle Rental and Leasing Association), and we've operated from Birmingham since 2014 with a fleet of over 50 vehicles.",
  },
];
