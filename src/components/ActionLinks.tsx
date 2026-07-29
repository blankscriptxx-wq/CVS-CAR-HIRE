"use client";

import type { ReactNode } from "react";
import { phoneHref, phoneDisplay, siteConfig } from "@/lib/siteConfig";
import { openAniro, sendToAniro } from "@/lib/aniro";
import { track } from "@/lib/analytics";

/** Opens the Aniro chat widget. */
export function openLiveChat(context?: Record<string, string>) {
  track("open_live_chat", context);
  openAniro();
}

/** Opens Aniro and passes a composed lead/vehicle message into the chat. */
export function chatWithDetails(message: string, context?: Record<string, string>) {
  track("submit_enquiry", context);
  return sendToAniro(message);
}

export function CallLink({
  children,
  className,
  context,
}: {
  children?: ReactNode;
  className?: string;
  context?: Record<string, string>;
}) {
  return (
    <a href={phoneHref} className={className} onClick={() => track("click_call", context)}>
      {children ?? phoneDisplay}
    </a>
  );
}

/** Chat button — opens the Aniro widget. */
export function LiveChatButton({
  children,
  className,
  context,
}: {
  children: ReactNode;
  className?: string;
  context?: Record<string, string>;
}) {
  return (
    <button type="button" className={className} onClick={() => openLiveChat(context)}>
      {children}
    </button>
  );
}

export { phoneDisplay, siteConfig };
