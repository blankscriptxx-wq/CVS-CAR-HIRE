import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyActionBar } from "@/components/StickyActionBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { generalFaqs } from "@/lib/data/faqs";
import { buildMetadata, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQs | Luxury Car Hire Questions Answered",
  description:
    "Frequently asked questions about luxury car hire with CVS — minimum age, self-drive vs chauffeur, deposits, mileage, nationwide delivery and how to book.",
  path: "/faqs",
});

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <PageHero
        eyebrow="Good to Know"
        title={<>Frequently Asked Questions</>}
        intro="Everything you need to know about hiring with CVS. Can't find your answer? Start a live chat or message us on WhatsApp."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQs", path: "/faqs" }]} />

      <section className="shell py-16 md:py-20">
        <div className="max-w-3xl">
          <FaqAccordion faqs={generalFaqs} />
        </div>
      </section>

      <FinalCTA />
      <StickyActionBar context={{ page: "faqs" }} />
    </>
  );
}
