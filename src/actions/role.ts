"use server";
import { Role } from "@prisma/client";
import { ActionResponse } from "@/lib/types";
import { prisma } from "@/lib/prisma";

// *GET
export async function getAllRoles(): Promise<ActionResponse<Role[]>> {
  try {
    const allRoles = await prisma.role.findMany();
    if (!allRoles) return { status: "ERROR", error: "Roles not found" };

    return {
      status: "SUCCESS",
      success: "Successfully fetching Roles",
      data: allRoles,
    };
  } catch {
    return { status: "ERROR", error: "Something went wrong" };
  }
}

// *DELETE
export async function deleteManyRolesByID(
  ids: string[],
): Promise<ActionResponse<never>> {
  try {
    // Check if users exist or not
    const roles = await prisma.role.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (roles.length === 0) {
      return { status: "ERROR", error: "Roles do not exist" };
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
      prisma.role.delete({
        where: { id },
      }),
    );

    await Promise.all(deletePromises);

    return { status: "SUCCESS", success: "Successfully deleted roles" };
  } catch (err: unknown) {
    // @ts-expect-error the error object here could be anything
    if (err.code && err.code === "P2003") {
      return {
        status: "ERROR",
        error: "Tidak bisa menghapus roles.",
      };
    }
    // @ts-expect-error should be okay
    return { status: "ERROR", error: err.toString() };
  }
}
