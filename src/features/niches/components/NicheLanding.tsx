import type { Metadata } from 'next';
import Link from 'next/link';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { FaqPageSchema } from '@/components/seo/FaqPageSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { SeoArticle } from '@/features/services/components/SeoArticle';
import { NicheChatDemo } from '@/features/clinics/components/ClinicChatDemo';
import { nicheLabel, relatedNiches } from '../labels';
import { AI_CHATS_NICHE_REFERENCE } from '../data30modules';
import type { Content, Locale, NicheEntry } from '../types';

/*
 * DESIGN PLAN (VISUAL_TASTE_ENGINE), inherited verbatim from the clinic
 * landing this template was extracted from. Vertical landing for a Georgian
 * SMB owner, trust-first audience, pristine light marketing surface. Dials:
 * VARIANCE 5, MOTION 5, DENSITY 4. Hero: asymmetric split with the LIVE bot as
 * the thesis (the chat IS the product, not decoration). Alternating editorial
 * blocks; dark contrast panel for the honesty section; off-grid oversized stat
 * for proof; numbered timeline for the real booking sequence. Blue liquid glass
 * is the aiNOW accent, shared with the public page chrome.
 *
 * This is the single shared body for every /ai-chatbot-<niche> page. All copy
 * comes from the per-niche registry entry; only the persona key and the
 * ServiceSchema serviceType vary the behaviour.
 */

const SITE = AI_CHATS_NICHE_REFERENCE.sourceSite;
const PRODUCT_SITE = AI_CHATS_NICHE_REFERENCE.productSite;
const DEMO_PATH = AI_CHATS_NICHE_REFERENCE.demoPath;
const REFERENCE_AVATAR = '/images/family-reference/aichats-chat-hub.png';
// These inherited niche routes are explicit aiCHATS owner references on the
// non-pilot products. They are never target-owned or indexable.
const PRIMARY = new Set<string>(['ka', 'en', 'ru']);

const OWNER_LABEL: Record<string, string> = {
  ka: 'aiCHATS by aiNOW',
  en: 'aiCHATS by aiNOW',
  ru: 'aiCHATS by aiNOW',
};
const REFERENCE_NOTE: Record<string, string> = {
  ka: 'ეს არის aiCHATS by aiNOW-ის საინფორმაციო მითითება; ამ გვერდის დემო შეტყობინებებს არ აგზავნის.',
  en: 'This is an aiCHATS by aiNOW reference; this page preview does not send messages.',
  ru: 'Это справочная страница aiCHATS by aiNOW; демо на этой странице не отправляет сообщения.',
};

function resolveCanonicalLocale(locale: string): Locale {
  return PRIMARY.has(locale) ? (locale as Locale) : 'ka';
}

function resolveNicheCanonical(entry: NicheEntry, locale: string): { locale: Locale; url: string } {
  const canonicalLocale = resolveCanonicalLocale(locale);
  const path = `/${entry.slug}`;
  return {
    locale: canonicalLocale,
    url: canonicalLocale === 'ka' ? `${SITE}${path}` : `${SITE}/${canonicalLocale}${path}`,
  };
}

function pick(entry: NicheEntry, locale: string): Content {
  return entry.content[locale as Locale] ?? entry.content.ka;
}

export function nicheMetadata(entry: NicheEntry, locale: string): Metadata {
  const c = pick(entry, locale);
  const path = `/${entry.slug}`;
  const canonical = resolveNicheCanonical(entry, locale).url;

  // Per-niche OG image via the site's /api/og generator (title headline +
  // eyebrow badge). Without an explicit images entry these pages ship NO OG
  // image at all: Next.js replaces the parent openGraph object wholesale.
  const ogParams = new URLSearchParams({ title: c.title, tags: OWNER_LABEL[resolveCanonicalLocale(locale)] });
  const ogImage = `${SITE}/api/og?${ogParams.toString()}`;

  return {
    title: { absolute: `${c.title} | aiCHATS by aiNOW` },
    description: c.description,
    alternates: {
      canonical,
      languages: {
        ka: `${SITE}${path}`,
        en: `${SITE}/en${path}`,
        ru: `${SITE}/ru${path}`,
        'x-default': `${SITE}${path}`,
      },
    },
    openGraph: { title: c.title, description: c.description, url: canonical, images: [ogImage] },
    twitter: { card: 'summary_large_image', title: c.title, description: c.description, images: [ogImage] },
    // Borrowed owner references are noindex in every locale, including ka/en/ru.
    robots: AI_CHATS_NICHE_REFERENCE.robots,
  };
}

// Localized chrome for the related-industries block + breadcrumb hub name.
const HUB_NAME: Record<string, string> = { ka: 'aiCHATS by aiNOW', en: 'aiCHATS by aiNOW', ru: 'aiCHATS by aiNOW' };
const RELATED_TITLE: Record<string, string> = {
  ka: 'aiCHATS by aiNOW — მონათესავე დარგები',
  en: 'aiCHATS by aiNOW — related industries',
  ru: 'aiCHATS by aiNOW — смежные отрасли',
};
const ALL_INDUSTRIES: Record<string, string> = {
  ka: 'aiCHATS by aiNOW — ყველა დარგი',
  en: 'aiCHATS by aiNOW — all industries',
  ru: 'aiCHATS by aiNOW — все отрасли',
};

