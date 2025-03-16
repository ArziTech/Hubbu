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

const ContainerComponent = ({ element }: Props) => {
  const { styles, type, id } = element;
  const { state, dispatch } = useEditor();
  const { name, content } = element;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent, type: string) => {
    e.dataTransfer.setData("componentType", type);
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
      className={clsx(
        "group !relative h-full w-full transition-all",
        "border-state-300 border-[1px] border-dashed", // TODO: make it dynamic
        {
          "border-blue-500": state.editor.selectedElement.id === id,
          "border-solid": state.editor.selectedElement.id === id,
        },
      )}
      onDrop={(e) => handleOnDrop(e, id, element, dispatch)}
      onDragOver={handleDragOver}
      draggable
      onDragStart={(e) => handleDragStart(e, "container")}
      onClick={handleOnClickBody}
    >
      <ElementBadge id={element.id} name={name} />
      <DeleteElementButton element={element} />
      {Array.isArray(content)
        ? content.map((childElement) => (
            <Recursive key={childElement.id} element={childElement} />
          ))
        : null}
    </div>
  );
};
export default ContainerComponent;
