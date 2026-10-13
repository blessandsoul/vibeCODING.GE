import { FaqPageSchema } from "@/components/seo/FaqPageSchema";
import { AiNowDisclosure } from "@/features/home/components/ainow/AiNowDisclosure";

type FaqItem = { q: string; a: string };

type Props = {
  items: FaqItem[];
  title: string;
  contentLocale: "ka" | "en" | "ru";
};

/** Route-owned neutral FAQ renderer so the reviews page never falls back to a target legacy message copy. */
export function NeutralReviewsFaq({ items, title, contentLocale }: Props) {
  return (
    <section lang={contentLocale} dir="ltr" className="relative px-6 py-12 md:py-16">
      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
            {title}
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
