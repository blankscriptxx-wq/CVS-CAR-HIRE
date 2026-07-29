/**
 * Aniro chat widget control.
 *
 * All chat + enquiry/quote hand-offs go through the Aniro widget (loaded in the
 * root layout). WhatsApp and Respond.io have been removed; Aniro is the single
 * conversational channel.
 *
 * NOTE: Aniro's public widget API method names are not documented to us, so
 * open()/send() try the common patterns and degrade gracefully (open the
 * launcher, stash a prefill the widget can read). If Aniro exposes specific
 * globals (e.g. window.aniro('open') / a sendMessage method), wire them here —
 * this is the single place to update and every button/form will pick it up.
 */

type Callable = (...args: unknown[]) => void;
type Widget = { open?: () => void; sendMessage?: (m: string) => void };

function win(): Record<string, unknown> | null {
  if (typeof window === "undefined") return null;
  return window as unknown as Record<string, unknown>;
}

/** Open the Aniro chat widget. Returns true if a launcher was found/triggered. */
export function openAniro(): boolean {
  const w = win();
  if (!w) return false;
  try {
    if (typeof w.aniro === "function") {
      (w.aniro as Callable)("open");
      return true;
    }
    const aniroObj = w.aniro as Widget | undefined;
    if (aniroObj?.open) {
      aniroObj.open();
      return true;
    }
    const Aniro = w.Aniro as Widget | undefined;
    if (Aniro?.open) {
      Aniro.open();
      return true;
    }
    const AniroWidget = w.AniroWidget as Widget | undefined;
    if (AniroWidget?.open) {
      AniroWidget.open();
      return true;
    }
  } catch {
    /* fall through to DOM launcher */
  }
  const launcher = document.querySelector<HTMLElement>(
    '[id*="aniro" i] button, button[class*="aniro" i], [class*="aniro" i] [role="button"], iframe[src*="aniro" i]'
  );
  if (launcher) {
    launcher.click();
    return true;
  }
  return false;
}

/**
 * Open Aniro and pass a pre-composed message (customer + vehicle/service
 * details) into the conversation. Falls back to stashing the text and opening
 * the widget so the details aren't lost.
 */
export function sendToAniro(message: string): boolean {
  const w = win();
  if (!w) return false;
  try {
    if (typeof w.aniro === "function") {
      const aniroFn = w.aniro as Callable;
      aniroFn("open");
      aniroFn("sendMessage", message);
      return true;
    }
    const Aniro = w.Aniro as Widget | undefined;
    if (Aniro?.sendMessage) {
      Aniro.open?.();
      Aniro.sendMessage(message);
      return true;
    }
    const AniroWidget = w.AniroWidget as Widget | undefined;
    if (AniroWidget?.sendMessage) {
      AniroWidget.open?.();
      AniroWidget.sendMessage(message);
      return true;
    }
  } catch {
    /* fall through */
  }
  try {
    w.__aniroPrefill = message; // widget may read this on open
  } catch {
    /* ignore */
  }
  return openAniro();
}
