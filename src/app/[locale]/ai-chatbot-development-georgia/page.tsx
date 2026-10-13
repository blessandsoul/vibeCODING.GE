// LEGACY_SOURCE_MAPPING: retained aiCHATS by aiNOW reference; current-template legal/reference card.
// This URL is preserved for the target family. It is not a target-owned chatbot offer.

import type { Metadata } from "next";

import {
  buildDirectChatReferenceMetadata,
  DirectChatOwnerReference,
} from "@/features/niches/components/DirectChatOwnerReference";

interface Props {
  params: Promise<{ locale: string }>;
}

const REFERENCE_KIND = "development" as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildDirectChatReferenceMetadata(REFERENCE_KIND, locale);
}

export default async function DirectChatbotDevelopmentPage({ params }: Props) {
  const { locale } = await params;
  return <DirectChatOwnerReference kind={REFERENCE_KIND} locale={locale} />;
}

