"use client";

import { ColumnDef } from "@tanstack/table-core";
import { User } from "@prisma/client";
import { DataTableColumnHeader } from "@/components/table/table-header-sortable";
// import DropdownRole from "@/components/Table/DropdownRole";

import { deleteManyUserByID } from "@/actions/user";
import {
  moreActionColumn,
  numberColumn,
  selectColumn,
} from "@/components/table/table-data";

type UserColumn = User;

export const columns: ColumnDef<UserColumn>[] = [
  selectColumn<UserColumn>(),
  numberColumn<UserColumn>(),
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"name"}
        className={"w-full"}
      />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"email"}
        className={"w-full"}
      />
    ),
    cell: ({ row }) => <div className={"w-full"}>{row.original.email}</div>,
  },
  // {
  //   accessorKey: "role",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title={"role"} />
  //   ),
  //   cell: ({ row }) => {
  //     const role = row.original.role;
  //     const userId = row.original.id;
  //     return <DropdownRole role={role} userId={userId}></DropdownRole>;
  //   },
  // },
  moreActionColumn<UserColumn>({
    deleteFNAction: deleteManyUserByID,
  }),
];
