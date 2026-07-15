import Link from "next/link";
import { getFeaturedVehicles } from "@/lib/data/vehicles";
import { VehicleCard } from "@/components/VehicleCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

export function FeaturedFleet() {
  const featured = getFeaturedVehicles().slice(0, 8);
  return (
    <section id="featured" className="scroll-mt-24 border-t border-line py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The Collection"
            title={<>Featured Fleet</>}
            intro="A selection from our fleet of over 50 luxury, prestige and performance vehicles. Every car meticulously prepared and ready for your occasion."
          />
          <Reveal>
            <Link
              href="/fleet"
              className="link-underline text-xs uppercase tracking-wide2"
            >
              View all vehicles <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((v, i) => (
            <Reveal key={v.slug} delay={(i % 3) * 0.06}>
              <VehicleCard vehicle={v} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
