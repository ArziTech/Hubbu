"use client";
import React, {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from "react";
import { UserCircle, LucideProps, ChevronDown } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { User } from "@prisma/client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

// import logoMRP from "@/public/mrp-logo.png";
import Link from "next/link";
// import { SidebarDropdownFooter } from "@/components/SidebarFooter";
import { usePathname } from "next/navigation";
import LogOutButton from "@/components/global/log-out-button";
import {
  // ADMIN_SIDEBAR,
  PROFILE_SIDEBAR,
} from "@/app/(protected)/dashboard/_constant";
import { SidebarDropdownFooter } from "@/app/(protected)/dashboard/_components/sidebar-dropdown-footer";

const dropdownFooterItems: ReactNode[] = [
  // "Account",
  // "Billing",
  <LogOutButton className={"w-full"} key={"logout"} />,
];

export interface CollapsibleMenuItems {
  title: string;
  url?: string;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  subItems?: Array<{
    title: string;
    url?: string;
    icon?: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  }>;
}
export interface CollapsibleMenuGroupProps {
  label: string;
  items: Array<CollapsibleMenuItems>;
  MenuIcon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

const CollapsibleMenuGroup = ({
  label,
  items,
  MenuIcon,
}: CollapsibleMenuGroupProps) => {
  const path = usePathname();
  return (
    <SidebarGroup>
      <Collapsible defaultOpen className="group/collapsible">
        <SidebarGroupLabel>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton>
              {MenuIcon && <MenuIcon className="me-2" />}
              {label}
              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <SidebarSeparator className="my-2" />
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(({ url, title, icon: Icon, subItems }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton
                    className={"ps-6"}
                    asChild={!!url}
                    disabled={!url}
                  >
                    {url ? (
                      <Link
                        href={url}
                        className={
                          url === path ? "text-medium text-primary" : ""
                        }
                      >
                        {Icon && <Icon />}
                        <span>{title}</span>
                      </Link>
                    ) : (
                      <>
                        {Icon && <Icon />}
                        <span>{title}</span>
                      </>
                    )}
                  </SidebarMenuButton>
                  {subItems && (
                    <SidebarMenu>
                      {subItems.map(({ title, url, icon: Icon }) => (
                        <SidebarMenuSubItem key={title}>
                          <SidebarMenuButton className={"ps-10"} asChild>
                            {url ? (
                              <Link
                                href={url}
                                className={
                                  url === path ? "text-medium text-primary" : ""
                                }
                              >
                                {Icon && <Icon />}
                                <span>{title}</span>
                              </Link>
                            ) : (
                              <>
                                {Icon && <Icon />}
                                <span>{title}</span>
                              </>
                            )}
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenu>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </Collapsible>
    </SidebarGroup>
  );
};

export function DashboardSidebar({ user }: { user: User }) {
  return (
    <Sidebar
      className={"block !border-none"}
      collapsible={"icon"}
      side={"left"}
    >
      <SidebarContent>
        <CollapsibleMenuGroup
          label="User"
          items={PROFILE_SIDEBAR}
          MenuIcon={UserCircle}
        />

        {/* TODO: This is temporary */}
        {/*{user === "ADMIN" && (*/}
        {/*  <CollapsibleMenuGroup*/}
        {/*    MenuIcon={Lock}*/}
        {/*    items={ADMIN_SIDEBAR}*/}
        {/*    label={"Admin"}*/}
        {/*  />*/}
        {/*)}*/}
      </SidebarContent>
      <SidebarDropdownFooter
        username={user.name as string}
        dropdownItems={dropdownFooterItems}
        render={(item, index) => (
          <DropdownMenuItem key={index} className={"flex w-full"}>
            {item}
          </DropdownMenuItem>
        )}
      />
    </Sidebar>
  );
}
