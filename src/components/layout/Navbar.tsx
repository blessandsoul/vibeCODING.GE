'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { NavDropdown } from '@/components/layout/NavDropdown';
import { BrandWordmark } from '@/components/layout/BrandWordmark';
import { cn } from '@/lib/utils';

// ---- Motion ----
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const menuVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.4, ease: EASE, when: 'beforeChildren' as const, staggerChildren: 0.07, delayChildren: 0.12 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: EASE, when: 'afterChildren' as const, staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: 32 },
  open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25, ease: EASE } },
};

const footerVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.5, ease: EASE, delay: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export const Navbar = () => {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const locale = useLocale();

  const navLinks = [
    { href: '/' as const, label: t('home') },
    { href: '/pricing' as const, label: t('pricing') },
    { href: '/projects' as const, label: t('projects') },
    { href: '/about' as const, label: t('about') },
    { href: '/blog' as const, label: t('blog') },
    { href: '/contact' as const, label: t('contact') },
  ];

  const serviceItems = [
    { href: '/services/bots' as const, label: t('servicesItems.bots'), icon: '⬡' },
    { href: '/services/content-studio' as const, label: t('servicesItems.contentStudio'), icon: '✦' },
    { href: '/services/meta-ads' as const, label: t('servicesItems.metaAds'), icon: '◎' },
    { href: '/services/automation' as const, label: t('servicesItems.automation'), icon: '↻' },
    { href: '/services/voice-agents' as const, label: t('servicesItems.voiceAgents'), icon: '◉' },
    { href: '/services/ai-characters' as const, label: t('servicesItems.aiCharacters'), icon: '✧' },
    { href: '/services/websites' as const, label: t('servicesItems.websites'), icon: '◇' },
    { href: '/services/llm-seo' as const, label: t('servicesItems.llmSeo'), icon: '✺' },
    { href: '/services/seo' as const, label: t('servicesItems.seo'), icon: '↗' },
    { href: '/services/graphics' as const, label: t('servicesItems.graphics'), icon: '⬢' },
    { href: '/services/auction-logistics-marketing' as const, label: t('servicesItems.auctionMarketing'), icon: '⚙' },
    { href: '/services/consulting' as const, label: t('servicesItems.consulting'), icon: '◈' },
  ];

  // Normalize pathname: strip locale prefix to get the app-level path
  const strippedPath = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), '') || '/';

  const isActive = (href: string) => {
    if (href === '/') return strippedPath === '/';
    return strippedPath.startsWith(href);
  };

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Auto-close on desktop resize
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = () => { if (mq.matches) setIsOpen(false); };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen]);

  // Scroll detection for transparent navbar
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    handler(); // check initial state
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;
    const menu = menuRef.current;
    const els = menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    const first = els[0];
    const last = els[els.length - 1];
    first?.focus();
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
    };
    menu.addEventListener('keydown', handleTab);
    return () => menu.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  return (
    <>
      <header className={cn(
        "group/header sticky top-0 z-50 w-full transition duration-500",
        scrolled
          ? "bg-background/80 shadow-[0_1px_0_0] shadow-border/30 backdrop-blur-xl"
          : "bg-transparent shadow-none backdrop-blur-none"
      )}>
        <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <Link href={"/"} className="group/logo flex items-center gap-2 transition-transform duration-300 hover:scale-105">
            <span className="tracking-tight transition duration-300 group-hover/logo:drop-shadow-[0_0_8px_oklch(0.58_0.22_300)]">
              <BrandWordmark collapsed={scrolled} pauseOnHover />
            </span>
          </Link>

          {/* Desktop nav */}
          <div className={cn(
            "hidden items-center gap-1 transition duration-500 md:flex",
            scrolled ? "translate-y-0 opacity-100" : "translate-y-0 opacity-100"
          )}>
            <Link href={'/'} className="group/link relative px-4 py-2 text-sm font-medium transition-colors duration-200">
              <span className={cn("relative transition-colors duration-200", isActive('/') ? "text-foreground" : "text-muted-foreground group-hover/link:text-foreground")}>{t('home')}</span>
              <span className={cn("absolute bottom-1 left-4 right-4 h-px bg-linear-to-r from-primary/0 via-primary to-primary/0 transition-opacity duration-300", isActive('/') ? "opacity-100" : "opacity-0 group-hover/link:opacity-60")} />
            </Link>
            <NavDropdown
              label={t('services')}
              items={serviceItems}
              isActive={isActive('/services')}
            />
            {navLinks.slice(1, -1).map((link) => (
              <Link key={link.href} href={link.href} className="group/link relative px-4 py-2 text-sm font-medium transition-colors duration-200">
                <span className={cn("relative transition-colors duration-200", isActive(link.href) ? "text-foreground" : "text-muted-foreground group-hover/link:text-foreground")}>{link.label}</span>
                <span className={cn("absolute bottom-1 left-4 right-4 h-px bg-linear-to-r from-primary/0 via-primary to-primary/0 transition-opacity duration-300", isActive(link.href) ? "opacity-100" : "opacity-0 group-hover/link:opacity-60")} />
              </Link>
            ))}
            <Link href={'/contact'} className={cn("gradient-bg ml-2 rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-md shadow-primary/20 transition duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-primary/30 active:scale-95", isActive('/contact') && "ring-2 ring-primary/50 ring-offset-1 ring-offset-background")}>{t('contact')}</Link>
            <div className="ml-2 flex items-center gap-2 border-l border-border/50 pl-3">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>

          {/* Burger */}
          <button type="button" onClick={toggleMenu} className={cn(
            "relative z-60 flex h-9 w-9 items-center justify-center rounded-lg transition duration-500 hover:bg-muted/50 md:hidden",
            "bg-background/20 backdrop-blur-md shadow-sm border border-white/10" // added some background for visibility on transparent header
          )} aria-label="Toggle menu" aria-expanded={isOpen} aria-controls="mobile-nav-menu">
            <div className="flex flex-col gap-[5px]">
              <span className={cn("block h-[1.5px] w-4 bg-foreground transition duration-300", isOpen && "translate-y-[6.5px] rotate-45")} />
              <span className={cn("block h-[1.5px] w-4 bg-foreground transition duration-300", isOpen && "opacity-0")} />
              <span className={cn("block h-[1.5px] w-4 bg-foreground transition duration-300", isOpen && "-translate-y-[6.5px] -rotate-45")} />
            </div>
          </button>
        </nav>
      </header>

      {/* ═══ Mobile Menu, rendered outside header to avoid backdrop-filter containing block ═══ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-nav-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 z-50 flex flex-col bg-background md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Texture + ambient light */}
            <div className="noise pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="pointer-events-none absolute top-1/4 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06]" style={{ background: 'radial-gradient(circle, oklch(0.58 0.22 300) 0%, transparent 70%)' }} aria-hidden="true" />

            {/* Header bar with logo + close button */}
            <div className="flex h-16 shrink-0 items-center justify-between px-4">
              <Link href={"/"} onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <span className="tracking-tight">
                  <BrandWordmark />
                </span>
              </Link>
              <button type="button" onClick={toggleMenu} className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-muted/50" aria-label="Close menu">
                <div className="flex flex-col gap-[5px]">
                  <span className="block h-[1.5px] w-4 translate-y-[6.5px] rotate-45 bg-foreground transition duration-300" />
                  <span className="block h-[1.5px] w-4 bg-foreground opacity-0 transition duration-300" />
                  <span className="block h-[1.5px] w-4 -translate-y-[6.5px] -rotate-45 bg-foreground transition duration-300" />
                </div>
              </button>
            </div>

            {/* Content */}
            <div className="relative flex flex-1 flex-col justify-between px-6 pb-8 pt-2">
              {/* Nav links */}
              <nav className="flex flex-col">
                {/* Home */}
                <motion.div key="home" variants={itemVariants}>
                  <Link
                    href={'/'}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "group/ml flex items-baseline gap-5 border-b py-5 transition duration-200",
                      isActive('/') ? "border-primary/20" : "border-border/20 hover:border-border/40"
                    )}
                  >
                    <span className={cn(
                      "font-(family-name:--font-space-mono) text-[11px] tabular-nums transition-colors duration-200",
                      isActive('/') ? "text-primary" : "text-muted-foreground/40 group-hover/ml:text-muted-foreground/70"
                    )}>01</span>
                    <span className={cn(
                      "font-(family-name:--font-bricolage) text-[2rem] font-bold leading-none tracking-tight transition-colors duration-200",
                      isActive('/') ? "text-foreground" : "text-muted-foreground/70 group-hover/ml:text-foreground"
                    )}>{t('home')}</span>
                    {isActive('/') && <span className="ml-auto h-2 w-2 shrink-0 self-center rounded-full bg-primary shadow-[0_0_12px_3px] shadow-primary/30" />}
                  </Link>
                </motion.div>

                {/* Services accordion */}
                <motion.div key="services" variants={itemVariants}>
                  <button
                    type="button"
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                    className={cn(
                      "group/ml flex w-full items-baseline gap-5 border-b py-5 transition duration-200",
                      isActive('/services') ? "border-primary/20" : "border-border/20 hover:border-border/40"
                    )}
                  >
                    <span className={cn(
                      "font-(family-name:--font-space-mono) text-[11px] tabular-nums transition-colors duration-200",
                      isActive('/services') ? "text-primary" : "text-muted-foreground/40 group-hover/ml:text-muted-foreground/70"
                    )}>02</span>
                    <span className={cn(
                      "font-(family-name:--font-bricolage) text-[2rem] font-bold leading-none tracking-tight transition-colors duration-200",
                      isActive('/services') ? "text-foreground" : "text-muted-foreground/70 group-hover/ml:text-foreground"
                    )}>{t('services')}</span>
                    <Ico name="solar:alt-arrow-down-bold-duotone" className={cn("ml-auto h-5 w-5 shrink-0 self-center text-muted-foreground/50 transition-transform duration-200", servicesExpanded && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {servicesExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-8 border-l-2 border-primary/20 pl-4 pt-1 pb-2">
                          {serviceItems.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 py-3 text-xl font-semibold text-muted-foreground/70 transition-colors duration-200 hover:text-foreground"
                            >
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/50 bg-muted/50 text-xs">{sub.icon}</span>
                              <span>{sub.label}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Projects, About, Contact -- shifted numbering */}
                {navLinks.slice(1).map((link, i) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "group/ml flex items-baseline gap-5 border-b py-5 transition duration-200",
                        isActive(link.href) ? "border-primary/20" : "border-border/20 hover:border-border/40"
                      )}
                    >
                      <span className={cn(
                        "font-(family-name:--font-space-mono) text-[11px] tabular-nums transition-colors duration-200",
                        isActive(link.href) ? "text-primary" : "text-muted-foreground/40 group-hover/ml:text-muted-foreground/70"
                      )}>
                        {String(i + 3).padStart(2, '0')}
                      </span>
                      <span className={cn(
                        "font-(family-name:--font-bricolage) text-[2rem] font-bold leading-none tracking-tight transition-colors duration-200",
                        isActive(link.href) ? "text-foreground" : "text-muted-foreground/70 group-hover/ml:text-foreground"
                      )}>
                        {link.label}
                      </span>
                      {isActive(link.href) && (
                        <span className="ml-auto h-2 w-2 shrink-0 self-center rounded-full bg-primary shadow-[0_0_12px_3px] shadow-primary/30" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer */}
              <motion.div variants={footerVariants} className="flex items-center justify-between border-t border-border/10 pt-6">
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <LanguageSwitcher variant="mobile" />
                </div>
                <span className="font-(family-name:--font-space-mono) text-[10px] uppercase tracking-[0.2em] text-muted-foreground/30">
                  aiNOW
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
