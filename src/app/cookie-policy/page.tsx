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
          heading: "About cookies and the law",
          blocks: [
            {
              type: "p",
              text: "Cookies are primarily regulated in the UK by the Privacy and Electronic Communications Regulations 2003 (PECR), alongside the UK GDPR where a cookie processes personal data.",
            },
          ],
        },
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
              text: "We use cookies to make our website function correctly and — only with your consent — to understand how our website is used and to support our marketing. Non-essential cookies are not set until you accept them via our cookie banner.",
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
                "Analytics and performance cookies — help us understand how visitors use our site so we can improve it (for example, Google Analytics). These are set only with your consent.",
                "Marketing and targeting cookies — used to measure and improve our advertising and to show relevant content (for example, Meta and TikTok pixels and Google Ads). These are set only with your consent.",
              ],
            },
            { type: "p", text: "The table below sets out the cookies used on our website:" },
            {
              type: "table",
              head: ["Category", "Example cookie / provider", "Purpose", "Duration"],
              rows: [
                ["Strictly necessary", "cookie_consent", "Remembers your cookie choices", "12 months"],
                [
                  "Analytics and performance",
                  "Google Analytics (_ga, _ga_*)",
                  "Understands how visitors use the site so we can improve it",
                  "Up to 24 months",
                ],
                [
                  "Marketing and targeting",
                  "Meta Pixel (_fbp), TikTok Pixel (ttclid/_ttp), Google Ads conversion cookies",
                  "Measures and improves advertising, shows relevant content",
                  "Up to 24 months (varies by provider)",
                ],
              ],
            },
          ],
        },
        {
          heading: "Consent and managing your preferences",
          blocks: [
            {
              type: "p",
              text: "When you first visit our website, our cookie banner lets you accept or decline non-essential cookies. Analytics and marketing technologies load only after you accept.",
            },
            {
              type: "p",
              text: "You can change or withdraw your consent at any time using the “Manage cookie preferences” link in our website footer, or by clearing cookies for this site or contacting us.",
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
              text: "Cookies may be “session” cookies, which are deleted when you close your browser, or “persistent” cookies, which remain on your device for a set period or until you delete them. The duration varies by cookie and provider, as set out in the table above.",
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
