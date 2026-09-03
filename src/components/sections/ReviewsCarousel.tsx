"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { GoogleReview } from "@/lib/reviews";
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

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

/**
 * Native reviews carousel — dark, matching the site. Scroll-snap track that
 * works on desktop (arrow buttons + drag) and mobile (swipe). Gentle autoplay
 * that pauses on hover, focus or touch.
 */
export function ReviewsCarousel({ reviews }: { reviews: GoogleReview[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const paused = useRef(false);

  const stepSize = useCallback((track: HTMLDivElement) => {
    const first = track.firstElementChild as HTMLElement | null;
    const gap = 24; // gap-6
    return first ? first.offsetWidth + gap : track.clientWidth;
  }, []);

  const update = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    setCanPrev(t.scrollLeft > 8);
    setCanNext(t.scrollLeft + t.clientWidth < t.scrollWidth - 8);
  }, []);

  const scrollByDir = useCallback(
    (dir: 1 | -1) => {
      const t = trackRef.current;
      if (!t) return;
      const atEnd = t.scrollLeft + t.clientWidth >= t.scrollWidth - 8;
      if (dir === 1 && atEnd) t.scrollTo({ left: 0, behavior: "smooth" });
      else t.scrollBy({ left: dir * stepSize(t), behavior: "smooth" });
    },
    [stepSize],
  );

  useEffect(() => {
    if (reviews.length <= 1) return;
    const id = window.setInterval(() => {
      if (!paused.current) scrollByDir(1);
    }, 5500);
    return () => window.clearInterval(id);
  }, [reviews.length, scrollByDir]);

  useEffect(() => {
    update();
    const t = trackRef.current;
    if (!t) return;
    t.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      t.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const hold = (v: boolean) => () => {
    paused.current = v;
  };

  return (
    <div
      className="relative mt-12"
      onMouseEnter={hold(true)}
      onMouseLeave={hold(false)}
      onFocusCapture={hold(true)}
      onBlurCapture={hold(false)}
      onTouchStart={hold(true)}
    >
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {reviews.map((r) => (
          <figure
            key={`${r.author}-${r.time}`}
            className="relative flex w-[85%] shrink-0 snap-start flex-col border border-line bg-charcoal/40 p-7 transition-colors duration-300 hover:border-champagne/60 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
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
              <GoogleG className="h-4 w-4 shrink-0" />
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Previous reviews"
          onClick={() => scrollByDir(-1)}
          disabled={!canPrev}
          className="flex h-11 w-11 items-center justify-center border border-line text-warm-white transition-colors hover:border-champagne disabled:opacity-30"
        >
          <Chevron dir="left" />
        </button>
        <button
          type="button"
          aria-label="Next reviews"
          onClick={() => scrollByDir(1)}
          disabled={!canNext}
          className="flex h-11 w-11 items-center justify-center border border-line text-warm-white transition-colors hover:border-champagne disabled:opacity-30"
        >
          <Chevron dir="right" />
        </button>
      </div>
    </div>
  );
}
