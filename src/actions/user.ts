"use server";
import { Prisma, User } from "@prisma/client";
import { ActionResponse } from "@/lib/types";
import { prisma } from "@/lib/prisma";
import UserCreateInput = Prisma.UserCreateInput;

export async function createUser(
  input: UserCreateInput,
): Promise<ActionResponse<User>> {
  try {
    const user = await prisma.user.create({ data: input });

    if (!user) return { status: "ERROR", error: "User doesn't exist" };

    return {
      status: "SUCCESS",
      success: "Success creating new user",
      data: user,
    };
  } catch {
    // console.log(error);
    return { status: "ERROR", error: "Something went wrong" };
  }
}
export async function getUserById(id: string): Promise<ActionResponse<User>> {
  try {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) return { status: "ERROR", error: "User doesn't exist" };

    return {
      status: "SUCCESS",
      success: "Success fetching the user",
      data: user,
    };
  } catch (error) {
    console.log(error);
    return { status: "ERROR", error: "Something went wrong" };
  }
}

// *GET ALL USER
export async function getAllUser(): Promise<ActionResponse<User[]>> {
  try {
    const allUsers = await prisma.user.findMany();
    if (!allUsers) return { status: "ERROR", error: "users not found" };

    return {
      status: "SUCCESS",
      success: "Successfully fetching user",
      data: allUsers,
    };
  } catch {
    return { status: "ERROR", error: "Something went wrong" };
  }
}

export async function getUserByEmail(
  email: string,
): Promise<ActionResponse<User>> {
  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return { status: "ERROR", error: "User doesn't exist" };

    return {
      status: "SUCCESS",
      success: "Success fetching the user",
      data: user,
    };
  } catch (error) {
    console.log(error);
    return { status: "ERROR", error: "Something went wrong" };
  }
}

// *DELETE
export async function deleteManyUserByID(
  ids: string[],
): Promise<ActionResponse<never>> {
  try {
    // Check if users exist or not
    const users = await prisma.user.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (users.length === 0) {
      return { status: "ERROR", error: "Users do not exist" };
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
      prisma.user.delete({
        where: { id },
      }),
    );

    await Promise.all(deletePromises);

    return { status: "SUCCESS", success: "Successfully deleted users" };
  } catch (err: unknown) {
    // @ts-expect-error the error object here could be anything
    if (err.code && err.code === "P2003") {
      return {
        status: "ERROR",
        error: "Tidak bisa menghapus user yang memiliki artikel.",
      };
    }
    // @ts-expect-error should be okay
    return { status: "ERROR", error: err.toString() };
  }
}
