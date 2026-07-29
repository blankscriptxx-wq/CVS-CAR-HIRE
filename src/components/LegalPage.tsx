import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StickyActionBar } from "@/components/StickyActionBar";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] };

export interface LegalSection {
  heading: string;
  blocks: LegalBlock[];
}

/**
 * Renders legal content (Privacy, Cookies, Terms) in a clean, readable layout
 * with a "last updated" date. Sections support paragraphs, bullet lists and
 * simple tables.
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
        <p className="text-xs uppercase tracking-wide2 text-silver">Last updated: {updated}</p>
        <p className="mt-6 text-base leading-relaxed text-silver">{intro}</p>

        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-2xl text-warm-white">{s.heading}</h2>
              <div className="mt-3 space-y-4">
                {s.blocks.map((b, i) => {
                  if (b.type === "p") {
                    return (
                      <p key={i} className="text-sm leading-relaxed text-silver">
                        {b.text}
                      </p>
                    );
                  }
                  if (b.type === "ul") {
                    return (
                      <ul
                        key={i}
                        className="ml-5 list-disc space-y-2 text-sm leading-relaxed text-silver marker:text-champagne"
                      >
                        {b.items.map((it, j) => (
                          <li key={j} className="pl-1">
                            {it}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <div key={i} className="overflow-x-auto">
                      <table className="w-full border-collapse text-left text-xs text-silver">
                        <thead>
                          <tr>
                            {b.head.map((h, j) => (
                              <th
                                key={j}
                                className="border border-line bg-charcoal px-3 py-2 font-medium uppercase tracking-wide2 text-champagne-soft"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {b.rows.map((row, j) => (
                            <tr key={j}>
                              {row.map((cell, k) => (
                                <td key={k} className="border border-line px-3 py-2 align-top leading-relaxed">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <StickyActionBar context={{ page: slug }} />
    </>
  );
}
