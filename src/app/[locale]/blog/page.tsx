import type { Metadata } from "next";
import { PRODUCT_OG_IMAGE, PRODUCT_OG_PATH } from "@/lib/product-og";
import { ArrowRight, BookOpen, Check } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { AiNowDivider } from "@/features/home/components/ainow/AiNowDivider";
import { AiNowSectionFrame } from "@/features/home/components/ainow/AiNowSectionFrame";
import { getAiNowHomeCopy } from "@/features/home/components/ainow/AiNowHomeCopy";
import { BlogList } from "@/features/blog/components/BlogList";
import { Pagination } from "@/features/blog/components/Pagination";
import { getAllTags, getPosts } from "@/features/blog/lib/api";
import { Link } from "@/i18n/navigation";
import { buildAlternates, localeUrl } from "@/i18n/seo-locales";
import { notFound } from "next/navigation";
import { APP_NAME } from "@/lib/constants/app.constants";

const PAGE_SIZE = 24;

type SearchParams = Promise<{ page?: string }>;
type CopyLocale = "ka" | "en" | "ru" | "de" | "tr" | "fa" | "zh";

const EDITORIAL_COPY: Record<CopyLocale, { eyebrow: string; description: string; note: string; bullets: string[]; cta: string; latest: string; latestNote: string }> = {
  ka: {
    eyebrow: "aiNOW / ბლოგი",
    description: "მოკლე და კონკრეტული სტატიები AI გადაწყვეტილებებზე: კლიენტებთან კომუნიკაცია, ზარები, კონტენტი, საიტები და ყოველდღიური პროცესები.",
    note: "აქ საუბარი იწყება ბიზნესის რეალური კითხვით და მთავრდება გასაგები შემდეგი ნაბიჯით.",
    bullets: ["სიტუაცია ბიზნესის ენით", "კონკრეტული გამოსავალი", "შემდეგი ნაბიჯი ზედმეტი ჟარგონის გარეშე"],
    cta: "საკუთარი ამოცანის განხილვა",
    latest: "წასაკითხად ახლავე",
    latestNote: "ახალი და პრაქტიკული სტატიები",
  },
  en: {
    eyebrow: "aiNOW / journal",
    description: "Clear articles about AI for customer communication, calls, content, websites and everyday business operations.",
    note: "Every story starts with a business question and ends with a practical next step.",
    bullets: ["A real business situation", "A concrete way forward", "Plain language without jargon"],
    cta: "Discuss your task",
    latest: "Read now",
    latestNote: "New practical articles",
  },
  ru: {
    eyebrow: "aiNOW / блог",
    description: "Короткие и понятные материалы про AI для общения с клиентами, звонков, контента, сайтов и ежедневных процессов.",
    note: "Каждый материал начинается с вопроса бизнеса и заканчивается понятным следующим шагом.",
    bullets: ["Реальная ситуация", "Конкретное решение", "Без лишнего жаргона"],
    cta: "Обсудить задачу",
    latest: "Читайте сейчас",
    latestNote: "Новые практические статьи",
  },
  de: {
    eyebrow: "aiNOW / Blog",
    description: "Verständliche Artikel über KI für Kundenkommunikation, Telefonate, Inhalte, Websites und Geschäftsabläufe.",
    note: "Jeder Artikel greift eine konkrete Geschäftsfrage auf und zeigt einen praktischen nächsten Schritt.",
    bullets: ["Eine konkrete Geschäftssituation", "Ein nachvollziehbarer Lösungsweg", "Klare Sprache ohne Fachjargon"],
    cta: "Ihre Aufgabe besprechen", latest: "Jetzt lesen", latestNote: "Neue Artikel aus der Praxis",
  },
  tr: {
    eyebrow: "aiNOW / Blog",
    description: "Müşteri iletişimi, aramalar, içerik, web siteleri ve günlük iş süreçlerinde yapay zekanın kullanımını anlatan yazılar.",
    note: "Her yazı işletmelerin somut bir sorusunu ele alır ve uygulanabilir bir sonraki adımı açıklar.",
    bullets: ["Gerçek bir iş durumu", "Somut bir çözüm yolu", "Gereksiz teknik terimler olmadan"],
    cta: "İhtiyacınızı konuşalım", latest: "Okumaya başlayın", latestNote: "Yeni ve pratik yazılar",
  },
  fa: {
    eyebrow: "aiNOW / وبلاگ",
    description: "مقاله‌هایی درباره کاربرد هوش مصنوعی در ارتباط با مشتری، تماس‌ها، تولید محتوا، وب‌سایت و کارهای روزمره کسب‌وکار.",
    note: "هر مقاله به یک پرسش مشخص کسب‌وکار می‌پردازد و گام بعدی را به زبان روشن توضیح می‌دهد.",
    bullets: ["یک موقعیت واقعی در کسب‌وکار", "راه‌حلی مشخص", "زبان روشن و بدون اصطلاحات اضافی"],
    cta: "درباره نیازتان صحبت کنیم", latest: "برای مطالعه", latestNote: "مقاله‌های کاربردی تازه",
  },
  zh: {
    eyebrow: "aiNOW / 博客",
    description: "介绍人工智能在客户沟通、电话、内容制作、网站及日常业务流程中的实际应用。",
    note: "每篇文章围绕一个具体的业务问题，说明可以采取的下一步。",
    bullets: ["具体的业务场景", "清晰的解决思路", "易于理解的表达"],
    cta: "讨论您的需求", latest: "开始阅读", latestNote: "最新实用文章",
  },
};

