import { z } from "zod";

// Accepts both the /contact phone form (phone only) and the landing CTA form
// (name + email + message). All fields optional at the shape level; the refine
// requires at least a phone OR an email so there's always a way to reach back.
export const contactFormSchema = z
  .object({
    phone: z
      .string()
      .min(6, "Phone number is too short")
      .max(20)
      .regex(/^[+\d\s()-]+$/, "Invalid phone number")
      .optional(),
    name: z.string().min(1).max(120).optional(),
    email: z.string().email("Invalid email").max(254).optional(),
    message: z.string().max(5000).optional(),
  })
  .refine((d) => Boolean(d.phone || d.email), {
    message: "Provide a phone number or email",
    path: ["phone"],
  });

export type ContactFormData = z.infer<typeof contactFormSchema>;
