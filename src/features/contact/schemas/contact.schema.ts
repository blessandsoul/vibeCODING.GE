import { z } from "zod";
import { formatContactNotification } from "../lib/contact-notification";

export const CONTACT_MESSAGE_MAX_LENGTH = 1800;
export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(120).regex(/\p{L}/u, "Provide your name"),
  company: z.string().trim().max(120).optional(),
  product: z.string().trim().max(120).optional(),
  phone: z.string().trim().max(20).regex(/^\+?[\d\s()-]+$/).refine(value => { const n=value.replace(/\D/g, "").length; return n>=9 && n<=15; }).optional(),
  email: z.string().trim().email().max(254).optional(),
  message: z.string().trim().min(8).max(CONTACT_MESSAGE_MAX_LENGTH).refine(value => (value.match(/[\p{L}\p{N}]/gu)||[]).length>=4),
  contactPreference: z.enum(["whatsapp","sms","call","email"]),
  contactConfirmed: z.boolean().refine(value => value===true),
  source: z.string().max(100).optional(),
  sourcePath: z.string().max(200).regex(/^\/(?!\/)/).optional(),
  landingPath: z.string().max(200).regex(/^\/(?!\/)/).optional(),
  referrerHost: z.string().max(200).optional(),
  paidClick: z.boolean().optional(),
  utmSource: z.string().max(100).optional(), utmMedium: z.string().max(100).optional(),
  utmCampaign: z.string().max(100).optional(), utmContent: z.string().max(100).optional(), utmTerm: z.string().max(100).optional(),
}).refine(data => data.contactPreference==="email" ? Boolean(data.email) : Boolean(data.phone), { message:"Provide contact details for the chosen channel", path:["phone"] })
.superRefine((data,ctx) => {
  try { formatContactNotification(data); } catch { ctx.addIssue({code:"custom",message:"Please shorten the message",path:["message"]}); }
});
export type ContactFormData = z.infer<typeof contactFormSchema>;
