'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Ico } from '@/components/common/Ico';

type Props = {
  onClose: () => void;
};

export const HeroCardModal = ({ onClose }: Props) => {
  const locale = useLocale();

  const t = (ka: string, ru: string, en: string) =>
    locale === 'ka' ? ka : locale === 'ru' ? ru : en;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-background/95 backdrop-blur-xl"
      onClick={onClose}
      onMouseLeave={onClose}
    >
      <div className="container mx-auto grid grid-cols-2 gap-5 px-4 max-w-180">
        {/* Card 1, Web & Mobile (top-left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: -40, y: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, x: -40, y: -20 }}
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="card-glow flex flex-col cursor-pointer rounded-3xl border border-border/50 bg-card p-5 shadow-3xl shadow-black/20 backdrop-blur-md"
        >
          <div className="flex flex-1 min-h-0 flex-col">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15">
                <Ico name="solar:monitor-bold-duotone" className="h-4.5 w-4.5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  {t('ვებ და მობაილი', 'Веб и мобайл', 'Web & Mobile')}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {t('კონვერსიაზე ორიენტირებული', 'Ориентировано на конверсию', 'Conversion focused')}
                </p>
              </div>
            </div>

            <div className="space-y-1.5">
              {[
                { label: 'E-commerce', desc: t('ონლაინ მაღაზიები, გადახდები', 'Интернет-магазины, оплата', 'Online stores, payments') },
                { label: t('ჯავშნის სისტემა', 'Система бронирования', 'Booking system'), desc: t('ტურიზმი, რესტორნები, სერვისები', 'Туризм, рестораны, сервисы', 'Tourism, restaurants, services') },
                { label: t('ლენდინგ-გვერდი', 'Лендинг', 'Landing page'), desc: t('ლიდ-გენერაცია, A/B ტესტები', 'Лид-генерация, A/B тесты', 'Lead generation, A/B tests') },
                { label: t('კორპორატიული საიტი', 'Корп. сайт', 'Corporate site'), desc: t('ბრენდის იმიჯი, SEO', 'Имидж бренда, SEO', 'Brand image, SEO') },
                { label: 'SaaS', desc: t('პროდუქტის პლატფორმა, დეშბორდი', 'Продуктовая платформа, дашборд', 'Product platform, dashboard') },
                { label: t('მობაილი (PWA)', 'Мобильное приложение (PWA)', 'Mobile app (PWA)'), desc: t('კროს-პლატფორმული', 'Кросс-платформенное', 'Cross-platform') },
              ].map(({ label, desc }) => (
                <div key={label} className="flex items-start gap-2 text-xs">
                  <Ico name="solar:check-circle-bold-duotone" className="h-3.5 w-3.5 shrink-0 text-primary/70 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">{label}</span>
                    <span className="text-muted-foreground">, {desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-3 border-t border-border/30">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground">Next.js · React · React Native</span>
                <span className="text-[11px] font-semibold text-primary">
                  {t('უსწრაფესი MVP', 'Быстрее всех', 'Fastest MVP')}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2, AI Integration (top-right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40, y: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, x: 40, y: -20 }}
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="card-glow flex flex-col cursor-pointer rounded-3xl border border-primary/30 bg-card p-5 shadow-3xl shadow-black/20 backdrop-blur-md"
        >
          <div className="flex flex-1 min-h-0 flex-col">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15">
                <Ico name="solar:cpu-bold-duotone" className="h-4.5 w-4.5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  {t('AI ინტეგრაცია', 'Интеграция AI', 'AI Integration')}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {t('ჭკვიანი გადაწყვეტილებები', 'Умные решения', 'Smart solutions')}
                </p>
              </div>
            </div>

            <div className="space-y-1.5">
              {[
                { label: t('ჩატბოტები', 'Чатботы', 'Chatbots'), desc: t('მხარდაჭერა 24/7, ლიდების კვალიფიკაცია', 'Поддержка 24/7, квалификация лидов', 'Support 24/7, lead qualification') },
                { label: t('AI აგენტები', 'AI агенты', 'AI Agents'), desc: t('ავტონომიური ამოცანები, ვორქფლოუ', 'Автономные задачи, workflow', 'Autonomous tasks, workflows') },
                { label: t('დოკუმენტთა დამუშავება', 'Обработка документов', 'Document processing'), desc: t('ავტომატური ანალიზი, ექსტრაქცია', 'Авто-анализ, экстракция', 'Auto-analysis, extraction') },
                { label: t('მომხმარებელთა მხარდაჭერა', 'Поддержка клиентов', 'Customer support'), desc: t('AI-ით გაძლიერებული', 'Усиленная AI', 'AI-powered') },
                { label: t('რეკომენდაციები', 'Рекомендации', 'Recommendations'), desc: t('პერსონალიზებული კონტენტი', 'Персонализированный контент', 'Personalized content') },
              ].map(({ label, desc }) => (
                <div key={label} className="flex items-start gap-2 text-xs">
                  <Ico name="solar:check-circle-bold-duotone" className="h-3.5 w-3.5 shrink-0 text-primary/70 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">{label}</span>
                    <span className="text-muted-foreground">, {desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-3 border-t border-border/30">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground">GPT · Claude · Custom</span>
                <span className="text-[11px] font-semibold text-primary">
                  {t('კასტომ მოდელები', 'Кастом модели', 'Custom models')}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3, Automation (bottom-left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: -40, y: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, x: -40, y: 20 }}
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="card-glow flex flex-col cursor-pointer rounded-3xl border border-border/50 bg-card/90 p-5 shadow-3xl shadow-black/15 backdrop-blur-md"
        >
          <div className="flex flex-1 min-h-0 flex-col">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15">
                <Ico name="solar:settings-bold-duotone" className="h-4.5 w-4.5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  {t('ავტომატიზაცია', 'Автоматизация', 'Automation')}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {t('დაზოგეთ საათები ყოველდღე', 'Экономьте часы каждый день', 'Save hours every day')}
                </p>
              </div>
            </div>

            <div className="space-y-1.5">
              {[
                { label: t('ბიზნეს-პროცესები', 'Бизнес-процессы', 'Business processes'), desc: t('ავტომატური ვორქფლოუ', 'Автоматические workflow', 'Automated workflows') },
                { label: t('ანგარიშგება', 'Отчётность', 'Reporting'), desc: t('რეალურ დროში მონაცემები', 'Данные в реальном времени', 'Real-time dashboards') },
                { label: t('გაყიდვები', 'Продажи', 'Sales pipeline'), desc: t('ავტო-ფოლოუაპი, ლიდ-სქორინგი', 'Авто-фоллоуапы, лид-скоринг', 'Auto follow-ups, lead scoring') },
                { label: 'CRM', desc: t('კლიენტთა მართვა, სეგმენტაცია', 'Управление клиентами, сегментация', 'Client management, segmentation') },
                { label: t('ინტეგრაციები', 'Интеграции', 'Integrations'), desc: t('API-ები, ვებჰუქები, სინქრონიზაცია', 'API, вебхуки, синхронизация', 'APIs, webhooks, sync') },
              ].map(({ label, desc }) => (
                <div key={label} className="flex items-start gap-2 text-xs">
                  <Ico name="solar:check-circle-bold-duotone" className="h-3.5 w-3.5 shrink-0 text-primary/70 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">{label}</span>
                    <span className="text-muted-foreground">, {desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-3 border-t border-border/30">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground">n8n · Zapier · Custom</span>
                <span className="text-[11px] font-semibold text-primary">
                  {t('ნებისმიერი სტეკი', 'Любой стек', 'Any stack')}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 4, AI Creative / Graphics (bottom-right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40, y: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, x: 40, y: 20 }}
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="card-glow flex flex-col cursor-pointer rounded-3xl border border-border/50 bg-card/80 p-5 shadow-3xl shadow-black/15 backdrop-blur-md"
        >
          <div className="flex flex-1 min-h-0 flex-col">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15">
                <Ico name="solar:palette-bold-duotone" className="h-4.5 w-4.5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  {t('AI კრეატივი', 'AI креатив', 'AI Creative')}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {t('ვიზუალი და ვიდეო', 'Визуал и видео', 'Visuals & Video')}
                </p>
              </div>
            </div>

            <div className="space-y-1.5">
              {[
                { label: t('AI გრაფიკა', 'AI графика', 'AI Graphics'), desc: t('ბანერები, ილუსტრაციები, სოციალური მედია', 'Баннеры, иллюстрации, соцсети', 'Banners, illustrations, social media') },
                { label: t('ვიდეოპროდუქცია', 'Видеопродакшн', 'Video production'), desc: t('პრომო, რილსები, ანიმაცია', 'Промо, рилсы, анимация', 'Promo, reels, animation') },
                { label: t('ბრენდ-ვიზუალი', 'Бренд-визуал', 'Brand visuals'), desc: t('ლოგო, სტილი, გაიდლაინი', 'Логотип, стиль, гайдлайн', 'Logo, style, guideline') },
                { label: t('UI/UX დიზაინი', 'UI/UX дизайн', 'UI/UX Design'), desc: t('ფიგმა, პროტოტიპი, დიზაინ-სისტემა', 'Figma, прототип, дизайн-система', 'Figma, prototype, design system') },
                { label: t('მარკეტინგული მასალა', 'Маркетинговые материалы', 'Marketing materials'), desc: t('პრეზენტაციები, ბროშურები', 'Презентации, брошюры', 'Presentations, brochures') },
              ].map(({ label, desc }) => (
                <div key={label} className="flex items-start gap-2 text-xs">
                  <Ico name="solar:check-circle-bold-duotone" className="h-3.5 w-3.5 shrink-0 text-primary/70 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">{label}</span>
                    <span className="text-muted-foreground">, {desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-3 border-t border-border/30">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground">Midjourney · Sora · Figma</span>
                <span className="text-[11px] font-semibold text-primary">
                  {t('AI-ით', 'На AI', 'AI-powered')}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Close hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-sm text-muted-foreground">
          {t('დააწკაპუნეთ, ESC ან გაიტანეთ მაუსი დასახურად', 'Кликните, ESC или уберите мышь чтобы закрыть', 'Click, ESC or move mouse away to close')}
        </p>
      </motion.div>
    </motion.div>
  );
};
