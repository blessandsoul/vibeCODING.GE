'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import type { GoogleReview } from '@/lib/google-reviews';

/* =========================================================================
   ReviewsMarquee, client half of the "#reviews" strip (LandingReviews
   fetches the data server-side and passes it down). A Manychat-style
   auto-scrolling ticker: compact snippet per review (avatar, mono name
   chip, stars, one-line truncated quote, "read more"), each opening the
   full review in the shared shadcn Dialog. The track holds two identical
   groups and loops via translateX(-50%); hover/focus pauses it, reduced
   motion swaps it for plain horizontal scroll (see landing-reviews.css).
   The second group is presentational only: aria-hidden + untabbable.
   ========================================================================= */

export function GoogleG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

export function Stars({ rating, className }: { rating: number; className?: string }) {
  const rounded = Math.round(rating);
  return (
    <span className={`grm-stars${className ? ` ${className}` : ''}`} aria-label={`${rating} / 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={i <= rounded ? 'grm-star grm-star-on' : 'grm-star'}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.6l2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.6l-5.1 2.7 1-5.7-4.1-4 5.7-.8L10 1.6z" />
        </svg>
      ))}
    </span>
  );
}

function Avatar({ review, className }: { review: GoogleReview; className: string }) {
  return review.authorPhoto ? (
    <img className={className} src={review.authorPhoto} alt="" width={52} height={52} loading="lazy" referrerPolicy="no-referrer" draggable={false} />
  ) : (
    <span className={`${className} grm-avatar-fallback`}>{review.authorName.charAt(0)}</span>
  );
}

/* aiNOW Google Business Profile review page (g.page short link) */
const GOOGLE_REVIEW_URL = 'https://g.page/r/CTp5smtbSZLXEAI/review';

/* Tilt parallax, same recipe as the flagship .tilt-card handlers
   (LandingFlagships.tsx), amped up: these cells are smaller than the
   flagship cards, so a stronger angle is needed for the bend to read
   without pushing the cursor to the edge. */
const MAX_TILT = 9;
function onItemTilt(e: React.MouseEvent<HTMLButtonElement>) {
  const card = e.currentTarget;
  const r = card.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  /* both signs are inverted vs the flagship recipe: the hovered side
     (horizontal AND vertical) lifts toward the cursor instead of
     receding behind it */
  card.style.transform = `perspective(900px) rotateY(${-x * MAX_TILT * 2}deg) rotateX(${y * MAX_TILT * 2}deg)`;
}
function onItemTiltReset(e: React.MouseEvent<HTMLButtonElement>) {
  e.currentTarget.style.transform = '';
}

/* px the pointer must travel before a press becomes a drag (under it, it's a click) */
const DRAG_THRESHOLD = 6;
/* auto-scroll speed in px/s, matches the old 55s CSS loop over one group */
const AUTO_SPEED = 44;

export function ReviewsMarquee({ reviews }: { reviews: GoogleReview[] }) {
  const t = useTranslations('home.reviews');
  const [active, setActive] = useState<GoogleReview | null>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  /* mutable scroll state, lives outside React so the rAF loop and pointer
     handlers never trigger re-renders */
  const scroll = useRef({
    offset: 0,
    half: 1,
    pointerId: -1,
    pending: false,
    dragging: false,
    startX: 0,
    startOffset: 0,
    moved: 0,
    hoverPaused: false,
    focusPaused: false,
  });

  /* drive the marquee: auto-advance unless dragged/hovered/focused/hidden,
     wrap at half the track (two identical groups), paint via transform */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const s = scroll.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const measure = () => { s.half = Math.max(1, track.scrollWidth / 2); };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const autoplay = !reduced && reviews.length > 1 && !s.dragging
        && !s.hoverPaused && !s.focusPaused && !document.hidden;
      if (autoplay) s.offset += AUTO_SPEED * dt;
      s.offset = ((s.offset % s.half) + s.half) % s.half;
      track.style.transform = `translate3d(${-s.offset}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [reviews.length]);

  /* drag-to-scroll (mouse + touch via pointer events). Capture is taken only
     once DRAG_THRESHOLD is crossed, taking it on pointerdown would retarget
     the eventual click to the container and the cards would stop opening. */
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const s = scroll.current;
    s.pending = true;
    s.pointerId = e.pointerId;
    s.startX = e.clientX;
    s.startOffset = s.offset;
    s.moved = 0;
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const s = scroll.current;
    if (e.pointerId !== s.pointerId || (!s.pending && !s.dragging)) return;
    const dx = e.clientX - s.startX;
    s.moved = Math.max(s.moved, Math.abs(dx));
    if (!s.dragging) {
      if (s.moved < DRAG_THRESHOLD) return;
      s.dragging = true;
      s.pending = false;
      e.currentTarget.setPointerCapture(e.pointerId);
      marqueeRef.current?.classList.add('grm-dragging');
    }
    s.offset = s.startOffset - dx;
  };
  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const s = scroll.current;
    if (e.pointerId !== s.pointerId) return;
    s.pending = false;
    s.dragging = false;
    s.pointerId = -1;
    marqueeRef.current?.classList.remove('grm-dragging');
  };
  /* a press that travelled is a drag, not a click, swallow it before the card */
  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scroll.current.moved > DRAG_THRESHOLD) {
      e.preventDefault();
      e.stopPropagation();
      scroll.current.moved = 0;
    }
  };

  const renderGroup = (hidden: boolean) => (
    <div className="grm-group" aria-hidden={hidden || undefined}>
      {reviews.map((review, i) => (
        <button
          key={review.authorName + i}
          type="button"
          className="grm-item"
          tabIndex={hidden ? -1 : 0}
          onClick={() => setActive(review)}
          onMouseMove={onItemTilt}
          onMouseLeave={onItemTiltReset}
        >
          <Avatar review={review} className="grm-avatar" />
          <span className="grm-body">
            <span className="grm-row">
              <span className="grm-name">{review.authorName}</span>
              <Stars rating={review.rating} className="grm-item-stars" />
            </span>
            <span className="grm-quote">&ldquo;{review.text}&rdquo;</span>
            <span className="grm-more">
              {t('readMore')} <span aria-hidden="true">→</span>
            </span>
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <>
      <div
        ref={marqueeRef}
        className="grm-marquee"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        onDragStart={(e) => e.preventDefault()}
        onPointerEnter={(e) => { if (e.pointerType === 'mouse') scroll.current.hoverPaused = true; }}
        onPointerLeave={(e) => { if (e.pointerType === 'mouse') scroll.current.hoverPaused = false; }}
        onFocusCapture={() => { scroll.current.focusPaused = true; }}
        onBlurCapture={() => { scroll.current.focusPaused = false; }}
      >
        <div ref={trackRef} className="grm-track">
          {renderGroup(false)}
          {renderGroup(true)}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(open: boolean) => { if (!open) setActive(null); }}>
        <DialogContent
          className="grm-modal"
          overlayClassName="bg-white/50 backdrop-blur-sm"
          aria-describedby={undefined}
        >
          {active && (
            <>
              <div className="grm-modal-head">
                <span className="grm-modal-ring">
                  <Avatar review={active} className="grm-modal-avatar" />
                </span>
                <div className="grm-modal-who">
                  <DialogTitle className="grm-modal-name">{active.authorName}</DialogTitle>
                  {active.relativeTime && <span className="grm-modal-time">{active.relativeTime}</span>}
                </div>
                <GoogleG className="grm-modal-g" />
              </div>
              <Stars rating={active.rating} className="grm-modal-stars" />
              <p className="grm-modal-text">{active.text}</p>
              <div className="grm-modal-footer">
                <a
                  className="grm-modal-cta"
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('cta')} <span aria-hidden="true">→</span>
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
