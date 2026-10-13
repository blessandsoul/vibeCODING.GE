export type AiNowHomeLocale = "ka" | "en" | "ru" | "de" | "tr" | "fa" | "zh";

export type HomeProblemId = "chats" | "calls" | "content" | "website";
export type HomeCategoryId = "communication" | "marketing" | "internal" | "products";
export type HomeIndustryId = "healthcare" | "horeca" | "real-estate" | "ecommerce" | "auto" | "legal";
export type HomeFaqCategory = "all" | "pricing" | "tech" | "safety";

import { VIBECODING_COPY_OVERRIDES } from "./vibecoding-copy-overrides";

type ProductCopy = Record<string, string>;

export interface AiNowHomeCopy {
  productLabels: ProductCopy;
  nav: {
    products: string;
    customerCommunication: string;
    marketingContent: string;
    internalOperations: string;
    webApps: string;
    specializedSolutions: string;
    operations: string;
    growth: string;
    resources: string;
    resourcesBlog: string;
    capabilities: string;
    architecture: string;
    pricing: string;
    contact: string;
    consultation: string;
    themeLight: string;
    themeDark: string;
    themeToggle: string;
    menuOpen: string;
    menuClose: string;
    productDescriptions: ProductCopy;
    resourceItems: Record<string, { title: string; subtitle: string }>;
  };
  banner: Record<string, string>;
  hero: {
    titleLine1: string;
    titleLine2: string;
    description: string;
    primaryCta: string;
    catalogCta: string;
    hint: string;
  };
  ecosystemHub: {
    satellites: Record<string, { title: string; subtitle: string; alt: string }>;
    centerSubtitle: string;
    badge: string;
  };
  comparison: {
    title: string;
    description: string;
    action: string;
    labels: { inspect: string; firstStep: string; ask: string };
    problems: Record<HomeProblemId, {
      question: string;
      description: string;
      detailHeading: string;
      firstStep: string;
      solution: string;
      builds: string[];
      materials: string;
    }>;
  };
  categories: {
    title: string;
    description: string;
    items: Record<HomeCategoryId, {
      title: string;
      subtitle: string;
      products: ProductCopy;
    }>;
  };
  industries: {
    eyebrow: string;
    title: string;
    description: string;
    items: Record<HomeIndustryId, {
      title: string;
      tag: string;
      description: string;
      action: string;
      points: string[];
    }>;
  };
  process: {
    title: string;
    description: string;
    steps: Array<{ title: string; description: string }>;
  };
  architecture: {
    eyebrow: string;
    title: string;
    description: string;
    action: string;
    principle: string;
    rule: string;
    specs: Array<{ title: string; description: string }>;
  };
  team: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    names: { andro: string; nika: string; giorgi: string };
    roles: { founder: string; commercial: string; businessDevelopment: string };
    location: string;
    year: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    filters: Record<HomeFaqCategory, string>;
    searchLabel: string;
    searchPlaceholder: string;
    questionPrefix: string;
    calloutTitle: string;
    calloutAction: string;
    items: Record<string, { question: string; answer: string }>;
  };
  clientFit: {
    title: string;
    description: string;
    ariaLabel: string;
    signals: string[];
    notForTitle: string;
    notForDescription: string;
    uncertain: string;
  };
  closingCta: {
    title: string;
    description: string;
    successPrefix: string;
    checks: string[];
  };
  footer: {
    tagline: string;
    description: string;
    action: string;
    products: string;
    industries: string;
    resources: string;
    language: string;
    legal: string;
    blog: string;
    howWeStart: string;
    faq: string;
    sendTask: string;
    email: string;
    privacy: string;
    terms: string;
    location: string;
    rights: string;
    backToTop: string;
    industryLinks: string[];
  };
}

const ka: AiNowHomeCopy = {
  productLabels: {
    aichats: "კლიენტებთან მიმოწერა",
    aicall: "AI ზარები",
    aicontent: "AI კონტენტი",
    aiweb: "საიტები და ვებ-პროდუქტები",
    aistaff: "AI სპეციალისტების შერჩევა",
    iai: "პროცესების კოორდინაცია",
  },
  nav: {
    products: "პროდუქტები",
    customerCommunication: "კლიენტებთან კომუნიკაცია",
    marketingContent: "მარკეტინგი და კონტენტი",
    internalOperations: "შიდა პროცესები",
    webApps: "საიტები და აპები",
    specializedSolutions: "სხვა მიმართულებები",
    operations: "ყოველდღიური საქმეები",
    growth: "ზრდა და მარკეტინგი",
    resources: "რესურსები",
    resourcesBlog: "რესურსები და ბლოგი",
    capabilities: "შესაძლებლობები",
    architecture: "არქიტექტურა",
    pricing: "ფასები",
    contact: "კონტაქტი",
    consultation: "კონსულტაცია",
    themeLight: "გადართვა ნათელ თემაზე",
    themeDark: "გადართვა ბნელ თემაზე",
    themeToggle: "თემის გადართვა",
    menuOpen: "მენიუს გახსნა",
    menuClose: "მენიუს დახურვა",
    productDescriptions: {
      aichats: "კლიენტებთან მიმოწერა",
      aicall: "შემომავალი და გამავალი AI ზარები",
      aistaff: "AI ინსტრუმენტებში გამოცდილი თანამშრომლები",
      aicontent: "AI ვიდეო და სარეკლამო მასალა",
      aiads: "Meta და Google რეკლამის მართვა",
      aimusic: "მუსიკა და აუდიო თქვენი ბრენდისთვის",
      aibrain: "კომპანიის ცოდნა და წესები ერთ სივრცეში",
      aioffice: "დავალებები, დოკუმენტები და შიდა პროცესები",
      aidocs: "დოკუმენტების დამუშავება და შემოწმება",
      aiweb: "საიტები და ვებ-პროდუქტები",
      aiapp: "მობილური აპები ბიზნესისთვის",
      vibecoding: "აპების უსაფრთხო განვითარება",
      iai: "პროცესების კოორდინაცია",
      aijurist: "იურიდიული კვლევა და დოკუმენტების მონახაზები",
      aitaxi: "ტაქსოპარკის ყოველდღიური მართვა",
    },
    resourceItems: {
      blog: { title: "ბლოგი", subtitle: "როგორ გამოიყენოთ AI ბიზნესში" },
      architecture: { title: "არქიტექტურა", subtitle: "პლატფორმის ტექნიკური აგებულება" },
      updates: { title: "სიახლეები", subtitle: "ყოველკვირეული განახლებები" },
      industries: { title: "სფეროები", subtitle: "AI თქვენი ბიზნესისთვის" },
    },
  },
  banner: {
    aichats: "კლიენტების შეტყობინებების მართვა",
    aicall: "შემომავალი და გამავალი ზარების ხმოვანი AI ასისტენტები",
    aicontent: "სარეკლამო ვიდეო და ბიზნეს-კონტენტი",
    aiads: "Meta და Google რეკლამის მართვა",
    aistaff: "AI ინსტრუმენტებში გამოცდილი თანამშრომლები",
    airadar: "ბაზრისა და რეპუტაციის მონიტორინგი",
    aiweb: "ბიზნესის საიტები და აპლიკაციები",
    iai: "პროცესების კოორდინაცია",
  },
  hero: {
    titleLine1: "AI სისტემები ბიზნესისთვის.",
    titleLine2: "მიმოწერა, ზარები, კონტენტი.",
    description: "aiNOW ქმნის და ნერგავს AI სისტემებს კლიენტებთან მუშაობისა და შიდა საქმეებისთვის. შეგიძლიათ მზა პროდუქტი აირჩიოთ ან თქვენთვის საჭირო სისტემა შეგვიკვეთოთ.",
    primaryCta: "დაგვიკავშირდით",
    catalogCta: "მზა პროდუქტების ნახვა",
    hint: "არჩევაში დახმარება თუ გინდათ, მოგვწერეთ.",
  },
  ecosystemHub: {
    satellites: {
      chats: { title: "მიმოწერა", subtitle: "კლიენტებთან მესენჯერებში", alt: "მიმოწერა" },
      calls: { title: "ზარები", subtitle: "ხმოვანი AI ასისტენტები", alt: "ზარები" },
      content: { title: "კონტენტი", subtitle: "ფოტო · ვიდეო · მუსიკა", alt: "კონტენტი" },
      apps: { title: "საიტები და ოფისი", subtitle: "საიტები · დოკუმენტები · პროცესები", alt: "საიტები და ოფისი" },
    },
    centerSubtitle: "მართვის ცენტრი · OS",
    badge: "ყველა მიმართულება — ერთ გუნდთან ⤴",
  },
  comparison: {
    title: "რა გირთულებთ ყოველდღიურ საქმეს?",
    description: "აირჩიეთ თქვენთვის ნაცნობი სიტუაცია.",
    action: "მოგვწერეთ",
    labels: { inspect: "რას გავარკვევთ", firstStep: "რითი დავიწყებთ", ask: "რა დაგვჭირდება თქვენგან" },
    problems: {
      chats: {
        question: "კლიენტების შეტყობინებები უპასუხოდ გრჩებათ?",
        description: "კლიენტები სხვადასხვა მესენჯერში გწერენ, თქვენს გუნდს კი პასუხების ძებნა უწევს.",
        detailHeading: "რატომ იკარგება დრო მიმოწერაში",
        firstStep: "ერთ საუბარს ერთად გადავხედავთ: რა იკითხა კლიენტმა, რა უპასუხეთ და რა დარჩა გასაკეთებელი.",
        solution: "როცა ფასი, კატალოგი ან პასუხის წესები ერთ ადგილას არ არის, ყველა ოპერატორი თავიდან იწყებს ძებნას.",
        builds: ["სად გწერენ კლიენტები ყველაზე ხშირად.", "რომელი კითხვების პასუხს ეძებთ ყოველდღე.", "როდის უნდა გააგრძელოს საუბარი თანამშრომელმა.", "რა უნდა იცოდეს გუნდმა საუბრის დასრულების შემდეგ."],
        materials: "მიმოწერის მაგალითები, ფასები და პირობები, რომლებსაც კლიენტებს უზიარებთ.",
      },
      calls: {
        question: "ყველა ზარზე პასუხს ვერ ასწრებთ?",
        description: "შემოსულ ზარებს პასუხი სჭირდება, შეკვეთებს — დადასტურება, ზოგ კლიენტს კი ხელახლა უნდა დაურეკოთ.",
        detailHeading: "ზარი დასრულდა — მერე რა ხდება?",
        firstStep: "თქვენთან ერთად გავარჩევთ ერთ ზარს: რა უნდა ჰკითხოს ასისტენტმა კლიენტს და რა ჩაიწეროს საუბრის შემდეგ.",
        solution: "თუ საუბრის შედეგი არ ჩაიწერა და არავინ იცის, ვის რა აქვს გასაკეთებელი, კლიენტის თხოვნა შეიძლება უპასუხოდ დარჩეს.",
        builds: ["რომელ ზარებს უნდა უპასუხოს AI-მ და ვის უნდა დაურეკოს.", "რა უნდა გაარკვიოს საუბარში.", "როდის უნდა ჩაერთოს თანამშრომელი.", "რა ინფორმაცია უნდა ჩაიწეროს ზარის შემდეგ."],
        materials: "რისთვის გირეკავენ კლიენტები, ვისთან რეკავთ თავად და როდის სჭირდება საუბარს თანამშრომელი.",
      },
      content: {
        question: "კონტენტის შექმნა მუდმივად გიგვიანდებათ?",
        description: "იდეა გაქვთ, მაგრამ ტექსტის, ვიდეოს ან პოსტის მომზადება ისევ გადაიდო.",
        detailHeading: "იდეა გაქვთ, მასალა კი ჯერ არა",
        firstStep: "ავირჩევთ ერთ თემას და შევთანხმდებით, ვისთვის ვამზადებთ მასალას და რისი თქმა გვინდა.",
        solution: "თუ არ იცით, რა ფორმატი გინდათ ან ვინ უნდა დაამტკიცოს მასალა, მუშაობის დაწყებაც ჭიანურდება.",
        builds: ["ვის უნდა მივაწვდინოთ ხმა და რა ვუთხრათ.", "ვიდეო, ფოტო თუ ტექსტი — რა გამოგადგებათ.", "რა მასალა გაქვთ უკვე.", "ვინ ამტკიცებს მასალას გამოქვეყნებამდე."],
        materials: "პროდუქტის აღწერა და იმ ფოტოებისა თუ ვიდეოების მაგალითები, რომლებიც მოგწონთ.",
      },
      website: {
        question: "საიტზე შემოდიან, მაგრამ არ გიკავშირდებიან?",
        description: "ვიზიტორი გვერდს კითხულობს, თუმცა არც გწერთ, არც გირეკავთ და არც შეკვეთას ტოვებს.",
        detailHeading: "რა უშლის ვიზიტორს ხელს?",
        firstStep: "საიტს კლიენტის თვალით შევხედავთ: გასაგებია თუ არა შეთავაზება და მარტივია თუ არა თქვენთან დაკავშირება.",
        solution: "თუ ადამიანს ვერ გაუგია, რას სთავაზობთ ან როგორ დაგიკავშირდეთ, შესაძლოა გვერდი უბრალოდ დახუროს.",
        builds: ["რა უნდა გაიგოს ვიზიტორმა პირველივე ეკრანზე.", "რა გვინდა, რომ გააკეთოს: მოგწეროთ, დაგირეკოთ თუ შეგიკვეთოთ.", "რომელი კითხვების პასუხი აკლია გვერდს.", "რა უნდა გაიგოს გუნდმა კლიენტის მოთხოვნიდან."],
        materials: "რას სთავაზობთ კლიენტებს, რაზე გეკითხებიან და როგორ უნდა დაგიკავშირდნენ.",
      },
    },
  },
  categories: {
    title: "რა გჭირდებათ თქვენი ბიზნესისთვის?",
    description: "მზა პროდუქტი პირდაპირ შეგიძლიათ შეიძინოთ. თუ მზა ვარიანტი არ გყოფნით, ინდივიდუალური სისტემის შეკვეთაც შეგიძლიათ.",
    items: {
      communication: { title: "კლიენტებთან მიმოწერა და ზარები", subtitle: "პასუხები კითხვებზე, შეკვეთები და კლიენტთან დაკავშირება.", products: { aichats: "AI ჩატბოტი კლიენტების კითხვებისთვის", aicall: "AI ზარები შეკვეთებისა და გაყიდვებისთვის" } },
      marketing: { title: "კონტენტი და რეკლამა", subtitle: "ვიდეო, ფოტო, მუსიკა და სარეკლამო კამპანიები თქვენი ბრენდისთვის.", products: { aicontent: "სარეკლამო ვიდეო სოციალური მედიისთვის", aiads: "Meta და Google რეკლამის მართვა", aimusic: "მუსიკა თქვენი ვიდეოსა და რეკლამისთვის" } },
      internal: { title: "გუნდი და ყოველდღიური საქმეები", subtitle: "გამოცდილი თანამშრომლები, კომპანიის ცოდნა, დოკუმენტები და დავალებები.", products: { aistaff: "AI ინსტრუმენტებში გამოცდილი თანამშრომლები", aibrain: "კომპანიის ცოდნა ერთ სივრცეში", aioffice: "დავალებები და ყოველდღიური ოფისის საქმეები", aidocs: "დოკუმენტებიდან მონაცემების ამოღება" } },
      products: { title: "საიტები და აპლიკაციები", subtitle: "საიტი ან აპი, რომელიც თქვენს საქმეს სჭირდება — იდეიდან შექმნამდე.", products: { aiweb: "საიტი თქვენი ბიზნესისთვის", aiapp: "მობილური აპლიკაცია თქვენი ბიზნესისთვის", vibecoding: "AI აპლიკაციის შემოწმება და გაუმჯობესება" } },
    },
  },
  industries: {
    eyebrow: "თქვენი სფერო",
    title: "ყველა ბიზნესს თავისი საჭიროება აქვს",
    description: "ერთსა და იმავე AI-ს ყველა სფერო ერთნაირად ვერ გამოიყენებს: განსხვავდება კლიენტის კითხვა, წესები, მონაცემები და ის მომენტი, როცა თანამშრომელი უნდა ჩაერთოს.",
    items: {
      healthcare: { title: "კლინიკები და ესთეტიკა", tag: "ჯანმრთელობა და სილამაზე", description: "პაციენტს აინტერესებს მომსახურება, ფასი და ვიზიტის დრო. ასისტენტი ამ კითხვებზე პასუხობს.", action: "მოგვწერეთ თქვენი კლინიკის შესახებ", points: ["კითხვებს თქვენი მომსახურების, ექიმებისა და ვიზიტის წესების მიხედვით ვამზადებთ.", "პაციენტს ვაწვდით ფასს, მისამართს და ინფორმაციას ვიზიტისთვის მომზადებაზე.", "ჩაწერა მხოლოდ თქვენ მიერ განსაზღვრული წესით დასტურდება.", "საკითხი, რომელიც თანამშრომლის დახმარებას საჭიროებს, მას გადაეცემა."] },
      horeca: { title: "რესტორნები და HoReCa", tag: "რესტორნები და კვება", description: "სტუმარი მენიუს გეკითხებათ, მაგიდას ჯავშნის ან ჯგუფურ შეკვეთას გეგმავს.", action: "მოგვწერეთ თქვენი რესტორნის შესახებ", points: ["მენიუს, ალერგენებსა და სამუშაო საათებს თქვენ მიერ მოწოდებული ინფორმაციით ვაზუსტებთ.", "წინასწარ ვათანხმებთ, რა უნდა ვკითხოთ სტუმარს ჯავშნისთვის.", "ტერასის, დარბაზისა და ჯგუფური შეკვეთის პირობებს ცალ-ცალკე ვწერთ.", "თუ სტუმარს განსაკუთრებული თხოვნა აქვს, საქმეში თქვენი გუნდი ერთვება."] },
      "real-estate": { title: "უძრავი ქონება და დეველოპერული პროექტები", tag: "უძრავი ქონება", description: "მყიდველს აინტერესებს ბინა, ფასი და გადახდის პირობები. შემდეგ კი ობიექტის ნახვა უნდა.", action: "მოგვწერეთ თქვენი პროექტის შესახებ", points: ["ობიექტებს, ფასებსა და ხელმისაწვდომობის ინფორმაციას ერთად ვალაგებთ.", "მოთხოვნისას მყიდველს გეგმარებასა და ვიზუალურ მასალას ვუზიარებთ.", "ვაზუსტებთ, რა ბიუჯეტი აქვს, რომელ უბანს ეძებს და რა ვადაში სურს შეძენა.", "ნახვის მსურველს გაყიდვების გუნდთან ვაკავშირებთ."] },
      ecommerce: { title: "ელექტრონული კომერცია და საცალო ვაჭრობა", tag: "ონლაინ მაღაზია", description: "მყიდველი არჩევს ნივთს, გეკითხებათ ფასს და სურს იცოდეს, როდის მიუტანთ.", action: "მოგვწერეთ თქვენი მაღაზიის შესახებ", points: ["პროდუქტებსა და მათ ვარიანტებს თქვენი კატალოგიდან ვაჩვენებთ.", "კლიენტს ზომაზე, ფერზე, მარაგსა და მიწოდებაზე ვპასუხობთ.", "წინასწარ ვათანხმებთ, რა ინფორმაცია დაგჭირდებათ შეკვეთის მისაღებად.", "გადახდასა და დაბრუნებაზე პასუხები თქვენს წესებს ეყრდნობა."] },
      auto: { title: "ავტოსერვისები და ავტომობილის მოვლა", tag: "ავტოსერვისი", description: "კლიენტს უნდა იცოდეს, რას გაუკეთებთ მანქანას, რა ეღირება და როდის შეძლებს მოსვლას.", action: "მოგვწერეთ თქვენი ავტოსერვისის შესახებ", points: ["პირველ რიგში ვკითხულობთ მანქანის მარკას, მოდელსა და საჭირო სამუშაოს.", "ფასსა და მომსახურების პირობებს თქვენი ტარიფებით ვაწვდით.", "ადგილისა და დროის არჩევას თქვენს წესებს ვარგებთ.", "თუ დიაგნოსტიკაა საჭირო, კლიენტს ხელოსანთან ვაკავშირებთ."] },
      legal: { title: "იურიდიული და პროფესიული მომსახურება", tag: "იურიდიული და პროფესიული სერვისები", description: "კლიენტი გიხსნით, რა საკითხზე სჭირდება დახმარება და რა დოკუმენტი აქვს მოსამზადებელი.", action: "მოგვწერეთ თქვენი მომსახურების შესახებ", points: ["ვკითხულობთ, რას ეხება საქმე და რა ვადებია მნიშვნელოვანი.", "თქვენი წესებით ვუხსნით, რა დოკუმენტები დასჭირდება.", "AI-ს მომზადებული დოკუმენტი მონახაზია, სანამ სპეციალისტი არ შეამოწმებს.", "რთულ ან კონფიდენციალურ საკითხზე სპეციალისტი ერთვება."] },
    },
  },
  process: {
    title: "როგორ ვიწყებთ მუშაობას",
    description: "დაწყებამდე იცით, რა გვაქვს გასაკეთებელი, რას ვამოწმებთ და ვინ რას მიხედავს.",
    steps: [
      { title: "ვიგებთ, რა გჭირდებათ", description: "გვიყვებით, როგორ მუშაობთ და რა გიჭირთ. ერთად ვარჩევთ, რისი შეცვლა ღირს და როგორი შედეგი გინდათ." },
      { title: "ვქმნით და ვნერგავთ", description: "ვაწყობთ სისტემას, ვაკავშირებთ თქვენს პროგრამებთან და თქვენს გუნდთან ერთად ვამოწმებთ, როგორ მუშაობს." },
      { title: "მუშაობისას გვერდით ვართ", description: "მხარდაჭერის პირობებს წინასწარ ვათანხმებთ: ვის მიმართავთ, რა ცვლილებებს შევიტანთ და რას მიხედავს თქვენი გუნდი." },
    ],
  },
  architecture: {
    eyebrow: "თქვენი წესები",
    title: "თქვენ წყვეტთ, რას გააკეთებს AI",
    description: "სისტემას მხოლოდ საჭირო ინფორმაციას ვაწვდით. თქვენთან ვათანხმებთ, ვინ რას ნახავს, ვინ შეცვლის და როდის ჩაერთვება თანამშრომელი.",
    action: "ჰკითხეთ ჩვენს გუნდს",
    principle: "რას ვათანხმებთ",
    rule: "● თქვენი კონტროლი",
    specs: [
      { title: "მხოლოდ ის ინფორმაცია, რაც საჭიროა", description: "ვარჩევთ საჭირო მესენჯერებს, ფაილებსა და პროგრამებს. დანარჩენს სისტემას არ ვუკავშირებთ." },
      { title: "პასუხები თქვენს ინფორმაციას ეყრდნობა", description: "ფასებს, პირობებსა და სამუშაო წესებს თქვენ ამტკიცებთ. სისტემა ამ ინფორმაციას იყენებს." },
      { title: "თანამშრომელი საჭირო დროს ერთვება", description: "წინასწარ ვათანხმებთ, რომელ საქმეებს გააკეთებს სისტემა და რომელს გადასცემს ადამიანს." },
      { title: "ჯერ ვამოწმებთ, შემდეგ ვაახლებთ", description: "ახალ ტექსტს, ფასსა თუ პასუხის წესს მანამდე ვამოწმებთ, სანამ მათ კლიენტი ან გუნდი გამოიყენებს." },
      { title: "ვინ რას ნახავს და შეცვლის", description: "თქვენთან ვათანხმებთ, რომელ თანამშრომელს რა ინფორმაციაზე ექნება წვდომა." },
      { title: "იცით, ვის რა აბარია", description: "წინასწარ ვწერთ, სად ინახება ინფორმაცია, ვინ მიხედავს სისტემას და როგორ შეცვლით ან გამორთავთ მის ფუნქციებს." },
    ],
  },
  team: {
    eyebrow: "ჩვენი მიდგომა",
    title: "ჩვენ ვართ aiNOW",
    paragraphs: [
      "ჩვენ ვართ aiNOW — გუნდი თბილისიდან, რომელიც AI-ს ბიზნესში ნერგავს.",
      "მხარდაჭერის პირობებს წინასწარ ვათანხმებთ, რომ იცოდეთ, ვის მიმართოთ და რაში დაგეხმარებათ ჩვენი გუნდი.",
      "iAI ამ პროდუქტებისა და მათ შორის სამუშაოს კოორდინაციაში გვეხმარება.",
    ],
    names: { andro: "ანდრო კასპაროვი", nika: "ნიკა სხირტლაძე", giorgi: "გიორგი დარბაისელი" },
    roles: { founder: "დამფუძნებელი", commercial: "კომერციული დირექტორი", businessDevelopment: "ბიზნესის განვითარების დირექტორი" },
    location: "თბილისი, საქართველო",
    year: "2026",
  },
  faq: {
    eyebrow: "[პასუხები თქვენს კითხვებზე]",
    title: "ხშირად დასმული კითხვები",
    description: "რა ღირს, როგორ დავიწყებთ და ვინ მიხედავს სისტემას — პასუხები აქაა.",
    filters: { all: "ყველა", pricing: "ფასი და მოცულობა", tech: "დაწყება და მხარდაჭერა", safety: "მონაცემები და კონტროლი" },
    searchLabel: "მოძებნეთ კითხვა",
    searchPlaceholder: "მოძებნეთ კითხვა...",
    questionPrefix: "კითხვა",
    calloutTitle: "კიდევ გაქვთ კითხვა?",
    calloutAction: "მოგვწერეთ",
    items: {
      q1: { question: "რა დაჯდება aiNOW ჩემს ბიზნესში?", answer: "გააჩნია, რომელი პროდუქტი გჭირდებათ და რა გვაქვს გასაკეთებელი. შეთავაზებაში ცალ-ცალკე ნახავთ ერთჯერად ფასს, ყოველთვიურ გადასახადს და შესაძლო დამატებით ხარჯებს. ზუსტ თანხას მას შემდეგ გეტყვით, რაც თქვენს საქმეს გავიცნობთ." },
      q2: { question: "ფასში რა შედის და რაში დამჭირდება ცალკე გადახდა?", answer: "წინასწარ ჩამოვწერთ, რა ღირს სისტემის შექმნა, სხვა პროგრამებთან დაკავშირება და შემდგომი მომსახურება. ასევე გეტყვით, რა არ შედის ფასში და როდის შეიძლება დამატებითი სამუშაო დაგჭირდეთ." },
      q3: { question: "შემიძლია ჯერ მცირე საქმით დავიწყო?", answer: "დიახ. ავირჩევთ ერთ საქმეს, რომელშიც დახმარება ყველაზე მეტად გჭირდებათ. ჯერ მას გამოვცდით და ერთად ვნახავთ, ღირს თუ არა მუშაობის გაგრძელება." },
      q4: { question: "დასაწყისში რამდენი დრო დამჭირდება?", answer: "უნდა აგვიხსნათ, როგორ მუშაობთ, გაგვიზიაროთ საჭირო მასალა და გამოყოთ ადამიანი, ვისთანაც კითხვებს დავაზუსტებთ. წინასწარ გეტყვით, როდის დაგვჭირდება თქვენი დახმარება." },
      q5: { question: "რა უნდა მოგაწოდოთ?", answer: "თქვენს საქმეზეა დამოკიდებული. შეიძლება დაგვჭირდეს ფასები, მომსახურების აღწერა, სამუშაო წესები და კლიენტებთან საუბრის მაგალითები. თუ რამე ჯერ არ გაქვთ ჩამოწერილი, ერთად მოვამზადებთ." },
      q6: { question: "ფასი ან პირობა რომ შემეცვალოს, ვინ განაახლებს სისტემას?", answer: "წინასწარ შევთანხმდებით, როგორ მოგვაწვდით ცვლილებებს. გვიგზავნით ახალ ინფორმაციას, ჩვენ ვამოწმებთ და შეთანხმებული წესით ვაახლებთ სისტემას." },
      q7: { question: "ჩემს და ჩემი კლიენტების მონაცემებს ვინ ნახავს?", answer: "თავიდანვე შევთანხმდებით, რომელი ინფორმაცია გვჭირდება და ვის ექნება მისი ნახვის ან შეცვლის უფლება. წვდომას სამუშაოს მიხედვით ვანაწილებთ." },
      q8: { question: "ჩემი მონაცემები თქვენთან რჩება თუ ჩემთან?", answer: "ამას შეთანხმებაში წინასწარ ვწერთ: სად ინახება მონაცემები, რისთვის გამოიყენება, ვის აქვს წვდომა და რა ხდება თანამშრომლობის დასრულებისას." },
      q9: { question: "შემიძლია გადავწყვიტო, რას გააკეთებს AI და რას არა?", answer: "დიახ. თქვენთან ვათანხმებთ, რა შეუძლია სისტემას, რაზე არ უნდა უპასუხოს, როდის იმუშაოს და როდის გადასცეს საქმე თანამშრომელს." },
      q10: { question: "სისტემის შეცვლა ან შეჩერება შემიძლია?", answer: "წინასწარ აგიხსნით, როგორ შეცვლით წესებს ან გამორთავთ ფუნქციას. ასევე შევთანხმდებით, ვინ შეიტანს ცვლილებას და როგორ შევამოწმებთ მას." },
      q11: { question: "AI-მ კლიენტს არასწორად რომ უპასუხოს?", answer: "წინასწარ ვათანხმებთ, როდის უნდა შეწყვიტოს AI-მ პასუხი და ჩართოს თანამშრომელი — მაგალითად, გაურკვეველ ან რისკიან საკითხზე. თუ შეცდომა მოხდა, გავარკვევთ მიზეზს, შევასწორებთ ინფორმაციას ან წესს და ხელახლა შევამოწმებთ." },
      q12: { question: "თანამშრომელი საუბრის გაგრძელებას შეძლებს?", answer: "წინასწარ ვათანხმებთ, როდის და როგორ გადაეცემა საუბარი თქვენს გუნდს. მაგალითად, თუ კლიენტს საჩივარი აქვს ან ისეთი რამ სჭირდება, რასაც თანამშრომელი უნდა წყვეტდეს." },
      q13: { question: "დანერგვის შემდეგ ვინ მიხედავს სისტემას?", answer: "ამას დაწყებამდე შევთანხმდებით: რას მიხედავს ჩვენი გუნდი, რა დარჩება თქვენს თანამშრომლებს და როგორ მოგვწერთ, თუ ცვლილება ან დახმარება დაგჭირდებათ." },
      q14: { question: "სისტემა ჩემს საქმეს რომ არ მოერგოს?", answer: "სამუშაოს ეტაპებად ვყოფთ და წინასწარ ვწერთ, რა შედეგს ველით თითოეულ ეტაპზე. თუ შედეგი შეთანხმებულს არ ემთხვევა, ვარკვევთ მიზეზს და ვასწორებთ. თუ სხვა გზა სჯობს, ამასაც პირდაპირ გეტყვით." },
      q15: { question: "როგორ დავიწყო ისე, რომ დრო და ფული ტყუილად არ დავკარგო?", answer: "მოგვიყევით, რა გიჭირთ ყოველდღიურ საქმეში. შევთანხმდებით, რით დავიწყებთ, რას გავაკეთებთ და რა ეღირება. ამის შემდეგ თქვენ გადაწყვეტთ, გინდათ თუ არა მუშაობის დაწყება." },
    },
  },
  clientFit: {
    title: "ვისთვის არის aiNOW",
    description: "ბიზნესებისთვის, რომლებსაც ყოველდღიური სამუშაოს გამარტივება ან ახალი სისტემის შექმნა სჭირდებათ.",
    ariaLabel: "ვისთვის არის aiNOW",
    signals: ["თქვენი გუნდი ყოველდღე ერთსა და იმავე კითხვებს პასუხობს ან მსგავს დოკუმენტებს ამუშავებს.", "ინფორმაცია სხვადასხვა პროგრამაშია და თანამშრომლებს მისი ძებნა უწევთ.", "მზად ხართ, აგვიხსნათ, როგორ მუშაობთ და რისი შეცვლა გინდათ.", "გჭირდებათ გუნდი, რომელიც სისტემას შექმნის, დანერგავს და შემდგომშიც დაგეხმარებათ."],
    notForTitle: "aiNOW შეიძლება არ გამოგადგეთ, თუ...",
    notForDescription: "გინდათ გარანტირებული შედეგი ისე, რომ არც თქვენი საქმე გაგვაცნოთ და არც საჭირო ინფორმაცია მოგვაწოდოთ. ვერ დაგპირდებით, რომ AI ყველაფერს მოაგვარებს.",
    uncertain: "არ ხართ დარწმუნებული, რომ AI გჭირდებათ? მოგვწერეთ — ამასაც ერთად გავარკვევთ.",
  },
  closingCta: {
    title: "რაში გჭირდებათ დახმარება?",
    description: "მოკლედ მოგვიყევით, რას აკეთებთ და რაში გჭირდებათ დახმარება. აირჩიეთ, როგორ დაგიკავშირდეთ — WhatsApp-ით, SMS-ით თუ ზარით.",
    successPrefix: "გმადლობთ! თქვენი მოთხოვნა მიღებულია.",
    checks: ["ჯერ გავიგებთ, რა გჭირდებათ", "წინასწარ გეტყვით, რას გავაკეთებთ და რა ეღირება", "თუ AI არ გჭირდებათ, ამასაც გეტყვით"],
  },
  footer: {
    tagline: "AI თქვენი ყოველდღიური საქმისთვის.",
    description: "aiNOW არის AI კონსულტაციისა და ტექნოლოგიის კომპანია, რომელიც ბიზნესებს კლიენტებთან მუშაობასა და შიდა პროცესებში ეხმარება.",
    action: "მოგვწერეთ",
    products: "პროდუქტები",
    industries: "ინდუსტრიები",
    resources: "რესურსები",
    language: "ენა",
    legal: "სამართალი და დაცვა",
    blog: "ბლოგი",
    howWeStart: "როგორ ვიწყებთ",
    faq: "კითხვები და პასუხები",
    sendTask: "მოგვწერეთ",
    email: "მოგვწერეთ ელფოსტით",
    privacy: "კონფიდენციალურობა",
    terms: "მომსახურების პირობები",
    location: "თბილისი, საქართველო",
    rights: "ყველა უფლება დაცულია.",
    backToTop: "ზემოთ დაბრუნება ↑",
    industryLinks: ["კლინიკები და ესთეტიკა", "რესტორნები და HoReCa", "უძრავი ქონება და დეველოპერული პროექტები", "ელექტრონული კომერცია და საცალო ვაჭრობა", "ავტოსერვისები და ავტომობილის მოვლა", "იურიდიული და პროფესიული მომსახურება"],
  },
};

