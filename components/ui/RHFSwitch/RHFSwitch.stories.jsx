import React from "react";
import { RHFSwitch } from "./RHFSwitch";

export default {
  title: "UI/RHFSwitch",
  component: RHFSwitch,
  parameters: {
    layout: "centered", // You can adjust this as needed
  },
  tags: ["autodocs"],
  args: {
    name: "toggleSwitch",
    label: "Enable Feature",
  },
};

// Default Story
export const Default = (args) => <RHFSwitch {...args} />;
