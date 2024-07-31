import React from "react";
import { RHFSlider } from "./RHFSlider";

export default {
  title: "UI/RHFSlider",
  component: RHFSlider,
  parameters: {
    layout: "centered", // You can adjust this as needed
  },
  tags: ["autodocs"],
  args: {
    name: "slider",
    label: "Select Value",
  },
};

// Default Story
export const Default = (args) => <RHFSlider {...args} />;
