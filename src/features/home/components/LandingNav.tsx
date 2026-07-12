'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Ico } from '@/components/common/Ico';
import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { SITE } from '@/config/site';
import { MagneticButton } from '@/components/common/MagneticButton';
import './landing-nav.css';

/* Floating glass navbar, ported from the ainow handoff and trimmed to a single
   product landing: a product wordmark, in-page section anchors, a language pill
   and the lead CTA. The agency service/pricing/partners/blog routes are gone. */

// In-page sections (ids live on the home landing components).
const SECTIONS = {
  showcase: 'showcase',
  work: 'work',
  faq: 'faq',
  cta: 'cta',
} as const;

// Locale switcher entries, derived from routing.locales so the pill stays in
// sync. Labels = native names.
const LOCALE_LABELS: Record<string, string> = {
  ka: 'ქართული',
  en: 'English',
  ru: 'Русский',
};
const LOCALES = routing.locales.map((code) => ({
  code,
  label: LOCALE_LABELS[code] ?? code.toUpperCase(),
}));

function Chevron({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}

export function LandingNav() {
  const t = useTranslations('landingNav');
  const locale = useLocale();
  const pathname = usePathname(); // locale-stripped, so "/" === home
  const isHome = pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionHref = (id: string) => ({ pathname: '/', hash: id });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Body scroll lock + ESC-to-close while the mobile drawer is open.
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // Smooth-scroll on home; on other pages let <Link> navigate to /#id.
  const handleSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    setMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  const atTop = isHome && !scrolled;
  const navClassName = ['glass-nav', atTop && 'is-top', menuOpen && 'menu-open']
    .filter(Boolean)
    .join(' ');

  const Wordmark = () => (
    <div className="wordmark-3d text-lg leading-none">
      <span className="wm-prefix">{SITE.wordmark.prefix}</span>
      <span className="wm-mark">{SITE.wordmark.mark}</span>
      <span className="wm-accent" aria-hidden="true" />
    </div>
  );

  const sectionLinks = [
    { id: SECTIONS.showcase, label: t('showcase') },
    { id: SECTIONS.work, label: t('process') },
    { id: SECTIONS.faq, label: t('faq') },
  ];

  return (
    <nav className={navClassName} data-family-header="true">
      <div className="glass-nav-bg" />

      <div className="glass-nav-inner">
        <button
          type="button"
          className="nav-burger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="landing-nav-drawer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <Link href="/" className="nav-logo nav-logo-slot" aria-label={`${SITE.wordmark.prefix}${SITE.wordmark.mark} home`}>
          <Wordmark />
        </Link>

        <ul className="nav-menu">
          {sectionLinks.map((s) => (
            <li key={s.id}>
              <Link
                href={sectionHref(s.id)}
                className="nav-link"
                onClick={(e) => handleSection(e, s.id)}
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <div className="nav-lang">
            <button type="button" className="nav-lang-trigger" aria-haspopup="true" aria-label="Switch language">
              <Ico name="solar:global-bold-duotone" className="nav-lang-globe" />
              {locale.toUpperCase()}
              <Chevron className="nav-lang-chevron" />
            </button>
            <ul className="nav-dropdown nav-lang-dropdown">
              {LOCALES.map((l) => (
                <li key={l.code}>
                  <Link
                    href={pathname}
                    locale={l.code}
                    className={`nav-dd-link${l.code === locale ? ' is-current' : ''}`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <MagneticButton>
            <Link href={sectionHref(SECTIONS.cta)} className="glass-cta" onClick={(e) => handleSection(e, SECTIONS.cta)}>
              {t('cta')}
            </Link>
          </MagneticButton>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className="nav-drawer" id="landing-nav-drawer">
        <div className="nav-drawer-bg" />
        <ul className="nav-drawer-menu">
          {sectionLinks.map((s, i) => (
            <li key={s.id}>
              <Link
                href={sectionHref(s.id)}
                className="nav-drawer-link"
                data-i={i + 1}
                onClick={(e) => handleSection(e, s.id)}
              >
                {s.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={sectionHref(SECTIONS.cta)}
              className="nav-drawer-link"
              data-i={sectionLinks.length + 1}
              onClick={(e) => handleSection(e, SECTIONS.cta)}
            >
              {t('cta')}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
