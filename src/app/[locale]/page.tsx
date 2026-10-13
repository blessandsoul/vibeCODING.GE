import type { Metadata } from 'next';
import { PRODUCT_OG_IMAGE, PRODUCT_OG_PATH } from "@/lib/product-og";
import { getAiNowHomeCopy } from '@/features/home/components/ainow/AiNowHomeCopy';
import { buildAlternates } from '@/i18n/seo-locales';
import { HomeFaqSchema } from '@/components/seo/StructuredData';

// AiNow Design System Components adapted for aiNOW
import { AiNowTopBanner } from '@/features/home/components/ainow/AiNowTopBanner';
import { AiNowNav } from '@/features/home/components/ainow/AiNowNav';
import { AiNowHero } from '@/features/home/components/ainow/AiNowHero';
import { AiNowModelProof } from '@/features/home/components/ainow/AiNowModelProof';
import { AiNowDivider } from '@/features/home/components/ainow/AiNowDivider';
import { AiNowComparison } from '@/features/home/components/ainow/AiNowComparison';
import { AiNowCategoryMatrix } from '@/features/home/components/ainow/AiNowCategoryMatrix';
import { AiNowIndustries } from '@/features/home/components/ainow/AiNowIndustries';
import { AiNowProcessRoadmap } from '@/features/home/components/ainow/AiNowProcessRoadmap';
import { AiNowArchitectureCare } from '@/features/home/components/ainow/AiNowArchitectureCare';
import { AiNowTeamLetter } from '@/features/home/components/ainow/AiNowTeamLetter';
import { AiNowFaq } from '@/features/home/components/ainow/AiNowFaq';
import { AiNowClientFit } from '@/features/home/components/ainow/AiNowClientFit';
import { AiNowClosingCta } from '@/features/home/components/ainow/AiNowClosingCta';
import { AiNowFooter } from '@/features/home/components/ainow/AiNowFooter';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = getAiNowHomeCopy(locale);
  const title = `${copy.hero.titleLine1} ${copy.hero.titleLine2}`;
  const description = copy.hero.description;

  return {
    title,
    description,
    alternates: buildAlternates('', locale),
    openGraph: {
      title,
      description,
      images: [PRODUCT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [PRODUCT_OG_PATH],
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <HomeFaqSchema locale={locale} />
      <div className="vibecoding-product relative w-full overflow-x-clip bg-[#fcfcfb] dark:bg-[#0a0b0e] text-slate-900 dark:text-slate-100 transition-colors duration-200" id="top">
        {/* Sticky AiNow Navbar at top */}
        <AiNowNav />

        {/* Top Announcement Banner flanked by blueprint rails */}
        <AiNowTopBanner />

        {/* Hero Section with 2-Column Value Prop + Ecosystem Hub, 3-feature grid, and MacOS Studio App Window */}
        <AiNowHero catalogHref="#how-we-work" />

        {/* 45° Hatched Blueprint Divider */}
        <AiNowDivider />

        {/* How aiNOW selects the AI stack for a business task */}
        <AiNowModelProof />

        <AiNowDivider />

        {/* Before vs After: Real Operational Impact (Without aiNOW vs With aiNOW) */}
        <AiNowComparison />

        {/* 45° Hatched Blueprint Divider */}
        <AiNowDivider />

        {/* What do you want to improve? — 4 Business Category Bento Matrix */}
        <AiNowCategoryMatrix />

        {/* 45° Hatched Blueprint Divider */}
        <AiNowDivider />

        {/* Industry Solutions and Turnkey Workflows */}
        <AiNowIndustries />

        {/* Full-width continuous horizontal hairline divider */}
        <div className="relative w-full ainow-divider-hairline" />

        {/* How we work — 3-Step Transparent Process */}
        <AiNowProcessRoadmap />

        {/* 45° Hatched Blueprint Divider */}
        <AiNowDivider />

        {/* Trust: data, access and implementation control */}
        <AiNowArchitectureCare />

        <AiNowDivider />

        {/* Editorial Letter from the Founders */}
        <AiNowTeamLetter />

        <AiNowDivider />

        {/* Comprehensive 15-Question FAQ Accordion matching HomeFaqSchema 1:1 */}
        <AiNowFaq />

        <AiNowDivider />

        {/* Client self-qualification before the final consultation CTA */}
        <AiNowClientFit />

        <AiNowDivider />

        {/* Monolithic Closing CTA Block */}
        <AiNowClosingCta />

        <AiNowDivider />

        {/* Deep Blueprint Cobalt Footer */}
        <AiNowFooter />
      </div>
    </>
  );
}
