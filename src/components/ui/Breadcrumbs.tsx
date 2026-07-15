import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="shell pt-24 md:pt-28">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-silver">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {last ? (
                  <span className="text-warm-white/80" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.path} className="hover:text-champagne transition-colors">
                      {item.name}
                    </Link>
                    <span aria-hidden className="text-line">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(items)} />
    </>
  );
}
