"use client";

import { ColumnDef } from "@tanstack/table-core";
import { DataTableColumnHeader } from "@/components/table/table-header-sortable";

import { numberColumn, selectColumn } from "@/components/table/table-data";

import { GetUserTransactionReturn } from "@/actions/transaction/userTransaction";

type Column = GetUserTransactionReturn;

export const columns: ColumnDef<Column>[] = [
  selectColumn<Column>(),
  numberColumn<Column>(),
  {
    accessorKey: "transactionId",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"Transaction id"}
        className={"w-full"}
      />
    ),
  },
  {
    accessorKey: "templateName",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"Template Name"}
        className={"w-full"}
      />
    ),
    cell: ({ row }) => (
      <div className={"w-full"}>{row.original.templateName}</div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"Status"}
        className={"w-full"}
      />
    ),
    cell: ({ row }) => <div className={"w-full"}>{row.original.status}</div>,
  },
  {
    accessorKey: "coupon",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"Coupon"}
        className={"w-full"}
      />
    ),
    cell: ({ row }) => (
      <div className={"w-full"}>
        {row.original.coupon || "not using coupon"}
      </div>
    ),
  },
];
