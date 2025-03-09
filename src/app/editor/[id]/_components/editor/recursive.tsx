import React from "react";
import { EditorElement } from "@/components/providers/editor";
import Container from "./elements/container";
import TextComponent from "./elements/text-component";

interface Props {
  element: EditorElement;
}
const Recursive = ({ element }: Props) => {
  switch (element.type) {
    case "__body":
      return <Container element={element} />;
    case "container":
      return <Container element={element} />;
    case "image":
      break;
    case "link":
      break;
    case "text":
      return <TextComponent element={element} />;
    case "video":
      break;
    default:
      return null;
  }
};
export default Recursive;
