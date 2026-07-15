import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { LiveChatButton, WhatsAppLink, CallLink } from "@/components/ActionLinks";
import { ChatIcon, WhatsAppIcon, PhoneIcon } from "@/components/ui/Icons";
import { phoneDisplay } from "@/lib/siteConfig";

/** Dramatic full-width conversion section. */
export function FinalCTA({
  heading = "Your Next Arrival Starts Here.",
  copy = "Tell us what you need. Our team will recommend the right vehicle and confirm availability.",
  whatsappMessage,
}: {
  heading?: string;
  copy?: string;
  whatsappMessage?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0">
        <Media
          asset={{
            src: "/images/home/final-cta.jpg",
            alt: "A luxury vehicle on a city street at night",
            placeholder: false,
          }}
          plain
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="shell relative z-10 flex flex-col items-center py-24 text-center md:py-32">
        <Reveal className="flex flex-col items-center">
          <h2 className="text-display-sm max-w-3xl font-display text-warm-white">{heading}</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-silver">{copy}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <LiveChatButton className="inline-flex min-h-[52px] items-center justify-center gap-2 bg-champagne px-8 text-xs font-medium uppercase tracking-wide2 text-black hover:bg-champagne-soft">
              <ChatIcon className="h-4 w-4" /> Start Live Chat
            </LiveChatButton>
            <WhatsAppLink
              message={whatsappMessage}
              context={{ source: "final-cta" }}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 border border-line px-8 text-xs uppercase tracking-wide2 text-warm-white hover:border-champagne"
            >
              <WhatsAppIcon className="h-4 w-4 text-champagne" /> Chat on WhatsApp
            </WhatsAppLink>
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
