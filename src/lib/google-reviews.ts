/* =========================================================================
   google-reviews, server-side fetch of the aiNOW Google Business Profile
   reviews via Places API (New) Place Details. Cached 24h per locale through
   Next's fetch revalidation, so traffic never touches the API directly
   (~4 calls/day = well inside the 1,000 free Enterprise-SKU calls/month).
   Returns null when env vars are missing or the request fails, the
   homepage section simply doesn't render in that case.
   ========================================================================= */

import { isLandingClonePreview } from "@/lib/landing-clone-preview";

const PLACE_DETAILS_URL = 'https://places.googleapis.com/v1/places';
const FIELD_MASK = 'rating,userRatingCount,googleMapsUri,reviews';
const REVALIDATE_SECONDS = 86400; // 24h, Google ToS allows caching up to 30 days

type RawReview = {
  rating?: number;
  text?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
};

type RawPlaceDetails = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: RawReview[];
};

export type GoogleReview = {
  authorName: string;
  authorPhoto?: string;
  authorUri?: string;
  rating: number;
  text: string;
  relativeTime: string;
};

export type GoogleReviewsData = {
  rating: number;
  count: number;
  mapsUri: string;
  reviews: GoogleReview[];
};

export async function getGoogleReviews(languageCode: string): Promise<GoogleReviewsData | null> {
  if (isLandingClonePreview()) return null;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(
      `${PLACE_DETAILS_URL}/${placeId}?languageCode=${encodeURIComponent(languageCode)}`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': FIELD_MASK,
        },
        next: { revalidate: REVALIDATE_SECONDS },
      },
    );
    if (!res.ok) return null;

    const data: RawPlaceDetails = await res.json();
    if (typeof data.rating !== 'number' || !Array.isArray(data.reviews)) return null;

    const reviews: GoogleReview[] = data.reviews
      .filter((r) => r.text?.text)
      .map((r) => ({
        authorName: r.authorAttribution?.displayName ?? 'Google User',
        authorPhoto: r.authorAttribution?.photoUri,
        authorUri: r.authorAttribution?.uri,
        rating: r.rating ?? 5,
        text: r.text!.text!,
        relativeTime: r.relativePublishTimeDescription ?? '',
      }));
    if (reviews.length === 0) return null;

    return {
      rating: data.rating,
      count: data.userRatingCount ?? reviews.length,
      mapsUri: data.googleMapsUri ?? '',
      reviews,
    };
  } catch {
    return null;
  }
}
