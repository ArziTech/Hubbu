import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/table/table-data";
import { deleteManyRolesByID, getAllRoles } from "@/actions/role";
import { columns } from "./column";

const Page = () => {
  return (
    <div className={"size-full pt-12"}>
      <Card className={"text-text"}>
        <CardHeader>
          <h2 className={"text-xl font-medium"}>Manage Roles</h2>
        </CardHeader>
        <CardContent>
          <DataTable
            queryKey={"all roles"}
            queryAction={getAllRoles}
            columns={columns}
            deleteFNAction={deleteManyRolesByID}
            filterBy={"title"}
          />
        </CardContent>
      </Card>
    </div>
  );
};
export default Page;
