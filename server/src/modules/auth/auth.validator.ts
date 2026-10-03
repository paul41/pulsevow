import { z } from "zod";

export const registerSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters"),

    email: z
      .string()
      .email("Invalid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    phone: z
      .string()
      .regex(
        /^\+?[0-9]{7,15}$/,
        "Invalid phone number"
      )
      .optional(),

    occupation: z
      .string()
      .optional(),

    country: z
      .string()
      .min(2, "Country must be at least 2 characters")
      .optional(),
  }),

  query: z.object({}),

  params: z.object({}),
});

export const loginSchema = z.object({
  body: z.object({
    email: z
      .string()
      .email("Invalid email address"),

    password: z
      .string()
      .min(1, "Password is required"),
  }),

  query: z.object({}).optional(),

  params: z.object({}).optional(),
});
