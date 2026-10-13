import { getLocale, getTranslations } from 'next-intl/server';
import { getGoogleReviews } from '@/lib/google-reviews';
import { Link } from '@/i18n/navigation';
import { GoogleG, ReviewsMarquee, Stars } from './ReviewsMarquee';
import './landing-reviews.css';

// Google may return the original review text even when Places is requested in
// English. Keep the English ad landing page genuinely English rather than
// exposing a Georgian/Cyrillic/Arabic/etc. review in the rendered page.
const NON_LATIN_SCRIPT_RE = /[\u0370-\u03FF\u0400-\u052F\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u0900-\u0DFF\u10A0-\u10FF\u3040-\u30FF\u3400-\u9FFF\uAC00-\uD7AF]/u;

/* =========================================================================
   LandingReviews, "#reviews" full-bleed ticker strip directly below the
   hero (Manychat-style). Async server component: pulls live Google
   Business Profile reviews (cached 24h in lib/google-reviews) and hands
   them to the client ReviewsMarquee. The left label block (G + rating +
   stars + count) links to the Google profile. Renders nothing until
   GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID are configured, so the homepage
   never breaks on a missing key or a failed fetch.
   ========================================================================= */

export async function LandingReviews() {
  const locale = await getLocale();
  const data = await getGoogleReviews(locale);
  if (!data) return null;

  const reviews = locale === 'en'
    ? data.reviews.filter((review) => !NON_LATIN_SCRIPT_RE.test(`${review.authorName} ${review.text}`))
    : data.reviews;
  if (reviews.length === 0) return null;

  const t = await getTranslations('home.reviews');

  const label = (
    <>
      <span className="grm-label-top">
        <GoogleG className="grm-label-g" />
        <strong className="grm-label-rating">{data.rating.toFixed(1)}</strong>
        <Stars rating={data.rating} className="grm-label-stars" />
      </span>
      <span className="grm-label-sub">
        {t('countLabel', { count: data.count })} <span aria-hidden="true">→</span>
      </span>
    </>
  );

  return (
    <section id="reviews" className="grm-section">
      <h2 className="sr-only">
        {t('headingPre')} {t('headingAccent')}
      </h2>
      <div className="grm-wrap">
        {data.mapsUri ? (
          <a className="grm-label" href={data.mapsUri} target="_blank" rel="noopener noreferrer" title={t('cta')}>
            {label}
          </a>
        ) : (
          <div className="grm-label">{label}</div>
        )}
        <ReviewsMarquee reviews={reviews} />
      </div>
      <div className="mt-8 pb-10 text-center">
        <Link href="/reviews" className="text-sm font-semibold text-[#7c3aed] transition-colors hover:underline">
          {t('pageLink')} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
