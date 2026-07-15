import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { WhyCVS } from "@/components/sections/WhyCVS";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyActionBar } from "@/components/StickyActionBar";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Media } from "@/components/ui/Media";
import { siteConfig } from "@/lib/siteConfig";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About CVS Car Hire | Birmingham's Home of Exceptional Cars",
  description:
    "Established in 2014, CVS Car Hire is a Birmingham-based luxury car hire company and BVRLA member with a fleet of over 50 prestige and performance vehicles.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CVS"
        title={<>Birmingham&rsquo;s home of exceptional cars.</>}
        intro="Since 2014, we&rsquo;ve made luxury, prestige and performance motoring accessible for the occasions that matter — with a fleet, and a service, built to impress."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />

      <section className="shell grid gap-12 py-16 lg:grid-cols-2 lg:items-center md:py-20">
        <Reveal className="relative order-2 aspect-[4/3] overflow-hidden border border-line lg:order-1">
          <Media
            asset={{ src: "/images/about/story.jpg", alt: "The CVS Car Hire fleet", placeholder: true }}
            label="Est. 2014"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 text-display-sm font-display text-warm-white">Driven by experience.</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-silver">
              <p>
                CVS Car Hire was founded in {siteConfig.foundedYear} with a simple ambition: to offer
                the finest cars, backed by service that feels genuinely personal. A decade on, we
                operate a fleet of over 50 luxury, prestige and performance vehicles from our base in
                Birmingham.
              </p>
              <p>
                From supercars and luxury 4x4s to elegant wedding cars and executive saloons, we help
                our customers make an entrance — whether that&rsquo;s a landmark celebration, a
                once-in-a-lifetime drive, a wedding day or an important business engagement.
              </p>
              <p>
                As a member of the BVRLA, we hold ourselves to the standards of the industry&rsquo;s
                leading trade body. But what our customers remember is the care we take: the right
                recommendation, the immaculate car, and a team that&rsquo;s there before, during and
                after every hire.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <WhyCVS />
      <FinalCTA />
      <StickyActionBar context={{ page: "about" }} />
    </>
  );
}
