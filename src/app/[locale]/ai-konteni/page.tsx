import type { Metadata } from 'next';
import Link from 'next/link';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { FaqPageSchema } from '@/components/seo/FaqPageSchema';
import { PRICING_PRODUCTS } from '@/features/pricing/pricing-data';

type Props = {
  params: Promise<{ locale: string }>;
};

const PATH = '/ai-konteni';
const SITE = 'https://ainow.ge';

type Content = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  lead: string;
  features: { h: string; p: string }[];
  pricingTitle: string;
  pricingLead: string;
  tiers: { name: string; price: string; perks: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaLead: string;
  ctaButton: string;
  pricingLink: string;
  pricingLinkLabel: string;
};

const WORDING: Record<string, string[]> = {
  ka: ['AI კონტენტი ბიზნესისთვის', 'სარეკლამო ვიდეოები', 'პროდუქტის პრომო-ვიდეო', 'გენერაციული UGC-ვიდეო', 'პერსონალური AI-ავატარი', 'ყოველთვიური პაკეტი', 'ვიდეო პროდუქტის ან სივრცის საჩვენებლად, წამყვანის გარეშე.', 'გენერირებული პერსონაჟი აჩვენებს ან იყენებს პროდუქტს. ეს არ არის რეალური მომხმარებლის შეფასება.', 'თქვენთვის შექმნილი მუდმივი სახე ვიდეოში.', 'მოცულობა, ვადა და ფასი ინდივიდუალურად, ხელშეკრულებით განისაზღვრება.', 'შეთანხმებით', 'ერთ ვიდეოზე', 'ფორმატები და ფასები', 'საჯარო ფასები ერთ ვიდეოზეა. რეგულარული წარმოებისთვის თვიურ პაკეტს ცალკე ვათანხმებთ.', 'ხშირად დასმული კითხვები', 'რა შედის ვიდეოს ფასში?', 'შეთანხმებული ფორმატის ერთი ვიდეო და შესწორების ერთი ეტაპი. რეალური გადაღება და მსახიობის მომსახურება არ შედის.', 'როდის იქნება ვიდეო მზად?', 'ვადას სამუშაოს დაწყებამდე ვათანხმებთ სცენარის, მასალებისა და სირთულის მიხედვით.', 'რა მოგაწოდოთ დასაწყებად?', 'მოგვწერეთ, რას რეკლამირებთ, სად გამოიყენებთ ვიდეოს და რა მასალა გაქვთ.', 'განვიხილოთ თქვენი ვიდეო?', 'განვიხილოთ ამოცანა', 'ყველა პროდუქტის ფასები'],
  en: ['AI content for business', 'Advertising videos', 'Product promo video', 'Generated UGC video', 'Personal AI avatar', 'Monthly package', 'Show a product or space without a presenter.', 'A generated character demonstrates your product. This is not a real customer testimonial.', 'A consistent personal presenter for your videos.', 'Scope, timing and price are agreed individually by contract.', 'By agreement', 'per video', 'Formats and prices', 'Public prices cover one video. Recurring production is agreed as a separate monthly package.', 'Common questions', 'What does the video price include?', 'One video in the agreed format and one revision round. Live filming and actors are not included.', 'When will the video be ready?', 'We agree the timeline before work starts, based on the script, materials and complexity.', 'What should I provide?', 'Tell us what you advertise, where the video will be used and what materials you have.', 'Discuss your next video?', 'Discuss the task', 'All product prices'],
  ru: ['AI-контент для бизнеса', 'Рекламные видео', 'Промо-видео продукта', 'Генеративное UGC-видео', 'Персональный AI-аватар', 'Месячный пакет', 'Показываем продукт или пространство без ведущего.', 'Сгенерированный персонаж демонстрирует продукт. Это не отзыв реального покупателя.', 'Постоянный персональный ведущий для ваших видео.', 'Объём, сроки и стоимость определяются индивидуально в договоре.', 'По договору', 'за видео', 'Форматы и цены', 'Публичные цены указаны за одно видео. Регулярное производство согласуем отдельным месячным пакетом.', 'Частые вопросы', 'Что входит в стоимость видео?', 'Одно видео выбранного формата и один этап правок. Реальная съёмка и услуги актёров не входят.', 'Когда будет готово видео?', 'Срок согласуем до начала работы с учётом сценария, материалов и сложности.', 'Что нужно предоставить?', 'Расскажите, что рекламируете, где будете использовать видео и какие материалы уже есть.', 'Обсудим ваше видео?', 'Обсудить задачу', 'Цены всех продуктов'],
  de: ['KI-Content für Unternehmen', 'Werbevideos', 'Produktvideo', 'Generiertes UGC-Video', 'Persönlicher KI-Avatar', 'Monatspaket', 'Zeigen Sie ein Produkt oder einen Raum ohne Moderator.', 'Eine generierte Person zeigt Ihr Produkt. Dies ist keine echte Kundenbewertung.', 'Ein wiedererkennbarer persönlicher Moderator für Ihre Videos.', 'Umfang, Termin und Preis werden individuell vertraglich vereinbart.', 'Nach Vereinbarung', 'pro Video', 'Formate und Preise', 'Öffentliche Preise gelten pro Video. Regelmäßige Produktion wird als separates Monatspaket vereinbart.', 'Häufige Fragen', 'Was ist im Videopreis enthalten?', 'Ein Video im vereinbarten Format und eine Korrekturrunde. Reale Dreharbeiten und Schauspieler sind nicht enthalten.', 'Wann ist das Video fertig?', 'Den Termin vereinbaren wir vor Arbeitsbeginn anhand von Skript, Material und Aufwand.', 'Was soll ich bereitstellen?', 'Beschreiben Sie das Produkt, den Einsatzort des Videos und vorhandenes Material.', 'Ihr nächstes Video besprechen?', 'Aufgabe besprechen', 'Alle Produktpreise'],
  tr: ['İşletmeler için yapay zekâ içeriği', 'Reklam videoları', 'Ürün tanıtım videosu', 'Yapay zekâ ile UGC videosu', 'Kişisel yapay zekâ avatarı', 'Aylık paket', 'Ürün veya mekânı sunucu olmadan gösterin.', 'Yapay zekâ ile oluşturulan bir kişi ürünü gösterir. Bu, gerçek bir müşteri yorumu değildir.', 'Videolarınız için tutarlı bir kişisel sunucu.', 'Kapsam, süre ve fiyat sözleşmede ayrı ayrı belirlenir.', 'Anlaşmaya göre', 'video başına', 'Formatlar ve fiyatlar', 'Yayımlanan fiyatlar tek video içindir. Düzenli üretim için aylık paket ayrıca belirlenir.', 'Sık sorulan sorular', 'Video fiyatına neler dahil?', 'Seçilen formatta bir video ve bir düzeltme aşaması. Gerçek çekim ve oyuncu hizmeti dahil değildir.', 'Video ne zaman hazır olur?', 'İşe başlamadan önce senaryo, malzemeler ve işin kapsamına göre süreyi belirleriz.', 'Ne göndermeliyim?', 'Neyi tanıttığınızı, videoyu nerede kullanacağınızı ve elinizdeki malzemeleri belirtin.', 'Videonuzu konuşalım mı?', 'İhtiyacı görüşün', 'Tüm ürün fiyatları'],
  fa: ['محتوای هوش مصنوعی برای کسب‌وکار', 'ویدیوهای تبلیغاتی', 'ویدیوی معرفی محصول', 'ویدیوی UGC تولیدشده', 'آواتار شخصی هوش مصنوعی', 'بسته ماهانه', 'نمایش محصول یا فضا بدون مجری.', 'یک شخصیت تولیدشده محصول را نمایش می‌دهد؛ این نظر یک مشتری واقعی نیست.', 'مجری شخصی ثابت برای ویدیوهای شما.', 'حجم کار، زمان و قیمت به‌صورت جداگانه در قرارداد تعیین می‌شود.', 'طبق توافق', 'برای هر ویدیو', 'قالب‌ها و قیمت‌ها', 'قیمت‌های عمومی برای یک ویدیو هستند. تولید مستمر با بسته ماهانه جداگانه توافق می‌شود.', 'پرسش‌های رایج', 'قیمت ویدیو شامل چیست؟', 'یک ویدیو با قالب توافق‌شده و یک مرحله اصلاح. فیلم‌برداری واقعی و بازیگر شامل نمی‌شود.', 'ویدیو چه زمانی آماده می‌شود؟', 'پیش از شروع، زمان را بر اساس سناریو، فایل‌ها و پیچیدگی کار توافق می‌کنیم.', 'چه چیزی باید ارائه کنم؟', 'بگویید چه چیزی را تبلیغ می‌کنید، ویدیو کجا استفاده می‌شود و چه فایل‌هایی دارید.', 'درباره ویدیوی شما صحبت کنیم؟', 'بررسی درخواست', 'قیمت همه محصولات'],
  zh: ['面向企业的 AI 内容', '广告视频', '产品宣传视频', 'AI 生成 UGC 视频', '专属 AI 数字人', '月度套餐', '无需主持人，展示产品或空间。', '由生成的人物演示产品，并非真实客户评价。', '为视频建立一致的专属出镜形象。', '工作范围、时间和价格按项目协商并写入合同。', '按合同协商', '每个视频', '形式与价格', '公开价格按单个视频计费。持续制作可另行协商月度套餐。', '常见问题', '视频价格包含什么？', '一个约定形式的视频和一轮修改，不含实景拍摄及真人演员。', '视频何时完成？', '开始前根据脚本、素材和复杂程度确认时间。', '需要提供什么？', '请说明宣传对象、视频用途以及已有素材。', '聊聊您的视频需求？', '讨论需求', '所有产品价格'],
};

