'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';

const cases = [
  {
    key: 'glow',
    url: 'https://glow.ge',
    domain: 'glow.ge',
    tags: ['AI', 'SaaS', 'Next.js'],
  },
  {
    key: 'tulip',
    url: 'https://tulip.ge',
    domain: 'tulip.ge',
    tags: ['E-Commerce', 'Next.js', 'Flowers'],
  },
  {
    key: 'techbrain',
    url: 'https://techbrain.ge',
    domain: 'techbrain.ge',
    tags: ['E-Commerce', 'CCTV', 'Next.js'],
  },
  {
    key: 'andrewaltair',
    url: 'https://andrewaltair.ge',
    domain: 'andrewaltair.ge',
    tags: ['AI', 'Marketplace', 'Next.js'],
  },
] as const;

export const Cases = () => {
  const t = useTranslations('cases');

  return (
    <section className="relative py-16 md:py-24">
      {/* Background */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="glow-orb glow-primary absolute right-1/4 top-1/2 h-80 w-80 -translate-y-1/2 opacity-[0.05]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t('subtitle')}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              {t('title')}
            </h2>
          </div>
        </FadeIn>

        {/* Cases grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 lg:gap-5">
          {cases.map((project, i) => (
            <FadeIn key={project.key} delay={i * 0.08}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/50 transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card hover:shadow-md"
              >
                {/* Browser mockup header */}
                <div className="browser-frame-bar">
                  <div className="browser-frame-dot" />
                  <div className="browser-frame-dot" />
                  <div className="browser-frame-dot" />
                  <div className="browser-frame-url">{project.domain}</div>
                </div>

                {/* Mock content area */}
                <div className="relative flex-1 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/3" />
                  <div className="relative px-5 pb-3 pt-5">
                    {/* Mock nav */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3.5 w-3.5 rounded bg-primary/30" />
                        <div className="mock-nav-dot w-12" />
                      </div>
                      <div className="flex gap-2">
                        <div className="mock-nav-dot" />
                        <div className="mock-nav-dot" />
                      </div>
                    </div>

                    {/* Mock hero */}
                    <div className="mt-4 flex flex-col items-center text-center">
                      <div className="mock-line w-3/4" />
                      <div className="mock-line mt-1.5 w-1/2" />
                      <div className="mt-3 grid w-full grid-cols-3 gap-1.5">
                        <div className="mock-block h-6" />
                        <div className="mock-block h-6" />
                        <div className="mock-block h-6" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="relative z-10 border-t border-border/30 p-5">
                  <h3 className="text-lg font-bold">
                    {t(`${project.key}.name`)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {t(`${project.key}.desc`)}
                  </p>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/50 bg-muted/30 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
