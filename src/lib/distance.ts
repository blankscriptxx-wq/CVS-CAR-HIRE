/**
 * UK postcode → road-mileage estimation using the free, key-less postcodes.io
 * geocoder. Used server-side by /api/distance. Straight-line distance is scaled
 * by a road-detour factor to approximate driving miles; exact mileage is always
 * confirmed by the team on enquiry.
 */

export interface LatLng {
  lat: number;
  lng: number;
}

const ROAD_FACTOR = 1.3; // typical UK straight-line → road distance multiplier

/** Geocode a UK postcode. Falls back to terminated-postcode coords, then the outward code. */
export async function geocodePostcode(postcode: string): Promise<LatLng | null> {
  const pc = postcode.trim();
  if (!pc) return null;

  try {
    const res = await fetch(
      `https://api.postcodes.io/postcodes/${encodeURIComponent(pc)}`,
      { headers: { Accept: "application/json" }, cache: "no-store" }
    );
    if (res.ok) {
      const data = await res.json();
      const r = data?.result;
      if (r?.latitude != null && r?.longitude != null) {
        return { lat: r.latitude, lng: r.longitude };
      }
    } else {
      // 404 body may still carry terminated-postcode coordinates.
      const body = await res.json().catch(() => null);
      const t = body?.terminated;
      if (t?.latitude != null && t?.longitude != null) {
        return { lat: t.latitude, lng: t.longitude };
      }
    }
  } catch {
    /* fall through to outcode */
  }

  // Fallback: outward code centroid (e.g. "B1 1AA" → "B1").
  const outcode = pc.split(/\s+/)[0];
  if (outcode && outcode !== pc) {
    try {
      const res = await fetch(
        `https://api.postcodes.io/outcodes/${encodeURIComponent(outcode)}`,
        { headers: { Accept: "application/json" }, cache: "no-store" }
      );
      if (res.ok) {
        const data = await res.json();
        const r = data?.result;
        if (r?.latitude != null && r?.longitude != null) {
          return { lat: r.latitude, lng: r.longitude };
        }
      }
    } catch {
      /* give up */
    }
  }
  return null;
}

/** Great-circle distance in miles. */
export function haversineMiles(a: LatLng, b: LatLng): number {
  const R = 3958.8; // Earth radius in miles
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/** Estimated road miles between two postcodes (null if either can't be geocoded). */
export async function roadMilesBetween(
  fromPostcode: string,
  toPostcode: string
): Promise<number | null> {
  const [a, b] = await Promise.all([
    geocodePostcode(fromPostcode),
    geocodePostcode(toPostcode),
  ]);
  if (!a || !b) return null;
  return Math.max(1, Math.round(haversineMiles(a, b) * ROAD_FACTOR));
}
