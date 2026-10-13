'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';

const defaultCards = [
  { key: 'card1', icon: '◇' },
  { key: 'card2', icon: '⬡' },
  { key: 'card3', icon: '↻' },
  { key: 'card4', icon: '✦' },
] as const;

const defaultSteps = [
  { key: 'how1', num: '01' },
  { key: 'how2', num: '02' },
  { key: 'how3', num: '03' },
  { key: 'how4', num: '04' },
] as const;

export type AutomationShowcaseCard = {
  title: string;
  description: string;
  icon?: string;
};

export type AutomationShowcaseStep = {
  title: string;
  description: string;
  num: string;
};

type AutomationShowcaseProps = {
  namespace?: string;
  cards?: readonly AutomationShowcaseCard[];
  steps?: readonly AutomationShowcaseStep[];
  howTitle?: string;
};

export const AutomationShowcase = ({ namespace, cards: customCards, steps: customSteps, howTitle }: AutomationShowcaseProps = {}) => {
  const t = useTranslations(namespace ?? 'servicesAutomation');
  const cards = customCards ?? defaultCards.map((card) => ({
    title: t(`${card.key}Title`),
    description: t(`${card.key}Desc`),
    icon: card.icon,
  }));
  const steps = customSteps ?? defaultSteps.map((step) => ({
    title: t(`${step.key}Title`),
    description: t(`${step.key}Desc`),
    num: step.num,
  }));

  return (
    <section className="relative py-8 md:py-12">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        {/* Use case cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {cards.map((card, i) => (
            <FadeIn key={`${card.title}-${i}`} delay={i * 0.08}>
              <div className="group flex h-full flex-col overflow-hidden dodo-glass-card p-7 transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] md:p-8">
                <div className="relative z-10 mb-5 flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold tracking-tight text-slate-950 dark:text-white">{card.title}</h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center dodo-glass-inset text-lg text-slate-600 dark:text-slate-300 transition-colors duration-300 group-hover:bg-slate-100/60 dark:bg-[#0a0b0e]/10">
                    {card.icon?.startsWith('solar:') ? <Ico name={card.icon} aria-hidden="true" /> : card.icon ?? '◇'}
                  </span>
                </div>
                <p className="relative z-10 mt-2.5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{card.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* How it works */}
        <FadeIn delay={0.3}>
          <div className="mt-16 md:mt-20">
            <h3 className="eyebrow mb-8 text-center uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">{howTitle ?? t('howTitle')}</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <FadeIn key={`${step.title}-${i}`} delay={0.3 + i * 0.08}>
                  <div className="flex flex-col items-center text-center">
                    <span className="font-(family-name:--font-space-mono) text-3xl font-bold text-blue-600/40 dark:text-blue-300/40">
                      {step.num}
                    </span>
                    <h4 className="mt-3 font-display text-base font-bold tracking-tight text-slate-950 dark:text-white">{step.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
