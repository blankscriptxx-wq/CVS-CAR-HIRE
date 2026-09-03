import { getFeaturableReviews } from "@/lib/reviews";
import { siteConfig, googleReviewLinks } from "@/lib/siteConfig";
import { StarIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

function Stars({ rating, className = "h-4 w-4" }: { rating: number; className?: string }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon
          key={i}
          className={`${className} ${i <= Math.round(rating) ? "text-champagne" : "text-line"}`}
        />
      ))}
    </span>
  );
}

/** The Google "G" glyph — signals the reviews are genuinely from Google. */
function GoogleG({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden focusable="false">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7A21.99 21.99 0 0 0 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18a13.2 13.2 0 0 1 0-8.36v-5.7H4.34a22.02 22.02 0 0 0 0 19.76l7.35-5.7z" />
      <path fill="#EA4335" d="M24 9.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 3.02 29.93 1 24 1 15.4 1 7.96 5.94 4.34 13.12l7.35 5.7C13.42 13.62 18.27 9.75 24 9.75z" />
    </svg>
  );
}

/**
 * Genuine Google reviews synced by Featurable, fetched from its widget API and
 * rendered NATIVELY in the site's own luxury design — no embed script, no
 * iframe, no layout shift. Renders nothing until the Google Business Profile is
 * connected and real reviews have synced (example/placeholder reviews are never
 * shown). Honours Featurable's free-plan attribution via `showBranding`.
 */
export async function FeaturableReviews() {
  const data = await getFeaturableReviews(siteConfig.reviews.featurableWidgetId);
  if (!data || data.reviews.length === 0) return null;

  const cards = data.reviews.slice(0, 6);

  return (
    <section className="border-t border-line bg-charcoal/20 py-20 md:py-28">
      <div className="shell">
        {/* Header */}
        <div className="flex flex-col gap-8 border-b border-line pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow inline-flex items-center gap-2">
              <GoogleG className="h-3.5 w-3.5" /> Verified Google Reviews
            </span>
            <h2 className="mt-4 max-w-xl text-display-sm font-display text-warm-white">
              Loved by our customers.
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            {typeof data.rating === "number" && (
              <div className="flex items-center gap-4">
                <span className="font-display text-5xl leading-none text-champagne">
                  {data.rating.toFixed(1)}
                </span>
                <div>
                  <Stars rating={data.rating} className="h-4 w-4" />
                  <p className="mt-1 text-xs uppercase tracking-wide2 text-silver">
                    {data.total ? `${data.total} Google reviews` : "on Google"}
                  </p>
                </div>
              </div>
            )}
            <div className="flex flex-wrap gap-3">
              <a
                href={data.writeUri || googleReviewLinks.write}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 border border-champagne px-5 text-xs uppercase tracking-wide2 text-champagne hover:bg-champagne hover:text-black"
              >
                Leave a review
              </a>
              <a
                href={googleReviewLinks.read}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 border border-line px-5 text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne"
              >
                See all on Google
              </a>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((r, i) => (
            <Reveal
              key={`${r.author}-${r.time}`}
              delay={(i % 3) * 0.06}
              className="group relative flex flex-col border border-line bg-black/40 p-7 transition-colors duration-300 hover:border-champagne/60"
            >
              {/* Decorative quote glyph */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-5 top-2 select-none font-display text-7xl leading-none text-champagne/10"
              >
                &rdquo;
              </span>

              <Stars rating={r.rating} />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-silver">
                {r.text.length > 300 ? `${r.text.slice(0, 297)}…` : r.text}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                {r.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={r.photo}
                    alt=""
                    width={36}
                    height={36}
                    loading="lazy"
                    className="h-9 w-9 shrink-0 rounded-full border border-champagne/30 object-cover"
                  />
                ) : (
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne/30 font-display text-sm text-champagne">
                    {r.author.charAt(0)}
                  </span>
                )}
                <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                  <span className="truncate text-sm text-warm-white">{r.author}</span>
                  <span className="shrink-0 text-[11px] uppercase tracking-wide2 text-silver/60">
                    {r.relativeTime}
                  </span>
                </div>
                <GoogleG className="h-4 w-4 shrink-0 opacity-70" />
              </figcaption>
            </Reveal>
          ))}
        </div>

        {data.showBranding && (
          <p className="mt-10 text-center text-[10px] uppercase tracking-wide2 text-silver/40">
            Reviews synced from Google by{" "}
            <a
              href="https://featurable.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-champagne"
            >
              Featurable
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
