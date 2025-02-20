"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} className={"!mt-8 w-full"}>
      <ArrowBigLeft /> Back{" "}
    </Button>
  );
};
export default BackButton;
