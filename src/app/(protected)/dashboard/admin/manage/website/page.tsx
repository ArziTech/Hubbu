import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/table/table-data";
import { deleteManyWebsitesByID, getAllWebsite } from "@/actions/website";
import { columns } from "@/app/(protected)/dashboard/admin/manage/website/website-column";

const Page = () => {
  return (
    <div className={"size-full pt-12"}>
      <Card className={"text-text"}>
        <CardHeader>
          <h2 className={"text-xl font-medium"}>Manage Websites</h2>
        </CardHeader>
        <CardContent>
          <DataTable
            queryKey={"allWebsite"}
            queryAction={getAllWebsite}
            columns={columns}
            deleteFNAction={deleteManyWebsitesByID}
            filterBy={"websiteName"}
          />
        </CardContent>
      </Card>
    </div>
  );
};
export default Page;
