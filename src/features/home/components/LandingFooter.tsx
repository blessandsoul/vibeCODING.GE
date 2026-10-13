import type React from 'react';

import { Ico } from '@/components/common/Ico';
import { useLocale, useTranslations } from 'next-intl';

import { SocialLinks } from '@/components/layout/SocialLinks';
import { Link } from '@/i18n/navigation';
import { NICHE_LINKS, nicheLabel } from '@/features/niches/labels';
import { AGENT_PRODUCTS, PUBLIC_FACTS } from '@/lib/public-facts';
import { FooterLanguageSwitcher } from './FooterLanguageSwitcher';
import './landing-footer.css';

/* =========================================================================
   LandingFooter, the global aiNOW footer, ported to the aiSTAFF layout while
   preserving aiNOW's real navigation. Left column carries the big aiNOW
   wordmark plus the live sitemap columns (Services, Company, Resources, Legal,
   Social, Language); right column (lg+) is a decorative 16:9 brand-tinted demo
   box with a play button, stacked on mobile. The signature is the giant
   rounded-full brand-gradient CTA scrolling to /contact. Colors travel via the
   oklch --primary / --accent tokens (globals.css), no hardcoded brand hex.
   ========================================================================= */

const FAMILY = AGENT_PRODUCTS.map((product) => ({
  href: product.url,
  label: product.name,
}));

// Footer "AI chatbot by industry" column: the featured few + a link to the full
// grid on /ai-chatboti#industries. Heading/all-label localized inline.
const IND_HEADING: Record<string, string> = { ka: 'დარგები', en: 'By industry', ru: 'По отраслям', de: 'Nach Branche' };
const IND_ALL: Record<string, string> = { ka: 'ყველა დარგი', en: 'All industries', ru: 'Все отрасли', de: 'Alle Branchen' };

// "AI for business" pillar landing (/ai-biznesistvis): a sitewide footer link so the
// hub page has inbound links from every page (fixes the 2026-07-04 audit orphan flag).
const AI_BIZ_LABEL: Record<string, string> = { ka: 'AI ბიზნესისთვის', en: 'AI for business', ru: 'AI для бизнеса', de: 'KI für Unternehmen' };

