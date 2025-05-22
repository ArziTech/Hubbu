"use client";
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useEditor } from "@/components/providers/editor/context";
import { cn } from "@/lib/utils";
import { EditorElement } from "@/components/providers/editor";
import { Triangle, Type } from "lucide-react";

const ElementLabel = ({
  element,
  className,
}: {
  element: EditorElement;
  className?: string;
}) => {
  const { dispatch } = useEditor();
  const handleOnClick = () => {
    dispatch({
      type: "CHANGE_CLICKED_ELEMENT",
      payload: {
        elementDetails: {
          ...element,
        },
      },
    });
  };
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg bg-gray-300 p-2 hover:bg-gray-400 active:bg-gray-100",
        className,
      )}
      onClick={handleOnClick}
    >
      {Array.isArray(element.content) ? (
        <Triangle size={12} className={"rotate-90"} />
      ) : null}
      {!Array.isArray(element.content) && element.type === "text" ? (
        <Type size={12} className={"rotate-90"} />
      ) : null}
      {element.name}
    </div>
  );
};

const EditableElements = () => {
  const { state } = useEditor();
  return (
    <TabsContent value={"editable-elements"}>
      <SheetHeader className={"ms-16 ps-4 text-left"}>
        <SheetTitle>Editable Elements</SheetTitle>
        <SheetDescription>Get started with your website</SheetDescription>
      </SheetHeader>
      <div className="ms-16 ps-4 text-left text-black">
        {state.editor.elements.map((element, index) => (
          <div key={index}>
            <ElementLabel element={element} />
            {Array.isArray(element.content) && (
              <div style={{ marginLeft: "20px" }}>
                {element.content.map((nestedElement, nestedIndex) => (
                  <ElementLabel key={nestedIndex} element={nestedElement} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </TabsContent>
  );
};
export default EditableElements;
