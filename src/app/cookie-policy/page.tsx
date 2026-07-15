import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How CVS Car Hire uses cookies and similar technologies on this website.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      slug="cookie-policy"
      updated="[To be confirmed]"
      intro="This Cookie Policy explains how CVS Car Hire uses cookies and similar technologies, and how you can manage your preferences."
      sections={[
        {
          heading: "What are cookies?",
          paragraphs: [
            "Cookies are small text files stored on your device that help websites function and understand how they are used.",
          ],
        },
        {
          heading: "How we use cookies",
          paragraphs: [
            "We use essential cookies to make the site work, and — only with your consent — analytics cookies to understand how the site is used so we can improve it.",
            "Analytics and marketing tools load only after you accept cookies via our consent banner. You can decline at any time.",
            "[Placeholder — CVS to confirm the specific cookies and third parties once analytics/marketing tags are configured.]",
          ],
        },
        {
          heading: "Managing cookies",
          paragraphs: [
            "You can accept or decline non-essential cookies using our banner, and you can change your browser settings to block or delete cookies at any time.",
          ],
        },
      ]}
    />
  );
}
