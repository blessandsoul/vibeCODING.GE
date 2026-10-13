import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { FadeIn } from "@/components/common/FadeIn";
import { Link } from "@/i18n/navigation";
import { getGoogleReviews } from "@/lib/google-reviews";
import { GoogleReviewsWall } from "@/features/reviews/components/GoogleReviewsWall";
import { SeoArticle } from "@/features/services/components/SeoArticle";
import { buildAlternates } from "@/i18n/seo-locales";
import { APP_NAME } from "@/lib/constants/app.constants";
import { targetAuxiliaryMetadata } from "@/lib/target-auxiliary-seo";
import { NeutralReviewsFaq } from "@/features/reviews/components/NeutralReviewsFaq";

type Props = {
  params: Promise<{ locale: string }>;
};

type ReviewsSourceLocale = "ka" | "en" | "ru";

type ReviewsArticle = {
  sections: Array<{ h: string; p: string }>;
  aeoH: string;
  aeoBody: string;
};

type ReviewsFaqItem = { q: string; a: string };

const REVIEWS_SOURCE_CAPTIONS: Record<ReviewsSourceLocale, string> = {
  ka: "aiNOW-ის შეფასებები Google-ზე. როცა მონაცემები ხელმისაწვდომია, აქ კომპანიის პროფილის შეფასებები ჩანს.",
  en: "Reviews of aiNOW on Google. When available, reviews are shown from the company profile.",
  ru: "Отзывы об aiNOW в Google. Если данные доступны, здесь показаны отзывы из профиля компании.",
};

function reviewsSourceLocale(locale: string): ReviewsSourceLocale {
  return locale === "ka" || locale === "ru" || locale === "en" ? locale : "en";
}

function reviewsSourceCaption(locale: string): string {
  return REVIEWS_SOURCE_CAPTIONS[reviewsSourceLocale(locale)];
}

// This page has a separate, evidence-bounded copy layer. Keep it local so the
// shared service defaults remain unchanged for pages with their own content.
const REVIEWS_ARTICLE: Record<ReviewsSourceLocale, ReviewsArticle> = {
  ka: {
    sections: [
      {
        h: "რას უნდა დააკვირდეთ შეფასებაში",
        p: "შეფასების წაკითხვისას მოძებნეთ კონკრეტული ბიზნესის ამოცანა, რა გაკეთდა და როგორ აღწერს ავტორი კომუნიკაციისა და დანერგვის გამოცდილებას. შემდეგ შეადარეთ ეს თქვენს ამოცანას და ცალკე განიხილეთ მოცულობა, ვადები და პირობები.",
      },
      {
        h: "საიდან მოდის შეფასებები",
        p: "როცა aiNOW-ის Google პროფილის მონაცემები ხელმისაწვდომია, აქ წყაროს ჩანაწერები გამოჩნდება და ორიგინალ პროფილზე გადასვლაც შეგიძლიათ. თუ მონაცემები არ არის, შეფასებები არ გამოჩნდება.",
      },
    ],
    aeoH: "როგორ გამოვიყენოთ aiNOW-ის შეფასებების გვერდი?",
    aeoBody: `ეს გვერდი აერთიანებს Google Business Profile-ში ხელმისაწვდომ ჩანაწერებსა და aiNOW-ის საჯარო ინფორმაციას. კომპანიის პროფილზე გამოჩენილი შეფასება ავტომატურად არ ნიშნავს კონკრეტული ${APP_NAME} ამოცანის რეკომენდაციას; შესაბამისი ამოცანა და პირობები ცალკე უნდა განიხილოთ.`,
  },
  en: {
    sections: [
      {
        h: "What to look for in a review",
        p: "Look for the business task, what was delivered and how the author describes communication and implementation. Compare that detail with your own task, then discuss scope, timing and terms separately.",
      },
      {
        h: "Where reviews come from",
        p: "When aiNOW’s Google profile data is available, source entries appear here with access to the original profile. When the data is unavailable, reviews are not displayed.",
      },
    ],
    aeoH: "How should I use the aiNOW reviews page?",
    aeoBody: `This page brings together available Google Business Profile entries and public company information. A company-profile review is not automatically a recommendation for every product or a product-specific ${APP_NAME} task; discuss the relevant task and scope separately.`,
  },
  ru: {
    sections: [
      {
        h: "На что обратить внимание в отзыве",
        p: "Ищите конкретную задачу бизнеса, что было сделано и как автор описывает общение и внедрение. Сравните это со своей задачей; объём, сроки и условия обсуждаются отдельно.",
      },
      {
        h: "Откуда берутся отзывы",
        p: "Когда доступны данные Google-профиля aiNOW, записи показываются здесь с переходом к исходному профилю. Если данных нет, отзывы не отображаются.",
      },
    ],
    aeoH: "Как понимать страницу отзывов aiNOW?",
    aeoBody: `Страница объединяет доступные записи из Google Business Profile aiNOW и публичную информацию о компании. Отзыв о профиле компании не является автоматически рекомендацией для каждого продукта или конкретной задачи ${APP_NAME}; нужную задачу и объём обсуждают отдельно.`,
  },
};

