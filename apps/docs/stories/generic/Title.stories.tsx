import type { Meta, StoryObj } from "@storybook/react";

import { Title } from '@mkp-lib/ui/generic/Title'

const meta: Meta<typeof Title> = {
	component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
	args: {
		children: "Tire suas duvidas",
		gradient: true,
		sx: { fontSize: 26, fontWeight: "bold" },
	},
};

export const MultipleTitle: Story = {
	render: () => (
		<>
			<Title sx={{ fontSize: 26, color: "#7F2566" }}>Tire suas</Title>
			<Title borderBottom sx={{ fontSize: 36, fontWeight: "bold", color: "#7F2566" }}>
				Dúvidas
			</Title>
		</>
	),
};
