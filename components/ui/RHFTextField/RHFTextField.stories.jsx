import React from "react";
import { RHFTextField } from "./RHFTextField";

export default {
  title: "UI/RHFTextField",
  component: RHFTextField,
  parameters: {
    layout: "centered", // Adjust as needed for your layout
  },
  tags: ["autodocs"],
  args: {
    name: "textInput",
    label: "Enter Text",
  },
};

// Default Story
export const Default = (args) => <RHFTextField {...args} />;
