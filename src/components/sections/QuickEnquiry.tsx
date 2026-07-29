import { EnquiryPanel } from "@/components/EnquiryPanel";
import { Reveal } from "@/components/ui/Reveal";
import { LiveChatButton, CallLink } from "@/components/ActionLinks";
import { ChatIcon, PhoneIcon } from "@/components/ui/Icons";
import { phoneDisplay } from "@/lib/siteConfig";

/** Quick-enquiry band that partially overlaps the hero on larger screens. */
export function QuickEnquiry() {
  return (
    <section
      id="check-availability"
      className="relative z-20 scroll-mt-24 border-t border-line bg-black md:-mt-24 md:border-t-0"
    >
      <div className="shell grid gap-10 py-16 md:grid-cols-[1fr_1.1fr] md:gap-14 md:py-20">
        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="eyebrow">Start the Conversation</span>
            <h2 className="mt-4 text-display-sm font-display text-warm-white">
              Two taps from your&nbsp;perfect car.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-silver">
              Share a few details and we&rsquo;ll confirm availability and recommend the right
              vehicle &mdash; or skip the form and message us directly.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <LiveChatButton className="inline-flex min-h-[48px] items-center justify-center gap-3 border border-line px-6 text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne sm:justify-start">
                <ChatIcon className="h-4 w-4 text-champagne" /> Chat with us
              </LiveChatButton>
              <CallLink
                context={{ source: "home-quick-enquiry" }}
                className="inline-flex min-h-[48px] items-center justify-center gap-3 border border-line px-6 text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne sm:justify-start"
              >
                <PhoneIcon className="h-4 w-4 text-champagne" /> {phoneDisplay}
              </CallLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <EnquiryPanel />
        </Reveal>
      </div>
    </section>
  );
}
