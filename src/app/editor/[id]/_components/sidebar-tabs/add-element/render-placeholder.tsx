import React, { ReactNode } from "react";
import { EditorElementType } from "@/components/providers/editor";

const RenderPlaceholder = ({
  Icon,
  label,
  id,
}: {
  Icon: ReactNode;
  label: string;
  id: EditorElementType;
  group: "layout" | "elements"; // TODO: Change this
}) => {
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    type: EditorElementType,
  ) => {
    if (type === null) return;
    e.dataTransfer.setData("componentType", type as string);
  };
  return (
    <div className={"grid place-content-center"}>
      <div
        draggable
        onDragStart={(e) => {
          handleDragStart(e, id);
        }}
        className={
          "flex size-14 items-center justify-center rounded-lg bg-muted"
        }
      >
        {Icon}
      </div>
      <span className={"mx-auto text-xs text-muted-foreground"}>{label}</span>
    </div>
  );
};
export default RenderPlaceholder;
