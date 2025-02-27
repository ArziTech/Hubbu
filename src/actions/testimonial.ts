"use server";
import { ActionResponse } from "@/lib/types";
import { prisma } from "@/lib/prisma";
import { Testimonials } from "@prisma/client";

export async function getAllTestimonials(): Promise<
  ActionResponse<Testimonials[]>
> {
  try {
    const allTestimonials = await prisma.testimonials.findMany();
    if (!allTestimonials)
      return { status: "ERROR", error: "Website not found" };

    return {
      status: "SUCCESS",
      success: "Successfully fetching testimonials",
      data: allTestimonials,
    };
  } catch {
    return { status: "ERROR", error: "Something went wrong" };
  }
}

// *DELETE
export async function deleteManyTestimonialsByID(
  ids: string[],
): Promise<ActionResponse<never>> {
  try {
    // Check if users exist or not
    const testimonials = await prisma.testimonials.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (testimonials.length === 0) {
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

    return { status: "SUCCESS", success: "Successfully deleted testimonials" };
  } catch (err: unknown) {
    // @ts-expect-error the error object here could be anything
    if (err.code && err.code === "P2003") {
      return {
        status: "ERROR",
        error: "Tidak bisa menghapus testimonials.",
      };
    }
    // @ts-expect-error should be okay
    return { status: "ERROR", error: err.toString() };
  }
}
