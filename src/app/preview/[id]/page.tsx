import React from "react";
import { getWebsiteById } from "@/actions/website";
import { EditorProvider } from "@/components/providers/editor/context";
import Preview from "@/app/preview/[id]/_components/preview";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  // check the templates here
  // TODO

  const fetchWebsite = await getWebsiteById(id);
  if (!fetchWebsite || fetchWebsite.status === "ERROR" || !fetchWebsite.data) {
    console.log({ fetchWebsite });
    // TODO
    return null;
  }

  // const websiteContent = fetchWebsite.data.content;

  return (
    <div className={"h-full"}>
      {/*<Navbar />*/}
      <EditorProvider websiteId={id} websiteDetails={fetchWebsite.data}>
        <Preview websiteId={fetchWebsite.data.id}></Preview>
      </EditorProvider>
    </div>
  );
};
export default Page;
