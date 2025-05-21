import React from "react";
import {
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu";

const RightClickOptions = () => {
  return (
    <ContextMenuContent>
      <ContextMenuItem>Undo</ContextMenuItem>
      <ContextMenuItem>Redo</ContextMenuItem>
    </ContextMenuContent>
  );
};
export default RightClickOptions;
