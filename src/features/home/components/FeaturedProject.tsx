'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';
import { Button } from '@/components/ui/button';

export const FeaturedProject = () => {
  const t = useTranslations('featured');
  const tProjects = useTranslations('projects');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden border-y border-border/50 py-16 md:py-24">
      {/* Background glow */}
      <div className="glow-orb glow-primary absolute -right-40 top-1/4 h-80 w-80" />
      <div className="noise pointer-events-none absolute inset-0" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t('label')}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Left, info */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  Atlas
                  <span className="gradient-text">Caucasus</span>
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  TOUR LLC
                </p>

                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                  {t('description')}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Next.js', 'React', 'AI', 'B2B', 'Tourism'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/50 bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  className="gradient-bg px-6 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition duration-200 hover:opacity-90 active:scale-[0.98]"
                >
                  <Link href={`/${locale}/projects/atlascaucasus`}>
                    {t('cta')} &rarr;
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right, browser mockup + stats */}
            <div className="flex flex-col gap-4">
              {/* Browser mockup */}
              <div className="browser-frame flex-1">
                <div className="browser-frame-bar">
                  <div className="browser-frame-dot" />
                  <div className="browser-frame-dot" />
                  <div className="browser-frame-dot" />
                  <div className="browser-frame-url">atlascaucasus.ge</div>
                </div>
                <div className="relative overflow-hidden">
                  {/* Gradient bg */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/3" />

                  {/* Mock UI, mini website preview */}
                  <div className="relative px-5 pt-5 pb-3">
                    {/* Mock nav bar */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded bg-primary/30" />
                        <div className="mock-nav-dot w-16" />
                      </div>
                      <div className="flex gap-3">
                        <div className="mock-nav-dot" />
                        <div className="mock-nav-dot" />
                        <div className="mock-nav-dot w-20" />
                      </div>
                    </div>

                    {/* Mock hero area */}
                    <div className="mt-5 flex flex-col items-center text-center">
                      <div className="mock-line w-3/4" />
                      <div className="mock-line mt-1.5 w-1/2" />
                      <p className="stat-number mt-4 text-5xl text-foreground md:text-6xl">70%</p>
                      <p className="mt-1.5 text-xs font-semibold tracking-widest text-muted-foreground">
                        AINOW OWNERSHIP
                      </p>
                    </div>

                    {/* Mock content blocks */}
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="mock-block h-10" />
                      <div className="mock-block h-10" />
                      <div className="mock-block h-10" />
                    </div>

                    {/* Mock footer line */}
                    <div className="mt-3 flex justify-center">
                      <div className="mock-line w-24" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="card-glow overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6">
                  <p className="stat-number relative z-10 text-3xl text-foreground">2</p>
                  <p className="relative z-10 mt-1 text-xs text-muted-foreground">CSO Partners</p>
                </div>
                <div className="card-glow overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6">
                  <div className="relative z-10 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-success" />
                    <p className="text-xs font-semibold text-foreground">
                      {tProjects('status.mvp')}
                    </p>
                  </div>
                  <p className="relative z-10 mt-2 text-xs text-muted-foreground">
                    {t('statusLabel')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
