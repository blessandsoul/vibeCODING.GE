'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';

const cards = [
  { key: 'card1', icon: '◇' },
  { key: 'card2', icon: '⬡' },
  { key: 'card3', icon: '↻' },
  { key: 'card4', icon: '✦' },
] as const;

const techStack = [
  'Node.js', 'Python', 'FastAPI', 'PostgreSQL',
  'Next.js', 'React', 'React Native', 'TypeScript', 'Tailwind CSS',
  'Docker', 'AWS',
];

export const WebsitesShowcase = () => {
  const t = useTranslations('servicesWebsites');

  return (
    <section className="relative py-8 md:py-12">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {cards.map((card, i) => (
            <FadeIn key={card.key} delay={i * 0.08}>
              <div className="group flex h-full flex-col overflow-hidden dodo-glass-card p-7 transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] md:p-8">
                <div className="relative z-10 mb-5 flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold tracking-tight text-slate-950 dark:text-white">{t(`${card.key}Title`)}</h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center dodo-glass-inset text-lg text-slate-600 dark:text-slate-300 transition-colors duration-300 group-hover:bg-slate-100/60 dark:bg-[#0a0b0e]/10">
                    {card.icon}
                  </span>
                </div>
                <p className="relative z-10 mt-2.5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {t(`${card.key}Desc`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Tech Stack */}
        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <h3 className="eyebrow uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {t('techTitle')}
            </h3>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="dodo-glass-inset dodo-glass-pill px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
