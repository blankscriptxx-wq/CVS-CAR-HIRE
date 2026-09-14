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

/**
 * Open the Aniro live-chat panel. The widget exposes no public API, so we
 * trigger the launcher button (`button.oa-btn`) it appends to <body>. If the
 * panel is already open we leave it; if the widget hasn't loaded yet (e.g. the
 * domain isn't allow-listed in Aniro) the call is a safe no-op.
 */
export function openLiveChat(context?: Record<string, string>) {
  track("open_live_chat", context);
  if (typeof document === "undefined") return;
  const panel = document.querySelector(".oa-panel");
  if (panel?.classList.contains("open")) return;
  const launcher = document.querySelector<HTMLButtonElement>("button.oa-btn");
  launcher?.click();
}

/** Live-chat button — opens the on-site Aniro chat panel. */
export function ChatButton({
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
