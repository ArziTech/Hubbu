"use server";
import { ActionResponse } from "@/lib/types";
import { prisma } from "@/lib/prisma";

export interface GetUserTransactionReturn {
  transactionId: string;
  templateName: string;
  coupon: string | null;
  status: string;
  // payment: string;
}

export async function getUserTransaction(
  userId: string,
): Promise<ActionResponse<GetUserTransactionReturn[]>> {
  const transactions = await prisma.transaction.findMany({
    where: {
      customerId: userId,
    },
    select: {
      id: true,
      coupon: true,
      TemplateTransaction: {
        select: {
          template: {
            select: {
              title: true,
            },
          },
        },
      },
      PaymentHistory: {
        orderBy: { createdAt: "asc" },
        select: { status: true },
      },
    },
  });

  if (!transactions) {
    return {
      status: "SUCCESS",
      success: "User doesn't have any transaction",
      data: [],
    };
  }

  const map = transactions.map((item) => {
    const templateName = item.TemplateTransaction[0].template.title;
    const status = item.PaymentHistory[0].status;
    return {
      transactionId: item.id,
      templateName: templateName,
      coupon: item.coupon?.code || null,
      status: status,
    };
  });

  return {
    status: "SUCCESS",
    data: map,
  };
}

export async function deleteManyUserTransaction(
  ids: string[],
  userId: string,
): Promise<ActionResponse<never>> {
  try {
    // Check if users exist or not
    const transactions = await prisma.transaction.findMany({
      where: {
        id: { in: ids },
        customerId: userId,
      },
    });

    if (transactions.length === 0) {
      return { status: "ERROR", error: "Transactions do not exist" };
    }

    // TODO: Check this
    const deletePromises = ids.map((id) => {
      prisma.templateTransaction.delete({
        where: { id },
      });

      return prisma.transaction.delete({
        where: { id: id },
      });
    });

    await Promise.all(deletePromises);

    return { status: "SUCCESS", success: "Successfully deleted users" };
  } catch (err: unknown) {
    // @ts-expect-error should be okay
    return { status: "ERROR", error: err.toString() };
  }
}
