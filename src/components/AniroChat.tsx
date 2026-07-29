"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { track } from "@/lib/analytics";
import { ChatIcon, CloseIcon, ArrowRight } from "@/components/ui/Icons";
import {
  ensureSession,
  fetchHistory,
  pollSince,
  sendMessage,
  isLeadCaptured,
  markLeadCaptured,
  ANIRO_OPEN_EVENT,
  ANIRO_MESSAGE_EVENT,
  type AniroMessage,
  type AniroSession,
} from "@/lib/aniro";

const OPEN_KEY = "cvs_chat_open";
const BRAND = siteConfig.tradingName; // "CVS Hire"

const inputClass =
  "w-full min-h-[44px] bg-black/40 border border-line px-3 text-sm text-warm-white placeholder:text-silver/60 focus:border-champagne focus:outline-none";

/**
 * CVS on-brand chat panel, driven by Aniro's public widget API (see src/lib/aniro.ts).
 *
 * Built in-house so we control the four things the stock widget couldn't:
 *  1. Persistent identity — one Aniro session (localStorage) across pages & visits.
 *  2. Memory — the full transcript re-loads on open, survives navigation/minimise.
 *  3. A visible, on-brand input (the stock widget's text was invisible on dark).
 *  4. "CVS is typing" instead of "Website assistant is typing".
 *  + captures name + contact up-front to build the database in Aniro.
 */
