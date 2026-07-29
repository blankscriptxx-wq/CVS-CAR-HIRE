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
      updated="29 July 2026"
      intro="This Cookie Policy explains how CVS Hire uses cookies and similar technologies on our website, the categories of cookies we use, and how you can manage your preferences. It should be read alongside our Privacy Policy."
      sections={[
        {
          heading: "What are cookies?",
          blocks: [
            {
              type: "p",
              text: "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, to make them more efficient, and to provide information to the site owner. Similar technologies such as pixels, tags and local storage perform comparable functions, and references to “cookies” in this policy include these technologies.",
            },
          ],
        },
        {
          heading: "How we use cookies",
          blocks: [
            {
              type: "p",
              text: "We use cookies to make our website function correctly, to remember your chat conversation, and — only with your consent — to understand how our website is used and to support our marketing. Non-essential cookies are not set until you accept them via our cookie banner.",
            },
          ],
        },
        {
          heading: "The categories of cookies we use",
          blocks: [
            {
              type: "ul",
              items: [
                "Strictly necessary cookies — required for the website to function and to remember your cookie choices. These are always active and do not require consent.",
                "Functional cookies — used by our website chat provider (Aniro) to remember your conversation so you can continue it as you browse and on return visits.",
                "Analytics and performance cookies — help us understand how visitors use our site so we can improve it (for example, Google Analytics). These are set only with your consent.",
                "Marketing and targeting cookies — used to measure and improve our advertising and to show relevant content (for example, Meta and TikTok pixels and Google Ads). These are set only with your consent.",
              ],
            },
          ],
        },
        {
          heading: "Consent and managing your preferences",
          blocks: [
            {
              type: "p",
              text: "When you first visit our website, our cookie banner lets you accept or decline non-essential cookies. Analytics and marketing technologies load only after you accept. You can change or withdraw your consent at any time by clearing cookies for this site or contacting us.",
            },
            {
              type: "p",
              text: "You can also control cookies through your browser settings, including blocking or deleting cookies. Please note that disabling some cookies may affect how the website functions.",
            },
          ],
        },
        {
          heading: "Third-party cookies",
          blocks: [
            {
              type: "p",
              text: "Some cookies are set by third parties that provide services on our website, such as our chat, analytics and advertising providers. These parties process data in accordance with their own privacy and cookie policies. We recommend reviewing the relevant provider’s policy for more information about how they use cookies.",
            },
          ],
        },
        {
          heading: "How long cookies last",
          blocks: [
            {
              type: "p",
              text: "Cookies may be “session” cookies, which are deleted when you close your browser, or “persistent” cookies, which remain on your device for a set period or until you delete them. The duration varies by cookie and provider.",
            },
          ],
        },
        {
          heading: "Changes to this policy",
          blocks: [
            {
              type: "p",
              text: "We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for operational, legal or regulatory reasons. Any changes will be posted on this page with an updated “Last updated” date.",
            },
          ],
        },
        {
          heading: "Contact us",
          blocks: [
            {
              type: "p",
              text: "If you have any questions about our use of cookies, please contact Central Vehicle Solutions Ltd t/a CVS Hire at info@cvshire.co.uk or on 0121 572 3422.",
            },
          ],
        },
      ]}
    />
  );
}
