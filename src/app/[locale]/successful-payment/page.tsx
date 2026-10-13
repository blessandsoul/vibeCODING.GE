import type { Metadata } from 'next';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { Link } from '@/i18n/navigation';
import { APP_NAME } from '@/lib/constants/app.constants';

const TEXT: Record<string, { title: string; description: string; action: string }> = {
  ka: { title: 'გადახდის სტატუსი', description: 'ამ გვერდის გახსნა გადახდას არ ადასტურებს. გადახდის დასადასტურებლად მოგვწერეთ.', action: 'დაგვიკავშირდით' },
  en: { title: 'Payment status', description: 'Opening this page does not confirm a payment. Contact us to confirm the payment status.', action: 'Contact us' },
  ru: { title: 'Статус оплаты', description: 'Открытие этой страницы не подтверждает оплату. Напишите нам, чтобы уточнить её статус.', action: 'Связаться с нами' },
  de: { title: 'Zahlungsstatus', description: 'Diese Seite bestätigt keine Zahlung. Kontaktieren Sie uns, um den Zahlungsstatus zu klären.', action: 'Kontakt aufnehmen' },
  tr: { title: 'Ödeme durumu', description: 'Bu sayfanın açılması ödemeyi doğrulamaz. Ödeme durumunu öğrenmek için bize yazın.', action: 'Bize ulaşın' },
  fa: { title: 'وضعیت پرداخت', description: 'باز کردن این صفحه پرداخت را تأیید نمی‌کند. برای تأیید وضعیت پرداخت با ما تماس بگیرید.', action: 'تماس با ما' },
  zh: { title: '支付状态', description: '打开此页面并不代表付款已确认。请联系我们核实付款状态。', action: '联系我们' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = TEXT[locale] ?? TEXT.en;
  return {
    title: copy.title,
    description: copy.description,
    robots: { index: false, follow: false },
  };
}

// LEGACY_SOURCE_MAPPING: use the exact approved source legal/card surface.
// A frontend URL or query parameter must never serve as a payment receipt.
export default async function PaymentStatusPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = TEXT[locale] ?? TEXT.en;
  return (
    <div className="ainow-legal-page py-10 sm:py-16">
      <SectionContainer>
        <div className="dodo-glass-card mx-auto max-w-3xl p-5 sm:p-9">
          <p className="eyebrow text-xs uppercase tracking-[0.3em] text-[#525252]">{APP_NAME} by aiNOW</p>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">{copy.title}</h1>
          <p className="mt-6 leading-relaxed text-[#525252]">{copy.description}</p>
          <section className="dodo-glass-inset mt-6 rounded-2xl p-5">
            <Link href="/contact" className="dodo-glass-box dodo-glass-pill inline-flex min-h-11 shrink-0 self-start items-center justify-center px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white md:self-auto">{copy.action}</Link>
          </section>
        </div>
      </SectionContainer>
    </div>
  );
}
