/** @type { import('@storybook/react').Preview } */
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "@/app/globals.css";

const schema = {};

const defaultValues = {};

// Define the RhfProvider component directly in preview.js
const RhfProvider = ({ children, schema, defaultValues, ...props }) => {
  const methods = useForm({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...methods} {...props}>
      {children}
    </FormProvider>
  );
};

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <RhfProvider schema={schema} defaultValues={defaultValues}>
        <Story />
      </RhfProvider>
    ),
  ],
};

export default preview;
