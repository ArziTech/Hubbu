'use client'
import React from "react";
import { Images } from "lucide-react";
import { Template } from "@prisma/client";
import {useRouter} from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Rating from "@/components/global/rating";
import { Badge } from "@/components/ui/badge";

interface TemplateCardProps {
  id:string;
  title: string;
  price: number;
  rating: number;
  description: string;
  category: string
}

const TemplateCard = ({id,title, rating, price, category,description}: TemplateCardProps) => {
  const router = useRouter();
  const gotoDetail = () => {
    // console.log(template);
    router.push(`/templates/${id}`);
  }

  return (
    <Card className={"bg-white border-none  flex flex-col rounded-lg shadow"}>
      <CardHeader className={"p-0 h-72"}>
        <div className={"bg-[#D9D9D9] relative size-full grid place-content-center"}>
          <Badge className={'absolute top-2 left-2'}>{category}</Badge>
          <Images></Images>
        </div>
      </CardHeader>
      <CardContent className={'p-4 flex flex-col flex-grow gap-2'}>
          <p className={"text-text font-bold"}>{title}</p>
          <p className={'text-accent text-xl font-bold'}>Rp. {price}</p>
          <p className={'text-muted-foreground text-sm line-clamp-3'}>{description}</p>
          <Rating className={'gap-1'} starClassName={'size-5'} score={rating}></Rating>
      </CardContent>
      <CardFooter className={'p-4 pt-0'}>
        <Button onClick={gotoDetail} className={'w-full'}>Preview</Button>
      </CardFooter>
    </Card>
  );
};
export default TemplateCard;
