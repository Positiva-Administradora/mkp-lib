import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from 'portal-ui'

const meta: Meta<typeof Button> = {
	component: Button,
	args: {
		children: "Button",
	},
	argTypes: {
		color: {
			options: ["primary", "secondary", "gray", "success", "error", "info", "warning"],
			control: {
				type: "select",
			},
		},
		sx: {
			control: { type: "" },
		},
		startIcon: {
			control: { type: "" },
		},
		endIcon: {
			control: { type: "" },
		},
	},
	decorators: [
		Story => (
			<div style={{ width: "300px" }}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {},
};

export const Custom: Story = {
	args: {
		variant: "contained",
		sx: { borderRadius: 1, backgroundColor: "#F00", color: "#00F" },
	},
};

export const WithIcon: Story = {
	args: {
		startIcon: <AccountCircleIcon style={{ fontSize: 24 }} />,
		variant: "contained",
	},
};

export const AllButtons: Story = {
	render: () => (
		<Stack spacing={2}>
			<Typography>Primary</Typography>
			<Stack direction="row" spacing={2} width="600px">
				<Button color="primary" variant="contained">
					Contained
				</Button>
				<Button color="primary" variant="outlined">
					Outlined
				</Button>
				<Button color="primary" variant="text">
					Text
				</Button>
			</Stack>

			<Typography>Secondary</Typography>
			<Stack direction="row" spacing={2} width="600px">
				<Button color="secondary" variant="contained">
					Contained
				</Button>
				<Button color="secondary" variant="outlined">
					Outlined
				</Button>
				<Button color="secondary" variant="text">
					Text
				</Button>
			</Stack>

			<Typography>Gray</Typography>
			<Stack direction="row" spacing={2} width="600px">
				<Button color="gray" variant="contained">
					Contained
				</Button>
				<Button color="gray" variant="outlined">
					Outlined
				</Button>
				<Button color="gray" variant="text">
					Text
				</Button>
			</Stack>
		</Stack>
	),
};

export const AllSizes: Story = {
	render: () => (
		<Stack spacing={2}>
			<Typography>Sizes</Typography>
			<Stack gap={2}>
				<Button color="primary" size="small" variant="contained">
					Contained
				</Button>
				<Button color="primary" size="medium" variant="contained">
					Contained
				</Button>
				<Button color="primary" size="large" variant="contained">
					Contained
				</Button>
			</Stack>
		</Stack>
	),
};