export function AniroChat() {
  const [mounted, setMounted] = useState(false);
  // Restore the minimise/open state synchronously so the persistence effect
  // below doesn't clobber it on first mount. (Render is gated on `mounted`, so
  // reading localStorage here can't cause a hydration mismatch.)
  const [open, setOpen] = useState<boolean>(() => {
    try {
      return typeof window !== "undefined" && window.localStorage.getItem(OPEN_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [session, setSession] = useState<AniroSession | null>(null);
  const [messages, setMessages] = useState<AniroMessage[]>([]);
  const [welcome, setWelcome] = useState<string>("");
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const [needLead, setNeedLead] = useState(false);

  // Pre-chat lead fields
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const sinceRef = useRef<string | null>(null);
  const seenRef = useRef<Set<string>>(new Set());
  const openRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const widgetKey = siteConfig.aniro.widgetKey;

  const ingest = useCallback((incoming: AniroMessage[], { fromPoll }: { fromPoll: boolean }) => {
    const fresh = incoming.filter((m) => m.id && !seenRef.current.has(m.id));
    if (fresh.length === 0) return;
    fresh.forEach((m) => {
      seenRef.current.add(m.id);
      if (m.createdAt) sinceRef.current = m.createdAt;
    });
    // Reconcile: when the server echoes a message we already showed optimistically
    // (same body, from the customer), drop the local placeholder so it isn't doubled.
    const echoedBodies = new Set(
      fresh.filter((m) => m.direction === "inbound").map((m) => m.body)
    );
    setMessages((prev) => {
      const deduped = prev.filter(
        (m) => !(m.id.startsWith("local_") && echoedBodies.has(m.body))
      );
      return [...deduped, ...fresh].sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    });
    // A CVS reply (outbound) clears the typing indicator; count unread while closed.
    const replies = fresh.filter((m) => m.direction === "outbound");
    if (replies.length) {
      setTyping(false);
      if (fromPoll && !openRef.current) setUnread((n) => n + replies.length);
    }
  }, []);

  // ── Boot: resume session + load full transcript ──────────────
  useEffect(() => {
    setMounted(true);
    if (!widgetKey) return;
    let cancelled = false;
    (async () => {
      const s = await ensureSession();
      if (cancelled || !s) return;
      setSession(s);
      if (s.welcome) setWelcome(s.welcome);
      const history = await fetchHistory(s.sessionId);
      if (cancelled) return;
      history.forEach((m) => {
        if (m.id) seenRef.current.add(m.id);
        if (m.createdAt) sinceRef.current = m.createdAt;
      });
      setMessages(history);
      // Only gate with the pre-chat form for a genuinely new visitor: no captured
      // flag and no prior message from them.
      const hasInbound = history.some((m) => m.direction === "inbound");
      setNeedLead(!isLeadCaptured() && !hasInbound);
    })();
    return () => {
      cancelled = true;
    };
  }, [widgetKey]);

  // ── Poll for new messages every 4s ───────────────────────────
  useEffect(() => {
    if (!session) return;
    const id = window.setInterval(async () => {
      const next = await pollSince(session.sessionId, sinceRef.current);
      ingest(next, { fromPoll: true });
    }, 4000);
    return () => window.clearInterval(id);
  }, [session, ingest]);

  // ── React to open / external-message events (buttons, forms) ──
  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onMessage = async () => {
      markLeadCaptured();
      setNeedLead(false);
      if (session) {
        const next = await pollSince(session.sessionId, sinceRef.current);
        ingest(next, { fromPoll: false });
      }
    };
    window.addEventListener(ANIRO_OPEN_EVENT, onOpen);
    window.addEventListener(ANIRO_MESSAGE_EVENT, onMessage);
    return () => {
      window.removeEventListener(ANIRO_OPEN_EVENT, onOpen);
      window.removeEventListener(ANIRO_MESSAGE_EVENT, onMessage);
    };
  }, [session, ingest]);

  // Keep a ref of open state for the poller; persist it; reset unread on open.
  useEffect(() => {
    openRef.current = open;
    try {
      window.localStorage.setItem(OPEN_KEY, open ? "1" : "0");
    } catch {
      /* ignore */
    }
    if (open) {
      setUnread(0);
      const t = setTimeout(() => inputRef.current?.focus(), 120);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Auto-scroll to the latest message.
  useEffect(() => {
    if (open) scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, typing, open, needLead]);

  // Esc closes the panel.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /** Optimistically show a customer message, then post it. */
  const pushOutgoing = useCallback(
    async (body: string) => {
      if (!session) return;
      const optimistic: AniroMessage = {
        id: `local_${Date.now()}`,
        direction: "inbound",
        body,
        createdAt: new Date().toISOString(),
      };
      seenRef.current.add(optimistic.id);
      setMessages((prev) => [...prev, optimistic]);
      setTyping(true);
      await sendMessage(session.sessionId, body);
    },
    [session]
  );

  async function handleSend(e?: React.FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || !session) return;
    setInput("");
    await pushOutgoing(text);
  }

  async function handleLead(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || (!mobile.trim() && !email.trim()) || !session) return;
    setSending(true);
    track("begin_enquiry", { source: "chat-prechat" });
    const details = [
      "New chat — customer details:",
      `Name: ${name.trim()}`,
      mobile.trim() ? `Mobile: ${mobile.trim()}` : "",
      email.trim() ? `Email: ${email.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    await pushOutgoing(details);
    markLeadCaptured();
    setNeedLead(false);
    setSending(false);
    setTimeout(() => inputRef.current?.focus(), 80);
  }

  if (!mounted || !widgetKey) return null;

  const leadValid = name.trim().length > 0 && (mobile.trim().length > 0 || email.trim().length > 0);
  const showWelcome = messages.length === 0 && welcome;

  return (
    <>
      {/* Launcher */}
      {!open && (
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            track("open_live_chat", { source: "launcher" });
          }}
          aria-label="Chat with CVS Hire"
          className="fixed bottom-20 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-champagne text-black shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-transform hover:scale-105 md:bottom-6 md:right-6"
        >
          <ChatIcon className="h-6 w-6" />
          {unread > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-warm-white px-1 text-[11px] font-semibold text-black">
              {unread}
            </span>
          )}
        </button>
      )}

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label={`Chat with ${BRAND}`}
          className="fixed inset-x-0 bottom-0 z-[60] flex h-[78svh] flex-col overflow-hidden border border-line bg-charcoal shadow-[0_20px_60px_rgba(0,0,0,0.6)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:h-[560px] sm:w-[380px] sm:rounded-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-line bg-black/60 px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-champagne text-black">
                <ChatIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg leading-none text-warm-white">{BRAND}</p>
                <span className="mt-1 flex items-center gap-1.5 text-[11px] text-silver">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Online — we reply fast
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Minimise chat"
              className="flex h-9 w-9 items-center justify-center text-silver hover:text-warm-white"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-soft/40 p-4">
            {showWelcome && <Bubble direction="outbound" body={welcome} brand={BRAND} />}
            {messages.map((m) => (
              <Bubble key={m.id} direction={m.direction} body={m.body} brand={BRAND} />
            ))}
            {typing && (
              <div className="flex items-center gap-2 text-[12px] italic text-silver">
                <span className="inline-flex gap-1">
                  <Dot /> <Dot delay="0.15s" /> <Dot delay="0.3s" />
                </span>
                {BRAND} is typing
              </div>
            )}
          </div>

          {/* Pre-chat lead capture, then the composer */}
          {needLead ? (
            <form onSubmit={handleLead} className="space-y-2 border-t border-line bg-black/50 p-4">
              <p className="text-[11px] leading-relaxed text-silver">
                Leave your details and we&rsquo;ll help right away — and follow up if we get cut off.
              </p>
              <input
                className={inputClass}
                placeholder="Name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  className={inputClass}
                  placeholder="Mobile"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <input
                  className={inputClass}
                  placeholder="Email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={!leadValid || sending}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 bg-champagne px-4 text-xs font-medium uppercase tracking-wide2 text-black hover:bg-champagne-soft disabled:opacity-50"
              >
                {sending ? "Starting…" : "Start chat"} <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-line bg-black/50 p-3">
              <input
                ref={inputRef}
                className={inputClass}
                placeholder="Type a message…"
                autoComplete="off"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message"
                className="flex h-11 min-w-11 items-center justify-center rounded-md bg-champagne px-3 text-black hover:bg-champagne-soft disabled:opacity-50"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}

function Bubble({
  direction,
  body,
  brand,
}: {
  direction: AniroMessage["direction"];
  body: string;
  brand: string;
}) {
  // inbound = from the customer (right); outbound = from CVS (left)
  const mine = direction === "inbound";
  return (
    <div className={`flex flex-col ${mine ? "items-end" : "items-start"}`}>
      {!mine && <span className="mb-1 text-[10px] uppercase tracking-wide2 text-champagne/80">{brand}</span>}
      <div
        className={`max-w-[82%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
          mine
            ? "rounded-br-sm bg-champagne text-black"
            : "rounded-bl-sm border border-line bg-charcoal text-warm-white"
        }`}
      >
        {body}
      </div>
    </div>
  );
}

function Dot({ delay = "0s" }: { delay?: string }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-champagne"
      style={{ animationDelay: delay }}
    />
  );
}