const CONTENT: Record<string, Content> = Object.fromEntries(
  Object.entries(WORDING).map(([locale, w]) => {
    const plans = PRICING_PRODUCTS.find(product => product.id === 'aicontent')!.plans;
    const prices = plans.map(plan => plan.price === 'შეთანხმებით' ? w[10] : plan.price.replace('200 ₾-დან', '≥200 ₾'));
    return [locale, {
      title: w[0], description: `${w[1]}. ${w[13]} ${w[9]}`, eyebrow: 'aiCONTENT',
      h1: w[0], h1Accent: '', lead: w[13],
      features: [0, 1, 2, 3].map(i => ({ h: w[2 + i], p: w[6 + i] })),
      pricingTitle: w[12], pricingLead: w[13],
      tiers: plans.map((plan, i) => ({ name: w[2 + i], price: prices[i], perks: i === 3 ? w[9] : w[11] })),
      faqTitle: w[14], faq: [{ q: w[15], a: w[16] }, { q: w[17], a: w[18] }, { q: w[19], a: w[20] }],
      ctaLead: w[21], ctaButton: w[22], pricingLink: locale === 'ka' ? '/pricing' : `/${locale}/pricing`, pricingLinkLabel: w[23],
    }];
  }),
);
function pick(locale: string): Content {
  return CONTENT[locale] ?? CONTENT.ka;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = pick(locale);
  const canonical = locale === 'ka' ? `${SITE}${PATH}` : `${SITE}/${locale}${PATH}`;

  return {
    title: { absolute: c.title },
    description: c.description,
    alternates: { canonical },
    robots: { index: false, follow: false },
    openGraph: { title: c.title, description: c.description, url: canonical },
    twitter: { card: 'summary_large_image', title: c.title, description: c.description },
  };
}

