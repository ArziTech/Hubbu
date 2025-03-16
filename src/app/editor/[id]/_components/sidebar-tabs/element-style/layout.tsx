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
      <AccordionContent className={"space-y-3"}>
        <div className="flex w-full">
          <div className={"flex items-center gap-2 rounded-lg border ps-2"}>
            <Label htmlFor={"width"} className={"text-gray-400"}>
              W
            </Label>
            <Input
              name={"width"}
              className={"w-full border-none"}
              value={selectedElement.styles.width || "100%"}
              onChange={(e) =>
                handleStyleChange(
                  {
                    id: "width",
                    value: e.target.value,
                  },
                  selectedElement,
                  dispatch,
                )
              }
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
              value={selectedElement.styles.height} // TODO: fix when the user delete all the input
              onChange={(e) => {
                if (e.target.value) {
                  handleStyleChange(
                    {
                      id: "height",
                      value: e.target.value,
                    },
                    selectedElement,
                    dispatch,
                  );
                }
              }}
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
          <div className="mt-2 flex w-full gap-2">
            <Input
              name={"padding-bottom"}
              value={selectedElement.styles.paddingBottom}
              onChange={(e) => {
                handleStyleChange(
                  {
                    id: "paddingBottom",
                    value: `${e.target.value}`,
                  },
                  selectedElement,
                  dispatch,
                );
              }}
            />
            <Input
              name={"padding-right"}
              value={selectedElement.styles.paddingRight}
              onChange={(e) => {
                handleStyleChange(
                  {
                    id: "paddingRight",
                    value: `${e.target.value}`,
                  },
                  selectedElement,
                  dispatch,
                );
              }}
            />
          </div>
          <div className="mt-2 flex w-full gap-2">
            <Input
              name={"padding-top"}
              value={selectedElement.styles.paddingTop}
              onChange={(e) => {
                handleStyleChange(
                  {
                    id: "paddingTop",
                    value: `${e.target.value}`,
                  },
                  selectedElement,
                  dispatch,
                );
              }}
            />
            <Input
              name={"padding-left"}
              value={selectedElement.styles.paddingLeft}
              onChange={(e) => {
                handleStyleChange(
                  {
                    id: "paddingLeft",
                    value: `${e.target.value}`,
                  },
                  selectedElement,
                  dispatch,
                );
              }}
            />
          </div>
        </div>
        <div>
          <span>Margin</span>
          <div className="mt-2 flex w-full gap-2">
            <Input
              name={"margin-bottom"}
              value={selectedElement.styles.marginBottom}
              onChange={(e) => {
                handleStyleChange(
                  {
                    id: "marginBottom",
                    value: `${e.target.value}`,
                  },
                  selectedElement,
                  dispatch,
                );
              }}
            />
            <Input
              name={"margin-right"}
              value={selectedElement.styles.marginRight}
              onChange={(e) => {
                handleStyleChange(
                  {
                    id: "marginRight",
                    value: `${e.target.value}`,
                  },
                  selectedElement,
                  dispatch,
                );
              }}
            />
          </div>
          <div className="mt-2 flex w-full gap-2">
            <Input
              name={"margin-top"}
              value={selectedElement.styles.marginTop}
              onChange={(e) => {
                handleStyleChange(
                  {
                    id: "marginTop",
                    value: `${e.target.value}`,
                  },
                  selectedElement,
                  dispatch,
                );
              }}
            />
            <Input
              name={"margin-left"}
              value={selectedElement.styles.marginLeft}
              onChange={(e) => {
                handleStyleChange(
                  {
                    id: "marginLeft",
                    value: `${e.target.value}`,
                  },
                  selectedElement,
                  dispatch,
                );
              }}
            />
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
          <div className={"flex items-center justify-between"}>
            <Label className="text-muted-foreground">Opacity</Label>
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
