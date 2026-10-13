import { getTranslations } from 'next-intl/server';

type Props = {
  locale: string;
  /** App-relative service path, e.g. "/services/voice-agents". Defaults to auction for backward compatibility. */
  servicePath?: string;
  /** i18n namespace whose `title` + `titleAccent` form the leaf breadcrumb label. Defaults to auction. */
  serviceNamespace?: string;
};

export async function BreadcrumbSchema({
  locale,
  servicePath = '/services/auction-logistics-marketing',
  serviceNamespace = 'servicesAuctionMarketing',
}: Props) {
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const tIndex = await getTranslations({ locale, namespace: 'servicesIndex' });
  const tPage = await getTranslations({
    locale,
    namespace: serviceNamespace,
  });

  const base = locale === 'ka' ? 'https://ainow.ge' : `https://ainow.ge/${locale}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: tNav('home'),
        item: base + '/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: tIndex('title'),
        item: base + '/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: tPage('title') + ' ' + tPage('titleAccent'),
        item: base + servicePath,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
