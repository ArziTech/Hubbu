"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useEditor } from "@/components/providers/editor/context";

interface Props {
  id: string;
  name: string;
}
const ElementBadge = ({ name, id }: Props) => {
  const { state } = useEditor();
  const showBadge = !state.editor.previewMode;
  return (
    <div
      className={cn(
        "absolute -left-px -top-6 rounded-none rounded-t-lg bg-primary px-2 py-1 text-xs text-white",
        state.editor.selectedElement.id !== id || !showBadge ? "hidden" : "",
      )}
    >
      {name}
    </div>
  );
};
export default ElementBadge;
