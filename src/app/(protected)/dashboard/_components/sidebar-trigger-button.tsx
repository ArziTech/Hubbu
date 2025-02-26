"use client";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelsTopLeft } from "lucide-react";
import { useEffect } from "react";

export function SidebarTriggerButton() {
  const { toggleSidebar } = useSidebar();
  return (
    <button onClick={toggleSidebar} className={"z-[1000]"}>
      <PanelsTopLeft />
    </button>
  );
}
