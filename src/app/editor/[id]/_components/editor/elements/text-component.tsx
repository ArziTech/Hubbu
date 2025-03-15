"use client";
import { EditorElement } from "@/components/providers/editor";
import { useEditor } from "@/components/providers/editor/context";
import ElementBadge from "./element-badge";
import DeleteElementButton from "./delete-element-button";
import { clsx } from "clsx";

type Props = {
  element: EditorElement;
};
const TextComponent = (props: Props) => {
  const { state, dispatch } = useEditor();
  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: "CHANGE_CLICKED_ELEMENT",
      payload: {
        elementDetails: props.element,
      },
    });
  };
  return (
    <div
      style={props.element.styles}
      draggable
      onClick={handleOnClickBody}
      className={clsx(
        "relative w-full p-[2px] text-[16px] transition-all",
        "border-[1px] border-dashed border-slate-300", // TODO: make this dynamic
        {
          "!border-solid border-blue-500":
            state.editor.selectedElement.id === props.element.id,
        },
      )}
    >
      <ElementBadge
        id={props.element.id}
        name={props.element.name}
      ></ElementBadge>
      <DeleteElementButton element={props.element}></DeleteElementButton>
      <span
        suppressContentEditableWarning={true}
        contentEditable={true}
        onBlur={(e) => {
          const spanElement = e.target as HTMLSpanElement;
          console.log(spanElement.innerText);
          dispatch({
            type: "UPDATE_ELEMENT",
            payload: {
              elementDetails: {
                ...props.element,
                content: { innerText: spanElement.innerText },
              },
            },
          });
        }}
      >
        {!Array.isArray(props.element.content) &&
          props.element.content.innerText}
      </span>
    </div>
  );
};
export default TextComponent;
