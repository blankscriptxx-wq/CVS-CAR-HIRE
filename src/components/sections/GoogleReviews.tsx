import { getGoogleReviews } from "@/lib/reviews";
import { siteConfig } from "@/lib/siteConfig";
import { StarIcon } from "@/components/ui/Icons";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon
          key={i}
          className={`h-4 w-4 ${i <= Math.round(rating) ? "text-champagne" : "text-line"}`}
        />
      ))}
    </span>
  );
}

/**
 * Genuine Google reviews, fetched server-side from the Google Places API.
 * Renders nothing when reviews aren't configured/available — the surrounding
 * page keeps its "read on Google" fallback. No review/rating structured data is
 * emitted (Google's self-serving-review policy).
 */
export async function GoogleReviews() {
  const data = await getGoogleReviews();
  if (!data || data.reviews.length === 0) return null;

  return (
    <section className="border-t border-line py-16 md:py-20">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">From Google</span>
            <h2 className="mt-4 text-display-sm font-display text-warm-white">
              What our customers say
            </h2>
            {typeof data.rating === "number" && (
              <div className="mt-4 flex items-center gap-3 text-sm text-silver">
                <Stars rating={data.rating} />
                <span className="text-warm-white">{data.rating.toFixed(1)}</span>
                {data.total ? <span>· {data.total} Google reviews</span> : null}
              </div>
            )}
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

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.reviews.slice(0, 6).map((r) => (
            <figure key={`${r.author}-${r.time}`} className="flex flex-col border border-line bg-charcoal/40 p-6">
              <Stars rating={r.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-silver">
                &ldquo;{r.text.length > 320 ? `${r.text.slice(0, 317)}…` : r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between text-xs">
                <span className="text-warm-white">{r.author}</span>
                <span className="text-silver/60">{r.relativeTime}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
