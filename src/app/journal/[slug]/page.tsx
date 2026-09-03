import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { journalPosts, getJournalPost, isPublished } from "@/lib/data/journal";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyActionBar } from "@/components/StickyActionBar";
import { ArrowRight } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/seo";

// Revalidate twice a day so a future-dated post goes live on its publish date.
export const revalidate = 43200;

export function generateStaticParams() {
  // Pre-render only already-published posts; future-dated ones render on demand
  // (and are gated below) once their date arrives.
  return journalPosts.filter((p) => isPublished(p)).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/journal/${post.slug}`,
  });
}

export default async function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();
  // Not yet its publish date — keep it hidden until then.
  if (!isPublished(post)) notFound();

  const date = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const more = journalPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={`${post.category} • ${post.readingMinutes} min read`}
        title={post.title}
        intro={post.excerpt}
        image={post.heroImage}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" },
          { name: post.title, path: `/journal/${post.slug}` },
        ]}
      />

      <article className="shell max-w-prose py-16 md:py-20">
        <p className="text-xs uppercase tracking-wide2 text-silver">{date}</p>
        <div className="mt-8 space-y-6">
          {post.body.map((block, i) => {
            if (block.type === "h2")
              return (
                <Reveal as="div" key={i}>
                  <h2 className="mt-4 font-display text-3xl text-warm-white">{block.text}</h2>
                </Reveal>
              );
            if (block.type === "h3")
              return (
                <Reveal as="div" key={i}>
                  <h3 className="mt-2 font-display text-2xl text-warm-white">{block.text}</h3>
                </Reveal>
              );
            return (
              <p key={i} className="text-base leading-relaxed text-silver">
                {block.text}
              </p>
            );
          })}
        </div>
      </article>

      {/* More reading */}
      {more.length > 0 && (
        <section className="border-t border-line py-16 md:py-20">
          <div className="shell">
            <span className="eyebrow">More from the Journal</span>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  href={`/journal/${p.slug}`}
                  className="group flex gap-5 border border-line bg-charcoal/40 p-5"
                >
                  <div className="relative aspect-square w-24 shrink-0 overflow-hidden">
                    <Media asset={p.heroImage} label="" sizes="96px" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wide2 text-champagne">
                      {p.category}
                    </span>
                    <h3 className="mt-1 font-display text-xl leading-tight text-warm-white">
                      {p.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-wide2 text-silver">
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
      <StickyActionBar context={{ page: "journal-post", slug: post.slug }} />
    </>
  );
}
