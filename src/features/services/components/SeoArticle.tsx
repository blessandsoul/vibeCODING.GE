import { getLocale, getTranslations } from 'next-intl/server';

type Section = { h: string; p: string };
export type Article = { sections: Section[]; aeoH?: string; aeoBody?: string };

type Props = {
  // service pages drive content from messages `<namespace>.article`
  namespace?: string;
  // landings (hardcoded CONTENT) pass the article object directly
  data?: Article;
  contentLocale?: "ka" | "en" | "ru";
};

// Long-form SEO content section + a highlighted AEO answer block (the passage AI
// answers can quote). Same design language as ServiceFaq. Renders nothing when the
// locale has no `article` (only ka is authored today), so non-ka pages stay clean.
export async function SeoArticle({ namespace, data, contentLocale }: Props) {
  let a: Article | undefined = data;
  if (!a && namespace) {
    const t = await getTranslations({ locale: await getLocale(), namespace });
    try {
      const raw = t.has('article') ? t.raw('article') : undefined;
      if (raw && typeof raw === 'object') a = raw as Article;
    } catch {
      a = undefined;
    }
  }
  if (!a || !Array.isArray(a.sections) || a.sections.length === 0) return null;
  const contentLanguageProps = contentLocale ? { lang: contentLocale, dir: "ltr" as const } : {};

  return (
    <section {...contentLanguageProps} className="relative px-6 py-12 md:py-16">
      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-3xl space-y-8">
          {a.sections.map((s) => (
            <article key={s.h}>
              <h2 className="mb-3 font-display text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-3xl">
                {s.h}
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">{s.p}</p>
            </article>
          ))}
          {a.aeoH && a.aeoBody && (
            <div className="dodo-glass-box p-6 md:p-8">
              <h2 className="mb-3 font-display text-xl font-bold tracking-tight text-slate-950 dark:text-white md:text-2xl">
                {a.aeoH}
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">{a.aeoBody}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
