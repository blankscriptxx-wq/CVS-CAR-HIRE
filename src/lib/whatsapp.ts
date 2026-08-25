import { siteConfig } from "@/lib/siteConfig";

/**
 * WhatsApp is the primary communication channel. Every enquiry, quote and CTA
 * opens WhatsApp with a pre-filled, page-aware message. The number lives in one
 * place (siteConfig → env), never hardcoded per page.
 */
export function whatsappLink(message?: string): string {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Default enquiry message. */
export const defaultWhatsAppMessage =
  "Hi CVS Hire, I'd like to check availability and discuss hire options.";

/** Pre-filled message for a specific vehicle page. */
export function vehicleWhatsAppMessage(name: string): string {
  return `Hi CVS Hire, I'm interested in the ${name} — please can you check availability and pricing?`;
}

/** Pre-filled message for a service page. */
export function serviceWhatsAppMessage(service: string): string {
  return `Hi CVS Hire, I'd like to enquire about ${service}.`;
}

/** Pre-filled message for a location page. */
export function locationWhatsAppMessage(city: string): string {
  return `Hi CVS Hire, I'd like to check availability for luxury car hire in ${city}.`;
}

/**
 * Full lead message built from a completed quote or enquiry form — every
 * detail the customer entered, ready to send on WhatsApp with one tap.
 */
export function leadWhatsAppMessage(lines: (string | false | undefined)[]): string {
  return lines.filter(Boolean).join("\n");
}
