import { Prisma, User } from "@prisma/client";
import { ActionResponse } from "@/lib/types";
import { prisma } from "@/lib/prisma";
import UserCreateInput = Prisma.UserCreateInput;
import { undefined } from "zod";
import { input } from "sucrase/dist/types/parser/traverser/base";

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
