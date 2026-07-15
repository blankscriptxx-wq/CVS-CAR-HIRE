"use client";

import Script from "next/script";
import { useEffect } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { captureUtm, track } from "@/lib/analytics";

/**
 * Respond.io live-chat widget loader.
 *
 * The widget id is public (NEXT_PUBLIC_RESPONDIO_WIDGET_ID). Private API keys
 * are NEVER used client-side — server-to-server calls happen in /api/enquiry.
 *
 * When no widget id is configured the component renders nothing, so the site
 * runs cleanly in development. Page/vehicle/UTM context is stashed on window so
 * the chat and enquiry flows can attach it to conversations.
 */
export function RespondWidget() {
  const widgetId = siteConfig.respondio.widgetId;

  useEffect(() => {
    // Make page-aware context available to chat + forms.
    const w = window as unknown as { cvsChatContext?: Record<string, string> };
    w.cvsChatContext = {
      page_url: window.location.href,
      page_path: window.location.pathname,
      ...captureUtm(),
    };
  }, []);

  if (!widgetId) return null;

  return (
    <Script
      id="respondio-widget"
      strategy="lazyOnload"
      src={`https://cdn.respond.io/webchat/widget/widget.js?cId=${widgetId}`}
      onLoad={() => track("open_live_chat", { source: "widget_loaded" })}
    />
  );
}
