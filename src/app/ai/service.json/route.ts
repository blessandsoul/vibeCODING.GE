import { SITE } from '@/config/site';
import { PUBLIC_ROUTES } from '@/features/product-pages/routes';
import {
  PRODUCT_MACHINE_FACTS,
  machineJsonResponse,
} from '@/features/product-pages/machine';

export const dynamic = 'force-static';

export function GET() {
  return machineJsonResponse({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: PRODUCT_MACHINE_FACTS.name,
    url: SITE.baseUrl,
    provider: PRODUCT_MACHINE_FACTS.provider,
    serviceType: SITE.seo.serviceType,
    audience: SITE.seo.audienceName,
    areaServed: SITE.seo.areaServed,
    capabilities: PRODUCT_MACHINE_FACTS.capabilities,
    boundary: PRODUCT_MACHINE_FACTS.boundary,
    limits: PRODUCT_MACHINE_FACTS.limits,
    commitment: PRODUCT_MACHINE_FACTS.commitment,
    publicPages: PUBLIC_ROUTES.map((route) =>
      PRODUCT_MACHINE_FACTS.publicPages.find((page) => page.path === route.path),
    ).filter(Boolean),
    reviewedOn: PRODUCT_MACHINE_FACTS.reviewedOn,
  });
}
