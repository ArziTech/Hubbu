"use client";
import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Border = () => {
  return (
    <AccordionItem value="border">
      <AccordionTrigger>Border</AccordionTrigger>
      <AccordionContent>
        <div className="flex w-full gap-1">
          {/* Add border + */}
          {/* Border color */}
          {/* Border size  */}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
export default Border;
