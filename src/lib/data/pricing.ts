/**
 * Confirmed pricing structure supplied by CVS Car Hire (pricing guideline).
 * Per-vehicle "from" rates live on each vehicle record; this module holds the
 * shared rate structure and the delivery & collection cost table.
 */

export const rateStructure = [
  { period: "Daily", note: "1 day" },
  { period: "Weekend", note: "3 days" },
  { period: "Weekly", note: "7 days" },
  { period: "Monthly", note: "28 days" },
];

export const deliveryPricing = {
  intro:
    "Delivery and collection are priced separately from one another — each is charged individually, not combined. The same structure applies across all vehicles.",
  minimum: "From £50",
  cap: "Each leg (delivery and collection) is capped at £500 maximum.",
  bands: [
    { distance: "Local (Birmingham / out of town)", cost: "From £50 upwards" },
    { distance: "Up to 100 miles", cost: "£200 each way" },
    { distance: "Up to 150 miles", cost: "£250 each way" },
    { distance: "Beyond 150 miles", cost: "£1.80 per additional mile (up to the £500 cap)" },
  ],
};

/** Format a GBP amount without decimals, e.g. 1200 → "£1,200". */
export function formatPrice(amount: number): string {
  return `£${amount.toLocaleString("en-GB")}`;
}

/** Format a per-mile charge, e.g. 1.8 → "£1.80". */
export function formatPerMile(amount: number): string {
  return `£${amount.toFixed(2)}`;
}
