import type { Metadata } from "next";
import Link from "next/link";
import { journalPosts } from "@/lib/data/journal";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyActionBar } from "@/components/StickyActionBar";
import { ArrowRight } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Journal | Luxury Car Hire Guides & Inspiration",
  description:
    "Guides, inspiration and insight from CVS Car Hire — wedding cars, supercar hire, production vehicles and the art of arrival.",
  path: "/journal",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title={<>Stories &amp; guides.</>}
        intro="Inspiration and insight from the world of luxury car hire — from choosing a wedding car to hiring your first supercar."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Journal", path: "/journal" }]} />

      <section className="shell py-14 md:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journalPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.05}>
              <Link
                href={`/journal/${post.slug}`}
                className="group flex h-full flex-col border border-line bg-charcoal/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-800 ease-luxe group-hover:scale-105">
                    <Media asset={post.heroImage} label={post.category} sizes="(max-width: 640px) 100vw, 33vw" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-wide2 text-silver">
                    <span className="text-champagne">{post.category}</span>
                    <span aria-hidden>•</span>
                    <span>{post.readingMinutes} min read</span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl leading-tight text-warm-white">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-silver">{post.excerpt}</p>
                  <span className="mt-auto pt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-wide2 text-champagne">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
      <StickyActionBar context={{ page: "journal" }} />
    </>
  );
}
