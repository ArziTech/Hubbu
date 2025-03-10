"use client";
import { EditorElement } from "@/components/providers/editor";
import ElementBadge from "@/app/editor/[id]/_components/editor/elements/element-badge";
import DeleteElementButton from "@/app/editor/[id]/_components/editor/elements/delete-element-button";
import { clsx } from "clsx";
import { useEditor } from "@/components/providers/editor/context";

type Props = {
  element: EditorElement;
};
const VideoComponent = ({ element }: Props) => {
  const { state, dispatch } = useEditor();
  const { id, name, styles } = element;

  const handleOnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: "CHANGE_CLICKED_ELEMENT",
      payload: {
        elementDetails: element,
      },
    });
  };

  return (
    <div
      style={styles}
      onClick={handleOnClick}
      className={clsx("relative w-full transition-all", {
        "border-solid border-blue-500": state.editor.selectedElement.id === id,
        "border-[1px] border-dashed border-slate-300": !state.editor.liveMode,
      })}
    >
      <ElementBadge id={element.id} name={name} />
      <DeleteElementButton element={element} />
      {!Array.isArray(element.content) && (
        <iframe
          width={element.styles.width || "560"}
          height={element.styles.height || "315"}
          src={element.content.src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      )}
    </div>
  );
};
export default VideoComponent;
