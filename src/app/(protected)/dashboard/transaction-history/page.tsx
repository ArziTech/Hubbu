import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/table/table-data";
import { columns } from "@/app/(protected)/dashboard/transaction-history/column";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import {
  deleteManyUserTransaction,
  getUserTransaction,
} from "@/actions/transaction/userTransaction";

const Page = async () => {
  const user = (await auth())?.user;
  if (!user) return redirect("/login");

  const response = await getUserTransaction(user.id);

  if (response.status !== "SUCCESS" || !response.data) return null;

  const { data: transactions } = response;
  console.log(transactions);

  return (
    <div className={"size-full pt-12"}>
      <Card className={"text-text"}>
        <CardHeader>
          <h2 className={"text-xl font-medium"}>Transaction History</h2>
        </CardHeader>
        <CardContent>
          <DataTable
            queryKey={`userTransaction${user.id}`}
            queryAction={async () => {
              "use server";
              return await getUserTransaction(user.id);
            }}
            columns={columns}
            deleteFNAction={async (ids: string[]) => {
              "use server";
              return deleteManyUserTransaction(ids, user.id);
            }}
            filterBy={"templateName"}
          />
        </CardContent>
      </Card>
    </div>
  );
};
export default Page;
