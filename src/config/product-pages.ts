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
