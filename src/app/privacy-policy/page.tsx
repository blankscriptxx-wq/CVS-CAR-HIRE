import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How CVS Car Hire collects, uses and protects your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      slug="privacy-policy"
      updated="[To be confirmed]"
      intro="This Privacy Policy explains how CVS Car Hire collects, uses and protects the personal information you provide when you enquire with us or use our website."
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            "When you make an enquiry we may collect your name, contact number, email address and details of your requirements, along with information about the pages you visit and how you found us.",
            "[Placeholder — CVS to confirm exactly what data is collected and the lawful basis for processing under UK GDPR.]",
          ],
        },
        {
          heading: "How we use your information",
          paragraphs: [
            "We use your information to respond to your enquiry, arrange your hire and provide customer support. With your consent, we may also use analytics to improve our website.",
            "[Placeholder — CVS/solicitor to confirm marketing, retention and third-party processing details.]",
          ],
        },
        {
          heading: "Sharing your information",
          paragraphs: [
            "We may share enquiry information with the tools we use to manage conversations (for example, our chat and CRM providers) strictly to handle your enquiry.",
            "[Placeholder — list of processors to be confirmed.]",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "Under UK data protection law you have rights over your personal data, including access, correction and erasure.",
            "[Placeholder — CVS to confirm the contact route for data requests and the ICO complaint process.]",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "For any privacy questions, please contact CVS Car Hire using the details on our Contact page.",
          ],
        },
      ]}
    />
  );
}
