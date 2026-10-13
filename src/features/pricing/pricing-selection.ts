import { AGENT_PRODUCTS, type AgentProduct } from "@/lib/public-facts";
import { PRICING_PRODUCTS, type PricingPlan, type PricingProduct } from "./pricing-data";

export type PricingSelection = {
  product: PricingProduct;
  plan: PricingPlan | null;
  agentProduct: AgentProduct;
};

/** Return a selection only when the product/plan pair is current and compatible. */
export function getPricingSelection(
  productId: string | null | undefined,
  planId: string | null | undefined,
): PricingSelection | null {
  if (!productId) return null;

  const product = PRICING_PRODUCTS.find((item) => item.id === productId);
  const agentProduct = AGENT_PRODUCTS.find((item) => item.id === productId);
  const plan = planId ? product?.plans.find((item) => item.id === planId) ?? null : null;

  if (!product || !agentProduct || (planId && !plan)) return null;

  return { product, plan, agentProduct };
}

export function getPricingSelectionFromSearch(search: string): PricingSelection | null {
  const params = new URLSearchParams(search);
  return getPricingSelection(params.get("pricingProduct"), params.get("pricingPlan"));
}

export function formatPricingSelection(selection: PricingSelection): string {
  if (!selection.plan) {
    return `შერჩეული პროდუქტი: ${selection.product.name} — ${selection.product.label}`;
  }

  return `შერჩეული პაკეტი: ${selection.product.name} — ${selection.plan.name} (${selection.plan.price} ${selection.plan.cadence})`;
}

export function appendPricingSelectionToMessage(message: string, selection: PricingSelection | null): string {
  const cleanMessage = message.trim();
  return selection ? `${cleanMessage}\n\n${formatPricingSelection(selection)}` : cleanMessage;
}
