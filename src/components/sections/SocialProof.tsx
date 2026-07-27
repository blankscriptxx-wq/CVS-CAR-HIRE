import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data/testimonials";
import { siteConfig } from "@/lib/siteConfig";
import { StarIcon, InstagramIcon } from "@/components/ui/Icons";

/**
 * Social proof. Renders genuine testimonials when present. We never fabricate
 * reviews, so when the list is empty it shows a Google Reviews integration
 * point + Instagram follow, ready for the owner to connect live reviews.
 */
export function SocialProof() {
  const hasReviews = testimonials.length > 0;

  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Social Proof"
          title={<>Trusted for the moments that matter.</>}
          intro="Weddings, milestone celebrations, corporate events and productions across the UK."
          align="center"
        />

        {hasReviews ? (
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={i} delay={i * 0.06} className="border border-line bg-charcoal/40 p-6">
                {t.rating && (
                  <div className="flex gap-1 text-champagne" aria-label={`${t.rating} out of 5`}>
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <StarIcon key={s} className="h-4 w-4" />
                    ))}
                  </div>
                )}
                <p className="mt-4 text-warm-white">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-xs uppercase tracking-wide2 text-silver">
                  {t.author}
                  {t.occasion ? ` — ${t.occasion}` : ""}
                </p>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mx-auto mt-12 max-w-3xl border border-line bg-charcoal/40 p-8 text-center sm:p-12">
            <div className="flex justify-center gap-1 text-champagne">
              {Array.from({ length: 5 }).map((_, s) => (
                <StarIcon key={s} className="h-5 w-5" />
              ))}
            </div>
            <p className="mt-5 text-lg text-warm-white">
              Real reviews from real customers.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-silver">
              We let our customers speak for us. Read genuine reviews on our Google Business Profile,
              and follow the latest handovers on Instagram.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={siteConfig.social.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-line px-6 text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne"
              >
                <StarIcon className="h-4 w-4 text-champagne" /> Read Google Reviews
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-line px-6 text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne"
              >
                <InstagramIcon className="h-4 w-4 text-champagne" /> {siteConfig.social.instagramHandle}
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
