import type { ProductPagesConfig } from '@/features/product-pages/types';

export const PRODUCT_PAGES = {
  pricing: { status: 'public', mode: 'project' },
  contact: { status: 'public' },
  blog: { status: 'off' },
  integrations: {
    status: 'public',
    records: [
      { id: 'public-app', name: 'Public application', icon: 'solar:global-bold-duotone', category: 'development', connection: 'direct', status: 'available', dataFlow: 'sourceReview' },
      { id: 'source-repository', name: 'Source repository', icon: 'solar:code-square-bold-duotone', category: 'development', connection: 'custom', status: 'customSetup', dataFlow: 'sourceReview' },
      { id: 'api', name: 'API', icon: 'solar:server-square-cloud-bold-duotone', category: 'development', connection: 'custom', status: 'customSetup', dataFlow: 'sourceReview' },
      { id: 'database', name: 'Database', icon: 'solar:database-bold-duotone', category: 'development', connection: 'custom', status: 'customSetup', dataFlow: 'sourceReview' },
      {
        id: 'tiktok-api-review',
        name: 'TikTok developer APIs',
        icon: 'solar:videocamera-record-bold-duotone',
        category: 'development',
        connection: 'planned',
        status: 'planned',
        dataFlow: 'sourceReview',
        machineDescription:
          'Reviewing and implementing TikTok Login, Content Posting and webhook integrations is on the aiNOW roadmap. A ready TikTok connector is not currently available.',
        requirements: [
          'TikTok application review',
          'Approved scopes for the selected API',
          'Eligible account and verified callback or upload domains',
        ],
        officialSources: [
          'https://developers.tiktok.com/doc/login-kit-overview',
          'https://developers.tiktok.com/doc/content-posting-api-get-started/',
          'https://developers.tiktok.com/doc/webhooks-overview',
        ],
      },
    ],
  },
  security: { status: 'public' },
  privacy: { status: 'public' },
  terms: { status: 'public' },
  cookies: { status: 'off' },
  solutions: { status: 'off', slugs: [] },
  localeNamespaces: {
    ka: ['productPages.common', 'productPages.pricing', 'productPages.contact', 'productPages.integrations', 'productPages.security', 'productPages.privacy', 'productPages.terms'],
    en: ['productPages.common', 'productPages.pricing', 'productPages.contact', 'productPages.integrations', 'productPages.security', 'productPages.privacy', 'productPages.terms'],
    ru: ['productPages.common', 'productPages.pricing', 'productPages.contact', 'productPages.integrations', 'productPages.security', 'productPages.privacy', 'productPages.terms'],
  },
} as const satisfies ProductPagesConfig;
