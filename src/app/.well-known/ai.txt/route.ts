import { SITE } from '@/config/site';
import { PUBLIC_ROUTES } from '@/features/product-pages/routes';
import {
  AI_CRAWLERS,
  MACHINE_DISALLOW,
} from '@/features/product-pages/ai-access';
import {
  MACHINE_PUBLIC_PAGES,
  PRODUCT_BRAND,
  PRODUCT_MACHINE_FACTS,
  machineTextResponse,
} from '@/features/product-pages/machine';

export const dynamic = 'force-static';

export function GET() {
  const lines = [
    `# AI access policy for ${SITE.domain}`,
    '',
    `Product: ${PRODUCT_BRAND}`,
    `Provider: ${PRODUCT_MACHINE_FACTS.provider.name}`,
    `URL: ${SITE.baseUrl}`,
    `Service-Type: ${SITE.seo.serviceType}`,
    `Languages: ${SITE.locales.join(', ')}`,
    `Contact: ${PRODUCT_MACHINE_FACTS.contact.email}`,
    '',
    'User-Agent: *',
    'Allow: /',
    ...MACHINE_DISALLOW.map((path) => `Disallow: ${path}`),
    '',
    ...AI_CRAWLERS.flatMap((crawler) => [
      `User-Agent: ${crawler}`,
      'Allow: /',
      ...MACHINE_DISALLOW.map((path) => `Disallow: ${path}`),
      '',
    ]),
    'Citation-Policy: required',
    `Citation-Format: ${PRODUCT_BRAND} (${SITE.baseUrl})`,
    '',
    `Sitemap: ${SITE.baseUrl}/sitemap.xml`,
    `LLMs-File: ${SITE.baseUrl}/llms.txt`,
    `LLMs-Full-File: ${SITE.baseUrl}/llms-full.txt`,
    `Summary: ${SITE.baseUrl}/ai/summary.json`,
    `FAQ: ${SITE.baseUrl}/ai/faq.json`,
    `Service: ${SITE.baseUrl}/ai/service.json`,
    '',
    '# Public pages',
    ...PUBLIC_ROUTES.map(
      (route, index) => `${route.key}: ${MACHINE_PUBLIC_PAGES[index].url}`,
    ),
    '',
  ];

  return machineTextResponse(lines.join('\n'));
}
