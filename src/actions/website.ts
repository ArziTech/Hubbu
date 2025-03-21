"use server";
import { Website } from "@prisma/client";
import { ActionResponse } from "@/lib/types";
import { prisma } from "@/lib/prisma";
import { prismaErrorChecker } from "@/lib/prismaErrorChecker";

// *GET ALL Website
export async function getAllWebsite(): Promise<ActionResponse<Website[]>> {
  try {
    const allWebsites = await prisma.website.findMany();
    if (!allWebsites) return { status: "ERROR", error: "Website not found" };

    return {
      status: "SUCCESS",
      success: "Successfully fetching websites",
      data: allWebsites,
    };
  } catch {
    return { status: "ERROR", error: "Something went wrong" };
  }
}

export async function getWebsiteById(
  id: string,
): Promise<ActionResponse<Website>> {
  try {
    const website = await prisma.website.findUnique({
      where: { id },
    });
    if (!website) {
      return {
        status: "ERROR",
        error: "Error fetching website",
      };
    }
    return {
      status: "SUCCESS",
      success: "Successfully fetching website with id",
      data: website,
    };
  } catch (error) {
    return prismaErrorChecker(error);
  }
}

export async function getWebsiteElementsById(
  id: string,
): Promise<ActionResponse<{ elements: string }>> {
  try {
    const website = await prisma.website.findUnique({
      where: { id },
      select: {
        content: true,
      },
    });
    if (!website) {
      return {
        status: "ERROR",
        error: "Error fetching website element",
      };
    }
    return {
      status: "SUCCESS",
      success: `Successfully fetching website element with id ${id}`,
      data: { elements: website.content },
    };
  } catch (error) {
    return prismaErrorChecker(error);
  }
}

// *UPDATE
export async function updateWebsiteContentById(
  id: string,
  content: string,
): Promise<ActionResponse<Website>> {
  try {
    const website = await prisma.website.update({
      where: { id },
      data: {
        content,
      },
    });
    if (!website) {
      return {
        status: "ERROR",
        error: "Error updating website",
      };
    }
    return {
      status: "SUCCESS",
      success: "Successfully updating website with id",
      data: website,
    };
  } catch (error) {
    return prismaErrorChecker(error);
  }
}

export async function updateWebsiteNameById(
  id: string,
  newName: string,
): Promise<ActionResponse<Website>> {
  try {
    const website = await prisma.website.update({
      where: { id },
      data: {
        websiteName: newName,
      },
    });
    if (!website) {
      return {
        status: "ERROR",
        error: "Error updating website",
      };
    }
    return {
      status: "SUCCESS",
      success: `Successfully updating website name with id into ${newName}`,
      data: website,
    };
  } catch (error) {
    return prismaErrorChecker(error);
  }
}

// *DELETE
export async function deleteManyWebsitesByID(
  ids: string[],
): Promise<ActionResponse<never>> {
  try {
    // Check if users exist or not
    const websites = await prisma.website.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (websites.length === 0) {
      return { status: "ERROR", error: "Websites do not exist" };
    }

    // Check for foreign key constraints (e.g., articles related to the users)
    // TODO: Check the row or table that has relation with user
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
      prisma.website.delete({
        where: { id },
      }),
    );

    await Promise.all(deletePromises);

    return { status: "SUCCESS", success: "Successfully deleted websites" };
  } catch (err: unknown) {
    // @ts-expect-error the error object here could be anything
    if (err.code && err.code === "P2003") {
      return {
        status: "ERROR",
        error: "Tidak bisa menghapus websites.",
      };
    }
    // @ts-expect-error should be okay
    return { status: "ERROR", error: err.toString() };
  }
}
