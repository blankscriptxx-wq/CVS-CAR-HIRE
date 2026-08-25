import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Marque strip — the manufacturers represented in the fleet, shown as elegant
 * wordmarks linking to each marque's hire landing page. Framed as "the marques
 * we hire" (not "partners"): CVS Hire is an independent hire company and is not
 * affiliated with or endorsed by these manufacturers. No trademarked logo
 * artwork is used — the names are set as type.
 */
const MARQUES: { name: string; href: string }[] = [
  { name: "Ferrari", href: "/hire/ferrari" },
  { name: "Lamborghini", href: "/hire/lamborghini" },
  { name: "Rolls-Royce", href: "/hire/rolls-royce" },
  { name: "Mercedes-AMG", href: "/hire/g-wagon" },
  { name: "Range Rover", href: "/hire/range-rover" },
  { name: "Audi", href: "/hire/audi" },
  { name: "BMW", href: "/hire/bmw" },
  { name: "Volkswagen", href: "/fleet/vw-golf-r-hire" },
];

export function MarqueStrip() {
  return (
    <section className="border-t border-line py-16 md:py-20">
      <div className="shell">
        <SectionHeading
          eyebrow="The Marques"
          title={<>The marques in our fleet</>}
          intro="From supercars to prestige SUVs, we hire the world's most sought-after names — explore the fleet by marque."
          align="center"
        />

        <Reveal className="mt-12">
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-4">
            {MARQUES.map((m) => (
              <li key={m.name} className="bg-black">
                <Link
                  href={m.href}
                  className="flex h-24 items-center justify-center px-4 text-center transition-colors hover:bg-charcoal/60"
                >
                  <span className="font-display text-xl text-silver transition-colors hover:text-champagne sm:text-2xl">
                    {m.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mx-auto mt-6 max-w-2xl text-center text-[11px] leading-relaxed text-silver/60">
          CVS Hire is an independent vehicle hire company and is not affiliated with or endorsed by
          these manufacturers. All marque names are the trademarks of their respective owners.
        </p>
      </div>
    </section>
  );
}
