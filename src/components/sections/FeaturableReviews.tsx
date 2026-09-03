import { getFeaturableReviews } from "@/lib/reviews";
import { siteConfig, googleReviewLinks } from "@/lib/siteConfig";
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
 * Genuine Google reviews synced by Featurable, fetched from its widget API and
 * rendered NATIVELY in the site's own design — no embed script, no iframe, no
 * layout shift. Renders nothing until the Google Business Profile is connected
 * and real reviews have synced (example/placeholder reviews are never shown).
 * Honours Featurable's free-plan attribution via `showBranding`.
 */
export async function FeaturableReviews() {
  const data = await getFeaturableReviews(siteConfig.reviews.featurableWidgetId);
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
            href={googleReviewLinks.read}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-xs uppercase tracking-wide2"
          >
            See all on Google
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.reviews.slice(0, 6).map((r) => (
            <figure
              key={`${r.author}-${r.time}`}
              className="flex flex-col border border-line bg-charcoal/40 p-6"
            >
              <Stars rating={r.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-silver">
                &ldquo;{r.text.length > 320 ? `${r.text.slice(0, 317)}…` : r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                {r.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={r.photo}
                    alt=""
                    width={32}
                    height={32}
                    loading="lazy"
                    className="h-8 w-8 rounded-full border border-champagne/30 object-cover"
                  />
                ) : null}
                <div className="flex flex-1 items-center justify-between text-xs">
                  <span className="text-warm-white">{r.author}</span>
                  <span className="text-silver/60">{r.relativeTime}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {data.showBranding && (
          <p className="mt-8 text-center text-[11px] text-silver/50">
            Reviews synced by{" "}
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
