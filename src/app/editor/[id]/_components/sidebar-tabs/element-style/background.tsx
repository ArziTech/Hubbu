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
import { handleStyleChange } from "@/components/providers/editor/events";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Background = () => {
  const { state, dispatch } = useEditor();
  const { selectedElement } = state.editor;
  return (
    <AccordionItem value="background">
      <AccordionTrigger>Background</AccordionTrigger>
      <AccordionContent className={"space-y-3"}>
        <div className={"space-y-1"}>
          <span>Color</span>
          <div className="flex w-full items-center gap-2">
            <Input
              type={"color"}
              className={
                "aspect-square w-fit overflow-hidden rounded-md border-2 !p-0"
              }
              value={selectedElement.styles.backgroundColor}
              onChange={(e) => {
                handleStyleChange(
                  {
                    id: "backgroundColor",
                    value: e.target.value,
                  },
                  selectedElement,
                  dispatch,
                );
              }}
            />
            <span>{selectedElement.styles.backgroundColor?.toUpperCase()}</span>
          </div>
        </div>
        <div className="space-y-1">
          <span>Background Size</span>
          <Select
            defaultValue={"auto"}
            value={selectedElement.styles.backgroundSize?.toString()}
            onValueChange={(e) =>
              handleStyleChange(
                { id: "backgroundSize", value: e },
                selectedElement,
                dispatch,
              )
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="auto">auto</SelectItem>
              <SelectItem value="cover">cover</SelectItem>
              <SelectItem value="contain">contain</SelectItem>
              <SelectItem value="initial">initial</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* TODO: Change this into real button*/}
        <div className="space-y-1">
          <span>Image</span>
          <div className="grid w-full place-content-center rounded-md bg-primary py-2 text-white">
            Select an Image
          </div>
        </div>
        <div className="space-y-1">
          <span>Repeat</span>
          <Select
            value={
              selectedElement.styles.backgroundRepeat?.toString() || "repeat"
            }
            onValueChange={(e) =>
              handleStyleChange(
                { id: "backgroundRepeat", value: e },
                selectedElement,
                dispatch,
              )
            }
          >
            <SelectTrigger className="w-full">
              {/* TODO: Change this into selected current */}
              <SelectValue placeholder="repeat" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="repeat">repeat</SelectItem>
              <SelectItem value="repeat-x">repeat x</SelectItem>
              <SelectItem value="repeat-y">repeat y</SelectItem>
              <SelectItem value="no-repeat">no repeat</SelectItem>
              <SelectItem value="space">space</SelectItem>
              <SelectItem value="round">round</SelectItem>
              <SelectItem value="initial">initial</SelectItem>
              <SelectItem value="inherit">inherit</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
export default Background;