const REVIEWS_FAQ: Record<ReviewsSourceLocale, ReviewsFaqItem[]> = {
  ka: [
    {
      q: "როგორ დავტოვო შეფასება aiNOW-ზე?",
      a: "გახსენით aiNOW-ის Google Business Profile და დატოვეთ შეფასება. ამ გვერდზე ღილაკი პირდაპირ ხსნის შეფასების ფორმას.",
    },
    {
      q: "საიდან მოდის ეს ჩანაწერები?",
      a: "როცა პროფილის მონაცემები ხელმისაწვდომია, ჩანაწერები aiNOW-ის Google Business Profile-დან იტვირთება და ორიგინალ პროფილზე გადასვლაც შეგიძლიათ. თუ მონაცემები არ არის, შეფასებების ბლოკი არ გამოჩნდება.",
    },
    {
      q: "ნიშნავს თუ არა კომპანიის შეფასება კონკრეტული პროდუქტის რეკომენდაციას?",
      a: `არა, ავტომატურად არა. შეფასება შეიძლება ერთ კონკრეტულ გამოცდილებას ეხებოდეს; თუ ${APP_NAME}-ის ამოცანა გაქვთ, ის ცალკე უნდა განიხილოთ.`,
    },
    {
      q: "სად ვნახო საჯარო პროდუქტები და სამუშაო პროცესის მაგალითები?",
      a: `პროექტების გვერდი განასხვავებს aiNOW-ის საჯარო პროდუქტებსა და aiNOW-ის ოჯახის სამუშაო პროცესის მაგალითებს. ეს მაგალითები კონკრეტული ${APP_NAME} კლიენტის საჯარო ქეისებად არ უნდა იქნეს აღქმული; პირადი პროცესის დეტალები შეიძლება საჯარო არ იყოს.`,
    },
  ],
  en: [
    {
      q: "How can I leave a review for aiNOW?",
      a: "Open aiNOW’s Google Business Profile and post your review. The button on this page opens the review form directly.",
    },
    {
      q: "Where do these entries come from?",
      a: "When profile data is available, entries are loaded from aiNOW’s Google Business Profile, with access to the original profile. When the data is unavailable, the review block does not appear.",
    },
    {
      q: "Does a company review recommend a specific product?",
      a: `Not automatically. A review may describe one particular experience; if you have an ${APP_NAME} task in mind, discuss that task separately.`,
    },
    {
      q: "Where can I see public products and workflow examples?",
      a: `The projects page separates public aiNOW products from aiNOW family workflow examples. Treat the latter as workflow references, not as a public case for a specific ${APP_NAME} customer; private workflow details may not be public.`,
    },
  ],
  ru: [
    {
      q: "Как оставить отзыв о aiNOW?",
      a: "Откройте Google Business Profile aiNOW и оставьте отзыв. Кнопка на этой странице открывает форму отзыва напрямую.",
    },
    {
      q: "Откуда берутся эти записи?",
      a: "Если данные профиля доступны, записи загружаются из Google Business Profile aiNOW с переходом к исходному профилю. Если данных нет, блок с отзывами не отображается.",
    },
    {
      q: "Означает ли отзыв о компании рекомендацию конкретного продукта?",
      a: `Не автоматически. Отзыв может описывать один конкретный опыт; задачу ${APP_NAME}, которая вам нужна, обсуждают отдельно.`,
    },
    {
      q: "Где увидеть публичные продукты и примеры рабочих процессов?",
      a: `На странице проектов отдельно показаны публичные продукты aiNOW и примеры рабочих процессов aiNOW. Последние следует воспринимать как описание процесса, а не как публичный кейс конкретного клиента ${APP_NAME}; детали частного процесса могут быть непубличными.`,
    },
  ],
};

const REVIEWS_FAQ_TITLES: Record<ReviewsSourceLocale, string> = {
  ka: "ხშირად დასმული კითხვები",
  en: "Frequently asked questions",
  ru: "Частые вопросы",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.reviews" });
  const description = reviewsSourceCaption(locale);

  return {
    title: t("title"),
    description,
    ...targetAuxiliaryMetadata({ locale, path: "/reviews", title: t("title"), description, alternates: buildAlternates("/reviews", locale) }),
  };
}

