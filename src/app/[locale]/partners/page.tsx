import type { Metadata } from "next";
import { aiMedia } from "@/lib/media-assets";
import { AiNowDisclosure } from "@/features/home/components/ainow/AiNowDisclosure";
import { getTranslations } from "next-intl/server";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FaqPageSchema } from "@/components/seo/FaqPageSchema";
import { PartnerApplicationForm } from "@/features/partners/components/PartnerApplicationForm";
import { getGoogleReviews } from "@/lib/google-reviews";
import "@/features/partners/components/partners.css";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "partners" });

  const canonical = locale === "ka"
    ? "https://ainow.ge/partners"
    : `https://ainow.ge/${locale}/partners`;
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical },
    robots: { index: false, follow: true },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaTitle"),
      description: t("metaDescription"),
    },
  };
}

type CommissionRow = { level: string; role: string; commission: string };
type Step = { title: string; text: string };
type Example = { title: string; text: string };
type Faq = { q: string; a: string };

export default async function PartnersPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "partners" });
  const base =
    locale === "ka" ? "https://ainow.ge" : `https://ainow.ge/${locale}`;

  const tableHead = t.raw("commissionTableHead") as CommissionRow;
  const rows = t.raw("commissionRows") as CommissionRow[];
  const steps = t.raw("processSteps") as Step[];
  const rules = t.raw("rules") as string[];
  const examples = t.raw("examples") as Example[];
  const faq = t.raw("faq") as Faq[];
  const payout = t.raw("payout") as string[];
  const reviews = await getGoogleReviews(locale).catch(() => null);

  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "aiNOW", item: base },
          { name: t("heroTitle"), item: `${base}/partners` },
        ]}
      />
      <FaqPageSchema items={faq} />

      <div className="partners-page ainow-blueprint-bg min-h-dvh text-slate-900 dark:text-slate-100">
        {/* ─────────── HERO ─────────── */}
        <section className="relative overflow-hidden px-6 pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[120px] dark:bg-blue-400/[0.08]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5 text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              {t("badge")}
            </p>
            <h1 className="font-headline text-3xl font-extrabold leading-[1.05] tracking-tight text-slate-950 dark:text-white md:text-4xl lg:text-5xl">
              {t("heroTitle")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {t("heroSubtitle")}
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500 dark:text-slate-400">
              {t("heroNote")}
            </p>
            <a
              href="#apply"
              className="ainow-btn-primary mt-9 inline-flex h-12 px-8 text-sm font-semibold"
            >
              {t("form.submit")}
            </a>
          </div>
        </section>

        {/* ─────────── VIDEO ─────────── */}
        <section className="px-6 pt-2 pb-10">
          <div className="mx-auto flex max-w-4xl justify-center">
            <video
              controls
              preload="metadata"
              playsInline
              aria-label={t("heroTitle")}
              className="dodo-glass-card block max-h-[80vh] w-auto max-w-full rounded-3xl"
            >
              <source src={aiMedia.partnersVideo} type="video/mp4" />
            </video>
          </div>
        </section>

        {/* ─────────── PROOF ─────────── */}
        {reviews && reviews.count > 0 && (
          <section className="px-6 pt-2 pb-8">
            <div className="mx-auto max-w-4xl">
              <div className="dodo-glass-card flex flex-col items-center gap-3 px-6 py-6 text-center">
                <div className="flex items-center gap-2">
                  <span className="font-headline text-2xl font-bold text-slate-950 dark:text-white">
                    {reviews.rating.toFixed(1)}
                  </span>
                  <span className="text-[#f5a623]">★★★★★</span>
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    · {reviews.count}+ Google
                  </span>
                </div>
                <p className="eyebrow text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  {t("proofLabel")}
                </p>
                {reviews.reviews.length > 0 && (
                  <div className="mt-2 grid w-full gap-3 sm:grid-cols-2">
                    {reviews.reviews.slice(0, 2).map((r, i) => (
                      <div
                        key={i}
                        className="dodo-glass-inset rounded-xl p-4 text-left"
                      >
                        <p className="line-clamp-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {r.text}
                        </p>
                        <p className="mt-2 text-xs font-medium text-slate-950 dark:text-white">
                          {r.authorName}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ─────────── COMMISSION ─────────── */}
        <section className="px-6 py-12 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                {t("commissionHeading")}
              </h2>
            </div>
            <div className="dodo-glass-card overflow-hidden">
              <div className="space-y-px">
                <div className="dodo-glass-inset hidden px-6 py-4 md:grid md:grid-cols-12 md:gap-4">
                  <div className="eyebrow col-span-4 text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    {tableHead.level}
                  </div>
                  <div className="eyebrow col-span-5 text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    {tableHead.role}
                  </div>
                  <div className="eyebrow col-span-3 text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    {tableHead.commission}
                  </div>
                </div>
                {rows.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 gap-2 border-t border-black/[0.06] px-6 py-6 transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:hover:bg-white/[0.04] md:grid-cols-12 md:gap-4"
                  >
                    <div className="flex items-center gap-2.5 font-headline text-lg font-bold text-slate-950 dark:text-white md:col-span-4">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                      {row.level}
                    </div>
                    <div className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:col-span-5">
                      {row.role}
                    </div>
                    <div className="font-headline font-bold text-blue-600 dark:text-blue-300 md:col-span-3">
                      {row.commission}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── PROCESS ─────────── */}
        <section className="border-t border-black/[0.08] px-6 py-12 dark:border-white/10 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                {t("processHeading")}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="dodo-glass-card relative overflow-hidden p-7 transition duration-300 hover:-translate-y-0.5"
                >
                  <span className="absolute right-5 top-3 font-headline text-5xl font-extrabold text-slate-200 dark:text-slate-800">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative pr-12 font-headline text-xl font-bold text-slate-950 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── RULES ─────────── */}
        <section className="border-t border-black/[0.08] px-6 py-12 dark:border-white/10 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                {t("rulesHeading")}
              </h2>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {rules.map((rule, i) => (
                <li
                  key={i}
                  className="dodo-glass-inset flex items-start gap-3 rounded-xl p-4 transition hover:border-blue-500/30 hover:bg-blue-500/[0.04]"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-xs text-white">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─────────── EXAMPLES ─────────── */}
        <section className="border-t border-black/[0.08] px-6 py-12 dark:border-white/10 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                {t("examplesHeading")}
              </h2>
            </div>
            <div className="dodo-glass-card grid gap-px overflow-hidden md:grid-cols-3">
              {examples.map((ex, i) => (
                <div
                  key={i}
                  className="p-8 transition-colors hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                >
                  <h3 className="font-headline text-lg font-bold text-slate-950 dark:text-white">
                    {ex.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {ex.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── PAYOUTS ─────────── */}
        <section className="border-t border-black/[0.08] px-6 py-12 dark:border-white/10 md:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                {t("payoutHeading")}
              </h2>
            </div>
            <ul className="space-y-3">
              {payout.map((p, i) => (
                <li
                  key={i}
                  className="dodo-glass-card flex gap-3 p-4 text-sm text-slate-600 dark:text-slate-300"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-600 dark:text-blue-300">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─────────── FAQ ─────────── */}
        <section className="border-t border-black/[0.08] px-6 py-12 dark:border-white/10 md:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                {t("faqHeading")}
              </h2>
            </div>
            <div className="space-y-3">
              {faq.map((item, i) => (
                <AiNowDisclosure
                  key={i}
                  title={item.q}
                  className="dodo-glass-card px-5"
                >
                  <p className="pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.a}
                  </p>
                </AiNowDisclosure>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── FOUNDING ─────────── */}
        <section className="border-t border-black/[0.08] px-6 py-16 dark:border-white/10 md:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="dodo-glass-card relative overflow-hidden p-8 text-center md:p-12">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="relative">
                <span className="dodo-glass-inset eyebrow mb-4 inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
                  {t("urgencyBadge")}
                </span>
                <h2 className="font-headline text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                  {t("urgencyTitle")}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {t("urgencyDesc")}
                </p>
                <a
                  href="#apply"
                  className="ainow-btn-primary mt-7 inline-flex h-12 px-8 text-sm font-semibold"
                >
                  {t("urgencyCta")}
                </a>
                <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{t("urgencyNote")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── APPLY ─────────── */}
        <section
          id="apply"
          className="scroll-mt-24 border-t border-black/[0.08] px-6 py-12 dark:border-white/10 md:py-20"
        >
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <h2 className="font-headline text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                {t("formHeading")}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-300">
                {t("formSubtitle")}
              </p>
            </div>
            <PartnerApplicationForm />
          </div>
        </section>
      </div>
    </>
  );
}
