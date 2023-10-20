import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "@mkp-lib/ui/generic/Divider";

const meta: Meta<typeof Divider> = {
	component: Divider,
	args: {
		decoration: "gradient",
		size: "md",
	},
	argTypes: {
		decoration: {
			variant: {
				options: ["gradient", "solid", "dashed"],
				control: {
					type: "inline-radio",
				},
			},
		},
		size: {
			size: {
				options: ["sm", "md", "lg"],
				control: {
					type: "inline-radio",
				},
			},
		},
	},
	decorators: [Story => <Story />],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const Dashed: Story = {
	args: {
		decoration: "dashed",
	},
};

export const Solid: Story = {
	args: {
		size: "md",
		decoration: "solid",
	},
};

export const Gradient: Story = {
	args: {
		size: "md",
		decoration: "gradient",
	},
};

export const AllDividers: Story = {
	render: () => (
		<Stack spacing={2}>
			<Typography>Decoration</Typography>
			<Stack direction="column" spacing={2} width="600px">
				<Divider decoration="dashed" />
				<Divider decoration="gradient" />
				<Divider decoration="solid" />
			</Stack>

			<Typography>Size</Typography>
			<Stack direction="column" spacing={2} width="600px">
				<Divider size="sm" />
				<Divider size="md" />
				<Divider size="lg" />
			</Stack>
		</Stack>
	),
};
