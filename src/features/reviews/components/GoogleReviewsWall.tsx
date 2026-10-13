import type { GoogleReview, GoogleReviewsData } from "@/lib/google-reviews";
import { AiNowImage } from "@/features/home/components/ainow/AiNowImage";

/* =========================================================================
   GoogleReviewsWall, a masonry "wall" of Google Business Profile reviews for
   the dedicated /reviews page. Server component (no client JS): unlike the
   homepage ticker (ReviewsMarquee), this shows many cards at once in a
   balanced 1/2/3-column masonry so visitors read several reviews on arrival.
   Social proof only, so no Review / AggregateRating JSON-LD (Google forbids
   marking up reviews sourced from a third party). Self-contained Stars /
   GoogleG / Avatar, styled with Tailwind, no external CSS dependency.
   ========================================================================= */

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  const rounded = Math.round(rating);
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-label={`${rating} / 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className={`h-4 w-4 ${i <= rounded ? "text-amber-400" : "text-neutral-300"}`}
        >
          <path d="M10 1.6l2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.6l-5.1 2.7 1-5.7-4.1-4 5.7-.8L10 1.6z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function Avatar({ review }: { review: GoogleReview }) {
  if (review.authorPhoto) {
    return (
      <AiNowImage
        src={review.authorPhoto}
        alt=""
        width={40}
        height={40}
        loading="lazy"
        unoptimized
        referrerPolicy="no-referrer"
        draggable={false}
        frameClassName="block h-10 w-10 shrink-0 overflow-hidden rounded-full"
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />
    );
  }
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-semibold text-neutral-500">
      {review.authorName.charAt(0)}
    </span>
  );
}

type Props = {
  data: GoogleReviewsData;
  countLabel: string;
  seeAllLabel: string;
};

export function GoogleReviewsWall({ data, countLabel, seeAllLabel }: Props) {
  return (
    <div>
      {/* Summary bar */}
      <div className="mx-auto mb-10 flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
        <GoogleG className="h-7 w-7" />
      <span className="font-headline text-2xl font-semibold leading-none text-slate-950 dark:text-white">
          {data.rating.toFixed(1)}
        </span>
        <Stars rating={data.rating} />
      <span className="text-sm text-slate-500 dark:text-slate-400">{countLabel}</span>
        {data.mapsUri && (
          <a
            href={data.mapsUri}
            target="_blank"
            rel="noopener noreferrer"
      className="text-sm font-semibold text-blue-600 transition-colors duration-150 hover:underline dark:text-blue-300"
          >
            {seeAllLabel} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>

      {/* Masonry wall, balanced 1/2/3 columns so many cards read at once */}
      <div className="mx-auto max-w-6xl columns-1 gap-5 sm:columns-2 lg:columns-3">
        {data.reviews.map((review, i) => (
          <div key={review.authorName + i} className="mb-5 break-inside-avoid">
        <article className="dodo-glass-card p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <Avatar review={review} />
                <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-slate-950 dark:text-white">
                    {review.authorName}
                  </p>
                  {review.relativeTime && (
            <p className="truncate text-xs text-slate-500 dark:text-slate-400">{review.relativeTime}</p>
                  )}
                </div>
                <GoogleG className="h-5 w-5 shrink-0" />
              </div>
              <Stars rating={review.rating} className="mt-3" />
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {review.text}
              </p>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
