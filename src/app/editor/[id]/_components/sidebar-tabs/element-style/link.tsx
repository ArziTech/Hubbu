import { useEditor } from "@/components/providers/editor/context";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { Input } from "@/components/ui/input";

const Link = () => {
  const { state, dispatch } = useEditor();
  const { selectedElement } = state.editor;

  return (
    <AccordionItem value="appearance">
      <AccordionTrigger>Link</AccordionTrigger>
      <AccordionContent>
        <Input className={"w-full"}></Input>
      </AccordionContent>
    </AccordionItem>
  );
};
export default Link;
