"use server";
import { ActionResponse } from "@/lib/types";
import { VerificationToken } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function createVerificationTokenByEmail(
  email: string,
): Promise<ActionResponse<VerificationToken>> {
  try {
    const expires = new Date();
    expires.setHours(expires.getHours() + 1);

    const code = Math.floor(1000 + Math.random() * 9000).toString();

    const token = await prisma.verificationToken.create({
      data: { email, token: code, expires },
    });
    return {
      status: "SUCCESS",
      data: token,
      success: "Successfully creating code",
    };
  } catch (error) {
    console.log(error);
    // handle database error here
    return { status: "ERROR", error: "Something went wrong" };
  }
}

export async function getVerificationTokensByEmail(
  email: string,
): Promise<ActionResponse<VerificationToken[]>> {
  try {
    // tambahkan order berdasarkan tanggal
    const token = await prisma.verificationToken.findMany({
      where: { email },
      orderBy: {
        expires: "desc", // Urutkan dari terbaru ke terlama
      },
    });
    return {
      status: "SUCCESS",
      data: token,
      success: "Successfully fetching code",
    };
  } catch (error) {
    console.log(error);
    // handle database error here
    return { status: "ERROR", error: "Something went wrong" };
  }
}

export async function deleteVerificationTokensByEmail(
  email: string,
): Promise<ActionResponse<{ count: number }>> {
  try {
    const result = await prisma.verificationToken.deleteMany({
      where: { email },
    });

    return {
      status: "SUCCESS",
      data: { count: result.count },
      success: `Successfully deleted ${result.count} tokens`,
    };
  } catch (error) {
    console.error("Error deleting tokens:", error);
    return { status: "ERROR", error: "Something went wrong" };
  }
}
