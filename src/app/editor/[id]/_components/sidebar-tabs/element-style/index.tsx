"use client";
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useEditor } from "@/components/providers/editor/context";
import { nullElement } from "@/components/providers/editor";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "./layout";
import Typography from "./typography";
import Appearance from "./appearance";

const ElementStyle = () => {
  const { state, dispatch } = useEditor();
  const selectedElement = state.editor.selectedElement;
  return (
    <TabsContent value={"element-style"} className={"mx-4"}>
      <SheetHeader className={"ms-16 text-left"}>
        <SheetTitle>Style</SheetTitle>
        <SheetDescription>Get started with your website</SheetDescription>
      </SheetHeader>
      <div className="ms-16 text-left text-black">
        {selectedElement !== nullElement ? (
          <Accordion type="multiple">
            <Typography />
            <Layout />
            <Appearance />
          </Accordion>
        ) : (
          <p>No element selected</p>
        )}
      </div>
    </TabsContent>
  );
};
export default ElementStyle;