function parsePage(raw: string | undefined): number {
  const page = Number.parseInt(raw ?? "1", 10);
  return Number.isNaN(page) || page < 1 ? 1 : page;
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: SearchParams;
}): Promise<Metadata> {
  const { locale } = await params;
  const { page: rawPage } = await searchParams;
  const page = parsePage(rawPage);
  const blogT = await getTranslations({ locale, namespace: "blog" });
  const homeCopy = getAiNowHomeCopy(locale);
  const localizedExistingBlogLabel = blogT("title");
  const existingPageSuffix = page > 1 ? `, ${page}` : "";
  const baseTitle = `${localizedExistingBlogLabel} | ${APP_NAME}${existingPageSuffix}`;
  const description = homeCopy.hero.description;

  const path = "/blog";
  const base = localeUrl(locale, path);
  const suffix = page > 1 ? `?page=${page}` : "";

  return {
    title: { absolute: baseTitle },
    description,
    alternates: {
      canonical: `${base}${suffix}`,
      ...(page === 1
        ? {
            languages: buildAlternates(path, locale).languages,
          }
        : {}),
    },
    openGraph: {
      title: baseTitle,
      description,
      images: [PRODUCT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description,
      images: [PRODUCT_OG_PATH],
    },
  };
}

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: SearchParams;
}) {
  const { locale } = await params;
  const { page: rawPage } = await searchParams;
  const t = await getTranslations({ locale, namespace: "blog" });
  const copy = EDITORIAL_COPY[locale as CopyLocale] ?? EDITORIAL_COPY.ka;
  const introDescription = getAiNowHomeCopy(locale).hero.description;
  const introEyebrow = copy.eyebrow.replace(/^aiNOW/u, APP_NAME);

  let posts = await getPosts(locale);
  const isFallback = posts.length === 0 && locale !== "ka";
  if (isFallback) posts = await getPosts("ka");

  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const page = parsePage(rawPage);
  if (page > totalPages) notFound();
  const pagePosts = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const topTags = (await getAllTags(isFallback ? "ka" : locale)).slice(0, 24);

  return (
    <main>
      <AiNowSectionFrame
        id="blog-intro"
        className="ainow-blueprint-bg"
        hasLaser={false}
        showTicks={false}
        containerClassName="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      >
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.75fr)] lg:gap-14">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="size-2 rounded-full bg-[#2563eb] shadow-[0_0_0_5px_rgba(37,99,235,0.1)]" />
              <p className="eyebrow text-[11px] font-bold uppercase tracking-[0.18em] text-[#2563eb]">{introEyebrow}</p>
            </div>
            <h1 className="font-headline text-balance text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
              {t("title")}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300">
              {introDescription}
            </p>
          </div>

          <aside className="dodo-glass-card p-5 sm:p-6" aria-label={copy.note}>
            <div className="relative z-10">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">aiNOW notes</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-900 dark:text-white">{copy.note}</p>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-blue-200/70 bg-blue-50/80 text-[#2563eb] shadow-sm dark:border-blue-400/20 dark:bg-blue-500/10">
                  <BookOpen className="size-5" aria-hidden="true" />
                </span>
              </div>
              <ul className="space-y-2.5 border-t border-slate-200/80 pt-4 text-sm leading-5 text-slate-600 dark:border-white/10 dark:text-slate-300">
                {copy.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/#cta"
                className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#1d4ed8] transition-colors hover:text-[#1e40af] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 dark:text-blue-300 dark:hover:text-blue-200"
              >
                {copy.cta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </AiNowSectionFrame>

      <AiNowDivider />

      <AiNowSectionFrame
        id="blog-latest"
        className="ainow-blueprint-bg"
        laserDelay={2}
        laserSpeed={14}
        containerClassName="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      >
        <section aria-labelledby="blog-latest-title">
          <div className="mb-8 flex flex-col gap-4 border-b border-slate-200/90 pb-6 sm:flex-row sm:items-end sm:justify-between dark:border-white/10">
            <div>
              <p className="eyebrow text-[10px] font-bold uppercase tracking-[0.16em] text-[#ec4899]">{copy.latestNote}</p>
              <h2 id="blog-latest-title" className="mt-2 font-headline text-2xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-3xl dark:text-white">
                {copy.latest}
              </h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {posts.length} {locale === "ka" ? "სტატია" : locale === "ru" ? "статей" : "articles"}
            </p>
          </div>

          {isFallback && (
            <div className="dodo-glass-card mb-8 border-amber-200/80 bg-amber-50/65 p-4 text-sm leading-6 text-amber-950 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-100">
              <p className="relative z-10">{t("fallbackNotice")}</p>
            </div>
          )}

          <BlogList posts={pagePosts} topTags={topTags} />
        </section>

        <Pagination
          page={page}
          totalPages={totalPages}
          prevLabel={t("prevPage")}
          nextLabel={t("nextPage")}
        />
      </AiNowSectionFrame>
    </main>
  );
}
