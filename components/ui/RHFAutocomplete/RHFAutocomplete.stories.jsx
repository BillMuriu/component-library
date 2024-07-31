import React from "react";
import { RHFAutocomplete } from "./RHFAutocomplete";

// Define your story
export default {
  title: "UI/RHFAutocomplete",
  component: RHFAutocomplete,
  parameters: {
    layout: "fullscreen", // Use 'fullscreen' to give more space
  },
  tags: ["autodocs"],
  args: {
    name: "states",
    label: "Select Options",
    options: [
      { id: 1, label: "Option 1" },
      { id: 2, label: "Option 2" },
      { id: 3, label: "Option 3" },
    ],
  },
};

// Default Story
export const Default = (args) => <RHFAutocomplete {...args} />;
