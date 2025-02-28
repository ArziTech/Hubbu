"use client";

import { ColumnDef } from "@tanstack/table-core";
import { Testimonials } from "@prisma/client";
import { DataTableColumnHeader } from "@/components/table/table-header-sortable";
// import DropdownRole from "@/components/Table/DropdownRole";

import {
  moreActionColumn,
  numberColumn,
  selectColumn,
} from "@/components/table/table-data";
import { deleteManyTestimonialsByID } from "@/actions/testimonial";

type Column = Testimonials;

export const columns: ColumnDef<Column>[] = [
  selectColumn<Column>(),
  numberColumn<Column>(),
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
    accessorKey: "rating",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"rating"}
        className={"w-full"}
      />
    ),
  },
  {
    accessorKey: "message",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"name"}
        className={"w-full"}
      />
    ),
  },
  moreActionColumn<Column>({
    deleteFNAction: deleteManyTestimonialsByID,
  }),
];
