"use client";
import { useEditor } from "@/components/providers/editor/context";
import { EditorElement } from "@/components/providers/editor";
import { Trash } from "lucide-react";

type Props = {
  element: EditorElement;
};

const DeleteElementButton = ({ element }: Props) => {
  const { state, dispatch } = useEditor();

  const handleDeleteElement = () => {
    console.log(`deleting ${element.id}`);
    dispatch({
      type: "DELETE_ELEMENT",
      payload: { elementDetails: element },
    });
  };

  const shouldntRenderButton =
    !state.editor.previewMode &&
    state.editor.selectedElement.id !== element.id &&
    element.type !== "__body";

  if (shouldntRenderButton) return null;

  return (
    <div className="absolute -right-px -top-6 rounded-none rounded-t-lg bg-destructive px-2 py-1 text-xs font-bold">
      <Trash
        size={16}
        onClick={handleDeleteElement}
        className="cursor-pointer text-white"
      />
    </div>
  );
};

export default DeleteElementButton;
