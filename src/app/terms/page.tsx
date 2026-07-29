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
            {
              type: "p",
              text: "You must be at least 18 years old to use this website to make an enquiry or booking. By using this website to make an enquiry, you confirm that you are at least 18 years old.",
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
            {
              type: "p",
              text: "We do not guarantee that our website will be secure or free from bugs or viruses. You are responsible for configuring your own information technology, computer programmes and platform to access our website, and you should use your own virus protection software.",
            },
          ],
        },
        {
          heading: "Availability of our website",
          blocks: [
            {
              type: "p",
              text: "We do not guarantee that our website, or any content on it, will always be available or uninterrupted. We may suspend, withdraw, discontinue or restrict access to all or part of our website for business or operational reasons, including maintenance, at any time and without notice.",
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
            {
              type: "p",
              text: "“CVS Hire” and our logo are trading names and/or trademarks of Central Vehicle Solutions Ltd. You must not use them without our prior written permission.",
            },
          ],
        },
        {
          heading: "Enquiries, quotes and availability",
          blocks: [
            {
              type: "p",
              text: "Prices shown on the website are indicative “from” guides and are subject to confirmation. Unless stated otherwise, prices are shown in pounds sterling (GBP) and are inclusive of VAT at the applicable rate. Availability, requirements and final pricing are confirmed at the point of enquiry. Quotes provided through our website or chat are estimates only and do not constitute a binding offer until confirmed by us in writing as part of a hire agreement.",
            },
          ],
        },
        {
          heading: "Eligibility and requirements",
          blocks: [
            {
              type: "p",
              text: "Hires are subject to eligibility requirements that vary by vehicle. These may include a minimum driver age, a full and valid driving licence held for a minimum period, proof of identity and address, a valid DVLA licence check, a security deposit, satisfactory insurance arrangements and, for long-term hires, a satisfactory credit check. The specific requirements applicable to your hire will be confirmed at the point of booking and set out in your hire agreement.",
            },
          ],
        },
        {
          heading: "Our right to decline a booking",
          blocks: [
            {
              type: "p",
              text: "We may, acting reasonably, decline any enquiry or booking, including where our eligibility, identity, DVLA licence, insurance, credit or fraud-prevention checks are not satisfied, where a suitable vehicle is unavailable, or where we reasonably believe accepting the booking would put our vehicles, staff or other customers at risk. We will not decline a booking on any basis that would be unlawful or discriminatory under the Equality Act 2010.",
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
              text: "During any hire you are responsible for taking reasonable care of the vehicle, using it lawfully and in accordance with your hire agreement, and for any fines, penalties or charges incurred during the hire period (such as parking, congestion or clean-air charges and traffic offences), except where caused by us. Where a vehicle is fitted with telematics/GPS tracking, this may be used to help verify mileage, usage and location in connection with your hire agreement. Full details of your responsibilities are set out in your hire agreement.",
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
              text: "Nothing in these terms excludes or limits our liability where it would be unlawful to do so, including liability for death or personal injury caused by our negligence, or for fraud or fraudulent misrepresentation. These terms do not affect your statutory rights as a consumer.",
            },
            {
              type: "p",
              text: "Subject to the paragraph above, and to the fullest extent permitted by law, we are not liable for any indirect or consequential loss, or for any loss of profits, business, contracts, anticipated savings or data, whether arising in contract, tort (including negligence) or otherwise, arising out of or in connection with your use of this website (as distinct from your separate hire agreement, which contains its own liability provisions).",
            },
          ],
        },
        {
          heading: "Indemnity",
          blocks: [
            {
              type: "p",
              text: "You agree to indemnify and hold CVS Hire harmless against any claims, losses, damages, costs and reasonable expenses (including legal fees) arising out of your misuse of this website or your breach of these Terms & Conditions. This indemnity does not apply to the extent any claim, loss or damage is caused by our breach of these terms, negligence or wilful default.",
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
              text: "CVS Hire is a member of the BVRLA (British Vehicle Rental and Leasing Association) and follows its code of conduct. We aim to provide an excellent service. If something is not right, please contact us and we will do our best to resolve it promptly.",
            },
            {
              type: "p",
              text: "If a complaint cannot be resolved between us, it may be referred to the BVRLA’s conciliation service, which is a certified alternative dispute resolution (ADR) body. Further information is available at bvrla.co.uk.",
            },
          ],
        },
        {
          heading: "General",
          blocks: [
            {
              type: "ul",
              items: [
                "Force majeure — We will not be liable for any failure or delay in performing our obligations under these terms where this is caused by circumstances beyond our reasonable control.",
                "Severability — If any provision of these terms is found to be unlawful, invalid or unenforceable, that provision will be treated as removed and the remaining provisions will continue in full force and effect.",
                "No waiver — Our failure to enforce any provision of these terms will not be treated as a waiver of our right to enforce it later.",
                "Assignment — We may transfer our rights and obligations under these terms to another organisation, and will tell you if we do. You may not transfer your rights or obligations under these terms without our written consent.",
                "Third-party rights — A person who is not a party to these terms has no right under the Contracts (Rights of Third Parties) Act 1999 to enforce any of them.",
                "Entire agreement — These terms, together with our Privacy Policy and Cookie Policy and, where applicable, your hire agreement, form the entire agreement between you and us in relation to your use of this website.",
                "Governing language — These terms are drawn up in the English language. If we provide a translation, the English-language version will prevail in the event of any conflict.",
              ],
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
