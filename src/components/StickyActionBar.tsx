"use client";

import { WhatsAppLink, CallLink, LiveChatButton } from "@/components/ActionLinks";
import { PhoneIcon, WhatsAppIcon, ChatIcon, ArrowRight } from "@/components/ui/Icons";
import Link from "next/link";

/**
 * Sticky mobile action bar — Live Chat · WhatsApp · Call.
 * Hidden on desktop. On vehicle pages, pass a `checkAvailabilityHref` and a
 * `whatsappMessage` to prioritise Check Availability + WhatsApp per the brief.
 */
export function StickyActionBar({
  whatsappMessage,
  checkAvailabilityHref,
  context,
}: {
  whatsappMessage?: string;
  checkAvailabilityHref?: string;
  context?: Record<string, string>;
}) {
  // Vehicle-page variant: Check Availability + WhatsApp emphasised.
  if (checkAvailabilityHref) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-line bg-black/95 backdrop-blur md:hidden">
        <Link
          href={checkAvailabilityHref}
          className="flex min-h-[56px] items-center justify-center gap-2 bg-champagne text-black text-xs font-medium uppercase tracking-wide2"
        >
          Check Availability <ArrowRight className="h-4 w-4" />
        </Link>
        <WhatsAppLink
          message={whatsappMessage}
          context={context}
          className="flex min-h-[56px] items-center justify-center gap-2 text-warm-white text-xs font-medium uppercase tracking-wide2"
        >
          <WhatsAppIcon className="h-5 w-5 text-champagne" /> WhatsApp
        </WhatsAppLink>
      </div>
    );
  }

  // Default: Live Chat · WhatsApp · Call.
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-px border-t border-line bg-black/95 backdrop-blur md:hidden">
      <LiveChatButton
        context={context}
        className="flex min-h-[56px] flex-col items-center justify-center gap-1 text-warm-white"
      >
        <ChatIcon className="h-5 w-5 text-champagne" />
        <span className="text-[10px] uppercase tracking-wide2">Live Chat</span>
      </LiveChatButton>
      <WhatsAppLink
        message={whatsappMessage}
        context={context}
        className="flex min-h-[56px] flex-col items-center justify-center gap-1 text-warm-white"
      >
        <WhatsAppIcon className="h-5 w-5 text-champagne" />
        <span className="text-[10px] uppercase tracking-wide2">WhatsApp</span>
      </WhatsAppLink>
      <CallLink
        context={context}
        className="flex min-h-[56px] flex-col items-center justify-center gap-1 text-warm-white"
      >
        <PhoneIcon className="h-5 w-5 text-champagne" />
        <span className="text-[10px] uppercase tracking-wide2">Call</span>
      </CallLink>
    </div>
  );
}
