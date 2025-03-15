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
    <AccordionItem value="layout">
      <AccordionTrigger>Background</AccordionTrigger>
      <AccordionContent>
        <div className="flex w-full gap-1">
          {/*  Background Image */}
          {/*  Background color */}
          {/*  Background size & repeat -> select */}
        </div>
        <div className="flex w-full items-center gap-2">
          <Input
            type={"color"}
            className={
              "aspect-square w-fit overflow-hidden rounded-md border-2 !p-0"
            }
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
          <span>#EEEEEE</span>
        </div>
        <div className="space-y-2">
          <span>Display</span>
          <Select
            defaultValue={
              selectedElement.styles.backgroundSize?.toString() || "auto"
            }
            onValueChange={(e) =>
              handleStyleChange(
                { id: "backgroundSize", value: e },
                selectedElement,
                dispatch,
              )
            }
          >
            <SelectTrigger className="w-full">
              {/* TODO: Change this into selected current */}

              <SelectValue placeholder="display" />
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
        <div className="grid w-full place-content-center rounded-md bg-primary py-2 text-white">
          Select an Image
        </div>
        <div className="space-y-2">
          <span>Repeat</span>
          <Select
            defaultValue={
              selectedElement.styles.backgroundRepeat?.toString() || "repeat"
            }
            onValueChange={(e) =>
              handleStyleChange(
                { id: "backgroundCover", value: e },
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
