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
import React, { useEffect, useState } from "react";
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
import { useQuery } from "@tanstack/react-query";
import { getAllFonts } from "@/actions/google-font";
import { handleStyleChange } from "@/components/providers/editor/events";
import { fonts } from "@/constant/google-font";

const Typography = () => {
  const { state, dispatch } = useEditor();
  const { selectedElement } = state.editor;

  // const { data: result } = useQuery({
  //   queryKey: ["google-font"],
  //   queryFn: getAllFonts,
  // });
  //
  // if (!result?.data || result.status === "ERROR") {
  //   console.log({ result });
  // }

  return (
    /* TODO: Check if it's an text element */
    <AccordionItem value="typography">
      <AccordionTrigger>Typography</AccordionTrigger>
      <AccordionContent className={"space-y-1"}>
        <Select
          onValueChange={async (value) => {
            console.time("Total Execution Time");

            // if (!result || !result.data) {
            //   console.timeEnd("Total Execution Time");
            //   return;
            // }

            console.time("Find File");
            const findFile = fonts.find(
              (font): boolean => font.family === value,
            );
            console.timeEnd("Find File");

            if (!findFile) {
              console.timeEnd("Total Execution Time");
              return;
            }

            // TODO: check here. if the selected font has current active font variant
            // If it doesn't have, then change the font variant
            const fontVariant =
              selectedElement.styles.fontVariant?.toString() || "regular";

            console.time("Find Font File");
            const fontFile = findFile.files[fontVariant];
            console.timeEnd("Find Font File");

            console.time("Load Font");
            const font = new FontFace(value, `url(${fontFile})`);
            const loadedFont = await font.load();
            document.fonts.add(loadedFont);
            console.timeEnd("Load Font");

            console.time("Dispatch Update");
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
            console.timeEnd("Dispatch Update");

            console.timeEnd("Total Execution Time");
          }}
          value={selectedElement.styles.fontFamily}
          defaultValue={"poppins"}
        >
          <SelectTrigger className="w-full">
            {/* TODO: Change this into selected element font */}
            <SelectValue placeholder="Font Family" defaultValue={"poppins"} />
          </SelectTrigger>
          <SelectContent>
            {/*<SelectItem value="poppins">Poppins</SelectItem>*/}
            {/*<SelectItem value="nova-square">Nova Square</SelectItem>*/}
            {/*<SelectItem value="inter">Inter</SelectItem>*/}
            {fonts.map((font, index) => (
              <SelectItem key={index} value={font.family}>
                {font.family}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex gap-1">
          <Select
            onValueChange={(value) =>
              handleStyleChange(
                {
                  id: "fontWeight",
                  value: value,
                },
                selectedElement,
                dispatch,
              )
            }
            defaultValue={"100"}
            value={selectedElement.styles.fontWeight?.toString()}
          >
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
          <Select
            onValueChange={(value) =>
              handleStyleChange(
                {
                  id: "fontSize",
                  value: value,
                },
                selectedElement,
                dispatch,
              )
            }
          >
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
              onChange={(event) => {
                handleStyleChange(
                  {
                    id: "lineHeight",
                    value: event.target.value,
                  },
                  selectedElement,
                  dispatch,
                );
              }}
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
              onChange={(event) => {
                handleStyleChange(
                  {
                    id: "letterSpacing",
                    value: event.target.value,
                  },
                  selectedElement,
                  dispatch,
                );
              }}
            />
          </div>
        </div>
        <div className="flex w-full gap-1">
          <Tabs
            defaultValue="account"
            className="w-[400px]"
            onChange={(event) => {
              // handleStyleChange({
              //   id: 'alignLeft'
              //   value: event.target.ge
              // })
            }}
          >
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
