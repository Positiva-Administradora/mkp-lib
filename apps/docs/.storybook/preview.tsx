import React, { useMemo } from "react";
import type { Preview } from "@storybook/react";

import { ThemeProvider, CssBaseline } from "@mui/material";

import { getWhiteLabel, cairo } from "@mkp/config"

import '@fontsource/cairo/300.css';
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/500.css';
import '@fontsource/cairo/600.css';
import '@fontsource/cairo/700.css';
import '@fontsource/material-icons';

export const globalTypes = {
  theme: {
    name: "White Label",
    title: "White Label",
    description: "White Label Theme",
    defaultValue: "wiz",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "wiz", left: "🟣", title: "Wiz Saúde" },
        { value: "positiva", left: "🔵", title: "Positiva" },
        { value: "meprotege", left: "🔴", title: "Me Protege" },
        { value: "help", left: "🟠", title: "Help" },
      ],
    },
  },
};

export const withMuiTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;

  const theme = useMemo(() => {
    const { theme } = getWhiteLabel(themeKey || 'wiz');

    return theme;
  }, [themeKey]);

  return (
    <main className={cairo.className}>
      <ThemeProvider theme={theme}> 
      <CssBaseline />
        <Story />
     </ThemeProvider> 
   </main> 
  )
};

const preview: Preview = {
  parameters: {
		backgrounds: {
			default: "light",
			values: [
				{ name: "light", value: "#FFFFFF" },
				{ name: "dark", value: "#333333" },
			]
		},
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
			expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [withMuiTheme],
};

export default preview;
