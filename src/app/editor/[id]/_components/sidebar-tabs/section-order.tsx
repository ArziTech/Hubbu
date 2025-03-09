import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const SectionOrder = () => {
  return (
    <TabsContent value={"section-order"}>
      <SheetHeader className={"ms-16 ps-4 text-left"}>
        <SheetTitle>Section Order</SheetTitle>
        <SheetDescription>Get started with your website</SheetDescription>
      </SheetHeader>
    </TabsContent>
  );
};
export default SectionOrder;
