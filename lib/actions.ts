"use server";

import {
  createCategorySchema,
  CreateCategoryState,
} from "@/types/category.model";
import { revalidatePath } from "next/cache";
import prisma from "./prisma";

export async function createCategory(
  prevState: CreateCategoryState,
  formData: FormData,
) {
  const validatedFields = createCategorySchema.safeParse({
    name: formData.get("name"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields!",
    };
  }

  const { name } = { name: formData.get("name") as string };

  try {
    await prisma.category.create({ data: { name } });
  } catch (error) {
    console.error("Error in create category:", error);
    return { message: "Field to create category!" };
  }

  revalidatePath("/dashboard");
  return { message: "Success" };
}
