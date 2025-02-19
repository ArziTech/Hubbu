"use client";
import React from "react";
import { Images } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Rating from "@/components/global/rating";
import { Badge } from "@/components/ui/badge";

interface TemplateCardProps {
  id: string;
  title: string;
  price: number;
  rating: number;
  description: string;
  category: string;
  // Todo: image
}

const TemplateCard = ({
  id,
  title,
  rating,
  price,
  category,
  description,
}: TemplateCardProps) => {
  const router = useRouter();
  const gotoDetail = () => {
    // console.log(template);
    router.push(`/templates/${id}`);
  };

  return (
    <Card className={"flex flex-col rounded-lg border-none bg-white shadow"}>
      <CardHeader className={"h-72 p-0"}>
        <div
          className={
            "relative grid size-full place-content-center bg-[#D9D9D9]"
          }
        >
          <Badge className={"absolute left-2 top-2"}>{category}</Badge>
          <Images></Images>
        </div>
      </CardHeader>
      <CardContent className={"flex flex-grow flex-col gap-2 p-4"}>
        <p className={"font-bold text-text"}>{title}</p>
        <p className={"text-xl font-bold text-accent"}>Rp. {price}</p>
        <p className={"line-clamp-3 text-sm text-muted-foreground"}>
          {description}
        </p>
        <Rating
          className={"gap-1"}
          starClassName={"size-5"}
          score={rating}
        ></Rating>
      </CardContent>
      <CardFooter className={"p-4 pt-0"}>
        <Button onClick={gotoDetail} className={"w-full"}>
          Preview
        </Button>
      </CardFooter>
    </Card>
  );
};
export default TemplateCard;
