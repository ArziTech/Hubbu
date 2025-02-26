"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, LaptopMinimal, Send, Smartphone } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav
      className={"flex w-full items-center justify-between border px-6 py-3"}
    >
      <Button
        onClick={() => {
          // TODO: Show some alert or warning if the preview hasn't saved yet
          router.back();
        }}
      >
        <ChevronLeft />
        Back
      </Button>
      <div className={"flex h-full gap-6"}>
        <div className={"space-x-2"}>
          <Button variant={"outline"}>
            <LaptopMinimal />
          </Button>
          <Button variant={"outline"}>
            <Smartphone />
          </Button>
        </div>
        <Button>
          <Send />
          Go Live
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
