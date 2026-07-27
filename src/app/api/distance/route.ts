import { NextResponse } from "next/server";
import { distanceAndZone } from "@/lib/distance";

/**
 * Estimates road mileage between two UK postcodes for the chauffeur quote tool.
 * Same-origin (no client CORS), server-to-server geocoding via postcodes.io.
 * GET /api/distance?from=B1%201AA&to=TW6%201EW
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const from = searchParams.get("from") ?? "";
  const to = searchParams.get("to") ?? "";

  if (!from.trim() || !to.trim()) {
    return NextResponse.json({ ok: false, error: "Missing postcodes" }, { status: 400 });
  }

  try {
    const result = await distanceAndZone(from, to);
    if (result == null) {
      return NextResponse.json(
        { ok: false, error: "Could not locate one or both postcodes" },
        { status: 200 }
      );
    }
    return NextResponse.json({ ok: true, miles: result.miles, zone: result.zone });
  } catch {
    return NextResponse.json({ ok: false, error: "Lookup failed" }, { status: 200 });
  }
}
