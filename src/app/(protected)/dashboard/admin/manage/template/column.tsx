"use client";

import { ColumnDef } from "@tanstack/table-core";
import { Template } from "@prisma/client";
import { DataTableColumnHeader } from "@/components/table/table-header-sortable";

import {
  moreActionColumn,
  numberColumn,
  selectColumn,
} from "@/components/table/table-data";
import { deleteManyTemplatesByID } from "@/actions/template";

type Column = Template;

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
    deleteFNAction: deleteManyTemplatesByID,
  }),
];
