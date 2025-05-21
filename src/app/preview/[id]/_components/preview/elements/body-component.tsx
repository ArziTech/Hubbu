"use client";
import { EditorElement } from "@/components/providers/editor";
import ElementBadge from "./element-badge";
import Recursive from "@/app/preview/[id]/_components/preview/recursive";
import DeleteElementButton from "./delete-element-button";
import { useEditor } from "@/components/providers/editor/context";
import { clsx } from "clsx";
import { handleOnDrop } from "@/components/providers/editor/events";
type Props = {
  element: EditorElement;
};

const Container = ({ element }: Props) => {
  const { styles, content } = element;
  return (
    <div style={styles} className={"group relative h-full transition-all"}>
      {Array.isArray(content)
        ? content.map((childElement) => (
            <Recursive key={childElement.id} element={childElement} />
          ))
        : null}
    </div>
  );
};
export default Container;
