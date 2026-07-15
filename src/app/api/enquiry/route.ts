import { NextResponse } from "next/server";

/**
 * Secure server-side enquiry handler.
 *
 * Receives the quick-enquiry / contact form and forwards it to Respond.io / CRM
 * using SERVER-ONLY environment variables (never exposed to the client). If no
 * webhook is configured it validates and acknowledges so the frontend handoff
 * (WhatsApp / live chat) still works in development.
 */

export const runtime = "nodejs";

type EnquiryPayload = {
  name?: string;
  mobile?: string;
  email?: string;
  vehicle?: string;
  start?: string;
  end?: string;
  collection?: string;
  age?: string;
  occasion?: string;
  message?: string;
  source?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
};

function isSpam(body: EnquiryPayload & { company?: string }): boolean {
  // Honeypot: legitimate users never fill a hidden "company" field.
  return Boolean(body.company);
}

export async function POST(request: Request) {
  let body: EnquiryPayload & { company?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (isSpam(body)) {
    // Silently accept to avoid tipping off bots.
    return NextResponse.json({ ok: true });
  }

  // Minimal validation — we don't hard-require fields so partial quick enquiries
  // can still be forwarded, but at least one contact method is expected.
  if (!body.mobile && !body.email && !body.name) {
    return NextResponse.json(
      { ok: false, error: "Please provide a name and a way to contact you." },
      { status: 422 }
    );
  }

  const webhookUrl = process.env.RESPONDIO_WEBHOOK_URL;
  const token = process.env.RESPONDIO_API_TOKEN;

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          ...body,
          received_at: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`Upstream ${res.status}`);
    } catch (err) {
      console.error("[enquiry] forward failed:", err);
      // Don't fail the user journey — the client still offers WhatsApp/live chat.
      return NextResponse.json({ ok: true, forwarded: false });
    }
    return NextResponse.json({ ok: true, forwarded: true });
  }

  // No webhook configured (e.g. development). Log for visibility.
  console.info("[enquiry] received (no webhook configured):", {
    name: body.name,
    vehicle: body.vehicle,
    source: body.source,
  });
  return NextResponse.json({ ok: true, forwarded: false });
}
