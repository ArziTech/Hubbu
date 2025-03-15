"use client";
import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEditor } from "@/components/providers/editor/context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { handleStyleChange } from "@/components/providers/editor/events";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlignCenterHorizontal,
  AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeStart,
  AlignHorizontalJustifyCenter,
  AlignHorizontalSpaceBetween,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
  StretchVertical,
} from "lucide-react";

const Flex = () => {
  const { state, dispatch } = useEditor();
  const { selectedElement } = state.editor;
  return (
    <AccordionItem value="border">
      <AccordionTrigger>Flex</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2">
          <span>Direction</span>
          <Select
            defaultValue={
              selectedElement.styles.flexDirection?.toString() || "row"
            }
            onValueChange={(e) =>
              handleStyleChange(
                { id: "flexDirection", value: e },
                selectedElement,
                dispatch,
              )
            }
          >
            <SelectTrigger className="w-full">
              {/* TODO: Change this into selected current */}
              <SelectValue placeholder="row" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="row">row</SelectItem>
              <SelectItem value="row-reverse">row reverse</SelectItem>
              <SelectItem value="columng">column</SelectItem>
              <SelectItem value="column-reverse">column reverse</SelectItem>
              <SelectItem value="initial">initial</SelectItem>
              <SelectItem value="inherit">inherit</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <span>Gap</span>
          <Input
            type={"number"}
            placeholder={"0"}
            defaultValue={selectedElement.styles.gap?.toString() || "0"}
          />
        </div>
        <div className="w-full space-y-1">
          <span>Justify Content</span>
          {/* TODO: add tooltip */}
          <Tabs
            defaultValue="account"
            className="w-full"
            onChange={(e) => {
              return;
              // handleStyleChange({
              //   id: "justifyContent",
              //   // value: e.target.
              // })
            }}
          >
            <TabsList className={"flex w-full justify-between gap-1"}>
              <TabsTrigger
                value="justifyStart"
                className={
                  "flex h-[28px] w-full items-center gap-2 rounded-lg border ps-2"
                }
              >
                <AlignHorizontalDistributeStart size={12} />
              </TabsTrigger>
              <TabsTrigger
                value="justifyCenter"
                className={
                  "flex h-[28px] w-full items-center gap-2 rounded-lg border ps-2"
                }
              >
                <AlignHorizontalJustifyCenter size={12} />
              </TabsTrigger>
              <TabsTrigger
                value="justifyEnd"
                className={
                  "flex h-[28px] w-full items-center gap-2 rounded-lg border ps-2"
                }
              >
                <AlignHorizontalDistributeEnd size={12} />
              </TabsTrigger>
              <TabsTrigger
                value="spaceBetween"
                className={
                  "flex h-[28px] w-full items-center gap-2 rounded-lg border ps-2"
                }
              >
                <AlignHorizontalSpaceBetween size={12} />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="w-full space-y-1">
          <span>Align Items</span>
          {/* TODO: add tooltip */}
          <Tabs
            defaultValue="account"
            className="w-full"
            onChange={(e) => {
              return;
              // handleStyleChange({
              //   id: "justifyContent",
              //   // value: e.target.
              // })
            }}
          >
            <TabsList className={"flex w-full justify-between gap-1"}>
              <TabsTrigger
                value="flexStart"
                className={
                  "flex h-[28px] w-full items-center gap-2 rounded-lg border ps-2"
                }
              >
                <AlignVerticalJustifyStart size={12} />
              </TabsTrigger>
              <TabsTrigger
                value="flexEnd"
                className={
                  "flex h-[28px] w-full items-center gap-2 rounded-lg border ps-2"
                }
              >
                <AlignVerticalJustifyEnd size={12} />
              </TabsTrigger>
              <TabsTrigger
                value="center"
                className={
                  "flex h-[28px] w-full items-center gap-2 rounded-lg border ps-2"
                }
              >
                <AlignVerticalJustifyCenter size={12} />
              </TabsTrigger>
              <TabsTrigger
                value="stretch"
                className={
                  "flex h-[28px] w-full items-center gap-2 rounded-lg border ps-2"
                }
              >
                <StretchVertical size={12} />
              </TabsTrigger>
              <TabsTrigger
                value="baseline"
                className={
                  "flex h-[28px] w-full items-center gap-2 rounded-lg border ps-2"
                }
              >
                <AlignCenterHorizontal size={12} />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
export default Flex;
