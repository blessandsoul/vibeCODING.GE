interface SendTelegramNotificationParams {
  phone?: string;
  name?: string;
  email?: string;
  message?: string;
}

export async function sendTelegramNotification(
  params: SendTelegramNotificationParams,
) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error("Telegram bot token or chat ID not configured");
  }

  const lines = [`📞 *ახალი პროექტის მოთხოვნა*`, ``];
  if (params.name) lines.push(`👤 სახელი: ${params.name}`);
  if (params.phone) lines.push(`📞 ტელეფონი: \`${params.phone}\``);
  if (params.email) lines.push(`📧 ელფოსტა: ${params.email}`);
  if (params.message) lines.push(``, `💬 ${params.message}`);
  lines.push(``, `_ainow.ge · კონტაქტის ფორმა_`);
  const text = lines.join("\n");

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      `Telegram API error: ${error.description || "Unknown error"}`,
    );
  }

  return response.json();
}

interface SendInvoiceReminderNotificationParams {
  number: string;
  client: string;
  due: string;
  grand: number;
  currency: string;
  daysLeft: number;
}

export async function sendInvoiceReminderNotification(
  params: SendInvoiceReminderNotificationParams,
) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error("Telegram bot token or chat ID not configured");
  }

  let statusLine: string;
  if (params.daysLeft > 0) {
    statusLine = `⏳ due in ${params.daysLeft} day(s)`;
  } else if (params.daysLeft === 0) {
    statusLine = `⚠️ due TODAY`;
  } else {
    statusLine = `🔴 OVERDUE by ${-params.daysLeft} day(s)`;
  }

  const lines = [
    `💰 *Invoice reminder*`,
    `№ ${params.number} · ${params.client}`,
    `Due: ${params.due} · ${params.grand} ${params.currency}`,
    statusLine,
    ``,
    `_ainow.ge invoice watcher_`,
  ];

  const text = lines.join("\n");
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      `Telegram API error: ${error.description || "Unknown error"}`,
    );
  }

  return response.json();
}

interface SendLeadNotificationParams {
  phone: string;
  name?: string;
  projectType?: string;
  budgetRange?: string;
  message?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  source?: string;
}

export async function sendLeadNotification(
  params: SendLeadNotificationParams,
) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error("Telegram bot token or chat ID not configured");
  }

  const lines = [
    `📞 *ახალი ლიდი*`,
    ``,
    `ტელეფონი: \`${params.phone}\``,
  ];

  if (params.name) {
    lines.push(`სახელი: ${params.name}`);
  }

  if (params.message) {
    lines.push(`💬 ${params.message}`);
  }

  if (params.source) {
    lines.push(``, `🔗 source: ${params.source}`);
  }

  if (params.utmSource || params.utmCampaign || params.utmContent) {
    lines.push(
      `📊 UTM: ${params.utmSource || "·"} · ${params.utmCampaign || "·"} · zone: ${params.utmContent || "·"}`,
    );
  }

  lines.push(``, `_ainow.ge/start_`);

  const text = lines.join("\n");
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      `Telegram API error: ${error.description || "Unknown error"}`,
    );
  }

  return response.json();
}

interface SendQuestionnaireNotificationParams {
  questionnaireId: string;
  questionnaireTitle: string;
  respondentName: string;
  respondentEmail: string;
  respondentPhone: string;
  answers: Record<string, string>;
  sections: Array<{ id: string; title: string; questions: Array<{ id: string; label: string }> }>;
  timestamp: string;
  ip: string;
}

export async function sendQuestionnaireNotification(
  params: SendQuestionnaireNotificationParams,
) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error("Telegram bot token or chat ID not configured");
  }

  const date = new Date(params.timestamp);
  const formattedDate = date.toLocaleString("ka-GE", {
    timeZone: "Asia/Tbilisi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const header = [
    `📝 *ახალი კითხვარი შევსდა*`,
    ``,
    `📄 კითხვარი: *${params.questionnaireTitle}*`,
    `👤 სახელი: ${params.respondentName}`,
    `📧 ელფოსტა: ${params.respondentEmail}`,
    `📞 ტელეფონი: \`${params.respondentPhone}\``,
    `🕐 თარიღი: ${formattedDate}`,
    `🌐 IP: \`${params.ip}\``,
    ``,
    `━━━━━━━━━━━━━━━━━━━━━`,
  ].join("\n");

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: header,
      parse_mode: "Markdown",
    }),
  });

  for (const section of params.sections) {
    const lines: string[] = [`📂 *${section.title}*`, ``];
    for (const q of section.questions) {
      const ans = params.answers[q.id]?.trim();
      if (ans) {
        lines.push(`❓ ${q.label}`);
        lines.push(`✅ ${ans}`);
        lines.push(``);
      }
    }
    if (lines.length > 2) {
      const text = lines.join("\n").slice(0, 4000);
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: undefined,
        }),
      });
    }
  }

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: `✅ *კითხვარის დასასრული* · ${params.questionnaireId}`,
      parse_mode: "Markdown",
    }),
  });

  return { success: true };
}

interface SendAgreementSignNotificationParams {
  fullName: string;
  companyName: string;
  idNumber: string;
  email: string;
  phone: string;
  agreedToTerms: boolean;
  agreementId: string;
  ip: string;
  timestamp: string;
}

