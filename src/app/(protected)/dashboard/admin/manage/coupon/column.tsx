"use client";

import { ColumnDef } from "@tanstack/table-core";
import { Coupon } from "@prisma/client";
import { DataTableColumnHeader } from "@/components/table/table-header-sortable";

import {
  moreActionColumn,
  numberColumn,
  selectColumn,
} from "@/components/table/table-data";
import { deleteManyCouponsByID } from "@/actions/coupon";

type Column = Coupon;

export const columns: ColumnDef<Column>[] = [
  selectColumn<Column>(),
  numberColumn<Column>(),
  {
    accessorKey: "code",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"code"}
        className={"w-full"}
      />
    ),
  },

  moreActionColumn<Column>({
    deleteFNAction: deleteManyCouponsByID,
  }),
];
