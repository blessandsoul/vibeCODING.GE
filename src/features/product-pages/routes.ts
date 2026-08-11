import { PRODUCT_PAGES } from '@/config/product-pages';
import { SITE } from '@/config/site';

import {
  PRODUCT_PAGE_LOCALES,
  type ProductPageKey,
  type ProductPageLocale,
  type ProductPageNamespace,
  type ProductPagesConfig,
  type ProductRouteDefinition,
  type PublicProductRoute,
  type PublicRoute,
  type PublicSolutionRoute,
} from './types';

const ROUTE_DEFINITIONS = [
  {
    key: 'home',
    path: '/',
    requiredNamespace: null,
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    key: 'pricing',
    path: '/pricing',
    requiredNamespace: 'productPages.pricing',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    key: 'contact',
    path: '/contact',
    requiredNamespace: 'productPages.contact',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    key: 'integrations',
    path: '/integrations',
    requiredNamespace: 'productPages.integrations',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    key: 'security',
    path: '/security',
    requiredNamespace: 'productPages.security',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    key: 'privacy',
    path: '/privacy',
    requiredNamespace: 'productPages.privacy',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    key: 'terms',
    path: '/terms',
    requiredNamespace: 'productPages.terms',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    key: 'blog',
    path: '/blog',
    requiredNamespace: 'productPages.blog',
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  {
    key: 'cookies',
    path: '/cookies',
    requiredNamespace: 'productPages.cookies',
    changeFrequency: 'yearly',
    priority: 0.2,
  },
  {
    key: 'solutions',
    path: '/solutions',
    requiredNamespace: 'productPages.solutions',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
] as const satisfies readonly ProductRouteDefinition[];

const TEMPLATE_PRICING_MODES = new Set(['project', 'pilot']);

function statusFor(
  config: ProductPagesConfig,
  key: Exclude<ProductPageKey, 'home' | 'solution'>,
): 'off' | 'public' {
  return config[key].status;
}

function assertSupportedLocale(locale: string): asserts locale is ProductPageLocale {
  if (!PRODUCT_PAGE_LOCALES.includes(locale as ProductPageLocale)) {
    throw new Error(`Unsupported product-page locale: ${locale}`);
  }
}

export function localePath(locale: ProductPageLocale, path: '/' | `/${string}`): string {
  assertSupportedLocale(locale);
  const normalizedPath = path === '/' ? '' : path;
  return locale === SITE.defaultLocale
    ? normalizedPath || '/'
    : `/${locale}${normalizedPath}`;
}

function localePaths(path: '/' | `/${string}`): Readonly<Record<ProductPageLocale, string>> {
  return Object.fromEntries(
    PRODUCT_PAGE_LOCALES.map((locale) => [locale, localePath(locale, path)]),
  ) as Record<ProductPageLocale, string>;
}

function publicDefinitions(config: ProductPagesConfig): readonly ProductRouteDefinition[] {
  return ROUTE_DEFINITIONS.filter((definition) => {
    if (definition.key === 'home') return true;
    return statusFor(config, definition.key) === 'public';
  });
}

function requiredNamespaces(config: ProductPagesConfig): readonly ProductPageNamespace[] {
  const namespaces = new Set<ProductPageNamespace>(['productPages.common']);
  for (const definition of publicDefinitions(config)) {
    if (definition.requiredNamespace) namespaces.add(definition.requiredNamespace);
  }
  return [...namespaces];
}

export function validateProductPagesConfig(config: ProductPagesConfig): readonly string[] {
  const errors: string[] = [];
  const supportedBySite = new Set(SITE.locales);

  if (
    config.pricing.status === 'public'
    && !TEMPLATE_PRICING_MODES.has(config.pricing.mode)
  ) {
    errors.push(
      `Pricing mode "${config.pricing.mode}" has no standard-landing data adapter.`,
    );
  }

  if (config.cookies.status === 'public') {
    errors.push(
      'The standard landing has no approved cookies-page adapter; keep this route off.',
    );
  }

  if (config.solutions.status === 'public') {
    errors.push(
      'The standard landing has no product-owned solution copy adapter; keep this route off.',
    );
  }

  for (const locale of PRODUCT_PAGE_LOCALES) {
    if (!supportedBySite.has(locale)) {
      errors.push(`SITE.locales is missing the required locale "${locale}".`);
      continue;
    }

    const localeNamespaces = new Set(config.localeNamespaces[locale] ?? []);
    for (const requiredNamespace of requiredNamespaces(config)) {
      if (!localeNamespaces.has(requiredNamespace)) {
        errors.push(`${locale} is missing namespace "${requiredNamespace}".`);
      }
    }
  }

  if (config.solutions.status !== 'public' && config.solutions.slugs.length > 0) {
    errors.push('Solution slugs must be empty while the solutions route is off.');
  }

  if (config.integrations.status === 'public' && config.integrations.records.length === 0) {
    errors.push('A public integrations route requires at least one verified integration record.');
  }

  const integrationIds = new Set<string>();
  for (const integration of config.integrations.records) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(integration.id)) {
      errors.push(`Invalid integration id "${integration.id}".`);
    }
    if (integrationIds.has(integration.id)) {
      errors.push(`Duplicate integration id "${integration.id}".`);
    }
    integrationIds.add(integration.id);
  }

  const seen = new Set<string>();
  for (const slug of config.solutions.slugs) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      errors.push(`Invalid solution slug "${slug}".`);
    }
    if (seen.has(slug)) {
      errors.push(`Duplicate solution slug "${slug}".`);
    }
    seen.add(slug);
  }

  return errors;
}

export function buildPublicRoutes(config: ProductPagesConfig): readonly PublicRoute[] {
  const errors = validateProductPagesConfig(config);
  if (errors.length > 0) {
    throw new Error(`Invalid product page registry:\n${errors.join('\n')}`);
  }

  const routes: PublicProductRoute[] = publicDefinitions(config).map((definition) => ({
    ...definition,
    localePaths: localePaths(definition.path),
  }));

  if (config.solutions.status !== 'public') return routes;

  const solutionRoutes: PublicSolutionRoute[] = config.solutions.slugs.map((slug) => {
    const path = `/solutions/${slug}` as const;
    return {
      key: 'solution',
      slug,
      path,
      requiredNamespace: 'productPages.solutions',
      changeFrequency: 'monthly',
      priority: 0.65,
      localePaths: localePaths(path),
    };
  });

  return [...routes, ...solutionRoutes];
}

export const PUBLIC_ROUTES = buildPublicRoutes(PRODUCT_PAGES);

export function findPublicRoute(path: string): PublicRoute | undefined {
  return PUBLIC_ROUTES.find((route) => route.path === path);
}

export function publishedRoute(
  key: Exclude<ProductPageKey, 'solution'>,
): PublicProductRoute | undefined {
  return PUBLIC_ROUTES.find(
    (route): route is PublicProductRoute => route.key === key,
  );
}

export function isPublicRoute(path: string): boolean {
  return findPublicRoute(path) !== undefined;
}
