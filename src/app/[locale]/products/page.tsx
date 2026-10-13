import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Ico } from '@/components/common/Ico';
import { FadeIn } from '@/components/common/FadeIn';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { getAiNowHomeCopy } from '@/features/home/components/ainow/AiNowHomeCopy';
import { targetAuxiliaryMetadata } from '@/lib/target-auxiliary-seo';
import { PRODUCT_ITEMS, productHref } from '@/features/products/catalog';
import { Link } from '@/i18n/navigation';
import { buildAlternates } from '@/i18n/seo-locales';

type Props = { params: Promise<{ locale: string }> };

const FAMILY_DIRECTORY_DESCRIPTION: Record<string, string> = {
  ka: 'აქ თავმოყრილია aiNOW-ის პროდუქტები. თითოეული ბარათი შესაბამისი პროდუქტის საიტზე გადაგიყვანთ.',
  en: 'This directory brings together aiNOW products. Each card opens the website for that product.',
  ru: 'Здесь собраны продукты aiNOW. Каждая карточка ведёт на сайт соответствующего продукта.',
};

const AUDIT_DIRECTORY_DESCRIPTION: Record<string, string> = {
  ka: 'შეამოწმეთ, სად გამოგადგებათ AI',
  en: 'Check where AI may help',
  ru: 'Проверьте, где вам поможет AI',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'landingNav' });
  const title = t('products');
  const description = FAMILY_DIRECTORY_DESCRIPTION[locale] ?? FAMILY_DIRECTORY_DESCRIPTION.en;
  return targetAuxiliaryMetadata({ locale, path: '/products', title, description, alternates: buildAlternates('/products', locale) });
}

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'landingNav' });
  const servicesT = await getTranslations({ locale, namespace: 'servicesIndex' });
  const approvedDescriptions = getAiNowHomeCopy(locale).nav.productDescriptions;
  const getProductDescription = (descriptionKey: string) => descriptionKey === 'aiaudit' ? (AUDIT_DIRECTORY_DESCRIPTION[locale] ?? AUDIT_DIRECTORY_DESCRIPTION.en) : (approvedDescriptions[descriptionKey] ?? t(`productDescriptions.${descriptionKey}`));
  const description = FAMILY_DIRECTORY_DESCRIPTION[locale] ?? FAMILY_DIRECTORY_DESCRIPTION.en;

  return (
    <div className="ainow-blueprint-bg min-h-dvh py-16 text-slate-900 dark:text-slate-100 md:py-20">
      <SectionContainer>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              aiNOW
            </p>
            <h1 className="mt-3 font-headline text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 md:text-4xl dark:text-white">
              {t('products')}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {description}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PRODUCT_ITEMS.map((product, i) => (
            <FadeIn key={product.descriptionKey} delay={i * 0.08}>
              <Link
                href={productHref(product.href, locale)}
                className="dodo-glass-box group flex h-full flex-col overflow-hidden p-7 transition duration-300 hover:-translate-y-0.5 md:p-8"
              >
                <div className="relative z-10 mb-5 flex items-center justify-between">
                  <h2 className="font-headline text-xl font-semibold tracking-[-0.025em] text-slate-950 dark:text-white">{product.label}</h2>
                  <span className="dodo-glass-inset flex h-10 w-10 shrink-0 items-center justify-center text-lg text-slate-600 transition-colors duration-300 group-hover:text-blue-600 dark:text-slate-300 dark:group-hover:text-blue-300">
                    <Ico name={product.Icon} className="size-5" />
                  </span>
                </div>
                <p className="relative z-10 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {getProductDescription(product.descriptionKey)}
                </p>
                <span className="relative z-10 mt-4 text-sm font-semibold text-blue-600 transition-colors duration-200 group-hover:text-blue-700 dark:text-blue-300 dark:group-hover:text-blue-200">
                  {servicesT('learnMore')} →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
