'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Ico } from '@/components/common/Ico';
import { Link, usePathname } from '@/i18n/navigation';
import { INDEXED_LOCALES } from '@/i18n/seo-locales';
import './landing-nav.css';

/* Floating glass navbar, ported from ainow_handoff/index.html, now the global
   site header. Section links scroll to home sections (smooth on home, navigate
   to the home section on other pages). The primary dropdown is reserved for
   aiNOW products; search-focused service pages stay discoverable through the
   sitewide footer, the services hub, contextual links and the sitemap. */

// In-page sections (ids live on the home landing components).
const SECTIONS = {
  faq: 'faq',
  cta: 'cta',
} as const;

// Product names are brands and intentionally stay the same in every locale.
// Root-domain links avoid assuming that every landing supports every aiNOW locale.
const PRODUCT_ITEMS = [
  { href: 'https://aichats.ge', label: 'aiCHATS', descriptionKey: 'aichats', Icon: 'solar:chat-round-line-bold-duotone' },
  { href: 'https://aicall.ge', label: 'aiCALL', descriptionKey: 'aicall', Icon: 'solar:phone-bold-duotone' },
  { href: 'https://aiads.ge', label: 'aiADS', descriptionKey: 'aiads', Icon: 'solar:target-bold-duotone' },
  { href: 'https://aicontent.ge', label: 'aiCONTENT', descriptionKey: 'aicontent', Icon: 'solar:pen-new-square-bold-duotone' },
  { href: 'https://aidocs.ge', label: 'aiDOCS', descriptionKey: 'aidocs', Icon: 'solar:file-text-bold-duotone' },
  { href: 'https://aiweb.ge', label: 'aiWEB', descriptionKey: 'aiweb', Icon: 'solar:global-bold-duotone' },
  { href: 'https://aioffice.ge', label: 'aiOFFICE', descriptionKey: 'aioffice', Icon: 'solar:case-bold-duotone' },
  { href: 'https://aiapp.ge', label: 'aiAPP', descriptionKey: 'aiapp', Icon: 'solar:widget-5-bold-duotone' },
  { href: 'https://aistaff.ge', label: 'aiSTAFF', descriptionKey: 'aistaff', Icon: 'solar:user-id-bold-duotone' },
  { href: 'https://aibrain.ge', label: 'aiBRAIN', descriptionKey: 'aibrain', Icon: 'solar:cpu-bolt-bold-duotone' },
  { href: 'https://aijurist.ge', label: 'aiJURIST', descriptionKey: 'aijurist', Icon: 'solar:scale-bold-duotone' },
  { href: 'https://aimusic.ge', label: 'aiMUSIC', descriptionKey: 'aimusic', Icon: 'solar:headphones-round-bold-duotone' },
  { href: 'https://vibecoding.ge', label: 'vibeCODING', descriptionKey: 'vibecoding', Icon: 'solar:code-square-bold-duotone' },
  { href: 'https://aitaxi.ge', label: 'aiTAXI', descriptionKey: 'aitaxi', Icon: 'solar:map-point-bold-duotone' },
] as const;

// Public locale switcher entries. Legacy route locales remain reachable by URL
// but are intentionally absent from the public navigation.
const LOCALE_LABELS: Record<string, string> = {
  ka: 'ქართული',
  en: 'English',
  ru: 'Русский',
  de: 'Deutsch',
  tr: 'Türkçe',
  fa: 'فارسی',
  zh: '中文',
};
const ENGLISH_LOCALE_LABELS: Record<string, string> = {
  ka: 'Georgian',
  en: 'English',
  ru: 'Russian',
  de: 'German',
  tr: 'Turkish',
  fa: 'Persian',
  zh: 'Chinese',
};

function Wordmark() {
  return (
    <div className="wordmark-3d wordmark-3d--animated text-lg leading-none">
      <span className="wm-prefix">ai</span>
      <span className="wm-mark">
        <span className="wm-letter">N</span>
        <span className="wm-letter">O</span>
        <span className="wm-letter">W</span>
      </span>
      <span className="wm-accent" aria-hidden="true" />
      <span className="wm-light-pass" aria-hidden="true" />
    </div>
  );
}

