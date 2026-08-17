import {
  PRODUCT_MACHINE_FACTS,
  machineJsonResponse,
} from '@/features/product-pages/machine';

export const dynamic = 'force-static';

export function GET() {
  return machineJsonResponse({
    product: PRODUCT_MACHINE_FACTS.name,
    provider: PRODUCT_MACHINE_FACTS.provider,
    integrations: PRODUCT_MACHINE_FACTS.integrations,
    statusDefinitions: {
      available: 'Available now.',
      customSetup: 'Available now after product-specific configuration.',
      planned: 'Not currently available. No launch date is promised.',
    },
    reviewedOn: PRODUCT_MACHINE_FACTS.reviewedOn,
  });
}

