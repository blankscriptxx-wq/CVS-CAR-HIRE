/**
 * Aniro chat — API layer + event bus for our own on-brand chat panel.
 *
 * Aniro is the single conversational channel (WhatsApp and Respond.io removed).
 * Rather than embedding aniro.ai's default widget (fixed indigo styling, invisible
 * input on a dark theme, no transcript memory, generic "Assistant is typing"),
 * we render our own panel — <AniroChat /> — against Aniro's public widget REST API:
 *
 *   POST {origin}/api/widget/{key}/session   { sessionId }  -> { data: { sessionId, name?, welcome? } }
 *   GET  {origin}/api/widget/{key}/messages?sessionId=X[&since=Y] -> { data: { messages: [...] } }
 *   POST {origin}/api/widget/{key}/messages  { sessionId, body, clientMessageId }
 *
 * The session id is stored (raw) in localStorage["omniagent_session_{key}"] —
 * the SAME key the aniro.ai widget uses — so the visitor keeps ONE conversation:
 * across page navigation, across minimising, and across return visits their full
 * history stays in the CVS Aniro inbox and re-loads into the panel.
 *
 * NOTE: message "direction" is from the business's point of view —
 *   inbound  = from the customer (render on the right, "you")
 *   outbound = from CVS / the AI responder (render on the left, "CVS")
 */

import { siteConfig } from "@/lib/siteConfig";

const WIDGET_KEY = siteConfig.aniro.widgetKey;
const ORIGIN = "https://www.aniro.ai";
const API = `${ORIGIN}/api/widget/${encodeURIComponent(WIDGET_KEY)}`;
const STORAGE_KEY = `omniagent_session_${WIDGET_KEY}`;

/** Custom-event names used to drive the panel from anywhere (forms, buttons). */
export const ANIRO_OPEN_EVENT = "cvschat:open";
export const ANIRO_MESSAGE_EVENT = "cvschat:message";

export type AniroDirection = "inbound" | "outbound";
export type AniroMessage = {
  id: string;
  direction: AniroDirection;
  body: string;
  createdAt: string;
};
export type AniroSession = { sessionId: string; name?: string; welcome?: string };

const LEAD_KEY = "cvs_chat_lead_captured";

/** Whether we've already captured this visitor's contact details (chat or form). */
export function isLeadCaptured(): boolean {
  try {
    return window.localStorage.getItem(LEAD_KEY) === "1";
  } catch {
    return false;
  }
}

/** Mark contact details captured so the chat never re-asks the same visitor. */
export function markLeadCaptured(): void {
  try {
    window.localStorage.setItem(LEAD_KEY, "1");
  } catch {
    /* ignore */
  }
}

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
    /* private mode / storage disabled — id still held in memory for this send */
  }
}

/**
 * Resume the stored conversation, or start a new one via the same endpoint the
 * widget uses. Always writes the id back so every surface shares one session.
 */
export async function ensureSession(): Promise<AniroSession | null> {
  if (typeof window === "undefined") return null;
  const existing = getStoredSession();
  try {
    const res = await fetch(`${API}/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId: existing }),
    });
    const json = (await res.json()) as { data?: AniroSession };
    const data = json?.data;
    if (data?.sessionId) {
      storeSession(data.sessionId);
      return data;
    }
  } catch {
    /* network/CORS — nothing we can do client-side */
  }
  return existing ? { sessionId: existing } : null;
}

/** Full transcript (both directions), oldest first. */
export async function fetchHistory(sessionId: string): Promise<AniroMessage[]> {
  try {
    const res = await fetch(`${API}/messages?sessionId=${encodeURIComponent(sessionId)}`);
    const json = (await res.json()) as { data?: { messages?: AniroMessage[] } };
    return json?.data?.messages ?? [];
  } catch {
    return [];
  }
}

/** New messages since a timestamp (ISO createdAt). */
export async function pollSince(sessionId: string, since: string | null): Promise<AniroMessage[]> {
  try {
    let url = `${API}/messages?sessionId=${encodeURIComponent(sessionId)}`;
    if (since) url += `&since=${encodeURIComponent(since)}`;
    const res = await fetch(url);
    const json = (await res.json()) as { data?: { messages?: AniroMessage[] } };
    return json?.data?.messages ?? [];
  } catch {
    return [];
  }
}

/** Post a customer message into the conversation. Returns true when accepted. */
export async function sendMessage(sessionId: string, body: string): Promise<boolean> {
  try {
    const res = await fetch(`${API}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId,
        body,
        clientMessageId: `c_${Date.now()}`,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/** Open the CVS chat panel (used by "Chat with us" buttons). */
export function openAniro(): boolean {
  if (typeof window === "undefined") return false;
  window.dispatchEvent(new CustomEvent(ANIRO_OPEN_EVENT));
  return true;
}

/**
 * Deliver a fully-composed lead (customer + vehicle/journey details) straight
 * into the conversation — automatically, no "send" tap — then open the panel so
 * the visitor can carry on live. Used by the quote and enquiry forms.
 */
export async function sendToAniro(message: string): Promise<boolean> {
  if (typeof window === "undefined" || !message.trim()) return false;
  const session = await ensureSession();
  if (!session?.sessionId) return false;
  const ok = await sendMessage(session.sessionId, message);
  // A form lead includes the customer's contact details — no need to re-ask in chat.
  markLeadCaptured();
  // Tell the panel to pull in the new message and open.
  window.dispatchEvent(new CustomEvent(ANIRO_MESSAGE_EVENT));
  window.dispatchEvent(new CustomEvent(ANIRO_OPEN_EVENT));
  return ok;
}
