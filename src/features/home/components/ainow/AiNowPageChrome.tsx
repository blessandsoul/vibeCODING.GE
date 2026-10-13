import type { ReactNode } from "react";

import { AiNowDivider } from "./AiNowDivider";
import { AiNowFooter } from "./AiNowFooter";
import { AiNowNav } from "./AiNowNav";

/**
 * DESIGN PLAN
 * Theme: aiNOW OBSIDIAN light blueprint system with restrained liquid glass.
 * Blog: editorial hierarchy, one featured story, compact metadata and readable cards.
 * Pricing: decision surface, six current products, direct paths to product pricing.
 * Motion: short feedback only, no scroll theater.
 * Density: medium, with one strong focal panel per page.
 */
export function AiNowPageChrome({ children }: { children: ReactNode }) {
  return (
    <div
      id="top"
      className="relative min-h-dvh w-full overflow-x-clip bg-[#fcfcfb] text-slate-900 transition-colors duration-200 dark:bg-[#0a0b0e] dark:text-slate-100"
    >
      <AiNowNav />
      {children}
      <AiNowDivider />
      <AiNowFooter />
    </div>
  );
}
