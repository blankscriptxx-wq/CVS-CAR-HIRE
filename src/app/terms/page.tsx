import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "The terms on which CVS Car Hire provides its website and hire services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      slug="terms"
      updated="[To be confirmed]"
      intro="These Terms & Conditions govern the use of the CVS Car Hire website and outline the general basis of our hire services. Full hire terms are provided as part of your hire agreement."
      sections={[
        {
          heading: "About these terms",
          paragraphs: [
            "By using this website you agree to these terms. Nothing on this website constitutes a binding offer of hire; all hires are subject to availability, eligibility and a separate hire agreement.",
            "[Placeholder — CVS/solicitor to provide the definitive hire terms, including eligibility, deposits, insurance, mileage, cancellations and liability.]",
          ],
        },
        {
          heading: "Enquiries and availability",
          paragraphs: [
            "Prices shown on the website are indicative &lsquo;from&rsquo; guides and are subject to confirmation. Availability, requirements (such as minimum age and deposit) and final pricing are confirmed at the point of enquiry.",
          ],
        },
        {
          heading: "Complaints",
          paragraphs: [
            "We aim to provide an excellent service. If something isn&rsquo;t right, please contact us and we&rsquo;ll do our best to resolve it.",
            "[Placeholder — CVS to confirm the formal complaints procedure, including BVRLA conciliation where applicable.]",
          ],
        },
        {
          heading: "BVRLA membership",
          paragraphs: [
            "CVS Car Hire is a member of the BVRLA (British Vehicle Rental and Leasing Association).",
          ],
        },
      ]}
    />
  );
}
