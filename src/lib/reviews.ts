/**
 * Google reviews — first-party integration via the Google Places Details API.
 *
 * Server-side only: the API key (GOOGLE_PLACES_API_KEY) is never exposed to the
 * browser. Reviews are genuine, fetched live from the business's Google profile
 * and cached for a day. When the key or place id is not configured, this returns
 * null and the UI falls back to a "read on Google" link — we never fabricate
 * reviews, and we do not emit self-serving review/rating structured data.
 *
 * Owner must provide two values (see .env.example):
 *   GOOGLE_PLACES_API_KEY  — a Google Cloud key with Places API enabled (server-only)
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

interface PlacesReview {
  author_name?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
  profile_photo_url?: string;
  author_url?: string;
  time?: number;
}

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return null;

  try {
    const url =
      `https://maps.googleapis.com/maps/api/place/details/json` +
      `?place_id=${encodeURIComponent(placeId)}` +
      `&fields=rating,user_ratings_total,reviews` +
      `&reviews_sort=newest&language=en-GB&key=${key}`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.status !== "OK" || !data.result) return null;

    const reviews: GoogleReview[] = (data.result.reviews ?? [])
      .map((r: PlacesReview) => ({
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
  } catch {
    return null;
  }
}
