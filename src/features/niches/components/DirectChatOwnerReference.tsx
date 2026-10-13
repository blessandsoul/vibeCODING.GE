import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SectionContainer } from "@/components/layout/SectionContainer";

import {
  DIRECT_CHAT_OWNER_MARKER,
  DIRECT_CHAT_OWNER_PROVIDER,
  DIRECT_CHAT_PRODUCT_URL,
  getDirectChatReferenceCanonical,
  getDirectChatReferenceCopy,
  getDirectChatReferencePath,
  resolveDirectChatLocale,
  type DirectChatReferenceKind,
} from "./direct-chat-owner-reference-copy";

const FAMILY_LINK_CLASS =
  "dodo-glass-box dodo-glass-pill inline-flex min-h-11 shrink-0 items-center justify-center px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white";

export function buildDirectChatReferenceMetadata(
  kind: DirectChatReferenceKind,
  locale: string,
): Metadata {
  const copy = getDirectChatReferenceCopy(kind, locale);
  const canonical = getDirectChatReferenceCanonical(kind, locale);

  return {
    title: { absolute: copy.metaTitle },
    description: copy.metaDescription,
    alternates: { canonical },
    robots: {
      index: false,
      follow: true,
      googleBot: { index: false, follow: true },
    },
    openGraph: {
      type: "website",
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: canonical,
      siteName: DIRECT_CHAT_OWNER_MARKER,
    },
    twitter: {
      card: "summary",
      title: copy.metaTitle,
      description: copy.metaDescription,
    },
  };
}

export function DirectChatOwnerReference({
  kind,
  locale,
}: {
  kind: DirectChatReferenceKind;
  locale: string;
}) {
  const copy = getDirectChatReferenceCopy(kind, locale);
  const contentLocale = resolveDirectChatLocale(locale);
  const path = getDirectChatReferencePath(kind);

  return (
    <div
      className="ainow-legal-page py-10 sm:py-16"
      data-source-template="legal-reference-card"
      data-source-class="SOURCE_LEGAL_REFERENCE_CARD"
      data-owner-reference={DIRECT_CHAT_OWNER_MARKER}
      data-owner-provider={DIRECT_CHAT_OWNER_PROVIDER.name}
      data-reference-path={path}
      data-source-url={DIRECT_CHAT_PRODUCT_URL}
    >
      <SectionContainer>
        <div className="dodo-glass-card mx-auto max-w-3xl p-5 sm:p-9" lang={contentLocale} dir="ltr">
          <p className="eyebrow text-xs uppercase tracking-[0.3em] text-[#525252]">
            aiCHATS by aiNOW
          </p>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-6 leading-relaxed text-[#525252]">{copy.description}</p>
          <section className="dodo-glass-inset mt-6 rounded-2xl p-5">
            <h2 className="font-display text-base font-bold tracking-tight text-neutral-900">
              {copy.noteTitle}
            </h2>
            <p className="mt-2 leading-relaxed text-[#525252]">{copy.noteBody}</p>
          </section>
          <section className="mt-6">
            <a
              href={DIRECT_CHAT_PRODUCT_URL}
              className={FAMILY_LINK_CLASS}
              data-source-cta={DIRECT_CHAT_PRODUCT_URL}
            >
              {copy.familyAction}
            </a>
          </section>
        </div>
      </SectionContainer>
    </div>
  );
}

