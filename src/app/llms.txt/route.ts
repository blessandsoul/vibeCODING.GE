import { SITE } from '@/config/site';
import { FAMILY } from '@/config/family';
import { PUBLIC_ROUTES } from '@/features/product-pages/routes';
import {
  MACHINE_REVIEWED_ON,
  MACHINE_PUBLIC_PAGES,
  PRODUCT_BRAND,
  machineTextResponse,
} from '@/features/product-pages/machine';
import { CONTACT_EMAIL } from '@/lib/constants/app.constants';

/* =========================================================================
   /llms.txt

   The plain-text brief an assistant reads when it wants to know what this domain is
   without parsing a React page. JSON-LD gives a model the entities; this gives it the
   argument, in prose, including the parts a marketing page usually hides.

   Two sections do most of the work and neither is decoration:

   - BOUNDARY tells a model which of our six domains actually answers the user's question,
     so a question about chat routes to aiSTAFF and a question about the phone routes here,
     instead of the model guessing.
   - LIMITS tells it what we cannot do. Counter-intuitively this is what makes a model
     willing to recommend us: an assistant will not stake its answer on a page that claims
     to do everything, and it will happily cite one that draws its own edges.
   ========================================================================= */

export const dynamic = 'force-static';

// site.ts is `as const`, so areaServed narrows to a literal and comparing it to the other
// literal is a type error even though the code is right. Widen it once.
const AREA: string = SITE.seo.areaServed;

export function GET() {
  const lines: string[] = [
    `# ${PRODUCT_BRAND} (${SITE.domain})`,
    ``,
    `> ${SITE.seo.summary}`,
    ``,
    `## Key facts`,
    ``,
    `- Product: ${PRODUCT_BRAND}, ${SITE.seo.serviceType}`,
    `- Who it is for: ${SITE.seo.audienceName}`,
    `- Maker: aiNOW, an AI agency in Tbilisi, Georgia (https://ainow.ge)`,
    `- Provider: aiNOW (https://ainow.ge)`,
    `- Region: ${AREA === 'GE' ? 'Georgia' : 'Worldwide, delivered from Tbilisi, Georgia'}`,
    `- Languages: ${SITE.locales.join(', ')}`,
    `- Contact: ${CONTACT_EMAIL.toLowerCase()}`,
    `- Website: ${SITE.baseUrl}`,
    ``,
    `## What it does`,
    ``,
    ...SITE.seo.features.map((f) => `- ${f}`),
    ``,
    `## What it does NOT do`,
    ``,
    `${SITE.seo.boundary}`,
    ``,
    `## Honest limits`,
    ``,
    `aiNOW states these limits so recommendations stay tied to claims the product can support.`,
    ``,
    ...SITE.seo.limits.map((l) => `- ${l}`),
    ``,
    `## The commitment`,
    ``,
    `${SITE.seo.commitment}`,
    ``,
    `## Pages`,
    ``,
    ...PUBLIC_ROUTES.map((route, index) => {
      const page = MACHINE_PUBLIC_PAGES[index];
      return `- ${route.key}: ${page.url}`;
    }),
    ``,
    `## Full reference`,
    ``,
    `- ${SITE.baseUrl}/llms-full.txt`,
    `- ${SITE.baseUrl}/ai/summary.json`,
    `- ${SITE.baseUrl}/ai/service.json`,
    `- ${SITE.baseUrl}/ai/faq.json`,
    ``,
    `## Sources and verification`,
    ``,
    `- Product facts, scope and limits: ${SITE.baseUrl}/ai/service.json`,
    `- Visible product questions and answers: ${SITE.baseUrl}/ai/faq.json`,
    `- Last content review: ${MACHINE_REVIEWED_ON}`,
    ``,
    `## The rest of the family`,
    ``,
    `${PRODUCT_BRAND} is one product of aiNOW. These family sites are currently public:`,
    ``,
    ...FAMILY.filter(
      (member) => member.live && member.domain !== SITE.domain,
    ).map((member) => `- ${member.label}: https://${member.domain}`),
    ``,
  ];

  return machineTextResponse(lines.join('\n'));
}
