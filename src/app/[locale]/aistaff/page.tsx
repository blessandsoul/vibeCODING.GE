import type { Metadata } from 'next';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { Link } from '@/i18n/navigation';
import {
    AICHATS_QR_REFERENCE_OWNER_URL,
    getAichatsQrReferenceCopy,
} from '../aichats-qr-reference-copy';

// QR-only landing, kept out of search indexes while retaining the owner's stable URL.
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const copy = getAichatsQrReferenceCopy(locale);

    return {
        title: { absolute: copy.title },
        description: copy.description,
        robots: { index: false, follow: false },
        alternates: { canonical: 'https://ainow.ge/aistaff' },
    };
}

export default async function AistaffPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const copy = getAichatsQrReferenceCopy(locale);

    return (
        <div className="ainow-legal-page py-10 sm:py-16">
            <SectionContainer>
                <div className="dodo-glass-card mx-auto max-w-3xl p-5 sm:p-9">
                    <p className="eyebrow text-xs uppercase tracking-[0.3em] text-[#525252]">aiCHATS by aiNOW</p>
                    <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">{copy.title}</h1>
                    <p className="mt-6 leading-relaxed text-[#525252]">{copy.description}</p>
                    <section className="dodo-glass-inset mt-6 rounded-2xl p-5">
                        <div className="flex flex-wrap gap-3">
                            <a
                                href={AICHATS_QR_REFERENCE_OWNER_URL}
                                className="dodo-glass-box dodo-glass-pill inline-flex min-h-11 shrink-0 items-center justify-center px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white"
                            >
                                {copy.ownerAction}
                            </a>
                            <Link
                                href="/contact"
                                className="dodo-glass-box dodo-glass-pill inline-flex min-h-11 shrink-0 items-center justify-center px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white"
                            >
                                {copy.contactAction}
                            </Link>
                            <Link
                                href="/pricing"
                                className="dodo-glass-box dodo-glass-pill inline-flex min-h-11 shrink-0 items-center justify-center px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white"
                            >
                                {copy.pricingAction}
                            </Link>
                        </div>
                    </section>
                </div>
            </SectionContainer>
        </div>
    );
}
