export type QualifiedContactLocale = "ka" | "en" | "ru" | "de" | "tr" | "fa" | "zh";

export interface QualifiedContactCopy {
  subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  nameRequired: string;
  nameError: string;
  taskRequired: string;
  taskMinError: string;
  phoneRequired: string;
  phoneInvalid: string;
  channelRequired: string;
  confirmation: string;
  confirmationError: string;
}

const QUALIFIED_CONTACT_COPY: Record<QualifiedContactLocale, QualifiedContactCopy> = {
  ka: {
    subtitle: "მიუთითეთ სახელი, აღწერეთ ამოცანა და აირჩიეთ პასუხის სასურველი გზა.",
    nameLabel: "სახელი",
    namePlaceholder: "მაგ. ნინო",
    nameRequired: "მიუთითეთ სახელი.",
    nameError: "მიუთითეთ თქვენი სახელი.",
    taskRequired: "მიუთითეთ, რაში გჭირდებათ დახმარება.",
    taskMinError: "მოკლედ მოგვიყევით, რაში გჭირდებათ დახმარება.",
    phoneRequired: "მიუთითეთ ტელეფონის ნომერი.",
    phoneInvalid: "მიუთითეთ მოქმედი ტელეფონის ნომერი.",
    channelRequired: "აირჩიეთ სასურველი საკონტაქტო გზა.",
    confirmation: "ნომერი სწორია და შეგიძლიათ ამ საკითხზე დამიკავშირდეთ.",
    confirmationError: "დაადასტურეთ ნომერი და დაკავშირების სურვილი.",
  },
  en: {
    subtitle: "Tell us your name, describe the task, and choose how you would like us to reach you.",
    nameLabel: "Name",
    namePlaceholder: "e.g. Nina",
    nameRequired: "Enter your name.",
    nameError: "Please enter your name.",
    taskRequired: "Tell us what you need help with.",
    taskMinError: "Tell us a little more about what you need help with.",
    phoneRequired: "Enter a phone number.",
    phoneInvalid: "Enter a valid phone number.",
    channelRequired: "Choose how you would like us to contact you.",
    confirmation: "This number is correct. You may contact me there about this request.",
    confirmationError: "Confirm that we may contact you at this number about this request.",
  },
  ru: {
    subtitle: "Укажите имя, опишите задачу и выберите удобный способ связи.",
    nameLabel: "Имя",
    namePlaceholder: "например, Нино",
    nameRequired: "Укажите имя.",
    nameError: "Укажите ваше имя.",
    taskRequired: "Напишите, с чем вам нужна помощь.",
    taskMinError: "Расскажите чуть подробнее, с чем вам нужна помощь.",
    phoneRequired: "Укажите номер телефона.",
    phoneInvalid: "Укажите действующий номер телефона.",
    channelRequired: "Выберите удобный способ связи.",
    confirmation: "Номер указан верно. Со мной можно связаться по нему по поводу этой заявки.",
    confirmationError: "Подтвердите, что по этому номеру с вами можно связаться по поводу этого запроса.",
  },
  de: {
    subtitle: "Nennen Sie Ihren Namen, beschreiben Sie die Aufgabe und wählen Sie den gewünschten Kontaktweg.",
    nameLabel: "Name",
    namePlaceholder: "z. B. Nina",
    nameRequired: "Geben Sie Ihren Namen an.",
    nameError: "Der Name muss mindestens zwei Zeichen enthalten.",
    taskRequired: "Sagen Sie uns, wobei Sie Hilfe brauchen.",
    taskMinError: "Beschreiben Sie die Aufgabe mit mindestens acht Zeichen.",
    phoneRequired: "Geben Sie eine Telefonnummer an.",
    phoneInvalid: "Geben Sie eine gültige Telefonnummer an.",
    channelRequired: "Wählen Sie den gewünschten Kontaktweg.",
    confirmation: "Diese Nummer ist korrekt. Sie dürfen mich zu dieser Anfrage unter dieser Nummer kontaktieren.",
    confirmationError: "Bestätigen Sie, dass wir Sie unter dieser Nummer zu dieser Anfrage kontaktieren dürfen.",
  },
  tr: {
    subtitle: "Adınızı yazın, görevi açıklayın ve size nasıl ulaşmamızı istediğinizi seçin.",
    nameLabel: "Ad",
    namePlaceholder: "ör. Nina",
    nameRequired: "Adınızı yazın.",
    nameError: "Ad en az iki karakter içermelidir.",
    taskRequired: "Hangi konuda yardıma ihtiyacınız olduğunu yazın.",
    taskMinError: "Görevi en az sekiz karakterle açıklayın.",
    phoneRequired: "Telefon numarası yazın.",
    phoneInvalid: "Geçerli bir telefon numarası yazın.",
    channelRequired: "Size nasıl ulaşmamızı istediğinizi seçin.",
    confirmation: "Bu numara doğru. Bu talep hakkında benimle bu numaradan iletişime geçebilirsiniz.",
    confirmationError: "Bu talep hakkında bu numaradan size ulaşabileceğimizi onaylayın.",
  },
  fa: {
    subtitle: "نامتان را بنویسید، وظیفه را توضیح دهید و روش تماس دلخواهتان را انتخاب کنید.",
    nameLabel: "نام",
    namePlaceholder: "مثلاً نینو",
    nameRequired: "نامتان را وارد کنید.",
    nameError: "نام باید دست‌کم دو نویسه داشته باشد.",
    taskRequired: "بگویید در چه زمینه‌ای به کمک نیاز دارید.",
    taskMinError: "وظیفه را با دست‌کم هشت نویسه توضیح دهید.",
    phoneRequired: "شماره تلفن را وارد کنید.",
    phoneInvalid: "یک شماره تلفن معتبر وارد کنید.",
    channelRequired: "روش تماس دلخواهتان را انتخاب کنید.",
    confirmation: "تأیید می‌کنم که این شماره درست است و می‌توانید درباره این درخواست با من از طریق آن تماس بگیرید.",
    confirmationError: "تأیید کنید که درباره این درخواست می‌توان با شما از این شماره تماس گرفت.",
  },
  zh: {
    subtitle: "请填写姓名、描述任务，并选择您希望的联系方式。",
    nameLabel: "姓名",
    namePlaceholder: "例如：Nina",
    nameRequired: "请填写姓名。",
    nameError: "姓名至少需要两个字符。",
    taskRequired: "请告诉我们您需要什么帮助。",
    taskMinError: "请至少用八个字符描述任务。",
    phoneRequired: "请填写电话号码。",
    phoneInvalid: "请输入有效的电话号码。",
    channelRequired: "请选择您希望的联系方式。",
    confirmation: "我确认该号码正确，并同意就此请求通过该号码联系我。",
    confirmationError: "请确认我们可以通过该号码就此请求联系您。",
  },
};

export function getQualifiedContactCopy(locale: string): QualifiedContactCopy {
  return QUALIFIED_CONTACT_COPY[locale as QualifiedContactLocale] ?? QUALIFIED_CONTACT_COPY.en;
}
