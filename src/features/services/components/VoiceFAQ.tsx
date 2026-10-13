'use client';

import { Fragment, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';

const faqItems: Array<{ key: string; icon: string }> = [
  { key: 'q1', icon: 'solar:cpu-bold-duotone' },
  { key: 'q2', icon: 'solar:volume-loud-bold-duotone' },
  { key: 'q3', icon: 'solar:translation-bold-duotone' },
  { key: 'q4', icon: 'solar:socket-bold-duotone' },
  { key: 'q5', icon: 'solar:dollar-bold-duotone' },
  { key: 'q6', icon: 'solar:shield-check-bold-duotone' },
  { key: 'q7', icon: 'solar:clock-circle-bold-duotone' },
  { key: 'q8', icon: 'solar:cpu-bolt-bold-duotone' },
];

const URL_RE = /(https?:\/\/[^\s.,;)]+)/g;

function renderAnswerWithLinks(text: string) {
  const parts = text.split(URL_RE);
  return parts.map((part, i) => {
    if (URL_RE.test(part)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="external noopener noreferrer"
          className="break-all text-blue-600 dark:text-blue-300 underline-offset-2 transition-colors hover:underline"
        >
          {part.replace(/^https?:\/\//, '')}
        </a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export const VoiceFAQ = () => {
  const t = useTranslations('servicesVoiceAgents');
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="relative py-12 md:py-16">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 text-center md:mb-12">
            <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {t('faqEyebrow')}
            </p>
            <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
              {t('faqTitle')}
            </h3>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-3xl space-y-3">
            {faqItems.map(({ key, icon }) => {
              const isOpen = open === key;
              return (
                <div
                  key={key}
                  className={`dodo-glass-box overflow-hidden transition-[border-color,box-shadow] duration-200 ${
                    isOpen
                      ? 'border-blue-500/30 dark:border-blue-400/25'
                      : 'border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-blue-400/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : key)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-3 px-4 py-3.5 text-left md:gap-4 md:px-6 md:py-5"
                  >
                    <span
                      className={`dodo-glass-inset flex h-9 w-9 shrink-0 items-center justify-center transition-colors duration-200 ${
                        isOpen
                          ? 'bg-blue-500/10 dark:bg-blue-400/15 text-blue-600 dark:text-blue-300'
                          : 'bg-slate-100/60 dark:bg-[#0a0b0e]/10 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      <Ico name={icon} className="size-[16px]" />
                    </span>
                    <span
                      className={`flex-1 text-sm font-semibold md:text-base ${
                        isOpen ? 'text-slate-950 dark:text-white' : 'text-slate-950 dark:text-white'
                      }`}
                    >
                      {t(`faq_${key}_q`)}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-7 w-7 shrink-0 items-center justify-center dodo-glass-inset dodo-glass-pill text-slate-600 dark:text-slate-300"
                    >
                      <Ico name="solar:add-circle-bold-duotone" className="size-[14px]" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      >
                        <p className="px-4 pb-4 pl-16 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:px-6 md:pb-6 md:pl-18">
                          {renderAnswerWithLinks(t(`faq_${key}_a`))}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