const en: AiNowHomeCopy = {
  productLabels: {
    aichats: "Customer messaging",
    aicall: "AI calls",
    aicontent: "AI content",
    aiweb: "Websites and web products",
    aistaff: "AI specialist recruitment",
    iai: "Process coordination",
  },
  nav: {
    products: "Products",
    customerCommunication: "Customer communication",
    marketingContent: "Marketing and content",
    internalOperations: "Internal operations",
    webApps: "Websites and apps",
    specializedSolutions: "Coordination and specialist solutions",
    operations: "Operational AI",
    growth: "Growth and marketing",
    resources: "Resources",
    resourcesBlog: "Resources and blog",
    capabilities: "Capabilities",
    architecture: "Architecture",
    pricing: "Pricing",
    contact: "Contact",
    consultation: "Consultation",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    themeToggle: "Toggle theme",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    productDescriptions: {
      aichats: "Customer messaging",
      aicall: "Inbound and outbound AI calls",
      aistaff: "Real AI specialists for your company",
      aicontent: "AI video and advertising creative",
      aiads: "Meta and Google ad management",
      aimusic: "Music and audio for your brand",
      aibrain: "Company knowledge and rules in one place",
      aioffice: "Tasks, documents and internal workflows",
      aidocs: "Document processing and review",
      aiweb: "Websites and web products",
      aiapp: "Mobile apps for business",
      vibecoding: "Secure application development",
      iai: "Process coordination",
      aijurist: "Legal research and document drafts",
      aitaxi: "Taxi-fleet operations management",
    },
    resourceItems: {
      blog: { title: "Blog", subtitle: "Cases, analysis and insights" },
      architecture: { title: "Architecture", subtitle: "How the platform is built" },
      updates: { title: "Updates", subtitle: "Weekly product updates" },
      industries: { title: "Industries", subtitle: "Workflows by sector" },
    },
  },
  banner: {
    aichats: "Customer messaging management",
    aicall: "Voice AI assistants for inbound and outbound calls",
    aicontent: "Advertising video and business content",
    aiads: "Meta and Google advertising management",
    aistaff: "Real AI specialists for your company",
    airadar: "Market and reputation monitoring",
    aiweb: "Business websites and applications",
    iai: "Process coordination",
  },
  hero: {
    titleLine1: "AI systems for business.",
    titleLine2: "Messaging, calls, content.",
    description: "aiNOW creates and implements AI systems for customer work and internal operations. Choose a ready-made product or commission a system tailored to your needs.",
    primaryCta: "Contact us",
    catalogCta: "Browse ready-made products",
    hint: "Want help choosing? Contact us.",
  },
  ecosystemHub: {
    satellites: {
      chats: { title: "Messaging", subtitle: "With customers in messengers", alt: "Customer messaging" },
      calls: { title: "Calls", subtitle: "Voice AI assistants", alt: "AI calls" },
      content: { title: "Content", subtitle: "Photo · video · music", alt: "Content" },
      apps: { title: "Websites and office", subtitle: "Websites · documents · workflows", alt: "Websites and office" },
    },
    centerSubtitle: "Control center · OS",
    badge: "One team — different solutions ⤴",
  },
  comparison: {
    title: "Start with the business problem",
    description: "Choose the situation that sounds familiar.",
    action: "Discuss your business task",
    labels: { inspect: "What we inspect", firstStep: "First step", ask: "What we will ask" },
    problems: {
      chats: {
        question: "Are customer messages going unanswered?",
        description: "Questions arrive through different channels, so the team has to search for the same answer again.",
        detailHeading: "The messaging bottleneck starts here",
        firstStep: "We take one typical conversation and identify where information or the next step gets lost.",
        solution: "When prices, catalog details or reply rules are not in one place, every operator starts searching from scratch.",
        builds: ["Which channels bring the most questions.", "Which replies, prices and rules are searched for most often.", "When a conversation needs a team member.", "What information must remain for the next step."],
        materials: "Which questions consume time, which channels matter and where a person should step in.",
      },
      calls: {
        question: "Are calls dropping and follow-ups getting lost?",
        description: "A new request, confirmation or follow-up call often depends on the same one person.",
        detailHeading: "The call problem appears after the conversation",
        firstStep: "We choose one typical call and define what must be resolved during it and what must remain afterwards.",
        solution: "When the purpose and next step are not written down, the result disappears as soon as the call ends.",
        builds: ["Which calls come in and which AI should initiate.", "What each call should accomplish.", "When the conversation moves to a team member.", "What must be recorded after the call."],
        materials: "The reason for the call, possible replies, working hours and when a person should join.",
      },
      content: {
        question: "Does creating content keep getting pushed back?",
        description: "You have an idea, but the brief, production and approval start from zero every time.",
        detailHeading: "The content bottleneck appears in planning",
        firstStep: "We take one current topic and define its goal, format and tone.",
        solution: "When the format, tone and approval path are not agreed in advance, content never gets started on time.",
        builds: ["Who the content is for and what they should understand.", "Which formats fit your offer.", "What material you already have and what is missing.", "Who approves the material before publication."],
        materials: "Brand examples, product information, preferred format and approval rules.",
      },
      website: {
        question: "Do people visit your site but miss the next step?",
        description: "Visitors read the information, but do not start a request, call or chat.",
        detailHeading: "The website bottleneck appears at the choice point",
        firstStep: "We take one key page and check what the visitor should do by the end of it.",
        solution: "When the main action and offer are not visible on the first screen, visitors are left without a clear choice.",
        builds: ["What the visitor should understand in the first minute.", "Which action matters most: request, call or chat.", "Where a person needs an answer to a question.", "What information should reach the team."],
        materials: "Service list, the intended customer question and the current contact path.",
      },
    },
  },
  categories: {
    title: "Choose a product or a system to build",
    description: "You can buy a ready-made product directly. If a ready-made option is not enough, you can order a tailored system.",
    items: {
      communication: { title: "Customer communication systems", subtitle: "Ready-made products for messages, calls, orders and customer follow-up.", products: { aichats: "Customer replies", aicall: "Inbound and outbound calls" } },
      marketing: { title: "Growth and marketing systems", subtitle: "Ready-made products for content, music and advertising campaigns.", products: { aicontent: "Advertising videos", aiads: "Meta and Google advertising management", aimusic: "Music for video" } },
      internal: { title: "Internal operations and knowledge systems", subtitle: "Products for AI specialists, knowledge, documents and repeatable team work.", products: { aistaff: "Real AI specialists for your company", aibrain: "Company knowledge base", aioffice: "Tasks and office work", aidocs: "Document field processing" } },
      products: { title: "Websites and digital products", subtitle: "Ready-made web and app products, plus custom systems when the workflow needs more.", products: { aiweb: "Business website", aiapp: "Mobile application", vibecoding: "AI app security" } },
    },
  },
  industries: {
    eyebrow: "Your sector has its own rules",
    title: "One AI solution does not fit everyone",
    description: "The same AI workflow does not look the same in every sector. Customer questions, rules, data and handoff points change from one industry to the next.",
    items: {
      healthcare: { title: "Clinics and aesthetics", tag: "Health and beauty", description: "A patient chooses a service, time and required information in one process.", action: "Discuss a clinic workflow", points: ["Questions follow the service, clinician and appointment rules.", "The patient sees price, preparation and address in advance.", "Booking confirmation follows only the rules you define.", "Medical exceptions move to a team member."] },
      horeca: { title: "Restaurants and HoReCa", tag: "Restaurants and food", description: "A guest needs the menu, an available table and a clear answer in one conversation.", action: "Discuss a restaurant scenario", points: ["Menus, allergens and hours follow your rules.", "The information needed for a booking is defined in advance.", "Terrace, dining room and group bookings have separate rules.", "Special requests move to your team."] },
      "real-estate": { title: "Real estate and development", tag: "Real estate", description: "A buyer chooses a property, asks financial questions and requests a viewing.", action: "Discuss a real-estate workflow", points: ["Property, price and availability are recorded in one format.", "Plans and visual material are sent when the request calls for them.", "Budget, area and timing become clear questions.", "A viewing request moves to the sales team."] },
      ecommerce: { title: "E-commerce and retail", tag: "Online store", description: "A buyer asks for choice, price and delivery terms at the same time.", action: "Discuss an online-store workflow", points: ["Products and options from the catalog appear under your rules.", "Size, color, stock and delivery are captured as separate questions.", "The data needed for an order is defined in advance.", "Payment or return questions move to the right stage."] },
      auto: { title: "Auto service and detailing", tag: "Auto service", description: "A vehicle owner needs the exact service, price and available time.", action: "Discuss an auto-service workflow", points: ["Make, model and job type are identified in the first questions.", "Prices and service terms follow your rate card.", "Bay and time selection follows the agreed rules.", "Complex diagnostics move to a technician."] },
      legal: { title: "Legal and professional services", tag: "Legal and professional services", description: "A client explains the case first, then asks for documents and advice.", action: "Discuss a legal workflow", points: ["Issue type and deadlines become clear in the first questions.", "The required document list follows your rules.", "A document remains working material until a person reviews it.", "Complex or confidential matters go to a specialist."] },
    },
  },
  process: {
    title: "From business problem to working system",
    description: "Before we start, you know what needs to happen, what we will check and who will handle each part.",
    steps: [
      { title: "Examine and design", description: "We map the problem, the current process, the inputs and the outcome the business needs." },
      { title: "Build and integrate", description: "We create the system, connect the relevant tools and test the important scenarios with your team." },
      { title: "Operate and improve", description: "The solution runs under agreed rules; we control changes, update it carefully and keep responsibilities clear." },
    ],
  },
  architecture: {
    eyebrow: "Technology with control",
    title: "Your system, your rules",
    description: "We provide the system only with the information it needs. With you, we agree who can view what, who can change it and when a person steps in.",
    action: "Discuss technology and security",
    principle: "Principle",
    rule: "● Your control",
    specs: [
      { title: "Connect only necessary sources", description: "We choose the channels, files and tools required for the task; everything else stays out." },
      { title: "You control the system's knowledge", description: "Prices, terms, FAQs and working rules come from the sources you approve." },
      { title: "Design follows the real process", description: "The system architecture reflects the way the work is done, including handoffs to people." },
      { title: "Changes are checked before use", description: "New text, prices and scenarios are reviewed before they reach customers or the team." },
      { title: "Access follows roles", description: "Viewing, editing and review rights are separated by agreed team roles." },
      { title: "Operation is clear from the start", description: "We record where information lives, who owns each part and how a connection changes or stops." },
    ],
  },
  team: {
    eyebrow: "Our approach",
    title: "From consulting to a working system",
    paragraphs: [
      "We are aiNOW — a Tbilisi-based team bringing AI into business.",
      "We agree support terms in advance, so you know whom to contact and what our team can help with.",
      "iAI helps coordinate these products and the work between them.",
    ],
    names: { andro: "Andro Kasparov", nika: "Nika Skhirtladze", giorgi: "Giorgi Darbaiseli" },
    roles: { founder: "Founder", commercial: "Commercial director", businessDevelopment: "Business Development Director" },
    location: "Tbilisi, Georgia",
    year: "2026",
  },
  faq: {
    eyebrow: "[Answers to your questions]",
    title: "Frequently asked questions",
    description: "Short, direct answers about price, starting, control and data.",
    filters: { all: "All", pricing: "Price and scope", tech: "Starting and support", safety: "Data and control" },
    searchLabel: "Search questions",
    searchPlaceholder: "Search questions...",
    questionPrefix: "Question",
    calloutTitle: "Still have a specific question?",
    calloutAction: "Share your situation",
    items: {
      q1: { question: "What will aiNOW cost for my business?", answer: "Price depends on the product and scope. The proposal separates what is included in one-time or monthly work and what may become additional work. We give an exact amount after understanding your task." },
      q2: { question: "What is included in the price, and what may be separate?", answer: "We separate creation, required connections and ongoing service. The proposal states in advance what is included, what is not and when additional work may be needed." },
      q3: { question: "Can I start with a small first stage?", answer: "Yes. We can start with one concrete process that matters most to you. We define the next step only after reviewing the first stage and its value together." },
      q4: { question: "How much time and involvement will I need at the start?", answer: "We need an explanation of the process, current material and a person who can clarify questions. We split the work into stages and tell you in advance when your input is needed." },
      q5: { question: "What should I prepare so the system fits my work?", answer: "It depends on the task: prices, service descriptions, rules, FAQs, examples and cases where a person must step in. We can shape anything not yet organised together in the first stage." },
      q6: { question: "Who updates the information when my rules change?", answer: "The change process is agreed in advance. You provide a new price, term or scenario; we check the change and update the system under the agreed rules." },
      q7: { question: "Who will have access to my data and customer information?", answer: "Access follows the specific task and agreed roles. We decide from the start which channel or file is needed and who may view or change it." },
      q8: { question: "Do my data stay with you or with me?", answer: "Storage and access rules are written into the agreement. You can see what is used for the project, for which purpose and what happens when the work ends." },
      q9: { question: "Can I decide what AI will and will not do?", answer: "Yes. We define allowed actions, restricted topics, working hours and the situations where a reply or action must go to a person." },
      q10: { question: "Can I pause or change the system?", answer: "We define the pause and change procedure in advance. You should know who changes a rule, how an update is checked and how a function is switched off." },
      q11: { question: "What happens if AI gives a customer a wrong answer?", answer: "We define a rule that stops the system on uncertain or risky topics and sends the issue to a person. If something goes wrong, we record it, correct the source or rule and test again." },
      q12: { question: "Will my team see a difficult conversation?", answer: "We agree the handoff conditions in advance: for example, a complaint, an unusual request or a matter requiring an employee's decision. The route is agreed with your team." },
      q13: { question: "Who looks after the system after launch?", answer: "We agree the support format in advance: what our service includes, what your team owns and how you send changes or describe an issue." },
      q14: { question: "What if the final result does not fit my process?", answer: "We divide the work into stages and write each stage's criteria in advance. If something does not match the agreed rules, we record the difference, correct the work or say that another solution is needed." },
      q15: { question: "How do I start without wasting time or money?", answer: "We start with one concrete process: what happens now, where work slows down and what material exists. Then we show the first stage, scope and price; you make the decision." },
    },
  },
  clientFit: {
    title: "Who aiNOW is for",
    description: "For businesses that need to simplify daily work or create a new system.",
    ariaLabel: "Who aiNOW is for",
    signals: ["Your team loses time across customer messages, calls, documents or repeatable internal work.", "You have a real process that needs clearer rules, connections or ownership.", "You are willing to examine the workflow before choosing a tool or commissioning a system.", "You want an accountable partner for design, implementation and ongoing operation."],
    notForTitle: "aiNOW may not be right if...",
    notForDescription: "You want a one-off result, the lowest price or a guaranteed outcome without reviewing the process.",
    uncertain: "Not sure whether you need AI? Contact us — we can figure that out together.",
  },
  closingCta: {
    title: "Start with the work that matters",
    description: "Briefly tell us what you do and what you need help with. Choose how you would like us to contact you — via WhatsApp, SMS or a call.",
    successPrefix: "Thank you! We received your request.",
    checks: ["First, we’ll understand what you need", "We’ll tell you in advance what we’ll do and what it will cost", "If you don’t need AI, we’ll tell you that too"],
  },
  footer: {
    tagline: "Consulting. Technology. Working systems.",
    description: "aiNOW is an AI consulting and technology company for customer communication and internal operations.",
    action: "Discuss your business task",
    products: "Products",
    industries: "Industries",
    resources: "Resources",
    language: "Language",
    legal: "Legal and security",
    blog: "Blog",
    howWeStart: "How we start",
    faq: "Questions and answers",
    sendTask: "Send a task",
    email: "Email us",
    privacy: "Privacy",
    terms: "Terms of service",
    location: "Tbilisi, Georgia",
    rights: "All rights reserved.",
    backToTop: "Back to top ↑",
    industryLinks: ["Clinics and aesthetics", "Restaurants and HoReCa", "Real estate and development", "E-commerce and retail", "Auto service and detailing", "Legal and professional services"],
  },
};

