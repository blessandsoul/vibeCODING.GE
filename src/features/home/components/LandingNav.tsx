'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Ico } from '@/components/common/Ico';
import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { SITE } from '@/config/site';
import { MagneticButton } from '@/components/common/MagneticButton';
import { LandingThemeToggle } from './LandingThemeToggle';
import './landing-nav.css';

/* Floating glass navbar, ported from the ainow handoff and trimmed to a single
   product landing: a product wordmark, in-page section anchors, a language pill
   and the lead CTA. The agency service/pricing/partners/blog routes are gone. */

// In-page sections (ids live on the home landing components).
const SECTIONS = {
  result: 'dashboard',
  cases: 'cases',
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
const NAV_A11Y = {
  ka: { open: 'მენიუს გახსნა', close: 'მენიუს დახურვა', language: 'ენის შეცვლა', home: 'მთავარი', contact: 'დაგვიკავშირდით', blog: 'ბლოგი' },
  en: { open: 'Open menu', close: 'Close menu', language: 'Switch language', home: 'home', contact: 'Contact us', blog: 'Blog' },
  ru: { open: 'Открыть меню', close: 'Закрыть меню', language: 'Сменить язык', home: 'главная', contact: 'Связаться с нами', blog: 'Блог' },
} as const;

function Wordmark() {
  return (
    <div className="wordmark-3d text-lg leading-none">
      <span className="wm-prefix">{SITE.wordmark.prefix}</span>
      <span className="wm-mark">{SITE.wordmark.mark}</span>
      <span className="wm-accent" aria-hidden="true" />
    </div>
  );
}

export function LandingNav() {
  const t = useTranslations('landingNav');
  const locale = useLocale();
  const pathname = usePathname(); // locale-stripped, so "/" === home
  const isHome = pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const langButtonRef = useRef<HTMLButtonElement>(null);
  const a11y = NAV_A11Y[locale as keyof typeof NAV_A11Y] ?? NAV_A11Y.en;

  const sectionHref = (id: string) => ({ pathname: '/', hash: id });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Body scroll lock + ESC-to-close while the mobile drawer is open.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!langOpen) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLangOpen(false);
        langButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [langOpen]);

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
  const logoHidden = atTop;
  const navClassName = ['glass-nav', atTop && 'is-top', menuOpen && 'menu-open']
    .filter(Boolean)
    .join(' ');

  const sectionLinks = [
    { id: SECTIONS.result, label: t('showcase') },
    { id: SECTIONS.cases, label: t('process') },
    { id: SECTIONS.faq, label: t('faq') },
  ];

  return (
    <nav className={navClassName} data-family-header="true">
      <div className="glass-nav-bg" />

      <div className="glass-nav-inner">
        <button
          ref={menuButtonRef}
          type="button"
          className="nav-burger"
          aria-label={menuOpen ? a11y.close : a11y.open}
          aria-expanded={menuOpen}
          aria-controls="landing-nav-drawer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <Link
          href="/"
          className="nav-logo nav-logo-slot"
          aria-label={`${SITE.wordmark.prefix}${SITE.wordmark.mark}: ${a11y.home}`}
          aria-hidden={logoHidden || undefined}
          tabIndex={logoHidden ? -1 : undefined}
        >
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
          <li>
            <Link href="/blog" className="nav-link">
              {a11y.blog}
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          <div className={`nav-lang${langOpen ? ' is-open' : ''}`}>
            <button
              ref={langButtonRef}
              type="button"
              className="nav-lang-trigger"
              aria-expanded={langOpen}
              aria-controls="landing-language-menu"
              aria-label={a11y.language}
              onClick={() => setLangOpen((value) => !value)}
            >
              <Ico name="solar:global-bold-duotone" className="nav-lang-globe" />
              {locale.toUpperCase()}
              <Ico name="solar:alt-arrow-down-bold-duotone" className="nav-lang-chevron" />
            </button>
            <ul
              id="landing-language-menu"
              className="nav-dropdown nav-lang-dropdown"
              aria-hidden={!langOpen}
              inert={!langOpen}
            >
              {LOCALES.map((l) => (
                <li key={l.code}>
                  <Link
                    href={pathname}
                    locale={l.code}
                    className={`nav-dd-link${l.code === locale ? ' is-current' : ''}`}
                    onClick={() => setLangOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <MagneticButton>
            <Link href={sectionHref(SECTIONS.cta)} className="glass-cta nav-call-cta" aria-label={a11y.contact} onClick={(e) => handleSection(e, SECTIONS.cta)}>
              <Ico name="solar:phone-calling-rounded-bold-duotone" className="nav-call-icon" aria-hidden="true" />
            </Link>
          </MagneticButton>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className="nav-drawer"
        id="landing-nav-drawer"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
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
              href="/blog"
              className="nav-drawer-link"
              data-i={sectionLinks.length + 1}
              onClick={() => setMenuOpen(false)}
            >
              {a11y.blog}
            </Link>
          </li>
          <li>
            <Link
              href={sectionHref(SECTIONS.cta)}
              className="nav-drawer-link"
              data-i={sectionLinks.length + 2}
              onClick={(e) => handleSection(e, SECTIONS.cta)}
            >
              {t('cta')}
            </Link>
          </li>
          <li className="nav-drawer-theme-row">
            <LandingThemeToggle className="nav-drawer-theme" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
