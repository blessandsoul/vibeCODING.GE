import { SITE } from '@/config/site';
import { PUBLIC_ROUTES } from '@/features/product-pages/routes';
import {
  MACHINE_FAQ,
  MACHINE_PUBLIC_PAGES,
  MACHINE_REVIEWED_ON,
  PRODUCT_BRAND,
  machineTextResponse,
} from '@/features/product-pages/machine';

export const dynamic = 'force-static';

export function GET() {
  const lines: string[] = [
    `# ${PRODUCT_BRAND}, full product reference`,
    '',
    `Last reviewed: ${MACHINE_REVIEWED_ON}`,
    `Canonical website: ${SITE.baseUrl}`,
    '',
    '## Definition',
    '',
    SITE.seo.summary,
    '',
    '## Intended customer',
    '',
    SITE.seo.audienceName,
    '',
    `## What ${PRODUCT_BRAND} does`,
    '',
    ...SITE.seo.features.map((feature) => `- ${feature}`),
    '',
    '## Product boundary',
    '',
    SITE.seo.boundary,
    '',
    '## Known limits',
    '',
    ...SITE.seo.limits.map((limit) => `- ${limit}`),
    '',
    '## Commitment',
    '',
    SITE.seo.commitment,
    '',
    '## Public pages',
    '',
    ...PUBLIC_ROUTES.map((route, index) => {
      const page = MACHINE_PUBLIC_PAGES[index];
      return `- ${route.key}: ${page.url}`;
    }),
    '',
    '## Frequently asked questions',
    '',
    ...MACHINE_FAQ.flatMap(({ question, answer }) => [
      `### ${question}`,
      '',
      answer,
      '',
    ]),
    '## Verification',
    '',
    `- Provider: aiNOW, https://ainow.ge`,
    `- Structured summary: ${SITE.baseUrl}/ai/summary.json`,
    `- Structured service facts: ${SITE.baseUrl}/ai/service.json`,
    `- Structured FAQ: ${SITE.baseUrl}/ai/faq.json`,
    `- Concise index: ${SITE.baseUrl}/llms.txt`,
    '',
  ];

  return machineTextResponse(lines.join('\n'));
}
