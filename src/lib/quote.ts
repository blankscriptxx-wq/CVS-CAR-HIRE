import type { Vehicle } from "@/lib/types";
import { formatPrice } from "@/lib/data/pricing";
import {
  type ChauffeurRate,
  type ChauffeurZone,
  STANDARD_DAY_HOURS,
  zoneLabels,
} from "@/lib/data/chauffeur";

/**
 * Quote engine. Turns the confirmed pricing guide into indicative quotes.
 * Prices are a guide and always confirmed by the team before booking.
 */

export interface QuoteLine {
  label: string;
  detail?: string;
  amount: number;
}

export interface QuoteResult {
  total: number;
  from: boolean; // true when the total is a "from" figure (e.g. nationwide chauffeur)
  lines: QuoteLine[];
}

export interface SelfDriveRates {
  daily: number;
  weekend: number; // 3-day rate
  weekly: number; // 7-day rate
  monthly: number; // 28-day rate
}

/** Whole days between two ISO dates (inclusive of the hire period). */
export function daysBetween(startISO: string, endISO: string): number {
  const start = new Date(startISO);
  const end = new Date(endISO);
  const ms = end.getTime() - start.getTime();
  if (Number.isNaN(ms)) return 0;
  const days = Math.round(ms / 86_400_000);
  return days;
}

const TIERS = [
  { key: "monthly", days: 28, label: "Monthly rate", unit: "28 days" },
  { key: "weekly", days: 7, label: "Weekly rate", unit: "7 days" },
  { key: "weekend", days: 3, label: "3-day rate", unit: "3 days" },
  { key: "daily", days: 1, label: "Daily rate", unit: "day" },
] as const;

/**
 * Self-drive quote.
 *
 * Follows the pricing guide's tiered structure: the 3-day rate covers the first
 * three days, then each extra day is charged at the daily rate — until a full
 * week is reached, where the weekly rate applies (with extra days on top), and
 * likewise for the monthly rate. It computes the BEST (lowest) combination, so
 * a customer is never charged more for a shorter hire than a longer one — e.g.
 * 9 days = weekly rate + 2 daily rates.
 */
export function selfDriveQuote(days: number, rates: SelfDriveRates): QuoteResult {
  const n = Math.max(1, Math.floor(days));
  const price: Record<string, number> = {
    monthly: rates.monthly,
    weekly: rates.weekly,
    weekend: rates.weekend,
    daily: rates.daily,
  };

  // DP: dp[d] = cheapest cost to cover at least d days (overshoot allowed, so a
  // near-boundary hire "rounds up" to a cheaper longer tier when that's better).
  const dp = new Array(n + 1).fill(Infinity);
  const pick: (typeof TIERS[number] | null)[] = new Array(n + 1).fill(null);
  dp[0] = 0;
  for (let d = 1; d <= n; d++) {
    for (const t of TIERS) {
      const prev = Math.max(0, d - t.days);
      const cost = price[t.key] + dp[prev];
      if (cost < dp[d]) {
        dp[d] = cost;
        pick[d] = t;
      }
    }
  }

  // Backtrack to count how many of each tier were used.
  const counts: Record<string, number> = {};
  let d = n;
  while (d > 0) {
    const t = pick[d]!;
    counts[t.key] = (counts[t.key] ?? 0) + 1;
    d = Math.max(0, d - t.days);
  }

  const lines: QuoteLine[] = TIERS.filter((t) => counts[t.key]).map((t) => {
    const qty = counts[t.key];
    return {
      label: `${t.label}${qty > 1 ? ` × ${qty}` : ""}`,
      detail: `${formatPrice(price[t.key])} per ${t.unit}`,
      amount: price[t.key] * qty,
    };
  });

  return { total: dp[n], from: false, lines };
}

/** Does this vehicle have a complete self-drive rate set for quoting? */
export function selfDriveRatesFor(v: Vehicle): SelfDriveRates | null {
  if (
    v.selfDriveAvailable &&
    v.dailyPriceFrom != null &&
    v.weekendPriceFrom != null &&
    v.weeklyPriceFrom != null &&
    v.monthlyPriceFrom != null
  ) {
    return {
      daily: v.dailyPriceFrom,
      weekend: v.weekendPriceFrom,
      weekly: v.weeklyPriceFrom,
      monthly: v.monthlyPriceFrom,
    };
  }
  return null;
}

export type ChauffeurJourney = "one-way" | "return";

export interface ChauffeurInput {
  journey: ChauffeurJourney;
  /** Car waits with you all day (only applies to a return journey). */
  stays: boolean;
  distanceMiles: number; // estimated one-way distance
  hours: number; // duration of a day hire (car stays)
  zone: ChauffeurZone; // destination zone (drives the day rate)
  stops: number; // additional stops
}

/**
 * Chauffeur quote — two products on one rate card:
 *
 *  • Car waits (day hire): a DAY RATE by destination zone (Local / Regional /
 *    London), covering a standard day; longer days add an hourly extension.
 *  • Transfer (one-way, or return drop-off): MILEAGE × per-mile rate, with a
 *    minimum fare. Return doubles the mileage.
 *
 * Additional stops add a per-stop fee to either.
 */
export function chauffeurQuote(input: ChauffeurInput, rate: ChauffeurRate): QuoteResult {
  const stops = Math.max(0, Math.floor(input.stops) || 0);
  const stays = input.journey === "return" && input.stays;
  const lines: QuoteLine[] = [];

  if (stays) {
    // Day hire — zone day rate (+ hourly extension beyond the standard day).
    const dayRate = rate.dayRate[input.zone];
    lines.push({
      label: `Chauffeured day — ${zoneLabels[input.zone]}`,
      detail: `up to ${STANDARD_DAY_HOURS} hours`,
      amount: dayRate,
    });
    const hours = Math.max(0, Math.floor(input.hours) || 0);
    const extra = Math.max(0, hours - STANDARD_DAY_HOURS);
    if (extra > 0) {
      lines.push({
        label: `Additional hours × ${extra}`,
        detail: `${formatPrice(rate.extraHourRate)}/hr beyond ${STANDARD_DAY_HOURS} hrs`,
        amount: extra * rate.extraHourRate,
      });
    }
  } else {
    // Transfer — mileage with a minimum fare.
    const oneWay = Math.max(0, Math.round(input.distanceMiles) || 0);
    const isReturn = input.journey === "return";
    const totalMiles = oneWay * (isReturn ? 2 : 1);
    const mileageCost = totalMiles * rate.perMileRate;
    const journeyCost = Math.max(rate.transferMinFare, mileageCost);
    lines.push({
      label: `${isReturn ? "Return" : "One-way"} transfer — ${totalMiles} mi`,
      detail:
        mileageCost < rate.transferMinFare
          ? `minimum fare ${formatPrice(rate.transferMinFare)}`
          : `${formatPrice(rate.perMileRate)}/mi`,
      amount: journeyCost,
    });
  }

  if (stops > 0) {
    lines.push({
      label: `Additional stops × ${stops}`,
      detail: `${formatPrice(rate.perStopFee)} each`,
      amount: stops * rate.perStopFee,
    });
  }

  const total = lines.reduce((sum, l) => sum + l.amount, 0);
  return { total, from: true, lines };
}
