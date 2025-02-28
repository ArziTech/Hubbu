"use client";

import { ColumnDef } from "@tanstack/table-core";
import { Role } from "@prisma/client";
import { DataTableColumnHeader } from "@/components/table/table-header-sortable";
// import DropdownRole from "@/components/Table/DropdownRole";

import {
  moreActionColumn,
  numberColumn,
  selectColumn,
} from "@/components/table/table-data";
import { deleteManyRolesByID } from "@/actions/role";

type Column = Role;

export const columns: ColumnDef<Column>[] = [
  selectColumn<Column>(),
  numberColumn<Column>(),
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"title"}
        className={"w-full"}
      />
    ),
  },

  moreActionColumn<Column>({
    deleteFNAction: deleteManyRolesByID,
  }),
];
