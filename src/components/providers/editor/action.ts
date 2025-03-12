import { Action, EditorElement } from "@/components/providers/editor/index";

export function AddAnElement(
  editorArray: EditorElement[],
  action: Action,
): EditorElement[] {
  if (action.type !== "ADD_ELEMENT") {
    throw new Error("You've passing the wrong action");
  }
  return editorArray.map((item) => {
    if (item.id === action.payload.containerId && Array.isArray(item.content)) {
      return {
        ...item,
        content: [...item.content, action.payload.elementDetails],
      };
    } else if (item.content && Array.isArray(item.content)) {
      return {
        ...item,
        content: AddAnElement(item.content, action),
      };
    }
    return item;
  });
}

export function UpdateAnElement(
  editorArray: EditorElement[],
  action: Action,
): EditorElement[] {
  if (action.type !== "UPDATE_ELEMENT") {
    throw new Error("You've passing the wrong action");
  }
  return editorArray.map((item) => {
    if (item.id === action.payload.elementDetails.id) {
      return {
        id: action.payload.elementDetails.id,
        content: { ...action.payload.elementDetails.content },
        styles: {
          ...action.payload.elementDetails.styles,
        },
        name: action.payload.elementDetails.name,
        type: action.payload.elementDetails.type,
      };
    } else if (item.content && Array.isArray(item.content)) {
      return {
        ...item,
        content: UpdateAnElement(item.content, action),
      };
    }
    return item;
  });
}

export function DeleteAnElement(
  editorArray: EditorElement[],
  action: Action,
): EditorElement[] {
  if (action.type !== "DELETE_ELEMENT") {
    throw new Error("You've passing the wrong action");
  }
  return editorArray.filter((item) => {
    if (item.id === action.payload.elementDetails.id) {
      return false;
    } else if (item.content && Array.isArray(item.content)) {
      item.content = DeleteAnElement(item.content, action);
    }
    return true;
  });
}
