import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import { IconWrapper } from "@mkp-lib/ui/generic/Icon/styles";
import { TextField } from "@mkp-lib/ui/form/Textfield";

const meta: Meta<typeof TextField> = {
	component: TextField,
	args: {},
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

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
	render: () => <TextField placeholder="Digite sua dúvida aqui" label="Digite" />,
};

export const BorderlessLabeless: Story = {
	render: () => (
		<Box
			sx={{
				backgroundColor: "primary.main",
				p: 2,
				borderTopLeftRadius: "20px",
				borderTopRightRadius: "20px",
			}}
		>
			<TextField
				placeholder="Digite sua dúvida aqui"
				borderless
				InputProps={{
					endAdornment: (
						<IconWrapper color="secondary">
							<SearchIcon sx={{ color: "white", fontSize: "14px" }} />
						</IconWrapper>
					),
				}}
			/>
		</Box>
	),
};

export const Disabled: Story = {
	render: () => <TextField placeholder="Digite sua dúvida aqui" disabled label="Digite" />,
};

export const Loading: Story = {
	render: () => <TextField placeholder="Digite sua dúvida aqui" label="Digite" isLoading />,
};

export const WithIcon: Story = {
	render: () => (
		<TextField
			placeholder="Digite sua dúvida aqui"
			label="Digite"
			InputProps={{
				endAdornment: (
					<IconWrapper color="secondary">
						<SearchIcon sx={{ color: "white", fontSize: "14px" }} />
					</IconWrapper>
				),
			}}
		/>
	),
};
