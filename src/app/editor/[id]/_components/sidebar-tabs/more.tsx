import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const More = () => {
  return (
    <TabsContent value={"more"}>
      <SheetHeader className={"ms-16 ps-4 text-left"}>
        <SheetTitle>More</SheetTitle>
        <SheetDescription>Get started with your website</SheetDescription>
      </SheetHeader>
    </TabsContent>
  );
};
export default More;
