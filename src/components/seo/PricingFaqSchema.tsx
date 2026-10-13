import type { ReactElement } from 'react';
import { getChatPricingCopy } from '@/lib/chat-pricing-copy';

export function PricingFaqSchema({
  locale,
}: {
  locale: string;
}): ReactElement {
  const items = getChatPricingCopy(locale).faq.items;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
