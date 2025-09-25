import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, "Le nom est requis"),
    email: z.string().email("Email invalide"),
    subject: z.string().min(1, "Le sujet est requis"),
    message: z.string().min(1, "Le message est requis"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
