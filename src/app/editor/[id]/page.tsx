import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, LaptopMinimal, Send, Smartphone } from "lucide-react";
import Navbar from "@/app/editor/[id]/_components/navbar";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  // check the templates here
  // TODO

  return (
    <div className={"h-full"}>
      <Navbar />
      <div className={"grid h-full place-content-center"}>{id}</div>
    </div>
  );
};
export default Page;
