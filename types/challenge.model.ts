import { z } from "zod";

export const createChallengeSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "The title filed must be at least 2 characters."),
  categoryId: z.string().min(1, "The category is required."),
  description: z
    .string()
    .min(10, "The description filed must be at least 10 characters."),
  starterCode: z.string().min(1, "The starter code is required."),
});

export type CreateChallengeState = {
  errors?: {
    title?: string[];
    categoryId?: string[];
    description?: string[];
    starterCode?: string[];
  };
  message?: string | null;
};
