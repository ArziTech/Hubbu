import { Star } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  score: number;
  className?: string;
  starClassName?: string;
};
const Rating = (props: Props) => {
  return (
    <div className={cn("flex gap-2", props.className)}>
      {Array.from({ length: props.score }).map((_, idx) => (
        <Star
          key={idx}
          className={cn(
            "size-6 border-none fill-amber-200 text-transparent",
            props.starClassName,
          )}
        />
      ))}
    </div>
  );
};
export default Rating;
