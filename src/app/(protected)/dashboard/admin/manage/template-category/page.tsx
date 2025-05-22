import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/table/table-data";
import { columns } from "./column";
import {
  deleteManyTemplateCategoriesByID,
  getAllTemplateCategories,
} from "@/actions/template-category";

const Page = () => {
  return (
    <div className={"size-full pt-12"}>
      <Card className={"text-text"}>
        <CardHeader>
          <h2 className={"text-xl font-medium"}>Manage Template Category</h2>
        </CardHeader>
        <CardContent>
          <DataTable
            queryKey={"all templates"}
            queryAction={getAllTemplateCategories}
            columns={columns}
            deleteFNAction={deleteManyTemplateCategoriesByID}
            filterBy={"title"}
          />
        </CardContent>
      </Card>
    </div>
  );
};
export default Page;
