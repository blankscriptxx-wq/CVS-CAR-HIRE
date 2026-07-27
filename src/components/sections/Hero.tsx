import Link from "next/link";
import { Media } from "@/components/ui/Media";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, ArrowDown } from "@/components/ui/Icons";
import type { ImageAsset } from "@/lib/types";

/**
 * Full-screen cinematic hero. Renders an optimised image (or branded
 * placeholder) by default; a poster+video can be supplied later. Works with no
 * video/autoplay on slow mobile connections — the image is the LCP element.
 */
export function Hero() {
  const heroImage: ImageAsset = {
    src: "/images/home/hero.jpg",
    alt: "A black Rolls-Royce Cullinan and Mercedes-AMG G 63 from the CVS Car Hire fleet",
    placeholder: false,
  };

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Media asset={heroImage} plain sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        <div className="vignette absolute inset-0" />
      </div>

      {/* Content */}
      <div className="shell relative z-10 w-full pb-24 pt-32 md:pb-28">
        <div className="max-w-3xl animate-fade-up">
          <span className="eyebrow">Birmingham • Nationwide UK Delivery</span>
          <h1 className="mt-5 text-display font-display text-warm-white">
            Luxury Without <span className="italic text-champagne">Compromise.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-silver sm:text-lg">
            Experience Birmingham&rsquo;s leading collection of luxury, prestige and performance
            vehicles &mdash; available for self-drive, chauffeur hire and nationwide delivery.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/fleet" variant="primary" size="lg">
              Explore the Fleet <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="#check-availability" variant="outline" size="lg">
              Check Availability
            </ButtonLink>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-wide2 text-silver">
            <span>Est. 2014</span>
            <span aria-hidden className="text-line">/</span>
            <span>50+ Vehicles</span>
            <span aria-hidden className="text-line">/</span>
            <span>BVRLA Member</span>
            <span aria-hidden className="text-line">/</span>
            <span>Self-Drive &amp; Chauffeur</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <Link
        href="#featured"
        aria-label="Scroll to discover"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-silver md:flex"
      >
        <span className="text-[10px] uppercase tracking-luxe">Scroll to discover</span>
        <ArrowDown className="h-4 w-4 animate-scroll-hint" />
      </Link>
    </section>
  );
}