const ru: AiNowHomeCopy = {
  productLabels: {
    aichats: "Переписка с клиентами",
    aicall: "AI-звонки",
    aicontent: "AI-контент",
    aiweb: "Сайты и веб-продукты",
    aistaff: "Подбор AI-специалистов",
    iai: "Координация процессов",
  },
  nav: {
    products: "Продукты",
    customerCommunication: "Общение с клиентами",
    marketingContent: "Маркетинг и контент",
    internalOperations: "Внутренние процессы",
    webApps: "Сайты и приложения",
    specializedSolutions: "Координация и специальные решения",
    operations: "Операционный AI",
    growth: "Рост и маркетинг",
    resources: "Ресурсы",
    resourcesBlog: "Ресурсы и блог",
    capabilities: "Возможности",
    architecture: "Архитектура",
    pricing: "Цены",
    contact: "Контакты",
    consultation: "Консультация",
    themeLight: "Включить светлую тему",
    themeDark: "Включить тёмную тему",
    themeToggle: "Переключить тему",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    productDescriptions: {
      aichats: "Переписка с клиентами",
      aicall: "Входящие и исходящие AI-звонки",
      aistaff: "Живые AI-специалисты для вашей компании",
      aicontent: "AI-видео и рекламные креативы",
      aiads: "Управление рекламой Meta и Google",
      aimusic: "Музыка и аудио для вашего бренда",
      aibrain: "Знания и правила компании в одном месте",
      aioffice: "Задачи, документы и внутренние процессы",
      aidocs: "Обработка и проверка документов",
      aiweb: "Сайты и веб-продукты",
      aiapp: "Мобильные приложения для бизнеса",
      vibecoding: "Безопасная разработка приложений",
      iai: "Координация процессов",
      aijurist: "Юридическое исследование и черновики",
      aitaxi: "Управление операциями таксопарка",
    },
    resourceItems: {
      blog: { title: "Блог", subtitle: "Кейсы, аналитика и инсайты" },
      architecture: { title: "Архитектура", subtitle: "Как устроена платформа" },
      updates: { title: "Новости", subtitle: "Еженедельные обновления" },
      industries: { title: "Отрасли", subtitle: "Решения по секторам" },
    },
  },
  banner: {
    aichats: "Управление сообщениями клиентов",
    aicall: "Голосовые AI-ассистенты для входящих и исходящих звонков",
    aicontent: "Рекламные видео и бизнес-контент",
    aiads: "Управление рекламой в Meta и Google",
    aistaff: "Живые AI-специалисты для вашей компании",
    airadar: "Мониторинг рынка и репутации",
    aiweb: "Сайты и приложения для бизнеса",
    iai: "Координация процессов",
  },
  hero: {
    titleLine1: "AI-системы для бизнеса.",
    titleLine2: "Переписка, звонки, контент.",
    description: "aiNOW создаёт и внедряет AI-системы для работы с клиентами и внутренних задач. Вы можете выбрать готовый продукт или заказать систему под свои потребности.",
    primaryCta: "Связаться с нами",
    catalogCta: "Посмотреть готовые продукты",
    hint: "Нужна помощь с выбором? Напишите нам.",
  },
  ecosystemHub: {
    satellites: {
      chats: { title: "Переписка", subtitle: "С клиентами в мессенджерах", alt: "Переписка с клиентами" },
      calls: { title: "Звонки", subtitle: "Голосовые AI-ассистенты", alt: "AI-звонки" },
      content: { title: "Контент", subtitle: "Фото · видео · музыка", alt: "Контент" },
      apps: { title: "Сайты и офис", subtitle: "Сайты · документы · процессы", alt: "Сайты и офис" },
    },
    centerSubtitle: "Центр управления · OS",
    badge: "Одна команда — разные решения ⤴",
  },
  comparison: {
    title: "Начнём с проблемы бизнеса",
    description: "Выберите знакомую вам ситуацию.",
    action: "Обсудить задачу бизнеса",
    labels: { inspect: "Что проверяем", firstStep: "Первый этап", ask: "Что спросим" },
    problems: {
      chats: {
        question: "Сообщения клиентов остаются без ответа?",
        description: "Вопросы приходят из разных каналов, и команде приходится заново искать один и тот же ответ.",
        detailHeading: "Проблема переписки начинается здесь",
        firstStep: "Берём один типичный диалог и определяем, где теряется информация или следующий шаг.",
        solution: "Если цена, каталог или правило ответа не собраны в одном месте, каждый оператор начинает поиск заново.",
        builds: ["Из каких каналов приходит больше всего вопросов.", "Какие ответы, цены и правила ищут чаще всего.", "В какой момент диалогу нужен сотрудник.", "Какие данные должны остаться для следующего шага."],
        materials: "Какие вопросы отнимают время, какие каналы важны и где должен подключаться человек.",
      },
      calls: {
        question: "Звонки обрываются, а дальнейшие шаги теряются?",
        description: "Новый запрос, подтверждение или повторный звонок часто зависят от одного и того же человека.",
        detailHeading: "Проблема звонка видна после разговора",
        firstStep: "Выбираем один типичный звонок и определяем, что нужно выяснить во время него и что сохранить после.",
        solution: "Если цель звонка и следующий шаг не записаны, результат исчезает сразу после разговора.",
        builds: ["Какие звонки входящие, а какие должен начинать AI.", "Чего должен достичь каждый звонок.", "Когда разговор переходит сотруднику.", "Что нужно записать после звонка."],
        materials: "Причина звонка, возможные ответы, рабочие часы и случаи подключения человека.",
      },
      content: {
        question: "Создание контента постоянно откладывается?",
        description: "Идея есть, но бриф, производство и согласование каждый раз начинаются с нуля.",
        detailHeading: "Проблема контента видна в планировании",
        firstStep: "Берём одну текущую тему и фиксируем её цель, формат и тон.",
        solution: "Если формат, тон и путь согласования не определены заранее, запуск контента постоянно откладывается.",
        builds: ["Для кого контент и что человек должен понять.", "Какие форматы подходят вашему предложению.", "Какие материалы уже есть и чего не хватает.", "Кто утверждает материал до публикации."],
        materials: "Примеры бренда, информация о продукте, нужный формат и правило согласования.",
      },
      website: {
        question: "Люди заходят на сайт, но не находят следующий шаг?",
        description: "Посетитель читает информацию, но не начинает заявку, звонок или чат.",
        detailHeading: "Проблема сайта видна в момент выбора",
        firstStep: "Берём одну ключевую страницу и проверяем, что посетитель должен сделать в конце.",
        solution: "Если главное действие и предложение не видны на первом экране, посетитель остаётся без понятного выбора.",
        builds: ["Что посетитель должен понять в первую минуту.", "Какое действие главное: заявка, звонок или чат.", "Где человеку нужен ответ на вопрос.", "Какая информация должна попасть к команде."],
        materials: "Список услуг, вопрос целевого клиента и действующий способ связи.",
      },
    },
  },
  categories: {
    title: "Выберите продукт или систему под задачу",
    description: "Готовый продукт можно купить напрямую. Если готового варианта недостаточно, можно заказать индивидуальную систему.",
    items: {
      communication: { title: "Системы общения с клиентами", subtitle: "Готовые продукты для переписки, звонков, заказов и дальнейшей работы с клиентом.", products: { aichats: "Ответы клиентам", aicall: "Входящие и исходящие звонки" } },
      marketing: { title: "Системы маркетинга и роста", subtitle: "Готовые продукты для контента, музыки и рекламных кампаний.", products: { aicontent: "Рекламные видео", aiads: "Управление рекламой в Meta и Google", aimusic: "Музыка для видео" } },
      internal: { title: "Системы внутренних процессов и знаний", subtitle: "Продукты для AI-специалистов, знаний, документов и повторяющейся работы команды.", products: { aistaff: "Живые AI-специалисты для вашей компании", aibrain: "База знаний компании", aioffice: "Задачи и офисная работа", aidocs: "Обработка полей документов" } },
      products: { title: "Сайты и цифровые продукты", subtitle: "Готовые решения для сайтов и приложений, а при необходимости и система под ваш процесс.", products: { aiweb: "Сайт для бизнеса", aiapp: "Мобильное приложение", vibecoding: "Безопасность AI-приложений" } },
    },
  },
  industries: {
    eyebrow: "Особенности вашей отрасли",
    title: "Один AI подходит не всем",
    description: "В каждой отрасли свои вопросы клиентов, правила, данные и моменты, когда нужен сотрудник. Поэтому один и тот же AI-сценарий везде выглядит по-разному.",
    items: {
      healthcare: { title: "Клиники и эстетика", tag: "Здоровье и красота", description: "Пациент выбирает услугу, время и нужную информацию в одном процессе.", action: "Обсудить процесс клиники", points: ["Вопросы строятся по услуге, врачу и условиям визита.", "Пациент заранее видит цену, подготовку и адрес.", "Подтверждение записи работает только по заданным вами правилам.", "Медицинские исключения передаются сотруднику."] },
      horeca: { title: "Рестораны и HoReCa", tag: "Рестораны и питание", description: "Гостю нужны меню, свободный столик и ясный ответ в одном разговоре.", action: "Обсудить сценарий ресторана", points: ["Меню, аллергены и часы работы задаются вашими правилами.", "Данные для бронирования определяются заранее.", "Терраса, зал и групповые заказы оформляются отдельными правилами.", "Особые запросы передаются вашей команде."] },
      "real-estate": { title: "Недвижимость и девелопмент", tag: "Недвижимость", description: "Покупатель выбирает объект, задаёт финансовые вопросы и просит показать его.", action: "Обсудить процесс недвижимости", points: ["Информация об объекте, цене и доступности фиксируется в одном формате.", "Планировки и визуальные материалы отправляются по запросу.", "Бюджет, район и срок становятся отдельными вопросами.", "Запрос на встречу передаётся отделу продаж."] },
      ecommerce: { title: "E-commerce и retail", tag: "Онлайн-магазин", description: "Покупателю одновременно нужны выбор, цена и условия доставки.", action: "Обсудить процесс онлайн-магазина", points: ["Товары и варианты из каталога показываются по вашим правилам.", "Размер, цвет, наличие и доставка фиксируются отдельными вопросами.", "Данные для заказа определяются заранее.", "Вопросы оплаты или возврата переходят на нужный этап."] },
      auto: { title: "Автосервис и детейлинг", tag: "Автосервис", description: "Владельцу автомобиля нужны точная услуга, цена и свободное время.", action: "Обсудить процесс автосервиса", points: ["Марка, модель и тип работы выясняются в первых вопросах.", "Цены и условия сервиса задаются вашим прайсом.", "Выбор бокса и времени следует согласованным правилам.", "Сложная диагностика передаётся мастеру."] },
      legal: { title: "Юридические и профессиональные услуги", tag: "Юридические и профессиональные услуги", description: "Клиент сначала объясняет суть дела, затем просит документы и консультацию.", action: "Обсудить юридический процесс", points: ["Тип вопроса и сроки выясняются в начале.", "Список нужных документов объясняется по вашим правилам.", "Документ остаётся рабочим материалом до проверки человеком.", "Сложное или конфиденциальное дело передаётся специалисту."] },
    },
  },
  process: {
    title: "От проблемы бизнеса к рабочей системе",
    description: "До начала работы вы знаете, что нужно сделать, что мы проверяем и кто за что отвечает.",
    steps: [
      { title: "Разбираем и проектируем", description: "Изучаем проблему, текущий процесс, входные данные и нужный бизнесу результат." },
      { title: "Создаём и интегрируем", description: "Собираем систему, подключаем нужные инструменты и проверяем ключевые сценарии вместе с командой." },
      { title: "Сопровождаем и улучшаем", description: "Решение работает по согласованным правилам; мы контролируем изменения, обновляем его и фиксируем ответственность." },
    ],
  },
  architecture: {
    eyebrow: "Технология под контролем",
    title: "Система работает по вашим правилам",
    description: "Мы передаём системе только нужную информацию. Вместе с вами определяем, кто что видит, кто может менять и когда подключается сотрудник.",
    action: "Обсудить технологию и безопасность",
    principle: "Принцип",
    rule: "● Ваш контроль",
    specs: [
      { title: "Подключаем только нужные источники", description: "Выбираем каналы, файлы и инструменты для задачи; остальное к системе не подключаем." },
      { title: "Вы управляете знаниями системы", description: "Цены, условия, FAQ и рабочие правила берутся из источников, которые утверждаете вы." },
      { title: "Архитектура следует реальному процессу", description: "Система отражает порядок работы, включая места передачи задачи сотруднику." },
      { title: "Изменения проверяем до использования", description: "Новый текст, цены и сценарии проверяются до того, как попадут к клиенту или команде." },
      { title: "Доступ распределяется по ролям", description: "Права просмотра, изменения и проверки разделяются по согласованным ролям команды." },
      { title: "Порядок работы понятен с начала", description: "Фиксируем, где хранятся данные, кто отвечает за каждую часть и как связь меняется или отключается." },
    ],
  },
  team: {
    eyebrow: "Наш подход",
    title: "От консалтинга к рабочей системе",
    paragraphs: [
      "Мы — aiNOW, команда из Тбилиси, которая внедряет AI в бизнес.",
      "Заранее согласуем условия поддержки, чтобы вы знали, к кому обращаться и чем сможет помочь наша команда.",
      "iAI помогает координировать эти продукты и работу между ними.",
    ],
    names: { andro: "Андро Каспаров", nika: "Ника Схиртладзе", giorgi: "Гиорги Дарбаисели" },
    roles: { founder: "Основатель", commercial: "Коммерческий директор", businessDevelopment: "Директор по развитию бизнеса" },
    location: "Тбилиси, Грузия",
    year: "2026",
  },
  faq: {
    eyebrow: "[Ответы на ваши вопросы]",
    title: "Часто задаваемые вопросы",
    description: "Короткие и прямые ответы о цене, старте, контроле и данных.",
    filters: { all: "Все", pricing: "Цена и объём", tech: "Старт и поддержка", safety: "Данные и контроль" },
    searchLabel: "Поиск по вопросам",
    searchPlaceholder: "Найти вопрос...",
    questionPrefix: "Вопрос",
    calloutTitle: "Остался конкретный вопрос?",
    calloutAction: "Расскажите о своей ситуации",
    items: {
      q1: { question: "Сколько aiNOW будет стоить для моего бизнеса?", answer: "Цена зависит от выбранного продукта и объёма работ. В предложении отдельно показываем, что входит в разовую или ежемесячную стоимость и что может стать дополнительной работой. Точную сумму называем после понимания задачи." },
      q2: { question: "Что входит в цену и за что может понадобиться отдельная оплата?", answer: "Мы отдельно выделяем создание, необходимые подключения и дальнейшее обслуживание. В предложении заранее пишем, что включено, что не включено и когда может понадобиться дополнительная работа." },
      q3: { question: "Можно начать с небольшого этапа?", answer: "Да, можно начать с одного конкретного процесса, который важнее всего проверить. Следующий шаг определяем только после совместной оценки первого этапа и его необходимости." },
      q4: { question: "Сколько времени и участия потребуется в начале?", answer: "Нам нужно объяснение процесса, актуальные материалы и человек, который уточнит вопросы. Мы разделим работу на этапы и заранее скажем, когда потребуется ваше участие." },
      q5: { question: "Что подготовить, чтобы система подошла моей работе?", answer: "Это зависит от задачи: цены, описание услуг, правила, FAQ, примеры и случаи передачи человеку. То, что пока не собрано, мы сформируем вместе на первом этапе." },
      q6: { question: "Кто обновит информацию, если мои правила изменятся?", answer: "Правило изменений согласуем заранее. Вы передаёте новую цену, условие или сценарий; мы проверяем изменение и обновляем систему по договорённому правилу." },
      q7: { question: "У кого будет доступ к моим данным и информации клиентов?", answer: "Доступ определяется задачей и согласованными ролями. С самого начала решаем, какой канал или файл нужен и кто может его видеть или менять." },
      q8: { question: "Мои данные останутся у вас или у меня?", answer: "Правила хранения и доступа заранее фиксируются в соглашении. Вы видите, что используется для проекта, зачем и что происходит после завершения работы." },
      q9: { question: "Могу ли я сам решить, что AI будет делать, а что нет?", answer: "Да. Определяем разрешённые действия, запрещённые темы, рабочие часы и случаи, когда ответ или действие передаётся человеку." },
      q10: { question: "Можно ли остановить или изменить систему?", answer: "Процедуру остановки и изменения определяем заранее. Вы знаете, кто меняет правило, как проверяется обновление и как отключается конкретная функция." },
      q11: { question: "Что будет, если AI неправильно ответит клиенту?", answer: "Мы задаём правило: на неясном или рискованном вопросе система прекращает ответ и передаёт его человеку. Ошибку фиксируем, исправляем источник или правило и проверяем снова." },
      q12: { question: "Увидит ли моя команда сложный разговор?", answer: "Условия передачи диалога определяем заранее: например, жалоба, необычный запрос или вопрос, требующий решения сотрудника. Маршрут согласуем с вашей командой." },
      q13: { question: "Кто будет следить за системой после внедрения?", answer: "Заранее согласуем формат поддержки: что входит в нашу услугу, за что отвечает ваша команда и как передавать изменения или описание ошибки." },
      q14: { question: "Что будет, если итог не подойдёт моему процессу?", answer: "Делим работу на этапы и заранее пишем критерии каждого. Если результат не соответствует правилам, фиксируем разницу, исправляем работу или говорим, что нужно другое решение." },
      q15: { question: "Как начать и не потерять время и деньги?", answer: "Начинаем с одного процесса: что происходит сейчас, где работа тормозит и какие материалы есть. Затем показываем первый этап, объём и цену, а решение принимаете вы." },
    },
  },
  clientFit: {
    title: "Кому подходит aiNOW",
    description: "Для бизнеса, которому нужно упростить ежедневную работу или создать новую систему.",
    ariaLabel: "Кому подходит aiNOW",
    signals: ["Команда теряет время на сообщениях клиентов, звонках, документах или повторяющейся внутренней работе.", "У вас есть реальный процесс, которому нужны понятные правила, подключения или ответственные.", "Вы готовы разобрать процесс до выбора инструмента или заказа системы.", "Вам нужен партнёр для проектирования, внедрения и дальнейшего сопровождения."],
    notForTitle: "aiNOW может не подойти, если...",
    notForDescription: "Вам нужен разовый результат, самая низкая цена или гарантия без разбора процесса.",
    uncertain: "Не уверены, что вам нужен AI? Напишите нам — разберёмся вместе.",
  },
  closingCta: {
    title: "Начнём с работы, которая важна",
    description: "Коротко расскажите, чем вы занимаетесь и с чем нужна помощь. Выберите, как мы свяжемся с вами: через WhatsApp, SMS или звонком.",
    successPrefix: "Спасибо! Ваш запрос получен.",
    checks: ["Сначала поймём, что вам нужно", "Заранее скажем, что будем делать и сколько это будет стоить", "Если AI вам не нужен, тоже скажем об этом"],
  },
  footer: {
    tagline: "Консалтинг. Технологии. Рабочие системы.",
    description: "aiNOW — AI-консалтинговая и технологическая компания для работы с клиентами и внутренних процессов.",
    action: "Обсудить задачу бизнеса",
    products: "Продукты",
    industries: "Отрасли",
    resources: "Ресурсы",
    language: "Язык",
    legal: "Право и безопасность",
    blog: "Блог",
    howWeStart: "Как начинаем",
    faq: "Вопросы и ответы",
    sendTask: "Отправить задачу",
    email: "Написать по email",
    privacy: "Конфиденциальность",
    terms: "Условия обслуживания",
    location: "Тбилиси, Грузия",
    rights: "Все права защищены.",
    backToTop: "Вернуться наверх ↑",
    industryLinks: ["Клиники и эстетика", "Рестораны и HoReCa", "Недвижимость и девелопмент", "E-commerce и retail", "Автосервис и детейлинг", "Юридические и профессиональные услуги"],
  },
};

