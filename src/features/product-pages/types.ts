export const PRODUCT_PAGE_LOCALES = ['ka', 'en', 'ru'] as const;

export type ProductPageLocale = (typeof PRODUCT_PAGE_LOCALES)[number];
export type PageStatus = 'off' | 'public';
export type IntegrationStatus = 'available' | 'customSetup' | 'planned';
export type IntegrationCategory =
  | 'communication'
  | 'businessSystems'
  | 'contentAndAdvertising'
  | 'development'
  | 'operations';
export type IntegrationConnection =
  | 'direct'
  | 'api'
  | 'file'
  | 'custom'
  | 'planned';
export type IntegrationDataFlow =
  | 'calls'
  | 'callResults'
  | 'appointments'
  | 'customerRecords'
  | 'paymentEvents'
  | 'messages'
  | 'websiteEvents'
  | 'analyticsMetrics'
  | 'domainSettings'
  | 'forms'
  | 'taskRecords'
  | 'documents'
  | 'accountingDrafts'
  | 'applicationRelease'
  | 'notifications'
  | 'sourceReview'
  | 'campaignSignals'
  | 'contentPublishing'
  | 'fleetCommands'
  | 'routingData'
  | 'depotSchedule'
  | 'telemetry';

export type PricingMode =
  | 'fixed'
  | 'project'
  | 'retainer'
  | 'usage'
  | 'hybrid'
  | 'pilot'
  | 'liveSubscription';

export type ProductPageKey =
  | 'home'
  | 'pricing'
  | 'contact'
  | 'blog'
  | 'integrations'
  | 'security'
  | 'privacy'
  | 'terms'
  | 'cookies'
  | 'solutions'
  | 'solution';

export type ProductPageNamespace =
  | 'productPages.common'
  | 'productPages.pricing'
  | 'productPages.contact'
  | 'productPages.blog'
  | 'productPages.integrations'
  | 'productPages.security'
  | 'productPages.privacy'
  | 'productPages.terms'
  | 'productPages.cookies'
  | 'productPages.solutions';

export interface PagePublication {
  status: PageStatus;
}

export interface ProductIntegrationRecord {
  id: string;
  name: string;
  icon: string;
  category: IntegrationCategory;
  connection: IntegrationConnection;
  status: IntegrationStatus;
  dataFlow: IntegrationDataFlow;
}

export interface IntegrationsPublication extends PagePublication {
  records: readonly ProductIntegrationRecord[];
}

export interface PricingPublication extends PagePublication {
  mode: PricingMode;
}

export interface SolutionsPublication extends PagePublication {
  slugs: readonly string[];
}

export interface ProductPagesConfig {
  pricing: PricingPublication;
  contact: { status: 'public' };
  blog: PagePublication;
  integrations: IntegrationsPublication;
  security: PagePublication;
  privacy: PagePublication;
  terms: PagePublication;
  cookies: PagePublication;
  solutions: SolutionsPublication;

  /**
   * Namespaces deliberately declared by locale. The family acceptance script
   * checks that each declaration also exists in the corresponding message file.
   * Keeping the declaration here makes it impossible for a route to silently
   * become public in only one language.
   */
  localeNamespaces: Readonly<
    Record<ProductPageLocale, readonly ProductPageNamespace[]>
  >;
}

export interface ProductRouteDefinition {
  key: Exclude<ProductPageKey, 'solution'>;
  path: '/' | `/${string}`;
  requiredNamespace: ProductPageNamespace | null;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  priority: number;
}

export interface PublicProductRoute extends ProductRouteDefinition {
  localePaths: Readonly<Record<ProductPageLocale, string>>;
}

export interface PublicSolutionRoute {
  key: 'solution';
  slug: string;
  path: `/solutions/${string}`;
  requiredNamespace: 'productPages.solutions';
  changeFrequency: 'monthly';
  priority: number;
  localePaths: Readonly<Record<ProductPageLocale, string>>;
}

export type PublicRoute = PublicProductRoute | PublicSolutionRoute;
