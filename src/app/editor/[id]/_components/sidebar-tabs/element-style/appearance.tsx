"use client";
import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEditor } from "@/components/providers/editor/context";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { handleStyleChange } from "@/components/providers/editor/events";

const Appearance = () => {
  const { state, dispatch } = useEditor();
  const { selectedElement } = state.editor;

  return (
    <AccordionItem value="appearance">
      <AccordionTrigger>Appearance</AccordionTrigger>
      <AccordionContent></AccordionContent>
    </AccordionItem>
  );
};
export default Appearance;
