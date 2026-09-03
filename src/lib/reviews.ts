/**
 * Google reviews — first-party integration, straight from Google (no third party).
 *
 * Server-side only: the API key (GOOGLE_PLACES_API_KEY) is never exposed to the
 * browser. Reviews are genuine, fetched live from the business's own Google
 * profile and cached for a day. When the key or place id is not configured, this
 * returns null and the UI falls back to a "read on Google" link — we never
 * fabricate reviews, and we do not emit self-serving review/rating structured data.
 *
 * Works with either Google Places API:
 *   1. Places API (New)   — https://places.googleapis.com/v1/places/{id}   (tried first)
 *   2. Places API (legacy) — maps.googleapis.com/maps/api/place/details/json (fallback)
 * so a modern Google Cloud key (which now defaults to the New API) works out of
 * the box, and older keys keep working too.
 *
 * Owner must provide two values (see .env.example):
 *   GOOGLE_PLACES_API_KEY  — a Google Cloud key with the Places API enabled (server-only)
 *   GOOGLE_PLACE_ID        — the business's Google Place ID
 */

export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  photo?: string;
  url?: string;
  time: number;
}

export interface GoogleReviewsData {
  rating?: number;
  total?: number;
  reviews: GoogleReview[];
}

const DAY = 86400;

/** Places API (New) — the current default for fresh Google Cloud keys. */
interface NewPlaceReview {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
  authorAttribution?: { displayName?: string; photoUri?: string; uri?: string };
}
interface NewPlaceResponse {
  rating?: number;
  userRatingCount?: number;
  reviews?: NewPlaceReview[];
}

async function fetchNew(key: string, placeId: string): Promise<GoogleReviewsData | null> {
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=en-GB`,
    {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      next: { revalidate: DAY },
    },
  );
  if (!res.ok) return null;
  const data = (await res.json()) as NewPlaceResponse;
  const reviews: GoogleReview[] = (data.reviews ?? [])
    .map((r) => ({
      author: r.authorAttribution?.displayName ?? "Google user",
      rating: r.rating ?? 0,
      text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
      relativeTime: r.relativePublishTimeDescription ?? "",
      photo: r.authorAttribution?.photoUri,
      url: r.authorAttribution?.uri,
      time: r.publishTime ? Date.parse(r.publishTime) || 0 : 0,
    }))
    .filter((r) => r.text.length > 0);
  if (typeof data.rating !== "number" && reviews.length === 0) return null;
  return { rating: data.rating, total: data.userRatingCount, reviews };
}

/** Places API (legacy) — fallback for older keys / projects. */
interface LegacyReview {
  author_name?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
  profile_photo_url?: string;
  author_url?: string;
  time?: number;
}

async function fetchLegacy(key: string, placeId: string): Promise<GoogleReviewsData | null> {
  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${encodeURIComponent(placeId)}` +
    `&fields=rating,user_ratings_total,reviews` +
    `&reviews_sort=newest&language=en-GB&key=${key}`;
  const res = await fetch(url, { next: { revalidate: DAY } });
  if (!res.ok) return null;
  const data = await res.json();
  if (data.status !== "OK" || !data.result) return null;

  const reviews: GoogleReview[] = (data.result.reviews ?? [])
    .map((r: LegacyReview) => ({
      author: r.author_name ?? "Google user",
      rating: r.rating ?? 0,
      text: (r.text ?? "").trim(),
      relativeTime: r.relative_time_description ?? "",
      photo: r.profile_photo_url,
      url: r.author_url,
      time: r.time ?? 0,
    }))
    .filter((r: GoogleReview) => r.text.length > 0);

  return {
    rating: data.result.rating,
    total: data.result.user_ratings_total,
    reviews,
  };
}

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return null;

  try {
    const viaNew = await fetchNew(key, placeId);
    if (viaNew) return viaNew;
  } catch {
    // fall through to legacy
  }
  try {
    return await fetchLegacy(key, placeId);
  } catch {
    return null;
  }
}
