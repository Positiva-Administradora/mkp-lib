import type { Meta, StoryObj } from "@storybook/react";

import { MenuItem } from "@mkp-lib/ui/ui/MenuItem";

const meta: Meta<typeof MenuItem> = {
	component: MenuItem,
};

export default meta;

type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
	args: {
		children: "Quem somos",
		sx: { fontSize: 18 },
	},
};
