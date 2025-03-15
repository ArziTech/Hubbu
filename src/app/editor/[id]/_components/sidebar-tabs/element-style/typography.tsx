"use client";
import { EditorElement } from "@/components/providers/editor";
import { useEditor } from "@/components/providers/editor/context";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/global/custom-icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  ArrowDownToLine,
  ArrowUpToLine,
  FoldVertical,
} from "lucide-react";

const Typography = () => {
  const { state, dispatch } = useEditor();
  const { selectedElement } = state.editor;
  const handleValueChange = (value: string) => {
    dispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        elementDetails: {
          ...selectedElement,
          styles: {
            fontFamily: value,
          },
        },
      },
    });
  };

  return (
    /* TODO: Check if it's an text element */
    <AccordionItem value="typography">
      <AccordionTrigger>Typography</AccordionTrigger>
      <AccordionContent className={"space-y-1"}>
        <Select onValueChange={handleValueChange}>
          <SelectTrigger className="w-full">
            {/* TODO: Change this into selected element font */}
            <SelectValue placeholder="Font Family" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="poppins">Poppins</SelectItem>
            <SelectItem value="nova-square">Nova Square</SelectItem>
            <SelectItem value="inter">Inter</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-1">
          <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-full">
              {/* TODO: Change this into selected element font */}
              <SelectValue placeholder="Font Family" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="regular">Regular</SelectItem>
              <SelectItem value="bold">Bold</SelectItem>
              <SelectItem value="black">Black</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-full">
              {/* TODO: Change this into selected element font */}
              <SelectValue placeholder="Font Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="16">16</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="24">24</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-full gap-1">
          <div className={"flex items-center gap-2 rounded-lg border ps-2"}>
            <Label htmlFor={"line-height"} className={"text-gray-400"}>
              <Icons.lineHeight className={"size-4"} />
            </Label>
            <Input
              name={"line-height"}
              className={"w-full border-none"}
              value={selectedElement.styles.height}
            />
          </div>
          <div className={"flex items-center gap-2 rounded-lg border ps-2"}>
            <Label htmlFor={"letter-spacing"} className={"text-gray-400"}>
              <Icons.letterSpacing className={"size-4"}></Icons.letterSpacing>
            </Label>
            <Input
              name={"letter-spacing"}
              className={
                "w-full !border-none focus:border-none active:border-none"
              }
              value={selectedElement.styles.width}
            />
          </div>
        </div>
        <div className="flex w-full gap-1">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className={"flex w-full justify-between gap-1"}>
              <TabsTrigger
                value="account"
                className={
                  "flex h-[28px] w-full items-center gap-2 rounded-lg border ps-2"
                }
              >
                <AlignLeft size={12} />
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className={
                  "flex h-[28px] w-full items-center gap-2 rounded-lg border ps-2"
                }
              >
                <AlignCenter size={12} />
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className={
                  "flex h-[28px] w-full items-center gap-2 rounded-lg border ps-2"
                }
              >
                <AlignRight size={12} />
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className={"flex w-full justify-between gap-1"}>
              <TabsTrigger
                value="account"
                className={
                  "flex h-[28px] w-full items-center gap-2 rounded-lg border ps-2"
                }
              >
                <ArrowUpToLine size={12} />
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className={
                  "flex h-[28px] w-full items-center gap-2 rounded-lg border ps-2"
                }
              >
                <FoldVertical size={12} />
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className={
                  "flex h-[28px] w-full items-center gap-2 rounded-lg border ps-2"
                }
              >
                <ArrowDownToLine size={12} />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex w-full items-center gap-2">
          <Input
            type={"color"}
            className={
              "aspect-square w-fit overflow-hidden rounded-md border-2 !p-0"
            }
          ></Input>
          <span>#EEEEEE</span>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
export default Typography;
