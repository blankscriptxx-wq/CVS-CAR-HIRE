import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryPanel } from "@/components/EnquiryPanel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StickyActionBar } from "@/components/StickyActionBar";
import { WhatsAppLink, CallLink, LiveChatButton } from "@/components/ActionLinks";
import { WhatsAppIcon, PhoneIcon, ChatIcon, InstagramIcon } from "@/components/ui/Icons";
import { siteConfig, phoneDisplay } from "@/lib/siteConfig";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact CVS Car Hire | Speak to Our Team",
  description:
    "Contact CVS Car Hire in Birmingham. Start a live chat, message us on WhatsApp, call our team or submit a quick enquiry. We're here to help you find the right car.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Speak to Our Team"
        title={<>Let&rsquo;s talk.</>}
        intro="However you prefer to reach us, we're ready to help — recommend the right vehicle, confirm availability and answer any questions."
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />

      <section className="shell grid gap-12 py-16 lg:grid-cols-2 md:py-20">
        {/* Contact methods */}
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 text-display-sm font-display text-warm-white">Ways to reach us.</h2>
          <div className="mt-8 space-y-3">
            <LiveChatButton className="flex w-full items-center gap-4 border border-line p-5 text-left hover:border-champagne">
              <ChatIcon className="h-6 w-6 shrink-0 text-champagne" />
              <span>
                <span className="block font-display text-xl text-warm-white">Live Chat</span>
                <span className="text-sm text-silver">Chat with our team in real time</span>
              </span>
            </LiveChatButton>
            <WhatsAppLink
              context={{ page: "contact" }}
              className="flex w-full items-center gap-4 border border-line p-5 text-left hover:border-champagne"
            >
              <WhatsAppIcon className="h-6 w-6 shrink-0 text-champagne" />
              <span>
                <span className="block font-display text-xl text-warm-white">WhatsApp</span>
                <span className="text-sm text-silver">Message us anytime</span>
              </span>
            </WhatsAppLink>
            <CallLink
              context={{ page: "contact" }}
              className="flex w-full items-center gap-4 border border-line p-5 text-left hover:border-champagne"
            >
              <PhoneIcon className="h-6 w-6 shrink-0 text-champagne" />
              <span>
                <span className="block font-display text-xl text-warm-white">{phoneDisplay}</span>
                <span className="text-sm text-silver">Speak to us directly</span>
              </span>
            </CallLink>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center gap-4 border border-line p-5 text-left hover:border-champagne"
            >
              <InstagramIcon className="h-6 w-6 shrink-0 text-champagne" />
              <span>
                <span className="block font-display text-xl text-warm-white">
                  {siteConfig.social.instagramHandle}
                </span>
                <span className="text-sm text-silver">See the latest from our fleet</span>
              </span>
            </a>
          </div>

          <div className="mt-8 border-t border-line pt-6 text-sm text-silver">
            <p className="text-warm-white">CVS Car Hire</p>
            <p className="mt-1">
              {siteConfig.address.locality}, {siteConfig.address.region}, {siteConfig.address.country}
            </p>
            <p className="mt-3 text-xs">
              Established {siteConfig.foundedYear} · BVRLA member · Nationwide UK delivery available,
              subject to vehicle and location.
            </p>
          </div>
        </Reveal>

        {/* Enquiry form */}
        <div id="enquire" className="scroll-mt-24">
          <Reveal delay={0.1}>
            <EnquiryPanel />
          </Reveal>
        </div>
      </section>

      <StickyActionBar context={{ page: "contact" }} />
    </>
  );
}
