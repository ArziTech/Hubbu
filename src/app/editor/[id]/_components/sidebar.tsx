"use client";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Tabs } from "@/components/ui/tabs";
import TabList from "@/app/editor/[id]/_components/tab-list";
import TabContent from "@/app/editor/[id]/_components/tab-content";

const Sidebar = () => {
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
            "w-25 z-40 mr-16 mt-[74px] h-full w-[400px] overflow-x-hidden overflow-y-scroll bg-background p-0 shadow-none transition-all"
          }
        >
          <TabContent />
        </SheetContent>
      </Tabs>
    </Sheet>
  );
};
export default Sidebar;
