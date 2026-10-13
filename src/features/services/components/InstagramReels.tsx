'use client';

declare global {
  interface Window {
    instgrm?: { Embeds: { process: (el?: HTMLElement) => void } };
  }
}

import { useEffect, useRef } from 'react';
import { FadeIn } from '@/components/common/FadeIn';

const REELS = [
  'DUvrEh9jD2n',
  'DUv3h63jJIG',
  'DWMRoeGjA6H',
  'DWRLmzaDCPt',
  'DWRLweVDF4V',
  'DWRL2pejOHx',
  'DWWY2D2DEyG',
];

const InstagramEmbed = ({ reelId }: { reelId: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && window.instgrm?.Embeds) {
      window.instgrm.Embeds.process(ref.current);
    }
  }, [reelId]);

  return (
    <div ref={ref} className="dodo-glass-card flex justify-center p-3 md:p-4">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`https://www.instagram.com/reel/${reelId}/`}
        data-instgrm-version="14"
        style={{
          background: 'transparent',
          border: 0,
          margin: 0,
          padding: 0,
          maxWidth: '540px',
          width: '100%',
        }}
      />
    </div>
  );
};

export const InstagramReels = () => {
  useEffect(() => {
    if (window.instgrm?.Embeds) {
      window.instgrm.Embeds.process();
      return;
    }

    const existing = document.querySelector(
      'script[src*="instagram.com/embed.js"]'
    );
    if (existing) return;

    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative py-8 md:py-12">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REELS.map((reelId, i) => (
            <FadeIn key={reelId} delay={i * 0.05}>
              <InstagramEmbed reelId={reelId} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
