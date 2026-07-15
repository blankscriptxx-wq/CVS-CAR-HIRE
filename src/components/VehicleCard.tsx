import Link from "next/link";
import type { Vehicle } from "@/lib/types";
import { Media } from "@/components/ui/Media";
import { ShortlistButton } from "@/components/ShortlistButton";
import { vehicleName, specChips, hireTypeLabel, priceLabel } from "@/lib/vehicleDisplay";
import { categoryLabel } from "@/lib/data/categories";
import { ArrowRight } from "@/components/ui/Icons";

/**
 * Vehicle card — tap-safe (no hover-dependent actions). Works identically on
 * mobile and desktop. Hover only adds a subtle image scale for polish.
 */
export function VehicleCard({
  vehicle,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  vehicle: Vehicle;
  priority?: boolean;
  sizes?: string;
}) {
  const name = vehicleName(vehicle);
  const href = `/fleet/${vehicle.slug}`;
  const price = priceLabel(vehicle);
  const chips = specChips(vehicle);

  return (
    <article className="group relative flex flex-col border border-line bg-charcoal/40">
      {/* Media */}
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden" aria-label={`View ${name}`}>
        <div className="absolute inset-0 transition-transform duration-800 ease-luxe group-hover:scale-[1.04]">
          <Media asset={vehicle.heroImage} label={name} sizes={sizes} priority={priority} />
        </div>
        {vehicle.newArrival && (
          <span className="absolute left-4 top-4 z-10 bg-champagne px-3 py-1 text-[10px] font-medium uppercase tracking-wide2 text-black">
            New Arrival
          </span>
        )}
        <span className="absolute right-4 top-4 z-10">
          <ShortlistButton slug={vehicle.slug} name={name} />
        </span>
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="eyebrow text-[10px]">{categoryLabel(vehicle.category)}</span>
          <span className="text-[10px] uppercase tracking-wide2 text-silver">
            {hireTypeLabel(vehicle)}
          </span>
        </div>

        <h3 className="mt-2 font-display text-2xl leading-tight text-warm-white">
          <Link href={href} className="hover:text-champagne transition-colors">
            {name}
          </Link>
        </h3>

        {chips.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <li
                key={chip}
                className="border border-line px-2.5 py-1 text-[11px] text-silver"
              >
                {chip}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-5">
          {price && <p className="text-sm text-champagne">{price}</p>}
          <div className="mt-3 flex items-center gap-3">
            <Link
              href={href}
              className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 border border-line text-xs uppercase tracking-wide2 text-warm-white transition-colors hover:border-champagne hover:text-champagne"
            >
              View Vehicle
            </Link>
            <Link
              href={`${href}#enquire`}
              className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 bg-champagne text-xs font-medium uppercase tracking-wide2 text-black transition-colors hover:bg-champagne-soft"
            >
              Check <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
