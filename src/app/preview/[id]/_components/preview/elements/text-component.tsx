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
  return (
    <span style={props.element.styles}>
      {!Array.isArray(props.element.content) && props.element.content.innerText}
    </span>
  );
};
export default TextComponent;
