import type { Metadata } from 'next';
import { NicheLanding, nicheMetadata } from '@/features/niches/components/NicheLanding';
import { legal } from '@/features/niches/data/legal';

/*
 * Auto-generated stub (scripts/scaffold-niches.mjs). All copy lives in the registry
 * entry; this file only binds it to the /ai-chatbot-<slug> route and its
 * metadata. Do not hand-edit; regenerate from the registry instead.
 */
type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return nicheMetadata(legal, locale);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <NicheLanding entry={legal} locale={locale} />;
}
