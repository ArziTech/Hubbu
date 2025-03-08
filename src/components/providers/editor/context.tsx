"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { editorReducer } from "@/components/providers/editor/reducer";
import {
  DeviceType,
  EditorState,
  initialState,
} from "@/components/providers/editor/index";
import { Action as EditorAction } from "@/components/providers/editor/index";
import { Website } from "@prisma/client";

export interface EditorContextData {
  device: DeviceType;
  previewMode: boolean;
  setDevice: (device: DeviceType) => void;
  setPreviewMode: (previewMode: boolean) => void;
}

export const EditorContext = createContext<{
  state: EditorState;
  dispatch: Dispatch<EditorAction>;
  websiteId: string;
  websiteDetails: Website | null;
}>({
  state: initialState,
  dispatch: () => undefined,
  websiteId: "",
  websiteDetails: null,
});

interface EditorProps {
  children: ReactNode;
  websiteId: string;
  websiteDetails: Website;
}

export const EditorProvider = ({
  children,
  websiteDetails,
  websiteId,
}: EditorProps) => {
  const [state, dispatch] = useReducer(editorReducer, initialState);
  return (
    <EditorContext.Provider
      value={{
        state,
        dispatch,
        websiteId: websiteId,
        websiteDetails: websiteDetails,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor hooks must be used in Editor Provider");
  }
  return context;
};
