'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';

import { getTeamMemberCopy, publicTeam } from '@/features/about/data/team';
import { FounderBadge } from '@/features/about/components/FounderBadge';
import './landing-team.css';

const COPY = {
  ka: {
    eyebrow: 'გუნდი',
    heading: 'ვინ მართავს aiNOW-ს',
    description: 'ბიზნესის მიმართულება, პროდუქტის საზღვრები და ხარისხის სტანდარტი ერთ პასუხისმგებელ ადამიანთან არის.',
  },
  en: {
    eyebrow: 'TEAM',
    heading: 'Who runs aiNOW',
    description: 'Business direction, product boundaries and the quality bar have one accountable owner.',
  },
  ru: {
    eyebrow: 'КОМАНДА',
    heading: 'Кто управляет aiNOW',
    description: 'За направление бизнеса, границы продукта и стандарт качества отвечает один человек.',
  },
} as const;

export function LandingTeam() {
  const locale = useLocale();
  const copy = COPY[locale as keyof typeof COPY] ?? COPY.en;
  return (
    <section id="team" className="border-t border-border/60 px-6 py-20 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 text-center">
          <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.3em] text-[#7c3aed]">{copy.eyebrow}</p>
          <h2 className="font-display text-[clamp(1.5rem,3.4vw,3rem)] font-extrabold leading-[1] tracking-tight text-neutral-900">{copy.heading}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#525252] md:text-lg">{copy.description}</p>
        </div>
        <div className="team-grid mx-auto max-w-[42rem] grid grid-cols-1 gap-6 sm:grid-cols-2">
          {publicTeam.map((member) => {
            const memberCopy = getTeamMemberCopy(member, locale);
            const amethyst = member.badgeTone === 'amethyst';
            return (
              <article key={member.id} className="pm-card" data-team-member={member.name} style={{ '--accent': amethyst ? '#857acc' : '#fa3d7c', '--accent2': amethyst ? '#a89ae6' : '#f9254a' } as React.CSSProperties}>
                <div className="pm-photo-col">
                  <div className="pm-photo-frame">
                    <Image className="pm-photo" src={member.image} alt={memberCopy.name} width={192} height={192} style={{ objectPosition: member.imagePosition }} />
                    <div className="pm-photo-glow" />
                  </div>
                </div>
                <div className="pm-info-col">
                  <div className="pm-eyebrow"><span className="pm-eyebrow-dot" /><FounderBadge label={memberCopy.coFounderLabel} role={memberCopy.role} tone={member.badgeTone} compact /></div>
                  <h3 className="pm-name">{memberCopy.name}</h3>
                  <div className="pm-name-en">{member.name}</div>
                  <div className="pm-accent-line" />
                  <p className="pm-role">{memberCopy.role}</p>
                  <p className="pm-bio">{memberCopy.bio}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