const de: AiNowHomeCopy = {
  productLabels: {
    aichats: "Kundenkommunikation",
    aicall: "KI-Anrufe",
    aicontent: "KI-Content",
    aiweb: "Websites und Webprodukte",
    aistaff: "Vermittlung von KI-Fachkräften",
    iai: "Prozesskoordination",
  },
  nav: {
    products: "Produkte",
    customerCommunication: "Kundenkommunikation",
    marketingContent: "Marketing und Content",
    internalOperations: "Interne Abläufe",
    webApps: "Websites und Apps",
    specializedSolutions: "Koordination und Speziallösungen",
    operations: "Operative KI",
    growth: "Wachstum und Marketing",
    resources: "Ressourcen",
    resourcesBlog: "Ressourcen und Blog",
    capabilities: "Möglichkeiten",
    architecture: "Architektur",
    pricing: "Preise",
    contact: "Kontakt",
    consultation: "Beratung",
    themeLight: "Helles Design aktivieren",
    themeDark: "Dunkles Design aktivieren",
    themeToggle: "Design wechseln",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    productDescriptions: {
      aichats: "Kundenkommunikation",
      aicall: "Eingehende und ausgehende KI-Anrufe",
      aistaff: "KI-Fachkräfte für Ihr Unternehmen",
      aicontent: "KI-Videos und Werbe-Creatives",
      aiads: "Werbemanagement für Meta und Google",
      aimusic: "Musik und Audio für Ihre Marke",
      aibrain: "Unternehmenswissen und Regeln an einem Ort",
      aioffice: "Aufgaben, Dokumente und interne Abläufe",
      aidocs: "Dokumentenverarbeitung und Prüfung",
      aiweb: "Websites und Webprodukte",
      aiapp: "Mobile Apps für Unternehmen",
      vibecoding: "Sichere Entwicklung von Apps",
      iai: "Prozesskoordination",
      aijurist: "Rechtsrecherche und Dokumententwürfe",
      aitaxi: "Betrieb von Taxiflotten",
    },
    resourceItems: {
      blog: { title: "Blog", subtitle: "Projekte, Analysen und Insights" },
      architecture: { title: "Architektur", subtitle: "Technischer Aufbau der Plattform" },
      updates: { title: "Updates", subtitle: "Wöchentliche Neuigkeiten" },
      industries: { title: "Branchen", subtitle: "Lösungen nach Branche" },
    },
  },
  banner: {
    aichats: "Kundenanfragen und Nachrichten steuern",
    aicall: "Sprach-KI für eingehende und ausgehende Anrufe",
    aicontent: "Werbevideos und Business-Content",
    aiads: "Werbemanagement für Meta und Google",
    aistaff: "KI-Fachkräfte für Ihr Unternehmen",
    airadar: "Markt- und Reputationsmonitoring",
    aiweb: "Websites und Apps für Unternehmen",
    iai: "Prozesskoordination",
  },
  hero: {
    titleLine1: "KI-Systeme für Unternehmen.",
    titleLine2: "Kundenkommunikation, Anrufe, Content.",
    description: "aiNOW entwickelt und implementiert KI-Systeme für Kundenarbeit und interne Abläufe. Sie können ein fertiges Produkt wählen oder ein System für Ihre Anforderungen beauftragen.",
    primaryCta: "Kontakt aufnehmen",
    catalogCta: "Fertige Produkte ansehen",
    hint: "Sie möchten Hilfe bei der Auswahl? Kontaktieren Sie uns.",
  },
  ecosystemHub: {
    satellites: {
      chats: { title: "Nachrichten", subtitle: "Mit Kunden in Messengern", alt: "Kundenkommunikation" },
      calls: { title: "Anrufe", subtitle: "Sprach-KI-Assistenten", alt: "KI-Anrufe" },
      content: { title: "Content", subtitle: "Foto · Video · Musik", alt: "Content" },
      apps: { title: "Websites und Büro", subtitle: "Websites · Dokumente · Prozesse", alt: "Websites und Büro" },
    },
    centerSubtitle: "Steuerzentrale · OS",
    badge: "Ein Team — verschiedene Lösungen ⤴",
  },
  comparison: {
    title: "Wir beginnen mit Ihrem Geschäftsproblem",
    description: "Wählen Sie die Situation, die Ihnen bekannt vorkommt.",
    action: "Geschäftsaufgabe besprechen",
    labels: { inspect: "Was wir prüfen", firstStep: "Erster Schritt", ask: "Was wir fragen" },
    problems: {
      chats: {
        question: "Bleiben Kundennachrichten unbeantwortet?",
        description: "Fragen kommen über mehrere Kanäle, sodass das Team dieselbe Antwort immer wieder suchen muss.",
        detailHeading: "Der Engpass in der Kommunikation beginnt hier",
        firstStep: "Wir nehmen einen typischen Dialog und prüfen, wo Information oder der nächste Schritt verloren gehen.",
        solution: "Wenn Preise, Katalog oder Antwortregeln nicht an einem Ort stehen, sucht jeder Mitarbeiter von vorn.",
        builds: ["Welche Kanäle die meisten Fragen bringen.", "Welche Antworten, Preise und Regeln am häufigsten gesucht werden.", "Wann ein Gespräch einen Mitarbeiter braucht.", "Welche Daten für den nächsten Schritt erhalten bleiben."],
        materials: "Welche Fragen Zeit kosten, welche Kanäle wichtig sind und wo ein Mensch übernimmt.",
      },
      calls: {
        question: "Brechen Anrufe ab und gehen Rückfragen verloren?",
        description: "Neue Anfrage, Bestätigung und Rückruf hängen oft an derselben Person.",
        detailHeading: "Das Anrufproblem zeigt sich nach dem Gespräch",
        firstStep: "Wir wählen einen typischen Anruf und klären, was währenddessen gelöst und danach dokumentiert werden muss.",
        solution: "Wenn Ziel und nächster Schritt nicht festgehalten werden, verschwindet das Ergebnis mit dem Gespräch.",
        builds: ["Welche Anrufe eingehen und welche die KI starten soll.", "Was jeder Anruf erreichen soll.", "Wann das Gespräch an einen Mitarbeiter geht.", "Was nach dem Anruf notiert werden muss."],
        materials: "Anlass, mögliche Antworten, Arbeitszeiten und Fälle für die menschliche Übernahme.",
      },
      content: {
        question: "Wird die Content-Erstellung ständig verschoben?",
        description: "Die Idee ist da, aber Briefing, Produktion und Freigabe beginnen jedes Mal neu.",
        detailHeading: "Der Content-Engpass liegt in der Planung",
        firstStep: "Wir nehmen ein aktuelles Thema und definieren Ziel, Format und Ton.",
        solution: "Wenn Format, Ton und Freigabeweg nicht feststehen, verzögert sich der Start immer wieder.",
        builds: ["Für wen der Content ist und was verstanden werden soll.", "Welche Formate zu Ihrem Angebot passen.", "Welche Materialien vorhanden sind und was fehlt.", "Wer das Material vor der Veröffentlichung freigibt."],
        materials: "Beispiele Ihrer Marke, Produktinformationen, Wunschformat und Freigaberegel.",
      },
      website: {
        question: "Besuchen Menschen Ihre Website, finden aber den nächsten Schritt nicht?",
        description: "Besucher lesen die Informationen, starten aber keine Anfrage, keinen Anruf und keinen Chat.",
        detailHeading: "Der Website-Engpass zeigt sich beim Entscheid",
        firstStep: "Wir nehmen eine zentrale Seite und prüfen, was der Besucher am Ende tun soll.",
        solution: "Wenn Angebot und wichtigste Aktion im ersten Bildschirm fehlen, bleibt der Besucher ohne klare Wahl.",
        builds: ["Was der Besucher in der ersten Minute verstehen soll.", "Welche Aktion zählt: Anfrage, Anruf oder Chat.", "Wo ein Mensch eine Frage beantworten muss.", "Welche Information das Team erreichen soll."],
        materials: "Leistungsliste, Frage des Wunschkunden und aktueller Kontaktweg.",
      },
    },
  },
  categories: {
    title: "Produkt kaufen oder System aufbauen",
    description: "Ein fertiges Produkt können Sie direkt kaufen. Wenn die fertige Option nicht ausreicht, können Sie ein individuelles System beauftragen.",
    items: {
      communication: { title: "Systeme für Kundenkommunikation", subtitle: "Fertige Produkte für Nachrichten, Anrufe, Bestellungen und den nächsten Kundenschritt.", products: { aichats: "Kundenantworten", aicall: "Eingehende und ausgehende Anrufe" } },
      marketing: { title: "Systeme für Wachstum und Marketing", subtitle: "Fertige Produkte für Content, Musik und Werbekampagnen.", products: { aicontent: "Werbevideos", aiads: "Werbemanagement für Meta und Google", aimusic: "Musik für Videos" } },
      internal: { title: "Systeme für interne Abläufe und Wissen", subtitle: "Produkte für KI-Fachkräfte, Wissen, Dokumente und wiederkehrende Teamarbeit.", products: { aistaff: "KI-Fachkräfte für Ihr Unternehmen", aibrain: "Unternehmens-Wissensbasis", aioffice: "Aufgaben und Büroarbeit", aidocs: "Dokumentfelder verarbeiten" } },
      products: { title: "Websites und digitale Produkte", subtitle: "Fertige Website- und App-Produkte sowie ein eigenes System, wenn der Ablauf mehr braucht.", products: { aiweb: "Business-Website", aiapp: "Mobile App", vibecoding: "Sicherheit für KI-Apps" } },
    },
  },
  industries: {
    eyebrow: "Ihre Branche hat eigene Regeln",
    title: "Eine KI passt nicht für alle",
    description: "Je nach Branche ändern sich Kundenfragen, Regeln, Daten und Übergaben an Menschen. Deshalb braucht derselbe KI-Einsatz in jeder Branche einen anderen Rahmen.",
    items: {
      healthcare: { title: "Kliniken und Ästhetik", tag: "Gesundheit und Schönheit", description: "Patienten wählen Leistung, Zeit und benötigte Informationen in einem Prozess.", action: "Klinikprozess besprechen", points: ["Fragen richten sich nach Leistung, Arzt und Terminregeln.", "Preis, Vorbereitung und Adresse sind vorab sichtbar.", "Die Terminbestätigung folgt ausschließlich Ihren Regeln.", "Medizinische Ausnahmen gehen an einen Mitarbeiter."] },
      horeca: { title: "Restaurants und HoReCa", tag: "Restaurants und Gastronomie", description: "Gäste brauchen Menü, freien Tisch und eine klare Antwort in einem Gespräch.", action: "Restaurantszenario besprechen", points: ["Menü, Allergene und Öffnungszeiten folgen Ihren Regeln.", "Die nötigen Buchungsdaten werden vorab festgelegt.", "Terrasse, Saal und Gruppenbestellungen haben eigene Regeln.", "Sonderwünsche gehen an Ihr Team."] },
      "real-estate": { title: "Immobilien und Entwicklung", tag: "Immobilien", description: "Käufer wählen ein Objekt, stellen Finanzfragen und wünschen eine Besichtigung.", action: "Immobilienprozess besprechen", points: ["Objekt, Preis und Verfügbarkeit werden in einem Format erfasst.", "Grundrisse und Bilder werden passend zur Anfrage gesendet.", "Budget, Viertel und Zeitraum werden zu klaren Fragen.", "Besichtigungswünsche gehen an den Vertrieb."] },
      ecommerce: { title: "E-Commerce und Retail", tag: "Online-Shop", description: "Käufer fragen gleichzeitig nach Auswahl, Preis und Lieferbedingungen.", action: "Online-Shop-Prozess besprechen", points: ["Produkte und Varianten aus dem Katalog erscheinen nach Ihren Regeln.", "Größe, Farbe, Bestand und Lieferung werden getrennt erfasst.", "Die Daten für eine Bestellung werden vorab definiert.", "Zahlungs- und Rückfragen gehen an die richtige Stelle."] },
      auto: { title: "Autoservice und Detailing", tag: "Autoservice", description: "Fahrzeughalter brauchen die genaue Leistung, den Preis und einen freien Termin.", action: "Autoservice-Prozess besprechen", points: ["Marke, Modell und Arbeit werden in den ersten Fragen geklärt.", "Preise und Servicebedingungen folgen Ihrer Tarifliste.", "Box und Termin werden nach den vereinbarten Regeln gewählt.", "Komplexe Diagnosen gehen an den Meister."] },
      legal: { title: "Recht und professionelle Dienste", tag: "Recht und professionelle Dienste", description: "Kunden erklären zuerst den Fall und fragen dann nach Dokumenten und Beratung.", action: "Rechtsprozess besprechen", points: ["Thema und Fristen werden am Anfang geklärt.", "Die Liste benötigter Dokumente folgt Ihren Regeln.", "Dokumente bleiben Arbeitsmaterial bis zur Prüfung durch einen Menschen.", "Komplexe oder vertrauliche Fälle gehen an Spezialisten."] },
    },
  },
  process: {
    title: "Vom Geschäftsproblem zum Arbeitssystem",
    description: "Vor dem Start wissen Sie, was zu tun ist, was wir prüfen und wer welchen Teil übernimmt.",
    steps: [
      { title: "Prüfen und entwerfen", description: "Wir erfassen Problem, aktuellen Ablauf, Eingaben und das Ergebnis, das Ihr Unternehmen braucht." },
      { title: "Bauen und integrieren", description: "Wir erstellen das System, verbinden die passenden Werkzeuge und testen wichtige Szenarien mit Ihrem Team." },
      { title: "Betreiben und verbessern", description: "Die Lösung arbeitet nach vereinbarten Regeln; wir prüfen Änderungen, aktualisieren sie und klären Verantwortlichkeiten." },
    ],
  },
  architecture: {
    eyebrow: "Technologie unter Kontrolle",
    title: "Ihr System, Ihre Regeln",
    description: "Wir geben dem System nur die nötigen Informationen. Gemeinsam legen wir fest, wer was sehen und ändern darf und wann ein Mensch übernimmt.",
    action: "Technologie und Sicherheit besprechen",
    principle: "Prinzip",
    rule: "● Ihre Kontrolle",
    specs: [
      { title: "Nur nötige Quellen verbinden", description: "Wir wählen die Kanäle, Dateien und Werkzeuge für die Aufgabe; alles andere bleibt außen vor." },
      { title: "Sie steuern das Wissen des Systems", description: "Preise, Bedingungen, FAQs und Regeln kommen aus Quellen, die Sie freigeben." },
      { title: "Das Design folgt dem echten Ablauf", description: "Die Systemarchitektur bildet die Arbeit ab, einschließlich der Übergaben an Menschen." },
      { title: "Änderungen vor der Nutzung prüfen", description: "Neue Texte, Preise und Szenarien werden geprüft, bevor Kunden oder Team sie sehen." },
      { title: "Zugriff nach Rollen verteilen", description: "Rechte zum Ansehen, Ändern und Prüfen werden nach vereinbarten Teamrollen getrennt." },
      { title: "Der Betrieb ist von Anfang an klar", description: "Wir halten fest, wo Informationen liegen, wer wofür zuständig ist und wie eine Verbindung geändert oder beendet wird." },
    ],
  },
  team: {
    eyebrow: "Unser Ansatz",
    title: "Von der Beratung zum Arbeitssystem",
    paragraphs: [
      "Wir sind aiNOW – ein Team aus Tiflis, das KI in Unternehmen bringt.",
      "Die Supportbedingungen vereinbaren wir im Voraus, damit Sie wissen, an wen Sie sich wenden können und wobei unser Team hilft.",
      "iAI koordiniert diese Produkte und die Arbeit zwischen ihnen.",
    ],
    names: { andro: "Andro Kasparov", nika: "Nika Skhirtladze", giorgi: "Giorgi Darbaiseli" },
    roles: { founder: "Gründer", commercial: "Leitung Commercial", businessDevelopment: "Leitung Geschäftsentwicklung" },
    location: "Tiflis, Georgien",
    year: "2026",
  },
  faq: {
    eyebrow: "[Antworten auf Ihre Fragen]",
    title: "Häufig gestellte Fragen",
    description: "Kurze, direkte Antworten zu Preis, Start, Kontrolle und Daten.",
    filters: { all: "Alle", pricing: "Preis und Umfang", tech: "Start und Support", safety: "Daten und Kontrolle" },
    searchLabel: "Fragen durchsuchen",
    searchPlaceholder: "Frage suchen...",
    questionPrefix: "Frage",
    calloutTitle: "Noch eine konkrete Frage?",
    calloutAction: "Ihre Situation teilen",
    items: {
      q1: { question: "Was kostet aiNOW für mein Unternehmen?", answer: "Der Preis hängt vom gewählten Produkt und Umfang ab. Im Angebot zeigen wir getrennt, was einmalig oder monatlich enthalten ist und was zusätzliche Arbeit werden kann. Den genauen Betrag nennen wir nach dem Verständnis Ihrer Aufgabe." },
      q2: { question: "Was ist im Preis enthalten und was kann extra kosten?", answer: "Wir trennen Erstellung, nötige Verbindungen und laufenden Service. Im Angebot steht vorab, was enthalten ist, was nicht und wann zusätzliche Arbeit nötig werden kann." },
      q3: { question: "Kann ich mit einem kleinen ersten Schritt starten?", answer: "Ja. Wir können mit einem konkreten Prozess beginnen, der Ihnen am wichtigsten ist. Den nächsten Schritt bestimmen wir erst, wenn wir den ersten gemeinsam bewertet haben." },
      q4: { question: "Wie viel Zeit und Mitarbeit brauche ich am Anfang?", answer: "Wir brauchen eine Erklärung des Prozesses, aktuelle Materialien und eine Person für Rückfragen. Wir teilen die Arbeit in Etappen und sagen vorher, wann Ihre Mitarbeit nötig ist." },
      q5: { question: "Was muss ich vorbereiten, damit das System passt?", answer: "Das hängt von der Aufgabe ab: Preise, Leistungsbeschreibungen, Regeln, FAQs, Beispiele und Fälle für die menschliche Übergabe. Was noch nicht geordnet ist, strukturieren wir gemeinsam." },
      q6: { question: "Wer aktualisiert die Informationen bei neuen Regeln?", answer: "Den Änderungsprozess legen wir vorher fest. Sie geben den neuen Preis, die Bedingung oder das Szenario; wir prüfen es und aktualisieren das System nach der Vereinbarung." },
      q7: { question: "Wer erhält Zugriff auf meine Daten und Kundeninformationen?", answer: "Der Zugriff folgt der Aufgabe und vereinbarten Rollen. Von Beginn an legen wir fest, welcher Kanal oder welche Datei nötig ist und wer sie sehen oder ändern darf." },
      q8: { question: "Bleiben meine Daten bei Ihnen oder bei mir?", answer: "Speicherung und Zugriff werden vorab in der Vereinbarung festgehalten. Sie sehen, was für das Projekt genutzt wird, wofür und was nach dem Ende der Zusammenarbeit passiert." },
      q9: { question: "Kann ich selbst entscheiden, was die KI tun darf?", answer: "Ja. Wir definieren erlaubte Aktionen, gesperrte Themen, Arbeitszeiten und Fälle, in denen Antwort oder Aktion an einen Menschen geht." },
      q10: { question: "Kann ich das System stoppen oder ändern?", answer: "Das Verfahren zum Stoppen und Ändern wird vorher definiert. Sie wissen, wer Regeln ändert, wie Updates geprüft und Funktionen abgeschaltet werden." },
      q11: { question: "Was passiert bei einer falschen Antwort der KI?", answer: "Bei unklaren oder riskanten Themen stoppt das System und übergibt den Fall an einen Menschen. Wir erfassen den Fehler, korrigieren Quelle oder Regel und testen erneut." },
      q12: { question: "Sieht mein Team schwierige Gespräche?", answer: "Die Übergabebedingungen werden vorher festgelegt: etwa Beschwerde, ungewöhnliche Anfrage oder eine Entscheidung durch Mitarbeitende. Der Weg wird mit Ihrem Team vereinbart." },
      q13: { question: "Wer kümmert sich nach dem Start um das System?", answer: "Wir vereinbaren das Support-Modell: was unser Service umfasst, wofür Ihr Team zuständig ist und wie Sie Änderungen oder Fehler melden." },
      q14: { question: "Was, wenn das Ergebnis nicht zu meinem Prozess passt?", answer: "Wir teilen die Arbeit in Etappen und schreiben die Kriterien vorab. Bei einer Abweichung dokumentieren wir sie, korrigieren die Arbeit oder sagen, dass eine andere Lösung nötig ist." },
      q15: { question: "Wie starte ich, ohne Zeit und Geld zu verlieren?", answer: "Wir beginnen mit einem Prozess: Was passiert jetzt, wo stockt die Arbeit und welches Material ist vorhanden? Danach zeigen wir ersten Schritt, Umfang und Preis; Sie entscheiden." },
    },
  },
  clientFit: {
    title: "Für wen aiNOW gedacht ist",
    description: "Für Unternehmen, die ihre tägliche Arbeit vereinfachen oder ein neues System schaffen möchten.",
    ariaLabel: "Für wen aiNOW geeignet ist",
    signals: ["Ihr Team verliert Zeit mit Kundennachrichten, Anrufen, Dokumenten oder wiederkehrender interner Arbeit.", "Sie haben einen echten Prozess, der klare Regeln, Verbindungen oder Zuständigkeiten braucht.", "Sie möchten den Ablauf vor der Wahl eines Tools oder der Beauftragung eines Systems prüfen.", "Sie suchen einen Partner für Entwurf, Einführung und laufenden Betrieb."],
    notForTitle: "aiNOW passt vielleicht nicht, wenn...",
    notForDescription: "Sie nur ein einmaliges Ergebnis, den niedrigsten Preis oder eine Garantie ohne Prozessprüfung möchten.",
    uncertain: "Sie sind unsicher, ob Sie KI brauchen? Kontaktieren Sie uns – das klären wir gemeinsam.",
  },
  closingCta: {
    title: "Beginnen wir mit der wichtigen Arbeit",
    description: "Schildern Sie uns kurz, was Sie tun und wobei Sie Hilfe brauchen. Wählen Sie, wie wir Sie kontaktieren sollen – per WhatsApp, SMS oder Anruf.",
    successPrefix: "Vielen Dank! Ihre Anfrage ist eingegangen.",
    checks: ["Zuerst klären wir, was Sie brauchen", "Wir sagen Ihnen vorher, was wir tun und was es kostet", "Wenn Sie keine KI brauchen, sagen wir das ebenfalls"],
  },
  footer: {
    tagline: "Beratung. Technologie. Arbeitssysteme.",
    description: "aiNOW ist ein KI-Beratungs- und Technologieunternehmen für Kundenkommunikation und interne Abläufe.",
    action: "Geschäftsaufgabe besprechen",
    products: "Produkte",
    industries: "Branchen",
    resources: "Ressourcen",
    language: "Sprache",
    legal: "Recht und Sicherheit",
    blog: "Blog",
    howWeStart: "So starten wir",
    faq: "Fragen und Antworten",
    sendTask: "Aufgabe senden",
    email: "Per E-Mail schreiben",
    privacy: "Datenschutz",
    terms: "Servicebedingungen",
    location: "Tiflis, Georgien",
    rights: "Alle Rechte vorbehalten.",
    backToTop: "Nach oben ↑",
    industryLinks: ["Kliniken und Ästhetik", "Restaurants und HoReCa", "Immobilien und Entwicklung", "E-Commerce und Retail", "Autoservice und Detailing", "Recht und professionelle Dienste"],
  },
};

