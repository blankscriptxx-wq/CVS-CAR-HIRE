"use client";

import { CallLink, LiveChatButton } from "@/components/ActionLinks";
import { PhoneIcon, WhatsAppIcon, ArrowRight } from "@/components/ui/Icons";
import Link from "next/link";

/**
 * Sticky mobile action bar — WhatsApp · Call. Hidden on desktop.
 * On vehicle pages, pass `checkAvailabilityHref` to prioritise Check
 * Availability + Call.
 */
export function StickyActionBar({
  checkAvailabilityHref,
  context,
}: {
  /** Accepted for backwards-compatible call sites; no longer rendered. */
  checkAvailabilityHref?: string;
  context?: Record<string, string>;
}) {
  // Vehicle-page variant: Check Availability + Call.
  if (checkAvailabilityHref) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-line bg-black/95 backdrop-blur md:hidden">
        <Link
          href={checkAvailabilityHref}
          className="flex min-h-[56px] items-center justify-center gap-2 bg-champagne text-black text-xs font-medium uppercase tracking-wide2"
        >
          Check Availability <ArrowRight className="h-4 w-4" />
        </Link>
        <CallLink
          context={context}
          className="flex min-h-[56px] items-center justify-center gap-2 text-warm-white text-xs font-medium uppercase tracking-wide2"
        >
          <PhoneIcon className="h-5 w-5 text-champagne" /> Call
        </CallLink>
      </div>
    );
  }

  // Default: WhatsApp · Call.
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-line bg-black/95 backdrop-blur md:hidden">
      <LiveChatButton
        context={context}
        className="flex min-h-[56px] flex-col items-center justify-center gap-1 text-warm-white"
      >
        <WhatsAppIcon className="h-5 w-5 text-champagne" />
        <span className="text-[10px] uppercase tracking-wide2">WhatsApp</span>
      </LiveChatButton>
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
