export type ContactPreference = "whatsapp" | "sms" | "call";

export interface ContactPreferenceCopy {
  value: ContactPreference;
  label: string;
  phoneLabel: string;
  hint: string;
  success: string;
  validationAction: string;
}

export interface ClosingFormCopy {
  companyLabel: string;
  companyPlaceholder: string;
  phonePlaceholder: string;
  contactPreferenceLabel: string;
  contactPreferences: readonly ContactPreferenceCopy[];
  productLabel: string;
  productPlaceholder: string;
  selectedPlanLabel: string;
  removePlan: string;
  taskLabel: string;
  taskPlaceholder: string;
  companyError: string;
  phoneErrorPrefix: string;
  taskError: string;
  taskTooLongError: string;
  briefTitle: string;
  briefBody: string;
  submit: string;
  submitting: string;
  email: string;
  submitError: string;
}

const CONTACT_PREFERENCES: Record<"ka" | "en" | "ru" | "de" | "tr" | "fa" | "zh", readonly ContactPreferenceCopy[]> = {
  ka: [
    { value: "whatsapp", label: "WhatsApp-ზე მომწერეთ", phoneLabel: "WhatsApp-ის ნომერი", hint: "WhatsApp-ზე მოგწერთ — ცალკე არ დაგირეკავთ.", success: "WhatsApp-ზე მოგწერთ.", validationAction: "WhatsApp-ზე მოგწეროთ" },
    { value: "sms", label: "SMS-ით მომწერეთ", phoneLabel: "ნომერი SMS-ისთვის", hint: "SMS-ით მოგწერთ — ცალკე არ დაგირეკავთ.", success: "SMS-ით მოგწერთ.", validationAction: "SMS-ით მოგწეროთ" },
    { value: "call", label: "ზარი მირჩევნია", phoneLabel: "ნომერი ზარისთვის", hint: "მითითებულ ნომერზე დაგირეკავთ.", success: "მითითებულ ნომერზე დაგირეკავთ.", validationAction: "დაგირეკოთ" },
  ],
  en: [
    { value: "whatsapp", label: "Message me on WhatsApp", phoneLabel: "WhatsApp number", hint: "We will write to you on WhatsApp, not call you separately.", success: "We will write to you on WhatsApp.", validationAction: "message you on WhatsApp" },
    { value: "sms", label: "Message me by SMS", phoneLabel: "Number for SMS", hint: "We will send an SMS and will not call you separately.", success: "We will send you an SMS.", validationAction: "send you an SMS" },
    { value: "call", label: "A call works best", phoneLabel: "Number for a call", hint: "We will call the number you provide.", success: "We will call the number you provide.", validationAction: "call you" },
  ],
  ru: [
    { value: "whatsapp", label: "Напишите мне в WhatsApp", phoneLabel: "Номер WhatsApp", hint: "Напишем в WhatsApp, без отдельного звонка.", success: "Напишем вам в WhatsApp.", validationAction: "написать вам в WhatsApp" },
    { value: "sms", label: "Напишите мне по SMS", phoneLabel: "Номер для SMS", hint: "Отправим SMS, без отдельного звонка.", success: "Отправим вам SMS.", validationAction: "отправить вам SMS" },
    { value: "call", label: "Удобнее звонок", phoneLabel: "Номер для звонка", hint: "Позвоним на указанный номер.", success: "Позвоним на указанный номер.", validationAction: "позвонить вам" },
  ],
  de: [
    { value: "whatsapp", label: "Schreiben Sie mir auf WhatsApp", phoneLabel: "WhatsApp-Nummer", hint: "Wir schreiben Ihnen auf WhatsApp und rufen nicht extra an.", success: "Wir schreiben Ihnen auf WhatsApp.", validationAction: "Ihnen auf WhatsApp zu schreiben" },
    { value: "sms", label: "Schreiben Sie mir per SMS", phoneLabel: "Nummer für SMS", hint: "Wir senden eine SMS und rufen nicht extra an.", success: "Wir senden Ihnen eine SMS.", validationAction: "Ihnen eine SMS zu senden" },
    { value: "call", label: "Ein Anruf ist passend", phoneLabel: "Nummer für den Anruf", hint: "Wir rufen die angegebene Nummer an.", success: "Wir rufen die angegebene Nummer an.", validationAction: "Sie anzurufen" },
  ],
  tr: [
    { value: "whatsapp", label: "WhatsApp'tan yazın", phoneLabel: "WhatsApp numarası", hint: "WhatsApp'tan yazarız; ayrıca aramayız.", success: "WhatsApp'tan yazacağız.", validationAction: "WhatsApp'tan yazmak" },
    { value: "sms", label: "SMS gönderin", phoneLabel: "SMS için numara", hint: "SMS göndeririz; ayrıca aramayız.", success: "Size SMS göndereceğiz.", validationAction: "SMS göndermek" },
    { value: "call", label: "Arama uygun", phoneLabel: "Arama için numara", hint: "Verdiğiniz numarayı ararız.", success: "Verdiğiniz numarayı arayacağız.", validationAction: "sizi aramak" },
  ],
  fa: [
    { value: "whatsapp", label: "در واتساپ پیام دهید", phoneLabel: "شماره واتساپ", hint: "در واتساپ پیام می‌دهیم و جداگانه تماس نمی‌گیریم.", success: "در واتساپ به شما پیام می‌دهیم.", validationAction: "در واتساپ به شما پیام بدهیم" },
    { value: "sms", label: "پیامک ارسال کنید", phoneLabel: "شماره برای پیامک", hint: "پیامک می‌فرستیم و جداگانه تماس نمی‌گیریم.", success: "برای شما پیامک می‌فرستیم.", validationAction: "برای شما پیامک بفرستیم" },
    { value: "call", label: "تماس تلفنی مناسب است", phoneLabel: "شماره برای تماس", hint: "با شماره‌ای که می‌دهید تماس می‌گیریم.", success: "با شماره‌ای که می‌دهید تماس می‌گیریم.", validationAction: "با شما تماس بگیریم" },
  ],
  zh: [
    { value: "whatsapp", label: "通过 WhatsApp 联系我", phoneLabel: "WhatsApp 号码", hint: "我们会通过 WhatsApp 联系您，不会另行打电话。", success: "我们会通过 WhatsApp 联系您。", validationAction: "通过 WhatsApp 联系您" },
    { value: "sms", label: "通过短信联系我", phoneLabel: "短信号码", hint: "我们会发送短信，不会另行打电话。", success: "我们会给您发送短信。", validationAction: "给您发送短信" },
    { value: "call", label: "电话联系方便", phoneLabel: "联系电话", hint: "我们会拨打您留下的号码。", success: "我们会拨打您留下的号码。", validationAction: "给您打电话" },
  ],
};

