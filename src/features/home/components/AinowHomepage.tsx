import Image from 'next/image';

import { Ico } from '@/components/common/Ico';
import { Link } from '@/i18n/navigation';
import { anonymousCases } from '@/features/projects/data/anonymous-cases';
import type { LocalizedText } from '@/features/projects/types/project.types';
import { getGoogleReviews } from '@/lib/google-reviews';
import { getPublicHomeContent, PUBLIC_FACTS, type PublicFaq } from '@/lib/public-facts';
import { getHomePresentation } from '@/features/home/content/home-presentation';
import { AinowHeroDemo, type AinowHeroDemoCopy } from './AinowHeroDemo';
import './ainow-home.css';

type HeroCopy = {
  eyebrow: string;
  h1: string;
  supportingSentence: string;
  decorativeVerbs: readonly string[];
  primaryCta: string;
  proof: string;
  ownerDemoRequest: string;
  demoOutcome: { title: string; body: string };
};

function Wordmark({ mark = 'NOW', tone, darkTone }: { mark?: string; tone?: string; darkTone?: string }) {
  return (
    <span
      className="wordmark-3d ah-wordmark"
      style={tone ? ({ '--ah-tone': tone, '--ah-tone-dark': darkTone ?? tone } as React.CSSProperties) : undefined}
    >
      <span className="wm-prefix">ai</span>
      <span className="wm-mark">{mark}</span>
      {mark === 'NOW' && <span className="wm-accent" aria-hidden="true" />}
    </span>
  );
}

function IaiMark() {
  return (
    <span className="ah-iai-mark" aria-label="iAI">
      <span>i</span><b>AI</b>
    </span>
  );
}

function SectionHeading({ label, heading, description }: { label: string; heading: string; description: string }) {
  return (
    <header className="ah-section-head">
      <p className="ah-eyebrow">{label}</p>
      <h2>{heading}</h2>
      <p className="ah-section-lead">{description}</p>
    </header>
  );
}

function localize(value: LocalizedText, locale: string): string {
  return value[locale as keyof LocalizedText] ?? value.en ?? value.ka;
}

function withoutEmoji(value: string): string {
  return value.replace(/\p{Extended_Pictographic}/gu, '').replace(/\s{2,}/g, ' ').trim();
}

function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <span className="ah-stars" role="img" aria-label={`${rating} / 5`}>
      {[1, 2, 3, 4, 5].map((index) => (
        <Ico key={index} name="solar:star-bold-duotone" className={index <= rounded ? 'is-filled' : ''} />
      ))}
    </span>
  );
}

const OUTCOME_ICONS = [
  'solar:chat-round-dots-bold-duotone',
  'solar:shield-check-bold-duotone',
  'solar:widget-5-bold-duotone',
] as const;

const PRODUCT_DATA = [
  { name: 'CONTENT', tone: '#be185d', darkTone: '#f472b6', href: 'https://aicontent.ge', icon: 'solar:pen-new-square-bold-duotone' },
  { name: 'ADS', tone: '#047857', darkTone: '#34d399', href: 'https://aiads.ge', icon: 'solar:target-bold-duotone' },
  { name: 'CHATS', tone: '#C2185B', darkTone: '#F472B6', href: 'https://aichats.ge', icon: 'solar:chat-round-line-bold-duotone' },
] as const;

const TIKTOK_ROADMAP_COPY: Record<
  string,
  { status: string; title: string; description: string }
