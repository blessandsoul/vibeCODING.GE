'use client';

import { useTranslations } from 'next-intl';

import { ProductCapabilities } from './ProductCapabilities';

const ICONS = [
  'solar:scanner-bold-duotone',
  'solar:database-bold-duotone',
  'solar:wallet-money-bold-duotone',
  'solar:key-bold-duotone',
  'solar:shield-check-bold-duotone',
] as const;

export function LandingShowcase(): React.ReactElement {
  const t = useTranslations('product.capabilities');

  return (
    <ProductCapabilities
      eyebrow={t('eyebrow')}
      title={t('title')}
      intro={t('intro')}
      outcomeLabel={t('outcomeLabel')}
      items={ICONS.map((icon, index) => {
        const key = index + 1;
        return {
          icon,
          title: t(`items.${key}.title`),
          description: t(`items.${key}.description`),
          result: t(`items.${key}.result`),
        };
      })}
    />
  );
}
