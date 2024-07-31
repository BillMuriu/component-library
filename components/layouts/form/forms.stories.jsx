import React from "react";
import { Users } from "./form";

export default {
  title: "Forms/Users",
  component: Users,
  parameters: {
    layout: "fullscreen", // Use 'fullscreen' to give more space
  },
  tags: ["autodocs"],
  args: {
    // The Users component already handles the internal data,
    // so we don't need to pass any specific props here.
  },
};

// Default Story
export const Default = (args) => <Users {...args} />;
