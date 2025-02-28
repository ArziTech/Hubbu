import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/table/table-data";
import { columns } from "./column";
import { deleteManyCouponsByID, getAllCoupon } from "@/actions/coupon";

const Page = () => {
  return (
    <div className={"size-full pt-12"}>
      <Card className={"text-text"}>
        <CardHeader>
          <h2 className={"text-xl font-medium"}>Manage Coupons</h2>
        </CardHeader>
        <CardContent>
          <DataTable
            queryKey={"all coupons"}
            queryAction={getAllCoupon}
            columns={columns}
            deleteFNAction={deleteManyCouponsByID}
            filterBy={"code"}
          />
        </CardContent>
      </Card>
    </div>
  );
};
export default Page;
