import type { Metadata } from 'next';
import { NicheLanding, nicheMetadata } from '@/features/niches/components/NicheLanding';
import { realestate } from '@/features/niches/data/realestate';

/*
 * Auto-generated stub (scripts/scaffold-niches.mjs). All copy lives in the registry
 * entry; this file only binds it to the /ai-chatbot-<slug> route and its
 * metadata. Do not hand-edit; regenerate from the registry instead.
 */
type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return nicheMetadata(realestate, locale);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <NicheLanding entry={realestate} locale={locale} />;
}
