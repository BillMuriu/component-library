import React from "react";
import { RHFCheckbox } from "./RHFCheckbox"; // Adjust the import path as necessary
import { FormProvider, useForm } from "react-hook-form";

// Define a simple Form Wrapper for the story
const FormWrapper = ({ children, defaultValues }) => {
  const methods = useForm({ defaultValues });
  return (
    <div style={{ width: "100%", padding: "16px", boxSizing: "border-box" }}>
      <FormProvider {...methods}>{children}</FormProvider>
    </div>
  );
};

const options = [
  { id: "1", label: "Option 1" },
  { id: "2", label: "Option 2" },
];

export default {
  title: "UI/RHFCheckbox",
  component: RHFCheckbox,
  parameters: {
    layout: "fullscreen", // Use 'fullscreen' to give more space
  },
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
  args: {
    name: "checkboxGroup",
    label: "Select Options",
    options,
  },
};

// Default Story
export const Default = (args) => (
  <FormWrapper defaultValues={{ checkboxGroup: [] }}>
    <RHFCheckbox {...args} />
  </FormWrapper>
);
