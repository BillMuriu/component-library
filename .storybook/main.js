/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    "../components/ui/**/*.mdx",
    "../components/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/layouts/**/*.mdx",
    "../components/layouts/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["..\\public"],
};

export default config;
