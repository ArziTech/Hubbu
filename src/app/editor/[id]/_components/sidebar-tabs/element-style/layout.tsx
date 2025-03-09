"use client";
import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEditor } from "@/components/providers/editor/context";

const Layout = () => {
  const { state } = useEditor();
  const { selectedElement } = state.editor;
  return (
    <AccordionItem value="layout">
      <AccordionTrigger>Layout</AccordionTrigger>
      <AccordionContent>
        <div className="flex w-full gap-1">
          <div className={"flex items-center gap-2 rounded-lg border ps-2"}>
            <Label htmlFor={"width"} className={"text-gray-400"}>
              W
            </Label>
            <Input
              name={"width"}
              className={"w-full border-none"}
              value={selectedElement.styles.height}
            />
          </div>
          <div className={"flex items-center gap-2 rounded-lg border ps-2"}>
            <Label htmlFor={"height"} className={"text-gray-400"}>
              H
            </Label>
            <Input
              name={"height"}
              className={
                "w-full !border-none focus:border-none active:border-none"
              }
              value={selectedElement.styles.width}
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
export default Layout;
