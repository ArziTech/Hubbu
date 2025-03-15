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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { handleStyleChange } from "@/components/providers/editor/events";
import { Slider } from "@/components/ui/slider";

const Layout = () => {
  const { state, dispatch } = useEditor();
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
        <div className="space-y-2">
          <span>z index</span>
          <Select
            defaultValue={selectedElement.styles.zIndex?.toString() || "0"}
            onValueChange={(e) =>
              handleStyleChange(
                { id: "zIndex", value: e },
                selectedElement,
                dispatch,
              )
            }
          >
            <SelectTrigger className="w-full">
              {/* TODO: Change this into selected current */}

              <SelectValue placeholder="0" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">0</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <span>Padding</span>
          <div className="flex w-full gap-2">
            <Input placeholder={"0 px"} name={"padding-horizontal"}></Input>
            <Input placeholder={"0 px"} name={"padding-vertical"}></Input>
          </div>
        </div>
        <div>
          <span>Margin</span>
          <div className="flex w-full gap-2">
            <Input placeholder={"0 px"} name={"margin-horizontal"}></Input>
            <Input placeholder={"0 px"} name={"margin-vertical"}></Input>
          </div>
        </div>
        <div className="space-y-2">
          <span>Display</span>
          <Select
            defaultValue={selectedElement.styles.zIndex?.toString() || "block"}
            onValueChange={(e) =>
              handleStyleChange(
                { id: "display", value: e },
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
              <SelectItem value="block">block</SelectItem>
              <SelectItem value="hidden">hidden</SelectItem>
              <SelectItem value="flex">flex</SelectItem>
              <SelectItem value="inline">inline</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <span>Overflow</span>
          <Select
            defaultValue={
              selectedElement.styles.zIndex?.toString() || "visible"
            }
            onValueChange={(e) => {
              handleStyleChange(
                { id: "overflowX", value: e },
                selectedElement,
                dispatch,
              );
              handleStyleChange(
                { id: "overflowY", value: e },
                selectedElement,
                dispatch,
              );
            }}
          >
            <SelectTrigger className="w-full">
              {/* TODO: Change this into selected current */}
              <SelectValue placeholder="auto" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="auto">auto</SelectItem>
              <SelectItem value="hidden">hidden</SelectItem>
              <SelectItem value="clip">clip</SelectItem>
              <SelectItem value="visible">visible</SelectItem>
              <SelectItem value="scroll">scroll</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
export default Layout;
