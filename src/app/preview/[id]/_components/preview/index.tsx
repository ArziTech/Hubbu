"use client";
import { useEditor } from "@/components/providers/editor/context";
import React, { useEffect } from "react";
import { getWebsiteElementsById } from "@/actions/website";
import Recursive from "@/app/preview/[id]/_components/preview/recursive";

interface Props {
  websiteId: string;
}

const Preview = ({ websiteId }: Props) => {
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
  }, [dispatch, websiteId]);

  return (
    <div className={"h-[100%]"}>
      {Array.isArray(state.editor.elements)
        ? state.editor.elements.map((childElement) => (
            <Recursive key={childElement.id} element={childElement} />
          ))
        : null}
    </div>
  );
};
export default Preview;
