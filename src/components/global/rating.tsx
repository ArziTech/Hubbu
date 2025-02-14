import { Star } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  score: number
  className?: string
  starClassName?: string
};
const Rating = (props: Props) => {
  return (
    <div className={cn("flex gap-2", props.className)}>
      {Array.from({ length: props.score }).map((_, idx) => (
        <Star
          key={idx}
          className={cn("border-none text-transparent fill-amber-200 size-6", props.starClassName)}
        />
      ))}
    </div>
  );
};
export default Rating;
