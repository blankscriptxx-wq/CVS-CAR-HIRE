"use client";

/**
 * Consent-aware analytics event layer.
 *
 * All events are pushed to a dataLayer (GTM-compatible). If consent has not been
 * granted, or no analytics ids are configured, events are queued/no-op'd rather
 * than sent. Wire GA4 / Meta / TikTok through GTM using these dataLayer events.
 */

export type AnalyticsEvent =
  | "view_vehicle"
  | "select_vehicle"
  | "open_live_chat"
  | "click_whatsapp"
  | "click_call"
  | "begin_enquiry"
  | "submit_enquiry"
  | "view_service"
  | "shortlist_vehicle"
  | "fleet_filter"
  | "view_location";

type Params = Record<string, string | number | boolean | undefined>;

const CONSENT_KEY = "cvs-analytics-consent";

export function hasConsent(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(CONSENT_KEY) === "granted";
}

export function setConsent(granted: boolean): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
  window.dispatchEvent(new CustomEvent("cvs-consent-change", { detail: granted }));
}

export function consentDecided(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(CONSENT_KEY) !== null;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Fire a tracked event. No-ops safely without consent. */
export function track(event: AnalyticsEvent, params: Params = {}): void {
  if (typeof window === "undefined") return;
  if (!hasConsent()) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/** Capture UTM parameters from the URL for attribution / chat context. */
export function captureUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(
    (key) => {
      const value = params.get(key);
      if (value) utm[key] = value;
    }
  );
  return utm;
}
