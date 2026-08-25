"use client";

import type { ReactNode } from "react";
import { phoneHref, phoneDisplay, siteConfig } from "@/lib/siteConfig";
import { whatsappLink, defaultWhatsAppMessage } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

/** Open WhatsApp with a pre-filled message (all communication runs via WhatsApp). */
export function openWhatsApp(message?: string, context?: Record<string, string>) {
  track("click_whatsapp", context);
  if (typeof window !== "undefined") {
    window.open(whatsappLink(message ?? defaultWhatsAppMessage), "_blank", "noopener");
  }
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

/**
 * WhatsApp button — opens WhatsApp with a pre-filled, page-aware message.
 * (Named LiveChatButton for backwards compatibility with existing call sites.)
 */
export function LiveChatButton({
  children,
  className,
  context,
  message,
}: {
  children: ReactNode;
  className?: string;
  context?: Record<string, string>;
  message?: string;
}) {
  return (
    <a
      href={whatsappLink(message ?? defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track("click_whatsapp", context)}
    >
      {children}
    </a>
  );
}

export { phoneDisplay, siteConfig };
