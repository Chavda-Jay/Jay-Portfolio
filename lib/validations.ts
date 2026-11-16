import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters"),
  // Honeypot field (must remain empty)
  _honey: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactSchema>;
