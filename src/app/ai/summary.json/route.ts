import { SITE } from '@/config/site';
import {
  PRODUCT_MACHINE_FACTS,
  machineJsonResponse,
} from '@/features/product-pages/machine';

export const dynamic = 'force-static';

export function GET() {
  return machineJsonResponse({
    name: PRODUCT_MACHINE_FACTS.name,
    description: SITE.seo.summary,
    url: SITE.baseUrl,
    provider: PRODUCT_MACHINE_FACTS.provider,
    serviceType: SITE.seo.serviceType,
    audience: SITE.seo.audienceName,
    areaServed: SITE.seo.areaServed,
    languages: PRODUCT_MACHINE_FACTS.languages,
    boundary: SITE.seo.boundary,
    integrations: PRODUCT_MACHINE_FACTS.integrations,
    plannedIntegrations: PRODUCT_MACHINE_FACTS.integrations.filter(
      (integration) => integration.status === 'planned',
    ),
    publicPages: PRODUCT_MACHINE_FACTS.publicPages,
    reviewedOn: PRODUCT_MACHINE_FACTS.reviewedOn,
  });
}
