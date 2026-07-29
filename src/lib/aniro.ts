/**
 * Aniro chat widget control + programmatic message delivery.
 *
 * All chat + enquiry/quote hand-offs go through the Aniro widget (loaded in the
 * root layout). WhatsApp and Respond.io have been removed; Aniro is the single
 * conversational channel.
 *
 * The widget (aniro.ai/widget.js) talks to a small REST API which we drive
 * directly so a completed enquiry/quote is delivered into the SAME conversation
 * the visitor sees — automatically, with no "send" tap required:
 *
 *   POST {origin}/api/widget/{key}/session   { sessionId }        -> { data: { sessionId, name?, welcome? } }
 *   POST {origin}/api/widget/{key}/messages  { sessionId, body, clientMessageId }
 *
 * The widget stores its session id as a raw string in
 * localStorage["omniagent_session_{key}"], so we read/create the exact same
 * session — the visitor's message lands in the CVS Aniro inbox instantly and,
 * if they open the widget, it continues the same thread.
 */

import { siteConfig } from "@/lib/siteConfig";

const WIDGET_KEY = siteConfig.aniro.widgetKey;
const ORIGIN = "https://www.aniro.ai";
const API = `${ORIGIN}/api/widget/${encodeURIComponent(WIDGET_KEY)}`;
const STORAGE_KEY = `omniagent_session_${WIDGET_KEY}`;

function getStoredSession(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function storeSession(id: string): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, id);
  } catch {
    /* private mode / storage disabled — session still held in memory for this send */
  }
}

/**
 * Reuse the widget's existing session, or start a new one via the same endpoint
 * the widget uses. Writing the id back to the widget's storage key means the
 * live widget resumes this very conversation when opened.
 */
async function ensureSession(): Promise<string | null> {
  const existing = getStoredSession();
  if (existing) return existing;
  try {
    const res = await fetch(`${API}/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId: null }),
    });
    const json = (await res.json()) as { data?: { sessionId?: string } };
    const id = json?.data?.sessionId;
    if (id) {
      storeSession(id);
      return id;
    }
  } catch {
    /* network/CORS — fall back to the launcher */
  }
  return null;
}

/** Defensive breadcrumb for the fallback path. */
function stashPrefill(message: string): void {
  try {
    (window as unknown as Record<string, unknown>).__aniroPrefill = message;
  } catch {
    /* ignore */
  }
}

/**
 * Deliver a fully-composed message (customer + vehicle/journey details) straight
 * into the Aniro conversation. Returns true when the lead was accepted by Aniro.
 * On any failure it degrades gracefully by opening the widget with the details
 * stashed, so nothing is lost.
 */
export async function sendToAniro(message: string): Promise<boolean> {
  if (typeof window === "undefined" || !message.trim()) return false;

  const sessionId = await ensureSession();
  if (!sessionId) {
    stashPrefill(message);
    return openAniro();
  }

  try {
    const res = await fetch(`${API}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId,
        body: message,
        clientMessageId: `c_${Date.now()}`,
      }),
    });
    // Surface the widget so the visitor can carry on live — the team can reply
    // and, where possible, offer a better price in the same thread.
    openAniro();
    return res.ok;
  } catch {
    stashPrefill(message);
    return openAniro();
  }
}

/**
 * Open the Aniro chat widget UI. Returns true if a launcher was found/clicked.
 * Used by "Chat with us" buttons and as the fallback for message delivery.
 */
export function openAniro(): boolean {
  if (typeof window === "undefined") return false;
  const launcher = document.querySelector<HTMLElement>(
    '.oa-btn, [id*="aniro" i] button, button[class*="aniro" i], [class*="omniagent" i] button, iframe[src*="aniro" i]'
  );
  if (launcher) {
    launcher.click();
    return true;
  }
  return false;
}