const tr: AiNowHomeCopy = {
  productLabels: {
    aichats: "Müşteri mesajlaşması",
    aicall: "AI aramaları",
    aicontent: "AI içerik",
    aiweb: "Web siteleri ve web ürünleri",
    aistaff: "AI uzmanı işe alımı",
    iai: "Süreç koordinasyonu",
  },
  nav: {
    products: "Ürünler",
    customerCommunication: "Müşteri iletişimi",
    marketingContent: "Pazarlama ve içerik",
    internalOperations: "İç operasyonlar",
    webApps: "Web siteleri ve uygulamalar",
    specializedSolutions: "Koordinasyon ve özel çözümler",
    operations: "Operasyonel AI",
    growth: "Büyüme ve pazarlama",
    resources: "Kaynaklar",
    resourcesBlog: "Kaynaklar ve blog",
    capabilities: "Yetenekler",
    architecture: "Mimari",
    pricing: "Fiyatlar",
    contact: "İletişim",
    consultation: "Danışmanlık",
    themeLight: "Açık temaya geç",
    themeDark: "Koyu temaya geç",
    themeToggle: "Temayı değiştir",
    menuOpen: "Menüyü aç",
    menuClose: "Menüyü kapat",
    productDescriptions: {
      aichats: "Müşteri mesajlaşması",
      aicall: "Gelen ve giden AI aramaları",
      aistaff: "Şirketiniz için AI uzmanları",
      aicontent: "AI video ve reklam kreatifi",
      aiads: "Meta ve Google reklam yönetimi",
      aimusic: "Markanız için müzik ve ses",
      aibrain: "Şirket bilgisi ve kuralları tek yerde",
      aioffice: "Görevler, belgeler ve iç süreçler",
      aidocs: "Belge işleme ve kontrol",
      aiweb: "Web siteleri ve web ürünleri",
      aiapp: "İşletmeler için mobil uygulamalar",
      vibecoding: "Güvenli uygulama geliştirme",
      iai: "Süreç koordinasyonu",
      aijurist: "Hukuki araştırma ve belge taslakları",
      aitaxi: "Taksi filosu operasyon yönetimi",
    },
    resourceItems: {
      blog: { title: "Blog", subtitle: "Vaka çalışmaları, analiz ve içgörüler" },
      architecture: { title: "Mimari", subtitle: "Platformun teknik yapısı" },
      updates: { title: "Güncellemeler", subtitle: "Haftalık yenilikler" },
      industries: { title: "Sektörler", subtitle: "Sektöre göre çözümler" },
    },
  },
  banner: {
    aichats: "Müşteri mesajlarını yönetme",
    aicall: "Gelen ve giden aramalar için sesli AI asistanları",
    aicontent: "Reklam videoları ve işletme içeriği",
    aiads: "Meta ve Google reklam yönetimi",
    aistaff: "Şirketiniz için AI uzmanları",
    airadar: "Pazar ve itibar takibi",
    aiweb: "İşletme web siteleri ve uygulamaları",
    iai: "Süreç koordinasyonu",
  },
  hero: {
    titleLine1: "İşletmeler için AI sistemleri.",
    titleLine2: "Mesajlaşma, aramalar, içerik.",
    description: "aiNOW, müşteri iletişimi ve iç operasyonlar için AI sistemleri geliştirir ve devreye alır. Hazır bir ürün seçebilir veya ihtiyacınıza uygun bir sistem talep edebilirsiniz.",
    primaryCta: "Bize ulaşın",
    catalogCta: "Hazır ürünleri görün",
    hint: "Seçim konusunda yardıma mı ihtiyacınız var? Bize ulaşın.",
  },
  ecosystemHub: {
    satellites: {
      chats: { title: "Mesajlaşma", subtitle: "Mesajlaşma uygulamalarında müşterilerle", alt: "Müşteri mesajlaşması" },
      calls: { title: "Aramalar", subtitle: "Sesli AI asistanları", alt: "AI aramaları" },
      content: { title: "İçerik", subtitle: "Fotoğraf · video · müzik", alt: "İçerik" },
      apps: { title: "Web siteleri ve ofis", subtitle: "Siteler · belgeler · süreçler", alt: "Web siteleri ve ofis" },
    },
    centerSubtitle: "Yönetim merkezi · OS",
    badge: "Tek ekip — farklı çözümler ⤴",
  },
  comparison: {
    title: "İş probleminizle başlayalım",
    description: "Size tanıdık gelen durumu seçin.",
    action: "İş probleminizi görüşün",
    labels: { inspect: "Neyi inceliyoruz", firstStep: "İlk adım", ask: "Ne soracağız" },
    problems: {
      chats: {
        question: "Müşteri mesajları yanıtsız mı kalıyor?",
        description: "Sorular farklı kanallara dağılıyor ve ekip aynı yanıtı tekrar tekrar arıyor.",
        detailHeading: "Mesajlaşma darboğazı burada başlar",
        firstStep: "Tipik bir konuşmayı alıp bilginin veya sonraki adımın nerede kaybolduğunu belirleriz.",
        solution: "Fiyat, katalog veya yanıt kuralı tek yerde değilse her operatör aramaya baştan başlar.",
        builds: ["En çok sorunun hangi kanallardan geldiğini.", "Hangi yanıt, fiyat ve kuralların en çok arandığını.", "Konuşmanın ne zaman bir ekip üyesine aktarılacağını.", "Sonraki adım için hangi bilginin kalması gerektiğini."],
        materials: "Hangi soruların zaman kaybettirdiği, hangi kanalların önemli olduğu ve insanın nerede devreye gireceği.",
      },
      calls: {
        question: "Aramalar kopuyor ve takipler kayboluyor mu?",
        description: "Yeni talep, onay veya geri arama çoğu zaman aynı kişiye bağlı kalıyor.",
        detailHeading: "Arama sorunu konuşmadan sonra görünür",
        firstStep: "Tipik bir arama seçer, arama sırasında neyin çözülmesi ve sonrasında neyin kaydedilmesi gerektiğini belirleriz.",
        solution: "Aramanın amacı ve sonraki adım yazılı değilse sonuç konuşma biter bitmez kaybolur.",
        builds: ["Hangi aramaların geldiğini, hangilerini AI'ın başlatacağını.", "Her aramanın neye ulaşması gerektiğini.", "Konuşmanın ne zaman ekip üyesine aktarılacağını.", "Arama sonrasında neyin kaydedileceğini."],
        materials: "Arama nedeni, olası yanıtlar, çalışma saatleri ve insanın devreye gireceği durumlar.",
      },
      content: {
        question: "İçerik üretimi sürekli erteleniyor mu?",
        description: "Fikir var, ancak brif, üretim ve onay her seferinde yeniden başlıyor.",
        detailHeading: "İçerik darboğazı planlamada görünür",
        firstStep: "Güncel bir konuyu alıp amacını, formatını ve tonunu netleştiririz.",
        solution: "Format, ton ve onay yolu önceden belirlenmezse içerik başlangıcı sürekli gecikir.",
        builds: ["İçeriğin kime hitap ettiğini ve ne anlatması gerektiğini.", "Teklifinize uygun formatları.", "Hangi materyalin mevcut, hangisinin eksik olduğunu.", "Yayın öncesi onayı kimin vereceğini."],
        materials: "Marka örnekleri, ürün bilgisi, tercih edilen format ve onay kuralı.",
      },
      website: {
        question: "İnsanlar sitenize geliyor ama sonraki adımı bulamıyor mu?",
        description: "Ziyaretçi bilgiyi okuyor, ancak talep, arama veya sohbet başlatmıyor.",
        detailHeading: "Web sitesi sorunu seçim anında görünür",
        firstStep: "Bir ana sayfayı alıp ziyaretçinin sonunda ne yapması gerektiğini kontrol ederiz.",
        solution: "Ana eylem ve teklif ilk ekranda görünmüyorsa ziyaretçi net bir seçim yapamaz.",
        builds: ["Ziyaretçinin ilk dakikada ne anlaması gerektiğini.", "Ana eylemin talep, arama veya sohbet olup olmadığını.", "İnsanın hangi soruya yanıt vermesi gerektiğini.", "Hangi bilginin ekibe aktarılacağını."],
        materials: "Hizmet listesi, hedef müşterinin sorusu ve mevcut iletişim yolu.",
      },
    },
  },
  categories: {
    title: "Ürün seçin veya sistem kurun",
    description: "Hazır bir ürünü doğrudan satın alabilirsiniz. Hazır seçenek yeterli değilse size özel bir sistem talep edebilirsiniz.",
    items: {
      communication: { title: "Müşteri iletişim sistemleri", subtitle: "Mesajlar, aramalar, siparişler ve müşteri takibi için hazır ürünler.", products: { aichats: "Müşteri yanıtları", aicall: "Gelen ve giden aramalar" } },
      marketing: { title: "Büyüme ve pazarlama sistemleri", subtitle: "İçerik, müzik ve reklam kampanyaları için hazır ürünler.", products: { aicontent: "Reklam videoları", aiads: "Meta ve Google reklam yönetimi", aimusic: "Video için müzik" } },
      internal: { title: "İç operasyon ve bilgi sistemleri", subtitle: "AI uzmanları, bilgi, belgeler ve tekrarlanan ekip işleri için ürünler.", products: { aistaff: "Şirketiniz için AI uzmanları", aibrain: "Şirket bilgi tabanı", aioffice: "Görevler ve ofis işleri", aidocs: "Belge alanı işleme" } },
      products: { title: "Web siteleri ve dijital ürünler", subtitle: "Hazır web ve uygulama ürünleri; gerektiğinde iş akışınıza özel sistem.", products: { aiweb: "İşletme web sitesi", aiapp: "Mobil uygulama", vibecoding: "AI uygulama güvenliği" } },
    },
  },
  industries: {
    eyebrow: "Sektörünüzün özelliği",
    title: "Tek bir AI herkese uymaz",
    description: "Her sektörde müşterinin sorusu, kurallar, veriler ve insanın devreye girdiği an değişir. Bu yüzden aynı AI akışı her sektörde aynı şekilde çalışmaz.",
    items: {
      healthcare: { title: "Klinikler ve estetik", tag: "Sağlık ve güzellik", description: "Hasta hizmeti, zamanı ve gereken bilgiyi tek süreçte seçer.", action: "Klinik sürecini görüş", points: ["Soruları hizmet, doktor ve randevu kurallarına göre kurarız.", "Hasta fiyatı, hazırlığı ve adresi önceden görür.", "Randevu onayı yalnızca sizin belirlediğiniz kurallarla yapılır.", "Tıbbi istisnalar ekip üyesine aktarılır."] },
      horeca: { title: "Restoranlar ve HoReCa", tag: "Restoran ve yiyecek", description: "Misafirin tek konuşmada menüye, boş masaya ve net yanıta ihtiyacı vardır.", action: "Restoran senaryosunu görüş", points: ["Menü, alerjenler ve çalışma saatleri sizin kurallarınızla yazılır.", "Rezervasyon için gereken bilgiler önceden belirlenir.", "Teras, salon ve grup siparişleri ayrı kurallara sahip olur.", "Özel istekler ekibinize aktarılır."] },
      "real-estate": { title: "Gayrimenkul ve geliştirme", tag: "Gayrimenkul", description: "Alıcı mülkü seçer, finansal sorular sorar ve görmek ister.", action: "Gayrimenkul sürecini görüş", points: ["Mülk, fiyat ve uygunluk bilgisi tek formatta tutulur.", "Plan ve görseller uygun talepte gönderilir.", "Bütçe, bölge ve süre net sorulara dönüşür.", "Görüşme talebi satış ekibine aktarılır."] },
      ecommerce: { title: "E-ticaret ve perakende", tag: "Online mağaza", description: "Alıcı aynı anda seçenek, fiyat ve teslimat koşullarını sorar.", action: "Online mağaza sürecini görüş", points: ["Katalogdaki ürün ve seçenekler sizin kurallarınızla gösterilir.", "Beden, renk, stok ve teslimat ayrı sorular olarak alınır.", "Sipariş için gereken bilgiler önceden belirlenir.", "Ödeme veya iade sorusu doğru aşamaya aktarılır."] },
      auto: { title: "Oto servis ve detailing", tag: "Oto servis", description: "Araç sahibi doğru hizmeti, fiyatı ve uygun zamanı ister.", action: "Oto servis sürecini görüş", points: ["Marka, model ve iş türü ilk sorularda netleşir.", "Fiyat ve hizmet koşulları tarifenize göre yazılır.", "Kutu ve zaman seçimi anlaşılmış kurallara göre yapılır.", "Karmaşık teşhis ustaya aktarılır."] },
      legal: { title: "Hukuk ve profesyonel hizmetler", tag: "Hukuk ve profesyonel hizmetler", description: "Müşteri önce konuyu anlatır, sonra belge ve danışmanlık ister.", action: "Hukuk sürecini görüş", points: ["Konu türü ve süre ilk sorularla netleşir.", "Gerekli belgelerin listesi sizin kurallarınızla açıklanır.", "Belge, insan incelemesine kadar çalışma materyali olarak kalır.", "Karmaşık veya gizli konu uzmana aktarılır."] },
    },
  },
  process: {
    title: "İş probleminden çalışan sisteme",
    description: "Başlamadan önce ne yapılacağını, neyi kontrol edeceğimizi ve kimin hangi işi üstleneceğini bilirsiniz.",
    steps: [
      { title: "İnceler ve tasarlarız", description: "Problemi, mevcut süreci, girdileri ve işletmenin ihtiyaç duyduğu sonucu belirleriz." },
      { title: "Kurar ve entegre ederiz", description: "Sistemi oluşturur, gerekli araçlara bağlar ve önemli senaryoları ekibinizle test ederiz." },
      { title: "İşletir ve geliştiririz", description: "Çözüm kararlaştırılan kurallarla çalışır; değişiklikleri kontrol eder, günceller ve sorumlulukları net tutarız." },
    ],
  },
  architecture: {
    eyebrow: "Kontrollü teknoloji",
    title: "Sisteminiz, kurallarınız",
    description: "Sisteme yalnızca gerekli bilgileri sağlarız. Kimin neyi göreceğini, kimin değiştireceğini ve insanın ne zaman devreye gireceğini sizinle birlikte belirleriz.",
    action: "Teknoloji ve güvenliği görüşün",
    principle: "İlke",
    rule: "● Sizin kontrolünüz",
    specs: [
      { title: "Yalnızca gerekli kaynakları bağlarız", description: "Görev için gereken kanalları, dosyaları ve araçları seçeriz; diğerleri sistemin dışında kalır." },
      { title: "Sistemin bilgisini siz yönetirsiniz", description: "Fiyatlar, koşullar, SSS ve çalışma kuralları onayladığınız kaynaklardan gelir." },
      { title: "Tasarım gerçek süreci izler", description: "Sistem mimarisi, işin nasıl yapıldığını ve insana devredilen noktaları yansıtır." },
      { title: "Değişiklikleri kullanımdan önce kontrol ederiz", description: "Yeni metin, fiyat ve senaryolar müşteriye veya ekibe ulaşmadan incelenir." },
      { title: "Erişimi rollere göre ayırırız", description: "Görüntüleme, değiştirme ve kontrol haklarını ekibin kararlaştırılan rollerine göre ayırırız." },
      { title: "İşletim baştan bellidir", description: "Bilginin nerede tutulduğunu, kimin sorumlu olduğunu ve bağlantının nasıl değişeceğini veya kapanacağını yazarız." },
    ],
  },
  team: {
    eyebrow: "Yaklaşımımız",
    title: "Danışmanlıktan çalışan sisteme",
    paragraphs: [
      "Biz aiNOW'uz — Tiflis'ten, AI'ı işletmelere taşıyan bir ekibiz.",
      "Destek koşullarını önceden belirleriz; böylece kime ulaşacağınızı ve ekibimizin size nerede yardımcı olacağını bilirsiniz.",
      "iAI bu ürünleri ve aralarındaki işi koordine etmeye yardımcı olur.",
    ],
    names: { andro: "Andro Kasparov", nika: "Nika Skhirtladze", giorgi: "Giorgi Darbaiseli" },
    roles: { founder: "Kurucu", commercial: "Ticari direktör", businessDevelopment: "İş Geliştirme Direktörü" },
    location: "Tiflis, Gürcistan",
    year: "2026",
  },
  faq: {
    eyebrow: "[Sorularınızın yanıtları]",
    title: "Sık sorulan sorular",
    description: "Fiyat, başlangıç, kontrol ve veriler hakkında kısa ve net yanıtlar.",
    filters: { all: "Tümü", pricing: "Fiyat ve kapsam", tech: "Başlangıç ve destek", safety: "Veri ve kontrol" },
    searchLabel: "Sorularda ara",
    searchPlaceholder: "Soru ara...",
    questionPrefix: "Soru",
    calloutTitle: "Hâlâ belirli bir sorunuz mu var?",
    calloutAction: "Durumunuzu paylaşın",
    items: {
      q1: { question: "aiNOW işletmem için ne kadar tutar?", answer: "Fiyat seçilen ürüne ve kapsamına bağlıdır. Tek seferlik veya aylık çalışmada nelerin dahil olduğunu ve nelerin ek iş olabileceğini teklifte ayrı gösteririz. Kesin tutarı görevinizi anladıktan sonra söyleriz." },
      q2: { question: "Fiyata neler dahil, neler ayrı ücret olabilir?", answer: "Kurulumu, gerekli bağlantıları ve devam hizmetini ayrı gösteririz. Teklifte nelerin dahil, nelerin hariç olduğunu ve ek çalışmanın ne zaman gerekebileceğini önceden yazarız." },
      q3: { question: "Küçük bir aşamayla başlayabilir miyim?", answer: "Evet. Sizin için en önemli olan tek bir süreçle başlayabiliriz. Sonraki adımı ancak ilk aşamayı ve değerini birlikte değerlendirdikten sonra belirleriz." },
      q4: { question: "Başlangıçta ne kadar zaman ve katılım gerekir?", answer: "Süreç açıklaması, mevcut materyaller ve soruları netleştirecek bir kişi gerekir. İşi aşamalara böler, katılımınızın ne zaman gerektiğini önceden söyleriz." },
      q5: { question: "Sistem işime uysun diye ne hazırlamalıyım?", answer: "Göreve bağlıdır: fiyatlar, hizmet açıklamaları, kurallar, SSS, örnekler ve insanın devreye gireceği durumlar. Henüz düzenlenmemiş olanı ilk aşamada birlikte oluştururuz." },
      q6: { question: "Kurallarım değişirse bilgiyi kim günceller?", answer: "Değişiklik kuralını önceden belirleriz. Yeni fiyatı, koşulu veya senaryoyu siz verirsiniz; biz kontrol eder ve anlaşılan kuralla sistemi güncelleriz." },
      q7: { question: "Verilerime ve müşteri bilgilerine kim erişir?", answer: "Erişim göreve ve anlaşılan rollere göre belirlenir. Başta hangi kanal veya dosyanın gerektiğini ve kimin görebileceğini ya da değiştirebileceğini belirleriz." },
      q8: { question: "Verilerim sizde mi kalır, bende mi?", answer: "Saklama ve erişim kuralı anlaşmada önceden yazılır. Proje için neyin, hangi amaçla kullanıldığını ve iş bittiğinde ne olacağını görürsünüz." },
      q9: { question: "AI'ın ne yapacağına kendim karar verebilir miyim?", answer: "Evet. İzin verilen eylemleri, yasaklı konuları, çalışma saatlerini ve yanıtın insana aktarılacağı durumları belirleriz." },
      q10: { question: "Sistemi durdurabilir veya değiştirebilir miyim?", answer: "Durdurma ve değişiklik prosedürünü önceden belirleriz. Kuralı kimin değiştirdiğini, güncellemenin nasıl kontrol edildiğini ve özelliğin nasıl kapatıldığını bilirsiniz." },
      q11: { question: "AI müşteriye yanlış yanıt verirse ne olur?", answer: "Belirsiz veya riskli konuda sistemin durup konuyu insana aktarması için kural koyarız. Hatayı kaydeder, kaynağı veya kuralı düzeltir ve yeniden kontrol ederiz." },
      q12: { question: "Ekibim zor bir konuşmayı görebilir mi?", answer: "Aktarım koşullarını önceden belirleriz: şikâyet, olağandışı talep veya çalışan kararı gerektiren bir konu gibi. Yol ekibinizle kararlaştırılır." },
      q13: { question: "Kurulumdan sonra sisteme kim bakar?", answer: "Destek biçimini önceden kararlaştırırız: hizmetimizin kapsamı, ekibinizin sorumluluğu ve değişiklik ya da hata bildirme yolu." },
      q14: { question: "Sonuç sürecime uymazsa ne olur?", answer: "Çalışmayı aşamalara böler ve ölçütlerini önceden yazarız. Uymayan kısmı kaydeder, düzeltir veya başka bir çözüme ihtiyaç olduğunu söyleriz." },
      q15: { question: "Zaman ve para kaybetmeden nasıl başlarım?", answer: "Tek bir süreçle başlarız: şimdi ne oluyor, iş nerede yavaşlıyor ve hangi materyal var? Sonra ilk aşamayı, kapsamı ve fiyatı gösteririz; kararı siz verirsiniz." },
    },
  },
  clientFit: {
    title: "aiNOW kimler için",
    description: "Günlük işlerini kolaylaştırmak ya da yeni bir sistem kurmak isteyen işletmeler için.",
    ariaLabel: "aiNOW kimler için",
    signals: ["Ekibiniz müşteri mesajları, aramalar, belgeler veya tekrarlanan iç işlerde zaman kaybediyor.", "Açık kurallara, bağlantılara veya sorumlulara ihtiyaç duyan gerçek bir süreciniz var.", "Araç veya sistem seçmeden önce iş akışını incelemeye hazırsınız.", "Tasarım, uygulama ve devam eden işletim için sorumlu bir ortak arıyorsunuz."],
    notForTitle: "aiNOW size uygun olmayabilir, eğer...",
    notForDescription: "Süreci incelemeden tek seferlik sonuç, en düşük fiyat veya garanti istiyorsanız.",
    uncertain: "AI'ya ihtiyacınız olup olmadığından emin değil misiniz? Bize ulaşın — bunu birlikte netleştirelim.",
  },
  closingCta: {
    title: "Önemli olan işle başlayalım",
    description: "Ne yaptığınızı ve hangi konuda yardıma ihtiyacınız olduğunu kısaca anlatın. Size nasıl ulaşmamızı istediğinizi seçin — WhatsApp, SMS veya arama yoluyla.",
    successPrefix: "Teşekkürler! Talebinizi aldık.",
    checks: ["Önce neye ihtiyacınız olduğunu anlarız", "Ne yapacağımızı ve maliyetini önceden söyleriz", "AI'ya ihtiyacınız yoksa bunu da söyleriz"],
  },
  footer: {
    tagline: "Danışmanlık. Teknoloji. Çalışan sistemler.",
    description: "aiNOW, müşteri iletişimi ve iç operasyonlar için AI danışmanlığı ve teknoloji şirketidir.",
    action: "İş probleminizi görüşün",
    products: "Ürünler",
    industries: "Sektörler",
    resources: "Kaynaklar",
    language: "Dil",
    legal: "Hukuk ve güvenlik",
    blog: "Blog",
    howWeStart: "Nasıl başlıyoruz",
    faq: "Sorular ve yanıtlar",
    sendTask: "Görev gönder",
    email: "E-posta yazın",
    privacy: "Gizlilik",
    terms: "Hizmet şartları",
    location: "Tiflis, Gürcistan",
    rights: "Tüm hakları saklıdır.",
    backToTop: "Yukarı dön ↑",
    industryLinks: ["Klinikler ve estetik", "Restoranlar ve HoReCa", "Gayrimenkul ve geliştirme", "E-ticaret ve perakende", "Oto servis ve detailing", "Hukuk ve profesyonel hizmetler"],
  },
};

