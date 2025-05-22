"use server";
import { snap } from "@/lib/midtrans/init";
import { ActionResponse } from "@/lib/types";
import { prisma } from "@/lib/prisma";

interface DBparams {
  userId: string;
  templateId: string;
}

interface MidtransParameters {
  transaction_details: {
    order_id: string;
    gross_amount: number;
  };
  item_details: {
    id: string;
    price: number;
    quantity: number;
    name: string;
    category: string;
    merchant_name?: string;
    url?: string;
  }[];
  customer_details: {
    first_name: string;
    last_name?: string;
    email: string;
    phone?: string;
    billing_address?: {
      first_name: string;
      last_name?: string;
      email: string;
      phone: string;
      address: string;
      city: string;
      postal_code: string;
      country_code: string;
    };
    shipping_address?: {
      first_name: string;
      last_name?: string;
      email: string;
      phone: string;
      address: string;
      city: string;
      postal_code: string;
      country_code: string;
    };
  };
}

export async function createTransaction(
  databaseParameter: DBparams,
  midtrans_parameter: MidtransParameters,
): Promise<ActionResponse<{ token: string; redirect_url: string }>> {
  try {
    console.log(midtrans_parameter.item_details[0]);
    const result = await snap.createTransaction(midtrans_parameter);
    const { token, redirect_url } = result;

    const transaction = await prisma.transaction.create({
      data: {
        id: token,
        amount: midtrans_parameter.transaction_details.gross_amount,
        customerId: databaseParameter.userId,
        // TODO: add this column into database OR use another method rather than snap
        // paymentLink: redirect_url
      },
    });

    // membuat record di table (join) TemplateTransaction
    await prisma.templateTransaction.create({
      data: {
        templateId: databaseParameter.templateId,
        transactionId: token,
      },
    });

    await prisma.paymentHistory.create({
      data: {
        status: "PENDING",
        transaction: {
          connect: transaction,
        },
        expiredAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
        paidAt: null,
        // paymentMethod: "fksjslf",
      },
    });

    console.log(`token: ${token}, redirect_url: ${redirect_url}`);

    return {
      status: "SUCCESS",
      data: { token, redirect_url: redirect_url },
    };
  } catch (error) {
    // if (error.httpStatusCode) {
    //   switch (error.httpStatusCode) {
    //     case 400:
    //       break;
    //     case 401:
    //       break;
    //     case 500:
    //       break;
    //   }
    // }
    return {
      status: "ERROR",
      // @ts-expect-error this should be okay
      message: error.message || "Something went wrong",
    };
  }
}
