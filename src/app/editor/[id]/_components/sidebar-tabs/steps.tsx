import React from "react";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { TabsContent } from "@/components/ui/tabs";

const Steps = () => {
  return (
    <TabsContent value={"steps"}>
      <SheetHeader className={"ms-16 ps-4 text-left"}>
        <SheetTitle>Steps</SheetTitle>
        <SheetDescription>Get started with your website</SheetDescription>
      </SheetHeader>
    </TabsContent>
  );
};
export default Steps;