> = {
  ka: {
    status: 'მალე',
    title: 'TikTok-ის ინტეგრაციები მზადდება',
    description: 'დაგეგმილია კონტენტის გამოქვეყნება, რეკლამის მართვა და ბიზნეს შეტყობინებები. ჯერ არცერთი TikTok API ინტეგრაცია არ არის ხელმისაწვდომი. გაშვება დამოკიდებულია TikTok-ის დამტკიცებასა და რეგიონულ მხარდაჭერაზე.',
  },
  en: {
    status: 'Coming soon',
    title: 'TikTok integrations are in preparation',
    description: 'Content publishing, advertising management, and business messaging are planned. No TikTok API integration is currently available. Launch depends on TikTok approval and regional support.',
  },
  ru: {
    status: 'Скоро',
    title: 'Интеграции с TikTok готовятся',
    description: 'Запланированы публикация контента, управление рекламой и бизнес-сообщения. Сейчас ни одна интеграция TikTok API недоступна. Запуск зависит от одобрения TikTok и региональной поддержки.',
  },
  de: {
    status: 'Demnächst',
    title: 'TikTok-Integrationen sind in Vorbereitung',
    description: 'Content-Publishing, Werbeverwaltung und Business Messaging sind geplant. Derzeit ist keine TikTok-API-Integration verfügbar. Der Start hängt von der TikTok-Freigabe und regionaler Verfügbarkeit ab.',
  },
  tr: {
    status: 'Yakında',
    title: 'TikTok entegrasyonları hazırlanıyor',
    description: 'İçerik yayınlama, reklam yönetimi ve işletme mesajlaşması planlanıyor. Şu anda hiçbir TikTok API entegrasyonu kullanılamıyor. Başlangıç, TikTok onayına ve bölgesel desteğe bağlıdır.',
  },
  fa: {
    status: 'به‌زودی',
    title: 'یکپارچه‌سازی‌های TikTok در حال آماده‌سازی است',
    description: 'انتشار محتوا، مدیریت تبلیغات و پیام‌رسانی تجاری برنامه‌ریزی شده است. در حال حاضر هیچ اتصال TikTok API در دسترس نیست. راه‌اندازی به تایید TikTok و پشتیبانی منطقه‌ای بستگی دارد.',
  },
  zh: {
    status: '即将推出',
    title: 'TikTok 集成正在准备中',
    description: '内容发布、广告管理和企业消息功能已列入计划。目前尚无可用的 TikTok API 集成。上线取决于 TikTok 审核和区域支持。',
  },
};

