import type { CaseCategory } from "../types/project.types";

/**
 * Per-industry visual identity for anonymous NDA cases: a bundled Solar icon
 * (see components/common/Ico + solar-icons.ts) and an accent color used for the
 * card preview tint and the icon. Keeps the 12 cases visually distinct instead
 * of one repeated lock. Pure data, so both the client card and the server detail
 * page can import it.
 */
export const CASE_CATEGORY: Record<CaseCategory, { icon: string; accent: string }> = {
  ecommerce: { icon: "solar:t-shirt-bold-duotone", accent: "#e0447a" },
  cafe: { icon: "solar:cup-hot-bold-duotone", accent: "#c2571a" },
  dental: { icon: "solar:stethoscope-bold-duotone", accent: "#0ea5b7" },
  beauty: { icon: "solar:scissors-bold-duotone", accent: "#d6408f" },
  realestate: { icon: "solar:home-smile-bold-duotone", accent: "#7c3aed" },
  logistics: { icon: "solar:delivery-bold-duotone", accent: "#2563eb" },
  fitness: { icon: "solar:dumbbell-bold-duotone", accent: "#dc2626" },
  legal: { icon: "solar:scale-bold-duotone", accent: "#4f46e5" },
  auto: { icon: "solar:wheel-bold-duotone", accent: "#0891b2" },
  furniture: { icon: "solar:sofa-bold-duotone", accent: "#a16207" },
  hr: { icon: "solar:users-group-rounded-bold-duotone", accent: "#0d9488" },
  cleaning: { icon: "solar:broom-bold-duotone", accent: "#16a34a" },
};

export const FALLBACK_CATEGORY = { icon: "solar:lock-keyhole-bold-duotone", accent: "#7c3aed" };

export function categoryVisual(category: CaseCategory | undefined) {
  return (category && CASE_CATEGORY[category]) || FALLBACK_CATEGORY;
}
