import { CSSProperties } from "react";

export type DeviceType = "DESKTOP" | "MOBILE";

export type EditorElementType =
  | "text"
  | "container"
  | "section"
  | "link"
  | "video"
  | "__body"
  | "image"
  | "background"
  | null;

export type EditorElement = {
  id: string;
  styles: CSSProperties;
  name: string;
  type: EditorElementType;
  content:
    | EditorElement[]
    | { innerText?: string; src?: string; videoTitle?: string; href?: string };
};

export type Editor = {
  elements: EditorElement[];
  selectedElement: EditorElement;
  device: DeviceType;
  previewMode: boolean;
  websiteId: string;
};

export interface EditorState {
  editor: Editor;
  history: Editor[];
  currentIndex: number;
}

export const nullElement: EditorElement = {
  id: "",
  content: [],
  name: "",
  type: null,
  styles: {},
};

const initialEditorState: Editor = {
  elements: [
    {
      content: [],
      id: "__body",
      name: "Body",
      styles: {},
      type: "__body",
    },
  ],
  selectedElement: nullElement,
  device: "DESKTOP",
  previewMode: false,
  websiteId: "",
};

export const initialState: EditorState = {
  editor: initialEditorState,
  currentIndex: 0,
  history: [initialEditorState],
};

export type Action =
  | {
      type: "ADD_ELEMENT";
      payload: {
        containerId: string;
        elementDetails: EditorElement;
      };
    }
  | { type: "UPDATE_ELEMENT"; payload: { elementDetails: EditorElement } }
  | { type: "DELETE_ELEMENT"; payload: { elementDetails: EditorElement } }
  | {
      type: "CHANGE_CLICKED_ELEMENT";
      payload: {
        elementDetails: EditorElement;
      };
    }
  | { type: "CHANGE_DEVICE"; payload: { device: DeviceType } }
  | { type: "TOGGLE_PREVIEW_MODE"; payload: { value: boolean } }
  | { type: "REDO" }
  | { type: "UNDO" }
  | { type: "LOAD_DATA"; payload: { elements: EditorElement[] } }
  | { type: "SET_WEBSITE_ID"; payload: { websiteId: string } };

export const defaultStyles: React.CSSProperties = {
  overflowX: "visible",
  overflowY: "visible",
  position: "static",
  paddingLeft: "16px",
  paddingRight: "16px",
  paddingTop: "16px",
  paddingBottom: "16px",
  marginLeft: "0",
  marginRight: "0",
  marginTop: "0",
  marginBottom: "0",
  display: "block",
  opacity: "100%",
  width: "100%",
  height: "fit-content",
};
