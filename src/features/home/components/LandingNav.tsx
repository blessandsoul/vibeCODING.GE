'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Ico } from '@/components/common/Ico';
import { Link, usePathname } from '@/i18n/navigation';
import NextLink from 'next/link';
import { localePath } from '@/i18n/seo-locales';
import { routing } from '@/i18n/routing';
import { SITE } from '@/config/site';
import { MagneticButton } from '@/components/common/MagneticButton';
import {
  PUBLIC_ROUTES,
  publishedRoute,
} from '@/features/product-pages/routes';
import { LandingThemeToggle } from './LandingThemeToggle';
import './landing-nav.css';

/* Floating aiNOW navbar for one product domain. Home anchors and secondary
   pages share one route registry, so an unpublished page cannot remain in the
   header after its route is disabled. */

// In-page sections (ids live on the home landing components).
const SECTIONS = {
  result: 'dashboard',
  cases: 'cases',
  faq: 'faq',
  cta: 'cta',
} as const;
type ProductMenuKey = 'integrations' | 'security' | 'solutions';

function isProductMenuKey(key: string): key is ProductMenuKey {
  return (
    key === 'integrations' ||
    key === 'security' ||
    key === 'solutions'
  );
}

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
  ka: {
    open: 'მენიუს გახსნა',
    close: 'მენიუს დახურვა',
    language: 'ენის შეცვლა',
    home: 'მთავარი',
    contact: 'დაგვიკავშირდით',
    product: 'პროდუქტი',
    pricing: 'ფასები',
    blog: 'ბლოგი',
    integrations: 'ინტეგრაციები',
    security: 'უსაფრთხოება',
    solutions: 'გადაწყვეტილებები',
  },
  en: {
    open: 'Open menu',
    close: 'Close menu',
    language: 'Switch language',
    home: 'Home',
    contact: 'Contact us',
    product: 'Product',
    pricing: 'Pricing',
    blog: 'Blog',
    integrations: 'Integrations',
    security: 'Security',
    solutions: 'Solutions',
  },
  ru: {
    open: 'Открыть меню',
    close: 'Закрыть меню',
    language: 'Сменить язык',
    home: 'Главная',
    contact: 'Связаться с нами',
    product: 'Продукт',
    pricing: 'Цены',
    blog: 'Блог',
    integrations: 'Интеграции',
    security: 'Безопасность',
    solutions: 'Решения',
  },
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
  const [productOpen, setProductOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const langButtonRef = useRef<HTMLButtonElement>(null);
  const productButtonRef = useRef<HTMLButtonElement>(null);
  const productMenuRef = useRef<HTMLLIElement>(null);
  const a11y = NAV_A11Y[locale as keyof typeof NAV_A11Y] ?? NAV_A11Y.en;

  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

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
    const isolatedContent = Array.from(document.querySelectorAll<HTMLElement>('main, footer')).map(
      (element) => ({
        element,
        hadInert: element.hasAttribute('inert'),
        ariaHidden: element.getAttribute('aria-hidden'),
      }),
    );
    isolatedContent.forEach(({ element }) => {
      element.setAttribute('inert', '');
      element.setAttribute('aria-hidden', 'true');
    });
    const drawer = drawerRef.current;
    const focusable = (): HTMLElement[] =>
      Array.from(
        drawer?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((element) => !element.hasAttribute('inert'));
    const focusFrame = window.requestAnimationFrame(() => focusable()[0]?.focus());
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab') return;
      const controls = focusable();
      if (!controls.length) {
        e.preventDefault();
        menuButtonRef.current?.focus();
        return;
      }
      const first = controls[0];
      const last = controls[controls.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !drawer?.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = originalOverflow;
      isolatedContent.forEach(({ element, hadInert, ariaHidden }) => {
        if (!hadInert) element.removeAttribute('inert');
        if (ariaHidden === null) element.removeAttribute('aria-hidden');
        else element.setAttribute('aria-hidden', ariaHidden);
      });
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

  useEffect(() => {
    if (!productOpen) return undefined;

    const closeProductMenu = () => setProductOpen(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeProductMenu();
        productButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !productMenuRef.current?.contains(event.target)
      ) {
        closeProductMenu();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, [productOpen]);

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
  const pricingRoute = publishedRoute('pricing');
  const blogRoute = publishedRoute('blog');
  const productRoutes = PUBLIC_ROUTES.flatMap((route) =>
    isProductMenuKey(route.key)
      ? [{ key: route.key, path: route.path, label: a11y[route.key] }]
      : [],
  );

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
          <li
            ref={productMenuRef}
            className={`nav-services${productOpen ? ' is-open' : ''}`}
          >
            <button
              ref={productButtonRef}
              type="button"
              className="nav-services-trigger"
              aria-expanded={productOpen}
              aria-controls="landing-product-menu"
              onClick={() => {
                setLangOpen(false);
                setProductOpen((value) => !value);
              }}
            >
              {a11y.product}
              <Ico
                name="solar:alt-arrow-down-bold-duotone"
                className="nav-services-chevron"
              />
            </button>
            <ul
              id="landing-product-menu"
              className="nav-dropdown nav-product-dropdown"
              aria-hidden={!productOpen}
              inert={!productOpen}
            >
              {sectionLinks.slice(0, 2).map((section) => (
                <li key={section.id}>
                  <Link
                    href={sectionHref(section.id)}
                    className="nav-dd-link"
                    onClick={(event) => {
                      setProductOpen(false);
                      handleSection(event, section.id);
                    }}
                  >
                    {section.label}
                  </Link>
                </li>
              ))}
              {productRoutes.map((route) => (
                <li key={route.key}>
                  <Link
                    href={route.path}
                    className="nav-dd-link"
                    onClick={() => setProductOpen(false)}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {pricingRoute ? (
            <li>
              <Link href={pricingRoute.path} className="nav-link">
                {a11y.pricing}
              </Link>
            </li>
          ) : null}

          <li>
            <Link
              href={sectionHref(SECTIONS.faq)}
              className="nav-link"
              onClick={(event) => handleSection(event, SECTIONS.faq)}
            >
              {t('faq')}
            </Link>
          </li>

          {blogRoute ? (
            <li>
              <Link href={blogRoute.path} className="nav-link">
                {a11y.blog}
              </Link>
            </li>
          ) : null}
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
              onClick={() => {
                setProductOpen(false);
                setLangOpen((value) => !value);
              }}
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
                  <NextLink
                    href={localePath(l.code, pathname)}
                    className={`nav-dd-link${l.code === locale ? ' is-current' : ''}`}
                    onClick={() => setLangOpen(false)}
                  >
                    {l.label}
                  </NextLink>
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
        ref={drawerRef}
        className="nav-drawer"
        id="landing-nav-drawer"
        role="dialog"
        aria-modal={menuOpen || undefined}
        aria-label={a11y.open}
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
          {productRoutes.map((route, index) => (
            <li key={route.key}>
              <Link
                href={route.path}
                className="nav-drawer-link"
                data-i={sectionLinks.length + index + 1}
                onClick={() => setMenuOpen(false)}
              >
                {route.label}
              </Link>
            </li>
          ))}
          {pricingRoute ? (
            <li>
              <Link
                href={pricingRoute.path}
                className="nav-drawer-link"
                data-i={sectionLinks.length + productRoutes.length + 1}
                onClick={() => setMenuOpen(false)}
              >
                {a11y.pricing}
              </Link>
            </li>
          ) : null}
          {blogRoute ? (
            <li>
              <Link
                href={blogRoute.path}
                className="nav-drawer-link"
                data-i={sectionLinks.length + productRoutes.length + 2}
                onClick={() => setMenuOpen(false)}
              >
                {a11y.blog}
              </Link>
            </li>
          ) : null}
          <li>
            <Link
              href={sectionHref(SECTIONS.cta)}
              className="nav-drawer-link"
              data-i={sectionLinks.length + productRoutes.length + 3}
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
