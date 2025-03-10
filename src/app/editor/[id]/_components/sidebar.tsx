"use client";
import { useEditor } from "@/components/providers/editor/context";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DiamondPlus,
  GalleryVerticalEnd,
  Highlighter,
  Layers,
  LayoutList,
  Image as ImageIcon,
  Images,
  Ellipsis,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import TabList from "@/app/editor/[id]/_components/tab-list";
import TabContent from "@/app/editor/[id]/_components/tab-content";
import { ResizablePanelGroup } from "@/components/ui/resizable";

type Props = {};
const Sidebar = (props: Props) => {
  const { state, dispatch } = useEditor();
  return (
    <Sheet open={true} modal={false}>
      <Tabs defaultValue={"steps"} className={"w-full"}>
        <SheetContent
          showX={false}
          side={"left"} // TODO:take the side from the localstorage
          className={"z-50 mt-[74px] w-16 overflow-hidden p-0"}
        >
          <TabList />
        </SheetContent>

        <SheetContent
          showX={false}
          side={"left"}
          className={
            "w-25 z-40 mr-16 mt-[74px] h-full w-[400px] overflow-hidden bg-background p-0 shadow-none transition-all"
          }
        >
          <TabContent />
        </SheetContent>
      </Tabs>
    </Sheet>
  );
};
export default Sidebar;
