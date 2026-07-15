import { siteConfig } from "@/lib/siteConfig";

/**
 * Builds a wa.me link with a pre-filled, page-aware message.
 * The number lives in one place (siteConfig → env), never hardcoded per page.
 */
export function whatsappLink(message?: string): string {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Default enquiry message. */
export const defaultWhatsAppMessage =
  "Hi CVS Car Hire, I'd like to check availability and discuss hire options.";

/** Message pre-filled for a specific vehicle page. */
export function vehicleWhatsAppMessage(name: string): string {
  return `Hi CVS Car Hire, I'm interested in checking availability for the ${name}.`;
}

/** Message pre-filled for a service page. */
export function serviceWhatsAppMessage(service: string): string {
  return `Hi CVS Car Hire, I'd like to enquire about ${service}.`;
}

/** Message pre-filled for a location page. */
export function locationWhatsAppMessage(city: string): string {
  return `Hi CVS Car Hire, I'd like to check availability for luxury car hire in ${city}.`;
}

/**
 * Structured availability message built from the quick-enquiry panel.
 * Mirrors the example in the brief.
 */
export function availabilityWhatsAppMessage(fields: {
  vehicle?: string;
  start?: string;
  end?: string;
  age?: string;
  collection?: string;
  name?: string;
}): string {
  const vehicle = fields.vehicle || "a vehicle";
  const parts = [
    `Hi CVS Car Hire, I would like to check availability for ${vehicle}`,
  ];
  if (fields.start) parts.push(` from ${fields.start}`);
  if (fields.end) parts.push(` to ${fields.end}`);
  parts.push(".");
  if (fields.age) parts.push(` My age is ${fields.age}.`);
  if (fields.collection) parts.push(` I require ${fields.collection}.`);
  if (fields.name) parts.push(` My name is ${fields.name}.`);
  return parts.join("");
}
