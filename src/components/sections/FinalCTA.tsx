import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { LiveChatButton, CallLink } from "@/components/ActionLinks";
import { ChatIcon, PhoneIcon } from "@/components/ui/Icons";
import { phoneDisplay } from "@/lib/siteConfig";

/** Dramatic full-width conversion section. */
export function FinalCTA({
  heading = "Your Next Arrival Starts Here.",
  copy = "Tell us what you need. Our team will recommend the right vehicle and confirm availability.",
}: {
  heading?: string;
  copy?: string;
  /** Accepted for backwards-compatible call sites; no longer used. */
}) {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0">
        <Media
          asset={{
            src: "/images/home/final-cta.jpg",
            alt: "Two Lamborghini Huracáns from the CVS Car Hire fleet",
            placeholder: false,
          }}
          plain
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="shell relative z-10 flex flex-col items-center py-24 text-center md:py-32">
        <Reveal className="flex flex-col items-center">
          <h2 className="text-display-sm max-w-3xl font-display text-warm-white">{heading}</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-silver">{copy}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <LiveChatButton className="inline-flex min-h-[52px] items-center justify-center gap-2 bg-champagne px-8 text-xs font-medium uppercase tracking-wide2 text-black hover:bg-champagne-soft">
              <ChatIcon className="h-4 w-4" /> Chat with us
            </LiveChatButton>
            <CallLink
              context={{ source: "final-cta" }}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 border border-line px-8 text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne"
            >
              <PhoneIcon className="h-4 w-4 text-champagne" /> {phoneDisplay}
            </CallLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
