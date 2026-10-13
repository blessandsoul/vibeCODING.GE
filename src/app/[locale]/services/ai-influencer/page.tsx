import { redirect } from 'next/navigation';

// Kept as a single legacy alias. The public service was consolidated into the
// canonical AI Characters page; rendering a second page here would create
// duplicate content and make every locale emit a redirecting hreflang target.
export default async function AIInfluencerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/services/ai-characters`);
}
