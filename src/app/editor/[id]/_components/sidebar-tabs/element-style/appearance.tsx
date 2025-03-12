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
      <AccordionContent>
        <div className="flex flex-col gap-4">
          <Label className="text-muted-foreground">Opacity</Label>
          <div className="flex items-center justify-end">
            <small className="p-2">
              {typeof selectedElement.styles?.opacity === "number"
                ? selectedElement.styles?.opacity
                : parseFloat(
                    (selectedElement.styles?.opacity || "0").replace("%", ""),
                  ) || 0}
              %
            </small>
          </div>
          <Slider
            onValueChange={(e) => {
              handleStyleChange(
                {
                  id: "opacity",
                  value: `${e[0]}%`,
                },
                selectedElement,
                dispatch,
              );
            }}
            defaultValue={[
              typeof selectedElement.styles?.opacity === "number"
                ? selectedElement.styles?.opacity
                : parseFloat(
                    (selectedElement.styles?.opacity || "0").replace("%", ""),
                  ) || 0,
            ]}
            max={100}
            step={1}
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
export default Appearance;
