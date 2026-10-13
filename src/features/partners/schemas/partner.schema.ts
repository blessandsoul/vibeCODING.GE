import { z } from "zod";

export const partnerApplicationSchema = z.object({
  name: z.string().min(2, "სახელი ძალიან მოკლეა").max(120),
  phone: z
    .string()
    .min(6, "ტელეფონის ნომერი ძალიან მოკლეა")
    .max(30)
    .regex(/^[+\d\s()-]+$/, "არასწორი ტელეფონის ნომერი"),
  email: z
    .string()
    .email("არასწორი ელ.ფოსტა")
    .max(254)
    .optional()
    .or(z.literal("")),
  city: z.string().max(80).optional().or(z.literal("")),
  currentRole: z.string().max(120).optional().or(z.literal("")),
  partnerType: z.enum(["referral", "setter", "sales", "not_sure"]),
  audience: z
    .string()
    .min(10, "მოკლედ აღწერეთ თქვენი წვდომა (მინ. 10 სიმბოლო)")
    .max(1000),
  channels: z.string().max(1000).optional().or(z.literal("")),
  expectedClients: z.enum(["1-2", "3-5", "6-10", "10_plus", "not_sure"]),
  message: z.string().max(2000).optional().or(z.literal("")),
  source: z.string().max(120).optional().or(z.literal("")),
});

export type PartnerApplicationData = z.infer<typeof partnerApplicationSchema>;