const fa: AiNowHomeCopy = {
  productLabels: {
    aichats: "ارتباط با مشتری",
    aicall: "تماس‌های AI",
    aicontent: "محتوای AI",
    aiweb: "وب‌سایت‌ها و محصولات وب",
    aistaff: "جذب متخصصان AI",
    iai: "هماهنگی فرایندها",
  },
  nav: {
    products: "محصولات",
    customerCommunication: "ارتباط با مشتری",
    marketingContent: "بازاریابی و محتوا",
    internalOperations: "عملیات داخلی",
    webApps: "وب‌سایت‌ها و اپ‌ها",
    specializedSolutions: "هماهنگی و راهکارهای تخصصی",
    operations: "AI عملیاتی",
    growth: "رشد و بازاریابی",
    resources: "منابع",
    resourcesBlog: "منابع و وبلاگ",
    capabilities: "قابلیت‌ها",
    architecture: "معماری",
    pricing: "قیمت‌ها",
    contact: "تماس",
    consultation: "مشاوره",
    themeLight: "فعال‌کردن پوسته روشن",
    themeDark: "فعال‌کردن پوسته تاریک",
    themeToggle: "تغییر پوسته",
    menuOpen: "بازکردن منو",
    menuClose: "بستن منو",
    productDescriptions: {
      aichats: "ارتباط با مشتری",
      aicall: "تماس‌های ورودی و خروجی AI",
      aistaff: "متخصصان AI برای شرکت شما",
      aicontent: "ویدیو و خلاقه تبلیغاتی با AI",
      aiads: "مدیریت تبلیغات Meta و Google",
      aimusic: "موسیقی و صدا برای برند شما",
      aibrain: "دانش و قوانین شرکت در یک جا",
      aioffice: "کارها، اسناد و فرایندهای داخلی",
      aidocs: "پردازش و بررسی اسناد",
      aiweb: "وب‌سایت‌ها و محصولات وب",
      aiapp: "اپلیکیشن‌های موبایل برای کسب‌وکار",
      vibecoding: "توسعه امن اپلیکیشن‌ها",
      iai: "هماهنگی فرایندها",
      aijurist: "پژوهش حقوقی و پیش‌نویس اسناد",
      aitaxi: "مدیریت عملیات ناوگان تاکسی",
    },
    resourceItems: {
      blog: { title: "وبلاگ", subtitle: "نمونه‌کارها، تحلیل و بینش‌ها" },
      architecture: { title: "معماری", subtitle: "ساختار فنی پلتفرم" },
      updates: { title: "به‌روزرسانی‌ها", subtitle: "تازه‌های هفتگی" },
      industries: { title: "صنایع", subtitle: "راهکارها بر اساس صنعت" },
    },
  },
  banner: {
    aichats: "مدیریت پیام‌های مشتریان",
    aicall: "دستیارهای صوتی AI برای تماس‌های ورودی و خروجی",
    aicontent: "ویدیوی تبلیغاتی و محتوای کسب‌وکار",
    aiads: "مدیریت تبلیغات Meta و Google",
    aistaff: "متخصصان AI برای شرکت شما",
    airadar: "پایش بازار و اعتبار برند",
    aiweb: "وب‌سایت و اپلیکیشن کسب‌وکار",
    iai: "هماهنگی فرایندها",
  },
  hero: {
    titleLine1: "سیستم‌های AI برای کسب‌وکار.",
    titleLine2: "پیام‌ها، تماس‌ها، محتوا.",
    description: "aiNOW برای ارتباط با مشتری و عملیات داخلی، سیستم‌های AI ایجاد و پیاده‌سازی می‌کند. می‌توانید محصول آماده انتخاب کنید یا سیستم موردنیاز خود را سفارش دهید.",
    primaryCta: "تماس با ما",
    catalogCta: "دیدن محصولات آماده",
    hint: "برای انتخاب به کمک نیاز دارید؟ با ما تماس بگیرید.",
  },
  ecosystemHub: {
    satellites: {
      chats: { title: "پیام‌رسانی", subtitle: "ارتباط با مشتری در پیام‌رسان‌ها", alt: "ارتباط با مشتری" },
      calls: { title: "تماس‌ها", subtitle: "دستیارهای صوتی AI", alt: "تماس‌های AI" },
      content: { title: "محتوا", subtitle: "عکس · ویدیو · موسیقی", alt: "محتوا" },
      apps: { title: "وب‌سایت و دفتر", subtitle: "وب‌سایت · سند · فرایند", alt: "وب‌سایت و دفتر" },
    },
    centerSubtitle: "مرکز کنترل · OS",
    badge: "یک تیم — راهکارهای مختلف ⤴",
  },
  comparison: {
    title: "با مسئله کسب‌وکار شروع کنیم",
    description: "موقعیتی را انتخاب کنید که برایتان آشناست.",
    action: "بررسی مسئله کسب‌وکار",
    labels: { inspect: "چه چیزی را بررسی می‌کنیم", firstStep: "گام اول", ask: "چه می‌پرسیم" },
    problems: {
      chats: {
        question: "پیام‌های مشتریان بی‌پاسخ می‌ماند؟",
        description: "پرسش‌ها در کانال‌های مختلف پخش می‌شوند و تیم باید پاسخ یکسان را دوباره پیدا کند.",
        detailHeading: "گلوگاه پیام‌رسانی از اینجا شروع می‌شود",
        firstStep: "یک گفت‌وگوی معمولی را بررسی می‌کنیم و می‌بینیم اطلاعات یا گام بعدی کجا از بین می‌رود.",
        solution: "وقتی قیمت، کاتالوگ یا قاعده پاسخ در یک جا نیست، هر اپراتور جست‌وجو را از ابتدا شروع می‌کند.",
        builds: ["بیشتر پرسش‌ها از کدام کانال می‌آید.", "کدام پاسخ‌ها، قیمت‌ها و قواعد بیشتر جست‌وجو می‌شود.", "چه زمانی گفت‌وگو به همکار نیاز دارد.", "چه داده‌ای باید برای گام بعدی باقی بماند."],
        materials: "کدام پرسش‌ها زمان می‌گیرد، کدام کانال‌ها مهم است و انسان کجا باید وارد شود.",
      },
      calls: {
        question: "تماس‌ها قطع می‌شود و پیگیری‌ها از بین می‌رود؟",
        description: "درخواست جدید، تأیید یا تماس بعدی اغلب به همان یک نفر وابسته است.",
        detailHeading: "مشکل تماس بعد از گفت‌وگو دیده می‌شود",
        firstStep: "یک تماس معمولی را انتخاب می‌کنیم و مشخص می‌کنیم چه چیزی حین تماس حل و چه چیزی بعد از آن ثبت شود.",
        solution: "اگر هدف تماس و گام بعدی نوشته نشده باشد، نتیجه با پایان گفت‌وگو ناپدید می‌شود.",
        builds: ["کدام تماس‌ها ورودی است و AI کدام را آغاز کند.", "هر تماس باید به چه نتیجه‌ای برسد.", "چه زمانی گفت‌وگو به همکار منتقل شود.", "بعد از تماس چه چیزی ثبت شود."],
        materials: "دلیل تماس، پاسخ‌های ممکن، ساعت کاری و موارد ورود انسان.",
      },
      content: {
        question: "تولید محتوا مدام عقب می‌افتد؟",
        description: "ایده دارید، اما بریف، تولید و تأیید هر بار از صفر شروع می‌شود.",
        detailHeading: "گلوگاه محتوا در برنامه‌ریزی دیده می‌شود",
        firstStep: "یک موضوع جاری را انتخاب می‌کنیم و هدف، قالب و لحن آن را ثبت می‌کنیم.",
        solution: "وقتی قالب، لحن و مسیر تأیید از قبل مشخص نباشد، شروع محتوا مدام عقب می‌افتد.",
        builds: ["محتوا برای چه کسی است و چه چیزی باید بفهمد.", "کدام قالب با پیشنهاد شما سازگار است.", "چه موادی دارید و چه چیزی کم است.", "چه کسی محتوا را پیش از انتشار تأیید می‌کند."],
        materials: "نمونه‌های برند، اطلاعات محصول، قالب دلخواه و قاعده تأیید.",
      },
      website: {
        question: "افراد وارد سایت می‌شوند اما گام بعدی را پیدا نمی‌کنند؟",
        description: "بازدیدکننده اطلاعات را می‌خواند، اما درخواست، تماس یا چت را شروع نمی‌کند.",
        detailHeading: "مشکل سایت در لحظه انتخاب دیده می‌شود",
        firstStep: "یک صفحه اصلی را بررسی می‌کنیم و می‌بینیم بازدیدکننده در پایان باید چه کند.",
        solution: "وقتی اقدام اصلی و پیشنهاد در صفحه اول دیده نشود، بازدیدکننده انتخاب روشنی ندارد.",
        builds: ["بازدیدکننده در دقیقه اول چه چیزی باید بفهمد.", "اقدام اصلی درخواست، تماس یا چت است.", "کاربر در کجا به پاسخ انسانی نیاز دارد.", "چه اطلاعاتی باید به تیم برسد."],
        materials: "فهرست خدمات، پرسش مشتری هدف و مسیر تماس فعلی.",
      },
    },
  },
  categories: {
    title: "محصول آماده یا سیستم اختصاصی",
    description: "محصول آماده را می‌توانید مستقیم بخرید. اگر گزینه آماده کافی نباشد، می‌توانید سیستم اختصاصی سفارش دهید.",
    items: {
      communication: { title: "سیستم‌های ارتباط با مشتری", subtitle: "محصولات آماده برای پیام، تماس، سفارش و پیگیری مشتری.", products: { aichats: "پاسخ به مشتری", aicall: "تماس‌های ورودی و خروجی" } },
      marketing: { title: "سیستم‌های رشد و بازاریابی", subtitle: "محصولات آماده برای محتوا، موسیقی و کمپین تبلیغاتی.", products: { aicontent: "ویدیوی تبلیغاتی", aiads: "مدیریت تبلیغات Meta و Google", aimusic: "موسیقی برای ویدیو" } },
      internal: { title: "سیستم‌های عملیات داخلی و دانش", subtitle: "محصولات برای متخصصان AI، دانش، اسناد و کارهای تکراری تیم.", products: { aistaff: "متخصصان AI برای شرکت شما", aibrain: "پایگاه دانش شرکت", aioffice: "وظایف و کارهای اداری", aidocs: "پردازش فیلدهای سند" } },
      products: { title: "وب‌سایت و محصولات دیجیتال", subtitle: "محصولات آماده وب و اپ، و در صورت نیاز سیستم متناسب با فرایند شما.", products: { aiweb: "وب‌سایت کسب‌وکار", aiapp: "اپلیکیشن موبایل", vibecoding: "امنیت اپلیکیشن‌های AI" } },
    },
  },
  industries: {
    eyebrow: "ویژگی‌های صنعت شما",
    title: "یک AI برای همه مناسب نیست",
    description: "در هر صنعت، پرسش مشتری، قواعد، داده‌ها و زمان ورود انسان متفاوت است. به همین دلیل یک جریان AI در همه کسب‌وکارها یکسان نیست.",
    items: {
      healthcare: { title: "کلینیک و زیبایی", tag: "سلامت و زیبایی", description: "بیمار خدمت، زمان و اطلاعات لازم را در یک فرایند انتخاب می‌کند.", action: "بررسی فرایند کلینیک", points: ["پرسش‌ها بر اساس خدمت، پزشک و شرایط ویزیت تنظیم می‌شود.", "بیمار قیمت، آماده‌سازی و آدرس را از قبل می‌بیند.", "تأیید نوبت فقط طبق قواعد شما انجام می‌شود.", "استثناهای پزشکی به همکار منتقل می‌شود."] },
      horeca: { title: "رستوران و HoReCa", tag: "رستوران و غذا", description: "مهمان در یک گفت‌وگو به منو، میز خالی و پاسخ روشن نیاز دارد.", action: "بررسی سناریوی رستوران", points: ["منو، آلرژن‌ها و ساعت کاری طبق قواعد شما ثبت می‌شود.", "اطلاعات لازم برای رزرو از قبل مشخص می‌شود.", "تراس، سالن و سفارش گروهی قواعد جداگانه دارد.", "درخواست ویژه به تیم شما منتقل می‌شود."] },
      "real-estate": { title: "املاک و توسعه", tag: "املاک", description: "خریدار ملک را انتخاب می‌کند، پرسش مالی دارد و درخواست بازدید می‌دهد.", action: "بررسی فرایند املاک", points: ["اطلاعات ملک، قیمت و موجودی در یک قالب ثبت می‌شود.", "نقشه و تصویر در صورت نیاز فرستاده می‌شود.", "بودجه، محله و زمان به پرسش‌های روشن تبدیل می‌شود.", "درخواست جلسه به تیم فروش منتقل می‌شود."] },
      ecommerce: { title: "تجارت الکترونیک و خرده‌فروشی", tag: "فروشگاه آنلاین", description: "خریدار هم‌زمان انتخاب، قیمت و شرایط ارسال را می‌خواهد.", action: "بررسی فرایند فروشگاه آنلاین", points: ["محصول و گزینه‌های کاتالوگ طبق قواعد شما نمایش داده می‌شود.", "اندازه، رنگ، موجودی و ارسال جداگانه ثبت می‌شود.", "اطلاعات لازم برای سفارش از قبل مشخص می‌شود.", "پرسش پرداخت یا مرجوعی به مرحله مناسب می‌رود."] },
      auto: { title: "خدمات خودرو و دیتیلینگ", tag: "خدمات خودرو", description: "مالک خودرو به خدمت دقیق، قیمت و زمان آزاد نیاز دارد.", action: "بررسی فرایند خدمات خودرو", points: ["برند، مدل و نوع کار در پرسش‌های اول مشخص می‌شود.", "قیمت و شرایط خدمت از تعرفه شما پیروی می‌کند.", "انتخاب جایگاه و زمان طبق قواعد توافق‌شده انجام می‌شود.", "تشخیص پیچیده به تعمیرکار منتقل می‌شود."] },
      legal: { title: "خدمات حقوقی و حرفه‌ای", tag: "خدمات حقوقی و حرفه‌ای", description: "مشتری ابتدا موضوع را توضیح می‌دهد و سپس سند و مشاوره می‌خواهد.", action: "بررسی فرایند حقوقی", points: ["نوع موضوع و مهلت در پرسش‌های اولیه مشخص می‌شود.", "فهرست سندهای لازم طبق قواعد شما توضیح داده می‌شود.", "سند تا بررسی انسان، تنها یک ماده کاری است.", "موضوع پیچیده یا محرمانه به متخصص منتقل می‌شود."] },
    },
  },
  process: {
    title: "از مسئله کسب‌وکار تا سیستم عملیاتی",
    description: "پیش از شروع می‌دانید چه کاری باید انجام شود، چه چیزی را بررسی می‌کنیم و مسئولیت هر بخش با چه کسی است.",
    steps: [
      { title: "بررسی و طراحی", description: "مسئله، فرایند فعلی، ورودی‌ها و نتیجه موردنیاز کسب‌وکار را مشخص می‌کنیم." },
      { title: "ساخت و یکپارچه‌سازی", description: "سیستم را می‌سازیم، ابزارهای لازم را متصل می‌کنیم و سناریوهای مهم را با تیم شما می‌سنجیم." },
      { title: "راه‌اندازی و بهبود", description: "راهکار طبق قواعد توافق‌شده کار می‌کند؛ تغییرات را کنترل و مسئولیت‌ها را روشن نگه می‌داریم." },
    ],
  },
  architecture: {
    eyebrow: "فناوری تحت کنترل شما",
    title: "سیستم شما، قواعد شما",
    description: "سیستم فقط اطلاعات لازم را دریافت می‌کند. با شما مشخص می‌کنیم چه کسی چه چیزی را ببیند، چه کسی تغییر دهد و انسان چه زمانی وارد شود.",
    action: "بررسی فناوری و امنیت",
    principle: "اصل",
    rule: "● کنترل شما",
    specs: [
      { title: "فقط اطلاعات لازم را وصل می‌کنیم", description: "مشخص می‌کنیم کدام کانال و فایل برای وظیفه لازم است. باقی اطلاعات تحت کنترل شما می‌ماند." },
      { title: "شما تصمیم می‌گیرید سیستم چه بداند", description: "قیمت، شرایط، پرسش‌های رایج و قواعد کاری بر اساس مواد شماست." },
      { title: "هر فرایند منبع خودش را دارد", description: "قیمت، شرایط و دستورهای داخلی را جدا می‌کنیم تا هر فرایند منبع روشن داشته باشد." },
      { title: "تغییرات با کنترل وارد می‌شود", description: "متن، قیمت یا سناریوی جدید را پیش از دیده‌شدن توسط مشتری بررسی می‌کنیم." },
      { title: "دسترسی بر اساس نقش تیم است", description: "مشخص می‌کنیم چه کسی اطلاعات را ببیند، تغییر دهد یا پاسخ را بررسی کند." },
      { title: "می‌دانید بعد چه می‌شود", description: "از قبل ثبت می‌کنیم اطلاعات کجا نگهداری می‌شود، چه کسی دسترسی دارد و اتصال چگونه تغییر یا قطع می‌شود." },
    ],
  },
  team: {
    eyebrow: "رویکرد ما",
    title: "از مشاوره تا سیستم عملیاتی",
    paragraphs: [
      "ما aiNOW هستیم — تیمی از تفلیس که AI را وارد کسب‌وکارها می‌کند.",
      "شرایط پشتیبانی را از قبل مشخص می‌کنیم تا بدانید با چه کسی تماس بگیرید و تیم ما در چه زمینه‌ای کمک می‌کند.",
      "iAI به هماهنگی این محصولات و کار میان آن‌ها کمک می‌کند.",
    ],
    names: { andro: "Andro Kasparov", nika: "Nika Skhirtladze", giorgi: "گیورگی داربایسلی" },
    roles: { founder: "بنیان‌گذار", commercial: "مدیر تجاری", businessDevelopment: "مدیر توسعه کسب‌وکار" },
    location: "تفلیس، گرجستان",
    year: "2026",
  },
  faq: {
    eyebrow: "[پاسخ پرسش‌های شما]",
    title: "پرسش‌های رایج",
    description: "پاسخ‌های کوتاه و مستقیم درباره قیمت، شروع، کنترل و داده‌ها.",
    filters: { all: "همه", pricing: "قیمت و دامنه", tech: "شروع و پشتیبانی", safety: "داده و کنترل" },
    searchLabel: "جست‌وجوی پرسش",
    searchPlaceholder: "پرسش را جست‌وجو کنید...",
    questionPrefix: "پرسش",
    calloutTitle: "هنوز پرسش مشخصی دارید؟",
    calloutAction: "وضعیت خود را به اشتراک بگذارید",
    items: {
      q1: { question: "aiNOW برای کسب‌وکار من چقدر هزینه دارد؟", answer: "قیمت به محصول و دامنه کار بستگی دارد. در پیشنهاد مشخص می‌کنیم چه چیزی در هزینه یک‌باره یا ماهانه هست و چه چیزی ممکن است کار اضافی باشد. مبلغ دقیق پس از شناخت وظیفه اعلام می‌شود." },
      q2: { question: "چه چیزهایی در قیمت هست و چه چیزی جداگانه محاسبه می‌شود؟", answer: "ساخت، اتصال‌های لازم و خدمات بعدی را جدا می‌کنیم. در پیشنهاد از قبل می‌نویسیم چه چیزی شامل است، چه چیزی نیست و چه زمانی کار اضافی لازم می‌شود." },
      q3: { question: "می‌توانم با یک مرحله کوچک شروع کنم؟", answer: "بله. می‌توانیم با یک فرایند مشخص که برای شما مهم‌تر است شروع کنیم و بعد از ارزیابی مرحله اول درباره گام بعد تصمیم بگیریم." },
      q4: { question: "در شروع چقدر زمان و مشارکت لازم دارم؟", answer: "به توضیح فرایند، مواد موجود و فردی برای پاسخ به پرسش‌ها نیاز داریم. کار را مرحله‌ای می‌کنیم و زمان مشارکت شما را از قبل می‌گوییم." },
      q5: { question: "برای هماهنگ‌شدن سیستم با کارم چه آماده کنم؟", answer: "به وظیفه بستگی دارد: قیمت‌ها، توضیح خدمات، قواعد، پرسش‌های رایج، نمونه‌ها و موارد ورود انسان. موارد نامرتب را در مرحله اول با هم شکل می‌دهیم." },
      q6: { question: "اگر قواعد من تغییر کند، چه کسی اطلاعات را به‌روز می‌کند؟", answer: "قاعده تغییر را از قبل مشخص می‌کنیم. شما قیمت، شرط یا سناریوی جدید را می‌فرستید؛ ما بررسی و طبق توافق سیستم را به‌روز می‌کنیم." },
      q7: { question: "چه کسی به داده‌ها و اطلاعات مشتریان من دسترسی دارد؟", answer: "دسترسی بر اساس وظیفه و نقش‌های توافق‌شده تعیین می‌شود. از ابتدا مشخص می‌کنیم چه کانال یا فایلی لازم است و چه کسی می‌تواند آن را ببیند یا تغییر دهد." },
      q8: { question: "داده‌های من نزد شما می‌ماند یا نزد خودم؟", answer: "قواعد نگهداری و دسترسی در توافق‌نامه نوشته می‌شود. می‌بینید چه چیزی برای پروژه، با چه هدفی استفاده می‌شود و پس از پایان همکاری چه اتفاقی می‌افتد." },
      q9: { question: "می‌توانم خودم تعیین کنم AI چه کاری انجام دهد؟", answer: "بله. اقدام‌های مجاز، موضوع‌های ممنوع، ساعت کاری و موارد انتقال پاسخ یا اقدام به انسان را مشخص می‌کنیم." },
      q10: { question: "می‌توانم سیستم را متوقف یا تغییر دهم؟", answer: "روش توقف و تغییر را از قبل تعیین می‌کنیم. می‌دانید چه کسی قاعده را تغییر می‌دهد، به‌روزرسانی چگونه بررسی می‌شود و قابلیت چگونه خاموش می‌شود." },
      q11: { question: "اگر AI پاسخ اشتباهی به مشتری بدهد چه می‌شود؟", answer: "برای موضوع‌های مبهم یا پرریسک، قاعده‌ای می‌گذاریم که سیستم متوقف شود و موضوع را به انسان بسپارد. خطا را ثبت، منبع یا قاعده را اصلاح و دوباره بررسی می‌کنیم." },
      q12: { question: "آیا تیم من گفت‌وگوی دشوار را می‌بیند؟", answer: "شرایط انتقال را از قبل مشخص می‌کنیم؛ مثل شکایت، درخواست غیرعادی یا موضوعی که تصمیم همکار لازم دارد. مسیر با تیم شما هماهنگ می‌شود." },
      q13: { question: "بعد از راه‌اندازی چه کسی سیستم را مدیریت می‌کند؟", answer: "فرمت پشتیبانی را از قبل تعیین می‌کنیم: چه چیزی در خدمت ماست، مسئولیت تیم شما چیست و تغییر یا خطا چگونه ارسال می‌شود." },
      q14: { question: "اگر نتیجه نهایی با فرایند من هماهنگ نباشد چه می‌شود؟", answer: "کار را مرحله‌ای می‌کنیم و معیار هر مرحله را از قبل می‌نویسیم. تفاوت را ثبت، کار را اصلاح یا اعلام می‌کنیم که راهکار دیگری لازم است." },
      q15: { question: "چطور شروع کنم تا زمان و پول هدر نرود؟", answer: "با یک فرایند شروع می‌کنیم: اکنون چه می‌شود، کار کجا کند است و چه موادی داریم. سپس مرحله اول، دامنه و قیمت را نشان می‌دهیم؛ تصمیم با شماست." },
    },
  },
  clientFit: {
    title: "aiNOW برای چه کسب‌وکارهایی است؟",
    description: "برای کسب‌وکارهایی که به ساده‌کردن کارهای روزمره یا ساخت یک سیستم جدید نیاز دارند.",
    ariaLabel: "aiNOW برای چه کسانی است",
    signals: ["تیم شما برای پیام‌ها، تماس‌ها، اسناد یا کارهای تکراری داخلی زمان از دست می‌دهد.", "فرایندی واقعی دارید که به قواعد روشن، اتصال‌ها یا مسئول مشخص نیاز دارد.", "پیش از انتخاب ابزار یا سفارش سیستم، آماده بررسی گردش کار هستید.", "برای طراحی، پیاده‌سازی و پشتیبانی مداوم به یک شریک مسئول نیاز دارید."],
    notForTitle: "aiNOW شاید مناسب نباشد اگر...",
    notForDescription: "بدون بررسی فرایند، فقط نتیجه فوری، پایین‌ترین قیمت یا تضمین می‌خواهید.",
    uncertain: "مطمئن نیستید به AI نیاز دارید؟ با ما تماس بگیرید — این را هم با هم مشخص می‌کنیم.",
  },
  closingCta: {
    title: "با کار مهم شروع کنیم",
    description: "کوتاه بگویید چه کاری انجام می‌دهید و در چه زمینه‌ای به کمک نیاز دارید. انتخاب کنید چگونه با شما تماس بگیریم — از طریق WhatsApp، SMS یا تماس تلفنی.",
    successPrefix: "متشکریم! درخواست شما دریافت شد.",
    checks: ["ابتدا می‌فهمیم به چه چیزی نیاز دارید", "از قبل می‌گوییم چه کاری انجام می‌دهیم و هزینه آن چقدر است", "اگر به AI نیاز نداشته باشید، این را هم می‌گوییم"],
  },
  footer: {
    tagline: "مشاوره. فناوری. سیستم‌های عملیاتی.",
    description: "aiNOW یک شرکت مشاوره و فناوری AI برای ارتباط با مشتری و عملیات داخلی است.",
    action: "بررسی مسئله کسب‌وکار",
    products: "محصولات",
    industries: "صنایع",
    resources: "منابع",
    language: "زبان",
    legal: "حقوق و امنیت",
    blog: "وبلاگ",
    howWeStart: "چطور شروع می‌کنیم",
    faq: "پرسش‌ها و پاسخ‌ها",
    sendTask: "ارسال وظیفه",
    email: "ارسال ایمیل",
    privacy: "حریم خصوصی",
    terms: "شرایط خدمات",
    location: "تفلیس، گرجستان",
    rights: "تمام حقوق محفوظ است.",
    backToTop: "بازگشت به بالا ↑",
    industryLinks: ["کلینیک و زیبایی", "رستوران و HoReCa", "املاک و توسعه", "تجارت الکترونیک و خرده‌فروشی", "خدمات خودرو و دیتیلینگ", "خدمات حقوقی و حرفه‌ای"],
  },
};

