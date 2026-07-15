import type { Vehicle, FAQ } from "@/lib/types";
import { formatPrice, formatPerMile } from "@/lib/data/pricing";
import { categoryLabel } from "@/lib/data/categories";

export function vehicleName(v: Vehicle): string {
  return `${v.manufacturer} ${v.model}${v.edition ? ` ${v.edition}` : ""}`;
}

const transmissionLabel: Record<string, string> = {
  automatic: "Automatic",
  manual: "Manual",
  "semi-automatic": "Semi-auto",
};

const fuelLabel: Record<string, string> = {
  petrol: "Petrol",
  diesel: "Diesel",
  hybrid: "Hybrid",
  electric: "Electric",
};

/** Compact spec chips — only confirmed fields are included. */
export function specChips(v: Vehicle): string[] {
  const chips: string[] = [];
  if (v.seats) chips.push(`${v.seats} seats`);
  if (v.transmission) chips.push(transmissionLabel[v.transmission]);
  if (v.fuelType) chips.push(fuelLabel[v.fuelType]);
  if (v.minimumAge) chips.push(`${v.minimumAge}+`);
  return chips;
}

/** Full detailed spec pairs for the vehicle page — confirmed only. */
export function specPairs(v: Vehicle): { label: string; value: string }[] {
  const pairs: { label: string; value: string }[] = [];
  pairs.push({ label: "Category", value: categoryLabel(v.category) });
  if (v.seats) pairs.push({ label: "Seats", value: String(v.seats) });
  if (v.doors) pairs.push({ label: "Doors", value: String(v.doors) });
  if (v.transmission) pairs.push({ label: "Transmission", value: transmissionLabel[v.transmission] });
  if (v.fuelType) pairs.push({ label: "Fuel", value: fuelLabel[v.fuelType] });
  if (v.drivetrain) pairs.push({ label: "Drivetrain", value: v.drivetrain.toUpperCase() });
  if (v.power) pairs.push({ label: "Power", value: v.power });
  if (v.year) pairs.push({ label: "Year", value: String(v.year) });
  return pairs;
}

export function hireTypeLabel(v: Vehicle): string {
  if (v.selfDriveAvailable && v.chauffeurAvailable) return "Self-drive & chauffeur";
  if (v.chauffeurAvailable) return "Chauffeur-driven";
  return "Self-drive";
}

/** "From £x / day" — only when a confirmed price exists. */
export function priceLabel(v: Vehicle): string | null {
  if (!v.dailyPriceFrom) return null;
  return `From ${formatPrice(v.dailyPriceFrom)} / day`;
}

/** Confirmed commercial rows for the vehicle page (only non-empty fields). */
export function commercialPairs(v: Vehicle): { label: string; value: string }[] {
  const pairs: { label: string; value: string }[] = [];
  if (v.dailyPriceFrom) pairs.push({ label: "Daily from", value: formatPrice(v.dailyPriceFrom) });
  if (v.weekendPriceFrom) pairs.push({ label: "Weekend from", value: formatPrice(v.weekendPriceFrom) });
  if (v.minimumAge) pairs.push({ label: "Minimum age", value: `${v.minimumAge}+` });
  if (v.deposit) pairs.push({ label: "Security deposit", value: formatPrice(v.deposit) });
  if (v.includedMileage) pairs.push({ label: "Included mileage", value: `${v.includedMileage} miles/day` });
  if (v.excessMileageCharge)
    pairs.push({ label: "Excess mileage", value: `${formatPerMile(v.excessMileageCharge)} / mile` });
  pairs.push({ label: "Hire type", value: hireTypeLabel(v) });
  return pairs;
}

/** Generates useful, honest per-vehicle FAQs (no invented specifics). */
export function vehicleFaqs(v: Vehicle): FAQ[] {
  const name = vehicleName(v);
  const faqs: FAQ[] = [];

  faqs.push({
    question: `How do I hire the ${name}?`,
    answer: `Start a conversation with our team via live chat, WhatsApp, a quick enquiry or a phone call. Tell us your dates and location and we'll confirm availability for the ${name} and everything you need to know.`,
  });

  if (v.minimumAge) {
    faqs.push({
      question: `What is the minimum age to hire the ${name}?`,
      answer: `The minimum driver age for the ${name} is ${v.minimumAge}. Our team will confirm the full requirements, including licence and deposit, when you enquire.`,
    });
  }

  faqs.push({
    question: v.selfDriveAvailable && v.chauffeurAvailable
      ? `Is the ${name} available self-drive or chauffeur-driven?`
      : `How is the ${name} available?`,
    answer:
      v.selfDriveAvailable && v.chauffeurAvailable
        ? `The ${name} is available both self-drive and with a professional chauffeur. Let us know which suits your occasion.`
        : v.chauffeurAvailable
          ? `The ${name} is available chauffeur-driven for your occasion.`
          : `The ${name} is available for self-drive hire.`,
  });

  faqs.push({
    question: `Can the ${name} be delivered outside Birmingham?`,
    answer: `Yes — nationwide UK delivery is available on many vehicles including the ${name}, subject to location. Delivery and collection are priced individually from £50 locally. Contact us with your address and dates to confirm.`,
  });

  if (v.excessMileageCharge) {
    faqs.push({
      question: `How does mileage work on the ${name}?`,
      answer: `Each hire includes a mileage allowance, with additional miles charged at ${formatPerMile(v.excessMileageCharge)} per mile on the ${name}. We'll confirm the included allowance for your hire before you commit.`,
    });
  }

  return faqs;
}
