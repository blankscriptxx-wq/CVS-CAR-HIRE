import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { ArrowRight } from "@/components/ui/Icons";

/** Experience-led categories (broader than fleet filters — an editorial edit). */
const experiences = [
  { label: "Supercars", href: "/services/supercar-hire", blurb: "Ferrari, Lamborghini and the icons of speed." },
  { label: "Luxury 4x4s", href: "/services/luxury-4x4-hire", blurb: "Cullinan, G 63, Range Rover — presence and comfort." },
  { label: "Chauffeur", href: "/services/chauffeur-hire", blurb: "Be driven. Compose yourself for the occasion." },
  { label: "Weddings", href: "/services/wedding-car-hire", blurb: "The car that carries you into the next chapter." },
  { label: "Prom", href: "/services/prom-car-hire", blurb: "The entrance everyone remembers." },
  { label: "Production & Events", href: "/services/production-car-hire", blurb: "Vehicles that command the frame." },
];

export function BrowseByExperience() {
  return (
    <section className="border-t border-line bg-charcoal/30 py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Browse by Experience"
          title={<>More than a car. An occasion.</>}
          intro="Choose the experience and we&rsquo;ll match the vehicle — every hire tailored to the moment it&rsquo;s made for."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <Reveal key={exp.href} delay={(i % 3) * 0.06}>
              <Link
                href={exp.href}
                className="group relative flex aspect-[16/10] flex-col justify-end overflow-hidden border border-line p-6"
              >
                <div className="absolute inset-0 transition-transform duration-800 ease-luxe group-hover:scale-105">
                  <Media
                    asset={{
                      src: `/images/experiences/${exp.label.toLowerCase().replace(/[^a-z]+/g, "-")}.jpg`,
                      alt: `${exp.label} hire`,
                      placeholder: true,
                    }}
                    label={exp.label}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative z-10">
                  <h3 className="font-display text-2xl text-warm-white">{exp.label}</h3>
                  <p className="mt-1 text-sm text-silver">{exp.blurb}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-wide2 text-champagne">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
