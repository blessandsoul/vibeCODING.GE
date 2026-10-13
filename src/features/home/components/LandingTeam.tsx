'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';

import { teamVisibility } from '@/features/about/data/team';
import './landing-team.css';

const COPY = {
  ka: {
    eyebrow: 'გუნდი',
    heading: 'ვინ მართავს aiNOW-ს',
    description: 'ბიზნესის მიმართულება, პროდუქტის საზღვრები და ხარისხის სტანდარტი ერთ პასუხისმგებელ ადამიანთან არის.',
    role: 'დამფუძნებელი · CEO',
    bio: 'განსაზღვრავს ბიზნესის მიზანს, პროდუქტის მიმართულებასა და ხარისხის სტანდარტს.',
  },
  en: {
    eyebrow: 'TEAM',
    heading: 'Who runs aiNOW',
    description: 'Business direction, product boundaries and the quality bar have one accountable owner.',
    role: 'Founder · CEO',
    bio: 'Sets the business goal, product direction and quality bar for every result.',
  },
  ru: {
    eyebrow: 'КОМАНДА',
    heading: 'Кто управляет aiNOW',
    description: 'За направление бизнеса, границы продукта и стандарт качества отвечает один человек.',
    role: 'Основатель · CEO',
    bio: 'Определяет цель бизнеса, направление продукта и стандарт качества каждого результата.',
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
        <div className="team-grid mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="pm-card" style={{ '--accent': '#2563eb', '--accent2': '#3b82f6' } as React.CSSProperties}>
            <div className="pm-photo-col">
              <div className="pm-photo-frame">
                <Image className="pm-photo" src="/team/andro-kasparov-v3.png" alt="ანდრო კასპაროვი" width={192} height={192} />
                <div className="pm-photo-glow" />
              </div>
            </div>
            <div className="pm-info-col">
              <div className="pm-eyebrow"><span className="pm-eyebrow-dot" />FOUNDER · CEO</div>
              <h3 className="pm-name">{locale === 'ka' ? 'ანდრო კასპაროვი' : 'Andro Kasparov'}</h3>
              <div className="pm-name-en">Andro Kasparov</div>
              <div className="pm-accent-line" />
              <p className="pm-role">{locale === 'ka' ? 'დამფუძნებელი · CEO' : 'Founder · CEO'}</p>
              <p className="pm-bio">{locale === 'ka' ? 'განსაზღვრავს ბიზნესის მიზანს, პროდუქტის მიმართულებასა და ხარისხის სტანდარტს.' : 'Sets the business goal, product direction and quality bar for every result.'}</p>
            </div>
          </article>

          {teamVisibility.tornikeEpitashvili ? (
            <article className="pm-card" style={{ '--accent': '#8b5cf6', '--accent2': '#6366f1' } as React.CSSProperties}>
              <div className="pm-photo-col">
                <div className="pm-photo-frame">
                  <Image className="pm-photo" src="/team/tornike-epitashvili-v2.jpg" alt="თორნიკე ეპიტაშვილი" width={192} height={192} />
                  <div className="pm-photo-glow" />
                </div>
              </div>
              <div className="pm-info-col">
                <div className="pm-eyebrow"><span className="pm-eyebrow-dot" />CO-FOUNDER · CTO</div>
                <h3 className="pm-name">{locale === 'ka' ? 'თორნიკე ეპიტაშვილი' : 'Tornike Epitashvili'}</h3>
                <div className="pm-name-en">Tornike Epitashvili</div>
                <div className="pm-accent-line" />
                <p className="pm-role">{locale === 'ka' ? 'თანადამფუძნებელი · CTO' : 'Co-founder · CTO'}</p>
                <p className="pm-bio">{locale === 'ka' ? 'ხელმძღვანელობს ტექნოლოგიურ არქიტექტურას, AI მოდელების ინტეგრაციასა და სისტემების მდგრადობას.' : 'Leads technological architecture, AI model integration and core infrastructure.'}</p>
              </div>
            </article>
          ) : null}

          <article className="pm-card" style={{ '--accent': '#ec4899', '--accent2': '#f43f5e' } as React.CSSProperties}>
            <div className="pm-photo-col">
              <div className="pm-photo-frame">
                <Image className="pm-photo" src="/team/nika-skhirtladze-v3.png" alt="ნიკა სხირტლაძე" width={192} height={192} />
                <div className="pm-photo-glow" />
              </div>
            </div>
            <div className="pm-info-col">
              <div className="pm-eyebrow"><span className="pm-eyebrow-dot" />LEADERSHIP · CCO</div>
              <h3 className="pm-name">{locale === 'ka' ? 'ნიკა სხირტლაძე' : 'Nika Skhirtladze'}</h3>
              <div className="pm-name-en">Nika Skhirtladze</div>
              <div className="pm-accent-line" />
              <p className="pm-role">CCO</p>
              <p className="pm-bio">{locale === 'ka' ? 'მართავს კომერციულ ოპერაციებს, სტრატეგიულ პარტნიორობებსა და კლიენტებთან ურთიერთობას.' : 'Leads commercial operations, strategic partnerships and client relationships.'}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
