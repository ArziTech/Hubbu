"use client";
import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEditor } from "@/components/providers/editor/context";
import { Slider } from "@/components/ui/slider";

const Appearance = () => {
  const { state, dispatch } = useEditor();
  const { selectedElement } = state.editor;
  const handleOnChangeValue = (value: number[]) => {
    const newOpacity = value[0]; // Extract the first value from the array
    dispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        elementDetails: {
          ...selectedElement,
          styles: {
            opacity: newOpacity,
          },
        },
      },
    });
  };

  return (
    <AccordionItem value="appearance">
      <AccordionTrigger>Appearance</AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col gap-4">
          <label htmlFor="opacity-slider" className="text-sm font-medium">
            Opacity: {selectedElement.styles.opacity}
          </label>
          <Slider
            id="opacity-slider"
            value={[100]} // Convert opacity to a number and wrap in an array
            min={0}
            max={100}
            step={1}
            onValueChange={handleOnChangeValue}
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
export default Appearance;
