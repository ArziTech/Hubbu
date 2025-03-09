"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useEditor } from "@/components/providers/editor/context";

interface Props {
  name: string;
}
const ElementBadge = ({ name }: Props) => {
  const { state } = useEditor();
  const isShowBadge = !state.editor.liveMode || !state.editor.previewMode;
  return (
    <Badge
      className={cn(
        "absolute -left-px -top-6 rounded-none rounded-t-lg",
        isShowBadge && "hidden",
      )}
    >
      {name}
    </Badge>
  );
};
export default ElementBadge;
