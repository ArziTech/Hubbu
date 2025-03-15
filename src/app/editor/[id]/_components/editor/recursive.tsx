import React from "react";
import { EditorElement } from "@/components/providers/editor";
import ContainerComponent from "./elements/container-component";
import TextComponent from "./elements/text-component";
import VideoComponent from "./elements/video-component";
import BodyComponent from "./elements/body-component";

interface Props {
  element: EditorElement;
}
const Recursive = ({ element }: Props) => {
  switch (element.type) {
    case "__body":
      return <BodyComponent element={element} />;
    case "container":
      return <ContainerComponent element={element} />;
    case "image":
      break;
    case "link":
      break;
    case "background":
      break;
    case "section":
      break;
    case "text":
      return <TextComponent element={element} />;
    case "video":
      return <VideoComponent element={element} />;
    default:
      return null;
  }
};
export default Recursive;
