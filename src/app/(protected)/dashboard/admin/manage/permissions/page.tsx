import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/table/table-data";
import { columns } from "./column";
import {
  deleteManyPermissionsByID,
  getAllLPermissions,
} from "@/actions/permission";

const Page = () => {
  return (
    <div className={"size-full pt-12"}>
      <Card className={"text-text"}>
        <CardHeader>
          <h2 className={"text-xl font-medium"}>Manage Permsissions</h2>
        </CardHeader>
        <CardContent>
          <DataTable
            queryKey={"all permissions"}
            queryAction={getAllLPermissions}
            columns={columns}
            deleteFNAction={deleteManyPermissionsByID}
            filterBy={"title"}
          />
        </CardContent>
      </Card>
    </div>
  );
};
export default Page;
