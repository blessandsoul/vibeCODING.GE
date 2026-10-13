import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ownerServiceMetadata, ownerServiceUrl } from '@/lib/owner-seo';
import { ServiceHero } from '@/features/services/components/ServiceHero';
import { AICharactersShowcase } from '@/features/services/components/AICharactersShowcase';
import { ServiceSchemaForPage } from '@/components/seo/ServiceSchemaForPage';
import { PRICING_PRODUCTS } from '@/features/pricing/pricing-data';

const aiContentAvatarPlan = PRICING_PRODUCTS
  .find((product) => product.id === 'aicontent')
  ?.plans.find((plan) => plan.id === 'avatar');

const aiContentAvatarOffer = aiContentAvatarPlan
  ? (() => {
      const startingPrice = aiContentAvatarPlan.price.match(/\d+/u)?.[0];
      return startingPrice
        ? {
            name: `${aiContentAvatarPlan.name} — ${aiContentAvatarPlan.price}`,
            price: startingPrice,
            unitText: 'video',
          }
        : null;
    })()
  : null;

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.servicesAiCharacters' });

  const path = '/services/ai-characters';
  return ownerServiceMetadata({
    locale,
    path,
    title: t('title'),
    description: t('description'),
  });
}

export default async function AICharactersPage({ params }: Props) {
  const { locale } = await params;
  const ownerContact = ownerServiceUrl(locale, '/contact');
  return (
    <>
      <ServiceSchemaForPage
        locale={locale}
        namespace="seo.servicesAiCharacters"
        path="/services/ai-characters"
        serviceType="AI Character Production"
        offers={aiContentAvatarOffer ? [aiContentAvatarOffer] : undefined}
      />
      <ServiceHero namespace="servicesAiCharacters" />
      <AICharactersShowcase contactHref={ownerContact} />
    </>
  );
}
