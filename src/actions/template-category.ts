"use server";
import { ActionResponse } from "@/lib/types";
import { TemplateCategory } from "@prisma/client";
import { prisma } from "@/lib/prisma";

// *GET
export async function getAllTemplateCategories(): Promise<
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
  } catch {
    return { status: "ERROR", error: "Something went wrong" };
  }
}

// *DELETE
export async function deleteManyTemplateCategoriesByID(
  ids: string[],
): Promise<ActionResponse<never>> {
  try {
    const templateCategory = await prisma.templateCategory.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (templateCategory.length === 0) {
      return { status: "ERROR", error: "Template Category do not exist" };
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

    // Delete rows in parallel
    const deletePromises = ids.map((id) =>
      prisma.coupon.delete({
        where: { id },
      }),
    );

    await Promise.all(deletePromises);

    return {
      status: "SUCCESS",
      success: "Successfully deleted template category",
    };
  } catch (err: unknown) {
    // @ts-expect-error the error object here could be anything
    if (err.code && err.code === "P2003") {
      return {
        status: "ERROR",
        error: "Tidak bisa menghapus template category.",
      };
    }
    // @ts-expect-error should be okay
    return { status: "ERROR", error: err.toString() };
  }
}
