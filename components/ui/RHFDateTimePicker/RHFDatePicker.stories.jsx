import React from "react";
import { RHFDatePicker } from "./RHFDatePicker";

export default {
  title: "UI/RHFDatePicker",
  component: RHFDatePicker,
  parameters: {
    layout: "centered", // Adjust layout as needed
  },
  tags: ["autodocs"],
  args: {
    name: "datePicker",
    label: "Select Date",
  },
};

// Default Story
export const Default = (args) => <RHFDatePicker {...args} />;
