import React from "react";
import { RHFRadioGroup } from "./RHFRadioGroup";

export default {
  title: "UI/RHFRadioGroup",
  component: RHFRadioGroup,
  parameters: {
    layout: "centered", // Adjust layout as needed
  },
  tags: ["autodocs"],
  args: {
    name: "radioGroup",
    label: "Choose an option",
    options: [
      { id: "option1", label: "Option 1" },
      { id: "option2", label: "Option 2" },
      { id: "option3", label: "Option 3" },
    ],
  },
};

// Default Story
export const Default = (args) => <RHFRadioGroup {...args} />;
