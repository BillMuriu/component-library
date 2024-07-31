import React from "react";
import { DataTable } from "./data-table";
import { columns } from "@/receipts/columns";
import { data } from "@/receipts/receipts";
// Define your story
export default {
  title: "UI/DataTable",
  component: DataTable,
  parameters: {
    layout: "fullscreen", // Use 'fullscreen' to give more space
  },
  tags: ["autodocs"],
  args: {
    columns,
    data,
  },
};

// Default Story
export const Default = (args) => <DataTable {...args} />;
