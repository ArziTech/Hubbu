import React from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Bug,
  DiamondPlus,
  Ellipsis,
  GalleryVerticalEnd,
  Highlighter,
  Image as ImageIcon,
  Images,
  Layers,
  LayoutList,
} from "lucide-react";

const TabList = () => {
  return (
    <TabsList
      className={
        "flex h-fit w-full flex-col justify-evenly gap-4 bg-transparent shadow-none"
      }
    >
      <TabsTrigger
        value={"steps"}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "border !shadow-none",
        )}
      >
        <LayoutList></LayoutList>
      </TabsTrigger>
      <TabsTrigger
        value={"add-element"}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "border !shadow-none",
        )}
      >
        <DiamondPlus></DiamondPlus>
      </TabsTrigger>
      <TabsTrigger
        value={"element-style"}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "border !shadow-none",
        )}
      >
        <Highlighter></Highlighter>
      </TabsTrigger>
      <TabsTrigger
        value={"editable-elements"}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "border !shadow-none",
        )}
      >
        <Layers></Layers>
      </TabsTrigger>
      <TabsTrigger
        value={"section-order"}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "border !shadow-none",
        )}
      >
        <GalleryVerticalEnd></GalleryVerticalEnd>
      </TabsTrigger>
      {/*<TabsTrigger*/}
      {/*  value={"styles"}*/}
      {/*  className={cn(*/}
      {/*    buttonVariants({ variant: "ghost" }),*/}
      {/*    "border !shadow-none",*/}
      {/*  )}*/}
      {/*>*/}
      {/*  <ImageIcon></ImageIcon>*/}
      {/*</TabsTrigger>*/}
      <TabsTrigger
        value={"assets"}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "border !shadow-none",
        )}
      >
        <Images></Images>
      </TabsTrigger>
      <TabsTrigger
        value={"debug"}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "border !shadow-none",
        )}
      >
        <Bug></Bug>
      </TabsTrigger>
      <TabsTrigger
        value={"more"}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "border !shadow-none",
        )}
      >
        <Ellipsis></Ellipsis>
      </TabsTrigger>
    </TabsList>
  );
};
export default TabList;
