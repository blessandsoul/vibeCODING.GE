import { z } from "zod";

// A partner registers a CLIENT lead (the business they bring to aiNOW).
// Dedup is on the normalized client phone (first partner to register wins).
export const partnerLeadSchema = z.object({
  clientBusiness: z.string().min(2, "მიუთითეთ ბიზნესის სახელი").max(500),
  clientName: z.string().max(255).optional().or(z.literal("")),
  clientPhone: z
    .string()
    .min(6, "კლიენტის ტელეფონი ძალიან მოკლეა")
    .max(50)
    .regex(/^[+\d\s()-]+$/, "არასწორი ტელეფონის ნომერი"),
  clientContact: z.string().max(500).optional().or(z.literal("")),
  need: z.string().min(5, "მოკლედ აღწერეთ რა სჭირდება კლიენტს").max(2000),
  partnerName: z.string().min(2, "მიუთითეთ თქვენი სახელი").max(255),
  partnerEmail: z.string().email("არასწორი ელ.ფოსტა").max(254),
  partnerType: z.enum(["referral", "setter", "sales", "not_sure"]),
  partnerConsent: z.boolean().refine((v) => v === true, {
    message: "თანხმობა სავალდებულოა ლიდის რეგისტრაციისთვის",
  }),
  source: z.string().max(120).optional().or(z.literal("")),
});

export type PartnerLeadData = z.infer<typeof partnerLeadSchema>;
