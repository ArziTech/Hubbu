"use client";

import { ColumnDef } from "@tanstack/table-core";
import { Website } from "@prisma/client";
import { DataTableColumnHeader } from "@/components/table/table-header-sortable";
// import DropdownRole from "@/components/Table/DropdownRole";

import {
  moreActionColumn,
  numberColumn,
  selectColumn,
} from "@/components/table/table-data";
import { deleteManyWebsitesByID } from "@/actions/website";

type WebsiteColumn = Website;

export const columns: ColumnDef<WebsiteColumn>[] = [
  selectColumn<WebsiteColumn>(),
  numberColumn<WebsiteColumn>(),
  {
    accessorKey: "websiteName",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"website name"}
        className={"w-full"}
      />
    ),
  },

  moreActionColumn<WebsiteColumn>({
    deleteFNAction: deleteManyWebsitesByID,
  }),
];
