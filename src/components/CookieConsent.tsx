"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { consentDecided, setConsent, COOKIE_PREFS_EVENT } from "@/lib/analytics";

/** Minimal, non-intrusive consent bar. Sits above the mobile action bar. */
export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!consentDecided()) setShow(true);
    // Reopen on demand from the footer "Manage cookie preferences" link.
    const reopen = () => setShow(true);
    window.addEventListener(COOKIE_PREFS_EVENT, reopen);
    return () => window.removeEventListener(COOKIE_PREFS_EVENT, reopen);
  }, []);

  if (!show) return null;

  const decide = (granted: boolean) => {
    setConsent(granted);
    setShow(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-[56px] z-50 border-t border-line bg-charcoal/95 backdrop-blur md:bottom-0"
    >
      <div className="shell flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-silver">
          We use cookies to understand how our site is used and to improve your experience. See our{" "}
          <Link href="/cookie-policy" className="text-champagne underline">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide(false)}
            className="min-h-[44px] px-5 text-xs uppercase tracking-wide2 text-silver hover:text-warm-white"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide(true)}
            className="min-h-[44px] bg-champagne px-5 text-xs uppercase tracking-wide2 text-black hover:bg-champagne-soft"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
