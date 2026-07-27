import type { Vehicle } from "@/lib/types";
import { formatPrice } from "@/lib/data/pricing";
import {
  type ChauffeurRate,
  type ChauffeurMode,
  STANDARD_DAY_HOURS,
  excessMiles,
} from "@/lib/data/chauffeur";

const round10 = (n: number) => Math.round(n / 10) * 10;

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
  mode: ChauffeurMode; // one-way | return-drop | return-wait
  milesFromBase: number; // Birmingham → destination (drives distance scaling)
  isLondon: boolean; // destination in London (day-rate premium)
  hours: number; // duration of a day hire (car waits)
  stops: number; // additional stops
}

/**
 * Chauffeur quote — distance-scaled from Birmingham, three modes:
 *
 *  • one-way:      oneWayBase + excessMiles × oneWayPerMile
 *  • return-drop:  returnDropBase + excessMiles × returnDropPerMile (local only)
 *  • return-wait:  dayBase + excessMiles × dayPerMile (+ London premium), plus
 *                  any hours beyond the standard day
 *
 * "excessMiles" is the mileage beyond the free local radius, so Birmingham jobs
 * hit the local anchor exactly. Additional stops add a per-stop fee.
 */
export function chauffeurQuote(input: ChauffeurInput, rate: ChauffeurRate): QuoteResult {
  const stops = Math.max(0, Math.floor(input.stops) || 0);
  const extra = excessMiles(input.milesFromBase);
  const lines: QuoteLine[] = [];

  if (input.mode === "one-way") {
    lines.push({
      label: "One-way (drop-off)",
      detail: `~${input.milesFromBase} mi from Birmingham`,
      amount: round10(rate.oneWayBase + extra * rate.oneWayPerMile),
    });
  } else if (input.mode === "return-drop") {
    lines.push({
      label: "Return — drop off & collect later",
      detail: `~${input.milesFromBase} mi from Birmingham`,
      amount: round10(rate.returnDropBase + extra * rate.returnDropPerMile),
    });
  } else {
    // return-wait — day hire (car stays with you)
    const day = round10(
      rate.dayBase + extra * rate.dayPerMile + (input.isLondon ? rate.londonPremium : 0)
    );
    lines.push({
      label: `Chauffeured day — car waits${input.isLondon ? " (London)" : ""}`,
      detail: `up to ${STANDARD_DAY_HOURS} hours · ~${input.milesFromBase} mi from Birmingham`,
      amount: day,
    });
    const hours = Math.max(0, Math.floor(input.hours) || 0);
    const over = Math.max(0, hours - STANDARD_DAY_HOURS);
    if (over > 0) {
      lines.push({
        label: `Additional hours × ${over}`,
        detail: `${formatPrice(rate.extraHourRate)}/hr beyond ${STANDARD_DAY_HOURS} hrs`,
        amount: over * rate.extraHourRate,
      });
    }
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
