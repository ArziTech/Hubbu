"use client";
import { EditorElement } from "@/components/providers/editor";

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
