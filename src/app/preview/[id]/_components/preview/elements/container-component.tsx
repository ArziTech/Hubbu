"use client";
import { EditorElement } from "@/components/providers/editor";
import Recursive from "@/app/preview/[id]/_components/preview/recursive";
type Props = {
  element: EditorElement;
};

const ContainerComponent = ({ element }: Props) => {
  const { styles, content } = element;

  return (
    <div style={styles}>
      {Array.isArray(content)
        ? content.map((childElement) => (
            <Recursive key={childElement.id} element={childElement} />
          ))
        : null}
    </div>
  );
};
export default ContainerComponent;
