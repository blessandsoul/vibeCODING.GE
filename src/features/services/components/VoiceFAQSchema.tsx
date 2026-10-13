import { getTranslations } from 'next-intl/server';

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'] as const;

type Props = {
  locale: string;
};

export async function VoiceFAQSchema({ locale }: Props) {
  const t = await getTranslations({
    locale,
    namespace: 'servicesVoiceAgents',
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqKeys.map((key) => ({
      '@type': 'Question',
      name: t(`faq_${key}_q`),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t(`faq_${key}_a`),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