const zh: AiNowHomeCopy = {
  productLabels: {
    aichats: "客户沟通",
    aicall: "AI电话",
    aicontent: "AI内容",
    aiweb: "网站与网页产品",
    aistaff: "AI人才招聘",
    iai: "流程协调",
  },
  nav: {
    products: "产品",
    customerCommunication: "客户沟通",
    marketingContent: "营销与内容",
    internalOperations: "内部运营",
    webApps: "网站与应用",
    specializedSolutions: "协调与专业方案",
    operations: "运营AI",
    growth: "增长与营销",
    resources: "资源",
    resourcesBlog: "资源与博客",
    capabilities: "能力",
    architecture: "架构",
    pricing: "价格",
    contact: "联系",
    consultation: "咨询",
    themeLight: "切换到浅色主题",
    themeDark: "切换到深色主题",
    themeToggle: "切换主题",
    menuOpen: "打开菜单",
    menuClose: "关闭菜单",
    productDescriptions: {
      aichats: "客户沟通",
      aicall: "呼入和呼出的AI电话",
      aistaff: "为您的公司招聘AI专家",
      aicontent: "AI视频与广告创意",
      aiads: "Meta 和 Google 广告管理",
      aimusic: "面向品牌的音乐与音频",
      aibrain: "在一处管理公司知识与规则",
      aioffice: "任务、文档和内部流程",
      aidocs: "文档处理与审核",
      aiweb: "网站与网页产品",
      aiapp: "企业移动应用",
      vibecoding: "安全开发应用",
      iai: "流程协调",
      aijurist: "法律研究与文档草案",
      aitaxi: "出租车队运营管理",
    },
    resourceItems: {
      blog: { title: "博客", subtitle: "案例、分析与洞察" },
      architecture: { title: "架构", subtitle: "平台的技术结构" },
      updates: { title: "更新", subtitle: "每周产品更新" },
      industries: { title: "行业", subtitle: "按行业提供工作流" },
    },
  },
  banner: {
    aichats: "管理客户消息",
    aicall: "处理呼入和呼出电话的语音AI助手",
    aicontent: "广告视频与企业内容",
    aiads: "Meta 和 Google 广告管理",
    aistaff: "为您的公司招聘AI专家",
    airadar: "市场与声誉监测",
    aiweb: "企业网站与应用",
    iai: "流程协调",
  },
  hero: {
    titleLine1: "面向企业的AI系统。",
    titleLine2: "消息、电话、内容。",
    description: "aiNOW为客户沟通和内部运营打造并实施AI系统。您可以选择现成产品，也可以按需求委托定制系统。",
    primaryCta: "联系我们",
    catalogCta: "查看现成产品",
    hint: "需要帮助选择？联系我们。",
  },
  ecosystemHub: {
    satellites: {
      chats: { title: "消息", subtitle: "在聊天工具中与客户沟通", alt: "客户沟通" },
      calls: { title: "电话", subtitle: "语音AI助手", alt: "AI电话" },
      content: { title: "内容", subtitle: "照片 · 视频 · 音乐", alt: "内容" },
      apps: { title: "网站与办公", subtitle: "网站 · 文档 · 流程", alt: "网站与办公" },
    },
    centerSubtitle: "控制中心 · OS",
    badge: "一个团队 — 多种解决方案 ⤴",
  },
  comparison: {
    title: "从业务问题开始",
    description: "选择一个您熟悉的场景。",
    action: "讨论业务问题",
    labels: { inspect: "我们检查什么", firstStep: "第一步", ask: "我们会问什么" },
    problems: {
      chats: {
        question: "客户消息经常无人回复吗？",
        description: "问题来自不同渠道，团队需要一次又一次地寻找同一个答案。",
        detailHeading: "客户沟通的瓶颈从这里开始",
        firstStep: "我们选取一段典型对话，找出信息或下一步在哪个环节丢失。",
        solution: "价格、目录或回复规则不在同一处时，每位客服都要重新搜索。",
        builds: ["最多问题来自哪些渠道。", "哪些回复、价格和规则最常被查找。", "对话何时需要团队成员介入。", "下一步必须保留哪些信息。"],
        materials: "哪些问题消耗时间、哪些渠道重要，以及人在何处介入。",
      },
      calls: {
        question: "电话中断、后续跟进也会丢失吗？",
        description: "新请求、确认和后续电话常常都依赖同一个人。",
        detailHeading: "电话问题在通话结束后才显现",
        firstStep: "我们选择一通典型电话，明确通话中要解决什么、之后要留下什么。",
        solution: "通话目的和下一步没有写清楚时，结果会随着通话结束而消失。",
        builds: ["哪些电话是呼入，哪些应由AI发起。", "每通电话应达到什么结果。", "何时将对话交给团队成员。", "通话后需要记录什么。"],
        materials: "通话原因、可能的答复、工作时间和人工介入情况。",
      },
      content: {
        question: "内容制作总是被推迟吗？",
        description: "你有想法，但简报、制作和审批每次都从头开始。",
        detailHeading: "内容瓶颈出现在规划阶段",
        firstStep: "我们选择一个当前主题，确定它的目标、形式和语气。",
        solution: "形式、语气和审批路径没有提前约定时，内容启动就会不断延迟。",
        builds: ["内容面向谁，以及读者需要理解什么。", "哪些形式适合你的产品或服务。", "已有材料是什么，还缺少什么。", "发布前由谁审批材料。"],
        materials: "品牌示例、产品信息、所需形式和审批规则。",
      },
      website: {
        question: "访客来到网站，却找不到下一步吗？",
        description: "访客阅读信息，却没有发起请求、电话或聊天。",
        detailHeading: "网站瓶颈出现在选择时刻",
        firstStep: "我们选择一个主要页面，检查访客最后应该做什么。",
        solution: "主要行动和产品信息没有出现在首屏时，访客就没有清晰的选择。",
        builds: ["访客在第一分钟需要理解什么。", "主要行动是请求、电话还是聊天。", "用户在哪里需要得到回答。", "哪些信息应传给团队。"],
        materials: "服务列表、目标客户的问题和现有联系方式。",
      },
    },
  },
  categories: {
    title: "选择现成产品或定制系统",
    description: "现成产品可以直接购买。如果现成选项不够，也可以委托定制系统。",
    items: {
      communication: { title: "客户沟通系统", subtitle: "用于消息、电话、订单和客户跟进的现成产品。", products: { aichats: "客户回复", aicall: "呼入与呼出电话" } },
      marketing: { title: "增长与营销系统", subtitle: "用于内容、音乐和广告活动的现成产品。", products: { aicontent: "广告视频", aiads: "Meta 和 Google 广告管理", aimusic: "视频音乐" } },
      internal: { title: "内部运营与知识系统", subtitle: "用于AI专家、知识、文档和重复团队工作的产品。", products: { aistaff: "为您的公司招聘AI专家", aibrain: "企业知识库", aioffice: "任务与办公室工作", aidocs: "文档字段处理" } },
      products: { title: "网站与数字产品", subtitle: "现成的网站和应用产品，以及按流程构建的系统。", products: { aiweb: "企业网站", aiapp: "移动应用", vibecoding: "AI应用安全" } },
    },
  },
  industries: {
    eyebrow: "你的行业有自己的规则",
    title: "一个AI方案并不适合所有人",
    description: "不同行业的客户问题、规则、数据和人工介入点都不同，所以同一套AI流程不能直接照搬。",
    items: {
      healthcare: { title: "诊所与美容", tag: "健康与美容", description: "患者在一个流程中选择服务、时间和所需信息。", action: "讨论诊所流程", points: ["问题根据服务、医生和预约条件设置。", "患者提前看到价格、准备事项和地址。", "预约确认只按你定义的规则执行。", "医疗例外情况交给团队成员。"] },
      horeca: { title: "餐厅与HoReCa", tag: "餐饮", description: "客人需要在一次对话中得到菜单、空桌和明确答复。", action: "讨论餐厅场景", points: ["菜单、过敏原和营业时间按你的规则记录。", "预约所需的信息提前确定。", "露台、大厅和团体订单有单独规则。", "特殊要求交给你的团队。"] },
      "real-estate": { title: "房地产与开发", tag: "房地产", description: "买家选择房产、提出财务问题并请求看房。", action: "讨论房地产流程", points: ["房产、价格和可用信息以统一格式记录。", "户型图和视觉材料按请求发送。", "预算、区域和时间成为清晰问题。", "看房请求交给销售团队。"] },
      ecommerce: { title: "电商与零售", tag: "网店", description: "买家同时需要选择、价格和配送条件。", action: "讨论网店流程", points: ["目录中的产品和选项按你的规则展示。", "尺寸、颜色、库存和配送分别记录。", "下单所需信息提前确定。", "付款或退货问题转到正确阶段。"] },
      auto: { title: "汽车服务与美容", tag: "汽车服务", description: "车主需要准确的服务、价格和可用时间。", action: "讨论汽车服务流程", points: ["品牌、型号和工作类型在前几个问题中确定。", "价格和服务条件按你的价目表执行。", "工位和时间按约定规则选择。", "复杂诊断交给技师。"] },
      legal: { title: "法律与专业服务", tag: "法律与专业服务", description: "客户先说明事情，再请求文件和咨询。", action: "讨论法律流程", points: ["事项类型和期限在初步问题中确定。", "所需文件清单按你的规则解释。", "文件在人工检查前只是工作材料。", "复杂或机密事项交给专家。"] },
    },
  },
  process: {
    title: "从业务问题到工作系统",
    description: "开始前，您会知道要做什么、检查什么，以及每部分由谁负责。",
    steps: [
      { title: "研究并设计", description: "明确问题、当前流程、输入信息以及企业需要的结果。" },
      { title: "构建并集成", description: "创建系统，连接相关工具，并和团队一起测试重要场景。" },
      { title: "运营并改进", description: "解决方案按约定规则运行；我们控制变化、更新系统并明确责任。" },
    ],
  },
  architecture: {
    eyebrow: "受控的技术",
    title: "你的系统，你的规则",
    description: "系统只接收必要的信息。我们会与您确认谁可以查看、谁可以修改，以及何时由人员介入。",
    action: "讨论技术与安全",
    principle: "原则",
    rule: "● 你的控制",
    specs: [
      { title: "只连接必要来源", description: "选择任务需要的渠道、文件和工具，其余内容不接入系统。" },
      { title: "你管理系统的知识", description: "价格、条件、常见问题和工作规则来自你批准的来源。" },
      { title: "设计遵循真实流程", description: "系统架构反映实际工作方式，包括交给人工处理的环节。" },
      { title: "使用前检查变更", description: "新文本、价格和场景在到达客户或团队前都会检查。" },
      { title: "访问权限按角色分配", description: "按约定团队角色区分查看、修改和复核权限。" },
      { title: "运营方式从一开始就清楚", description: "记录信息在哪里、谁负责，以及连接如何修改或停止。" },
    ],
  },
  team: {
    eyebrow: "我们的方法",
    title: "从咨询到工作系统",
    paragraphs: [
      "我们是aiNOW——来自第比利斯、把AI带入企业的团队。",
      "我们会提前约定支持方式，让您知道该联系谁，以及我们的团队能在哪些方面提供帮助。",
      "iAI帮助协调这些产品以及它们之间的工作。",
    ],
    names: { andro: "Andro Kasparov", nika: "Nika Skhirtladze", giorgi: "Giorgi Darbaiseli" },
    roles: { founder: "创始人", commercial: "商务总监", businessDevelopment: "业务发展总监" },
    location: "格鲁吉亚第比利斯",
    year: "2026",
  },
  faq: {
    eyebrow: "[回答你的问题]",
    title: "常见问题",
    description: "关于价格、开始、控制和数据的简短直接回答。",
    filters: { all: "全部", pricing: "价格与范围", tech: "开始与支持", safety: "数据与控制" },
    searchLabel: "搜索问题",
    searchPlaceholder: "搜索问题...",
    questionPrefix: "问题",
    calloutTitle: "还有具体问题？",
    calloutAction: "分享你的情况",
    items: {
      q1: { question: "aiNOW对我的企业要多少钱？", answer: "价格取决于产品和工作范围。报价会分别列出一次性或月度费用包含什么，以及哪些内容可能属于额外工作。了解任务后，我们会给出准确金额。" },
      q2: { question: "价格包含什么，哪些可能需要单独支付？", answer: "我们会分开列出创建、必要连接和后续服务。报价提前说明包含什么、不包含什么，以及何时可能需要额外工作。" },
      q3: { question: "可以从一个小阶段开始吗？", answer: "可以。我们可以先做一个对你最重要的具体流程。共同评估第一阶段及其价值后，再决定下一步。" },
      q4: { question: "开始时需要我投入多少时间？", answer: "我们需要你解释流程、提供现有材料，并由一位成员澄清问题。工作会分阶段进行，并提前告知何时需要你的参与。" },
      q5: { question: "要让系统适合我的工作，需要准备什么？", answer: "取决于任务：价格、服务说明、规则、常见问题、示例以及需要人工介入的情况。尚未整理的内容可以在第一阶段共同建立。" },
      q6: { question: "我的规则变化时，谁更新信息？", answer: "我们提前约定变更规则。你提供新的价格、条件或场景；我们检查变化，并按约定更新系统。" },
      q7: { question: "谁能访问我的数据和客户信息？", answer: "访问权限由具体任务和约定角色决定。从一开始就确定需要哪个渠道或文件，以及谁可以查看或修改。" },
      q8: { question: "我的数据会留在你们那里还是我这里？", answer: "数据保存和访问规则会提前写入协议。你能看到项目使用了什么、用于什么目的，以及合作结束后会发生什么。" },
      q9: { question: "我可以决定AI做什么、不做什么吗？", answer: "可以。我们会确定允许的操作、限制主题、工作时间，以及必须将回答或操作交给人工的情况。" },
      q10: { question: "我可以暂停或修改系统吗？", answer: "我们提前定义暂停和修改流程。你会知道谁修改规则、如何检查更新，以及如何关闭某项功能。" },
      q11: { question: "如果AI给客户错误答复怎么办？", answer: "遇到不确定或有风险的主题，系统会停止回答并转给人工。我们记录问题、修正来源或规则，再次检查。" },
      q12: { question: "我的团队能看到复杂对话吗？", answer: "我们提前定义转交条件，例如投诉、特殊请求或需要员工决策的事项，并和你的团队约定路径。" },
      q13: { question: "上线后谁负责系统？", answer: "我们提前约定支持方式：服务包含什么、你的团队负责什么，以及如何提交变化或问题。" },
      q14: { question: "如果最终结果不适合我的流程怎么办？", answer: "我们分阶段工作并提前写下每一阶段的标准。如果不符合约定，就记录差异、修改工作，或说明需要另一种解决方案。" },
      q15: { question: "怎样开始才不会浪费时间和钱？", answer: "从一个具体流程开始：现在如何运作、哪里变慢、有哪些材料。然后展示第一阶段、范围和价格，由你决定。" },
    },
  },
  clientFit: {
    title: "aiNOW适合谁",
    description: "适合需要简化日常工作或创建新系统的企业。",
    ariaLabel: "aiNOW适合谁",
    signals: ["团队在客户消息、电话、文档或重复内部工作上浪费时间。", "你有一个需要清晰规则、连接或负责人的真实流程。", "你愿意在选择工具或委托系统前先研究工作流程。", "你需要负责设计、实施和持续运营的合作伙伴。"],
    notForTitle: "以下情况可能不适合...",
    notForDescription: "你想要一次性结果、最低价格或未经流程研究的保证。",
    uncertain: "不确定自己是否需要AI？联系我们——我们一起厘清。",
  },
  closingCta: {
    title: "从重要的工作开始",
    description: "请简要介绍您在做什么，以及需要哪方面的帮助。请选择我们联系您的方式——WhatsApp、短信或电话。",
    successPrefix: "谢谢！我们已收到你的请求。",
    checks: ["我们先了解您的需求", "提前说明我们会做什么以及费用", "如果您不需要AI，我们也会直接说明"],
  },
  footer: {
    tagline: "咨询。技术。工作系统。",
    description: "aiNOW是一家服务于客户沟通和内部运营的AI咨询与技术公司。",
    action: "讨论业务问题",
    products: "产品",
    industries: "行业",
    resources: "资源",
    language: "语言",
    legal: "法律与安全",
    blog: "博客",
    howWeStart: "我们如何开始",
    faq: "问题与回答",
    sendTask: "发送任务",
    email: "发送邮件",
    privacy: "隐私",
    terms: "服务条款",
    location: "格鲁吉亚第比利斯",
    rights: "保留所有权利。",
    backToTop: "返回顶部 ↑",
    industryLinks: ["诊所与美容", "餐厅与HoReCa", "房地产与开发", "电商与零售", "汽车服务与美容", "法律与专业服务"],
  },
};

export const AI_NOW_HOME_COPY: Record<AiNowHomeLocale, AiNowHomeCopy> = { ka, en, ru, de, tr, fa, zh };

export function getAiNowHomeCopy(locale: string): AiNowHomeCopy {
  const contentLocale = locale === "ka" || locale === "ru" ? locale : "en";
  return mergeProductCopy(AI_NOW_HOME_COPY[contentLocale], VIBECODING_COPY_OVERRIDES[contentLocale]);
}

function mergeProductCopy(base: AiNowHomeCopy, override: Record<string, unknown>): AiNowHomeCopy {
  const copy = JSON.parse(JSON.stringify(base)) as Record<string, unknown>;
  const merge = (target: Record<string, unknown>, patch: Record<string, unknown>): void => {
    for (const [key, value] of Object.entries(patch)) {
      if (value && typeof value === "object" && !Array.isArray(value)) {
        if (!target[key] || typeof target[key] !== "object" || Array.isArray(target[key])) target[key] = {};
        merge(target[key] as Record<string, unknown>, value as Record<string, unknown>);
      } else target[key] = value;
    }
  };
  merge(copy, override);
  return copy as unknown as AiNowHomeCopy;
}