function Chevron({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}

export function LandingNav() {
  const t = useTranslations('landingNav');
  const tProductDescription = useTranslations('landingNav.productDescriptions');
  const tNav = useTranslations('nav');
  const tPartners = useTranslations('partners');
  const locale = useLocale();
  const localeLabels = locale === 'en' ? ENGLISH_LOCALE_LABELS : LOCALE_LABELS;
  const locales = INDEXED_LOCALES.map((code) => ({
    code,
    label: localeLabels[code] ?? code.toUpperCase(),
  }));
  const pathname = usePathname();
  // Keep the hero/header handoff working whether navigation returns "/" or "/ka".
  const isHome = pathname === '/' || pathname === `/${locale}`;

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerProductsOpen, setDrawerProductsOpen] = useState(false);

  // Home section target as a next-intl Link href. The object form keeps the
  // locale prefix correct (`/#faq` for ka, `/en#faq` for en) and lets <Link>
  // navigate client-side from other pages (no full reload). Smooth-scroll on
  // home is handled in handleSection below.
  const sectionHref = (id: string) => ({ pathname: '/', hash: id });

  // Glass + nav-logo fade in once scrolled past 30px, but ONLY on the home
  // page, where the hero shows its own big wordmark. On other pages the nav
  // always shows the glass + logo.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer and always collapse its services sub-menu, so reopening
  // the drawer starts collapsed (previously reset by the effect on close).
  const setMenuOpenAndSync = (next: boolean) => {
    setMenuOpen(next);
    if (!next) setDrawerProductsOpen(false);
  };

  // Body scroll lock + ESC-to-close while the mobile drawer is open.
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpenAndSync(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpenAndSync(false);

  // Smooth-scroll on home; on other pages let <Link> navigate client-side to /#id.
  const handleSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    setMenuOpenAndSync(false);
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

  return (
    <nav className={navClassName}>
      <div className="glass-nav-bg" />

      <div className="glass-nav-inner">
        <button
          type="button"
          className="nav-burger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="landing-nav-drawer"
          onClick={() => setMenuOpenAndSync(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <Link href="/" className="nav-logo" aria-label="aiNOW, home">
          <Wordmark />
        </Link>

        <ul className="nav-menu">
          <li className="nav-services">
            <button type="button" className="nav-services-trigger" aria-haspopup="true">
              {t('products')}
              <Chevron className="nav-services-chevron" />
            </button>
            <ul className="nav-dropdown nav-dropdown-grid">
              {PRODUCT_ITEMS.map((product) => (
                <li key={product.href}>
                  <a href={product.href} className="nav-dd-link">
                    <span className="nav-dd-icon" aria-hidden="true">
                      <Ico name={product.Icon} />
                    </span>
                    <span className="nav-product-copy">
                      <span className="nav-product-name">{product.label}</span>
                      <span className="nav-product-description">{tProductDescription(product.descriptionKey)}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link href="/pricing" className="nav-link">
              {tNav('pricing')}
            </Link>
          </li>
          <li>
            <Link href="/partners" className="nav-link">
              {tPartners('navLabel')}
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              {tNav('about')}
            </Link>
          </li>
          <li>
            <Link href="/reviews" className="nav-link">
              {tNav('reviews')}
            </Link>
          </li>
          <li className="nav-more">
            <button type="button" className="nav-services-trigger" aria-haspopup="true">
              {tNav('more')}
              <Chevron className="nav-services-chevron" />
            </button>
            <ul className="nav-dropdown nav-more-dropdown">
              <li>
                <Link href="/projects" className="nav-dd-link">{tNav('projects')}</Link>
              </li>
              <li>
                <Link href="/blog" className="nav-dd-link">{tNav('blog')}</Link>
              </li>
              <li>
                <Link
                  href={sectionHref(SECTIONS.faq)}
                  className="nav-dd-link"
                  onClick={(e) => handleSection(e, SECTIONS.faq)}
                >
                  {t('faq')}
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        <div className="nav-actions">
          {/* Language switcher, visible at every breakpoint (the mobile drawer
              sits under the bar, so this one pill serves desktop AND mobile).
              Opens on hover/focus-within; locale links keep the current path. */}
          <div className="nav-lang">
            <button type="button" className="nav-lang-trigger" aria-haspopup="true" aria-label="Switch language">
              <Ico name="solar:global-bold-duotone" className="nav-lang-globe" />
              {locale.toUpperCase()}
              <Chevron className="nav-lang-chevron" />
            </button>
            <ul className="nav-dropdown nav-lang-dropdown">
              {locales.map((l) => (
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

          <Link href={sectionHref(SECTIONS.cta)} className="glass-cta" onClick={(e) => handleSection(e, SECTIONS.cta)}>
            {t('cta')}
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className="nav-drawer" id="landing-nav-drawer">
        <div className="nav-drawer-bg" />
        <ul className="nav-drawer-menu">
          <li>
            <button
              type="button"
              className="nav-drawer-link nav-drawer-services-trigger"
              data-i="1"
              aria-expanded={drawerProductsOpen}
              onClick={() => setDrawerProductsOpen((open) => !open)}
            >
              {t('products')}
              <Chevron className="nav-drawer-services-chevron" />
            </button>
            {drawerProductsOpen && (
              <ul className="nav-drawer-sublist">
                {PRODUCT_ITEMS.map((product) => (
                  <li key={product.href}>
                    <a href={product.href} className="nav-drawer-sublink" onClick={closeMenu}>
                      <span className="nav-dd-icon" aria-hidden="true">
                        <Ico name={product.Icon} />
                      </span>
                      <span className="nav-product-copy">
                        <span className="nav-product-name">{product.label}</span>
                        <span className="nav-product-description">{tProductDescription(product.descriptionKey)}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link href="/projects" className="nav-drawer-link" data-i="4" onClick={closeMenu}>
              {tNav('projects')}
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="nav-drawer-link" data-i="4" onClick={closeMenu}>
              {tNav('pricing')}
            </Link>
          </li>
          <li>
            <Link href="/partners" className="nav-drawer-link" data-i="4" onClick={closeMenu}>
              {tPartners('navLabel')}
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-drawer-link" data-i="4" onClick={closeMenu}>
              {tNav('about')}
            </Link>
          </li>
          <li>
            <Link href="/reviews" className="nav-drawer-link" data-i="5" onClick={closeMenu}>
              {tNav('reviews')}
            </Link>
          </li>
          <li>
            <Link href="/blog" className="nav-drawer-link" data-i="6" onClick={closeMenu}>
              {tNav('blog')}
            </Link>
          </li>
          <li>
            <Link href={sectionHref(SECTIONS.faq)} className="nav-drawer-link" data-i="6" onClick={(e) => handleSection(e, SECTIONS.faq)}>
              {t('faq')}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
