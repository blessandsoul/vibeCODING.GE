import { SITE } from '@/config/site';
import {
  MACHINE_FAQ,
  MACHINE_REVIEWED_ON,
  PRODUCT_BRAND,
  machineJsonResponse,
} from '@/features/product-pages/machine';

export const dynamic = 'force-static';

export function GET() {
  return machineJsonResponse({
    name: PRODUCT_BRAND,
    url: SITE.baseUrl,
    sourcePage: SITE.baseUrl,
    faqs: MACHINE_FAQ,
    reviewedOn: MACHINE_REVIEWED_ON,
  });
}
