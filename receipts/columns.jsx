"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns = [
  {
    accessorKey: "received_from",
    header: "Received From",
  },
  {
    accessorKey: "receipt_no",
    header: "Receipt no.",
  },
  {
    accessorKey: "total_amount",
    header: "Amount",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];
