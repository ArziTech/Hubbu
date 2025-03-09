import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const Assets = () => {
  return (
    <TabsContent value={"assets"}>
      <SheetHeader className={"ms-16 ps-4 text-left"}>
        <SheetTitle>Assets</SheetTitle>
        <SheetDescription>Get started with your website</SheetDescription>
      </SheetHeader>
      {/* get media bucket from database, that related with this website or user*/}
    </TabsContent>
  );
};
export default Assets;
