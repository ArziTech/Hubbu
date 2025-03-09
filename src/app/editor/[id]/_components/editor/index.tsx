"use client";
import React, { useEffect } from "react";
import { useEditor } from "@/components/providers/editor/context";
import { getWebsiteElementsById } from "@/actions/website";
import Recursive from "@/app/editor/[id]/_components/editor/recursive";

interface Props {
  websiteId: string;
}
const Editor = ({ websiteId }: Props) => {
  const { state, dispatch } = useEditor();

  useEffect(() => {
    const fetchData = async () => {
      const fetchResponse = await getWebsiteElementsById(websiteId);
      if (fetchResponse.status === "ERROR") {
        //   TODO : handle this
        return;
      }

      // TODO: Handle this
      const websiteElements = JSON.parse(
        fetchResponse.data?.elements as string,
      );

      dispatch({
        type: "LOAD_DATA",
        payload: {
          elements: websiteElements,
        },
      });
    };
    fetchData();
  }, [websiteId]);

  return (
    <div className={"h-full w-[calc(100%-400px)]"}>
      {Array.isArray(state.editor.elements)
        ? state.editor.elements.map((childElement) => (
            <Recursive key={childElement.id} element={childElement} />
          ))
        : null}
    </div>
  );
};
export default Editor;
