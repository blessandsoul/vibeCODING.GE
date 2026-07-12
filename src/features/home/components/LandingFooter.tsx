'use client';

import type React from 'react';

import { useTranslations } from 'next-intl';

import { SITE } from '@/config/site';
import { FAMILY } from '@/config/family';
import { MagneticButton } from '@/components/common/MagneticButton';
import { SocialLinks } from '@/components/layout/SocialLinks';
import { Link } from '@/i18n/navigation';
import { FooterLanguageSwitcher } from './FooterLanguageSwitcher';
import './landing-footer.css';

/* =========================================================================
   LandingFooter, the global corporate footer.

   Left column: the product wordmark, then the in-page Company anchors and the
   Social + language block. Right column (lg+): the aiNOW family directory, which
   is generated from landings/family.json and never hand-edited. On mobile the
   directory stacks under the wordmark.

   The right column used to be a decorative 16:9 box with a play button and no
   video behind it: a click target that did nothing, and the "div-rectangle
   standing in for a real screenshot" tell that VISUAL_TASTE bans. The family
   directory is a real thing that belongs there and the family is now 12 domains,
   which no longer fits in a single link column.

   Brand colour travels via the --brand / --accent tokens (brand.css), so this
   same component renders pink on aiCONTENT and cyan on aiWEB with no edits.
   ========================================================================= */

export function LandingFooter(): React.ReactElement {
  const t = useTranslations('landingFooter');
  const year = new Date().getFullYear();

  // A site never links to itself, and a landing that has not shipped yet stays out.
  const family = FAMILY.filter((m) => m.live && m.domain !== SITE.domain);

  const copyright = (
    <span className="block whitespace-normal break-words text-[12px] uppercase tracking-wide text-neutral-900/40 lg:whitespace-nowrap">
      {t('copyright', { year })}
    </span>
  );

  return (
    <footer className="landing-footer border-t border-[#e5e5e5]/60 bg-white px-6 pb-8 pt-12 text-neutral-900 md:px-10 md:py-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="grid lg:grid-cols-[minmax(460px,600px)_1fr] lg:gap-16">
          {/* LEFT, wordmark + link columns.

              THE PARENT SIGNS THE PAGE. This slot used to render the PRODUCT's wordmark while
              its aria-label said "aiNOW", so the mark and the label disagreed and the footer
              repeated a logo the reader had already seen twice on the way down.

              The product owns the page and it owns the oversized band above this (LandingWordmark).
              The footer is where a page says who is behind it, and that is aiNOW. It links OUT to
              ainow.ge, not back to this landing's own root, because a reader who reaches the footer
              wanting to know "who are these people" is asking about the company, not the product. */}
          <div>
            <a
              href="https://ainow.ge"
              aria-label="aiNOW"
              className="inline-flex"
              rel="noopener"
            >
              <span className="wordmark-3d ainow-parent footer-wordmark text-[40px] leading-none md:text-[52px]">
                <span className="wm-prefix">ai</span>
                <span className="wm-mark">NOW</span>
                <span className="wm-accent" aria-hidden="true" />
              </span>
            </a>

            {/* Family directory stacks under the wordmark below the 2-col breakpoint */}
            <div className="mt-10 lg:hidden">
              <FamilyDirectory heading={t('familyHeading')} members={family} />
              <span className="mt-8 block">{copyright}</span>
            </div>

            {/* Link columns */}
            <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:mt-16">
              <FooterColumn title={t('companyHeading')}>
                <FooterRouteLink href="/contact">{t('contact')}</FooterRouteLink>
                <FooterAnchorLink href="#showcase">{t('sectionShowcase')}</FooterAnchorLink>
                <FooterAnchorLink href="#work">{t('sectionWork')}</FooterAnchorLink>
                <FooterAnchorLink href="#faq">{t('sectionFaq')}</FooterAnchorLink>
              </FooterColumn>

              <div>
                <span className="whitespace-nowrap text-[12px] uppercase tracking-wide text-neutral-900/40">
                  {t('socialHeading')}
                </span>
                <SocialLinks className="mt-5 flex-wrap gap-3 sm:mt-4" size={18} round />
                <div className="mt-8">
                  <span className="whitespace-nowrap text-[12px] uppercase tracking-wide text-neutral-900/40">
                    {t('languageHeading')}
                  </span>
                  <div className="mt-4 text-sm">
                    <FooterLanguageSwitcher />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT, the family directory + copyright */}
          <div className="hidden w-full flex-col lg:flex">
            <FamilyDirectory heading={t('familyHeading')} members={family} />
            <span className="mt-auto pt-8 self-end">{copyright}</span>
          </div>
        </div>

        {/* GIANT BRAND CTA, scrolls to the #cta lead form */}
        <div className="mt-12 sm:mt-20 md:mt-24">
          <MagneticButton className="block w-full">
            <a
              href="#cta"
              className="flex h-[100px] w-full items-center justify-center whitespace-normal rounded-full px-5 text-center text-sm font-semibold uppercase leading-5 tracking-[0.02em] text-white lg:whitespace-nowrap [transition:transform_.18s_cubic-bezier(.2,.8,.2,1)] will-change-transform active:scale-[0.99] md:h-[120px] md:text-base 2xl:h-[140px]"
              style={{ background: 'linear-gradient(135deg, var(--brand), var(--accent))' }}
            >
              {t('ctaHuge')}
            </a>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}

/* The aiNOW family directory. Generated list, self filtered out, two columns so
   twelve domains do not become a twelve-row tower. */
function FamilyDirectory({
  heading,
  members,
}: {
  heading: string;
  members: readonly { key: string; domain: string; label: string }[];
}): React.ReactElement {
  return (
    <div>
      <span className="whitespace-nowrap text-[12px] uppercase tracking-wide text-neutral-900/40">
        {heading}
      </span>
      <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:mt-4">
        {members.map((m) => (
          <li key={m.key}>
            <a
              href={`https://${m.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${LINK_CLASS} font-medium`}
            >
              {m.label}
            </a>
          </li>
        ))}
      </ul>
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

function FooterRouteLink({ href, children }: { href: string; children: React.ReactNode }): React.ReactElement {
  return (
    <li>
      <Link href={href} className={LINK_CLASS}>
        {children}
      </Link>
    </li>
  );
}

/* In-page section anchor. A plain <a href="#..."> so SmoothScroll handles the
   scroll; works from any page because the home sections are on the root path. */
function FooterAnchorLink({ href, children }: { href: string; children: React.ReactNode }): React.ReactElement {
  return (
    <li>
      <a href={href} className={LINK_CLASS}>
        {children}
      </a>
    </li>
  );
}
