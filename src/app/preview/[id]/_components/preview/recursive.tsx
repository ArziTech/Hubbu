import React from "react";
import { EditorElement } from "@/components/providers/editor";
import BodyComponent from "@/app/preview/[id]/_components/preview/elements/body-component";
import ContainerComponent from "@/app/preview/[id]/_components/preview/elements/container-component";
import TextComponent from "@/app/preview/[id]/_components/preview/elements/text-component";
import VideoComponent from "@/app/preview/[id]/_components/preview/elements/video-component";
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
