import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
    phone: z.string().regex(/^\+?[0-9]{7,15}$/).optional(),
    occupation: z.string().optional(),
    country: z.string().min(2).optional(), // at least e.g. "IN", "US"

});

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});
