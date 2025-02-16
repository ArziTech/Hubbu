'use server'
import { ActionResponse } from "@/lib/types";
import {  TemplateCategory } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function getAllTemplateCategory(): Promise<
  ActionResponse<TemplateCategory[]>
> {
  try {
    const allCategories = await prisma.templateCategory.findMany({});

    if (!allCategories)
      return { status: "ERROR", error: "Categories doesn't exist" };

    return {
      status: "SUCCESS",
      success: "Success fetching the article",
      data: allCategories,
    };
  } catch (error) {
    console.log(error);
    return { status: "ERROR", error: "Something went wrong" };

  }

}