import { useLocale } from "next-intl";
import { AnimatedCheckIcon } from "./AiNowAnimatedIcons";
import { AiNowSectionFrame } from "./AiNowSectionFrame";
import { getAiNowHomeCopy } from "./AiNowHomeCopy";

/*
 * DESIGN PLAN
 * Design Read: a late-funnel aiNOW home-page section for Georgian business owners,
 * using the existing OBSIDIAN blueprint language to help people self-qualify.
 * Dials: variance 5, motion 2, density 4. The split is calm and practical,
 * with one deliberate decision panel and a single next action.
 * Variation: deep dark theme, asymmetric editorial split, one decision panel,
 * checklist rhythm, and no new automatic motion.
 */

export function AiNowClientFit() {
  const locale = useLocale();
  const copy = getAiNowHomeCopy(locale);

  return (
    <AiNowSectionFrame
      id="fit"
      className="ainow-blueprint-bg"
      hasLaser={false}
      showTicks={true}
      containerClassName="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:gap-14">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {copy.clientFit.title}
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {copy.clientFit.description}
          </p>

          <ul className="mt-8 space-y-4" aria-label={copy.clientFit.ariaLabel}>
            {copy.clientFit.signals.map((signal) => (
              <li key={signal} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <AnimatedCheckIcon size={16} className="size-4 text-primary" />
                </span>
                <span className="text-pretty text-sm leading-relaxed text-foreground sm:text-base">
                  {signal}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="dodo-glass-card p-6 sm:p-8">
          <div className="relative z-10">
            <h3 className="text-balance text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {copy.clientFit.notForTitle}
            </h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
              {copy.clientFit.notForDescription}
            </p>

            <div className="mt-6 border-t border-border/60 pt-6">
              <p className="text-pretty text-sm leading-relaxed text-foreground">
                {copy.clientFit.uncertain}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </AiNowSectionFrame>
  );
}
