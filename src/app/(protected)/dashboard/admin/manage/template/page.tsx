import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/table/table-data";
import { deleteManyTemplatesByID, getAllTemplates } from "@/actions/template";
import { columns } from "./column";

const Page = () => {
  return (
    <div className={"size-full pt-12"}>
      <Card className={"text-text"}>
        <CardHeader>
          <h2 className={"text-xl font-medium"}>Manage Template</h2>
        </CardHeader>
        <CardContent>
          <DataTable
            queryKey={"all templates"}
            queryAction={getAllTemplates}
            columns={columns}
            deleteFNAction={deleteManyTemplatesByID}
            filterBy={"title"}
          />
        </CardContent>
      </Card>
    </div>
  );
};
export default Page;