export async function sendAgreementSignNotification(
  params: SendAgreementSignNotificationParams,
) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error("Telegram bot token or chat ID not configured");
  }

  const date = new Date(params.timestamp);
  const formattedDate = date.toLocaleString("ka-GE", {
    timeZone: "Asia/Tbilisi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const agreementLabels: Record<string, string> = {
    "platform-rental": "პლატფორმის იჯარა",
    "web-development": "ვებ-საიტის შექმნა",
    techbrain: "TechBrain · ვებ-საიტი + მხარდაჭერა",
    "partner-agreement": "პარტნიორის ხელშეკრულება",
  };
  const agreementLabel =
    agreementLabels[params.agreementId] || params.agreementId;

  const text = [
    `📋 *ახალი ხელშეკრულების ხელმოწერა*`,
    ``,
    `📄 ხელშეკრულება: ${agreementLabel}`,
    `👤 სახელი: ${params.fullName}`,
    `🏢 კომპანია: ${params.companyName}`,
    `🆔 ს/კ: \`${params.idNumber}\``,
    `📧 ელ.ფოსტა: ${params.email}`,
    `📞 ტელეფონი: \`${params.phone}\``,
    ``,
    `🕐 თარიღი: ${formattedDate}`,
    `🌐 IP: \`${params.ip}\``,
    ``,
    `✅ ელექტრონული თანხმობა დადასტურებულია`,
    ``,
    `_ainow.ge/agreements/${params.agreementId}_`,
  ].join("\n");

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      `Telegram API error: ${error.description || "Unknown error"}`,
    );
  }

  return response.json();
}

interface SendPartnerApplicationNotificationParams {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  currentRole?: string;
  partnerType: string;
  audience: string;
  channels?: string;
  expectedClients: string;
  message?: string;
  source?: string;
  ip: string;
  timestamp: string;
}

export async function sendPartnerApplicationNotification(
  params: SendPartnerApplicationNotificationParams,
) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error("Telegram bot token or chat ID not configured");
  }

  const date = new Date(params.timestamp);
  const formattedDate = date.toLocaleString("ka-GE", {
    timeZone: "Asia/Tbilisi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  const partnerTypeLabels: Record<string, string> = {
    referral: "Referral Partner (10%)",
    setter: "Sales Setter (15% + 5%)",
    sales: "Sales Partner (25% + 10%)",
    not_sure: "not sure yet",
  };

  const lines = [
    `🤝 *New partner application*`,
    ``,
    `👤 Name: ${params.name}`,
    `📞 Phone: \`${params.phone}\``,
  ];

  if (params.email) lines.push(`📧 Email: ${params.email}`);
  if (params.city) lines.push(`📍 City: ${params.city}`);
  if (params.currentRole) lines.push(`💼 Role: ${params.currentRole}`);
  lines.push(
    `🏷 Partner type: ${partnerTypeLabels[params.partnerType] || params.partnerType}`,
  );
  lines.push(`📈 Expected clients: ${params.expectedClients}`);
  lines.push(``, `🎯 Audience / access:`, params.audience);
  if (params.channels) lines.push(``, `🔗 Channels: ${params.channels}`);
  if (params.message) lines.push(``, `💬 ${params.message}`);
  if (params.source) lines.push(``, `🌐 Source: ${params.source}`);
  lines.push(``, `🕐 ${formattedDate}`, `🌐 IP: \`${params.ip}\``);
  lines.push(``, `_ainow.ge/partners_`);

  const text = lines.join("\n");
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      `Telegram API error: ${error.description || "Unknown error"}`,
    );
  }

  return response.json();
}

interface SendPartnerLeadNotificationParams {
  clientBusiness: string;
  clientName?: string;
  clientPhone: string;
  clientContact?: string;
  need: string;
  partnerName: string;
  partnerEmail: string;
  partnerType: string;
  source?: string;
  ip: string;
  timestamp: string;
  duplicate?: boolean;
}

export async function sendPartnerLeadNotification(
  params: SendPartnerLeadNotificationParams,
) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error("Telegram bot token or chat ID not configured");
  }

  const date = new Date(params.timestamp);
  const formattedDate = date.toLocaleString("ka-GE", {
    timeZone: "Asia/Tbilisi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  const head = params.duplicate
    ? `⚠️ *Duplicate lead attempt*`
    : `🧲 *New client lead*`;

  const lines = [head, ``, `🏢 Business: ${params.clientBusiness}`];
  if (params.clientName) lines.push(`👤 Contact person: ${params.clientName}`);
  lines.push(`📞 Client phone: \`${params.clientPhone}\``);
  if (params.clientContact)
    lines.push(`🔗 Client contact: ${params.clientContact}`);
  lines.push(``, `🎯 Need:`, params.need);
  lines.push(
    ``,
    `🤝 Partner: ${params.partnerName} (${params.partnerEmail})`,
    `🏷 Partner type: ${params.partnerType}`,
  );
  if (params.source) lines.push(`🌐 Source: ${params.source}`);
  if (params.duplicate)
    lines.push(
      ``,
      `❗ This client phone is already registered. Lead NOT created.`,
    );
  lines.push(``, `🕐 ${formattedDate}`, `🌐 IP: \`${params.ip}\``);
  lines.push(``, `_ainow.ge/partners/kit_`);

  const text = lines.join("\n");
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      `Telegram API error: ${error.description || "Unknown error"}`,
    );
  }

  return response.json();
}
