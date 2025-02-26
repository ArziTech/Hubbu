import React from "react";

const Page = async ({ params }: { params: Promise<{ domain: string }> }) => {
  const domain = (await params).domain;

  // check database here
  return <div className={"grid h-full place-content-center"}>{domain}</div>;
};
export default Page;
