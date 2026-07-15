"use client";

import type { ReactNode } from "react";
import { phoneHref, phoneDisplay, siteConfig } from "@/lib/siteConfig";
import { whatsappLink, defaultWhatsAppMessage } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

/** Opens the Respond.io live chat if present; falls back to WhatsApp. */
export function openLiveChat(context?: Record<string, string>) {
  track("open_live_chat", context);
  if (typeof window === "undefined") return;
  // Respond.io exposes a global when configured; try common entry points.
  const w = window as unknown as {
    respondIoWidget?: { open?: () => void };
    RespondIO?: { open?: () => void };
    cvsOpenChat?: () => void;
  };
  if (w.respondIoWidget?.open) return w.respondIoWidget.open();
  if (w.RespondIO?.open) return w.RespondIO.open();
  if (w.cvsOpenChat) return w.cvsOpenChat();
  // Fallback: continue the conversation on WhatsApp.
  window.open(whatsappLink(defaultWhatsAppMessage), "_blank", "noopener");
}

export function WhatsAppLink({
  message,
  children,
  className,
  context,
  ...rest
}: {
  message?: string;
  children: ReactNode;
  className?: string;
  context?: Record<string, string>;
} & Omit<React.ComponentProps<"a">, "href" | "className">) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track("click_whatsapp", context)}
      {...rest}
    >
      {children}
    </a>
  );
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
