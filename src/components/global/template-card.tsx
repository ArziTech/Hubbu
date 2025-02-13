'use client'
import React from "react";
import { Images } from "lucide-react";
import { Template } from "@prisma/client";
import {useRouter} from "next/navigation";

interface TemplateCardProps {
  template: Template
}

const TemplateCard = ({template}: TemplateCardProps) => {
  const router = useRouter();
  const gotoDetail = () => {

    console.log(template);
      router.push(`/templates/${template.id}`);
  }
  return (
    <div onClick={gotoDetail} className={"w-full min-w-[220px] max-w-[31%] h-[303px] flex flex-col rounded-lg shadow"}>
      <div className={"p-4 pb-0 h-full rounded-md"}>
        <div className={"bg-[#D9D9D9] size-full grid place-content-center"}>
          <Images></Images>
        </div>
      </div>
      <div className={"h-[44px] px-4 py-2 font-bold"}>Template Title</div>
    </div>
  );
};
export default TemplateCard;
