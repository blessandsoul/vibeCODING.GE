'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';
import { VideoGrid } from './VideoGrid';
import { InstagramReels } from './InstagramReels';

export const GraphicsShowcase = () => {
  const t = useTranslations('servicesGraphics');

  return (
    <>
      <FadeIn>
        <div className="container mx-auto px-4 pb-4 md:px-6 lg:px-8">
          <h2 className="eyebrow text-center uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
            {t('showreelTitle')}
          </h2>
        </div>
      </FadeIn>
      <VideoGrid />
      <InstagramReels />
    </>
  );
};
