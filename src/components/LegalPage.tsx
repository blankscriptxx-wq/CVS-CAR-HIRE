import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StickyActionBar } from "@/components/StickyActionBar";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

/**
 * Renders legal content with a prominent notice that the text is a draft
 * requiring approval by CVS Car Hire / a solicitor before going live.
 */
export function LegalPage({
  title,
  slug,
  updated,
  intro,
  sections,
}: {
  title: string;
  slug: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: title, path: `/${slug}` }]} />

      <section className="shell max-w-prose py-14 md:py-20">
        {/* Approval notice */}
        <div className="mb-10 border border-champagne/40 bg-champagne/5 p-5">
          <p className="text-xs leading-relaxed text-champagne-soft">
            <strong className="text-champagne">Draft — requires approval.</strong> This is
            placeholder legal content for layout purposes only. It must be reviewed and approved by
            CVS Car Hire and, where appropriate, a qualified solicitor before publication. Do not
            treat this as final legal terms.
          </p>
        </div>

        <p className="text-xs uppercase tracking-wide2 text-silver">Last updated: {updated}</p>
        <p className="mt-6 text-base leading-relaxed text-silver">{intro}</p>

        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-2xl text-warm-white">{s.heading}</h2>
              <div className="mt-3 space-y-4">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-silver">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <StickyActionBar context={{ page: slug }} />
    </>
  );
}
