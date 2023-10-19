import type { StorybookConfig } from "@storybook/nextjs";

import { join, dirname, resolve } from "path";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../public'],
	typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true,
    },
  },

	webpackFinal: async (config, { configType }) => {
    if (!config.resolve) {
      return config;
   }

	 config?.module?.rules?.forEach(rule => {
		if (!rule || typeof rule !== 'object') return;
		if (rule.test instanceof RegExp && rule.test.test('.svg')) {
			rule.exclude = /\.svg$/;
		}
	});

		config?.module?.rules?.unshift({
			test: /\.svg$/,
			use: ["@svgr/webpack"]
		});

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(__dirname, "../src"),
    };

    return config;
  },
};
export default config;
