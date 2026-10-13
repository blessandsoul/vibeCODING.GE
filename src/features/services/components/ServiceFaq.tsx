import { getLocale, getTranslations } from 'next-intl/server';
import { FaqPageSchema } from '@/components/seo/FaqPageSchema';
import { AiNowDisclosure } from '@/features/home/components/ainow/AiNowDisclosure';

const FAQ_COUNT = 4;

type Props = {
  namespace?: string;
  title?: string;
  items?: readonly { q: string; a: string }[];
};

// Visible FAQ accordion + FAQPage JSON-LD, copy-driven by messages `<namespace>.faq.*`.
export async function ServiceFaq({ namespace, title, items: suppliedItems }: Props) {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: namespace ?? 'servicesAutomation' });

  const items = [...(suppliedItems ?? Array.from({ length: FAQ_COUNT }, (_, i) => ({
    q: t(`faq.q${i + 1}`),
    a: t(`faq.a${i + 1}`),
  })))]

  return (
    <section className="relative px-6 py-12 md:py-16">
      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
            {title ?? t('faq.title')}
          </h2>
          <div className="space-y-3">
            {items.map((item) => (
              <AiNowDisclosure
                key={item.q}
                title={item.q}
                className="dodo-glass-card px-5 transition-[border-color,box-shadow] hover:border-blue-500/40 dark:hover:border-blue-400/30 sm:px-6"
              >
                <p className="pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.a}</p>
              </AiNowDisclosure>
            ))}
          </div>
        </div>
      </div>
      <FaqPageSchema items={items} />
    </section>
  );
}
