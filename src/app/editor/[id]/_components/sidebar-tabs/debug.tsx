"use client";
import React from "react";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { TabsContent } from "@/components/ui/tabs";
import { useEditor } from "@/components/providers/editor/context";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Debug = () => {
  const { state } = useEditor();
  return (
    <TabsContent value={"debug"}>
      <SheetHeader className={"ms-16 ps-4 text-left"}>
        <SheetTitle>Debug</SheetTitle>
        <SheetDescription>Get started with your website</SheetDescription>
      </SheetHeader>
      {/* tidy up this into nice look */}
      <Accordion type={"multiple"}>
        <ScrollArea className={"ms-16 h-[1000px] w-[335px] px-4"}>
          <AccordionItem value={"raw-json"}>
            <AccordionTrigger>Raw JSON</AccordionTrigger>
            <AccordionContent>
              <div className={"w-full"}>
                <pre className="text-sm">
                  &#34;state&#34;: {JSON.stringify(state, null, 2)}
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>
        </ScrollArea>
      </Accordion>
    </TabsContent>
  );
};
export default Debug;
