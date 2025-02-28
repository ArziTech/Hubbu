"use server";
import { ActionResponse } from "@/lib/types";
import { Prisma, Template, TemplateStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

// *GET ALL Template
export async function getAllTemplates(): Promise<ActionResponse<Template[]>> {
  try {
    const allTemplates = await prisma.template.findMany();
    if (!allTemplates) return { status: "ERROR", error: "Templates not found" };

    return {
      status: "SUCCESS",
      success: "Successfully fetching Templates",
      data: allTemplates,
    };
  } catch {
    return { status: "ERROR", error: "Something went wrong" };
  }
}

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

// *DELETE
export async function deleteManyTemplatesByID(
  ids: string[],
): Promise<ActionResponse<never>> {
  try {
    const templates = await prisma.template.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (templates.length === 0) {
      return { status: "ERROR", error: "Templates do not exist" };
    }

    // Check for foreign key constraints (e.g., articles related to the users)
    // TODO: Check the row or table that has relation with role
    // const usersWithArticles = await prisma.article.findMany({
    //   where: {
    //     authorId: { in: ids },
    //   },
    //   select: {
    //     authorId: true,
    //   },
    // });
    //
    // if (usersWithArticles.length > 0) {
    //   return {
    //     status: "ERROR",
    //     error: "Tidak bisa menghapus user yang memiliki artikel.",
    //   };
    // }

    // Delete users in parallel
    const deletePromises = ids.map((id) =>
      prisma.coupon.delete({
        where: { id },
      }),
    );

    await Promise.all(deletePromises);

    return {
      status: "SUCCESS",
      success: "Successfully deleted templates",
    };
  } catch (err: unknown) {
    // @ts-expect-error the error object here could be anything
    if (err.code && err.code === "P2003") {
      return {
        status: "ERROR",
        error: "Tidak bisa menghapus templates.",
      };
    }
    // @ts-expect-error should be okay
    return { status: "ERROR", error: err.toString() };
  }
}
