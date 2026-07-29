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
      updated="29 July 2026"
      intro="This Privacy Policy explains how CVS Hire collects, uses, shares and protects your personal information when you enquire with us, hire a vehicle from us, or use our website. It also sets out your rights under UK data protection law. Please read it alongside our Cookie Policy and, where you proceed to hire a vehicle, your hire agreement."
      sections={[
        {
          heading: "Who we are",
          blocks: [
            {
              type: "p",
              text: "This website is operated by Central Vehicle Solutions Ltd, trading as CVS Hire (“CVS Hire”, “we”, “us”, “our”), a company registered in England and Wales under company number 09119432, with its registered office at 70 Glover Street, Birmingham, B9 4EN.",
            },
            {
              type: "p",
              text: "For the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, CVS Hire is the “data controller” responsible for your personal information. If you have any questions about this policy or how we handle your data, contact us at info@cvshire.co.uk or 0121 572 3422.",
            },
          ],
        },
        {
          heading: "The information we collect",
          blocks: [
            { type: "p", text: "We may collect and process the following categories of personal information:" },
            {
              type: "ul",
              items: [
                "Identity and contact details — your name, telephone number and email address.",
                "Enquiry details — the vehicle or service you are interested in, dates, locations, occasion, journey details and any special requests.",
                "Booking and driver details — where you proceed to hire, information required for the hire agreement, which may include your date of birth or age, driving licence details, proof of identity and address, and payment-related information.",
                "Driving licence and eligibility checks — where you proceed to hire, we check your driving licence details directly with the DVLA, using its official “View or Share Your Driving Licence” service, to verify your entitlement to drive and any relevant endorsements before releasing a vehicle to you.",
                "Financial and fraud-prevention information — for short-term hires, we do not carry out credit checks, although we and our payment providers may still carry out identity and fraud-prevention checks where a security deposit or credit-based payment method is used. For long-term hires, we may in addition carry out a credit check using a credit reference agency as part of our standard eligibility process. If you provide false or inaccurate information and fraud is identified or suspected, we may pass details to fraud prevention agencies, and this may affect your ability to obtain credit or hire vehicles from us or elsewhere in future.",
                "Vehicle telematics and tracking data — most of our vehicles are fitted with telematics/GPS tracking technology. Where the vehicle you hire has this fitted, we collect location, speed, mileage and usage data connected to the vehicle during the hire period, for safety, security, vehicle recovery, insurance and fleet management purposes.",
                "CCTV — we operate CCTV at our premises. If you visit us, your image may be captured by CCTV operated for the safety and security of our staff, customers, vehicles and site.",
                "Communications — the content of your messages to us via our website chat, contact forms, email, telephone or social media.",
                "Technical and usage data — your IP address, device and browser type, and information about how you use our website, collected through cookies and similar technologies (see our Cookie Policy).",
                "Marketing preferences — your choices about receiving marketing from us.",
              ],
            },
            {
              type: "p",
              text: "We do not intentionally collect special category data (such as health information). Please do not send us such information unless it is strictly necessary for your hire and we have asked for it.",
            },
            {
              type: "p",
              text: "Where we need to collect personal information by law, or under the terms of a hire agreement, and you do not provide that information when requested, we may not be able to proceed with your enquiry or hire.",
            },
          ],
        },
        {
          heading: "How we collect your information",
          blocks: [
            {
              type: "ul",
              items: [
                "Directly from you — when you complete an enquiry or quote form, start a chat, call or email us, or enter into a hire agreement.",
                "Automatically — through cookies and similar technologies when you use our website, subject to your consent.",
                "From third parties — for example, referral information from the website or platform that directed you to us, from our service providers, from the DVLA when we check your driving licence, and, for long-term hires, from credit reference agencies.",
              ],
            },
          ],
        },
        {
          heading: "How we use your information and our lawful bases",
          blocks: [
            {
              type: "p",
              text: "Under UK data protection law we must have a lawful basis for processing your personal information. We use your information as follows:",
            },
            {
              type: "ul",
              items: [
                "To respond to your enquiry, prepare a quote and arrange your hire — on the basis of taking steps at your request prior to entering a contract, and performing our contract with you.",
                "To provide customer support and manage our relationship with you — on the basis of our legitimate interests in running our business and serving our customers.",
                "To verify your identity and driving eligibility, including DVLA licence checks, assess risk and prevent fraud, and, for long-term hires, carry out credit checks — on the basis of performing our contract with you, complying with our legal and regulatory obligations, and our legitimate interests in managing risk to our business and our fleet.",
                "To operate, manage, secure and, where necessary, recover our vehicles using the telematics/GPS tracking fitted to most of our fleet, and for insurance purposes — on the basis of our legitimate interests in protecting our vehicles and our contract with you.",
                "To operate, improve and secure our website and understand how it is used — analytics processing is carried out only with your consent via our cookie banner.",
                "To send you marketing about our vehicles and services — only where you have given consent, or where permitted under the “soft opt-in” for existing customers; you can opt out at any time.",
                "To comply with our legal and regulatory obligations, including accounting, tax and BVRLA membership requirements — on the basis of compliance with a legal obligation.",
                "To protect our business and customers, prevent fraud and enforce our terms — on the basis of our legitimate interests.",
              ],
            },
            {
              type: "p",
              text: "Automated decision-making — we do not use any processing, including profiling, that involves solely automated decision-making and that produces legal effects concerning you or similarly significantly affects you. Where we carry out a credit check for a long-term hire, the outcome is reviewed by a member of our team before any decision is made about your booking.",
            },
          ],
        },
        {
          heading: "Marketing",
          blocks: [
            {
              type: "p",
              text: "We will only send you marketing communications where you have consented, or where the law otherwise permits. You can withdraw your consent or opt out of marketing at any time by contacting us at info@cvshire.co.uk or by using the unsubscribe option in any marketing email. Opting out of marketing will not affect any messages we send you about a current enquiry or hire.",
            },
          ],
        },
        {
          heading: "Sharing your information",
          blocks: [
            {
              type: "p",
              text: "We do not sell your personal information. We may share it with the following categories of recipient, only as necessary and under appropriate safeguards:",
            },
            {
              type: "ul",
              items: [
                "Our website chat provider (Aniro), which processes your messages and contact details so we can manage your conversation and respond to you.",
                "Website hosting and IT providers who host and support our website.",
                "Analytics and advertising providers (such as Google, Meta and TikTok) where you have consented to the relevant cookies.",
                "Payment and financial service providers where applicable to a booking.",
                "The DVLA, when we check your driving licence as part of the hire process.",
                "For long-term hires, credit reference and fraud prevention agencies.",
                "Professional advisers such as our accountants, insurers and legal advisers.",
                "The BVRLA, where necessary to help resolve a complaint referred to their conciliation service.",
                "Regulators, law enforcement or other authorities where we are required to do so by law, for example to share CCTV footage in connection with the prevention or detection of crime, or to establish, exercise or defend legal claims.",
              ],
            },
            {
              type: "p",
              text: "Where we use service providers who process personal data on our behalf, we put in place contracts requiring them to keep your information secure and to use it only for the purposes we specify.",
            },
          ],
        },
        {
          heading: "International transfers",
          blocks: [
            {
              type: "p",
              text: "Some of our service providers are based outside the United Kingdom. Where your personal information is transferred outside the UK, we ensure a similar degree of protection by relying on an approved adequacy decision, the UK International Data Transfer Agreement or Addendum, or other safeguards permitted by law.",
            },
          ],
        },
        {
          heading: "How long we keep your information",
          blocks: [
            {
              type: "p",
              text: "We keep your personal information only for as long as necessary for the purposes set out in this policy. Our general approach is:",
            },
            {
              type: "ul",
              items: [
                "Enquiries that do not proceed to a hire — retained for up to 24 months from your last contact with us, after which they are securely deleted or anonymised.",
                "Hire agreements and related records, including driver, insurance, credit-check and payment records — retained for up to 7 years from the end of the hire, to meet our legal, insurance, tax and BVRLA membership obligations.",
                "Financial records — generally retained for up to 6 years, in line with HMRC requirements.",
                "Telematics/GPS data — retained for the duration of the hire, and for up to 12 months afterwards where needed for insurance, safety, billing or legal purposes.",
                "CCTV footage — typically retained for no longer than 30 days, unless needed for an investigation or to establish, exercise or defend a legal claim.",
              ],
            },
            {
              type: "p",
              text: "These periods are a guide and may be extended where a longer period is required by law, by our insurers or the BVRLA, or to establish, exercise or defend legal claims.",
            },
          ],
        },
        {
          heading: "How we protect your information",
          blocks: [
            {
              type: "p",
              text: "We use appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, misuse or alteration. While no method of transmission over the internet is completely secure, we take reasonable steps to keep your information safe.",
            },
          ],
        },
        {
          heading: "Your rights",
          blocks: [
            {
              type: "p",
              text: "Under UK data protection law you have a number of rights in relation to your personal information:",
            },
            {
              type: "ul",
              items: [
                "The right to be informed about how we use your data.",
                "The right of access to the personal data we hold about you.",
                "The right to rectification of inaccurate or incomplete data.",
                "The right to erasure of your data in certain circumstances.",
                "The right to restrict or object to our processing of your data.",
                "The right to data portability in certain circumstances.",
                "The right to withdraw consent at any time, where our processing is based on consent.",
              ],
            },
            {
              type: "p",
              text: "To exercise any of these rights, please contact us at info@cvshire.co.uk. You also have the right to lodge a complaint with the Information Commissioner’s Office (ICO), the UK regulator for data protection, at ico.org.uk or on 0303 123 1113. We would, however, appreciate the chance to address your concerns before you approach the ICO.",
            },
          ],
        },
        {
          heading: "Cookies",
          blocks: [
            {
              type: "p",
              text: "Our website uses cookies and similar technologies. Non-essential cookies are only set with your consent. For full details of the cookies we use and how to manage them, please see our Cookie Policy.",
            },
          ],
        },
        {
          heading: "Children",
          blocks: [
            {
              type: "p",
              text: "Our services and website are not directed at children, and hires are subject to minimum driver-age requirements. We do not knowingly collect personal information from anyone under 18.",
            },
          ],
        },
        {
          heading: "Changes to this policy",
          blocks: [
            {
              type: "p",
              text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last updated” date. Please check back periodically to stay informed.",
            },
          ],
        },
        {
          heading: "Contact us",
          blocks: [
            {
              type: "p",
              text: "If you have any questions about this Privacy Policy or wish to exercise your rights, please contact Central Vehicle Solutions Ltd t/a CVS Hire at 70 Glover Street, Birmingham, B9 4EN, by email at info@cvshire.co.uk, or by telephone on 0121 572 3422.",
            },
          ],
        },
      ]}
    />
  );
}
