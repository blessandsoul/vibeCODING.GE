/**
 * Short, localized industry labels for the niche landing links (the "AI chatbot
 * by industry" grid on /ai-chatboti and the footer column). Client-safe: labels
 * only, no page content, so it is cheap to import into client components.
 *
 * `slug` must match a NICHE_SLUGS entry in ./paths.ts. `featured` marks the
 * handful shown in the compact footer column (the rest live in the full grid).
 */
export type NicheCluster =
  | 'medical'
  | 'beauty'
  | 'auto'
  | 'hospitality'
  | 'home'
  | 'education'
  | 'services'
  | 'commerce';

export type NicheLink = {
  slug: string;
  ka: string;
  en: string;
  ru: string;
  featured?: boolean;
  // Related-industries grouping: a niche page links its same-cluster siblings.
  cluster: NicheCluster;
};

export const NICHE_LINKS: NicheLink[] = [
  { slug: 'ai-chatbot-stomatologiistvis', ka: 'სტომატოლოგია', en: 'Dental clinics', ru: 'Стоматология', featured: true, cluster: 'medical' },
  { slug: 'ai-chatbot-kosmetologiistvis', ka: 'კოსმეტოლოგია', en: 'Cosmetology', ru: 'Косметология', cluster: 'beauty' },
  { slug: 'ai-chatbot-silamazis-salonebistvis', ka: 'სილამაზის სალონები', en: 'Beauty salons', ru: 'Салоны красоты', featured: true, cluster: 'beauty' },
  { slug: 'ai-chatbot-samedicino-centrebistvis', ka: 'სამედიცინო ცენტრები', en: 'Medical centers', ru: 'Медцентры', featured: true, cluster: 'medical' },
  { slug: 'ai-chatbot-fitnesistvis', ka: 'ფიტნესი', en: 'Fitness and gyms', ru: 'Фитнес', featured: true, cluster: 'beauty' },
  { slug: 'ai-chatbot-spa-centrebistvis', ka: 'სპა და მასაჟი', en: 'Spa and massage', ru: 'Спа и массаж', cluster: 'beauty' },
  { slug: 'ai-chatbot-barbershopistvis', ka: 'ბარბერშოპები', en: 'Barbershops', ru: 'Барбершопы', cluster: 'beauty' },
  { slug: 'ai-chatbot-tatu-studiistvis', ka: 'ტატუ სტუდიები', en: 'Tattoo studios', ru: 'Тату-студии', cluster: 'beauty' },
  { slug: 'ai-chatbot-avtoservisistvis', ka: 'ავტოსერვისი', en: 'Auto service', ru: 'Автосервис', cluster: 'auto' },
  { slug: 'ai-chatbot-avtoimportistvis', ka: 'ავტოიმპორტი', en: 'Car import', ru: 'Автоимпорт', cluster: 'auto' },
  { slug: 'ai-chatbot-udzravi-qonebistvis', ka: 'უძრავი ქონება', en: 'Real estate', ru: 'Недвижимость', featured: true, cluster: 'commerce' },
  { slug: 'ai-chatbot-sastumroebistvis', ka: 'სასტუმროები', en: 'Hotels', ru: 'Отели', featured: true, cluster: 'hospitality' },
  { slug: 'ai-chatbot-turebistvis', ka: 'ტურები', en: 'Tour operators', ru: 'Туры', cluster: 'hospitality' },
  { slug: 'ai-chatbot-veterinariistvis', ka: 'ვეტერინარია', en: 'Vet clinics', ru: 'Ветеринария', cluster: 'medical' },
  { slug: 'ai-chatbot-enis-skolebistvis', ka: 'ენის სკოლები', en: 'Language schools', ru: 'Языковые школы', cluster: 'education' },
  { slug: 'ai-chatbot-avtoskolebistvis', ka: 'ავტოსკოლები', en: 'Driving schools', ru: 'Автошколы', cluster: 'education' },
  { slug: 'ai-chatbot-iuristebistvis', ka: 'იურისტები', en: 'Law firms', ru: 'Юристы', featured: true, cluster: 'services' },
  { slug: 'ai-chatbot-fizioterapiistvis', ka: 'ფიზიოთერაპია', en: 'Physiotherapy', ru: 'Физиотерапия', cluster: 'medical' },
  { slug: 'ai-chatbot-plastikuri-qirurgiistvis', ka: 'პლასტიკური ქირურგია', en: 'Plastic surgery', ru: 'Пластическая хирургия', cluster: 'medical' },
  { slug: 'ai-chatbot-dermatologiistvis', ka: 'დერმატოლოგია', en: 'Dermatology', ru: 'Дерматология', cluster: 'medical' },
  { slug: 'ai-chatbot-nutriciologistvis', ka: 'ნუტრიციოლოგია', en: 'Nutritionists', ru: 'Нутрициология', cluster: 'medical' },
  { slug: 'ai-chatbot-remontistvis', ka: 'რემონტი', en: 'Renovation', ru: 'Ремонт', cluster: 'home' },
  { slug: 'ai-chatbot-interieris-dizainistvis', ka: 'ინტერიერის დიზაინი', en: 'Interior design', ru: 'Дизайн интерьера', cluster: 'home' },
  { slug: 'ai-chatbot-saxlis-servisebistvis', ka: 'საოჯახო სერვისები', en: 'Home services', ru: 'Домашние услуги', cluster: 'home' },
  { slug: 'ai-chatbot-dasuftavebistvis', ka: 'დასუფთავება', en: 'Cleaning services', ru: 'Клининг', cluster: 'home' },
  { slug: 'ai-chatbot-ghonisdziebebistvis', ka: 'ივენთ სააგენტოები', en: 'Event agencies', ru: 'Event-агентства', cluster: 'services' },
  { slug: 'ai-chatbot-fotografebistvis', ka: 'ფოტოგრაფები', en: 'Photographers', ru: 'Фотографы', cluster: 'services' },
  { slug: 'ai-chatbot-kerdzo-skolebistvis', ka: 'კერძო სკოლები', en: 'Private schools', ru: 'Частные школы', cluster: 'education' },
  { slug: 'ai-chatbot-online-maghaziebistvis', ka: 'ონლაინ მაღაზიები', en: 'Online shops', ru: 'Онлайн-магазины', cluster: 'commerce' },
  { slug: 'ai-chatbot-restornebistvis', ka: 'რესტორნები', en: 'Restaurants', ru: 'Рестораны', featured: true, cluster: 'hospitality' },
];

/**
 * Same-cluster siblings for the "related industries" block on a niche page,
 * padded from the featured set when the cluster is small, so every page shows
 * at least `min` internal links. Never includes the page itself.
 */
export function relatedNiches(slug: string, min = 4, max = 6): NicheLink[] {
  const self = NICHE_LINKS.find((n) => n.slug === slug);
  if (!self) return [];
  const siblings = NICHE_LINKS.filter((n) => n.cluster === self.cluster && n.slug !== slug);
  const picked = siblings.slice(0, max);
  if (picked.length < min) {
    for (const n of NICHE_LINKS) {
      if (picked.length >= min) break;
      if (n.slug === slug || picked.some((p) => p.slug === n.slug)) continue;
      if (n.featured) picked.push(n);
    }
  }
  return picked;
}

export function nicheLabel(n: NicheLink, locale: string): string {
  if (locale === 'ka') return n.ka;
  if (locale === 'ru') return n.ru;
  return n.en; // en for en + all machine-translated locales (de/tr/fa/zh)
}