export const CLOSING_FORM_COPY: Record<keyof typeof CONTACT_PREFERENCES, ClosingFormCopy> = {
  ka: {
    companyLabel: "ბიზნესი ან სფერო",
    companyPlaceholder: "მაგ. სასტუმრო",
    phonePlaceholder: "მაგ. 555 12 34 56",
    contactPreferenceLabel: "როგორ გირჩევნიათ, დაგიკავშირდეთ?",
    contactPreferences: CONTACT_PREFERENCES.ka,
    productLabel: "რომელი მიმართულება გაინტერესებთ?",
    productPlaceholder: "ჯერ არ ვიცი — დახმარება მჭირდება",
    selectedPlanLabel: "შერჩეული პაკეტი",
    removePlan: "მოხსნა",
    taskLabel: "რაში გჭირდებათ დახმარება?",
    taskPlaceholder: "მაგ. გამოშვებამდე გვინდა AI-ით შექმნილი აპის საჯარო URL-ის შემოწმება.",
    companyError: "მოგვწერეთ ბიზნესის სახელი ან სფერო.",
    phoneErrorPrefix: "მიუთითეთ მოქმედი ნომერი, რომ",
    taskError: "მოკლედ მოგვიყევით, რაში გჭირდებათ დახმარება.",
    taskTooLongError: "ცოტა მოკლედ დაწერეთ, გთხოვთ.",
    briefTitle: "ჩატში მოყოლილი უკვე დავამატეთ",
    briefBody: "დატოვეთ ნომერი — სპეციალისტს ამ ინფორმაციასაც გადავცემთ.",
    submit: "მოგვწერეთ",
    submitting: "იგზავნება...",
    email: "მოგვწერეთ ელფოსტით",
    submitError: "მოთხოვნა ვერ გაიგზავნა. გადაამოწმეთ ინტერნეტი და სცადეთ ხელახლა.",
  },
  en: {
    companyLabel: "Business or industry",
    companyPlaceholder: "e.g. hotel",
    phonePlaceholder: "e.g. 555 12 34 56",
    contactPreferenceLabel: "How would you prefer us to contact you?",
    contactPreferences: CONTACT_PREFERENCES.en,
    productLabel: "Which area are you interested in?",
    productPlaceholder: "Not sure yet — I'll describe the task",
    selectedPlanLabel: "Selected plan",
    removePlan: "Remove",
    taskLabel: "One specific task",
    taskPlaceholder: "e.g. We need a scoped review of an AI-built app's public URL before release.",
    companyError: "Tell us the business name or industry.",
    phoneErrorPrefix: "Enter a valid number so we can",
    taskError: "Briefly describe one specific task.",
    taskTooLongError: "Please shorten the task description.",
    briefTitle: "Your AI brief was added to the request",
    briefBody: "Leave your number and a specialist will receive this context.",
    submit: "Send the task",
    submitting: "Sending...",
    email: "Email us",
    submitError: "The request could not be sent. Check your connection and try again.",
  },
  ru: {
    companyLabel: "Бизнес или сфера",
    companyPlaceholder: "например, отель",
    phonePlaceholder: "например, 555 12 34 56",
    contactPreferenceLabel: "Как вам удобнее получить ответ?",
    contactPreferences: CONTACT_PREFERENCES.ru,
    productLabel: "Какое направление вас интересует?",
    productPlaceholder: "Пока не знаю — опишу задачу",
    selectedPlanLabel: "Выбранный пакет",
    removePlan: "Убрать",
    taskLabel: "Одна конкретная задача",
    taskPlaceholder: "например, нам нужна проверка публичного URL приложения, созданного с помощью AI, до релиза.",
    companyError: "Укажите название бизнеса или сферу.",
    phoneErrorPrefix: "Укажите действующий номер, чтобы мы могли",
    taskError: "Коротко опишите одну конкретную задачу.",
    taskTooLongError: "Сократите описание задачи.",
    briefTitle: "Ваш AI-бриф добавлен к заявке",
    briefBody: "Оставьте номер — специалист получит этот контекст.",
    submit: "Отправить задачу",
    submitting: "Отправка...",
    email: "Написать по email",
    submitError: "Не удалось отправить заявку. Проверьте интернет и попробуйте ещё раз.",
  },
  de: {
    companyLabel: "Unternehmen oder Branche",
    companyPlaceholder: "z. B. Hotel",
    phonePlaceholder: "z. B. 555 12 34 56",
    contactPreferenceLabel: "Wie dürfen wir Sie am besten kontaktieren?",
    contactPreferences: CONTACT_PREFERENCES.de,
    productLabel: "Welche Richtung interessiert Sie?",
    productPlaceholder: "Noch nicht sicher — ich beschreibe die Aufgabe",
    selectedPlanLabel: "Ausgewähltes Paket",
    removePlan: "Entfernen",
    taskLabel: "Eine konkrete Aufgabe",
    taskPlaceholder: "e.g. We need a scoped review of an AI-built app's public URL before release.",
    companyError: "Geben Sie den Namen des Unternehmens oder die Branche an.",
    phoneErrorPrefix: "Geben Sie eine gültige Nummer an, damit wir",
    taskError: "Beschreiben Sie kurz eine konkrete Aufgabe.",
    taskTooLongError: "Kürzen Sie bitte die Aufgabenbeschreibung.",
    briefTitle: "Ihr AI-Brief wurde der Anfrage hinzugefügt",
    briefBody: "Hinterlassen Sie Ihre Nummer, damit ein Spezialist den Kontext erhält.",
    submit: "Aufgabe senden",
    submitting: "Wird gesendet...",
    email: "Per E-Mail schreiben",
    submitError: "Die Anfrage konnte nicht gesendet werden. Prüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
  },
  tr: {
    companyLabel: "İşletme veya sektör",
    companyPlaceholder: "ör. otel",
    phonePlaceholder: "ör. 555 12 34 56",
    contactPreferenceLabel: "Size nasıl ulaşmamızı tercih edersiniz?",
    contactPreferences: CONTACT_PREFERENCES.tr,
    productLabel: "Hangi alan ilginizi çekiyor?",
    productPlaceholder: "Henüz bilmiyorum — görevi anlatacağım",
    selectedPlanLabel: "Seçilen paket",
    removePlan: "Kaldır",
    taskLabel: "Tek bir görev",
    taskPlaceholder: "e.g. We need a scoped review of an AI-built app's public URL before release.",
    companyError: "İşletme adını veya sektörü yazın.",
    phoneErrorPrefix: "Size ulaşabilmemiz için geçerli bir numara yazın:",
    taskError: "Tek bir görevi kısaca açıklayın.",
    taskTooLongError: "Görev açıklamasını kısaltın.",
    briefTitle: "AI brifiniz talebe eklendi",
    briefBody: "Numaranızı bırakın; uzman bu bağlamı alacaktır.",
    submit: "Görevi gönder",
    submitting: "Gönderiliyor...",
    email: "E-posta yazın",
    submitError: "Talep gönderilemedi. İnternet bağlantınızı kontrol edip tekrar deneyin.",
  },
  fa: {
    companyLabel: "کسب‌وکار یا حوزه فعالیت",
    companyPlaceholder: "مثلاً هتل",
    phonePlaceholder: "مثلاً 555 12 34 56",
    contactPreferenceLabel: "ترجیح می‌دهید چگونه با شما تماس بگیریم؟",
    contactPreferences: CONTACT_PREFERENCES.fa,
    productLabel: "به کدام حوزه علاقه‌مندید؟",
    productPlaceholder: "هنوز مطمئن نیستم — وظیفه را توضیح می‌دهم",
    selectedPlanLabel: "بسته انتخاب‌شده",
    removePlan: "حذف",
    taskLabel: "یک وظیفه مشخص",
    taskPlaceholder: "e.g. We need a scoped review of an AI-built app's public URL before release.",
    companyError: "نام کسب‌وکار یا حوزه فعالیت را بنویسید.",
    phoneErrorPrefix: "یک شماره معتبر وارد کنید تا بتوانیم",
    taskError: "یک وظیفه مشخص را کوتاه توضیح دهید.",
    taskTooLongError: "توضیح وظیفه را کوتاه‌تر کنید.",
    briefTitle: "بریف هوش مصنوعی شما به درخواست اضافه شد",
    briefBody: "شماره خود را بگذارید تا متخصص این زمینه را دریافت کند.",
    submit: "ارسال وظیفه",
    submitting: "در حال ارسال...",
    email: "ارسال ایمیل",
    submitError: "درخواست ارسال نشد. اتصال اینترنت را بررسی و دوباره امتحان کنید.",
  },
  zh: {
    companyLabel: "企业或行业",
    companyPlaceholder: "例如：酒店",
    phonePlaceholder: "例如：555 12 34 56",
    contactPreferenceLabel: "您希望我们如何联系您？",
    contactPreferences: CONTACT_PREFERENCES.zh,
    productLabel: "您对哪个方向感兴趣？",
    productPlaceholder: "还不确定——我会描述任务",
    selectedPlanLabel: "已选方案",
    removePlan: "移除",
    taskLabel: "一个具体任务",
    taskPlaceholder: "e.g. We need a scoped review of an AI-built app's public URL before release.",
    companyError: "请填写企业名称或行业。",
    phoneErrorPrefix: "请输入有效号码，以便我们",
    taskError: "请简要描述一个具体任务。",
    taskTooLongError: "请缩短任务描述。",
    briefTitle: "您的 AI 简报已添加到请求中",
    briefBody: "留下号码，专家会收到这些背景信息。",
    submit: "发送任务",
    submitting: "正在发送...",
    email: "通过电子邮件联系",
    submitError: "请求发送失败。请检查网络后重试。",
  },
};

export function getClosingFormCopy(locale: string): ClosingFormCopy {
  return CLOSING_FORM_COPY[locale as keyof typeof CLOSING_FORM_COPY] ?? CLOSING_FORM_COPY.en;
}
