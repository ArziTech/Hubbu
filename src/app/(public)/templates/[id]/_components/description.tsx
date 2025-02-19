"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
type Props = {
  description: string;
};
const Description = (props: Props) => {
  const [showFull, setShowFull] = useState<boolean>(false);
  return (
    <>
      <p className={cn("text-muted-foreground", !showFull && "line-clamp-6")}>
        {props.description}
        {/* TODO: Remove*/}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquam
        aspernatur autem dignissimos distinctio dolor, est explicabo harum id
        ipsam libero, maxime obcaecati officiis perferendis quam quisquam rem
        repellendus rerum tempore. Aliquid aspernatur aut delectus dolore
        dolores eos et fugit illo in officia omnis pariatur praesentium
        similique unde, vitae. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Accusamus, adipisci architecto assumenda cupiditate
        deserunt dignissimos dolorem dolores ducimus eaque earum exercitationem
        fuga illum itaque maiores, molestias mollitia numquam odit officiis
        porro qui quisquam quo ratione reprehenderit sed temporibus tenetur ut
        voluptatem? Aperiam consequuntur in iure, libero nemo possimus quaerat
        unde.
      </p>
      <div className={"flex w-full justify-end"}>
        <Button
          variant={"link"}
          onClick={() => setShowFull((prevState) => !prevState)}
          className={"py-px text-right leading-none"}
        >
          {!showFull ? <>Read More</> : <>Hide</>}
        </Button>
      </div>
    </>
  );
};
export default Description;