export async function AinowHomepage({ locale }: { locale: string }) {
  const source = getPublicHomeContent(locale);
  const fallback = getPublicHomeContent('en');
  const hero = (source.hero ?? fallback.hero) as HeroCopy | null;
  const faqs = (source.faqs ?? fallback.faqs) as readonly PublicFaq[] | null;
  if (!hero || !faqs) {
    throw new Error(`PUBLIC_HOME_CONTENT is incomplete for locale ${locale}`);
  }

  const copy = { hero, faqs };
  const ui = getHomePresentation(locale);
  const tiktokRoadmap =
    TIKTOK_ROADMAP_COPY[locale] ?? TIKTOK_ROADMAP_COPY.en;
  const reviewData = await getGoogleReviews(locale);
  const reviewRows = reviewData?.reviews
    .map((review) => ({ ...review, text: withoutEmoji(review.text) }))
    .filter((review) => review.text.length >= 40 && /[\p{L}\p{N}]/u.test(review.text))
    .slice(0, 3) ?? [];
  const cases = anonymousCases.slice(0, 3);

  const demoCopy: AinowHeroDemoCopy = {
    label: ui.demo.label,
    illustrativeLabel: ui.demo.illustrative,
    ownerLabel: ui.demo.owner,
    ownerRequest: copy.hero.ownerDemoRequest,
    understoodTitle: copy.hero.demoOutcome.title,
    understoodBody: copy.hero.demoOutcome.body,
    products: ui.demo.products,
    finalTitle: ui.demo.result,
    finalBody: copy.hero.demoOutcome.body,
    replayLabel: ui.demo.replay,
    inspectLabel: ui.demo.inspect,
  };

  return (
    <div className="ainow-home">
      <section id="hero" className="ah-hero">
        <div className="ah-shell" data-family-shell>
          <div className="ah-hero-copy">
            <p className="ah-eyebrow">{copy.hero.eyebrow}</p>
            <h1>{copy.hero.h1}</h1>
            <div className="ah-verb-line" aria-hidden={true}>
              {copy.hero.decorativeVerbs.map((verb, index) => (
                <span key={verb} style={{ '--ah-verb-index': index } as React.CSSProperties}>{verb}</span>
              ))}
            </div>
            <p className="ah-hero-lead">{copy.hero.supportingSentence}</p>
            <div className="ah-hero-actions">
              <Link href="/start" className="ah-primary-button" data-primary-cta>
                {copy.hero.primaryCta}
                <Ico name="solar:arrow-right-bold-duotone" />
              </Link>
              <span className="ah-delivery-note">
                <Ico name="solar:stars-minimalistic-bold-duotone" />
                {copy.hero.proof}
              </span>
              <a href={PUBLIC_FACTS.proof.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="ah-proof-link ah-review-proof-link">
                <Ico name="solar:star-bold-duotone" />
                {ui.reviews.link}
              </a>
            </div>
          </div>
          <AinowHeroDemo copy={demoCopy} />
        </div>
      </section>

      <section className="ah-section ah-outcomes" aria-labelledby="outcomes-title">
        <div className="ah-shell" data-family-shell>
          <div className="ah-outcomes-intro">
            <p className="ah-eyebrow">{ui.outcomes.label}</p>
            <h2 id="outcomes-title">{ui.outcomes.heading}</h2>
            <p>{ui.outcomes.description}</p>
          </div>
          <ol className="ah-outcome-ledger">
            {ui.outcomes.items.map((item, index) => (
              <li key={item.title} data-business-outcome>
                <span className="ah-outcome-icon"><Ico name={OUTCOME_ICONS[index]} /></span>
                <span className="ah-outcome-number">0{index + 1}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="compare" className="ah-section">
        <div className="ah-text-shell" data-family-shell>
          <SectionHeading label={ui.compare.label} heading={ui.compare.heading} description={ui.compare.description} />
          <div className="ah-compare-table">
            <div className="ah-compare-header"><span>{ui.compare.beforeLabel}</span><span>{ui.compare.afterLabel}</span></div>
            {ui.compare.rows.map((row, index) => (
              <div className="ah-compare-row" key={row.before}>
                <span className="ah-compare-index">0{index + 1}</span>
                <div className="ah-compare-before"><Ico name="solar:close-circle-bold-duotone" /><span>{row.before}</span></div>
                <Ico name="solar:arrow-right-bold-duotone" className="ah-compare-arrow" />
                <div className="ah-compare-after"><Ico name="solar:check-circle-bold-duotone" /><strong>{row.after}</strong></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="ah-section ah-products-section">
        <div className="ah-shell" data-family-shell>
          <SectionHeading label={ui.products.label} heading={ui.products.heading} description={ui.products.description} />
          <div className="ah-products-layout">
            <article className="ah-coordinator">
              <div className="ah-coordinator-top">
                <IaiMark />
                <span className="ah-status-dot"><i /> {ui.demo.online}</span>
              </div>
              <p>{ui.products.coordinator}</p>
              <a href="https://iai.ge" target="_blank" rel="noopener noreferrer" className="ah-inline-link">
                iai.ge <Ico name="solar:arrow-right-up-bold-duotone" />
              </a>
              <div className="ah-coordinator-lines" aria-hidden="true"><i /><i /><i /></div>
            </article>
            <div className="ah-product-list">
              {PRODUCT_DATA.map((product, index) => (
                <a key={product.name} href={product.href} target="_blank" rel="noopener noreferrer" className="ah-product-row" style={{ '--ah-product': product.tone, '--ah-product-dark': product.darkTone } as React.CSSProperties}>
                  <span className="ah-product-icon"><Ico name={product.icon} /></span>
                  <span className="ah-product-copy"><Wordmark mark={product.name} tone={product.tone} darkTone={product.darkTone} /><small>{ui.demo.products[index].role}</small></span>
                  <span className="ah-product-domain">{new URL(product.href).hostname}<Ico name="solar:arrow-right-up-bold-duotone" /></span>
                </a>
              ))}
            </div>
          </div>
          <article
            className="ah-tiktok-roadmap"
            data-integration-status="planned"
            data-available-now="false"
          >
            <span className="ah-tiktok-roadmap-icon" aria-hidden="true">
              <Ico name="solar:videocamera-record-bold-duotone" />
            </span>
            <div>
              <strong>{tiktokRoadmap.title}</strong>
              <p>{tiktokRoadmap.description}</p>
            </div>
            <span className="ah-tiktok-roadmap-status">
              {tiktokRoadmap.status}
            </span>
          </article>
        </div>
      </section>

      <section id="results" className="ah-section">
        <div className="ah-shell ah-results-layout" data-family-shell>
          <SectionHeading label={ui.results.label} heading={ui.results.heading} description={ui.results.description} />
          <div className="ah-results-board">
            <div className="ah-board-bar">
              <div><span /><span /><span /></div>
              <b><Ico name="solar:shield-check-bold-duotone" />{ui.results.demoLabel}</b>
            </div>
            <div className="ah-board-main">
              <div className="ah-board-summary">
                <span className="ah-board-kicker"><IaiMark /> {copy.hero.demoOutcome.title}</span>
                <h3>{ui.demo.result}</h3>
                <p>{copy.hero.demoOutcome.body}</p>
              </div>
              <div className="ah-board-rows">
                {PRODUCT_DATA.map((product, index) => (
                  <div key={product.name} style={{ '--ah-product': product.tone, '--ah-product-dark': product.darkTone } as React.CSSProperties}>
                    <span className="ah-board-product"><Wordmark mark={product.name} tone={product.tone} darkTone={product.darkTone} /></span>
                    <strong>{ui.demo.products[index].done}</strong>
                    <Ico name="solar:check-circle-bold-duotone" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="ah-section ah-reviews-section">
        <div className="ah-shell" data-family-shell>
          <SectionHeading label={ui.reviews.label} heading={ui.reviews.heading} description={ui.reviews.description} />
          <div className="ah-review-proof">
            <a href={reviewData?.mapsUri || PUBLIC_FACTS.proof.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="ah-google-summary">
              <span className="ah-google-g" aria-hidden="true">G</span>
              {reviewData ? <><strong>{reviewData.rating.toFixed(1)}</strong><Stars rating={reviewData.rating} /><span>{reviewData.count} {ui.reviews.count}</span></> : <strong>{ui.reviews.link}</strong>}
              <Ico name="solar:arrow-right-up-bold-duotone" />
            </a>
          </div>
          {reviewRows.length > 0 && (
            <div className="ah-review-grid" role="region" aria-label={ui.reviews.heading} tabIndex={0}>
              {reviewRows.map((review, index) => (
                <article key={`${review.authorName}-${index}`} className="ah-review-card">
                  <div className="ah-review-card-top">
                    <span className="ah-review-avatar">{review.authorName.slice(0, 1)}</span>
                    <span><strong>{review.authorName}</strong><small>{review.relativeTime}</small></span>
                    <span className="ah-google-g" aria-hidden="true">G</span>
                  </div>
                  <Stars rating={review.rating} />
                  <p>{review.text}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="cases" className="ah-section">
        <div className="ah-shell" data-family-shell>
          <div className="ah-head-with-link">
            <SectionHeading label={ui.cases.label} heading={ui.cases.heading} description={ui.cases.description} />
            <Link href="/projects" className="ah-inline-link">{ui.cases.link}<Ico name="solar:arrow-right-bold-duotone" /></Link>
          </div>
          <div className="ah-case-list">
            {cases.map((project, index) => {
              const metric = project.metrics?.[0];
              return (
                <article key={project.slug} className="ah-case-row">
                  <span className="ah-case-index">0{index + 1}</span>
                  <div className="ah-case-copy">
                    <span className="ah-case-industry">{project.categoryLabel ? localize(project.categoryLabel, locale) : project.category}</span>
                    <h3>{project.title ? localize(project.title, locale) : project.name}</h3>
                    <p>{project.description ? localize(project.description, locale) : ''}</p>
                  </div>
                  {metric && (
                    <div className="ah-case-metric">
                      <small>{localize(metric.label, locale)}</small>
                      {metric.before && <span>{localize(metric.before, locale)}</span>}
                      <Ico name="solar:arrow-right-bold-duotone" />
                      <strong>{localize(metric.after, locale)}</strong>
                    </div>
                  )}
                  <Link href={`/projects/${project.slug}`} className="ah-case-link" aria-label={project.name}>
                    <Ico name="solar:arrow-right-up-bold-duotone" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="team" className="ah-section ah-team-section">
        <div className="ah-text-shell" data-family-shell>
          <SectionHeading label={ui.team.label} heading={ui.team.heading} description={ui.team.description} />
          <div className="ah-team-list">
            {ui.team.members.map((member, index) => (
              <article key={member.name} className="ah-person">
                <Image src={index === 0 ? '/team/andro.jpg' : '/team/giorgi.jpg'} alt={member.name} width={168} height={168} sizes="(max-width: 640px) 88px, 128px" />
                <div><p className="ah-person-index">0{index + 1}</p><h3>{member.name}</h3><strong>{member.role}</strong><p>{member.bio}</p></div>
                {index === 0 && <a href={PUBLIC_FACTS.founder.url} target="_blank" rel="noopener noreferrer" className="ah-person-link" aria-label={member.name}><Ico name="solar:arrow-right-up-bold-duotone" /></a>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="ah-section">
        <div className="ah-text-shell" data-family-shell>
          <SectionHeading label={ui.faq.label} heading={ui.faq.heading} description={ui.faq.description} />
          <div className="ah-faq-list">
            {copy.faqs.map((item, index) => (
              <details key={item.id} open={index === 0}>
                <summary><span>0{index + 1}</span><strong>{item.question}</strong><Ico name="solar:alt-arrow-down-bold-duotone" /></summary>
                <div><p>{item.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="ah-section ah-final-cta">
        <div className="ah-shell" data-family-shell>
          <p className="ah-eyebrow">{ui.cta.label}</p>
          <h2>{ui.cta.heading}</h2>
          <p>{ui.cta.description}</p>
          <Link href="/start" className="ah-primary-button">
            {ui.cta.button}<Ico name="solar:arrow-right-bold-duotone" />
          </Link>
        </div>
      </section>
    </div>
  );
}
