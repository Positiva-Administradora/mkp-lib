import { Box, TextField } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import { Autocomplete } from "@mkp-lib/ui/form/Autocomplete";

const meta: Meta<typeof Autocomplete> = {
	component: Autocomplete,
	argTypes: {},
	decorators: [
		Story => (
			<Box
				sx={{
					width: "300px",
					mx: "auto",
				}}
			>
				<Story />
			</Box>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

const options = [
	{ id: 1, name: "Apple" },
	{ id: 2, name: "Pineapple" },
	{ id: 3, name: "Banana" },
	{ id: 4, name: "Kiwi" },
];

type OptionProps = {
	id: number;
	name: string;
};

export const Default: Story = {
	args: {
		label: "Tipo de plano",
		options: options,
		getOptionLabel: option => (option as OptionProps)?.name || "",
		size: "medium",
		renderInput: params => <TextField {...params} placeholder="Selecione um tipo" />,
	},
};
