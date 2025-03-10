"use client";
import { EditorElement } from "@/components/providers/editor";
import { useEditor } from "@/components/providers/editor/context";
import ElementBadge from "./element-badge";
import DeleteElementButton from "./delete-element-button";
import { clsx } from "clsx";
import Link from "next/link";

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
      className={clsx("relative w-full p-[2px] text-[16px] transition-all", {
        "!border-solid border-blue-500":
          state.editor.selectedElement.id === props.element.id,
        "border-[1px] border-dashed border-slate-300": !state.editor.liveMode, // TODO: change this into editor.showBorder
      })}
    >
      <ElementBadge
        id={props.element.id}
        name={props.element.name}
      ></ElementBadge>
      <DeleteElementButton element={props.element}></DeleteElementButton>
      {state.editor.previewMode || state.editor.liveMode ? (
        !Array.isArray(props.element.content) &&
        (state.editor.previewMode || state.editor.liveMode) && (
          <Link href={props.element.content.href || "#"}>
            {props.element.content.innerText}
          </Link>
        )
      ) : (
        <span
          suppressContentEditableWarning={true}
          contentEditable={true}
          onBlur={(e) => {
            const spanElement = e.target as HTMLSpanElement;
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
      )}
    </div>
  );
};
export default TextComponent;