export function LandingFooter(): React.ReactElement {
  const t = useTranslations('landingFooter');
  const tNav = useTranslations('nav');
  const tPartners = useTranslations('partners');
  const locale = useLocale();
  const year = new Date().getFullYear();

  const copyright = (
    <span className="block whitespace-nowrap text-[12px] uppercase tracking-wide text-neutral-900/40">
      {PUBLIC_FACTS.brand.legalName} · © {year}
    </span>
  );

  return (
    <footer className="landing-footer border-t border-[#e5e5e5]/60 bg-white px-6 pb-8 pt-12 text-neutral-900 md:px-10 md:py-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="grid lg:grid-cols-[minmax(520px,640px)_1fr] lg:gap-16">
          {/* LEFT, wordmark + sitemap columns */}
          <div>
            <Link href="/" aria-label="aiNOW" className="inline-flex">
              <span className="wordmark-3d footer-wordmark text-[40px] leading-none md:text-[52px]">
                <span className="wm-prefix">ai</span>
                <span className="wm-mark">NOW</span>
                <span className="wm-accent" aria-hidden="true" />
              </span>
            </Link>

            {/* Stacked demo box + copyright below the desktop 2-col breakpoint */}
            <div className="mt-10 flex flex-col lg:hidden">
              <DemoBox />
              <span className="mt-3">{copyright}</span>
            </div>

            {/* Sitemap columns, up to 4 across at md+ */}
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 lg:mt-16">
              <FooterColumn title={t('productsHeading')}>
                {FAMILY.map((link) => (
                  <FooterExternalLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterExternalLink>
                ))}
                <FooterRouteLink href="/ai-agenti">{tNav('servicesItems.aiAgents')}</FooterRouteLink>
                <FooterRouteLink href="/ai-chatboti">{tNav('servicesItems.aiChatbots')}</FooterRouteLink>
                <FooterRouteLink href="/ai-konteni">{tNav('servicesItems.aiContent')}</FooterRouteLink>
                <FooterRouteLink href="/ai-biznesistvis">{AI_BIZ_LABEL[locale] ?? AI_BIZ_LABEL.en}</FooterRouteLink>
                <FooterRouteLink href="/services">{tNav('services')}</FooterRouteLink>
              </FooterColumn>

              <FooterColumn title={t('companyHeading')}>
                <FooterRouteLink href="/about">{t('about')}</FooterRouteLink>
                <FooterRouteLink href="/contact">{t('contact')}</FooterRouteLink>
                <FooterRouteLink href="/reviews">{tNav('reviews')}</FooterRouteLink>
                <FooterRouteLink href="/partners">{tPartners('navLabel')}</FooterRouteLink>
                <FooterRouteLink href="/pricing">{tNav('pricing')}</FooterRouteLink>
              </FooterColumn>

              <FooterColumn title={t('resourcesHeading')}>
                <FooterRouteLink href="/projects">{t('cases')}</FooterRouteLink>
                <FooterRouteLink href="/blog">{t('blog')}</FooterRouteLink>
              </FooterColumn>

              <div>
                <span className="whitespace-nowrap text-[12px] uppercase tracking-wide text-neutral-900/40">
                  {t('legalHeading')}
                </span>
                <ul className="mt-5 flex flex-col items-start gap-3 sm:mt-4">
                  <FooterRouteLink href="/privacy">{tNav('privacy')}</FooterRouteLink>
                  <FooterRouteLink href="/terms">{tNav('terms')}</FooterRouteLink>
                </ul>

                <div className="mt-8">
                  <span className="whitespace-nowrap text-[12px] uppercase tracking-wide text-neutral-900/40">
                    {t('socialHeading')}
                  </span>
                  <SocialLinks className="mt-5 flex-wrap gap-3 sm:mt-4" size={18} round />
                </div>
              </div>

              <FooterColumn title={IND_HEADING[locale] ?? IND_HEADING.en}>
                {NICHE_LINKS.filter((n) => n.featured).map((n) => (
                  <FooterRouteLink key={n.slug} href={`/${n.slug}`}>
                    {nicheLabel(n, locale)}
                  </FooterRouteLink>
                ))}
                <FooterRouteLink href="/ai-chatboti#industries">
                  {IND_ALL[locale] ?? IND_ALL.en}
                </FooterRouteLink>
              </FooterColumn>
            </div>

            {/* Language row */}
            <div className="mt-10">
              <span className="whitespace-nowrap text-[12px] uppercase tracking-wide text-neutral-900/40">
                {t('languageHeading')}
              </span>
              <div className="mt-4 text-sm">
                <FooterLanguageSwitcher />
              </div>

              <SaitebiBadge />
            </div>
          </div>

          {/* RIGHT, desktop demo box + copyright */}
          <div className="hidden w-full flex-col lg:flex">
            <DemoBox />
            <span className="mt-3 self-end">{copyright}</span>
          </div>
        </div>

        {/* GIANT BRAND CTA, scrolls to the contact conversion route */}
        <div className="mt-12 sm:mt-20 md:mt-24">
          <Link
            href="/contact"
            className="flex h-[100px] w-full items-center justify-center whitespace-nowrap rounded-full px-5 text-center text-sm font-semibold uppercase leading-5 tracking-[0.02em] text-white [transition:transform_.18s_cubic-bezier(.2,.8,.2,1)] will-change-transform active:scale-[0.99] md:h-[120px] md:text-base 2xl:h-[140px]"
            style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
          >
            {t('ctaHuge')}
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* Decorative 16:9 brand-tinted box with a centered play button. No real video
   source, purely a visual block matching the aiSTAFF footer placement. */
function DemoBox(): React.ReactElement {
  return (
    <div
      className="group relative w-full overflow-hidden rounded-2xl pb-[56.25%]"
      style={{ background: 'color-mix(in srgb, var(--primary) 12%, transparent)' }}
    >
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-full pl-[3px] shadow-lg [transition:transform_.3s_ease] md:h-20 md:w-20 md:group-hover:scale-110"
          style={{ background: 'var(--primary)' }}
        >
          <Ico name="solar:play-bold-duotone" className="h-5 w-5 fill-white text-white md:h-7 md:w-7" />
        </span>
      </span>
    </div>
  );
}

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

function FooterColumn({ title, children }: FooterColumnProps): React.ReactElement {
  return (
    <div>
      <span className="whitespace-nowrap text-[12px] uppercase tracking-wide text-neutral-900/40">
        {title}
      </span>
      <ul className="mt-5 flex flex-col items-start gap-3 sm:mt-4">{children}</ul>
    </div>
  );
}

const LINK_CLASS =
  'text-sm text-neutral-900/70 transition-colors duration-150 active:opacity-70 md:hover:text-neutral-900';

function FooterExternalLink({ href, children }: { href: string; children: React.ReactNode }): React.ReactElement {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${LINK_CLASS} font-medium`}>
        {children}
      </a>
    </li>
  );
}

function FooterRouteLink({ href, children }: { href: string; children: React.ReactNode }): React.ReactElement {
  return (
    <li>
      <Link href={href} className={LINK_CLASS}>
        {children}
      </Link>
    </li>
  );
}

function SaitebiBadge(): React.ReactElement {
  return (
    <a
      href="https://www.saitebi.me/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Saitebi.me"
      className="group mt-8 inline-flex w-fit items-center rounded-xl border border-neutral-900/10 bg-white/75 p-2 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-neutral-900/20 hover:shadow-[0_12px_30px_rgba(15,23,42,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
    >
      <img
        src="https://www.saitebi.me/baneri.png"
        width={88}
        height={31}
        alt="Saitebi.me"
        loading="lazy"
        className="block h-[31px] w-[88px] opacity-85 transition-opacity duration-200 group-hover:opacity-100"
      />
    </a>
  );
}
