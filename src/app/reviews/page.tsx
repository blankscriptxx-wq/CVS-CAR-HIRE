import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyActionBar } from "@/components/StickyActionBar";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Reviews | What Our Customers Say",
  description:
    "Read genuine reviews and see recent handovers from CVS Car Hire. Trusted for weddings, celebrations, corporate travel and productions across the UK.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Social Proof"
        title={<>Reviews</>}
        intro="We let our customers speak for us. Read genuine reviews on our Google Business Profile and follow the latest handovers on Instagram."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]} />
      <SocialProof />
      <FinalCTA />
      <StickyActionBar context={{ page: "reviews" }} />
    </>
  );
}
