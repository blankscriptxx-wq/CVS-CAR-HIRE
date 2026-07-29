"use client";

import { openCookiePreferences } from "@/lib/analytics";

/** Footer control that reopens the cookie consent banner. */
export function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      Manage cookie preferences
    </button>
  );
}
