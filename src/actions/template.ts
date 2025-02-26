"use server";
import { ActionResponse } from "@/lib/types";
import { Prisma, TemplateStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export interface GetTemplateReturn {
  templates: {
    id: string;
    title: string;
    price: number;
    averageRating: number;
    description: string;
    templateCategory: { title: string };
    // Todo: add image
  }[];
  totalTemplate: number;
  totalPages: number;
  currentPage: number;
}

export interface GetTemplateParams {
  search?: string;
  perPage?: string;
  page?: string;
  category?: string;
  sortBy?: string;
  rating?: string;
}

export async function getTemplates({
  search,
  perPage,
  page,
  category,
  sortBy,
  rating,
}: GetTemplateParams): Promise<ActionResponse<GetTemplateReturn>> {
  try {
    const pageSize = perPage ? parseInt(perPage, 10) : 10;
    const currentPage = page ? parseInt(page, 10) : 1;
    const skip = (currentPage - 1) * pageSize; // Menghitung offset untuk pagination

    const templateCategory = await prisma.templateCategory.findFirst({
      where: {
        title: {
          contains: category,
          mode: "insensitive",
        },
      },
    });
    const categoryId = templateCategory?.id;

    // return error if the category given isn't found
    if (category && !categoryId)
      return { status: "ERROR", error: "Invalid Category" };

    const templates: GetTemplateReturn["templates"] =
      await prisma.template.findMany({
        take: pageSize,
        skip: skip,
        where: {
          status: TemplateStatus.ON_SALE,
          title: search ? { contains: search, mode: "insensitive" } : undefined,
          templateCategoryId: categoryId && category ? categoryId : undefined,
          averageRating: rating ? { gte: parseFloat(rating) } : undefined,
        },
        orderBy: sortBy
          ? { [sortBy]: sortBy === "title" ? "asc" : "desc" } // Adjust sorting rules
          : undefined,
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

    if (!templates) return { status: "ERROR", error: "Template doesn't exist" };

    const totalTemplate = await prisma.template.count({
      where: {
        title: search ? { contains: search, mode: "insensitive" } : undefined,
        status: TemplateStatus.ON_SALE,
        templateCategoryId: categoryId && category ? categoryId : undefined,
        averageRating: rating ? { gte: parseFloat(rating) } : undefined,
      },
    });
    const totalPages = Math.ceil(totalTemplate / pageSize);

    return {
      status: "SUCCESS",
      success: "Success fetching the article",
      data: {
        templates,
        totalTemplate,
        totalPages,
        currentPage,
      },
    };
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError)
      if (error.code === "P2002")
        return { status: "ERROR", error: "Unique constraint failed" };
      else if (error instanceof Prisma.PrismaClientValidationError)
        return {
          status: "ERROR",
          error: "Invalid query or schema validation failed",
        };
    return { status: "ERROR", error: "Something went wrong" };
  }
}

export interface GetTemplateByIdReturn {
  template: {
    id: string;
    title: string;
    price: number;
    averageRating: number;
    description: string;
    templateCategory: { title: string };
    purchasedTime: number;
    // Todo: add images
    // Todo: add template image preview
  };
}
// add total review to the return
export async function GetTemplateById(
  templateId: string,
): Promise<ActionResponse<GetTemplateByIdReturn>> {
  try {
    const template = await prisma.template.findUnique({
      where: { id: templateId },
      select: {
        id: true,
        title: true,
        price: true,
        averageRating: true,
        description: true,
        purchasedTime: true,
        templateCategory: {
          select: {
            title: true,
          },
        },
      },
    });

    if (!template) return { status: "ERROR", error: "Template doesn't exist" };

    return {
      status: "SUCCESS",
      success: "Success fetching the article",
      data: {
        template,
        // Todo: add total review here
      },
    };
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError)
      if (error.code === "P2002")
        return { status: "ERROR", error: "Unique constraint failed" };
      else if (error instanceof Prisma.PrismaClientValidationError)
        return {
          status: "ERROR",
          error: "Invalid query or schema validation failed",
        };
    return { status: "ERROR", error: "Something went wrong" };
  }
}
