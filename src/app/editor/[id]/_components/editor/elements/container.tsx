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
type Props = {
  element: EditorElement;
};

const Container = ({ element }: Props) => {
  const { styles, type, id } = element;
  const { state, dispatch } = useEditor();
  const { name, content } = element;

  const handleOnDrop = (e: React.DragEvent, id: string) => {
    e.stopPropagation();
    const componentType = e.dataTransfer.getData(
      "componentType",
    ) as EditorElementType;

    switch (componentType) {
      case "text":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              id: uuidv4(),
              name: "Text",
              type: "text",
              styles: {
                color: "black",
                ...defaultStyles,
              },
              content: {
                innerText: "Text element",
              },
            },
          },
        });
        break;
      case "container":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              id: uuidv4(),
              name: "Container",
              type: "container",
              content: [],
              styles: {
                color: "black",
                ...defaultStyles,
              },
            },
          },
        });
        break;
      default:
        break;
    }
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent, type: string) => {
    if (type === "__body") return;
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
      className={clsx("group relative p-4 transition-all", {
        "w-full max-w-full": type === "container",
        "h-fit": type === "container",
        "h-full": type === "__body",
        "border-blue-500":
          state.editor.selectedElement.id === id &&
          !state.editor.liveMode &&
          state.editor.selectedElement.type !== "__body",
        "!border-4 border-yellow-400":
          state.editor.selectedElement.id === id &&
          !state.editor.liveMode &&
          state.editor.selectedElement.type === "__body",
        "border-solid":
          state.editor.selectedElement.id === id && !state.editor.liveMode,
        "border-state-300 border-[1px] border-dashed": !state.editor.liveMode,
      })}
      onDrop={(e) => handleOnDrop(e, id)}
      onDragOver={handleDragOver}
      draggable={type !== "__body"}
      onDragStart={(e) => handleDragStart(e, "container")}
      onClick={handleOnClickBody}
    >
      <ElementBadge name={name} />
      <DeleteElementButton element={element} />
      {Array.isArray(content)
        ? content.map((childElement) => (
            <Recursive key={childElement.id} element={childElement} />
          ))
        : null}
    </div>
  );
};
export default Container;
