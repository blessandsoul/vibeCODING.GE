import { CONTACT_SITE, normalizeContactContext, type ContactVisitContext } from "./contact-context";

export interface ContactNotificationParams extends ContactVisitContext {
  phone?: string; email?: string; name?: string; company?: string; product?: string;
  message?: string; source?: string; contactPreference?: string; contactConfirmed?: boolean;
}
function plain(value: string | undefined): string {
  return value?.replace(/\r\n?/g, "\n").replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, " ").trim() || "";
}
export function formatContactNotification(params: ContactNotificationParams): string {
  const context = normalizeContactContext(params);
  const channels: Record<string,string> = { whatsapp: "WhatsApp", sms: "SMS", call: "ზარი", email: "ელფოსტა" };
  const lines = [`📩 ${CONTACT_SITE} · ახალი მოთხოვნა`, ""];
  if (params.name) lines.push(`👤 სახელი: ${plain(params.name)}`);
  if (params.company) lines.push(`🏢 ბიზნესი: ${plain(params.company)}`);
  if (params.phone) lines.push(`📞 ტელეფონი: ${plain(params.phone)}`);
  if (params.email) lines.push(`📧 ელფოსტა: ${plain(params.email)}`);
  if (params.product) lines.push(`🎯 პროდუქტი: ${plain(params.product)}`);
  if (params.contactPreference) lines.push(`📲 დაკავშირება: ${channels[params.contactPreference] || plain(params.contactPreference)}`);
  if (params.contactConfirmed) lines.push("✅ დაკავშირების სურვილი დადასტურებულია კლიენტის მიერ");
  if (params.message) lines.push("", `💬 რა სჭირდება:\n${plain(params.message)}`);
  if (context.sourcePath) lines.push("", `🌐 გვერდი: https://${CONTACT_SITE}${context.sourcePath}`);
  if (params.source) lines.push(`ფორმა: ${plain(params.source)}`);
  if (context.landingPath) lines.push(`პირველი გვერდი: https://${CONTACT_SITE}${context.landingPath}`);
  if (context.referrerHost) lines.push(`გადასვლის წყარო: ${plain(context.referrerHost)}`);
  const fields = ["utmSource","utmMedium","utmCampaign","utmContent","utmTerm"] as const;
  const tags = fields.filter(key => context[key]).map(key => `${key}: ${plain(context[key])}`);
  if (tags.length) lines.push(`UTM: ${tags.join(" · ")}`);
  if (context.paidClick) lines.push("სარეკლამო გადასვლის ნიშანი: არის");
  if (!context.referrerHost && !tags.length && !context.paidClick) lines.push("ვიზიტის წყარო: უცნობია");
  const text=lines.join("\n");
  if (text.length > 4096) throw new Error("Contact notification is too long");
  return text;
}