// Deep-link that opens the Google review composer for the aiNOW Business
// Profile. Kept in sync with GOOGLE_REVIEW_URL in
// features/home/components/ReviewsMarquee.tsx (single public g.page short link).
const GOOGLE_REVIEW_URL = "https://g.page/r/CTp5smtbSZLXEAI/review";

// Internal links out (link equity + relevance to money pages), keyed off nav labels.
const EXPLORE_LINKS = ["/projects", "/services", "/pricing", "/contact"] as const;
const EXPLORE_NAV_KEY: Record<(typeof EXPLORE_LINKS)[number], string> = {
  "/projects": "projects",
  "/services": "services",
  "/pricing": "pricing",
  "/contact": "contact",
};

// Eyebrow label, same landing look as the About page (mono, uppercase, wide tracking).
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
      {children}
    </p>
  );
}

/* =========================================================================
   /reviews, a dedicated social-proof + brand-SERP page on the MAIN domain
   (subfolder, not a subdomain, so link equity stays consolidated). Its own
   indexable copy is original: hero + SeoArticle trust block + FAQ (FAQPage
   schema) + internal links. The live Google Business Profile reviews render
   through <GoogleReviewsWall /> as a masonry wall (social proof only). No
   Review / AggregateRating JSON-LD on the Google reviews: Google's policy
   bans marking up third-party reviews. Star-rich-results come later, only
   from first-party reviews we collect ourselves (Phase 2/3).
   ========================================================================= */
export default async function ReviewsPage({ params }: Props) {
  const { locale } = await params;
  const sourceLocale = reviewsSourceLocale(locale);
  const sourceCaption = reviewsSourceCaption(locale);
  const article = REVIEWS_ARTICLE[sourceLocale];
  const faqItems = REVIEWS_FAQ[sourceLocale];
  const faqTitle = REVIEWS_FAQ_TITLES[sourceLocale];
  const t = await getTranslations({ locale, namespace: "reviews" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tHome = await getTranslations({ locale, namespace: "home.reviews" });
  const data = await getGoogleReviews(locale);

  return (
    <div className="ainow-blueprint-bg min-h-dvh text-slate-900 dark:text-slate-100">
      <div className="space-y-12 py-12 md:space-y-16 md:py-20">
        {/* Hero, original page copy (single H1) */}
        <SectionContainer>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>{t("eyebrow")}</Eyebrow>
              <h1 className="mt-4 font-headline text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 md:text-4xl lg:text-5xl dark:text-white">
                {t("title")}
              </h1>
              <p lang={sourceLocale} dir="ltr" className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                {sourceCaption}
              </p>
            </div>
          </FadeIn>
        </SectionContainer>

        {/* Live Google reviews wall (social proof only, no schema).
            Renders nothing until GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID are set. */}
        {data && (
          <SectionContainer>
            <FadeIn>
              <h2 className="sr-only">
                {tHome("headingPre")} {tHome("headingAccent")}
              </h2>
              <GoogleReviewsWall
                data={data}
                countLabel={tHome("countLabel", { count: data.count })}
                seeAllLabel={t("googleCta")}
              />
            </FadeIn>
          </SectionContainer>
        )}

        {/* Original trust content (SeoArticle, reads reviews.article). H2 sections + AEO card. */}
        <SeoArticle data={article} contentLocale={sourceLocale} />

        {/* FAQ accordion + FAQPage JSON-LD (first-party Q&A, reads reviews.faq). */}
        <NeutralReviewsFaq items={faqItems} title={faqTitle} contentLocale={sourceLocale} />

        {/* Internal links out, to money + proof pages */}
        <SectionContainer>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-headline text-2xl font-semibold tracking-[-0.035em] text-slate-950 md:text-3xl dark:text-white">
                {t("exploreTitle")}
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {EXPLORE_LINKS.map((href) => (
                  <Link
                    key={href}
                    href={href}
                    className="dodo-glass-box p-5 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 dark:text-white"
                  >
                    {tNav(EXPLORE_NAV_KEY[href])} <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </SectionContainer>

        {/* Invite / CTA, original page copy */}
        <SectionContainer>
          <FadeIn>
            <div className="dodo-glass-card mx-auto max-w-2xl p-8 text-center md:p-10">
              <h2 className="font-headline text-2xl font-semibold tracking-[-0.035em] text-slate-950 md:text-3xl dark:text-white">
                {t("inviteTitle")}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                {t("inviteBody")}
              </p>
              <div className="mt-7 flex justify-center">
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ainow-btn-primary h-11 px-6 active:scale-[0.97]"
                >
                  {t("leaveCta")}
                </a>
              </div>
            </div>
          </FadeIn>
        </SectionContainer>
      </div>
    </div>
  );
}
