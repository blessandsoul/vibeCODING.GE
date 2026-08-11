import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { Ico } from '@/components/common/Ico';
import { SITE } from '@/config/site';
import { ContactForm } from '@/features/contact/components/ContactForm';
import { ProductPageJsonLd } from '@/features/product-pages/components/ProductPageJsonLd';
import { ProductPageSection } from '@/features/product-pages/components/ProductPageSection';
import { ProductPageShell } from '@/features/product-pages/components/ProductPageShell';
import { SecondaryPageHero } from '@/features/product-pages/components/SecondaryPageHero';
import {
  buildProductPageGraph,
  buildProductPageMetadata,
} from '@/features/product-pages/seo';
import { PRODUCT_PAGE_LOCALES, type ProductPageLocale } from '@/features/product-pages/types';
import { Link } from '@/i18n/navigation';
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
  const pageT = await getTranslations({
    locale: safeLocale,
    namespace: 'productPages.contact',
  });
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
        <SecondaryPageHero
          breadcrumbLabel={title}
          eyebrow={pageT('eyebrow')}
          title={title}
          lead={lead}
          facts={[
            {
              label: pageT('responseLabel'),
              value: pageT('responseValue'),
            },
            {
              label: t('phoneLabel'),
              value: CONTACT_PHONE_DISPLAY,
            },
            {
              label: t('emailLabel'),
              value: CONTACT_EMAIL.toLowerCase(),
            },
          ]}
        />

        <ProductPageSection
          id="contact-request"
          eyebrow={pageT('eyebrow')}
          title={pageT('formTitle')}
          intro={pageT('formLead')}
        >
          <div className="contact-page__grid">
            <div className="contact-page__facts">
              <h3>{pageT('directTitle')}</h3>
              <ContactFact
                icon="solar:phone-calling-rounded-bold-duotone"
                label={t('phoneLabel')}
                href={`tel:${CONTACT_PHONE}`}
                value={CONTACT_PHONE_DISPLAY}
                direction="ltr"
              />
              <ContactFact
                icon="solar:letter-bold-duotone"
                label={t('emailLabel')}
                href={`mailto:${CONTACT_EMAIL}`}
                value={CONTACT_EMAIL.toLowerCase()}
              />
              <ContactFact
                icon="solar:letter-bold-duotone"
                label={t('emailLabel')}
                href={`mailto:${CONTACT_EMAIL_SECONDARY}`}
                value={CONTACT_EMAIL_SECONDARY}
              />
              <div className="contact-page__address">
                <Ico name="solar:map-point-bold-duotone" aria-hidden="true" />
                <div>
                  <span>{t('officeLabel')}</span>
                  <strong>{t('office')}</strong>
                </div>
              </div>
              <Link href="/privacy" className="contact-page__privacy-link">
                {pageT('privacyLink')}
              </Link>
            </div>

            <div className="contact-page__form">
              <ContactForm />
            </div>
          </div>
        </ProductPageSection>
      </ProductPageShell>
    </>
  );
}

function ContactFact({
  icon,
  label,
  href,
  value,
  direction,
}: {
  icon: string;
  label: string;
  href: string;
  value: string;
  direction?: 'ltr';
}): React.ReactElement {
  return (
    <a href={href} className="contact-page__fact" dir={direction}>
      <Ico name={icon} aria-hidden="true" />
      <span>
        <small>{label}</small>
        <strong>{value}</strong>
      </span>
    </a>
  );
}
