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
  | null;

export type EditorElement = {
  id: string;
  styles: CSSProperties;
  name: string;
  type: EditorElementType;
  content: EditorElement[] | { innerText?: string };
};

export type Editor = {
  liveMode: boolean;
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
  liveMode: false,
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
  | { type: "TOGGLE_LIVE_MODE"; payload: { value: boolean } }
  | { type: "REDO" }
  | { type: "UNDO" }
  | { type: "LOAD_DATA"; payload: { elements: EditorElement[] } }
  | { type: "SET_WEBSITE_ID"; payload: { websiteId: string } };

export const defaultStyles: React.CSSProperties = {
  backgroundPosition: "center",
  objectFit: "cover",
  backgroundRepeat: "no-repeat",
  textAlign: "left",
  opacity: "100%",
};
