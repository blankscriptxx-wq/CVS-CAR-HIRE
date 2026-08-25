import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryPanel } from "@/components/EnquiryPanel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StickyActionBar } from "@/components/StickyActionBar";
import { CallLink, LiveChatButton } from "@/components/ActionLinks";
import { PhoneIcon, WhatsAppIcon, InstagramIcon } from "@/components/ui/Icons";
import { siteConfig, phoneDisplay } from "@/lib/siteConfig";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact CVS Car Hire | Speak to Our Team",
  description:
    "Contact CVS Car Hire in Birmingham. Start a live chat, call our team or submit a quick enquiry. We're here to help you find the right car.",
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
              <WhatsAppIcon className="h-6 w-6 shrink-0 text-champagne" />
              <span>
                <span className="block font-display text-xl text-warm-white">WhatsApp</span>
                <span className="text-sm text-silver">Message our team with your enquiry</span>
              </span>
            </LiveChatButton>
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

          <div className="mt-8 grid gap-8 border-t border-line pt-6 text-sm text-silver sm:grid-cols-2">
            <div>
              <h2 className="eyebrow">Visit or write to us</h2>
              <address className="mt-3 not-italic">
                <p className="text-warm-white">CVS Car Hire</p>
                <p className="mt-1">{siteConfig.address.streetAddress}</p>
                <p>
                  {siteConfig.address.locality}, {siteConfig.address.region}
                </p>
                <p>{siteConfig.address.postalCode}</p>
                <p className="mt-3">
                  <a href={`mailto:${siteConfig.email}`} className="link-underline text-warm-white">
                    {siteConfig.email}
                  </a>
                </p>
              </address>
            </div>
            <div>
              <h2 className="eyebrow">Opening hours</h2>
              <dl className="mt-3 space-y-1">
                {siteConfig.openingHours.map((h) => (
                  <div key={h.days.join()} className="flex justify-between gap-4">
                    <dt>
                      {h.days[0].slice(0, 3)}
                      {h.days.length > 1 ? `–${h.days[h.days.length - 1].slice(0, 3)}` : ""}
                    </dt>
                    <dd className="text-warm-white">
                      {h.opens}–{h.closes}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <p className="mt-6 text-xs text-silver/70">
            Established {siteConfig.foundedYear} · BVRLA member · Nationwide UK delivery available,
            subject to vehicle and location. {siteConfig.legalName} (trading as {siteConfig.tradingName}),
            company no. {siteConfig.companyNumber}.
          </p>
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
