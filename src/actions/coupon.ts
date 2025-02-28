"use server";

import { Coupon } from "@prisma/client";
import { ActionResponse } from "@/lib/types";
import { prisma } from "@/lib/prisma";

// *GET ALL Website
export async function getAllCoupon(): Promise<ActionResponse<Coupon[]>> {
  try {
    const allCoupons = await prisma.coupon.findMany();
    if (!allCoupons) return { status: "ERROR", error: "Coupons not found" };

    return {
      status: "SUCCESS",
      success: "Successfully fetching Coupons",
      data: allCoupons,
    };
  } catch {
    return { status: "ERROR", error: "Something went wrong" };
  }
}

// *DELETE
export async function deleteManyCouponsByID(
  ids: string[],
): Promise<ActionResponse<never>> {
  try {
    // Check if users exist or not
    const coupons = await prisma.coupon.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (coupons.length === 0) {
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

    // Delete users in parallel
    const deletePromises = ids.map((id) =>
      prisma.coupon.delete({
        where: { id },
      }),
    );

    await Promise.all(deletePromises);

    return { status: "SUCCESS", success: "Successfully deleted coupons" };
  } catch (err: unknown) {
    // @ts-expect-error the error object here could be anything
    if (err.code && err.code === "P2003") {
      return {
        status: "ERROR",
        error: "Tidak bisa menghapus coupons.",
      };
    }
    // @ts-expect-error should be okay
    return { status: "ERROR", error: err.toString() };
  }
}
