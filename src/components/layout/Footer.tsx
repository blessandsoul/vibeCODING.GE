'use client';

import Link from 'next/link';

import { useTranslations, useLocale } from 'next-intl';
import { GradientText } from '@/components/ui/gradient-text';
import { OxoCounter } from '@/components/analytics/OxoCounter';
import { CONTACT_EMAIL_SECONDARY, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '@/lib/constants/app.constants';
import { SocialLinks } from './SocialLinks';
import {
  AnimatedMailIcon,
  AnimatedPhoneIcon,
  AnimatedMapPinIcon,
} from '@/features/home/components/ainow/AiNowAnimatedIcons';

export const Footer = () => {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const navLinks = [
    { href: `/${locale}`, label: tNav('home') },
    { href: `/${locale}/services`, label: tNav('services') },
    { href: `/${locale}/pricing`, label: tNav('pricing') },
    { href: `/${locale}/projects`, label: tNav('projects') },
    { href: `/${locale}/about`, label: tNav('about') },
    { href: `/${locale}/contact`, label: tNav('contact') },
  ];

  const legalLinks = [
    { href: `/${locale}/privacy`, label: t('privacy') },
    { href: `/${locale}/terms`, label: t('terms') },
    { href: `/${locale}/refund`, label: t('refund') },
  ];

  return (
    <footer className="relative border-t border-border/50">
      {/* Enhanced dot grid - stronger on mobile */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-25 md:opacity-15" />

      {/* Ambient glow (mobile only) */}
      <div
        className="glow-orb glow-primary pointer-events-none absolute bottom-0 left-0 h-80 w-80 opacity-[0.08] md:hidden"
      />

      <div className="container relative z-10 mx-auto px-4 py-10 md:py-14 md:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:gap-8 md:grid-cols-12">
          {/* Enhanced Brand Card - full width on mobile, md:col-span-5 on desktop */}
          <div className="col-span-1 sm:col-span-2 md:col-span-5 rounded-2xl border border-border/30 bg-card/50 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:bg-transparent md:border-0 md:p-0 md:shadow-none md:hover:shadow-none">
            {/* Logo */}
            <Link href={`/${locale}`} className="inline-block">
              <span className="text-2xl tracking-tight md:text-xl">
                <GradientText className="font-(family-name:--font-space-mono) font-normal" colors={['oklch(0.58 0.22 300)', 'oklch(0.55 0.16 195)', 'oklch(0.52 0.18 210)', 'oklch(0.58 0.22 300)']} animationSpeed={8}>ai</GradientText><GradientText className="font-(family-name:--font-bricolage) font-extrabold" colors={['oklch(0.55 0.16 195)', 'oklch(0.58 0.22 300)', 'oklch(0.52 0.18 210)', 'oklch(0.55 0.16 195)']} animationSpeed={10}>NOW</GradientText>
              </span>
            </Link>

            {/* Description */}
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t('description')}
            </p>

            {/* Enhanced contact info with icons and better spacing */}
            <div className="mt-6 flex flex-col gap-4">
              <a
                href="mailto:CONTACT@aiNOW.GE"
                className="group inline-flex items-center gap-2.5 text-sm text-muted-foreground transition duration-200 hover:text-primary md:mt-1"
              >
                <span className="w-5 text-center inline-flex justify-center text-primary/60 transition-colors duration-200 group-hover:text-primary">
                  <AnimatedMailIcon size={16} className="size-4 text-inherit" />
                </span>
                <span className="text-xs transition duration-200 group-hover:translate-x-0.5 sm:text-sm">
                  CONTACT@aiNOW.GE
                </span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL_SECONDARY}`}
                className="group inline-flex items-center gap-2.5 text-sm text-muted-foreground transition duration-200 hover:text-primary"
              >
                <span className="w-5 text-center inline-flex justify-center text-primary/60 transition-colors duration-200 group-hover:text-primary">
                  <AnimatedMailIcon size={16} className="size-4 text-inherit" />
                </span>
                <span className="text-xs transition duration-200 group-hover:translate-x-0.5 sm:text-sm">
                  {CONTACT_EMAIL_SECONDARY}
                </span>
              </a>
              <a
                href={`tel:${CONTACT_PHONE}`}
                dir="ltr"
                className="group inline-flex items-center gap-2.5 self-start text-sm text-muted-foreground transition duration-200 hover:text-primary"
              >
                <span className="w-5 text-center inline-flex justify-center text-primary/60 transition-colors duration-200 group-hover:text-primary">
                  <AnimatedPhoneIcon size={16} className="size-4 text-inherit" />
                </span>
                <span className="text-xs transition duration-200 group-hover:translate-x-0.5 sm:text-sm">
                  {CONTACT_PHONE_DISPLAY}
                </span>
              </a>
              <span className="inline-flex items-center gap-2.5 text-sm text-muted-foreground">
                <span className="w-5 text-center inline-flex justify-center text-primary/60">
                  <AnimatedMapPinIcon size={16} className="size-4 text-inherit" />
                </span>
                <span className="text-xs sm:text-sm">
                  {t('address')}
                </span>
              </span>
              <SocialLinks className="mt-1" />
            </div>
          </div>

          {/* Navigation with enhanced spacing and hover states */}
          <div className="col-span-1 md:col-span-3 md:col-start-7">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t('navigation')}
            </h4>
            <nav aria-label={t('navigation')} className="mt-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg py-2.5 text-sm text-muted-foreground transition duration-200 hover:bg-accent/5 hover:text-foreground hover:translate-x-0.5 md:gap-2.5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal with same pattern */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t('legal')}
            </h4>
            <nav aria-label={t('legal')} className="mt-5 flex flex-col gap-1">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg py-2.5 text-sm text-muted-foreground transition duration-200 hover:bg-accent/5 hover:text-foreground hover:translate-x-0.5 md:gap-2.5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Enhanced copyright with badge */}
        <div className="mt-8 md:mt-10">
          <div className="divider" />
          <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-xs text-muted-foreground sm:text-left">
              &copy; {new Date().getFullYear()} aiNOW.{' '}
              {t('rights')}
            </p>
            <OxoCounter />
          </div>
        </div>
      </div>

    </footer>
  );
};
