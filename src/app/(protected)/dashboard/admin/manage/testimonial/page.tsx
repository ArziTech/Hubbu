import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/table/table-data";
import {
  deleteManyTestimonialsByID,
  getAllTestimonials,
} from "@/actions/testimonial";
import { columns } from "./column";

const Page = () => {
  return (
    <div className={"size-full pt-12"}>
      <Card className={"text-text"}>
        <CardHeader>
          <h2 className={"text-xl font-medium"}>Manage Testimonials</h2>
        </CardHeader>
        <CardContent>
          <DataTable
            queryKey={"allTestimonials"}
            queryAction={getAllTestimonials}
            columns={columns}
            deleteFNAction={deleteManyTestimonialsByID}
            filterBy={"name"}
          />
        </CardContent>
      </Card>
    </div>
  );
};
export default Page;
