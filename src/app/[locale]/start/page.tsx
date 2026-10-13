import type { Metadata } from "next";
import { getAiNowHomeCopy } from "@/features/home/components/ainow/AiNowHomeCopy";
import { APP_NAME } from "@/lib/constants/app.constants";
import { StartPageContent } from "@/features/landing/components/StartPageContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { hero } = getAiNowHomeCopy(locale);

  return {
    title: { absolute: `${hero.titleLine1} ${hero.titleLine2} | ${APP_NAME}` },
    description: hero.description,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function StartPage() {
  return <StartPageContent />;
}
