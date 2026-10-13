'use client';

import { useState, useRef, useEffect, lazy, Suspense } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { cn } from '@/lib/utils';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { HeroVariantAMobile } from '@/features/home/components/HeroVariantAMobile';
import { HeroCardModal } from '@/features/home/components/HeroCardModal';

const Hyperspeed = lazy(() =>
  import('@/features/home/components/Hyperspeed').then((m) => ({ default: m.Hyperspeed }))
);

export const StartHero = () => {
  const t = useTranslations('landing.hero');
  const locale = useLocale();
  const { resolvedTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        setIsModalOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  const handleModalClose = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsModalOpen(false);
  };

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="relative -mt-16 min-h-dvh lg:overflow-hidden lg:h-auto">
      {/* Background, Hyperspeed 3D + Aurora + dot-grid + glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Suspense fallback={null}>
          <Hyperspeed key={resolvedTheme} />
        </Suspense>
      </div>

      <div className="dot-grid pointer-events-none absolute inset-0 transition-opacity duration-1000 opacity-0 dark:opacity-30" />
      <div className="letter-glitch pointer-events-none absolute inset-0 transition-opacity duration-1000 opacity-25 dark:opacity-0">
        <div className="letter-glitch-layer" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60%] opacity-30 dark:opacity-20 transition-opacity duration-1000">
        <AuroraBackground
          colorStops={['#8B2FC9', '#1A8A7A', '#8B2FC9']}
          amplitude={1.2}
          blend={0.6}
          speed={0.8}
        />
      </div>
      <div className="glow-orb glow-primary absolute -right-32 top-20 h-125 w-125 opacity-15" />

      <div className="container relative z-10 mx-auto flex h-full flex-col px-4 pb-1 pt-16 md:px-6 md:pt-20 md:pb-12 lg:grid lg:min-h-[90dvh] lg:items-center lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:px-8 lg:pt-20 lg:pb-8 xl:gap-16">
        {/* Left, Content */}
        <div className="flex flex-1 flex-col justify-evenly lg:flex-initial lg:justify-center lg:max-w-xl">
          <div className="lg:contents">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className={cn(
                "text-[clamp(1.75rem,5vw,2.5rem)] font-bold tracking-tight lg:text-[clamp(2rem,4vw,3.5rem)] xl:text-[clamp(2.25rem,4.5vw,4rem)] pb-1",
                locale === 'ka' ? 'leading-snug' : 'leading-tight'
              )}>
                {t('title')}{' '}
                <span className="gradient-text block pb-1">{t('titleAccent')}</span>
              </h1>

              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base lg:mt-3 lg:max-w-lg">
                {t('subtitle')}
              </p>

              <p className="mt-1.5 mb-4 max-w-md text-xs leading-relaxed text-muted-foreground/70 lg:hidden lg:mb-0">
                {t('subtitleExtra')}
              </p>
            </motion.div>

            {/* Contact strip, phone + socials */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="my-3 flex items-center gap-2 lg:my-5 lg:gap-3"
            >
              <a
                href="tel:+995599701552"
                className="group flex items-center gap-1.5 rounded-full border border-border/50 bg-card/60 px-3 py-1.5 backdrop-blur-sm transition duration-200 hover:border-primary/30 hover:bg-primary/5 lg:gap-2 lg:px-3.5 lg:py-2"
              >
                <Ico name="solar:phone-bold-duotone" className="h-3 w-3 text-primary lg:h-3.5 lg:w-3.5" />
                <span className="text-xs font-semibold tabular-nums text-foreground lg:text-sm">
                  599 70 15 52
                </span>
              </a>

              <div className="flex items-center gap-1 lg:gap-1.5">
                <a
                  href="https://t.me/ainow_ge"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 bg-card/60 backdrop-blur-sm transition duration-200 hover:border-[#26A5E4]/40 hover:bg-[#26A5E4]/10 hover:scale-110 lg:h-9 lg:w-9"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-foreground/70 lg:h-4 lg:w-4" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/ainow.ge"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 bg-card/60 backdrop-blur-sm transition duration-200 hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10 hover:scale-110 lg:h-9 lg:w-9"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-foreground/70 lg:h-4 lg:w-4" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/ainow.ge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 bg-card/60 backdrop-blur-sm transition duration-200 hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10 hover:scale-110 lg:h-9 lg:w-9"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-foreground/70 lg:h-4 lg:w-4" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 1 1-2.88 0 1.441 1.441 0 0 1 2.88 0z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <HeroVariantAMobile />
          </div>

          <div className="flex flex-col gap-3 mt-24 sm:flex-row sm:gap-2 lg:mt-8">
            <MagneticButton variant="secondary" onClick={scrollToForm} className="w-full justify-center sm:w-auto">
              {t('cta')}
              <span className="ml-2 transition-transform duration-300 group-hover:translate-y-1">↓</span>
            </MagneticButton>
            <MagneticButton variant="emerald" href={`/${locale}/projects`} className="w-full justify-center sm:w-auto">
              {t('ctaSecondary')}
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </MagneticButton>
          </div>
        </div>

        {/* Right, 2×2 grid of service cards (same as home) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-cards-grid hidden lg:grid grid-cols-2 gap-4 xl:gap-5 max-w-xl ml-auto"
        >
          {/* Card 1, AI Chatbot (top-left) */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="hero-float-1 hero-card-shimmer hero-card-glass hero-card-mesh hero-card-mesh-1 hero-card-glow-purple relative cursor-pointer rounded-2xl p-5 shadow-2xl shadow-black/10 transition-transform duration-300 hover:scale-[1.03]"
          >
            <div className="card-mesh-bg" />
            <div className="relative mb-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15">
                <Ico name="solar:cpu-bold-duotone" className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {locale === 'ka' ? 'AI ჩატბოტი' : locale === 'ru' ? 'AI-чатбот' : 'AI Chatbot'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {locale === 'ka' ? '24/7 კლიენტთა მხარდაჭერა' : locale === 'ru' ? 'Поддержка клиентов 24/7' : '24/7 customer support'}
                </p>
              </div>
            </div>

            <div className="relative space-y-1.5">
              {[
                locale === 'ka' ? 'კითხვა-პასუხი 2 წამში' : locale === 'ru' ? 'Ответ за 2 секунды' : 'Answer in 2 sec',
                locale === 'ka' ? 'მრავალენოვანი' : locale === 'ru' ? 'Мультиязычный' : 'Multilingual',
                locale === 'ka' ? 'CRM ინტეგრაცია' : locale === 'ru' ? 'Интеграция с CRM' : 'CRM integration',
                'Facebook · Instagram · WhatsApp · Telegram · Web',
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <Ico name="solar:check-circle-bold-duotone" className="h-3 w-3 shrink-0 text-foreground/60" />
                  <span className="text-xs text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="relative mt-4 flex items-center justify-between border-t border-border/30 pt-3">
              <span className="text-xs text-muted-foreground">GPT · Claude · Custom</span>
              <span className="text-xs font-semibold text-primary">$1,100+</span>
            </div>
          </div>

          {/* Card 2, AI Automation (top-right) */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="hero-float-2 hero-card-shimmer hero-card-glass hero-card-mesh hero-card-mesh-2 hero-card-glow-teal relative cursor-pointer rounded-2xl p-5 shadow-lg shadow-black/5 transition-transform duration-300 hover:scale-[1.03]"
          >
            <div className="card-mesh-bg" />
            <div className="relative flex items-center gap-2 mb-3">
              <div className="h-7 w-7 rounded-lg bg-primary/15 flex items-center justify-center">
                <Ico name="solar:settings-bold-duotone" className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {locale === 'ka' ? 'AI ავტომატიზაცია' : locale === 'ru' ? 'AI-автоматизация' : 'AI Automation'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {locale === 'ka' ? 'შეამცირეთ ხარჯები 40%-ით' : locale === 'ru' ? 'Сократите расходы на 40%' : 'Cut costs by 40%'}
                </p>
              </div>
            </div>

            <div className="relative space-y-1.5">
              {[
                locale === 'ka' ? 'ბიზნეს-პროცესები' : locale === 'ru' ? 'Бизнес-процессы' : 'Business processes',
                locale === 'ka' ? 'ანგარიშგება' : locale === 'ru' ? 'Отчётность' : 'Reporting',
                locale === 'ka' ? 'გაყიდვების პაიპლაინი' : locale === 'ru' ? 'Воронка продаж' : 'Sales pipeline',
                locale === 'ka' ? 'დოკუმენტთა დამუშავება' : locale === 'ru' ? 'Обработка документов' : 'Document processing',
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <Ico name="solar:check-circle-bold-duotone" className="h-3 w-3 shrink-0 text-foreground/60" />
                  <span className="text-xs text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="relative mt-4 flex items-center justify-between border-t border-border/30 pt-3">
              <span className="text-xs text-muted-foreground">n8n · Zapier · Custom</span>
              <span className="text-xs font-semibold text-primary">
                {locale === 'ka' ? 'ინდივიდუალური' : locale === 'ru' ? 'Индивидуально' : 'Custom'}
              </span>
            </div>
          </div>

          {/* Card 3, AI Analytics (bottom-left) */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="hero-float-3 hero-card-shimmer hero-card-glass hero-card-mesh hero-card-mesh-3 hero-card-glow-blue relative cursor-pointer rounded-2xl p-5 shadow-lg shadow-black/5 transition-transform duration-300 hover:scale-[1.03]"
          >
            <div className="card-mesh-bg" />
            <div className="relative flex items-center gap-2 mb-3">
              <div className="h-7 w-7 rounded-lg bg-primary/15 flex items-center justify-center">
                <Ico name="solar:chart-bold-duotone" className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {locale === 'ka' ? 'AI ანალიტიკა' : locale === 'ru' ? 'AI-аналитика' : 'AI Analytics'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {locale === 'ka' ? 'მონაცემებიდან გადაწყვეტილებამდე' : locale === 'ru' ? 'От данных к решениям' : 'Data-driven decisions'}
                </p>
              </div>
            </div>

            <div className="relative space-y-1.5">
              {[
                locale === 'ka' ? 'პროგნოზირება' : locale === 'ru' ? 'Прогнозирование' : 'Forecasting',
                locale === 'ka' ? 'მომხმარებელთა ანალიზი' : locale === 'ru' ? 'Анализ клиентов' : 'Customer analysis',
                locale === 'ka' ? 'ავტო-რეპორტინგი' : locale === 'ru' ? 'Авто-отчётность' : 'Auto-reporting',
                locale === 'ka' ? 'დეშბორდები' : locale === 'ru' ? 'Дашборды' : 'Dashboards',
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <Ico name="solar:check-circle-bold-duotone" className="h-3 w-3 shrink-0 text-foreground/60" />
                  <span className="text-xs text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="relative mt-4 flex items-center justify-between border-t border-border/30 pt-3">
              <span className="text-xs text-muted-foreground">Python · SQL · BI</span>
              <span className="text-xs font-semibold text-primary">
                {locale === 'ka' ? 'ინდივიდუალური' : locale === 'ru' ? 'Индивидуально' : 'Custom'}
              </span>
            </div>
          </div>

          {/* Card 4, Web + AI (bottom-right) */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="hero-float-4 hero-card-shimmer hero-card-glass hero-card-mesh hero-card-mesh-4 hero-card-glow-pink relative cursor-pointer rounded-2xl p-5 shadow-lg shadow-black/5 transition-transform duration-300 hover:scale-[1.03]"
          >
            <div className="card-mesh-bg" />
            <div className="relative flex items-center gap-2 mb-3">
              <div className="h-7 w-7 rounded-lg bg-primary/15 flex items-center justify-center">
                <Ico name="solar:global-bold-duotone" className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {locale === 'ka' ? 'ვებ + AI' : locale === 'ru' ? 'Веб + AI' : 'Web + AI'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {locale === 'ka' ? 'ჭკვიანი ვებსაიტები' : locale === 'ru' ? 'Умные сайты' : 'Smart websites'}
                </p>
              </div>
            </div>

            <div className="relative space-y-1.5">
              {[
                locale === 'ka' ? 'AI ჩატი საიტზე' : locale === 'ru' ? 'AI-чат на сайте' : 'AI chat on site',
                locale === 'ka' ? 'პერსონალიზაცია' : locale === 'ru' ? 'Персонализация' : 'Personalization',
                locale === 'ka' ? 'ავტო-კონტენტი' : locale === 'ru' ? 'Авто-контент' : 'Auto-content',
                locale === 'ka' ? 'კონვერსიის ოპტიმიზაცია' : locale === 'ru' ? 'Оптимизация конверсии' : 'Conversion optimization',
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <Ico name="solar:check-circle-bold-duotone" className="h-3 w-3 shrink-0 text-foreground/60" />
                  <span className="text-xs text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="relative mt-4 flex items-center justify-between border-t border-border/30 pt-3">
              <span className="text-xs text-muted-foreground">Next.js · React</span>
              <span className="text-xs font-semibold text-primary">$550+</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && <HeroCardModal onClose={handleModalClose} />}
      </AnimatePresence>
    </section>
  );
};
