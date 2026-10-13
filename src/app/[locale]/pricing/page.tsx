import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PricingComparison } from "@/features/pricing/components/PricingComparison";
import { getPricingPageCopy } from "@/features/pricing/pricing-copy";
import { AiNowDivider } from "@/features/home/components/ainow/AiNowDivider";
import { AiNowSectionFrame } from "@/features/home/components/ainow/AiNowSectionFrame";

/**
 * DESIGN PLAN
 * Design read: trust-first pricing room for a Georgian business owner deciding
 * between a recurring product and a one-time implementation.
 * Dials: DESIGN_VARIANCE 5 for an offset decision desk, MOTION_INTENSITY 3 for
 * direct action feedback only, VISUAL_DENSITY 5 to keep the comparison useful.
 * Theme: aiNOW OBSIDIAN blueprint with restrained liquid-glass surfaces.
 * Layout: a clear price rule beside the page promise, then one comparison matrix
 * that changes with the selected product, then a single next step.
 * Signature components: product selector rail, contiguous comparison matrix,
 * transparent cost note, and a quiet closing decision panel.
 */
type PricingPageProps = { params: Promise<{ locale: string }> };

export default async function PricingPage({ params }: PricingPageProps) {
  const { locale } = await params;
  const copy = getPricingPageCopy(locale);
  const localePrefix = ["en", "ru", "de", "tr", "fa", "zh"].includes(locale) ? `/${locale}` : "/";

  return (
    <main>
      <AiNowSectionFrame
        id="pricing-intro"
        className="ainow-blueprint-bg"
        hasLaser={false}
        showTicks={false}
        containerClassName="px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10"
      >
        <section className="max-w-3xl">
          <div className="max-w-3xl">
            <h1 className="font-headline text-balance text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
              {copy.title}
            </h1>
            <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-slate-600 dark:text-slate-300">
              {copy.description}
            </p>
          </div>
        </section>
      </AiNowSectionFrame>

      <AiNowDivider />

      <AiNowSectionFrame
        id="pricing-comparison"
        className="ainow-blueprint-bg"
        laserDelay={1.4}
        laserSpeed={13}
        containerClassName="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10"
      >
        <PricingComparison />
      </AiNowSectionFrame>

      <AiNowDivider />

      <AiNowSectionFrame
        id="pricing-next-step"
        className="ainow-blueprint-bg"
        hasLaser={false}
        showTicks={false}
        showBottomDiamonds={false}
        containerClassName="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      >
        <section className="dodo-glass-card overflow-hidden p-6 sm:p-9" aria-labelledby="pricing-next-step-title">
          <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="max-w-2xl">
              <h2 id="pricing-next-step-title" className="font-headline text-balance text-2xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-3xl dark:text-white">
                {copy.handoffTitle}
              </h2>
              <p className="mt-3 text-pretty text-base leading-7 text-slate-600 dark:text-slate-300">
                {copy.handoffText}
              </p>
            </div>
            <Link
              href={`${localePrefix}#cta`}
              className="ainow-btn-primary min-h-11 justify-center px-5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0a0b0e]"
            >
              {copy.handoffCta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </AiNowSectionFrame>
    </main>
  );
}
