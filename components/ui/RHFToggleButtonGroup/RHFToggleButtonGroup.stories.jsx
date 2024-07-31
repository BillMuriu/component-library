import React from "react";
import { RHFToggleButtonGroup } from "./RHFToggleButtonGroup";

export default {
  title: "UI/RHFToggleButtonGroup",
  component: RHFToggleButtonGroup,
  parameters: {
    layout: "centered", // Adjust as needed for your layout
  },
  tags: ["autodocs"],
  args: {
    name: "toggleGroup",
    options: [
      { id: "option1", label: "Option 1" },
      { id: "option2", label: "Option 2" },
      { id: "option3", label: "Option 3" },
    ],
  },
};

// Default Story
export const Default = (args) => <RHFToggleButtonGroup {...args} />;
