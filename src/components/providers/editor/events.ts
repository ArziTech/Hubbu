import {
  defaultStyles,
  EditorElement,
  EditorElementType,
} from "@/components/providers/editor/index";
import { v4 as uuidv4 } from "uuid";
import { Action as EditorAction } from "@/components/providers/editor/index";

export const handleOnDrop = (
  e: React.DragEvent,
  id: string,
  element: EditorElement,
  dispatch: (value: EditorAction) => void, // Pass dispatch as an argument
) => {
  e.stopPropagation();

  if (!Array.isArray(element.content)) return;

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
    case "video":
      dispatch({
        type: "ADD_ELEMENT",
        payload: {
          containerId: id,
          elementDetails: {
            id: uuidv4(),
            name: "Video",
            type: "video",
            content: {
              src: `https://www.youtube.com/embed/6omuUOZcWL0?si=U49e6tIxxxEYgisj`,
            },
            styles: {},
          },
        },
      });
      break;
    default:
      break;
  }
};

export const handleStyleChange = (
  e: { id: string; value: string },
  element: EditorElement,
  dispatch: (value: EditorAction) => void,
) => {
  const styleSetting = e.id;
  const value = e.value;

  const styleObject = {
    [styleSetting]: value,
  };

  dispatch({
    type: "UPDATE_ELEMENT",
    payload: {
      elementDetails: {
        ...element,
        styles: {
          ...element.styles,
          ...styleObject,
        },
      },
    },
  });
};
