import './landing-wordmark.css';

/* =========================================================================
   LandingWordmark, "section after #cta": oversized aiNOW brand band.
   Ported verbatim from ainow_handoff/index.html. Reuses .wordmark-3d
   (landing-nav.css); `footer-wordmark` forces line-height:1 to match source.
   ========================================================================= */

export function LandingWordmark() {
  return (
    <section className="px-6 pb-12">
      <div className="max-w-[1280px] mx-auto flex justify-center">
        <div className="wordmark-3d footer-wordmark text-[clamp(4rem,18vw,16rem)] leading-none"><span className="wm-prefix">ai</span><span className="wm-mark">NOW</span><span className="wm-accent" aria-hidden="true"></span></div>
      </div>
    </section>
  );
}
