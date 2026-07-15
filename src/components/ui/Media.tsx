import Image from "next/image";
import type { ImageAsset } from "@/lib/types";

/**
 * Renders a real optimised image when available, or an elegant on-brand
 * placeholder when the asset is flagged `placeholder: true` (awaiting real
 * photography). Placeholders are intentionally handsome so layouts look
 * finished before assets are supplied. See docs/ASSET-CHECKLIST.md.
 */
export function Media({
  asset,
  label,
  plain = false,
  fill = true,
  width,
  height,
  sizes = "100vw",
  priority = false,
  className = "",
  imgClassName = "",
}: {
  asset: ImageAsset;
  /** Overlay text for the placeholder (e.g. "Ferrari Roma"). */
  label?: string;
  /** When true (background usage behind content), render gradient only — no centered label. */
  plain?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  if (asset.placeholder) {
    return (
      <div
        className={`overflow-hidden bg-soft ${fill ? "absolute inset-0 h-full w-full" : "relative"} ${className}`}
        role="img"
        aria-label={asset.alt}
      >
        {/* Layered metallic gradient — restrained, no glow */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_-10%,#232323_0%,#141414_45%,#0b0b0b_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(115deg,transparent_0%,#ffffff_45%,transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
        {!plain && (
          <div className="relative z-10 flex h-full min-h-[180px] w-full flex-col items-center justify-center gap-2 p-6 text-center">
            {label && (
              <span className="font-display text-2xl leading-tight text-warm-white/90 sm:text-3xl">
                {label}
              </span>
            )}
            <span className="eyebrow text-[10px] text-silver/70">Photography to follow</span>
          </div>
        )}
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imgClassName}`}
      />
    );
  }

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={width ?? 1200}
      height={height ?? 800}
      sizes={sizes}
      priority={priority}
      className={imgClassName}
    />
  );
}