export function NicheLanding({ entry, locale }: { entry: NicheEntry; locale: string }) {
  const c = pick(entry, locale);
  const { locale: canonicalLocale, url: canonical } = resolveNicheCanonical(entry, locale);
  const sourceHref = (p: string): string =>
    canonicalLocale === 'ka' ? `${SITE}${p}` : `${SITE}/${canonicalLocale}${p}`;
  const productHref = (p: string): string => {
    const productLocale = resolveCanonicalLocale(locale);
    return productLocale === 'ka' ? `${PRODUCT_SITE}${p}` : `${PRODUCT_SITE}/${productLocale}${p}`;
  };
  const ownerLabel = OWNER_LABEL[canonicalLocale];
  const referenceNote = REFERENCE_NOTE[canonicalLocale];

  return (
    <>
      <ServiceSchema
        name={`${ownerLabel} — ${c.title}`}
        description={c.description}
        url={canonical}
        serviceType={`${ownerLabel} · ${entry.serviceType}`}
      />
      <FaqPageSchema items={c.faq} />
      <BreadcrumbSchema
        crumbs={[
          { name: ownerLabel, item: canonicalLocale === 'ka' ? SITE : `${SITE}/${canonicalLocale}` },
          { name: HUB_NAME[canonicalLocale] ?? HUB_NAME.en, item: canonicalLocale === 'ka' ? `${SITE}/ai-chatboti` : `${SITE}/${canonicalLocale}/ai-chatboti` },
          { name: c.title, item: canonical },
        ]}
      />

      {/* HERO: asymmetric split, top-left lead + the LIVE bot as the thesis */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto grid min-w-0 grid-cols-1 max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="min-w-0">
              <p className="eyebrow text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{ownerLabel} · {c.eyebrow}</p>
              <h1 className="font-display mt-5 text-balance text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 dark:text-white md:mt-6 md:text-4xl lg:text-5xl">
                {c.h1} <span className="text-blue-600 dark:text-blue-400">{c.h1Accent}</span>
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600 dark:text-slate-300 md:mt-6 md:text-lg">{c.lead}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={productHref(DEMO_PATH)}
                  className="dodo-glass-box inline-flex items-center justify-center rounded-full border-blue-500/60 !bg-linear-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-[transform,filter,box-shadow] duration-200 hover:!bg-blue-700 hover:brightness-105 active:scale-[0.96] dark:border-blue-400/50 dark:!bg-linear-to-r dark:from-blue-500 dark:via-blue-500 dark:to-blue-600 dark:text-slate-950 dark:hover:!bg-blue-400"
                >
                  {c.ctaDemo}
                </a>
                <Link
                  href={productHref('/contact')}
                  className="dodo-glass-box inline-flex items-center justify-center rounded-full border-slate-300/70 px-6 py-3 text-sm font-semibold text-slate-900 transition-[transform,border-color,box-shadow] duration-200 hover:border-blue-400/60 hover:text-blue-700 active:scale-[0.96] dark:border-white/15 dark:text-slate-100 dark:hover:border-blue-400/60 dark:hover:text-blue-300"
                >
                  {c.ctaPilot}
                </Link>
              </div>
            </div>
            <NicheChatDemo
              name={c.chatName}
              role={c.chatRole}
              greeting={c.chatGreeting}
              placeholder={c.chatPlaceholder}
              chips={c.chatChips}
              note={`${c.chatNote} ${referenceNote}`}
              persona={entry.key}
              avatar={REFERENCE_AVATAR}
              readOnly
            />
          </div>
        </div>
      </section>

      {/* PAIN: three offset rows, deliberately not an equal-card grid */}
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-balance text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">{c.painTitle}</h2>
            <div className="mt-8 space-y-5">
              {c.pains.map((f, i) => (
                <article
                  key={f.h}
                  className={`dodo-glass-box max-w-2xl p-6 md:p-7 ${i === 1 ? 'md:ml-16' : i === 2 ? 'md:ml-32' : ''}`}
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight text-slate-950 dark:text-white md:text-xl">{f.h}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">{f.p}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS: numbered timeline (a real sequence) */}
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-balance text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">{c.stepsTitle}</h2>
            <ol className="mt-8 space-y-0">
              {c.steps.map((s, i) => (
                <li key={s.h} className="relative flex gap-5 pb-8 last:pb-0">
                  {i < c.steps.length - 1 && (
                    <span aria-hidden className="absolute left-[17px] top-10 h-[calc(100%-2.5rem)] w-px bg-blue-200/80 dark:bg-blue-900/70" />
                  )}
                  <span className="dodo-glass-inset dodo-glass-pill font-display z-10 flex size-9 shrink-0 items-center justify-center border-blue-300/70 text-sm font-bold tabular-nums text-blue-600 dark:border-blue-400/40 dark:text-blue-300">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-slate-950 dark:text-white md:text-lg">{s.h}</h3>
                    <p className="mt-1.5 max-w-xl text-pretty text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">{s.p}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* HONESTY: dark contrast panel, centered statement */}
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="dodo-glass-card mx-auto max-w-5xl border-slate-800/30 after:hidden !bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 p-8 text-white md:p-14 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <h2 className="font-display text-balance text-center text-2xl font-bold tracking-tight text-white md:text-3xl">{c.honestyTitle}</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-300 md:text-base">{c.honestyLead}</p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {c.honesty.map((h) => (
                <div key={h.h}>
                  <h3 className="font-display text-base font-semibold text-white md:text-lg">{h.h}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-slate-300">{h.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROOF: off-grid oversized stat */}
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 md:flex-row md:items-end md:gap-12">
            <div className="shrink-0">
              <p className="font-display text-7xl font-bold leading-none tracking-tight text-blue-600 dark:text-blue-400 md:text-8xl">{c.proofStat}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{c.proofStatLabel}</p>
            </div>
            <div className="max-w-md md:pb-1">
              <p className="text-pretty text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">{c.proofNote}</p>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">{c.channelsLabel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PILOT: risk-reversal checklist, no prices */}
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="dodo-glass-card mx-auto max-w-3xl p-8 md:p-12">
            <h2 className="font-display text-balance text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">{c.pilotTitle}</h2>
            <ul className="mt-6 space-y-4">
              {c.pilotPoints.map((p) => (
                <li key={p} className="dodo-glass-inset flex gap-3 px-3 py-3">
                  <span aria-hidden className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-bold text-emerald-600 dark:text-emerald-300">
                    ✓
                  </span>
                  <p className="text-pretty text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">{p}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{c.pilotNote}</p>
            <div className="mt-8">
              <Link
                href={productHref('/contact')}
                className="dodo-glass-box inline-flex items-center justify-center rounded-full border-blue-500/60 !bg-linear-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-[transform,filter,box-shadow] duration-200 hover:!bg-blue-700 hover:brightness-105 active:scale-[0.96] dark:border-blue-400/50 dark:!bg-linear-to-r dark:from-blue-500 dark:via-blue-500 dark:to-blue-600 dark:text-slate-950 dark:hover:!bg-blue-400"
              >
                {c.ctaPilot}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SeoArticle data={c.article} />

      {/* FAQ */}
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-balance text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">{c.faqTitle}</h2>
            <div className="mt-8 space-y-6">
              {c.faq.map((item) => (
                <div key={item.q} className="dodo-glass-box p-5 md:p-6">
                  <h3 className="font-display text-base font-semibold text-slate-950 dark:text-white md:text-lg">{item.q}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED INDUSTRIES: same-cluster internal mesh + hub backlink */}
      <section className="relative py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              {RELATED_TITLE[locale] ?? RELATED_TITLE.en}
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {relatedNiches(entry.slug).map((n) => (
                <Link
                  key={n.slug}
                  href={sourceHref(`/${n.slug}`)}
                  className="dodo-glass-inset dodo-glass-pill px-4 py-2 text-sm font-medium text-slate-800 transition-[transform,border-color,box-shadow,color] duration-200 hover:border-blue-400/60 hover:text-blue-700 dark:text-slate-100 dark:hover:border-blue-400/60 dark:hover:text-blue-300"
                >
                  {nicheLabel(n, locale)}
                </Link>
              ))}
              <Link
                href={sourceHref('/ai-chatboti#industries')}
                className="dodo-glass-inset dodo-glass-pill border-blue-300/70 px-4 py-2 text-sm font-medium text-blue-600 transition-[transform,border-color,box-shadow,color] duration-200 hover:border-blue-500 dark:border-blue-400/40 dark:text-blue-300 dark:hover:border-blue-300"
              >
                {ALL_INDUSTRIES[locale] ?? ALL_INDUSTRIES.en} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG INTERLINKS */}
      <section className="relative py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{c.linksTitle}</p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {c.links.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={sourceHref(`/blog/${l.slug}`)}
                    className="text-sm font-medium text-blue-600 underline-offset-4 hover:text-blue-700 hover:underline dark:text-blue-300 dark:hover:text-blue-200"
                  >
                    {l.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-16 md:py-24">
        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
          <div className="dodo-glass-card mx-auto max-w-2xl p-8 text-center md:p-12">
            <div className="flex flex-col items-center gap-6">
              <p className="font-display text-balance text-lg font-semibold text-slate-950 dark:text-white md:text-xl">{c.ctaLead}</p>
              <Link
                href={productHref('/contact')}
                className="dodo-glass-box inline-flex items-center justify-center rounded-full border-blue-500/60 !bg-linear-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-[transform,filter,box-shadow] duration-200 hover:!bg-blue-700 hover:brightness-105 active:scale-[0.96] dark:border-blue-400/50 dark:!bg-linear-to-r dark:from-blue-500 dark:via-blue-500 dark:to-blue-600 dark:text-slate-950 dark:hover:!bg-blue-400"
              >
                {c.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
