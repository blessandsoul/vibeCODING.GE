import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import './landing-cases.css';

/* =========================================================================
   LandingCases, "#cases" 5 real NDA cases.
   Content is verbatim-derived from the live /projects page (anonymized NDA
   list): no invented numbers, real mechanics + real tech stack only.
   Carries the /projects internal link (moved here from the old hero).
   ========================================================================= */

const TECH: string[][] = [
  ['Instagram', 'WhatsApp', 'Meta Ads'],
  ['WhatsApp', 'Google Calendar', 'CRM'],
  ['Telegram', 'Instagram', 'Make'],
  ['WhatsApp', 'Bitrix24', 'RAG'],
  ['WhatsApp', 'Bitrix24', 'NLU'],
];

export async function LandingCases() {
  const t = await getTranslations('home.cases');
  const rows = [1, 2, 3, 4, 5].map((n, i) => ({
    ind: t(`c${n}Ind`),
    title: t(`c${n}Title`),
    desc: t(`c${n}Desc`),
    tech: TECH[i],
  }));

  return (
    <section id="cases" className="nda-cases py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="nda-head">
          <div>
            <p className="nda-eyebrow">{t('eyebrow')}</p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-[1.05] tracking-tight text-neutral-900">
              {t('heading')}
            </h2>
          </div>
          <p className="nda-note">
            {t('note')}{' '}
            <Link href="/projects" className="nda-link">
              {t('noteLink')}
            </Link>
          </p>
        </div>

        <div className="nda-list">
          {rows.map((r) => (
            <div className="nda-row" key={r.ind}>
              <span className="nda-ind">{r.ind}</span>
              <div className="nda-body">
                <b>{r.title}</b>
                <p>{r.desc}</p>
              </div>
              <span className="nda-tech">
                {r.tech.map((x) => (
                  <i key={x}>{x}</i>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
