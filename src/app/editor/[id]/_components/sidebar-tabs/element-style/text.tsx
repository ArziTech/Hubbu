import { useEditor } from "@/components/providers/editor/context";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { Input } from "@/components/ui/input";

const Text = () => {
  const { state, dispatch } = useEditor();
  const { selectedElement } = state.editor;

  return (
    <AccordionItem value="appearance">
      <AccordionTrigger>Text</AccordionTrigger>
      <AccordionContent>
        {!Array.isArray(selectedElement.content) ? (
          <Input
            className={"w-full"}
            value={selectedElement.content.innerText}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_ELEMENT",
                payload: {
                  elementDetails: {
                    ...selectedElement,
                    content: {
                      ...selectedElement.content,
                      innerText: e.target.value,
                    },
                  },
                },
              });
            }}
          />
        ) : null}
      </AccordionContent>
    </AccordionItem>
  );
};
export default Text;
