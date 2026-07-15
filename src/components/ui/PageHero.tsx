import type { ReactNode } from "react";
import { Media } from "@/components/ui/Media";
import type { ImageAsset } from "@/lib/types";

/** Compact interior-page hero with optional background media. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: ImageAsset;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {image && (
        <div className="absolute inset-0">
          <Media asset={image} plain sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
        </div>
      )}
      <div className={`shell relative z-10 ${image ? "pb-14 pt-36 md:pb-20 md:pt-44" : "pb-12 pt-32 md:pb-16 md:pt-40"}`}>
        <div className="max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-4 text-display-sm font-display text-warm-white">{title}</h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-silver sm:text-lg">
              {intro}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
