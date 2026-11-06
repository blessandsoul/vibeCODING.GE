"use client";

import { useLocale } from "next-intl";
import { useAlternatingTeam } from "@/features/about/hooks/useAlternatingTeam";
import { getTeamMemberCopy } from "@/features/about/data/team";
import { FounderBadge } from "@/features/about/components/FounderBadge";
import { AnimatedFeatherIcon } from "./AiNowAnimatedIcons";
import { AiNowSectionFrame } from "./AiNowSectionFrame";
import { getAiNowHomeCopy } from "./AiNowHomeCopy";
import { AiNowImage } from "./AiNowImage";

export function AiNowTeamLetter() {
  const locale = useLocale();
  const copy = getAiNowHomeCopy(locale);
  const team = useAlternatingTeam();

  return (
    <AiNowSectionFrame
      id="letter"
      className="ainow-blueprint-bg"
      laserDelay={4}
      laserSpeed={12}
      showTicks={true}
      containerClassName="px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="relative w-full">

        {/* Editorial Letter Card (AiNow Signature Style) */}
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-lg border border-black/[0.12] dark:border-white/10 bg-[#fdfdfc] dark:bg-[#111318] p-6 sm:p-12 shadow-sm">
          {/* Top 3-stripe aiNOW brand hairline */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ec4899] via-[#2563eb] to-[#10b981] opacity-75" />

          <div className="pointer-events-none absolute -top-4 -right-4 select-none opacity-5 dark:opacity-[0.03]">
            <div className="flex size-40 items-center justify-center rounded-full border border-dashed border-slate-400">
              <AnimatedFeatherIcon size={80} className="size-20 text-slate-400" />
            </div>
          </div>

          <div className="mb-7 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="flex size-7 items-center justify-center rounded-md bg-slate-900/[0.04] text-slate-600 dark:bg-white/[0.07] dark:text-slate-300">
                <AnimatedFeatherIcon size={14} className="size-3.5" />
              </span>
              <span>{copy.team.eyebrow}</span>
            </div>
            <h2 className="text-balance text-2xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {copy.team.title}
            </h2>
          </div>

          <div className="space-y-4 text-pretty text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            {copy.team.paragraphs.map((paragraph) => {
              const [before, ...after] = paragraph.split("aiNOW");
              return (
                <p key={paragraph}>
                  {after.length > 0 ? <>{before}<strong>aiNOW</strong>{after.join("aiNOW")}</> : paragraph}
                </p>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-black/[0.08] dark:border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-5 sm:gap-6" data-ainow-team>
              {team.map((member) => {
                const memberCopy = getTeamMemberCopy(member, locale);
                const portraitRing = member.badgeTone === "amethyst"
                  ? "ring-[#857acc]/45 dark:ring-[#a89ae6]/55"
                  : "ring-[#fa65ca]/45 dark:ring-[#fa3d7c]/55";
                return (
                  <div key={member.id} className="flex items-center gap-3" data-team-member={member.name}>
                    <div className={`relative size-12 rounded-full overflow-hidden ring-2 shadow-sm shrink-0 bg-slate-100 dark:bg-slate-800 ${portraitRing}`}>
                      <AiNowImage
                        src={member.image}
                        alt={`${memberCopy.name} · ${memberCopy.role}`}
                        width={48}
                        height={48}
                        frameClassName="block size-full"
                        className="size-full object-cover"
                        style={{ objectPosition: member.imagePosition }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-sm text-slate-900 dark:text-slate-100 leading-tight">{memberCopy.name}</div>
                      <FounderBadge
                        label={memberCopy.coFounderLabel}
                        role={memberCopy.role}
                        tone={member.badgeTone}
                        compact
                        className="mt-1 self-start"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col lg:items-end text-xs font-mono text-slate-400 dark:text-slate-500 shrink-0">
              <span className="text-slate-600 dark:text-slate-400 font-medium">{copy.team.location}</span>
              <span>aiNOW · {copy.team.year}</span>
            </div>
          </div>
        </div>
      </div>
    </AiNowSectionFrame>
  );
}
