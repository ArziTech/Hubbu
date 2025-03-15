import React, { ReactNode } from "react";
import { TabsContent } from "@/components/ui/tabs";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { EditorElementType } from "@/components/providers/editor";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Construction, Type } from "lucide-react";
import RenderPlaceholder from "./render-placeholder";

const AddElement = () => {
  const elements: {
    Icon: ReactNode;
    label: string;
    id: EditorElementType;
    group: "layout" | "elements"; // TODO: Change this
  }[] = [
    {
      Icon: <Type />,
      label: "Text",
      id: "text",
      group: "elements",
    },
    {
      Icon: <Construction />,
      label: "Image",
      id: "image",
      group: "elements",
    },
    {
      Icon: <Construction />,
      label: "Link",
      id: "link",
      group: "elements",
    },
    {
      Icon: <Construction />,
      label: "Video",
      id: "video",
      group: "elements",
    },
    {
      Icon: <Construction />,
      label: "BG",
      id: "background",
      group: "elements",
    },
    {
      Icon: <Construction />,
      label: "Section",
      id: "section",
      group: "elements",
    },
    {
      Icon: <Construction />,
      label: "Container",
      id: "container",
      group: "elements",
    },
  ];
  return (
    <TabsContent value={"add-element"}>
      <SheetHeader className={"ms-16 ps-4 text-left"}>
        <SheetTitle>Add an Element</SheetTitle>
        <SheetDescription>Get started with your website</SheetDescription>
      </SheetHeader>
      <div className={"ms-16 px-4"}>
        <Accordion type={"multiple"} defaultValue={["layout", "elements"]}>
          <AccordionItem value={"layout"}>
            <AccordionTrigger className={"!no-underline"}>
              Layout
            </AccordionTrigger>
            <AccordionContent className={"grid grid-cols-4 gap-2"}>
              {elements
                .filter((element) => element.group === "layout")
                .map((element) => (
                  <RenderPlaceholder key={element.id} {...element} />
                ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={"elements"}>
            <AccordionTrigger className={"!no-underline"}>
              Elements
            </AccordionTrigger>
            <AccordionContent className={"grid grid-cols-4 gap-2"}>
              {elements
                .filter((element) => element.group === "elements")
                .map((element) => (
                  <RenderPlaceholder key={element.id} {...element} />
                ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </TabsContent>
  );
};
export default AddElement;
