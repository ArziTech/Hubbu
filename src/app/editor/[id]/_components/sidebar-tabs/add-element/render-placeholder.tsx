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
    <div
      className={
        "grid size-[70px] place-content-center rounded-lg border-2 border-gray-600 bg-white p-2 hover:bg-primary hover:text-white"
      }
    >
      <div
        draggable
        onDragStart={(e) => {
          handleDragStart(e, id);
        }}
        className={"flex w-full flex-col items-center justify-center gap-2"}
      >
        {Icon}
        <span className={"mx-auto text-wrap text-xs"}>{label}</span>
      </div>
    </div>
  );
};
export default RenderPlaceholder;
