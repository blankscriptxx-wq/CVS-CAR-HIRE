"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Loads the Aniro.ai live-chat widget site-wide.
 *
 * The widget reads its configuration (the workspace key) from the `data-key`
 * attribute on its own <script> tag, so we inject the tag directly to guarantee
 * the attribute is present when widget.js initialises — rather than relying on
 * next/script attribute forwarding.
 *
 * What the widget handles itself (configured in the Aniro dashboard, not here):
 *  - returning-visitor recognition and persistent chat history/memory, kept
 *    client-side against the Aniro workspace so a customer who leaves and comes
 *    back to the site resumes the same conversation;
 *  - lead / data capture (name, contact, transcript) and any automated rules.
 *
 * The allowed-domains restriction (cvshire.co.uk) is enforced Aniro-side.
 */
export function ChatWidget() {
  useEffect(() => {
    const key = siteConfig.aniro.widgetKey;
    if (!key) return;
    // Guard against double-injection across client navigations / fast refresh.
    if (document.querySelector("script[data-aniro-widget]")) return;

    const s = document.createElement("script");
    s.src = "https://www.aniro.ai/widget.js";
    s.async = true;
    s.setAttribute("data-key", key);
    s.setAttribute("data-aniro-widget", "");
    document.body.appendChild(s);
  }, []);

  return null;
}
