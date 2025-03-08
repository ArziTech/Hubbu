import React from "react";
import Navbar from "@/app/editor/[id]/_components/navbar";
import { getWebsiteById } from "@/actions/website";
import { EditorProvider } from "@/components/providers/editor/context";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const fetchWebsite = await getWebsiteById(id);

  if (fetchWebsite.status !== "SUCCESS" || !fetchWebsite.data) {
    // TODO: Handle this
    return <div>failed</div>;
  }

  return (
    <div className={"h-full"}>
      <EditorProvider websiteId={id} websiteDetails={fetchWebsite.data}>
        <Navbar websiteDetails={fetchWebsite.data} />
      </EditorProvider>
    </div>
  );
};
export default Page;
