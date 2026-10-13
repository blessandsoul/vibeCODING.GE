import type { ChatPlanSlug } from './chat-plans';

export interface ChatPricingPlanCopy {
  summary: string;
  serviceInfo: string;
  features: readonly [string, string, string, string];
  featureInfo: readonly [string, string, string, string];
  catalogValue: string;
  qualification: string;
  booking: string;
  automation: string;
  support: string;
  custom: string;
}

interface ChatPricingItem {
  title: string;
  text: string;
  info: string;
}

interface ChatPricingFaqItem {
  question: string;
  answer: string;
}

export interface ChatPricingCopy {
  serviceLevel: string;
  repliesPerMonth: string;
  repliesInfo: string;
  infoLabel: string;
  swipeHint: string;
  previousPlan: string;
  nextPlan: string;
  plansLabel: string;
  enterpriseBadge: string;
  enterpriseCta: string;
  ragKnowledge: string;
  aiCallBonus: {
    label: string;
    value: string;
    unit: string;
    caption: string;
    info: string;
    cta: string;
  };
  planHighlights: Record<Exclude<ChatPlanSlug, 'enterprise'>, {
    label: string;
    value: string;
    caption: string;
  }>;
  disclaimer: string;
  customPrice: string;
  customVolume: string;
  customCta: string;
  cardLabels: {
    accounts: string;
    catalog: string;
    updates: string;
  };
  plans: Record<ChatPlanSlug, ChatPricingPlanCopy>;
  foundation: {
    eyebrow: string;
    title: string;
    description: string;
    visualTitle: string;
    visualText: string;
    items: readonly ChatPricingItem[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly (ChatPricingItem & { availability: string })[];
  };
  comparison: {
    eyebrow: string;
    title: string;
    description: string;
    feature: string;
    included: string;
    notIncluded: string;
    unlimited: string;
    rows: readonly {
      id:
        | 'service'
        | 'replies'
        | 'accounts'
        | 'catalog'
        | 'updates'
        | 'qualification'
        | 'booking'
        | 'automation'
        | 'channels'
        | 'unifiedInbox'
        | 'manualControl'
        | 'leadCollection'
        | 'websiteWidget'
        | 'photoOcr'
        | 'voiceMessages'
        | 'aiCallMinutes'
        | 'instagramActions'
        | 'followUp'
        | 'analytics'
        | 'support'
        | 'custom';
      label: string;
      info: string;
    }[];
  };
  guide: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly { title: string; text: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly ChatPricingFaqItem[];
  };
}

const KA_COPY: ChatPricingCopy = {
  serviceLevel: 'Nemo დონე',
  repliesPerMonth: 'პასუხი თვეში',
  repliesInfo: 'ერთ თვეში კლიენტებისთვის გაგზავნილი პასუხების ლიმიტი.',
  infoLabel: '{item}: განმარტება',
  swipeHint: 'გადაფურცლეთ და შეადარეთ პაკეტები',
  previousPlan: 'წინა პაკეტი',
  nextPlan: 'შემდეგი პაკეტი',
  plansLabel: 'აირჩიეთ aiCHATS-ის პაკეტი',
  enterpriseBadge: 'სრული პაკეტი',
  enterpriseCta: 'აირჩიეთ სრული პაკეტი',
  ragKnowledge: 'ცოდნის ბაზა',
  aiCallBonus: {
    label: 'aiCALL-ის ბონუსი',
    value: '100 წუთი თვეში',
    unit: 'წუთი',
    caption: 'ყოველთვე შედის',
    info: 'Enterprise პაკეტში ყოველთვე შედის aiCALL-ის 100 სასაუბრო წუთი. დამატებითი წუთები და ფუნქციები aiCALL-ის ცალკე პაკეტით ემატება.',
    cta: 'ნახეთ aiCALL',
  },
  planHighlights: {
    starter: {
      label: 'დაწყება',
      value: 'გამართვა შედის',
      caption: 'aiNOW აწყობს პირველ წესებს',
    },
    business: {
      label: 'ცოდნის ბაზა',
      value: 'თქვენი ცოდნით პასუხობს',
      caption: '1 000 განახლება თვეში',
    },
    premium: {
      label: 'მუდმივი მხარდაჭერა',
      value: 'aiNOW აახლებს',
      caption: 'პასუხებს, წესებსა და აქციებს',
    },
    custom: {
      label: 'ინდივიდუალური გეგმა',
      value: 'თქვენზე მორგებული',
      caption: 'მოცულობა და ინტეგრაციები შეთანხმებით',
    },
  },
  customPrice: 'შეთანხმებით',
  customVolume: 'მორგებული',
  customCta: 'მოითხოვეთ ინდივიდუალური გეგმა',
  cardLabels: { accounts: 'ანგარიშები', catalog: 'კატალოგი', updates: 'განახლებები' },
  disclaimer:
    'კატალოგის დიაპაზონებია: Starter 20-100, Business 100-500, Premium 500-2 000 და Enterprise 2 000-5 000 პროდუქტი. დიაპაზონის ზედა რიცხვი პაკეტში ჩართული ლიმიტია. ერთი პროდუქტის ფერი, ზომა და სხვა ვარიანტი ცალკე პროდუქტად არ ითვლება. 5 000-ზე მეტი პროდუქტის ან არასტანდარტული პროცესისთვის აირჩიეთ Custom.',
  plans: {
    starter: {
      summary: 'ერთი ანგარიშისა და მცირე კატალოგისთვის.',
      serviceInfo: 'Nemo Lite პასუხობს მარტივ და განმეორებად კითხვებს დამტკიცებული ინფორმაციით.',
      features: [
        '1 დაკავშირებული ანგარიში',
        '20-100 პროდუქტი',
        'კლიენტის მონაცემების შენახვა',
        'საწყისი გამართვა',
      ],
      featureInfo: [
        'Instagram-ის თითოეული გვერდი, WhatsApp-ის ნომერი, Telegram-ის ბოტი ან საიტის ჩატი ერთ ანგარიშად ითვლება.',
        'კატალოგი ხელით ემატება. ერთი პროდუქტის ფერი, ზომა და სხვა ვარიანტი ცალკე პროდუქტად არ ითვლება.',
        'aiCHATS ინახავს კლიენტის სახელს, ნომერს, მოთხოვნასა და შემდეგ ნაბიჯს.',
        'aiNOW აწყობს საწყის პასუხებსა და წესებს. შემდგომი რეგულარული ცვლილებები ამ პაკეტში არ შედის.',
      ],
      catalogValue: '20-100 პროდუქტი',
      qualification: 'მარტივი',
      booking: 'არ შედის',
      automation: 'არ შედის',
      support: 'პირველადი',
      custom: 'არ შედის',
    },
    business: {
      summary: 'რამდენიმე არხის, ცოდნის ბაზისა და ჩაწერისთვის.',
      serviceInfo: 'Nemo Smart იყენებს ცოდნის ბაზას, აფასებს ლიდს და ქმნის ჩაწერას.',
      features: [
        '3 დაკავშირებული ანგარიში',
        '100-500 პროდუქტი',
        'ცოდნის ბაზა და 1 000 განახლება',
        'ლიდის შეფასება და ჩაწერა',
      ],
      featureInfo: [
        'Instagram-ის თითოეული გვერდი, WhatsApp-ის ნომერი, Telegram-ის ბოტი ან საიტის ჩატი ცალკე ანგარიშად ითვლება.',
        'Business განკუთვნილია 100-დან 500-მდე ძირითადი პროდუქტისა და მომსახურებისთვის.',
        'aiCHATS პასუხს თქვენს ცოდნის ბაზაში პოულობს. თვეში 1 000-მდე ჩანაწერის დამატება ან შეცვლა შეგიძლიათ.',
        'სისტემა სვამს შეთანხმებულ კითხვებს, ინახავს პასუხებს და აჩვენებს შემდეგ ნაბიჯს.',
      ],
      catalogValue: '100-500 პროდუქტი',
      qualification: 'შედის',
      booking: 'შედის',
      automation: 'არ შედის',
      support: 'პირველადი',
      custom: 'არ შედის',
    },
    premium: {
      summary: 'დიდი კატალოგის, რთული გაყიდვებისა და მუდმივი მხარდაჭერისთვის.',
      serviceInfo: 'Nemo Pro მართავს მრავალეტაპიან საუბარს და ხშირად განახლებად ცოდნის ბაზას.',
      features: [
        '5 დაკავშირებული ანგარიში',
        '500-2 000 პროდუქტი',
        '4 000 განახლება თვეში',
        'მუდმივი მხარდაჭერა',
      ],
      featureInfo: [
        'ხუთამდე დაკავშირებული ანგარიში ერთ სამართავ სივრცეში ერთიანდება.',
        'Premium განკუთვნილია 500-დან 2 000-მდე ძირითადი პროდუქტისა და მომსახურებისთვის.',
        'თვეში 4 000-მდე ფასის, მარაგის, აღწერის ან მომსახურების ჩანაწერის განახლება შეგიძლიათ.',
        'შეთანხმებული მოცულობით aiNOW ცვლის პასუხებს, აქციებსა და სამუშაო წესებს.',
      ],
      catalogValue: '500-2 000 პროდუქტი',
      qualification: 'შედის',
      booking: 'შედის',
      automation: 'გაფართოებული',
      support: 'მუდმივი',
      custom: 'არ შედის',
    },
    enterprise: {
      summary: 'ყველაზე დიდი მოცულობის, შეუზღუდავი მოქმედებებისა და ინდივიდუალური პროცესებისთვის.',
      serviceInfo: 'Nemo Ultra განკუთვნილია დიდი დატვირთვისა და ბიზნესზე მორგებული პროცესებისთვის.',
      features: [
        '10 დაკავშირებული ანგარიში',
        '2 000-5 000 პროდუქტი',
        '10 000 განახლება თვეში',
        'ახალი ფუნქციის მოთხოვნა',
      ],
      featureInfo: [
        'ათამდე დაკავშირებული ანგარიში ერთ სამართავ სივრცეში ერთიანდება.',
        'Enterprise განკუთვნილია 2 000-დან 5 000-მდე ძირითადი პროდუქტისა და მომსახურებისთვის.',
        'თვეში 10 000-მდე ჩანაწერის დამატება ან შეცვლა შეგიძლიათ.',
        'შეგიძლიათ მოითხოვოთ ახალი ფუნქციის შეფასება. მისი შექმნა ცალკე შეთანხმების შემდეგ იწყება.',
      ],
      catalogValue: '2 000-5 000 პროდუქტი',
      qualification: 'შედის',
      booking: 'შედის',
      automation: 'ინდივიდუალური',
      support: 'პრიორიტეტული',
      custom: 'შედის',
    },
    custom: {
      summary: '5 000-ზე მეტი პროდუქტის ან არასტანდარტული პროცესისთვის.',
      serviceInfo: 'Nemo Custom თქვენს მოცულობას, არხებსა და ინტეგრაციებს ერგება.',
      features: [
        'ანგარიშები',
        '5 000+ პროდუქტი',
        'განახლებები',
        'ინტეგრაციები',
      ],
      featureInfo: [
        'ანგარიშების რაოდენობა თქვენი არხებისა და სამუშაო პროცესის მიხედვით განისაზღვრება.',
        'Custom განკუთვნილია 5 000-ზე მეტი ძირითადი პროდუქტის ან რთული კატალოგისთვის.',
        'განახლების სიხშირე და რაოდენობა თქვენი კატალოგის ცვლილებების მიხედვით შეთანხმდება.',
        'ინტეგრაციები, მონაცემთა წყაროები და ახალი ფუნქციები ცალკე შეფასდება.',
      ],
      catalogValue: '5 000+ · ინდივიდუალური',
      qualification: 'შედის',
      booking: 'შედის',
      automation: 'ინდივიდუალური',
      support: 'ინდივიდუალური',
      custom: 'შედის',
    },
  },
  foundation: {
    eyebrow: 'ყველა პაკეტში',
    title: 'ძირითადი ფუნქციები პირველივე დღიდან.',
    description:
      'ნებისმიერ პაკეტში aiCHATS პასუხობს თქვენი ინფორმაციით, ინახავს ლიდს და საჭიროებისას საუბარს თანამშრომელს გადასცემს.',
    visualTitle: 'ყველა საუბარი ერთ სივრცეში',
    visualText:
      'Instagram, Messenger, WhatsApp, Telegram და საიტის ჩატი ერთ სამართავ სივრცეში ერთიანდება.',
    items: [
      {
        title: 'პასუხები თქვენი ინფორმაციით',
        text: 'ფასები, მომსახურებები, წესები და სამუშაო საათები.',
        info: 'aiCHATS მხოლოდ თქვენ მიერ დამტკიცებულ ინფორმაციაზე დაყრდნობით პასუხობს.',
      },
      {
        title: 'კლიენტის მონაცემები',
        text: 'სახელი, ნომერი, მოთხოვნა და შემდეგი ნაბიჯი ინახება.',
        info: 'კლიენტის მონაცემები და მოთხოვნის მდგომარეობა ერთ ჩანაწერში იყრის თავს.',
      },
      {
        title: 'საუბრის გადაბარება',
        text: 'რთულ ან გაურკვეველ შემთხვევას თანამშრომელი აგრძელებს.',
        info: 'თქვენ განსაზღვრავთ, როდის უნდა შეჩერდეს ავტომატური პასუხი და ჩაერთოს ადამიანი.',
      },
      {
        title: 'ყველა დიალოგი ერთად',
        text: 'არხების საუბრები ერთ ადგილას ჩანს.',
        info: 'ყველა დაკავშირებული არხის დიალოგს ერთ სამუშაო სივრცეში ხედავთ.',
      },
      {
        title: 'თქვენ ადგენთ წესებს',
        text: 'წინასწარ წყვეტთ, რას უპასუხოს aiCHATS-მა.',
        info: 'თქვენ ადგენთ პასუხებს, შეზღუდვებსა და ადამიანთან გადაცემის პირობებს.',
      },
      {
        title: 'გასაგები შედეგები',
        text: 'ხედავთ დიალოგებს, ლიდებსა და არხების მუშაობას.',
        info: 'ერთ ეკრანზე ჩანს პასუხების, საუბრების, ლიდებისა და არხების ძირითადი მაჩვენებლები.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'რა შეუძლია aiCHATS-ს',
    title: 'პასუხიდან ჩაწერამდე, ერთ სისტემაში.',
    description:
      'aiCHATS პასუხობს კლიენტს, ინახავს საკონტაქტო მონაცემებს, აჩვენებს შემდეგ ნაბიჯს და საჭიროებისას საქმეს თანამშრომელს გადასცემს.',
    items: [
      {
        title: 'ყველა არხი ერთ სივრცეში',
        text: 'Instagram, Messenger, WhatsApp, Telegram და საიტის ჩატი.',
        info: 'ყველა დაკავშირებული ანგარიშის საუბარს ერთ სამუშაო სივრცეში ხედავთ.',
        availability: 'ყველა გეგმა',
      },
      {
        title: 'საუბრის ხელით გაგრძელება',
        text: 'თანამშრომელს საუბრის გადაბარება ნებისმიერ დროს შეუძლია.',
        info: 'გადაბარების შემდეგ aiCHATS ამ დიალოგში პასუხს წყვეტს და საუბარს თანამშრომელი აგრძელებს.',
        availability: 'ყველა გეგმა',
      },
      {
        title: 'ლიდი და შემდეგი ნაბიჯი',
        text: 'სახელი, ნომერი, მოთხოვნა და მდგომარეობა ერთ ჩანაწერში.',
        info: 'ლიდის ჩანაწერში ჩანს კლიენტის მონაცემები, მოთხოვნა და შემდგომი მოქმედება.',
        availability: 'ყველა გეგმა',
      },
      {
        title: 'ჩაწერა კალენდარში',
        text: 'თავისუფალი დროის პოვნა და ვიზიტის შექმნა.',
        info: 'aiCHATS ამოწმებს თავისუფალ დროს, ქმნის ჩაწერას ან თანამშრომლის დასტურს ითხოვს.',
        availability: 'Business+',
      },
      {
        title: 'Instagram-ის კომენტარები და Story-ზე პასუხები',
        text: 'კომენტარზე პასუხი და საჭიროებისას პირად საუბარში გადასვლა.',
        info: 'aiCHATS პასუხობს შეთანხმებული წესებით და საჭიროებისას კლიენტს პირად საუბარში გადაიყვანს.',
        availability: 'ყველა გეგმა',
      },
      {
        title: 'კლიენტთან ხელახლა დაკავშირება',
        text: 'პასუხის გარეშე დარჩენილ კლიენტთან შეთანხმებული შეხსენება.',
        info: 'თქვენ წინასწარ ამტკიცებთ, როდის და რა ტექსტით დაუკავშირდეს aiCHATS კლიენტს ხელახლა.',
        availability: 'ყველა გეგმა',
      },
      {
        title: 'საიტის ჩატის მორგება',
        text: 'თქვენი ფერი, მისალმება და სწრაფი კითხვები.',
        info: 'საიტის ჩატი თქვენი ბრენდისა და კლიენტის გზის მიხედვით ეწყობა.',
        availability: 'ყველა გეგმა',
      },
      {
        title: 'კატალოგის ავტომატური განახლება',
        text: 'ფასი, მარაგი და აღწერა შეთანხმებული წყაროდან ახლდება.',
        info: 'Premium და Enterprise პაკეტებში aiCHATS მონაცემებს შეთანხმებული წყაროდან ავტომატურად აახლებს.',
        availability: 'Premium+',
      },
    ],
  },
  comparison: {
    eyebrow: 'პაკეტების შედარება',
    title: 'ნახეთ, რას იღებთ თითოეულ ფასად.',
    description:
      'ერთ ცხრილში შეადარეთ პასუხები, ანგარიშები, კატალოგი, ავტომატიზაცია და მხარდაჭერა.',
    feature: 'მახასიათებელი',
    included: 'შედის',
    notIncluded: 'არ შედის',
    unlimited: 'შეუზღუდავი',
    rows: [
      {
        id: 'service',
        label: 'Nemo დონე',
        info: 'Nemo დონე აჩვენებს, რამდენად რთულ სამუშაოს, დიდ ცოდნის ბაზასა და მხარდაჭერას იღებთ.',
      },
      {
        id: 'replies',
        label: 'AI პასუხი თვეში',
        info: 'ერთ თვეში კლიენტებისთვის გაგზავნილი პასუხების ლიმიტი.',
      },
      {
        id: 'accounts',
        label: 'დაკავშირებული ანგარიში',
        info: 'Instagram-ის თითოეული გვერდი, WhatsApp-ის ნომერი, Telegram-ის ბოტი და საიტის ჩატი ცალკე ანგარიშად ითვლება.',
      },
      {
        id: 'catalog',
        label: 'კატალოგის მოცულობა',
        info: 'Starter-ში ინფორმაცია ხელით ემატება, Business-იდან ცოდნის ბაზა მუშაობს, Premium-იდან კი მონაცემების ავტომატურად განახლებაც შეგიძლიათ.',
      },
      {
        id: 'updates',
        label: 'კატალოგის განახლება თვეში',
        info: 'რამდენი პროდუქტის, ფასის, მარაგის ან აღწერის ჩანაწერის დამატება ან შეცვლა შეგიძლიათ ერთ თვეში.',
      },
      {
        id: 'qualification',
        label: 'ლიდის შეფასება',
        info: 'aiCHATS სვამს შეთანხმებულ კითხვებს, ინახავს პასუხებს და აჩვენებს შემდეგ ნაბიჯს.',
      },
      {
        id: 'booking',
        label: 'ჩაწერა და კალენდარი',
        info: 'aiCHATS პოულობს თავისუფალ დროს, ქმნის ჩაწერას ან თანამშრომლის დასტურს ითხოვს.',
      },
      {
        id: 'automation',
        label: 'გაფართოებული ავტომატიზაცია',
        info: 'მრავალეტაპიანი პროცესები, ინდივიდუალური წესები და მონაცემების ავტომატური განახლება.',
      },
      {
        id: 'channels',
        label: 'Instagram, Messenger, WhatsApp, Telegram და საიტი',
        info: 'ამ არხებიდან შეგიძლიათ დააკავშიროთ იმდენი ანგარიში, რამდენსაც არჩეული პაკეტი მოიცავს.',
      },
      {
        id: 'unifiedInbox',
        label: 'ყველა დიალოგი ერთ სივრცეში',
        info: 'ყველა დაკავშირებული არხის საუბარს ერთ სამუშაო სივრცეში ხედავთ.',
      },
      {
        id: 'manualControl',
        label: 'საუბრის ხელით გაგრძელება',
        info: 'თანამშრომელს საუბრის გადაბარება და საკუთარი პასუხით გაგრძელება ნებისმიერ დროს შეუძლია.',
      },
      {
        id: 'leadCollection',
        label: 'ლიდის მონაცემები და მდგომარეობა',
        info: 'ინახება კლიენტის სახელი, ნომერი, მოთხოვნა, მდგომარეობა და შემდეგი ნაბიჯი.',
      },
      {
        id: 'websiteWidget',
        label: 'საიტის ჩატის მორგება',
        info: 'შეგიძლიათ შეცვალოთ ჩატის ფერი, მისალმება, სწრაფი კითხვები და ჩვენების გვერდები.',
      },
      {
        id: 'photoOcr',
        label: 'ფოტოსა და ტექსტის ამოცნობა (OCR)',
        info: 'თვიური ლიმიტი: Starter 100 ფოტო, Business 250, Premium 1 500, Enterprise შეუზღუდავი.',
      },
      {
        id: 'voiceMessages',
        label: 'ჩატში გამოგზავნილი ხმოვანი შეტყობინებები',
        info: 'ეს ფუნქცია მხოლოდ ჩატში გამოგზავნილ ხმოვან შეტყობინებებს ეხება და სატელეფონო ზარებს არ მოიცავს. თვიური ლიმიტი: Starter 100, Business 250, Premium 1 500, Enterprise შეუზღუდავი.',
      },
      {
        id: 'aiCallMinutes',
        label: 'aiCALL-ის სასაუბრო წუთები',
        info: 'Enterprise პაკეტში ბონუსად შედის aiCALL-ის 100 წუთი თვეში. aiCALL დამოუკიდებელი სატელეფონო პროდუქტია; დამატებითი წუთები და ფუნქციები ცალკე პაკეტით არის ხელმისაწვდომი.',
      },
      {
        id: 'instagramActions',
        label: 'Instagram-ის კომენტარები და Story-ზე პასუხები',
        info: 'თვიური ლიმიტი: Starter 100 მოქმედება, Business 250, Premium 1 500, Enterprise შეუზღუდავი.',
      },
      {
        id: 'followUp',
        label: 'კლიენტთან ხელახლა დაკავშირება',
        info: 'თვიური ლიმიტი: Starter 100 დაკავშირება, Business 250, Premium 1 500, Enterprise შეუზღუდავი.',
      },
      {
        id: 'analytics',
        label: 'შედეგების ანალიტიკა',
        info: 'ხედავთ პასუხების, საუბრების, ლიდებისა და არხების ძირითად მაჩვენებლებს.',
      },
      {
        id: 'support',
        label: 'aiNOW-ის მხარდაჭერა',
        info: 'Starter და Business მოიცავს საწყის გამართვას. რეგულარული ცვლილებები Premium-იდან იწყება.',
      },
      {
        id: 'custom',
        label: 'ახალი ფუნქციის მოთხოვნა',
        info: 'Enterprise პაკეტში შეგიძლიათ მოითხოვოთ ახალი ფუნქციის შეფასება. შექმნა ცალკე შეთანხმების შემდეგ იწყება.',
      },
    ],
  },
  guide: {
    eyebrow: 'პაკეტის არჩევა',
    title: 'უპასუხეთ ოთხ მარტივ კითხვას.',
    description:
      'თუ ზუსტი მონაცემები არ გაქვთ, აიღეთ ბოლო სამი თვის საშუალო. საჭიროების შემთხვევაში aiNOW შესაბამის პაკეტს შეგირჩევთ.',
    items: [
      {
        title: 'თვეში რამდენ შეტყობინებას იღებთ?',
        text: 'აირჩიეთ პაკეტი, რომლის პასუხების ლიმიტი დატვირთულ თვეშიც საკმარისი იქნება.',
      },
      {
        title: 'რამდენი ანგარიში უნდა დააკავშიროთ?',
        text: 'Instagram-ის თითოეული გვერდი, WhatsApp-ის ნომერი, Telegram-ის ბოტი და საიტის ჩატი ცალკე ანგარიშად ითვლება.',
      },
      {
        title: 'რამდენი პროდუქტი ან მომსახურება გაქვთ?',
        text: 'აირჩიეთ პაკეტი, რომლის ლიმიტშიც თქვენი სრული კატალოგი ეტევა. ერთი პროდუქტის ფერი, ზომა და სხვა ვარიანტი ცალკე პროდუქტად არ ითვლება.',
      },
      {
        title: 'რა უნდა გააკეთოს aiCHATS-მა?',
        text: 'მარტივი პასუხებისთვის აირჩიეთ Starter; ცოდნის ბაზისა და ჩაწერისთვის Business; ხშირი განახლებებისა და მუდმივი მხარდაჭერისთვის Premium; მაქსიმალური მოცულობისთვის Enterprise.',
      },
    ],
  },
  faq: {
    eyebrow: 'ხშირი კითხვები',
    title: 'ყველაფერი, რაც არჩევამდე უნდა იცოდეთ.',
    items: [
      {
        question: 'როგორ ითვლება დაკავშირებული ანგარიში?',
        answer:
          'Instagram-ის ან Messenger-ის თითოეული გვერდი, WhatsApp-ის ნომერი, Telegram-ის ბოტი და საიტის ჩატი ცალკე ანგარიშად ითვლება. მაგალითად, ორი Instagram გვერდი და ერთი Telegram ბოტი სამი ანგარიშია.',
      },
      {
        question: 'როგორ ითვლება პროდუქტი?',
        answer:
          'ერთი ძირითადი პროდუქტი ერთ პროდუქტად ითვლება. მისი ფერი, ზომა და სხვა ვარიანტი ცალკე პროდუქტად არ ითვლება. სხვადასხვა მოდელი ან დამოუკიდებელი მომსახურება ცალკე ერთეულია.',
      },
      {
        question: 'რა იცვლება Nemo დონეებს შორის?',
        answer:
          'Nemo დონე განსაზღვრავს პასუხების, ანგარიშების, კატალოგის, ავტომატიზაციისა და მხარდაჭერის მოცულობას. Lite განკუთვნილია მარტივი სამუშაოსთვის, Smart ცოდნის ბაზისა და ჩაწერისთვის, Pro რთული პროცესებისთვის, Ultra კი ყველაზე დიდი დატვირთვისთვის.',
      },
      {
        question: 'როდის იწყება ცოდნის ბაზა და ავტომატური განახლება?',
        answer:
          'ცოდნის ბაზა Business პაკეტიდან იწყება. Premium და Enterprise პაკეტებში მონაცემების შეთანხმებული წყაროდან ავტომატურად განახლებაც შეგიძლიათ.',
      },
      {
        question: 'როდის მჭირდება Custom პაკეტი?',
        answer:
          'Custom აირჩიეთ, თუ 5 000-ზე მეტი პროდუქტი, არასტანდარტული ინტეგრაცია ან სპეციალური სამუშაო პროცესი გაქვთ. aiNOW ცალკე შეაფასებს მოცულობას, ვადასა და ფასს.',
      },
    ],
  },
};

const EN_COPY: ChatPricingCopy = {
  serviceLevel: 'Service level',
  repliesPerMonth: 'replies per month',
  repliesInfo: 'Maximum AI replies sent to customers during one billing month.',
  infoLabel: '{item}: explanation',
  swipeHint: 'Swipe to compare plans',
  previousPlan: 'Previous plan',
  nextPlan: 'Next plan',
  plansLabel: 'aiCHATS plans',
  enterpriseBadge: 'Full package',
  enterpriseCta: 'Choose the full package',
  ragKnowledge: 'RAG knowledge base',
  aiCallBonus: {
    label: 'aiCALL bonus',
    value: '100 min / month',
    unit: 'min',
    caption: 'Included monthly',
    info: 'Enterprise includes 100 aiCALL calling minutes each month. Additional minutes and calling features are sold separately through aiCALL.',
    cta: 'Explore aiCALL',
  },
  planHighlights: {
    starter: {
      label: 'Getting started',
      value: 'Setup included',
      caption: 'aiNOW configures the first rules',
    },
    business: {
      label: 'Knowledge base',
      value: 'Answers from your data',
      caption: '1,000 updates per month',
    },
    premium: {
      label: 'Ongoing support',
      value: 'aiNOW keeps it updated',
      caption: 'Replies, rules and offers',
    },
    custom: {
      label: 'Custom plan',
      value: 'Built around your needs',
      caption: 'Capacity and integrations by agreement',
    },
  },
  customPrice: 'By quote',
  customVolume: 'Custom',
  customCta: 'Request a custom plan',
  cardLabels: { accounts: 'Accounts', catalog: 'Products', updates: 'Updates' },
  disclaimer:
    'Catalog bands are Starter 20-100, Business 100-500, Premium 500-2,000 and Enterprise 2,000-5,000 products. The upper number is the included plan limit. The RAG knowledge base starts with Business. Custom covers larger or non-standard catalogs, and variants count as one base product.',
  plans: {
    starter: {
      summary: 'For a small business that needs one account and simple replies.',
      serviceInfo: 'Nemo Lite is the service level for simple, repetitive work.',
      features: [
        '1 connected account',
        '20-100 products',
        'Replies and lead capture',
        'One-time setup',
      ],
      featureInfo: [
        'Each connected page, number, bot or website chat counts as one account.',
        'Starter is for a small catalog. Color, size and other variants of one base product do not count as separate products.',
        'aiCHATS answers approved questions and captures customer contact details.',
        'aiNOW helps configure and launch the initial rules. Ongoing changes are not included.',
      ],
      catalogValue: '20-100 products',
      qualification: 'Basic',
      booking: 'Not included',
      automation: 'Not included',
      support: 'Initial',
      custom: 'Not included',
    },
    business: {
      summary: 'For a knowledge base, lead qualification, booking and up to three accounts.',
      serviceInfo: 'Nemo Smart is the service level for qualification and sales workflows.',
      features: [
        '3 connected accounts',
        '100-500 products',
        'RAG knowledge base and 1,000 updates',
        'Lead qualification and booking',
      ],
      featureInfo: [
        'For example, two Instagram accounts and one Telegram bot count as three accounts.',
        'Business is for catalogs from 100 to 500 products. Color, size and other variants do not count as separate products.',
        'aiCHATS retrieves answers from your approved knowledge base, with up to 1,000 record additions or updates per month.',
        'The system asks approved questions, stores answers and identifies the next step.',
      ],
      catalogValue: '100-500 products',
      qualification: 'Included',
      booking: 'Included',
      automation: 'Not included',
      support: 'Initial',
      custom: 'Not included',
    },
    premium: {
      summary: 'For complex sales, a large knowledge base and ongoing support.',
      serviceInfo: 'Nemo Pro is the service level for complex sales and a large knowledge base.',
      features: [
        '5 connected accounts',
        '500-2,000 products',
        '4,000 updates per month',
        'Ongoing support',
      ],
      featureInfo: [
        'Up to five connected accounts or bots work through one control center.',
        'Premium is for catalogs from 500 to 2,000 products. Color, size and other variants do not count as separate products.',
        'Up to 4,000 records can be added or updated during one month.',
        'Within the agreed scope, aiNOW updates replies, promotions and operating rules.',
      ],
      catalogValue: '500-2,000 products',
      qualification: 'Included',
      booking: 'Included',
      automation: 'Advanced',
      support: 'Ongoing',
      custom: 'Not included',
    },
    enterprise: {
      summary: 'The complete package with unlimited media processing, Instagram actions, follow-ups and priority support.',
      serviceInfo: 'Nemo Ultra is the service level for high volume and custom processes.',
      features: [
        '10 connected accounts',
        '2,000-5,000 products',
        '10,000 updates per month',
        'Request a new feature',
      ],
      featureInfo: [
        'Up to ten connected accounts or bots work through one control center.',
        'Enterprise covers 2,000 to 5,000 products. Color, size and other variants count as specifications of one product, not separate products.',
        'Up to 10,000 records can be added or updated during one month.',
        'If a required feature does not exist, aiNOW scopes it and can build it after agreement.',
      ],
      catalogValue: '2,000-5,000 products',
      qualification: 'Included',
      booking: 'Included',
      automation: 'Custom',
      support: 'Priority',
      custom: 'Included',
    },
    custom: {
      summary: 'For catalogs above 5,000 products or non-standard data structures.',
      serviceInfo: 'Nemo Custom is scoped around your data, channels and operating workflow.',
      features: [
        'Accounts',
        '5,000+ products',
        'Updates',
        'Integrations',
      ],
      featureInfo: [
        'The number of channels and accounts is set from your actual operating workflow.',
        'Custom is for more than 5,000 products or a complex catalog. Color, size and other variants count as specifications of one base product.',
        'Update frequency and volume are agreed from the way your catalog changes.',
        'Integrations, data sources and new features are scoped separately.',
      ],
      catalogValue: '5,000+ · custom',
      qualification: 'Included',
      booking: 'Included',
      automation: 'Custom',
      support: 'Custom',
      custom: 'Included',
    },
  },
  foundation: {
    eyebrow: 'Included in every plan',
    title: 'The essentials are there from day one.',
    description:
      'Price and capacity change by plan. The core controls stay available across all plans.',
    visualTitle: 'One AI control center',
    visualText:
      'Every connected account uses the same approved business information, replies and rules.',
    items: [
      {
        title: 'Approved information',
        text: 'Prices, services, rules and working hours.',
        info: 'aiCHATS prepares replies from the information and rules you approve.',
      },
      {
        title: 'Lead capture',
        text: 'Name, phone and request saved together.',
        info: 'The system stores the customer details needed for the next step.',
      },
      {
        title: 'Human handoff',
        text: 'Uncertain conversations go to your team.',
        info: 'A complex or uncertain conversation is handed to a team member.',
      },
      {
        title: 'Unified conversations',
        text: 'See every chat and continue manually.',
        info: 'Conversations from connected accounts appear in one workspace.',
      },
      {
        title: 'Your operating rules',
        text: 'You decide what the system may answer.',
        info: 'Define how aiCHATS replies and when a human must take over.',
      },
      {
        title: 'Core analytics',
        text: 'See what works and where help is needed.',
        info: 'Track the main reply, conversation, lead and channel metrics.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'Real capabilities',
    title: 'More than replies. The full customer journey.',
    description:
      'aiCHATS brings together work your team now handles across chats, spreadsheets and calendars.',
    items: [
      {
        title: 'All conversations in one place',
        text: 'Instagram, Messenger, WhatsApp, Telegram and website chat.',
        info: 'Conversations from every connected account appear in one workspace.',
        availability: 'All plans',
      },
      {
        title: 'Pause AI and reply manually',
        text: 'A team member can take over at any time.',
        info: 'Automated replies stop in that conversation after manual takeover.',
        availability: 'All plans',
      },
      {
        title: 'Lead list and status',
        text: 'Name, phone, request and next step in one place.',
        info: 'Each lead record stores the details and required next action.',
        availability: 'All plans',
      },
      {
        title: 'Booking and calendar',
        text: 'Find availability, create a booking or ask for approval.',
        info: 'The calendar integration checks availability and creates a booking.',
        availability: 'Business+',
      },
      {
        title: 'Instagram comments and Stories',
        text: 'Reply publicly and start a private conversation when needed.',
        info: 'Supported actions follow the connected account and approved rules.',
        availability: 'All plans',
      },
      {
        title: 'Customer follow-up',
        text: 'Send an approved reminder after a conversation stops.',
        info: 'The timing and wording of follow-up messages are agreed in advance.',
        availability: 'All plans',
      },
      {
        title: 'Website chat customization',
        text: 'Colors, greeting, quick questions and display pages.',
        info: 'The widget is configured for your brand and operating flow.',
        availability: 'All plans',
      },
      {
        title: 'Catalog synchronization',
        text: 'Keep a large product knowledge base current.',
        info: 'Premium and Enterprise can sync data from an agreed source.',
        availability: 'Premium+',
      },
    ],
  },
  comparison: {
    eyebrow: 'Exact comparison',
    title: 'See the difference at a glance.',
    description: 'Compare every important limit, channel, control and support level.',
    feature: 'Feature',
    included: 'Included',
    notIncluded: 'Not included',
    unlimited: 'Unlimited',
    rows: [
      { id: 'service', label: 'Service level', info: 'Describes complexity, knowledge capacity and support level.' },
      { id: 'replies', label: 'AI replies per month', info: 'Maximum replies sent to customers in one month.' },
      { id: 'accounts', label: 'Connected accounts', info: 'Each page, number, bot or website chat counts separately.' },
      { id: 'catalog', label: 'Products and services', info: 'Starter is maintained manually. The knowledge base starts with Business; automatic source sync starts with Premium.' },
      { id: 'updates', label: 'Updates per month', info: 'Knowledge records that can be added or changed in one month.' },
      { id: 'qualification', label: 'Lead qualification', info: 'Discover customer need, store details and determine the next step.' },
      { id: 'booking', label: 'Booking and calendar', info: 'Find availability, create a booking or request approval.' },
      { id: 'automation', label: 'Advanced automation', info: 'Complex workflows, custom routing and automatic catalog synchronization.' },
      { id: 'channels', label: 'Instagram, Messenger, WhatsApp, Telegram and website', info: 'Connect these channels within the account limit of the selected plan.' },
      { id: 'unifiedInbox', label: 'Unified conversation inbox', info: 'Conversations from connected channels appear in one workspace.' },
      { id: 'manualControl', label: 'Pause AI and answer manually', info: 'A team member can take over any conversation and continue manually.' },
      { id: 'leadCollection', label: 'Lead capture and lead list', info: 'Stores the customer name, phone, request and processing status.' },
      { id: 'websiteWidget', label: 'Custom website chat', info: 'Customize color, greeting, quick questions and display pages.' },
      { id: 'photoOcr', label: 'Photo and text recognition (OCR)', info: 'Monthly photo allowance: Starter 100, Business 250, Premium 1,500 and unlimited on Enterprise.' },
      { id: 'voiceMessages', label: 'Voice messages sent in chat', info: 'This feature covers audio messages sent through chat. It does not include phone calls. Monthly allowance: Starter 100, Business 250, Premium 1,500 and unlimited on Enterprise.' },
      { id: 'aiCallMinutes', label: 'aiCALL calling minutes', info: 'Enterprise includes 100 aiCALL minutes per month as a bonus. aiCALL is a separate calling product; extra minutes and calling features require a separate aiCALL package.' },
      { id: 'instagramActions', label: 'Instagram comments and Story replies', info: 'Monthly allowance: Starter 100, Business 250, Premium 1,500 and unlimited on Enterprise.' },
      { id: 'followUp', label: 'Customer follow-up', info: 'Monthly follow-up allowance: Starter 100, Business 250, Premium 1,500 and unlimited on Enterprise.' },
      { id: 'analytics', label: 'Conversation, lead and channel analytics', info: 'See key metrics for replies, conversations, leads and connected channels.' },
      { id: 'support', label: 'aiNOW support', info: 'Starter and Business include setup. Ongoing changes start with Premium.' },
      { id: 'custom', label: 'New feature request', info: 'Enterprise can request scoping and development of a missing feature.' },
    ],
  },
  guide: {
    eyebrow: 'How to choose',
    title: 'Do not count messages alone.',
    description:
      'One high-value customer can matter more than a thousand simple questions. Complexity should also determine the plan.',
    items: [
      { title: 'How many replies do you need?', text: 'Use the last three-month average and leave room for growth.' },
      { title: 'How many accounts will you connect?', text: 'Two Instagram accounts and one Telegram bot count as three.' },
      { title: 'How much must the system know?', text: 'Twenty offers can be entered manually. A large catalog needs a knowledge base.' },
      { title: 'How complex is the sale?', text: 'Qualification, booking, follow-up and custom processes need a stronger plan.' },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Short answers before you choose.',
    items: [
      {
        question: 'What is the difference between a channel and a connected account?',
        answer: 'Channels are Instagram, Messenger, WhatsApp, Telegram and website chat. Every specific page, number, bot or widget counts as a connected account.',
      },
      {
        question: 'What are Nemo Lite, Smart, Pro and Ultra?',
        answer: 'They are aiCHATS service-level names describing work complexity, knowledge capacity and support. They are not separate AI model names.',
      },
      {
        question: 'When do I need a knowledge base?',
        answer: 'The knowledge base starts with Business. Choose Premium or Enterprise when information changes often, your catalog is large, or you need automatic source synchronization.',
      },
      {
        question: 'What is initial versus ongoing support?',
        answer: 'Starter and Business include the initial setup. Premium adds agreed ongoing changes to replies, rules, promotions and workflows.',
      },
      {
        question: 'Can you add a feature that does not exist?',
        answer: 'Enterprise customers can request a new feature. aiNOW scopes the goal, effort and timeline before separate approval.',
      },
    ],
  },
};

const RU_COPY: ChatPricingCopy = {
  ...EN_COPY,
  serviceLevel: 'Уровень сервиса',
  repliesPerMonth: 'ответов в месяц',
  repliesInfo: 'Максимальное количество ответов клиентам за один расчётный месяц.',
  infoLabel: '{item}: пояснение',
  swipeHint: 'Листайте тарифы',
  previousPlan: 'Предыдущий тариф',
  nextPlan: 'Следующий тариф',
  plansLabel: 'Тарифы aiCHATS',
  enterpriseBadge: 'Полный пакет',
  enterpriseCta: 'Выбрать полный пакет',
  ragKnowledge: 'RAG-база знаний',
  aiCallBonus: {
    label: 'Бонус aiCALL',
    value: '100 мин / месяц',
    unit: 'минут',
    caption: 'Включено ежемесячно',
    info: 'В Enterprise ежемесячно входят 100 минут звонков aiCALL. Дополнительные минуты и функции звонков приобретаются отдельно в aiCALL.',
    cta: 'Посмотреть aiCALL',
  },
  planHighlights: {
    starter: {
      label: 'Запуск',
      value: 'Настройка включена',
      caption: 'aiNOW настраивает первые правила',
    },
    business: {
      label: 'База знаний',
      value: 'Ответы по вашим данным',
      caption: '1 000 обновлений в месяц',
    },
    premium: {
      label: 'Постоянная поддержка',
      value: 'aiNOW обновляет систему',
      caption: 'Ответы, правила и акции',
    },
    custom: {
      label: 'Индивидуальный тариф',
      value: 'Под ваши задачи',
      caption: 'Объём и интеграции по согласованию',
    },
  },
  customPrice: 'По запросу',
  customVolume: 'На заказ',
  customCta: 'Запросить индивидуальный тариф',
  cardLabels: { accounts: 'Аккаунты', catalog: 'Товары', updates: 'Обновления' },
  disclaimer:
    'Диапазоны каталога: Starter 20-100, Business 100-500, Premium 500-2 000 и Enterprise 2 000-5 000 товаров. Верхнее число является включённым лимитом пакета. RAG-база начинается с Business. Для большего или нестандартного каталога составляется Custom, а варианты одного товара считаются одним базовым товаром.',
  plans: {
    starter: {
      ...EN_COPY.plans.starter,
      summary: 'Для малого бизнеса с одним аккаунтом и простыми ответами.',
      serviceInfo: 'Nemo Lite — уровень для простых повторяющихся задач.',
      features: ['1 подключённый аккаунт', '20-100 товаров', 'Ответы и сбор лидов', 'Разовая настройка'],
      featureInfo: [
        'Каждая подключённая страница, номер, бот или чат сайта считается отдельно.',
        'Starter подходит для небольшого каталога. Цвет, размер и другие варианты одной модели не считаются отдельными товарами.',
        'aiCHATS отвечает на утверждённые вопросы и сохраняет контакты клиента.',
        'aiNOW помогает настроить и запустить правила. Последующие изменения не входят.',
      ],
      catalogValue: '20-100 товаров',
      qualification: 'Базовая',
      booking: 'Не входит',
      automation: 'Не входит',
      support: 'Первичная',
      custom: 'Не входит',
    },
    business: {
      ...EN_COPY.plans.business,
      summary: 'Для базы знаний, квалификации лидов, записи и трёх подключённых аккаунтов.',
      serviceInfo: 'Nemo Smart — уровень для квалификации и сценариев продаж.',
      features: ['3 подключённых аккаунта', '100-500 товаров', 'RAG-база и 1 000 обновлений', 'Квалификация и запись'],
      featureInfo: [
        'Например, два аккаунта Instagram и один Telegram-бот считаются как три подключения.',
        'Business подходит для каталога от 100 до 500 товаров. Цвет, размер и другие варианты одной модели не считаются отдельными товарами.',
        'aiCHATS ищет ответ в утверждённой базе знаний. В месяц доступно до 1 000 добавлений или обновлений записей.',
        'Система задаёт утверждённые вопросы, сохраняет ответы и определяет следующий шаг.',
      ],
      catalogValue: '100-500 товаров',
      qualification: 'Входит',
      booking: 'Входит',
      automation: 'Не входит',
      support: 'Первичная',
      custom: 'Не входит',
    },
    premium: {
      ...EN_COPY.plans.premium,
      summary: 'Для сложных продаж, большой базы знаний и постоянной поддержки.',
      serviceInfo: 'Nemo Pro — уровень для сложных продаж и большой базы знаний.',
      features: ['5 подключённых аккаунтов', '500-2 000 товаров', '4 000 обновлений в месяц', 'Постоянная поддержка'],
      featureInfo: [
        'До пяти аккаунтов или ботов работают через один центр управления.',
        'Premium подходит для каталога от 500 до 2 000 товаров. Цвет, размер и другие варианты одной модели не считаются отдельными товарами.',
        'До 4 000 записей можно добавить или обновить за месяц.',
        'В согласованном объёме aiNOW меняет ответы, акции и рабочие правила.',
      ],
      catalogValue: '500-2 000 товаров',
      qualification: 'Входит',
      booking: 'Входит',
      automation: 'Расширенная',
      support: 'Постоянная',
      custom: 'Не входит',
    },
    enterprise: {
      ...EN_COPY.plans.enterprise,
      summary: 'Полный пакет с неограниченной обработкой медиа, действиями Instagram, повторными контактами и приоритетной поддержкой.',
      serviceInfo: 'Nemo Ultra — уровень для большого объёма и индивидуальных процессов.',
      features: ['10 подключённых аккаунтов', '2 000-5 000 товаров', '10 000 обновлений в месяц', 'Запрос новой функции'],
      featureInfo: [
        'До десяти аккаунтов или ботов работают через один центр управления.',
        'Enterprise подходит для каталога от 2 000 до 5 000 товаров. Цвет, размер и другие варианты одной модели не считаются отдельными товарами.',
        'До 10 000 записей можно добавить или обновить за месяц.',
        'Если нужной функции нет, aiNOW оценивает её и после согласования может разработать.',
      ],
      catalogValue: '2 000-5 000 товаров',
      qualification: 'Входит',
      booking: 'Входит',
      automation: 'Индивидуальная',
      support: 'Приоритетная',
      custom: 'Входит',
    },
    custom: {
      ...EN_COPY.plans.custom,
      summary: 'Для каталогов больше 5 000 товаров и нестандартной структуры данных.',
      serviceInfo: 'Nemo Custom настраивается под ваши данные, каналы и рабочий процесс.',
      features: ['Аккаунты', '5 000+ товаров', 'Обновления', 'Интеграции'],
      featureInfo: [
        'Количество каналов и аккаунтов определяется по реальному рабочему процессу.',
        'Custom предназначен для каталогов больше 5 000 товаров. Цвет, размер и другие варианты считаются характеристиками одного базового товара.',
        'Частота и объём обновлений согласуются с учётом изменений каталога.',
        'Интеграции, источники данных и новые функции оцениваются отдельно.',
      ],
      catalogValue: '5 000+ · индивидуально',
      qualification: 'Входит',
      booking: 'Входит',
      automation: 'Индивидуальная',
      support: 'Индивидуальная',
      custom: 'Входит',
    },
  },
  foundation: {
    eyebrow: 'Во всех тарифах',
    title: 'Нужная основа есть с первого дня.',
    description: 'Цена и объём меняются, базовые возможности управления доступны во всех тарифах.',
    visualTitle: 'Один AI-центр управления',
    visualText: 'Все аккаунты используют одну утверждённую информацию, ответы и правила бизнеса.',
    items: [
      { title: 'Утверждённая информация', text: 'Цены, услуги, правила и часы работы.', info: 'aiCHATS отвечает только по утверждённой вами информации.' },
      { title: 'Сбор лидов', text: 'Имя, номер и запрос хранятся вместе.', info: 'Система сохраняет данные клиента для следующего шага.' },
      { title: 'Передача человеку', text: 'Неясный диалог получает сотрудник.', info: 'Сложный или неуверенный случай передаётся вашей команде.' },
      { title: 'Единые диалоги', text: 'Все чаты видны в одном месте.', info: 'Диалоги подключённых аккаунтов находятся в одном рабочем пространстве.' },
      { title: 'Ваши правила', text: 'Вы решаете, что системе разрешено отвечать.', info: 'Настройте ответы и условия передачи человеку.' },
      { title: 'Базовая аналитика', text: 'Видно, что работает и где нужно вмешаться.', info: 'Доступны главные показатели ответов, лидов и каналов.' },
    ],
  },
  capabilities: {
    eyebrow: 'Реальные возможности',
    title: 'Не только ответы. Весь путь клиента.',
    description: 'aiCHATS объединяет работу, которую команда вручную ведёт в чатах, таблицах и календарях.',
    items: [
      { title: 'Все диалоги в одном месте', text: 'Instagram, Messenger, WhatsApp, Telegram и чат сайта.', info: 'Диалоги всех подключённых аккаунтов видны в одном месте.', availability: 'Все тарифы' },
      { title: 'Остановка AI и ручной ответ', text: 'Сотрудник может забрать диалог в любой момент.', info: 'После ручного перехвата автоответы в диалоге останавливаются.', availability: 'Все тарифы' },
      { title: 'Список и статус лидов', text: 'Имя, номер, запрос и следующий шаг.', info: 'В карточке лида сохраняются данные и требуемое действие.', availability: 'Все тарифы' },
      { title: 'Запись и календарь', text: 'Поиск времени, запись или запрос подтверждения.', info: 'Интеграция проверяет свободное время и создаёт запись.', availability: 'Business+' },
      { title: 'Комментарии и Stories', text: 'Ответ и переход в личный диалог при необходимости.', info: 'Действия выполняются по утверждённым правилам аккаунта.', availability: 'Все тарифы' },
      { title: 'Повторный контакт', text: 'Утверждённое напоминание после паузы.', info: 'Время и текст напоминания согласуются заранее.', availability: 'Все тарифы' },
      { title: 'Настройка чата сайта', text: 'Цвет, приветствие, быстрые вопросы и страницы.', info: 'Виджет настраивается под бренд и процесс.', availability: 'Все тарифы' },
      { title: 'Синхронизация каталога', text: 'Автообновление большой базы товаров.', info: 'Premium и Enterprise синхронизируют согласованный источник.', availability: 'Premium+' },
    ],
  },
  comparison: {
    eyebrow: 'Точное сравнение',
    title: 'Разница с первого взгляда.',
    description: 'Сравните все важные лимиты, каналы, функции управления и уровень поддержки.',
    feature: 'Возможность',
    included: 'Входит',
    notIncluded: 'Не входит',
    unlimited: 'Без ограничений',
    rows: [
      { id: 'service', label: 'Уровень сервиса', info: 'Описывает сложность, объём знаний и поддержку.' },
      { id: 'replies', label: 'AI-ответов в месяц', info: 'Максимум ответов клиентам за месяц.' },
      { id: 'accounts', label: 'Подключённые аккаунты', info: 'Каждая страница, номер, бот или чат считается отдельно.' },
      { id: 'catalog', label: 'Товары и услуги', info: 'Starter заполняется вручную. База знаний начинается с Business, автоматическая синхронизация источника доступна с Premium.' },
      { id: 'updates', label: 'Обновлений в месяц', info: 'Количество добавляемых или изменяемых записей знаний.' },
      { id: 'qualification', label: 'Квалификация лида', info: 'Потребность, контакты и следующий шаг.' },
      { id: 'booking', label: 'Запись и календарь', info: 'Свободное время, запись или подтверждение сотрудника.' },
      { id: 'automation', label: 'Расширенная автоматизация', info: 'Сложные процессы, индивидуальная маршрутизация и автоматическая синхронизация каталога.' },
      { id: 'channels', label: 'Instagram, Messenger, WhatsApp, Telegram и сайт', info: 'Подключайте эти каналы в пределах лимита аккаунтов выбранного тарифа.' },
      { id: 'unifiedInbox', label: 'Все диалоги в одном месте', info: 'Диалоги подключённых каналов находятся в одном рабочем пространстве.' },
      { id: 'manualControl', label: 'Остановка AI и ручной ответ', info: 'Сотрудник может забрать любой диалог и продолжить его вручную.' },
      { id: 'leadCollection', label: 'Сбор и список лидов', info: 'Сохраняются имя, номер, запрос клиента и статус обработки.' },
      { id: 'websiteWidget', label: 'Настраиваемый чат для сайта', info: 'Настраиваются цвет, приветствие, быстрые вопросы и страницы показа.' },
      { id: 'photoOcr', label: 'Распознавание фото и текста (OCR)', info: 'Лимит обработки фото в месяц: Starter 100, Business 250, Premium 1 500, Enterprise без ограничений.' },
      { id: 'voiceMessages', label: 'Голосовые сообщения в чатах', info: 'Эта функция относится только к аудиосообщениям в чатах и не включает телефонные звонки. Лимит в месяц: Starter 100, Business 250, Premium 1 500, Enterprise без ограничений.' },
      { id: 'aiCallMinutes', label: 'Минуты звонков aiCALL', info: 'В Enterprise бонусом входят 100 минут aiCALL в месяц. aiCALL является отдельным продуктом; дополнительные минуты и функции приобретаются по отдельному тарифу.' },
      { id: 'instagramActions', label: 'Комментарии Instagram и ответы на Stories', info: 'Лимит в месяц: Starter 100, Business 250, Premium 1 500, Enterprise без ограничений.' },
      { id: 'followUp', label: 'Повторный контакт с клиентом', info: 'Лимит повторных контактов в месяц: Starter 100, Business 250, Premium 1 500, Enterprise без ограничений.' },
      { id: 'analytics', label: 'Аналитика диалогов, лидов и каналов', info: 'Показывает основные показатели ответов, разговоров, лидов и каналов.' },
      { id: 'support', label: 'Поддержка aiNOW', info: 'В Starter и Business входит запуск. Постоянные изменения начинаются с Premium.' },
      { id: 'custom', label: 'Запрос новой функции', info: 'Enterprise позволяет оценить и разработать отсутствующую функцию.' },
    ],
  },
  guide: {
    eyebrow: 'Как выбрать',
    title: 'Не считайте только сообщения.',
    description: 'Один дорогой клиент может быть важнее тысячи простых вопросов. Учитывайте сложность продажи.',
    items: [
      { title: 'Сколько ответов нужно?', text: 'Возьмите среднее за три месяца и оставьте запас на рост.' },
      { title: 'Сколько аккаунтов подключаете?', text: 'Два Instagram и один Telegram-бот считаются как три.' },
      { title: 'Сколько должен знать AI?', text: 'Starter рассчитан на 20-100 товаров, Business на 100-500, Premium на 500-2 000, Enterprise на 2 000-5 000. Для большего каталога составляется Custom. Цвета и размеры одного товара отдельно не считаются.' },
      { title: 'Насколько сложна продажа?', text: 'Квалификация, запись, повторный контакт и особые процессы требуют более сильного тарифа.' },
    ],
  },
  faq: {
    eyebrow: 'Частые вопросы',
    title: 'Короткие ответы перед выбором.',
    items: [
      { question: 'Чем канал отличается от подключённого аккаунта?', answer: 'Каналы — Instagram, Messenger, WhatsApp, Telegram и чат сайта. Каждая конкретная страница, номер, бот или виджет считается отдельным аккаунтом.' },
      { question: 'Что такое Nemo Lite, Smart, Pro и Ultra?', answer: 'Это названия уровней сервиса aiCHATS. Они описывают сложность работы, объём знаний и поддержку, а не отдельные AI-модели.' },
      { question: 'Когда нужна база знаний?', answer: 'База знаний начинается с Business. Выбирайте Premium или Enterprise, если данные часто меняются, каталог большой или нужна автоматическая синхронизация источника.' },
      { question: 'Что значит первичная и постоянная поддержка?', answer: 'Starter и Business включают запуск. Premium добавляет согласованные изменения ответов, правил, акций и процессов.' },
      { question: 'Вы добавите отсутствующую функцию?', answer: 'В Enterprise можно запросить новую функцию. aiNOW оценит цель, объём и срок до отдельного согласования.' },
    ],
  },
};

const DE_COPY: ChatPricingCopy = {
  serviceLevel: 'Servicestufe',
  repliesPerMonth: 'Antworten pro Monat',
  repliesInfo:
    'Maximale Anzahl der AI-Antworten an Kunden innerhalb eines Abrechnungsmonats.',
  infoLabel: '{item}: Erklärung',
  swipeHint: 'Wischen Sie, um Tarife zu vergleichen',
  previousPlan: 'Vorheriger Tarif',
  nextPlan: 'Nächster Tarif',
  plansLabel: 'aiCHATS-Tarife',
  enterpriseBadge: 'Komplettpaket',
  enterpriseCta: 'Komplettpaket wählen',
  ragKnowledge: 'RAG-Wissensdatenbank',
  aiCallBonus: {
    label: 'aiCALL-Bonus',
    value: '100 Min. / Monat',
    unit: 'Min.',
    caption: 'Monatlich enthalten',
    info: 'Enterprise enthält monatlich 100 Gesprächsminuten mit aiCALL. Weitere Minuten und Anruffunktionen werden separat über aiCALL gebucht.',
    cta: 'aiCALL ansehen',
  },
  planHighlights: {
    starter: {
      label: 'Einstieg',
      value: 'Einrichtung inklusive',
      caption: 'aiNOW richtet die ersten Regeln ein',
    },
    business: {
      label: 'Wissensbasis',
      value: 'Antwortet aus Ihren Daten',
      caption: '1.000 Aktualisierungen pro Monat',
    },
    premium: {
      label: 'Laufender Support',
      value: 'aiNOW hält alles aktuell',
      caption: 'Antworten, Regeln und Angebote',
    },
    custom: {
      label: 'Individueller Tarif',
      value: 'Auf Ihren Bedarf zugeschnitten',
      caption: 'Umfang und Integrationen nach Vereinbarung',
    },
  },
  customPrice: 'Auf Anfrage',
  customVolume: 'Individuell',
  customCta: 'Individuellen Tarif anfragen',
  cardLabels: { accounts: 'Konten', catalog: 'Produkte', updates: 'Updates' },
  disclaimer:
    'Die Katalogbereiche sind Starter 20-100, Business 100-500, Premium 500-2.000 und Enterprise 2.000-5.000 Produkte. Die obere Zahl ist das enthaltene Paketlimit. Für größere oder besondere Kataloge gibt es Custom; Varianten zählen als ein Basisprodukt.',
  plans: {
    starter: {
      summary:
        'Für kleine Unternehmen, die ein Konto und einfache Antworten benötigen.',
      serviceInfo:
        'Nemo Lite ist die Servicestufe für einfache, wiederkehrende Aufgaben.',
      features: [
        '1 verbundenes Konto',
        '20-100 Produkte',
        'Antworten und Lead-Erfassung',
        'Einmalige Einrichtung',
      ],
      featureInfo: [
        'Jede verbundene Seite, Nummer, jeder Bot oder Website-Chat zählt als ein Konto.',
        'Farben, Größen und andere Varianten eines Grundprodukts zählen nicht als separate Produkte.',
        'aiCHATS beantwortet freigegebene Fragen und erfasst die Kontaktdaten des Kunden.',
        'aiNOW unterstützt bei der ersten Konfiguration und Einführung. Laufende Änderungen sind nicht enthalten.',
      ],
      catalogValue: '20-100 Produkte',
      qualification: 'Einfach',
      booking: 'Nicht enthalten',
      automation: 'Nicht enthalten',
      support: 'Einrichtung',
      custom: 'Nicht enthalten',
    },
    business: {
      summary:
        'Für Lead-Qualifizierung, Terminbuchung und bis zu drei Konten.',
      serviceInfo:
        'Nemo Smart ist die Servicestufe für Qualifizierung und Verkaufsabläufe.',
      features: [
        '3 verbundene Konten',
        '100-500 Produkte',
        'Wissensdatenbank und 1.000 Updates',
        'Lead-Qualifizierung und Buchung',
      ],
      featureInfo: [
        'Zum Beispiel zählen zwei Instagram-Konten und ein Telegram-Bot als drei Konten.',
        'Farben, Größen und andere Varianten eines Grundprodukts zählen nicht als separate Produkte.',
        'aiCHATS nutzt Ihre freigegebene Wissensdatenbank mit bis zu 1.000 Ergänzungen oder Aktualisierungen pro Monat.',
        'Das System stellt freigegebene Fragen, speichert Antworten und bestimmt den nächsten Schritt.',
      ],
      catalogValue: '100-500 Produkte',
      qualification: 'Enthalten',
      booking: 'Enthalten',
      automation: 'Nicht enthalten',
      support: 'Einrichtung',
      custom: 'Nicht enthalten',
    },
    premium: {
      summary:
        'Für komplexe Verkäufe, eine große Wissensdatenbank und laufenden Support.',
      serviceInfo:
        'Nemo Pro ist die Servicestufe für komplexe Verkäufe und eine große Wissensdatenbank.',
      features: [
        '5 verbundene Konten',
        '500-2.000 Produkte',
        '4.000 Aktualisierungen pro Monat',
        'Laufender Support',
      ],
      featureInfo: [
        'Bis zu fünf verbundene Konten oder Bots arbeiten über eine gemeinsame Steuerung.',
        'Farben, Größen und andere Varianten eines Grundprodukts zählen nicht als separate Produkte.',
        'Bis zu 4.000 Einträge können pro Monat hinzugefügt oder aktualisiert werden.',
        'Im vereinbarten Umfang aktualisiert aiNOW Antworten, Aktionen und Arbeitsregeln.',
      ],
      catalogValue: '500-2.000 Produkte',
      qualification: 'Enthalten',
      booking: 'Enthalten',
      automation: 'Erweitert',
      support: 'Laufend',
      custom: 'Nicht enthalten',
    },
    enterprise: {
      summary:
        'Für hohes Volumen und individuell abgestimmte Arbeitsabläufe.',
      serviceInfo:
        'Nemo Ultra ist die Servicestufe für hohes Volumen und individuelle Prozesse.',
      features: [
        '10 verbundene Konten',
        '2.000-5.000 Produkte',
        '10.000 Aktualisierungen pro Monat',
        'Neue Funktion anfragen',
      ],
      featureInfo: [
        'Bis zu zehn verbundene Konten oder Bots arbeiten über eine gemeinsame Steuerung.',
        'Farben, Größen und andere Varianten eines Grundprodukts zählen nicht als separate Produkte.',
        'Bis zu 10.000 Einträge können pro Monat hinzugefügt oder aktualisiert werden.',
        'Fehlt eine benötigte Funktion, bewertet aiNOW den Umfang und kann sie nach Freigabe entwickeln.',
      ],
      catalogValue: '2.000-5.000 Produkte',
      qualification: 'Enthalten',
      booking: 'Enthalten',
      automation: 'Individuell',
      support: 'Priorisiert',
      custom: 'Enthalten',
    },
    custom: {
      ...EN_COPY.plans.custom,
      summary: 'Für mehr als 5.000 Produkte oder nicht standardisierte Kataloge.',
      serviceInfo: 'Nemo Custom wird auf Ihre Daten, Kanäle und Abläufe abgestimmt.',
      features: ['Konten', '5.000+ Produkte', 'Updates', 'Integrationen'],
      featureInfo: [
        'Die Zahl der Kanäle und Konten richtet sich nach Ihrem tatsächlichen Ablauf.',
        'Varianten wie Farbe oder Größe zählen als Merkmale eines Produkts, nicht als eigene Produkte.',
        'Häufigkeit und Umfang der Aktualisierungen werden individuell festgelegt.',
        'Integrationen, Datenquellen und neue Funktionen werden separat bewertet.',
      ],
      catalogValue: '5.000+ · individuell',
      support: 'Individuell',
    },
  },
  foundation: {
    eyebrow: 'In jedem Tarif enthalten',
    title: 'Die Grundlage steht vom ersten Tag an.',
    description:
      'Preis und Kapazität unterscheiden sich. Die zentralen Steuerungsfunktionen bleiben in allen Tarifen verfügbar.',
    visualTitle: 'Eine zentrale AI-Steuerung',
    visualText:
      'Alle verbundenen Konten verwenden dieselben freigegebenen Unternehmensdaten, Antworten und Regeln.',
    items: [
      {
        title: 'Freigegebene Informationen',
        text: 'Preise, Leistungen, Regeln und Öffnungszeiten.',
        info: 'aiCHATS erstellt Antworten ausschließlich aus den von Ihnen freigegebenen Informationen und Regeln.',
      },
      {
        title: 'Lead-Erfassung',
        text: 'Name, Telefonnummer und Anfrage an einem Ort.',
        info: 'Das System speichert die Kundendaten, die für den nächsten Schritt erforderlich sind.',
      },
      {
        title: 'Übergabe an Mitarbeiter',
        text: 'Unklare Gespräche gehen an Ihr Team.',
        info: 'Ein komplexes oder unsicheres Gespräch wird an einen Mitarbeiter übergeben.',
      },
      {
        title: 'Gebündelte Gespräche',
        text: 'Alle Chats sehen und manuell fortsetzen.',
        info: 'Gespräche aus verbundenen Konten erscheinen in einem gemeinsamen Arbeitsbereich.',
      },
      {
        title: 'Ihre Arbeitsregeln',
        text: 'Sie bestimmen, was das System beantworten darf.',
        info: 'Legen Sie fest, wie aiCHATS antwortet und wann ein Mitarbeiter übernehmen muss.',
      },
      {
        title: 'Basisanalyse',
        text: 'Erkennen, was funktioniert und wo Hilfe nötig ist.',
        info: 'Verfolgen Sie die wichtigsten Kennzahlen zu Antworten, Gesprächen, Leads und Kanälen.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'Tatsächliche Funktionen',
    title: 'Mehr als Antworten. Der gesamte Kundenweg.',
    description:
      'aiCHATS bündelt Aufgaben, die Ihr Team derzeit in Chats, Tabellen und Kalendern bearbeitet.',
    items: [
      {
        title: 'Alle Gespräche an einem Ort',
        text: 'Instagram, Messenger, WhatsApp, Telegram und Website-Chat.',
        info: 'Gespräche aus allen verbundenen Konten erscheinen in einem Arbeitsbereich.',
        availability: 'Alle Tarife',
      },
      {
        title: 'AI pausieren und selbst antworten',
        text: 'Ein Mitarbeiter kann jederzeit übernehmen.',
        info: 'Nach der manuellen Übernahme werden automatische Antworten in diesem Gespräch gestoppt.',
        availability: 'Alle Tarife',
      },
      {
        title: 'Lead-Liste und Status',
        text: 'Name, Telefonnummer, Anfrage und nächster Schritt.',
        info: 'Jeder Lead-Eintrag enthält die Daten und die erforderliche nächste Aktion.',
        availability: 'Alle Tarife',
      },
      {
        title: 'Buchung und Kalender',
        text: 'Verfügbarkeit prüfen, Termin buchen oder Freigabe anfragen.',
        info: 'Die Kalenderintegration prüft freie Zeiten und erstellt eine Buchung.',
        availability: 'Ab Business',
      },
      {
        title: 'Instagram-Kommentare und Stories',
        text: 'Öffentlich antworten und bei Bedarf privat fortsetzen.',
        info: 'Unterstützte Aktionen folgen dem verbundenen Konto und den freigegebenen Regeln.',
        availability: 'Alle Tarife',
      },
      {
        title: 'Kunden erneut kontaktieren',
        text: 'Nach einer Pause eine freigegebene Erinnerung senden.',
        info: 'Zeitpunkt und Wortlaut der Erinnerung werden vorab vereinbart.',
        availability: 'Alle Tarife',
      },
      {
        title: 'Website-Chat anpassen',
        text: 'Farben, Begrüßung, Schnellfragen und angezeigte Seiten.',
        info: 'Das Widget wird an Ihre Marke und Ihren Arbeitsablauf angepasst.',
        availability: 'Alle Tarife',
      },
      {
        title: 'Katalog synchronisieren',
        text: 'Eine große Produktdatenbank aktuell halten.',
        info: 'Premium und Enterprise können Daten aus einer vereinbarten Quelle synchronisieren.',
        availability: 'Ab Premium',
      },
    ],
  },
  comparison: {
    eyebrow: 'Direkter Vergleich',
    title: 'Unterschiede auf einen Blick.',
    description:
      'Vergleichen Sie nur die Grenzen und Funktionen, die Ihre Entscheidung beeinflussen.',
    feature: 'Funktion',
    included: 'Enthalten',
    notIncluded: 'Nicht enthalten',
    unlimited: 'Unbegrenzt',
    rows: [
      {
        id: 'service',
        label: 'Servicestufe',
        info: 'Beschreibt Komplexität, Wissenskapazität und Supportumfang.',
      },
      {
        id: 'replies',
        label: 'AI-Antworten pro Monat',
        info: 'Maximale Anzahl der Antworten an Kunden innerhalb eines Monats.',
      },
      {
        id: 'accounts',
        label: 'Verbundene Konten',
        info: 'Jede Seite, Nummer, jeder Bot oder Website-Chat zählt separat.',
      },
      {
        id: 'catalog',
        label: 'Produkte und Leistungen',
        info: 'Starter wird manuell gepflegt. Die Wissensdatenbank beginnt mit Business; die automatische Quellsynchronisierung beginnt mit Premium.',
      },
      {
        id: 'updates',
        label: 'Aktualisierungen pro Monat',
        info: 'Wissenseinträge, die innerhalb eines Monats hinzugefügt oder geändert werden können.',
      },
      {
        id: 'qualification',
        label: 'Lead-Qualifizierung',
        info: 'Kundenbedarf erkennen, Daten speichern und den nächsten Schritt bestimmen.',
      },
      {
        id: 'booking',
        label: 'Buchung und Kalender',
        info: 'Freie Zeiten finden, eine Buchung erstellen oder Freigabe anfordern.',
      },
      {
        id: 'automation',
        label: 'Erweiterte Automatisierung',
        info: 'Komplexe Abläufe, individuelle Weiterleitung und automatische Katalogsynchronisierung.',
      },
      { id: 'channels', label: 'Instagram, Messenger, WhatsApp, Telegram und Website', info: 'Diese Kanäle können innerhalb des Kontenlimits des gewählten Tarifs verbunden werden.' },
      { id: 'unifiedInbox', label: 'Alle Gespräche an einem Ort', info: 'Gespräche aus verbundenen Kanälen erscheinen in einem Arbeitsbereich.' },
      { id: 'manualControl', label: 'AI pausieren und manuell antworten', info: 'Ein Teammitglied kann jedes Gespräch übernehmen und manuell fortsetzen.' },
      { id: 'leadCollection', label: 'Lead-Erfassung und Lead-Liste', info: 'Name, Telefonnummer, Anfrage und Bearbeitungsstatus werden gespeichert.' },
      { id: 'websiteWidget', label: 'Anpassbarer Website-Chat', info: 'Farbe, Begrüßung, Schnellfragen und Anzeigeseiten lassen sich anpassen.' },
      { id: 'photoOcr', label: 'Foto- und Texterkennung (OCR)', info: 'Monatliches Fotolimit: Starter 100, Business 250, Premium 1.500 und Enterprise unbegrenzt.' },
      { id: 'voiceMessages', label: 'Sprachnachrichten im Chat', info: 'Diese Funktion gilt nur für Audionachrichten im Chat und umfasst keine Telefonanrufe. Monatliches Limit: Starter 100, Business 250, Premium 1.500 und Enterprise unbegrenzt.' },
      { id: 'aiCallMinutes', label: 'aiCALL-Gesprächsminuten', info: 'Enterprise enthält monatlich 100 aiCALL-Minuten als Bonus. aiCALL ist ein eigenständiges Anrufprodukt; weitere Minuten und Funktionen werden separat gebucht.' },
      { id: 'instagramActions', label: 'Instagram-Kommentare und Story-Antworten', info: 'Monatliches Limit: Starter 100, Business 250, Premium 1.500 und Enterprise unbegrenzt.' },
      { id: 'followUp', label: 'Erneute Kundenansprache', info: 'Monatliches Follow-up-Limit: Starter 100, Business 250, Premium 1.500 und Enterprise unbegrenzt.' },
      { id: 'analytics', label: 'Analyse von Gesprächen, Leads und Kanälen', info: 'Zeigt zentrale Kennzahlen zu Antworten, Gesprächen, Leads und verbundenen Kanälen.' },
      {
        id: 'support',
        label: 'aiNOW-Support',
        info: 'Starter und Business enthalten die Einrichtung. Laufende Änderungen beginnen mit Premium.',
      },
      {
        id: 'custom',
        label: 'Neue Funktion anfragen',
        info: 'Enterprise ermöglicht die Bewertung und Entwicklung einer fehlenden Funktion.',
      },
    ],
  },
  guide: {
    eyebrow: 'So wählen Sie',
    title: 'Zählen Sie nicht nur Nachrichten.',
    description:
      'Ein hochwertiger Kunde kann wichtiger sein als tausend einfache Fragen. Auch die Komplexität bestimmt den Tarif.',
    items: [
      {
        title: 'Wie viele Antworten benötigen Sie?',
        text: 'Nutzen Sie den Durchschnitt der letzten drei Monate und planen Sie Wachstum ein.',
      },
      {
        title: 'Wie viele Konten verbinden Sie?',
        text: 'Zwei Instagram-Konten und ein Telegram-Bot zählen als drei.',
      },
      {
        title: 'Wie viel muss das System wissen?',
        text: 'Zwanzig Angebote lassen sich manuell erfassen. Ein großer Katalog benötigt eine Wissensdatenbank.',
      },
      {
        title: 'Wie komplex ist der Verkauf?',
        text: 'Qualifizierung, Buchung, Nachverfolgung und individuelle Abläufe benötigen einen stärkeren Tarif.',
      },
    ],
  },
  faq: {
    eyebrow: 'Häufige Fragen',
    title: 'Kurze Antworten vor Ihrer Wahl.',
    items: [
      {
        question: 'Was ist der Unterschied zwischen Kanal und verbundenem Konto?',
        answer:
          'Kanäle sind Instagram, Messenger, WhatsApp, Telegram und Website-Chat. Jede konkrete Seite, Nummer, jeder Bot oder jedes Widget zählt als verbundenes Konto.',
      },
      {
        question: 'Was sind Nemo Lite, Smart, Pro und Ultra?',
        answer:
          'Das sind Servicestufen von aiCHATS. Sie beschreiben Komplexität, Wissenskapazität und Support, nicht einzelne AI-Modelle.',
      },
      {
        question: 'Wann brauche ich eine Wissensdatenbank?',
        answer:
          'Die Wissensdatenbank beginnt mit Business. Premium oder Enterprise passt, wenn Daten häufig wechseln, der Katalog groß ist oder eine automatische Quellsynchronisierung nötig ist.',
      },
      {
        question: 'Was bedeutet Einrichtung gegenüber laufendem Support?',
        answer:
          'Starter und Business enthalten die erste Einrichtung. Premium ergänzt vereinbarte laufende Änderungen an Antworten, Regeln, Aktionen und Abläufen.',
      },
      {
        question: 'Können Sie eine fehlende Funktion ergänzen?',
        answer:
          'Enterprise-Kunden können eine neue Funktion anfragen. aiNOW bewertet Ziel, Aufwand und Zeitrahmen vor einer separaten Freigabe.',
      },
    ],
  },
};

const TR_COPY: ChatPricingCopy = {
  serviceLevel: 'Hizmet seviyesi',
  repliesPerMonth: 'aylık yanıt',
  repliesInfo:
    'Bir fatura dönemi içinde müşterilere gönderilebilecek en yüksek AI yanıtı sayısı.',
  infoLabel: '{item}: açıklama',
  swipeHint: 'Paketleri karşılaştırmak için kaydırın',
  previousPlan: 'Önceki paket',
  nextPlan: 'Sonraki paket',
  plansLabel: 'aiCHATS paketleri',
  enterpriseBadge: 'Tam paket',
  enterpriseCta: 'Tam paketi seçin',
  ragKnowledge: 'RAG bilgi tabanı',
  aiCallBonus: {
    label: 'aiCALL bonusu',
    value: '100 dk / ay',
    unit: 'dk',
    caption: 'Aylık dahil',
    info: 'Enterprise paketine her ay 100 aiCALL görüşme dakikası dahildir. Ek dakikalar ve arama özellikleri aiCALL üzerinden ayrıca sunulur.',
    cta: 'aiCALL’u inceleyin',
  },
  planHighlights: {
    starter: {
      label: 'Başlangıç',
      value: 'Kurulum dahil',
      caption: 'İlk kuralları aiNOW yapılandırır',
    },
    business: {
      label: 'Bilgi tabanı',
      value: 'Verilerinizle yanıt verir',
      caption: 'Ayda 1.000 güncelleme',
    },
    premium: {
      label: 'Sürekli destek',
      value: 'aiNOW güncel tutar',
      caption: 'Yanıtlar, kurallar ve teklifler',
    },
    custom: {
      label: 'Özel plan',
      value: 'İhtiyacınıza göre',
      caption: 'Kapasite ve entegrasyonlar anlaşmaya göre',
    },
  },
  customPrice: 'Teklifle',
  customVolume: 'Özel',
  customCta: 'Özel paket isteyin',
  cardLabels: { accounts: 'Hesaplar', catalog: 'Ürünler', updates: 'Güncellemeler' },
  disclaimer:
    'Katalog aralıkları Starter 20-100, Business 100-500, Premium 500-2.000 ve Enterprise 2.000-5.000 üründür. Üst sayı pakete dahil limittir. Daha büyük veya özel kataloglar için Custom hazırlanır; varyantlar tek bir ana ürün sayılır.',
  plans: {
    starter: {
      summary:
        'Tek hesap ve basit yanıtlar isteyen küçük işletmeler için.',
      serviceInfo:
        'Nemo Lite, basit ve tekrarlanan işler için hizmet seviyesidir.',
      features: [
        '1 bağlı hesap',
        '20-100 ürün',
        'Yanıtlar ve potansiyel müşteri toplama',
        'Tek seferlik kurulum',
      ],
      featureInfo: [
        'Her bağlı sayfa, numara, bot veya web sitesi sohbeti bir hesap sayılır.',
        'Aynı temel ürünün renk, beden ve diğer varyantları ayrı ürün sayılmaz.',
        'aiCHATS onaylı soruları yanıtlar ve müşterinin iletişim bilgilerini toplar.',
        'aiNOW ilk kuralları yapılandırıp sistemi başlatır. Sürekli değişiklikler dahil değildir.',
      ],
      catalogValue: '20-100 ürün',
      qualification: 'Temel',
      booking: 'Dahil değil',
      automation: 'Dahil değil',
      support: 'İlk kurulum',
      custom: 'Dahil değil',
    },
    business: {
      summary:
        'Potansiyel müşteri değerlendirme, randevu ve üç hesaba kadar kullanım için.',
      serviceInfo:
        'Nemo Smart, değerlendirme ve satış akışları için hizmet seviyesidir.',
      features: [
        '3 bağlı hesap',
        '100-500 ürün',
        'Bilgi tabanı ve 1.000 güncelleme',
        'Müşteri değerlendirme ve randevu',
      ],
      featureInfo: [
        'Örneğin iki Instagram hesabı ile bir Telegram botu üç hesap sayılır.',
        'Aynı temel ürünün renk, beden ve diğer varyantları ayrı ürün sayılmaz.',
        'aiCHATS onaylı bilgi tabanınızı kullanır; ayda 1.000 kayda kadar ekleme veya güncelleme yapılabilir.',
        'Sistem onaylı soruları sorar, yanıtları saklar ve sonraki adımı belirler.',
      ],
      catalogValue: '100-500 ürün',
      qualification: 'Dahil',
      booking: 'Dahil',
      automation: 'Dahil değil',
      support: 'İlk kurulum',
      custom: 'Dahil değil',
    },
    premium: {
      summary:
        'Karmaşık satışlar, geniş bilgi tabanı ve sürekli destek için.',
      serviceInfo:
        'Nemo Pro, karmaşık satışlar ve geniş bilgi tabanı için hizmet seviyesidir.',
      features: [
        '5 bağlı hesap',
        '500-2.000 ürün',
        'Ayda 4.000 güncelleme',
        'Sürekli destek',
      ],
      featureInfo: [
        'Beş adede kadar bağlı hesap veya bot tek bir yönetim merkezinden çalışır.',
        'Aynı temel ürünün renk, beden ve diğer varyantları ayrı ürün sayılmaz.',
        'Bir ay içinde 4.000 adede kadar kayıt eklenebilir veya güncellenebilir.',
        'aiNOW, anlaşılan kapsam içinde yanıtları, kampanyaları ve çalışma kurallarını günceller.',
      ],
      catalogValue: '500-2.000 ürün',
      qualification: 'Dahil',
      booking: 'Dahil',
      automation: 'Gelişmiş',
      support: 'Sürekli',
      custom: 'Dahil değil',
    },
    enterprise: {
      summary:
        'Yüksek hacim ve işletmeye özel çalışma akışları için.',
      serviceInfo:
        'Nemo Ultra, yüksek hacim ve özel süreçler için hizmet seviyesidir.',
      features: [
        '10 bağlı hesap',
        '2.000-5.000 ürün',
        'Ayda 10.000 güncelleme',
        'Yeni özellik talebi',
      ],
      featureInfo: [
        'On adede kadar bağlı hesap veya bot tek bir yönetim merkezinden çalışır.',
        'Aynı temel ürünün renk, beden ve diğer varyantları ayrı ürün sayılmaz.',
        'Bir ay içinde 10.000 adede kadar kayıt eklenebilir veya güncellenebilir.',
        'Gerekli bir özellik yoksa aiNOW kapsamı belirler ve onay sonrasında geliştirebilir.',
      ],
      catalogValue: '2.000-5.000 ürün',
      qualification: 'Dahil',
      booking: 'Dahil',
      automation: 'Özel',
      support: 'Öncelikli',
      custom: 'Dahil',
    },
    custom: {
      ...EN_COPY.plans.custom,
      summary: '5.000’den fazla ürün veya standart dışı kataloglar için.',
      serviceInfo: 'Nemo Custom verilerinize, kanallarınıza ve iş akışınıza göre hazırlanır.',
      features: ['Hesaplar', '5.000+ ürün', 'Güncellemeler', 'Entegrasyonlar'],
      featureInfo: [
        'Kanal ve hesap sayısı gerçek iş akışınıza göre belirlenir.',
        'Renk, beden ve diğer varyantlar ayrı ürün değil, tek ürünün özellikleri sayılır.',
        'Güncelleme sıklığı ve hacmi katalog değişimlerinize göre belirlenir.',
        'Entegrasyonlar, veri kaynakları ve yeni özellikler ayrıca değerlendirilir.',
      ],
      catalogValue: '5.000+ · özel',
      support: 'Özel',
    },
  },
  foundation: {
    eyebrow: 'Her pakete dahil',
    title: 'Temel ihtiyaçlar ilk günden hazır.',
    description:
      'Fiyat ve kapasite pakete göre değişir. Temel yönetim özellikleri tüm paketlerde bulunur.',
    visualTitle: 'Tek AI yönetim merkezi',
    visualText:
      'Tüm bağlı hesaplar aynı onaylı işletme bilgilerini, yanıtları ve kuralları kullanır.',
    items: [
      {
        title: 'Onaylı bilgiler',
        text: 'Fiyatlar, hizmetler, kurallar ve çalışma saatleri.',
        info: 'aiCHATS yalnızca onayladığınız bilgi ve kurallara göre yanıt hazırlar.',
      },
      {
        title: 'Potansiyel müşteri toplama',
        text: 'Ad, telefon ve talep birlikte saklanır.',
        info: 'Sistem sonraki adım için gerekli müşteri bilgilerini kaydeder.',
      },
      {
        title: 'Çalışana aktarma',
        text: 'Belirsiz görüşmeler ekibinize gider.',
        info: 'Karmaşık veya belirsiz bir görüşme ekip üyesine aktarılır.',
      },
      {
        title: 'Birleşik görüşmeler',
        text: 'Tüm sohbetleri görün ve elle devam edin.',
        info: 'Bağlı hesapların görüşmeleri tek çalışma alanında görünür.',
      },
      {
        title: 'İşletme kurallarınız',
        text: 'Sistemin neyi yanıtlayacağını siz belirlersiniz.',
        info: 'aiCHATS yanıtlarını ve ne zaman çalışanın devralacağını tanımlayın.',
      },
      {
        title: 'Temel analiz',
        text: 'Neyin çalıştığını ve nerede yardım gerektiğini görün.',
        info: 'Yanıt, görüşme, müşteri adayı ve kanal ölçümlerini izleyin.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'Gerçek özellikler',
    title: 'Yalnızca yanıt değil. Tüm müşteri yolculuğu.',
    description:
      'aiCHATS, ekibinizin sohbetler, tablolar ve takvimlerde yürüttüğü işleri bir araya getirir.',
    items: [
      {
        title: 'Tüm görüşmeler tek yerde',
        text: 'Instagram, Messenger, WhatsApp, Telegram ve web sitesi sohbeti.',
        info: 'Tüm bağlı hesapların görüşmeleri tek çalışma alanında görünür.',
        availability: 'Tüm paketler',
      },
      {
        title: 'AI yanıtlarını durdurup elle yanıtlayın',
        text: 'Bir ekip üyesi istediği anda devralabilir.',
        info: 'Elle devralındığında o görüşmedeki otomatik yanıtlar durur.',
        availability: 'Tüm paketler',
      },
      {
        title: 'Müşteri adayı listesi ve durumu',
        text: 'Ad, telefon, talep ve sonraki adım bir arada.',
        info: 'Her müşteri adayı kaydı gerekli bilgileri ve sonraki işlemi saklar.',
        availability: 'Tüm paketler',
      },
      {
        title: 'Randevu ve takvim',
        text: 'Uygunluğu bulun, randevu oluşturun veya onay isteyin.',
        info: 'Takvim bağlantısı uygun zamanı kontrol eder ve randevu oluşturur.',
        availability: 'Business ve üzeri',
      },
      {
        title: 'Instagram yorumları ve Stories',
        text: 'Herkese açık yanıt verin, gerekirse özel görüşmeye geçin.',
        info: 'Desteklenen işlemler bağlı hesaba ve onaylı kurallara uyar.',
        availability: 'Tüm paketler',
      },
      {
        title: 'Müşteriyi yeniden takip etme',
        text: 'Görüşme durduğunda onaylı bir hatırlatma gönderin.',
        info: 'Hatırlatmanın zamanı ve metni önceden kararlaştırılır.',
        availability: 'Tüm paketler',
      },
      {
        title: 'Web sitesi sohbetini özelleştirme',
        text: 'Renkler, karşılama, hızlı sorular ve gösterim sayfaları.',
        info: 'Sohbet bileşeni markanıza ve çalışma akışınıza göre yapılandırılır.',
        availability: 'Tüm paketler',
      },
      {
        title: 'Katalog eşitleme',
        text: 'Geniş ürün bilgi tabanını güncel tutun.',
        info: 'Premium ve Enterprise, kararlaştırılan bir kaynaktan veri eşitleyebilir.',
        availability: 'Premium ve üzeri',
      },
    ],
  },
  comparison: {
    eyebrow: 'Açık karşılaştırma',
    title: 'Farkı tek bakışta görün.',
    description:
      'Yalnızca seçiminizi etkileyen sınırları ve özellikleri karşılaştırın.',
    feature: 'Özellik',
    included: 'Dahil',
    notIncluded: 'Dahil değil',
    unlimited: 'Sınırsız',
    rows: [
      {
        id: 'service',
        label: 'Hizmet seviyesi',
        info: 'Karmaşıklığı, bilgi kapasitesini ve destek düzeyini açıklar.',
      },
      {
        id: 'replies',
        label: 'Aylık AI yanıtı',
        info: 'Bir ay içinde müşterilere gönderilen en yüksek yanıt sayısı.',
      },
      {
        id: 'accounts',
        label: 'Bağlı hesaplar',
        info: 'Her sayfa, numara, bot veya web sitesi sohbeti ayrı sayılır.',
      },
      {
        id: 'catalog',
        label: 'Ürünler ve hizmetler',
        info: 'Starter elle yönetilir. Bilgi tabanı Business ile, otomatik kaynak eşitleme Premium ile başlar.',
      },
      {
        id: 'updates',
        label: 'Aylık güncellemeler',
        info: 'Bir ay içinde eklenebilen veya değiştirilebilen bilgi kayıtları.',
      },
      {
        id: 'qualification',
        label: 'Müşteri adayı değerlendirme',
        info: 'Müşteri ihtiyacını belirler, bilgileri saklar ve sonraki adımı seçer.',
      },
      {
        id: 'booking',
        label: 'Randevu ve takvim',
        info: 'Uygun zamanı bulur, randevu oluşturur veya onay ister.',
      },
      {
        id: 'automation',
        label: 'Gelişmiş otomasyon',
        info: 'Karmaşık iş akışları, özel yönlendirme ve otomatik katalog eşitleme.',
      },
      { id: 'channels', label: 'Instagram, Messenger, WhatsApp, Telegram ve web sitesi', info: 'Bu kanallar seçilen paketin hesap sınırı içinde bağlanabilir.' },
      { id: 'unifiedInbox', label: 'Tüm konuşmalar tek yerde', info: 'Bağlı kanallardaki konuşmalar tek çalışma alanında görünür.' },
      { id: 'manualControl', label: 'AI yanıtlarını durdurma ve elle cevaplama', info: 'Ekip üyesi herhangi bir konuşmayı devralıp elle sürdürebilir.' },
      { id: 'leadCollection', label: 'Müşteri adayı toplama ve listeleme', info: 'Ad, telefon, talep ve işlem durumu saklanır.' },
      { id: 'websiteWidget', label: 'Özelleştirilebilir web sitesi sohbeti', info: 'Renk, karşılama, hızlı sorular ve gösterim sayfaları özelleştirilebilir.' },
      { id: 'photoOcr', label: 'Fotoğraf ve metin tanıma (OCR)', info: 'Aylık fotoğraf limiti: Starter 100, Business 250, Premium 1.500 ve Enterprise sınırsız.' },
      { id: 'voiceMessages', label: 'Sohbetteki sesli mesajlar', info: 'Bu özellik yalnızca sohbet üzerinden gönderilen sesli mesajları kapsar; telefon aramalarını içermez. Aylık limit: Starter 100, Business 250, Premium 1.500 ve Enterprise sınırsız.' },
      { id: 'aiCallMinutes', label: 'aiCALL görüşme dakikası', info: 'Enterprise paketine ayda 100 aiCALL dakikası bonus olarak dahildir. aiCALL ayrı bir arama ürünüdür; ek dakikalar ve özellikler ayrı paketle sunulur.' },
      { id: 'instagramActions', label: 'Instagram yorumları ve Story yanıtları', info: 'Aylık limit: Starter 100, Business 250, Premium 1.500 ve Enterprise sınırsız.' },
      { id: 'followUp', label: 'Müşteriyle yeniden iletişim', info: 'Aylık takip limiti: Starter 100, Business 250, Premium 1.500 ve Enterprise sınırsız.' },
      { id: 'analytics', label: 'Konuşma, müşteri adayı ve kanal analitiği', info: 'Yanıtlar, konuşmalar, müşteri adayları ve kanallar için temel ölçümleri gösterir.' },
      {
        id: 'support',
        label: 'aiNOW desteği',
        info: 'Starter ve Business kurulumu içerir. Sürekli değişiklikler Premium ile başlar.',
      },
      {
        id: 'custom',
        label: 'Yeni özellik talebi',
        info: 'Enterprise eksik bir özelliğin kapsamlandırılmasını ve geliştirilmesini talep edebilir.',
      },
    ],
  },
  guide: {
    eyebrow: 'Nasıl seçilir',
    title: 'Yalnızca mesaj sayısını hesaplamayın.',
    description:
      'Değerli tek bir müşteri, bin basit sorudan daha önemli olabilir. Paket seçiminde satışın karmaşıklığını da dikkate alın.',
    items: [
      {
        title: 'Kaç yanıta ihtiyacınız var?',
        text: 'Son üç ayın ortalamasını kullanın ve büyüme payı bırakın.',
      },
      {
        title: 'Kaç hesap bağlayacaksınız?',
        text: 'İki Instagram hesabı ve bir Telegram botu üç hesap sayılır.',
      },
      {
        title: 'Sistem ne kadar bilgi bilmeli?',
        text: 'Yirmi teklif elle girilebilir. Geniş bir katalog için bilgi tabanı gerekir.',
      },
      {
        title: 'Satış ne kadar karmaşık?',
        text: 'Değerlendirme, randevu, yeniden iletişim ve özel süreçler daha güçlü bir paket gerektirir.',
      },
    ],
  },
  faq: {
    eyebrow: 'Sık sorulan sorular',
    title: 'Seçmeden önce kısa yanıtlar.',
    items: [
      {
        question: 'Kanal ile bağlı hesap arasındaki fark nedir?',
        answer:
          'Kanallar Instagram, Messenger, WhatsApp, Telegram ve web sitesi sohbetidir. Her belirli sayfa, numara, bot veya bileşen ayrı bir bağlı hesap sayılır.',
      },
      {
        question: 'Nemo Lite, Smart, Pro ve Ultra nedir?',
        answer:
          'Bunlar aiCHATS hizmet seviyeleridir. İşin karmaşıklığını, bilgi kapasitesini ve desteği açıklar; ayrı AI modelleri değildir.',
      },
      {
        question: 'Ne zaman bilgi tabanına ihtiyacım olur?',
        answer:
          'Bilgi tabanı Business ile başlar. Bilgiler sık değişiyorsa, katalog büyükse veya otomatik kaynak eşitleme gerekiyorsa Premium ya da Enterprise seçin.',
      },
      {
        question: 'İlk kurulum ve sürekli destek arasındaki fark nedir?',
        answer:
          'Starter ve Business ilk kurulumu içerir. Premium, yanıtlar, kurallar, kampanyalar ve süreçlerde kararlaştırılan sürekli değişiklikleri ekler.',
      },
      {
        question: 'Olmayan bir özelliği ekleyebilir misiniz?',
        answer:
          'Enterprise müşterileri yeni özellik talep edebilir. aiNOW ayrı onaydan önce hedefi, kapsamı ve süreyi değerlendirir.',
      },
    ],
  },
};

const FA_COPY: ChatPricingCopy = {
  serviceLevel: 'سطح خدمات',
  repliesPerMonth: 'پاسخ در ماه',
  repliesInfo:
    'حداکثر تعداد پاسخ‌های AI که در یک دوره صورتحساب برای مشتریان ارسال می‌شود.',
  infoLabel: 'توضیح {item}',
  swipeHint: 'برای مقایسه بسته‌ها ورق بزنید',
  previousPlan: 'بسته قبلی',
  nextPlan: 'بسته بعدی',
  plansLabel: 'بسته‌های aiCHATS',
  enterpriseBadge: 'بسته کامل',
  enterpriseCta: 'انتخاب بسته کامل',
  ragKnowledge: 'پایگاه دانش RAG',
  aiCallBonus: {
    label: 'هدیه aiCALL',
    value: '۱۰۰ دقیقه / ماه',
    unit: 'دقیقه',
    caption: 'ماهانه در بسته قرار دارد',
    info: 'بسته Enterprise هر ماه شامل ۱۰۰ دقیقه تماس aiCALL است. دقیقه‌های بیشتر و امکانات تماس به‌صورت جداگانه از طریق aiCALL ارائه می‌شود.',
    cta: 'مشاهده aiCALL',
  },
  planHighlights: {
    starter: {
      label: 'راه‌اندازی',
      value: 'تنظیم اولیه شامل است',
      caption: 'aiNOW قوانین اولیه را تنظیم می‌کند',
    },
    business: {
      label: 'پایگاه دانش',
      value: 'با داده‌های شما پاسخ می‌دهد',
      caption: '۱٬۰۰۰ به‌روزرسانی در ماه',
    },
    premium: {
      label: 'پشتیبانی مستمر',
      value: 'aiNOW آن را به‌روز نگه می‌دارد',
      caption: 'پاسخ‌ها، قوانین و پیشنهادها',
    },
    custom: {
      label: 'طرح اختصاصی',
      value: 'متناسب با نیاز شما',
      caption: 'ظرفیت و یکپارچه‌سازی با توافق',
    },
  },
  customPrice: 'با درخواست',
  customVolume: 'سفارشی',
  customCta: 'درخواست بسته اختصاصی',
  cardLabels: { accounts: 'حساب‌ها', catalog: 'محصولات', updates: 'به‌روزرسانی‌ها' },
  disclaimer:
    'بازه‌های کاتالوگ عبارت‌اند از Starter برای ۲۰ تا ۱۰۰، Business برای ۱۰۰ تا ۵۰۰، Premium برای ۵۰۰ تا ۲٬۰۰۰ و Enterprise برای ۲٬۰۰۰ تا ۵٬۰۰۰ محصول. عدد بالاتر سقف مشمول بسته است. برای کاتالوگ بزرگ‌تر یا خاص، Custom ارائه می‌شود و تنوع‌های یک محصول، یک محصول پایه حساب می‌شوند.',
  plans: {
    starter: {
      summary:
        'برای کسب‌وکار کوچکی که به یک حساب و پاسخ‌های ساده نیاز دارد.',
      serviceInfo:
        'Nemo Lite سطح خدمات مناسب کارهای ساده و تکراری است.',
      features: [
        '۱ حساب متصل',
        '۲۰ تا ۱۰۰ محصول',
        'پاسخ‌گویی و ثبت سرنخ',
        'راه‌اندازی یک‌باره',
      ],
      featureInfo: [
        'هر صفحه، شماره، ربات یا گفت‌وگوی وب‌سایت یک حساب جداگانه محسوب می‌شود.',
        'رنگ، اندازه و سایر گونه‌های یک محصول اصلی، محصول جداگانه محسوب نمی‌شوند.',
        'aiCHATS به پرسش‌های تأییدشده پاسخ می‌دهد و اطلاعات تماس مشتری را ثبت می‌کند.',
        'aiNOW تنظیم اولیه قوانین و راه‌اندازی را انجام می‌دهد. تغییرات مستمر شامل این بسته نیست.',
      ],
      catalogValue: '۲۰ تا ۱۰۰ محصول',
      qualification: 'ساده',
      booking: 'ندارد',
      automation: 'ندارد',
      support: 'راه‌اندازی',
      custom: 'ندارد',
    },
    business: {
      summary:
        'برای ارزیابی سرنخ، رزرو و اتصال حداکثر سه حساب.',
      serviceInfo:
        'Nemo Smart سطح خدمات مناسب ارزیابی سرنخ و فرایندهای فروش است.',
      features: [
        '۳ حساب متصل',
        '۱۰۰ تا ۵۰۰ محصول',
        'پایگاه دانش و ۱٬۰۰۰ به‌روزرسانی',
        'ارزیابی سرنخ و رزرو',
      ],
      featureInfo: [
        'برای نمونه، دو حساب Instagram و یک ربات Telegram سه حساب محسوب می‌شود.',
        'رنگ، اندازه و سایر گونه‌های یک محصول اصلی، محصول جداگانه محسوب نمی‌شوند.',
        'aiCHATS از پایگاه دانش تأییدشده شما استفاده می‌کند و تا ۱٬۰۰۰ رکورد در ماه قابل افزودن یا به‌روزرسانی است.',
        'سیستم پرسش‌های تأییدشده را می‌پرسد، پاسخ‌ها را ذخیره می‌کند و گام بعدی را مشخص می‌کند.',
      ],
      catalogValue: '۱۰۰ تا ۵۰۰ محصول',
      qualification: 'دارد',
      booking: 'دارد',
      automation: 'ندارد',
      support: 'راه‌اندازی',
      custom: 'ندارد',
    },
    premium: {
      summary:
        'برای فروش پیچیده، پایگاه دانش بزرگ و پشتیبانی مستمر.',
      serviceInfo:
        'Nemo Pro سطح خدمات مناسب فروش پیچیده و پایگاه دانش بزرگ است.',
      features: [
        '۵ حساب متصل',
        '۵۰۰ تا ۲٬۰۰۰ محصول',
         '۴٬۰۰۰ به‌روزرسانی در ماه',
        'پشتیبانی مستمر',
      ],
      featureInfo: [
        'حداکثر پنج حساب یا ربات متصل از یک مرکز مدیریت مشترک استفاده می‌کنند.',
        'رنگ، اندازه و سایر گونه‌های یک محصول اصلی، محصول جداگانه محسوب نمی‌شوند.',
         'در هر ماه حداکثر ۴٬۰۰۰ رکورد قابل افزودن یا به‌روزرسانی است.',
        'aiNOW در محدوده توافق‌شده پاسخ‌ها، پیشنهادها و قوانین کاری را به‌روزرسانی می‌کند.',
      ],
      catalogValue: '۵۰۰ تا ۲٬۰۰۰ محصول',
      qualification: 'دارد',
      booking: 'دارد',
      automation: 'پیشرفته',
      support: 'مستمر',
      custom: 'ندارد',
    },
    enterprise: {
      summary:
        'برای حجم بالا و فرایندهای کاری اختصاصی.',
      serviceInfo:
        'Nemo Ultra سطح خدمات مناسب حجم بالا و فرایندهای اختصاصی است.',
      features: [
        '۱۰ حساب متصل',
        '۲٬۰۰۰-۵٬۰۰۰ محصول',
        '۱۰٬۰۰۰ به‌روزرسانی در ماه',
        'درخواست قابلیت جدید',
      ],
      featureInfo: [
        'حداکثر ده حساب یا ربات متصل از یک مرکز مدیریت مشترک استفاده می‌کنند.',
        'رنگ، اندازه و سایر گونه‌های یک محصول اصلی، محصول جداگانه محسوب نمی‌شوند.',
        'در هر ماه حداکثر ۱۰٬۰۰۰ رکورد قابل افزودن یا به‌روزرسانی است.',
        'اگر قابلیت مورد نیاز موجود نباشد، aiNOW دامنه کار را بررسی می‌کند و پس از توافق می‌تواند آن را بسازد.',
      ],
      catalogValue: '۲٬۰۰۰ تا ۵٬۰۰۰ محصول',
      qualification: 'دارد',
      booking: 'دارد',
      automation: 'اختصاصی',
      support: 'اولویت‌دار',
      custom: 'دارد',
    },
    custom: {
      ...EN_COPY.plans.custom,
      summary: 'برای بیش از ۵٬۰۰۰ محصول یا کاتالوگ با ساختار غیرمعمول.',
      serviceInfo: 'Nemo Custom متناسب با داده‌ها، کانال‌ها و فرایند کاری شما تنظیم می‌شود.',
      features: ['حساب‌ها', 'بیش از ۵٬۰۰۰ محصول', 'به‌روزرسانی', 'اتصال‌ها'],
      featureInfo: [
        'تعداد کانال‌ها و حساب‌ها بر اساس فرایند واقعی شما تعیین می‌شود.',
        'رنگ، اندازه و سایر گونه‌ها ویژگی یک محصول هستند و محصول جداگانه محسوب نمی‌شوند.',
        'تعداد و دفعات به‌روزرسانی بر اساس تغییرات کاتالوگ توافق می‌شود.',
        'اتصال‌ها، منابع داده و قابلیت‌های جدید جداگانه ارزیابی می‌شوند.',
      ],
      catalogValue: 'بیش از ۵٬۰۰۰ · اختصاصی',
      support: 'اختصاصی',
    },
  },
  foundation: {
    eyebrow: 'در همه بسته‌ها',
    title: 'امکانات پایه از روز اول آماده است.',
    description:
      'قیمت و ظرفیت بسته‌ها متفاوت است، اما کنترل‌های اصلی در همه بسته‌ها ارائه می‌شود.',
    visualTitle: 'یک مرکز مدیریت AI',
    visualText:
      'همه حساب‌های متصل از اطلاعات، پاسخ‌ها و قوانین تأییدشده یکسان استفاده می‌کنند.',
    items: [
      {
        title: 'اطلاعات تأییدشده',
        text: 'قیمت‌ها، خدمات، قوانین و ساعات کاری.',
        info: 'aiCHATS پاسخ‌ها را فقط بر اساس اطلاعات و قوانینی آماده می‌کند که شما تأیید کرده‌اید.',
      },
      {
        title: 'ثبت سرنخ',
        text: 'نام، شماره و درخواست کنار هم ذخیره می‌شود.',
        info: 'سیستم اطلاعات لازم مشتری را برای گام بعدی نگه می‌دارد.',
      },
      {
        title: 'ارجاع به کارشناس',
        text: 'گفت‌وگوهای نامطمئن به تیم شما می‌رسد.',
        info: 'گفت‌وگوی پیچیده یا نامطمئن به یکی از اعضای تیم ارجاع می‌شود.',
      },
      {
        title: 'گفت‌وگوهای یکپارچه',
        text: 'همه چت‌ها را ببینید و دستی ادامه دهید.',
        info: 'گفت‌وگوهای حساب‌های متصل در یک فضای کاری نمایش داده می‌شود.',
      },
      {
        title: 'قوانین کاری شما',
        text: 'شما مشخص می‌کنید سیستم به چه مواردی پاسخ دهد.',
        info: 'نحوه پاسخ‌گویی aiCHATS و زمان ارجاع به کارشناس را تعیین کنید.',
      },
      {
        title: 'تحلیل پایه',
        text: 'عملکرد و نقاط نیازمند بررسی را ببینید.',
        info: 'شاخص‌های اصلی پاسخ، گفت‌وگو، سرنخ و کانال را دنبال کنید.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'قابلیت‌های واقعی',
    title: 'فراتر از پاسخ‌گویی. تمام مسیر مشتری.',
    description:
      'aiCHATS کارهایی را یکپارچه می‌کند که تیم شما اکنون در چت‌ها، جدول‌ها و تقویم‌ها انجام می‌دهد.',
    items: [
      {
        title: 'همه گفت‌وگوها در یک محل',
        text: 'Instagram، Messenger، WhatsApp، Telegram و چت وب‌سایت.',
        info: 'گفت‌وگوهای همه حساب‌های متصل در یک فضای کاری نمایش داده می‌شود.',
        availability: 'همه بسته‌ها',
      },
      {
        title: 'توقف AI و پاسخ دستی',
        text: 'یکی از اعضای تیم هر زمان می‌تواند گفت‌وگو را تحویل بگیرد.',
        info: 'پس از تحویل دستی، پاسخ‌های خودکار در همان گفت‌وگو متوقف می‌شود.',
        availability: 'همه بسته‌ها',
      },
      {
        title: 'فهرست و وضعیت سرنخ‌ها',
        text: 'نام، شماره، درخواست و گام بعدی در یک محل.',
        info: 'هر رکورد سرنخ، اطلاعات و اقدام بعدی مورد نیاز را نگه می‌دارد.',
        availability: 'همه بسته‌ها',
      },
      {
        title: 'رزرو و تقویم',
        text: 'زمان آزاد را پیدا کنید، رزرو بسازید یا تأیید بخواهید.',
        info: 'اتصال تقویم زمان‌های آزاد را بررسی می‌کند و رزرو را می‌سازد.',
        availability: 'Business و بالاتر',
      },
      {
        title: 'نظرها و Stories در Instagram',
        text: 'پاسخ عمومی بدهید و در صورت نیاز گفت‌وگوی خصوصی را آغاز کنید.',
        info: 'اقدام‌های پشتیبانی‌شده از حساب متصل و قوانین تأییدشده پیروی می‌کند.',
        availability: 'همه بسته‌ها',
      },
      {
        title: 'پیگیری دوباره مشتری',
        text: 'پس از توقف گفت‌وگو یک یادآوری تأییدشده بفرستید.',
        info: 'زمان و متن پیام پیگیری از قبل توافق می‌شود.',
        availability: 'همه بسته‌ها',
      },
      {
        title: 'شخصی‌سازی چت وب‌سایت',
        text: 'رنگ‌ها، پیام خوشامد، پرسش‌های سریع و صفحه‌های نمایش.',
        info: 'ابزار چت متناسب با برند و فرایند کاری شما تنظیم می‌شود.',
        availability: 'همه بسته‌ها',
      },
      {
        title: 'همگام‌سازی فهرست محصولات',
        text: 'پایگاه دانش بزرگ محصولات را به‌روز نگه دارید.',
        info: 'Premium و Enterprise می‌توانند داده‌ها را از منبع توافق‌شده همگام کنند.',
        availability: 'Premium و بالاتر',
      },
    ],
  },
  comparison: {
    eyebrow: 'مقایسه دقیق',
    title: 'تفاوت‌ها را سریع ببینید.',
    description:
      'فقط محدودیت‌ها و کنترل‌هایی را مقایسه کنید که بر انتخاب شما اثر دارد.',
    feature: 'قابلیت',
    included: 'دارد',
    notIncluded: 'ندارد',
    unlimited: 'نامحدود',
    rows: [
      {
        id: 'service',
        label: 'سطح خدمات',
        info: 'پیچیدگی کار، ظرفیت دانش و سطح پشتیبانی را توصیف می‌کند.',
      },
      {
        id: 'replies',
        label: 'پاسخ AI در ماه',
        info: 'حداکثر پاسخ‌های ارسالی برای مشتریان در یک ماه.',
      },
      {
        id: 'accounts',
        label: 'حساب‌های متصل',
        info: 'هر صفحه، شماره، ربات یا چت وب‌سایت جداگانه محاسبه می‌شود.',
      },
      {
        id: 'catalog',
        label: 'محصولات و خدمات',
        info: 'Starter دستی است. پایگاه دانش از Business و همگام سازی خودکار منبع از Premium آغاز می‌شود.',
      },
      {
        id: 'updates',
        label: 'به‌روزرسانی در ماه',
        info: 'رکوردهای دانشی که در یک ماه قابل افزودن یا تغییر است.',
      },
      {
        id: 'qualification',
        label: 'ارزیابی سرنخ',
        info: 'نیاز مشتری را مشخص می‌کند، اطلاعات را ذخیره می‌کند و گام بعدی را تعیین می‌کند.',
      },
      {
        id: 'booking',
        label: 'رزرو و تقویم',
        info: 'زمان آزاد را پیدا می‌کند، رزرو می‌سازد یا تأیید می‌خواهد.',
      },
      {
        id: 'automation',
        label: 'خودکارسازی پیشرفته',
        info: 'فرایندهای پیچیده، مسیریابی سفارشی و همگام‌سازی خودکار فهرست محصولات.',
      },
      { id: 'channels', label: 'Instagram، Messenger، WhatsApp، Telegram و وب‌سایت', info: 'این کانال‌ها در محدوده حساب‌های بسته انتخابی متصل می‌شوند.' },
      { id: 'unifiedInbox', label: 'همه گفتگوها در یک محیط', info: 'گفتگوهای کانال‌های متصل در یک فضای کاری دیده می‌شوند.' },
      { id: 'manualControl', label: 'توقف AI و پاسخ دستی', info: 'یکی از اعضای تیم می‌تواند هر گفتگو را تحویل بگیرد و دستی ادامه دهد.' },
      { id: 'leadCollection', label: 'جمع‌آوری و فهرست سرنخ‌ها', info: 'نام، تلفن، درخواست و وضعیت پیگیری مشتری ذخیره می‌شود.' },
      { id: 'websiteWidget', label: 'چت سفارشی وب‌سایت', info: 'رنگ، پیام خوش‌آمد، پرسش‌های سریع و صفحات نمایش قابل تنظیم است.' },
      { id: 'photoOcr', label: 'تشخیص عکس و متن (OCR)', info: 'سقف ماهانه عکس: Starter 100، Business 250، Premium 1,500 و Enterprise نامحدود.' },
      { id: 'voiceMessages', label: 'پیام‌های صوتی در چت', info: 'این قابلیت فقط پیام‌های صوتی ارسال‌شده در چت را پوشش می‌دهد و شامل تماس تلفنی نیست. سقف ماهانه: Starter 100، Business 250، Premium 1,500 و Enterprise نامحدود.' },
      { id: 'aiCallMinutes', label: 'دقیقه تماس aiCALL', info: 'بسته Enterprise ماهانه ۱۰۰ دقیقه aiCALL به‌عنوان هدیه دارد. aiCALL محصول جداگانه تماس است و دقیقه‌ها و امکانات بیشتر با بسته جداگانه ارائه می‌شود.' },
      { id: 'instagramActions', label: 'نظرهای Instagram و پاسخ Story', info: 'سقف ماهانه: Starter 100، Business 250، Premium 1,500 و Enterprise نامحدود.' },
      { id: 'followUp', label: 'پیگیری دوباره مشتری', info: 'سقف ماهانه پیگیری: Starter 100، Business 250، Premium 1,500 و Enterprise نامحدود.' },
      { id: 'analytics', label: 'تحلیل گفتگو، سرنخ و کانال', info: 'شاخص‌های اصلی پاسخ‌ها، گفتگوها، سرنخ‌ها و کانال‌ها را نشان می‌دهد.' },
      {
        id: 'support',
        label: 'پشتیبانی aiNOW',
        info: 'Starter و Business شامل راه‌اندازی است. تغییرات مستمر از Premium آغاز می‌شود.',
      },
      {
        id: 'custom',
        label: 'درخواست قابلیت جدید',
        info: 'Enterprise امکان بررسی و توسعه قابلیتی را فراهم می‌کند که اکنون وجود ندارد.',
      },
    ],
  },
  guide: {
    eyebrow: 'راهنمای انتخاب',
    title: 'فقط تعداد پیام‌ها را نشمارید.',
    description:
      'یک مشتری ارزشمند می‌تواند مهم‌تر از هزار پرسش ساده باشد. پیچیدگی فروش نیز باید در انتخاب بسته لحاظ شود.',
    items: [
      {
        title: 'به چند پاسخ نیاز دارید؟',
        text: 'میانگین سه ماه اخیر را در نظر بگیرید و برای رشد ظرفیت بگذارید.',
      },
      {
        title: 'چند حساب متصل می‌کنید؟',
        text: 'دو حساب Instagram و یک ربات Telegram سه حساب محسوب می‌شود.',
      },
      {
        title: 'سیستم چه میزان اطلاعات باید بداند؟',
        text: 'بیست پیشنهاد را می‌توان دستی وارد کرد. فهرست بزرگ به پایگاه دانش نیاز دارد.',
      },
      {
        title: 'فرایند فروش چقدر پیچیده است؟',
        text: 'ارزیابی، رزرو، پیگیری دوباره و فرایند اختصاصی به بسته قوی‌تری نیاز دارد.',
      },
    ],
  },
  faq: {
    eyebrow: 'پرسش‌های متداول',
    title: 'پاسخ‌های کوتاه پیش از انتخاب.',
    items: [
      {
        question: 'تفاوت کانال و حساب متصل چیست؟',
        answer:
          'کانال‌ها Instagram، Messenger، WhatsApp، Telegram و چت وب‌سایت است. هر صفحه، شماره، ربات یا ابزار مشخص یک حساب متصل محسوب می‌شود.',
      },
      {
        question: 'Nemo Lite، Smart، Pro و Ultra چیست؟',
        answer:
          'این‌ها نام سطح خدمات aiCHATS است و پیچیدگی کار، ظرفیت دانش و پشتیبانی را نشان می‌دهد. این نام‌ها مدل‌های جداگانه AI نیست.',
      },
      {
        question: 'چه زمانی به پایگاه دانش نیاز دارم؟',
        answer:
          'پایگاه دانش از Business آغاز می‌شود. اگر اطلاعات زیاد تغییر می‌کند، کاتالوگ بزرگ است یا همگام سازی خودکار منبع لازم دارید، Premium یا Enterprise را انتخاب کنید.',
      },
      {
        question: 'تفاوت راه‌اندازی اولیه و پشتیبانی مستمر چیست؟',
        answer:
          'Starter و Business شامل راه‌اندازی اولیه است. Premium تغییرات مستمر توافق‌شده در پاسخ‌ها، قوانین، پیشنهادها و فرایندها را نیز شامل می‌شود.',
      },
      {
        question: 'آیا می‌توانید قابلیتی را که وجود ندارد اضافه کنید؟',
        answer:
          'مشتریان Enterprise می‌توانند قابلیت جدید درخواست کنند. aiNOW پیش از تأیید جداگانه، هدف، حجم کار و زمان را بررسی می‌کند.',
      },
    ],
  },
};

const ZH_COPY: ChatPricingCopy = {
  serviceLevel: '服务级别',
  repliesPerMonth: '每月回复数',
  repliesInfo:
    '一个计费月内 AI 向客户发送回复的最高数量。',
  infoLabel: '{item}：说明',
  swipeHint: '滑动比较套餐',
  previousPlan: '上一个套餐',
  nextPlan: '下一个套餐',
  plansLabel: 'aiCHATS 套餐',
  enterpriseBadge: '完整套餐',
  enterpriseCta: '选择完整套餐',
  ragKnowledge: 'RAG 知识库',
  aiCallBonus: {
    label: 'aiCALL 赠送权益',
    value: '100 分钟 / 月',
    unit: '分钟',
    caption: '每月包含',
    info: 'Enterprise 每月包含 100 分钟 aiCALL 通话。更多分钟数和通话功能需通过 aiCALL 单独购买。',
    cta: '了解 aiCALL',
  },
  planHighlights: {
    starter: {
      label: '快速开始',
      value: '包含初始设置',
      caption: 'aiNOW 配置首批规则',
    },
    business: {
      label: '知识库',
      value: '根据您的数据回答',
      caption: '每月 1,000 次更新',
    },
    premium: {
      label: '持续支持',
      value: 'aiNOW 持续更新系统',
      caption: '回复、规则和优惠',
    },
    custom: {
      label: '定制方案',
      value: '按您的需求设计',
      caption: '容量和集成另行协商',
    },
  },
  customPrice: '按需报价',
  customVolume: '定制',
  customCta: '申请定制套餐',
  cardLabels: { accounts: '账号', catalog: '产品', updates: '更新' },
  disclaimer:
    '目录范围为 Starter 20-100、Business 100-500、Premium 500-2,000、Enterprise 2,000-5,000 个产品。区间上限是套餐包含的限额。更大或特殊目录使用 Custom，同一基础产品的不同规格只计为一个产品。',
  plans: {
    starter: {
      summary:
        '适合只需连接一个账号并处理简单回复的小型企业。',
      serviceInfo:
        'Nemo Lite 是面向简单、重复工作的服务级别。',
      features: [
        '1 个连接账号',
        '20-100 个产品',
        '自动回复和线索收集',
        '一次性设置',
      ],
      featureInfo: [
        '每个连接的主页、号码、机器人或网站聊天窗口分别计为一个账号。',
        '同一基础产品的颜色、尺寸和其他变体不计为不同产品。',
        'aiCHATS 根据已批准内容回答问题，并收集客户联系方式。',
        'aiNOW 协助完成初始规则设置和上线，不包含持续修改。',
      ],
      catalogValue: '20-100 个产品',
      qualification: '基础',
      booking: '不包含',
      automation: '不包含',
      support: '初始设置',
      custom: '不包含',
    },
    business: {
      summary:
        '适合需要线索筛选、预约和最多三个账号的企业。',
      serviceInfo:
        'Nemo Smart 是面向线索筛选和销售流程的服务级别。',
      features: [
        '3 个连接账号',
        '100-500 个产品',
        '知识库和 1,000 次更新',
        '线索筛选和预约',
      ],
      featureInfo: [
        '例如，两个 Instagram 账号和一个 Telegram 机器人计为三个账号。',
        '同一基础产品的颜色、尺寸和其他变体不计为不同产品。',
        'aiCHATS 使用您批准的知识库，每月最多可新增或更新 1,000 条记录。',
        '系统会提出已批准的问题、保存答案并确定下一步。',
      ],
      catalogValue: '100-500 个产品',
      qualification: '包含',
      booking: '包含',
      automation: '不包含',
      support: '初始设置',
      custom: '不包含',
    },
    premium: {
      summary:
        '适合复杂销售、大型知识库和持续支持。',
      serviceInfo:
        'Nemo Pro 是面向复杂销售和大型知识库的服务级别。',
      features: [
        '5 个连接账号',
        '500-2,000 个产品',
        '每月 4,000 次更新',
        '持续支持',
      ],
      featureInfo: [
        '最多五个连接账号或机器人通过同一个管理中心运行。',
        '同一基础产品的颜色、尺寸和其他变体不计为不同产品。',
        '每月最多可以新增或更新 4,000 条记录。',
        '在约定范围内，aiNOW 会更新回复、促销内容和业务规则。',
      ],
      catalogValue: '500-2,000 个产品',
      qualification: '包含',
      booking: '包含',
      automation: '高级',
      support: '持续',
      custom: '不包含',
    },
    enterprise: {
      summary:
        '适合高业务量和定制工作流程。',
      serviceInfo:
        'Nemo Ultra 是面向高业务量和定制流程的服务级别。',
      features: [
        '10 个连接账号',
        '2,000-5,000 个产品',
        '每月 10,000 次更新',
        '申请新功能',
      ],
      featureInfo: [
        '最多十个连接账号或机器人通过同一个管理中心运行。',
        '同一基础产品的颜色、尺寸和其他变体不计为不同产品。',
        '每月最多可以新增或更新 10,000 条记录。',
        '如果所需功能尚不存在，aiNOW 会评估范围，并可在确认后进行开发。',
      ],
      catalogValue: '2,000-5,000 个产品',
      qualification: '包含',
      booking: '包含',
      automation: '定制',
      support: '优先',
      custom: '包含',
    },
    custom: {
      ...EN_COPY.plans.custom,
      summary: '适合超过 5,000 个产品或结构特殊的目录。',
      serviceInfo: 'Nemo Custom 会根据您的数据、渠道和工作流程单独配置。',
      features: ['账号', '5,000+ 个产品', '更新', '集成'],
      featureInfo: [
        '渠道和账号数量根据实际工作流程确定。',
        '颜色、尺寸和其他变体属于同一产品的属性，不计为不同产品。',
        '更新频率和数量根据目录变化方式确定。',
        '集成、数据源和新功能需要单独评估。',
      ],
      catalogValue: '5,000+ · 定制',
      support: '定制',
    },
  },
  foundation: {
    eyebrow: '所有套餐均包含',
    title: '核心能力从第一天即可使用。',
    description:
      '不同套餐的价格和容量不同，但基础管理能力在所有套餐中均可使用。',
    visualTitle: '统一 AI 管理中心',
    visualText:
      '所有连接账号均使用同一套已批准的企业信息、回复和规则。',
    items: [
      {
        title: '已批准的信息',
        text: '价格、服务、规则和营业时间。',
        info: 'aiCHATS 只根据您批准的信息和规则生成回复。',
      },
      {
        title: '线索收集',
        text: '姓名、电话和需求统一保存。',
        info: '系统会保存后续步骤所需的客户信息。',
      },
      {
        title: '转交人工',
        text: '不确定的对话交给您的团队。',
        info: '复杂或不确定的对话会转交团队成员处理。',
      },
      {
        title: '统一对话管理',
        text: '查看所有聊天并可随时人工继续。',
        info: '所有连接账号的对话会显示在同一个工作区。',
      },
      {
        title: '您的业务规则',
        text: '由您决定系统可以回答什么。',
        info: '定义 aiCHATS 的回复方式以及何时必须转交人工。',
      },
      {
        title: '基础分析',
        text: '了解哪些环节有效、哪些需要介入。',
        info: '查看回复、对话、线索和渠道的主要指标。',
      },
    ],
  },
  capabilities: {
    eyebrow: '实际能力',
    title: '不只回复消息，而是覆盖完整客户旅程。',
    description:
      'aiCHATS 将团队目前分散在聊天、表格和日历中的工作集中管理。',
    items: [
      {
        title: '所有对话集中管理',
        text: 'Instagram、Messenger、WhatsApp、Telegram 和网站聊天。',
        info: '所有连接账号的对话都会显示在同一个工作区。',
        availability: '所有套餐',
      },
      {
        title: '暂停 AI 并人工回复',
        text: '团队成员可以随时接管对话。',
        info: '人工接管后，该对话中的自动回复会停止。',
        availability: '所有套餐',
      },
      {
        title: '线索列表和状态',
        text: '姓名、电话、需求和下一步统一记录。',
        info: '每条线索会保存客户信息和需要执行的下一步。',
        availability: '所有套餐',
      },
      {
        title: '预约和日历',
        text: '查询空闲时间、创建预约或申请确认。',
        info: '日历连接会检查可用时间并创建预约。',
        availability: 'Business 及以上',
      },
      {
        title: 'Instagram 评论和 Stories',
        text: '公开回复，必要时转入私聊。',
        info: '支持的操作会遵循连接账号和已批准的规则。',
        availability: '所有套餐',
      },
      {
        title: '客户跟进',
        text: '对话暂停后发送已批准的提醒。',
        info: '跟进消息的时间和内容会提前确认。',
        availability: '所有套餐',
      },
      {
        title: '网站聊天定制',
        text: '颜色、欢迎语、快捷问题和展示页面。',
        info: '聊天组件会根据您的品牌和业务流程进行配置。',
        availability: '所有套餐',
      },
      {
        title: '目录同步',
        text: '让大型产品知识库保持最新。',
        info: 'Premium 和 Enterprise 可从约定的数据源同步信息。',
        availability: 'Premium 及以上',
      },
    ],
  },
  comparison: {
    eyebrow: '清晰比较',
    title: '快速看懂套餐差异。',
    description:
      '只比较真正影响选择的容量限制和管理能力。',
    feature: '功能',
    included: '包含',
    notIncluded: '不包含',
    unlimited: '无限制',
    rows: [
      {
        id: 'service',
        label: '服务级别',
        info: '说明任务复杂度、知识容量和支持级别。',
      },
      {
        id: 'replies',
        label: '每月 AI 回复',
        info: '一个月内向客户发送回复的最高数量。',
      },
      {
        id: 'accounts',
        label: '连接账号',
        info: '每个主页、号码、机器人或网站聊天窗口分别计算。',
      },
      {
        id: 'catalog',
        label: '产品和服务',
        info: 'Starter 需要手动维护。知识库从 Business 开始，自动数据源同步从 Premium 开始。',
      },
      {
        id: 'updates',
        label: '每月更新数',
        info: '一个月内可新增或修改的知识记录数量。',
      },
      {
        id: 'qualification',
        label: '线索筛选',
        info: '识别客户需求、保存信息并确定下一步。',
      },
      {
        id: 'booking',
        label: '预约和日历',
        info: '查找空闲时间、创建预约或申请确认。',
      },
      {
        id: 'automation',
        label: '高级自动化',
        info: '复杂工作流、自定义路由和自动目录同步。',
      },
      { id: 'channels', label: 'Instagram、Messenger、WhatsApp、Telegram 和网站', info: '可在所选套餐的账号数量限制内连接这些渠道。' },
      { id: 'unifiedInbox', label: '所有对话集中管理', info: '已连接渠道的对话统一显示在一个工作区。' },
      { id: 'manualControl', label: '暂停 AI 并人工回复', info: '团队成员可以随时接管任意对话并人工继续。' },
      { id: 'leadCollection', label: '收集并管理线索', info: '保存客户姓名、电话、需求和处理状态。' },
      { id: 'websiteWidget', label: '可定制的网站聊天', info: '可设置颜色、欢迎语、快捷问题和展示页面。' },
      { id: 'photoOcr', label: '图片和文字识别（OCR）', info: '每月图片额度：Starter 100、Business 250、Premium 1,500，Enterprise 无限制。' },
      { id: 'voiceMessages', label: '聊天中的语音消息', info: '此功能仅处理聊天中发送的语音消息，不包含电话通话。每月额度：Starter 100、Business 250、Premium 1,500，Enterprise 无限制。' },
      { id: 'aiCallMinutes', label: 'aiCALL 通话分钟', info: 'Enterprise 每月赠送 100 分钟 aiCALL。aiCALL 是独立的电话产品，更多分钟数和通话功能需单独购买。' },
      { id: 'instagramActions', label: 'Instagram 评论和 Story 回复', info: '每月额度：Starter 100、Business 250、Premium 1,500，Enterprise 无限制。' },
      { id: 'followUp', label: '再次跟进客户', info: '每月跟进额度：Starter 100、Business 250、Premium 1,500，Enterprise 无限制。' },
      { id: 'analytics', label: '对话、线索和渠道分析', info: '查看回复、对话、线索和连接渠道的核心指标。' },
      {
        id: 'support',
        label: 'aiNOW 支持',
        info: 'Starter 和 Business 包含初始设置，持续修改从 Premium 开始。',
      },
      {
        id: 'custom',
        label: '申请新功能',
        info: 'Enterprise 可申请评估和开发当前缺少的功能。',
      },
    ],
  },
  guide: {
    eyebrow: '如何选择',
    title: '不要只看消息数量。',
    description:
      '一个高价值客户可能比一千个简单问题更重要，销售流程的复杂度也应影响套餐选择。',
    items: [
      {
        title: '每月需要多少回复？',
        text: '参考最近三个月的平均值，并为增长预留容量。',
      },
      {
        title: '需要连接多少账号？',
        text: '两个 Instagram 账号和一个 Telegram 机器人计为三个账号。',
      },
      {
        title: '系统需要掌握多少信息？',
        text: 'Starter 适合 20 到 100 个产品，Business 适合 100 到 500 个，Premium 适合 500 到 2,000 个，Enterprise 适合 2,000 到 5,000 个。更大或特殊目录使用 Custom。颜色和尺寸属于同一产品的变体。',
      },
      {
        title: '销售流程有多复杂？',
        text: '线索筛选、预约、跟进和定制流程需要更高等级的套餐。',
      },
    ],
  },
  faq: {
    eyebrow: '常见问题',
    title: '选择套餐前的简要说明。',
    items: [
      {
        question: '渠道和连接账号有什么区别？',
        answer:
          '渠道包括 Instagram、Messenger、WhatsApp、Telegram 和网站聊天。每个具体主页、号码、机器人或聊天组件都算一个连接账号。',
      },
      {
        question: 'Nemo Lite、Smart、Pro 和 Ultra 是什么？',
        answer:
          '它们是 aiCHATS 的服务级别名称，用于说明任务复杂度、知识容量和支持范围，并非不同的 AI 模型。',
      },
      {
        question: '什么时候需要知识库？',
        answer:
          '知识库从 Business 开始。Premium 和 Enterprise 适合频繁变化的数据、大型目录或自动数据源同步。Enterprise 覆盖 2,000 到 5,000 个产品，更大规模使用 Custom。',
      },
      {
        question: '初始设置和持续支持有什么区别？',
        answer:
          'Starter 和 Business 包含初始设置。Premium 还包括约定范围内对回复、规则、促销和流程的持续修改。',
      },
      {
        question: '可以增加当前没有的功能吗？',
        answer:
          'Enterprise 客户可以申请新功能。aiNOW 会在单独确认前评估目标、工作量和时间。',
      },
    ],
  },
};

const COPY_BY_LOCALE: Record<string, ChatPricingCopy> = {
  ka: KA_COPY,
  en: EN_COPY,
  ru: RU_COPY,
  de: DE_COPY,
  tr: TR_COPY,
  fa: FA_COPY,
  zh: ZH_COPY,
};

export function getChatPricingCopy(locale: string): ChatPricingCopy {
  return COPY_BY_LOCALE[locale] ?? EN_COPY;
}

export function interpolateChatPricingLabel(
  template: string,
  value: string,
): string {
  return template.replace('{item}', value);
}
