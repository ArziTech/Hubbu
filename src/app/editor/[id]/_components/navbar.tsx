"use client";
import React, { useEffect, useTransition } from "react";
import { Website } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEditor } from "@/components/providers/editor/context";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  LaptopMinimal,
  RotateCcw,
  RotateCw,
  Smartphone,
} from "lucide-react";
import { updateWebsiteContentById } from "@/actions/website";
import { toast } from "@/hooks/use-toast";

interface Props {
  websiteDetails: Website;
}
const Navbar = ({ websiteDetails }: Props) => {
  const router = useRouter();
  const { state, dispatch } = useEditor();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    dispatch({
      type: "SET_WEBSITE_ID",
      payload: { websiteId: websiteDetails.id },
    });
  }, [dispatch, websiteDetails.id]);

  const handleSaveWebsite = () => {
    startTransition(async () => {
      const content = JSON.stringify(state.editor.elements);
      const saveResponse = await updateWebsiteContentById(
        websiteDetails.id,
        content,
      );
      if (saveResponse.status === "SUCCESS") {
        toast({
          title: "Success",
          description: "Website saved",
        });
      } else {
        console.log(saveResponse.error);
        toast({
          title: "Error",
          description: "Failed saving website",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <nav
      className={
        "fixed z-[100] flex h-[74px] w-full items-center justify-between bg-white px-6 shadow"
      }
    >
      {/* */}
      <div className={"flex items-center gap-6"}>
        <Button>
          <ChevronLeft />
        </Button>
        <p className={"text-2xl font-medium"}>{websiteDetails.websiteName}</p>
      </div>
      {/* */}
      <div className={"flex gap-6"}>
        <div className={"space-x-2"}>
          <Button variant={"outline"}>
            <LaptopMinimal />
          </Button>
          <Button variant={"outline"}>
            <Smartphone />
          </Button>
        </div>
        <div className={"space-x-2"}>
          <Button variant={"outline"}>
            <RotateCcw></RotateCcw>
          </Button>
          <Button variant={"outline"}>
            <RotateCw />
          </Button>
        </div>
        <div className={"space-x-2"}>
          <Button onClick={handleSaveWebsite} disabled={isPending}>
            {isPending ? "saving" : "save"}
          </Button>
          <Button>Preview</Button>
          <Button>Go Live</Button>
        </div>
      </div>
      {/* */}
    </nav>
  );
};
export default Navbar;
