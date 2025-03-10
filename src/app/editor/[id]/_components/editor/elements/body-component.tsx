"use client";
import {
  defaultStyles,
  EditorElement,
  EditorElementType,
} from "@/components/providers/editor";
import ElementBadge from "./element-badge";
import Recursive from "@/app/editor/[id]/_components/editor/recursive";
import DeleteElementButton from "./delete-element-button";
import { useEditor } from "@/components/providers/editor/context";
import { clsx } from "clsx";
import { v4 as uuidv4 } from "uuid";
import { handleOnDrop } from "@/components/providers/editor/events";
type Props = {
  element: EditorElement;
};

const Container = ({ element }: Props) => {
  const { styles, type, id } = element;
  const { state, dispatch } = useEditor();
  const { name, content } = element;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: "CHANGE_CLICKED_ELEMENT",
      payload: {
        elementDetails: element,
      },
    });
  };

  return (
    <div
      style={styles}
      className={"group relative h-full p-4 transition-all"}
      onDrop={(e) => handleOnDrop(e, id, element, dispatch)}
      onDragOver={handleDragOver}
      draggable={type !== "__body"}
      onClick={handleOnClickBody}
    >
      <ElementBadge id={element.id} name={name} />
      <DeleteElementButton element={element} />
      {Array.isArray(content)
        ? content.map((childElement) => (
            <Recursive key={childElement.id} element={childElement} />
          ))
        : null}
      <div
        className={clsx("absolute inset-0 -z-10 cursor-none", {
          "border-4 border-yellow-400":
            state.editor.selectedElement.id === id && !state.editor.liveMode,
          "border-solid":
            state.editor.selectedElement.id === id && !state.editor.liveMode,
          "border-state-300 border-[1px] border-dashed": !state.editor.liveMode,
        })}
      ></div>
    </div>
  );
};
export default Container;
