import type { Metadata } from "next";

import {
  buildDirectCompanyOwnerMetadata,
  DirectCompanyOwnerReference,
  type DirectCompanyReferenceKind,
} from "@/features/niches/components/DirectCompanyOwnerReference";

type Props = {
  params: Promise<{ locale: string }>;
};

const KIND: DirectCompanyReferenceKind = "automation";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildDirectCompanyOwnerMetadata(KIND, locale);
}

export default async function DirectCompanyOwnerPage({ params }: Props) {
  const { locale } = await params;
  return <DirectCompanyOwnerReference kind={KIND} locale={locale} />;
}

