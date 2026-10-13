import { z } from "zod";

export const leadFormSchema = z.object({
  phone: z
    .string()
    .min(6, "Phone number is too short")
    .max(20)
    .regex(/^[+\d\s()-]+$/, "Invalid phone number"),
  name: z.string().max(100).optional(),
  projectType: z
    .enum(["website", "ai", "automation", "creative", "other"])
    .optional(),
  budgetRange: z
    .enum(["small", "medium", "large", "enterprise"])
    .optional(),
  message: z.string().max(3000).optional(),
  utmSource: z.string().max(160).optional(),
  utmMedium: z.string().max(160).optional(),
  utmCampaign: z.string().max(160).optional(),
  utmContent: z.string().max(160).optional(),
  utmTerm: z.string().optional(),
  source: z.string().optional(),
  sourcePath: z.string().max(500).regex(/^\/(?!\/)/).optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
