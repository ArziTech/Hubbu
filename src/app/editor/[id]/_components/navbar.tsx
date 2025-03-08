"use client";
import React, { useEffect } from "react";
import { Website } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEditor } from "@/components/providers/editor/context";

interface Props {
  websiteDetails: Website;
}
const Navbar = ({ websiteDetails }: Props) => {
  const router = useRouter();
  const { state, dispatch } = useEditor();

  useEffect(() => {
    dispatch({
      type: "SET_WEBSITE_ID",
      payload: { websiteId: websiteDetails.id },
    });
  }, [dispatch, websiteDetails.id]);

  return <div>Navbar</div>;
};
export default Navbar;
