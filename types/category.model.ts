import { z } from "zod";

export const createCategorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "The name filed must be at least 3 characters."),
});

export type CreateCategoryState = {
  errors?: { name?: string[] };
  message?: string | null;
};
