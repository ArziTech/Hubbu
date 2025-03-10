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

const Background = () => {
  const { state } = useEditor();
  const { selectedElement } = state.editor;
  return (
    <AccordionItem value="layout">
      <AccordionTrigger>Background</AccordionTrigger>
      <AccordionContent>
        <div className="flex w-full gap-1">
          {/*  Background Image */}
          {/*  Background color */}
          {/*  Background size & repeat -> select */}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
export default Background;
