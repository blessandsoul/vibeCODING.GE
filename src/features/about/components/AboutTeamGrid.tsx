"use client";

import Image from "next/image";
import { FadeIn } from "@/components/common/FadeIn";
import { cn } from "@/lib/utils";
import { useAlternatingTeam } from "../hooks/useAlternatingTeam";
import { getTeamMemberCopy } from "../data/team";
import { FounderBadge } from "./FounderBadge";

export function AboutTeamGrid({ locale }: { locale: string }) {
  const team = useAlternatingTeam();

  return (
    <div className="mx-auto mt-10 grid max-w-[42rem] gap-6 sm:grid-cols-2" data-ainow-team>
      {team.map((member, index) => {
        const copy = getTeamMemberCopy(member, locale);
        return (
          <FadeIn key={member.id} delay={index * 0.08}>
            <div id={member.id} className="dodo-glass-card flex h-full flex-col items-center p-7 text-center" data-team-member={member.name}>
              <div className={cn("rounded-full bg-linear-to-br p-[2.5px]", member.accent)}>
                <div className="h-24 w-24 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-900">
                  <Image src={member.image} alt={copy.name} width={96} height={96} className="h-full w-full object-cover" style={{ objectPosition: member.imagePosition }} />
                </div>
              </div>
              <h3 className="mt-4 font-headline text-xl font-semibold tracking-[-0.025em] text-slate-950 dark:text-white">{copy.name}</h3>
              <FounderBadge
                label={copy.coFounderLabel}
                role={copy.role}
                tone={member.badgeTone}
                className="mt-2"
              />
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{copy.bio}</p>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
