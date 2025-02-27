import {
  Box,
  Boxes,
  ChartNoAxesGantt,
  Home,
  LucideProps,
  Newspaper,
  PenLine,
  Settings,
  UsersRound,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
// import { CollapsibleMenuItems } from "@/components/dashboard/Sidebar";

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

export const PROFILE_SIDEBAR: CollapsibleMenuItems[] = [
  {
    title: "Profile",
    url: "/dashboard",
    icon: Home,
  },
  { title: "Website", url: "/dashboard/website", icon: PenLine },
  {
    title: "Transaction History",
    url: "/dashboard/transaction-history",
    icon: Settings,
  },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];
export const ADMIN_SIDEBAR: CollapsibleMenuItems[] = [
  {
    title: "Sales Review",
    url: "/dashboard/admin/sales-review",
    icon: Settings,
  },
  {
    title: "Transactions",
    url: "/dashboard/admin/transactions",
    icon: Settings,
  },
  {
    title: "Manage",
    icon: ChartNoAxesGantt,
    subItems: [
      {
        title: "User",
        url: "/dashboard/admin/manage/users",
        icon: UsersRound,
      },
      {
        title: "website",
        url: "/dashboard/admin/manage/website",
        icon: Newspaper,
      },
      {
        title: "Role",
        url: "/dashboard/admin/manage/role",
        icon: Box,
      },
      {
        title: "Coupon",
        url: "/dashboard/admin/manage/coupon",
        icon: Boxes,
      },
      {
        title: "Template",
        url: "/dashboard/admin/manage/template",
        icon: Boxes,
      },
      {
        title: "Template Category",
        url: "/dashboard/admin/manage/template-category",
        icon: Boxes,
      },
      {
        title: "Testimonial",
        url: "/dashboard/admin/manage/testimonial",
        icon: Boxes,
      },
      {
        title: "Permissions",
        url: "/dashboard/admin/manage/permissions",
        icon: Boxes,
      },
    ],
  },
  {
    title: "Settings",
    url: "/dashboard/admin/settings",
    icon: Settings,
  },
];
