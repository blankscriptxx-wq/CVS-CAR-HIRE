"use client";

import Script from "next/script";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Keyless Google reviews via Featurable (featurable.com).
 *
 * Featurable shows genuine Google reviews with NO Google API key: the owner
 * connects the Google Business Profile on featurable.com, creates a widget
 * (styling chosen there — pick a dark theme to match the site) and pastes its
 * widget ID into NEXT_PUBLIC_FEATURABLE_WIDGET_ID. Renders nothing until then.
 *
 * The Featurable script is lazy-loaded so it never blocks first paint.
 */
export function FeaturableReviews() {
  const id = siteConfig.reviews.featurableWidgetId;
  if (!id) return null;

  return (
    <section className="border-t border-line py-16 md:py-20">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">From Google</span>
            <h2 className="mt-4 text-display-sm font-display text-warm-white">
              What our customers say
            </h2>
          </div>
          <a
            href={siteConfig.social.googleBusinessProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-xs uppercase tracking-wide2"
          >
            See all on Google
          </a>
        </div>
        <div className="mt-8">
          <div id={`featurable-${id}`} data-featurable-async />
        </div>
      </div>
      <Script src="https://featurable.com/assets/bundle.js" strategy="lazyOnload" />
    </section>
  );
}
