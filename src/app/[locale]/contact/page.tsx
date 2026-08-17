import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { FadeIn } from '@/components/common/FadeIn';
import { SITE } from '@/config/site';
import { ContactForm } from '@/features/contact/components/ContactForm';
import { ProductPageJsonLd } from '@/features/product-pages/components/ProductPageJsonLd';
import { ProductPageShell } from '@/features/product-pages/components/ProductPageShell';
import {
  buildProductPageGraph,
  buildProductPageMetadata,
} from '@/features/product-pages/seo';
import { PRODUCT_PAGE_LOCALES, type ProductPageLocale } from '@/features/product-pages/types';
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_SECONDARY,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from '@/lib/constants/app.constants';

import './contact-page.css';

interface Props {
  params: Promise<{ locale: string }>;
}

function asProductPageLocale(locale: string): ProductPageLocale {
  return PRODUCT_PAGE_LOCALES.includes(locale as ProductPageLocale)
    ? (locale as ProductPageLocale)
    : SITE.defaultLocale;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildProductPageMetadata({
    locale: asProductPageLocale(locale),
    namespace: 'productPages.contact',
    path: '/contact',
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const safeLocale = asProductPageLocale(locale);
  setRequestLocale(safeLocale);
  const t = await getTranslations({ locale: safeLocale, namespace: 'contact' });
  const title = t('title');
  const lead = t('subtitle');

  return (
    <>
      <ProductPageJsonLd
        graph={buildProductPageGraph({
          locale: safeLocale,
          path: '/contact',
          name: title,
          description: lead,
        })}
      />
      <ProductPageShell className="contact-page" endcap={null}>
        <div className="contact-page__main" id="contact-request">
          <div className="contact-page__content">
            <FadeIn>
              <header className="contact-page__header">
                <h1>{title}</h1>
                <p>{lead}</p>
              </header>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="contact-page__form-card">
                <ContactForm />
              </div>
            </FadeIn>

            <div className="contact-page__info-grid">
              <FadeIn delay={0.2}>
                <ContactInfoCard
                  label={t('phoneLabel')}
                  href={`tel:${CONTACT_PHONE}`}
                  direction="ltr"
                >
                  {CONTACT_PHONE_DISPLAY}
                </ContactInfoCard>
              </FadeIn>
              <FadeIn delay={0.28}>
                <article className="contact-page__info-card">
                  <p>{t('emailLabel')}</p>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  <a href={`mailto:${CONTACT_EMAIL_SECONDARY}`}>{CONTACT_EMAIL_SECONDARY}</a>
                </article>
              </FadeIn>
              <FadeIn delay={0.36}>
                <ContactInfoCard label={t('officeLabel')}>{t('office')}</ContactInfoCard>
              </FadeIn>
              <FadeIn delay={0.44}>
                <ContactInfoCard label={t('legalLabel')}>{t('legal')}</ContactInfoCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </ProductPageShell>
    </>
  );
}

function ContactInfoCard({
  label,
  href,
  children,
  direction,
}: {
  label: string;
  href?: string;
  children: React.ReactNode;
  direction?: 'ltr';
}): React.ReactElement {
  return (
    <article className="contact-page__info-card">
      <p>{label}</p>
      {href ? (
        <a href={href} dir={direction}>
          {children}
        </a>
      ) : (
        <span dir={direction}>{children}</span>
      )}
    </article>
  );
}
