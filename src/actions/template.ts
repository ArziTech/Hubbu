import { ActionResponse } from "@/lib/types";
import { Template } from "@prisma/client";
import { prisma } from "@/lib/prisma";


export interface GetTemplateType {
  id: string;
  title: string;
  price: number;
  averageRating: number;
  description: string;
  templateCategory: {title:string};
}

export async function getTemplates(numberItem?:number): Promise<
  ActionResponse<GetTemplateType[]>
> {
  try {
    const allTemplates: GetTemplateType[] = await prisma.template.findMany({
      take: numberItem || 10,
      skip: 1,
      select: {
        id: true,
        title: true,
        price: true,
        averageRating: true,
        description: true,
        templateCategory: {
          select: {
            title: true,
          },
        },
      },
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