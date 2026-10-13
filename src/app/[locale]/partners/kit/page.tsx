import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { LeadRegistrationForm } from "@/features/partners/components/LeadRegistrationForm";
import { isPartnerKitAccessToken } from "@/lib/partner-kit-access";
import "@/features/partners/components/partners.css";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ token?: string | string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "partnersKit" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    robots: { index: false, follow: false },
  };
}

type Pitch = { title: string; text: string };
type PriceRow = { service: string; range: string };

export default async function PartnerKitPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { token } = await searchParams;
  if (!isPartnerKitAccessToken(token)) notFound();

  const t = await getTranslations({ locale, namespace: "partnersKit" });
  const agreementHref =
    locale === "ka"
      ? "/agreements/partner-agreement?token=partner2026"
      : `/${locale}/agreements/partner-agreement?token=partner2026`;

  const verticals = t.raw("verticals") as string[];
  const pitch = t.raw("pitch") as Pitch[];
  const script = t.raw("script") as string[];
  const priceRows = t.raw("priceRows") as PriceRow[];
  const dos = t.raw("dos") as string[];
  const donts = t.raw("donts") as string[];
  const payout = t.raw("payout") as string[];
  const privacy = t.raw("privacy") as string[];

  return (
    <div className="partners-page ainow-blueprint-bg min-h-dvh text-slate-900 dark:text-slate-100">
      {/* Hero */}
      <section className="px-6 pt-24 pb-10 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5 text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            {t("badge")}
          </p>
          <h1 className="font-headline text-3xl font-extrabold leading-[1.05] tracking-tight text-slate-950 dark:text-white md:text-4xl lg:text-5xl">
            {t("heading")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {t("intro")}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6">
        {/* Verticals */}
        <section className="py-12">
          <h2 className="font-headline text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">
            {t("verticalsHeading")}
          </h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {verticals.map((v, i) => (
              <span
                key={i}
                className="dodo-glass-inset rounded-full px-4 py-2 text-sm text-slate-700 dark:text-slate-200"
              >
                {v}
              </span>
            ))}
          </div>
        </section>

        {/* What you sell */}
        <section className="border-t border-black/[0.08] py-12 dark:border-white/10">
          <h2 className="font-headline text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">
            {t("pitchHeading")}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {pitch.map((p, i) => (
              <div
                key={i}
                className="dodo-glass-card p-6"
              >
                <h3 className="font-headline text-lg font-bold text-slate-950 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Two-line pitch */}
        <section className="border-t border-black/[0.08] py-12 dark:border-white/10">
          <h2 className="font-headline text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">
            {t("scriptHeading")}
          </h2>
          <div className="dodo-glass-card mt-6 space-y-3 p-6 md:p-8">
            {script.map((line, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-slate-800 dark:text-slate-200"
              >
                {line}
              </p>
            ))}
          </div>
        </section>

        {/* Price ranges */}
        <section className="border-t border-black/[0.08] py-12 dark:border-white/10">
          <h2 className="font-headline text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">
            {t("priceHeading")}
          </h2>
          <div className="dodo-glass-card mt-6 overflow-hidden">
            <div className="space-y-px">
              {priceRows.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 border-t border-black/[0.06] px-6 py-4 first:border-t-0 dark:border-white/10"
                >
                  <span className="font-medium text-slate-950 dark:text-white">
                    {row.service}
                  </span>
                  <span className="font-headline font-bold text-blue-600 dark:text-blue-300">
                    {row.range}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{t("priceNote")}</p>
        </section>

        {/* Do / don't */}
        <section className="border-t border-black/[0.08] py-12 dark:border-white/10">
          <h2 className="font-headline text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">
            {t("dosDontsHeading")}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ul className="dodo-glass-card space-y-2.5 p-6">
              {dos.map((d, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-600 dark:text-emerald-300">✓</span>
                  {d}
                </li>
              ))}
            </ul>
            <ul className="dodo-glass-card space-y-2.5 p-6">
              {donts.map((d, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <span className="text-rose-600 dark:text-rose-300">✕</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Payouts */}
        <section className="border-t border-black/[0.08] py-12 dark:border-white/10">
          <h2 className="font-headline text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">
            {t("payoutHeading")}
          </h2>
          <ul className="mt-6 space-y-2.5">
            {payout.map((p, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xs text-blue-600 dark:text-blue-300">
                  {i + 1}
                </span>
                {p}
              </li>
            ))}
          </ul>
        </section>

        {/* Agreement */}
        <section className="border-t border-black/[0.08] py-12 dark:border-white/10">
          <div className="dodo-glass-card p-6 md:p-8">
            <h2 className="font-headline text-2xl font-bold text-slate-950 dark:text-white md:text-3xl">
              {t("agreementHeading")}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t("agreementText")}
            </p>
            <a
              href={agreementHref}
              className="ainow-btn-primary mt-6 inline-flex h-11 px-6 text-sm font-semibold"
            >
              {t("agreementCta")}
            </a>
          </div>
        </section>

        {/* Register a lead */}
        <section
          id="register"
          className="scroll-mt-24 border-t border-black/[0.08] py-12 pb-24 dark:border-white/10"
        >
          <div className="mb-8 text-center">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
              {t("registerHeading")}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-300">
              {t("registerIntro")}
            </p>
          </div>
          <div className="mx-auto max-w-2xl">
            <LeadRegistrationForm />
          </div>
        </section>

        {/* Privacy notice (consent-link target) */}
        <section
          id="partner-privacy"
          className="scroll-mt-24 border-t border-black/[0.08] py-12 pb-24 dark:border-white/10"
        >
          <div className="dodo-glass-card p-6 md:p-8">
            <h2 className="font-headline text-xl font-bold text-slate-950 dark:text-white">
              {t("privacyHeading")}
            </h2>
            <div className="mt-4 space-y-2.5">
              {privacy.map((line, i) => (
                <p key={i} className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {line}
                </p>
              ))}
            </div>
            <p className="dodo-glass-inset mt-4 rounded-xl p-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              {t("firstContactNote")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
