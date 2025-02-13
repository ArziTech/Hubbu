import { ActionResponse } from "@/lib/types";
import { Template } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function getTemplates(numberItem?:number): Promise<
  ActionResponse<Template[]>
> {
  try {
    const allTemplates = await prisma.template.findMany({
      take: numberItem ? numberItem : 10,
      skip: 1,
    });

    if (!allTemplates)
      return { status: "ERROR", error: "Template doesn't exist" };

    return {
      status: "SUCCESS",
      success: "Success fetching the article",
      data: allTemplates,
    };
  } catch {
    // TODO: Handle if database connection wrong
    return { status: "ERROR", error: "Something went wrong" };
  }
}