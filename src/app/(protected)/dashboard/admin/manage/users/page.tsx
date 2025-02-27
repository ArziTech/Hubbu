import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/table/table-data";
import { columns } from "@/app/(protected)/dashboard/admin/manage/users/user-column";
import { deleteManyUserByID, getAllUser } from "@/actions/user";

const Page = () => {
  return (
    <div className={"size-full pt-12"}>
      <Card className={"text-text"}>
        <CardHeader>
          <h2 className={"text-xl font-medium"}>Manage User</h2>
        </CardHeader>
        <CardContent>
          <DataTable
            queryKey={"allUser"}
            queryAction={getAllUser}
            columns={columns}
            deleteFNAction={deleteManyUserByID}
            filterBy={"name"}
          />
        </CardContent>
      </Card>
    </div>
  );
};
export default Page;