export default async function AiKonteniPage({ params }: Props) {
  const { locale } = await params;
  const c = pick(locale);
  const canonical = locale === 'ka' ? `${SITE}${PATH}` : `${SITE}/${locale}${PATH}`;
  const contactHref = locale === 'ka' ? '/contact' : `/${locale}/contact`;

  return (
    <>
      <ServiceSchema
        name={c.title}
        description={c.description}
        url={canonical}
        serviceType="AI Content Production"
        offers={c.tiers.slice(0, 3).map((t) => ({ name: t.name, price: t.price.match(/\d+/)?.[0] ?? '', unitText: 'video' }))}
      />
      <FaqPageSchema items={c.faq} />

      <section className="relative py-16 md:py-24">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{c.eyebrow}</p>
            <h1 className="font-display mt-5 text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 dark:text-white md:mt-6 md:text-4xl lg:text-5xl">
              {c.h1} <span className="text-blue-600 dark:text-blue-400">{c.h1Accent}</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 md:mt-6 md:text-lg">{c.lead}</p>
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {c.features.map((f) => (
              <article key={f.h} className="dodo-glass-box p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-2xl">{f.h}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">{f.p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">{c.pricingTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">{c.pricingLead}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {c.tiers.map((t) => (
                <div key={t.name} className="dodo-glass-box p-6">
                  <p className="eyebrow text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{t.name}</p>
                  <p className="font-display mt-2 text-2xl font-bold text-slate-950 dark:text-white">{t.price}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{t.perks}</p>
                </div>
              ))}
            </div>
            <p className="mt-6">
              <Link href={c.pricingLink} className="text-sm font-semibold text-blue-600 underline-offset-4 hover:text-blue-700 hover:underline dark:text-blue-300 dark:hover:text-blue-200">
                {c.pricingLinkLabel} →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">{c.faqTitle}</h2>
            <div className="mt-8 space-y-6">
              {c.faq.map((item) => (
                <div key={item.q} className="dodo-glass-box p-5 md:p-6">
                  <h3 className="font-display text-base font-semibold text-slate-950 dark:text-white md:text-lg">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
          <div className="dodo-glass-card mx-auto max-w-2xl p-8 text-center md:p-12">
            <div className="flex flex-col items-center gap-6">
              <p className="font-display text-lg font-semibold text-slate-950 dark:text-white md:text-xl">{c.ctaLead}</p>
              <Link
                href={contactHref}
                className="dodo-glass-box inline-flex items-center justify-center rounded-full border-blue-500/60 !bg-linear-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-[transform,filter,box-shadow] duration-200 hover:!bg-blue-700 hover:brightness-105 active:scale-95 dark:border-blue-400/50 dark:!bg-linear-to-r dark:from-blue-500 dark:via-blue-500 dark:to-blue-600 dark:text-slate-950 dark:hover:!bg-blue-400"
              >
                {c.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
