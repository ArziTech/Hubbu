"use server";

import { ActionResponse } from "@/lib/types";
import { Permissions } from "@prisma/client";
import { prisma } from "@/lib/prisma";

// *GET
export async function getAllLPermissions(): Promise<
  ActionResponse<Permissions[]>
> {
  try {
    const allPermissions = await prisma.permissions.findMany();
    if (!allPermissions)
      return { status: "ERROR", error: "Permissions not found" };

    return {
      status: "SUCCESS",
      success: "Successfully fetching permissions",
      data: allPermissions,
    };
  } catch {
    return { status: "ERROR", error: "Something went wrong" };
  }
}

// *DELETE
export async function deleteManyPermissionsByID(
  ids: string[],
): Promise<ActionResponse<never>> {
  try {
    // Check if users exist or not
    const permissions = await prisma.permissions.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (permissions.length === 0) {
      return { status: "ERROR", error: "Coupons do not exist" };
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

    return { status: "SUCCESS", success: "Successfully deleted permissions" };
  } catch (err: unknown) {
    // @ts-expect-error the error object here could be anything
    if (err.code && err.code === "P2003") {
      return {
        status: "ERROR",
        error: "Tidak bisa menghapus permissions.",
      };
    }
    // @ts-expect-error should be okay
    return { status: "ERROR", error: err.toString() };
  }
}
