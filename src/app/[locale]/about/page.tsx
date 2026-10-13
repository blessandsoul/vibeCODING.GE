import type { Metadata } from 'next';
import { AiNowImage as Image } from '@/features/home/components/ainow/AiNowImage';
import Link from 'next/link';

import { FadeIn } from '@/components/common/FadeIn';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { getAboutContent } from '@/features/about/data/about-content';
import { publicTeam } from '@/features/about/data/team';
import { ownerServiceMetadata } from '@/lib/owner-seo';
import { getPageContentLocale } from '@/i18n/seo-locales';
import { cn } from '@/lib/utils';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = getAboutContent(locale);
  const contentLocale = getPageContentLocale('/about', locale);
  return ownerServiceMetadata({
    locale: contentLocale,
    path: '/about',
    title: copy.title,
    description: copy.description,
  });
}
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{children}</p>;
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const copy = getAboutContent(locale);
  const pick = (value: { ka: string; en: string }) => (value as Record<string, string>)[locale] ?? value.en;

  return (
    <div className="ainow-blueprint-bg min-h-dvh text-slate-900 dark:text-slate-100">
      <div className="space-y-14 py-12 md:space-y-20 md:py-20">
        <SectionContainer>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>aiNOW</Eyebrow>
              <h1 className="mt-4 font-headline text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 md:text-4xl lg:text-5xl dark:text-white">{copy.title}</h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">{copy.description}</p>
            </div>
          </FadeIn>
        </SectionContainer>

        <SectionContainer>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>aiNOW PIPELINE</Eyebrow>
              <h2 className="mt-3 font-headline text-2xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 md:text-4xl dark:text-white">{copy.pipelineTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{copy.pipelineDescription}</p>
            </div>
          </FadeIn>
          <div className="mx-auto mt-10 grid max-w-6xl gap-3 md:grid-cols-7">
            {copy.pipeline.map((step, index) => (
              <FadeIn key={step.id} delay={index * 0.05}>
                <div className="dodo-glass-card relative h-full p-4">
                  <span className="font-mono text-[10px] font-bold tracking-[0.14em]" style={{ color: step.color }}>0{index + 1} · {step.name}</span>
                  <h3 className="mt-3 font-headline text-lg font-semibold leading-tight tracking-[-0.025em] text-slate-950 dark:text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{step.description}</p>
                  {index < copy.pipeline.length - 1 ? <span className="dodo-glass-inset absolute -bottom-5 left-1/2 z-10 hidden h-7 w-7 -translate-x-1/2 items-center justify-center text-slate-500 dark:text-slate-300 md:flex">→</span> : null}
                </div>
              </FadeIn>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-2xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 md:text-4xl dark:text-white">{copy.productsTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{copy.productsDescription}</p>
            </div>
          </FadeIn>
          <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.products.map((product, index) => (
              <FadeIn key={product.name} delay={index * 0.06}>
                <Link href={product.href} className="dodo-glass-box group flex h-full flex-col p-5 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{product.label}</span>
                  <h3 className="mt-3 font-headline text-xl font-semibold tracking-[-0.025em]" style={{ color: product.color }}>{product.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{product.description}</p>
                  <span className="mt-5 text-sm font-semibold text-blue-600 dark:text-blue-300">→</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer>
          <FadeIn><h2 className="text-center font-headline text-2xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 md:text-4xl dark:text-white">{copy.teamTitle}</h2></FadeIn>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {publicTeam.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.08}>
                <div className="dodo-glass-card flex h-full flex-col items-center p-7 text-center">
                  <div className={cn('rounded-full bg-linear-to-br p-[2.5px]', member.accent)}>
                    <div className="h-24 w-24 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-900">
                      <Image src={member.image} alt={member.name} width={96} height={96} className="h-full w-full object-cover" style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined} frameClassName="h-full w-full" />
                    </div>
                  </div>
                  <h3 className="mt-4 font-headline text-xl font-semibold tracking-[-0.025em] text-slate-950 dark:text-white">{locale === 'ka' ? member.nameKa : member.name}</h3>
                  <span className={cn('mt-1.5 inline-block rounded-full bg-linear-to-r px-3 py-0.5 text-xs font-medium text-white', member.accent)}>{pick(member.role)}</span>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{pick(member.bio)}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer>
          <FadeIn><h2 className="text-center font-headline text-2xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 md:text-4xl dark:text-white">{copy.valuesTitle}</h2></FadeIn>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-3">
            {copy.values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.08}>
                <div className="dodo-glass-card p-6 text-center">
                  <h3 className="font-headline text-xl font-semibold tracking-[-0.025em] text-slate-950 dark:text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}
