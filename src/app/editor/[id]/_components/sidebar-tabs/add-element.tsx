import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const AddElement = () => {
  return (
    <TabsContent value={"add-element"}>
      <SheetHeader className={"ps-20 text-left"}>
        <SheetTitle>Add an Element</SheetTitle>
        <SheetDescription>Get started with your website</SheetDescription>
      </SheetHeader>
    </TabsContent>
  );
};
export default AddElement;
