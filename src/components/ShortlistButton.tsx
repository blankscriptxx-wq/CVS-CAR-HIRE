"use client";

import { useShortlist } from "@/lib/useShortlist";
import { HeartIcon } from "@/components/ui/Icons";

export function ShortlistButton({ slug, name }: { slug: string; name: string }) {
  const { has, toggle } = useShortlist();
  const active = has(slug);
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        toggle(slug);
      }}
      aria-pressed={active}
      aria-label={active ? `Remove ${name} from shortlist` : `Add ${name} to shortlist`}
      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
        active
          ? "border-champagne bg-champagne text-black"
          : "border-line bg-black/40 text-warm-white hover:border-champagne"
      }`}
    >
      <HeartIcon className="h-4 w-4" />
    </button>
  );
}
