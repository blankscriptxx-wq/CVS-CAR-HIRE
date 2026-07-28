import Script from "next/script";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Aniro.ai chat widget loader.
 *
 * Loaded once, site-wide, from the root layout. The widget key is public and
 * env-overridable (NEXT_PUBLIC_ANIRO_WIDGET_KEY). Uses `lazyOnload` so the
 * non-critical third-party script never blocks first paint or interactivity —
 * the chat bubble appears bottom-right shortly after the page is usable.
 *
 * Renders nothing when no key is configured.
 */
export function AniroChat() {
  const key = siteConfig.aniro.widgetKey;
  if (!key) return null;

  return (
    <Script
      id="aniro-widget"
      src="https://www.aniro.ai/widget.js"
      data-key={key}
      strategy="lazyOnload"
    />
  );
}
