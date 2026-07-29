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
      updated="29 July 2026"
      intro="These Terms & Conditions govern your use of the CVS Hire website and set out the general basis on which we provide our vehicle hire services. The detailed contractual terms for any hire are set out in the separate hire agreement you enter into with us at the point of booking."
      sections={[
        {
          heading: "About us and these terms",
          blocks: [
            {
              type: "p",
              text: "This website is operated by Central Vehicle Solutions Ltd, trading as CVS Hire (“CVS Hire”, “we”, “us”, “our”), a company registered in England and Wales under company number 09119432, with its registered office at 70 Glover Street, Birmingham, B9 4EN.",
            },
            {
              type: "p",
              text: "By accessing or using our website you agree to these Terms & Conditions. If you do not agree, please do not use the website. Nothing on this website constitutes a binding offer of hire; all hires are subject to availability, eligibility and a separate hire agreement.",
            },
          ],
        },
        {
          heading: "Using our website",
          blocks: [
            {
              type: "p",
              text: "You may use our website for lawful purposes only. You must not misuse the website by knowingly introducing malicious code, attempting to gain unauthorised access, or using it in any way that is unlawful, fraudulent, or harmful, or that could damage or impair the website or its availability to others.",
            },
          ],
        },
        {
          heading: "Intellectual property",
          blocks: [
            {
              type: "p",
              text: "All content on this website, including text, images, graphics, logos and design, is owned by or licensed to CVS Hire and is protected by intellectual property laws. You may view and print content for your own personal, non-commercial use. You must not reproduce, distribute or otherwise use our content without our prior written permission.",
            },
          ],
        },
        {
          heading: "Enquiries, quotes and availability",
          blocks: [
            {
              type: "p",
              text: "Prices shown on the website are indicative “from” guides and are subject to confirmation. Availability, requirements and final pricing are confirmed at the point of enquiry. Quotes provided through our website or chat are estimates only and do not constitute a binding offer until confirmed by us in writing as part of a hire agreement.",
            },
          ],
        },
        {
          heading: "Eligibility and requirements",
          blocks: [
            {
              type: "p",
              text: "Hires are subject to eligibility requirements that vary by vehicle. These may include a minimum driver age, a full and valid driving licence held for a minimum period, proof of identity and address, a security deposit, and satisfactory insurance arrangements. The specific requirements applicable to your hire will be confirmed at the point of booking and set out in your hire agreement.",
            },
          ],
        },
        {
          heading: "Bookings, deposits and payment",
          blocks: [
            {
              type: "p",
              text: "A booking is only confirmed once we have accepted it and you have entered into a hire agreement with us. A security deposit and payment may be required in advance. The amount of any deposit, the payment terms, and what the deposit covers will be set out in your hire agreement.",
            },
          ],
        },
        {
          heading: "Delivery and collection",
          blocks: [
            {
              type: "p",
              text: "We offer nationwide UK delivery and collection subject to vehicle and location. Where delivery or collection is provided, any charges will be quoted to you individually and confirmed before your hire.",
            },
          ],
        },
        {
          heading: "Cancellations and changes",
          blocks: [
            {
              type: "p",
              text: "If you need to cancel or change a booking, please contact us as soon as possible. The terms that apply to cancellations, amendments and any associated charges are set out in your hire agreement. Nothing in these terms affects your statutory rights as a consumer.",
            },
          ],
        },
        {
          heading: "Your responsibilities during hire",
          blocks: [
            {
              type: "p",
              text: "During any hire you are responsible for taking reasonable care of the vehicle, using it lawfully and in accordance with your hire agreement, and for any fines, penalties or charges incurred during the hire period (such as parking, congestion or clean-air charges and traffic offences), except where caused by us. Full details of your responsibilities are set out in your hire agreement.",
            },
          ],
        },
        {
          heading: "Our liability",
          blocks: [
            {
              type: "p",
              text: "Our website is provided on an “as is” and “as available” basis. While we take care to keep the information on it accurate and up to date, we do not guarantee that it is complete, current or error-free, and we are not liable for any reliance placed on it.",
            },
            {
              type: "p",
              text: "Nothing in these terms excludes or limits our liability where it would be unlawful to do so, including liability for death or personal injury caused by our negligence, or for fraud or fraudulent misrepresentation. Subject to that, we are not liable for any loss or damage that is not reasonably foreseeable. These terms do not affect your statutory rights as a consumer.",
            },
          ],
        },
        {
          heading: "Third-party links",
          blocks: [
            {
              type: "p",
              text: "Our website may contain links to third-party websites. These links are provided for your convenience only; we have no control over the content of those sites and accept no responsibility for them or for any loss arising from your use of them.",
            },
          ],
        },
        {
          heading: "BVRLA membership and complaints",
          blocks: [
            {
              type: "p",
              text: "CVS Hire is a member of the BVRLA (British Vehicle Rental and Leasing Association) and follows its code of conduct. We aim to provide an excellent service. If something is not right, please contact us and we will do our best to resolve it promptly. If a complaint cannot be resolved between us, it may be referred to the BVRLA’s conciliation service.",
            },
          ],
        },
        {
          heading: "Governing law and jurisdiction",
          blocks: [
            {
              type: "p",
              text: "These Terms & Conditions and any dispute or claim arising out of or in connection with them are governed by and construed in accordance with the law of England and Wales, and are subject to the non-exclusive jurisdiction of the courts of England and Wales.",
            },
          ],
        },
        {
          heading: "Changes to these terms",
          blocks: [
            {
              type: "p",
              text: "We may update these Terms & Conditions from time to time. The version that applies is the one published on this website at the time you use it, shown by the “Last updated” date above.",
            },
          ],
        },
        {
          heading: "Contact us",
          blocks: [
            {
              type: "p",
              text: "If you have any questions about these Terms & Conditions, please contact Central Vehicle Solutions Ltd t/a CVS Hire at 70 Glover Street, Birmingham, B9 4EN, by email at info@cvshire.co.uk, or by telephone on 0121 572 3422.",
            },
          ],
        },
      ]}
    />
  );
}
