import Link from 'next/link';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';
import type { PersonalizedVideoContent } from '../types';

interface PersonalizedVideoHeroProps {
  content: PersonalizedVideoContent;
  contactHref: string;
}

export function PersonalizedVideoHero({ content, contactHref }: PersonalizedVideoHeroProps) {
  return (
    <section className="pv-hero" aria-labelledby="personalized-video-title">
      <div className="pv-shell pv-hero-grid">
        <FadeIn>
          <div className="pv-hero-copy">
            <div className="pv-brand-lockup">
              <span className="wordmark-3d pv-wordmark" aria-label="aiNOW">
                <span className="wm-prefix">ai</span>
                <span className="wm-mark">NOW</span>
                <span className="wm-accent" aria-hidden="true" />
              </span>
              <span className="pv-brand-divider" aria-hidden="true" />
              <span className="pv-brand-service">{content.eyebrow}</span>
            </div>

            <h1 id="personalized-video-title" className="text-balance">{content.h1}</h1>
            <p className="pv-hero-lead">{content.lead}</p>

            <div className="pv-hero-actions">
              <Link href={contactHref} className="pv-button pv-button-primary">
                <span>{content.primaryCta}</span>
                <Ico name="solar:arrow-right-up-bold-duotone" className="size-4" />
              </Link>
              <a href="#how-it-works" className="pv-button pv-button-secondary">
                <span>{content.secondaryCta}</span>
                <Ico name="solar:play-bold-duotone" className="size-5" />
              </a>
            </div>

            <ul className="pv-hero-points">
              {content.highlights.slice(0, 3).map((item) => (
                <li key={item}>
                  <span aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <figure className="pv-preview">
            <div className="pv-player">
              <div className="pv-player-top">
                <span className="pv-live-dot" aria-hidden="true" />
                <span>aiNOW studio</span>
                <span className="pv-timecode">00:25</span>
              </div>

              <div className="pv-scene">
                <span className="pv-orb pv-orb-one" aria-hidden="true" />
                <span className="pv-orb pv-orb-two" aria-hidden="true" />
                <span className="pv-orbit" aria-hidden="true" />
                <div className="pv-scene-copy">
                  <span className="pv-scene-kicker">AI VIDEO</span>
                  <p className="pv-scene-name">NIKA · 8</p>
                  <p className="pv-scene-line">{content.suitableItems[0]?.body}</p>
                </div>
              </div>

              <div className="pv-timeline" aria-hidden="true">
                <span className="pv-track pv-track-one" />
                <span className="pv-track pv-track-two" />
                <span className="pv-track pv-track-three" />
                <span className="pv-playhead" />
              </div>
            </div>

            <figcaption className="pv-preview-meta">
              <div>
                <span>{content.priceLabel}</span>
                <strong>{content.price}</strong>
              </div>
              <p>{content.priceNote}</p>
            </figcaption>
          </figure>
        </FadeIn>
      </div>
    </section>
  );
}
