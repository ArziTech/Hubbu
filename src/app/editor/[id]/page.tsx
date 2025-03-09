import React from "react";
import Navbar from "@/app/editor/[id]/_components/navbar";
import { getWebsiteById } from "@/actions/website";
import { EditorProvider } from "@/components/providers/editor/context";
import Sidebar from "@/app/editor/[id]/_components/sidebar";
import Editor from "./_components/editor";

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
        {/* also check the local storage here, if the sidebar is on the right the it should justfiy-start*/}
        <div className={"item-center flex h-full justify-end"}>
          <Editor websiteId={id} />
        </div>
        <Sidebar />
      </EditorProvider>
    </div>
  );
};
export default Page;
