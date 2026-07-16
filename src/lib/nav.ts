import { services } from "@/lib/data/services";
import { categories } from "@/lib/data/categories";

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

/** Primary desktop navigation. */
export const primaryNav: NavLink[] = [
  {
    label: "Fleet",
    href: "/fleet",
    children: categories.map((c) => ({ label: c.label, href: `/fleet?category=${c.slug}` })),
  },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.navLabel ?? s.name, href: `/services/${s.slug}` })),
  },
  { label: "Chauffeur", href: "/services/chauffeur-hire" },
  { label: "Weddings & Events", href: "/services/wedding-car-hire" },
  { label: "Get a Quote", href: "/quote" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Footer link groups. */
export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Our Fleet", href: "/fleet" },
      { label: "Get a Quote", href: "/quote" },
      { label: "Services", href: "/services" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Delivery", href: "/delivery" },
      { label: "Reviews", href: "/reviews" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    title: "Popular Services",
    links: [
      { label: "Supercar Hire", href: "/services/supercar-hire" },
      { label: "Luxury 4x4 Hire", href: "/services/luxury-4x4-hire" },
      { label: "Wedding Car Hire", href: "/services/wedding-car-hire" },
      { label: "Prom Car Hire", href: "/services/prom-car-hire" },
      { label: "Chauffeur Hire", href: "/services/chauffeur-hire" },
      { label: "Airport Transfers", href: "/services/airport-transfer" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Birmingham", href: "/locations/birmingham" },
      { label: "London", href: "/locations/london" },
      { label: "Manchester", href: "/locations/manchester" },
      { label: "Coventry", href: "/locations/coventry" },
      { label: "Leicester", href: "/locations/leicester" },
      { label: "Nottingham", href: "/locations/nottingham" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About CVS", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/faqs" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];
