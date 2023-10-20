import { useState } from "react";

import { Button, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "@mkp-lib/ui/ui/Modal";

const meta: Meta<typeof Modal> = {
	component: Modal,
	args: {
		open: true,
		title: "Modal title",
		maxWidth: "md",
	},
};

export default meta;

type Story = StoryObj<typeof Modal>;

const Component = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const onClose = () => setIsOpen(false);

	return (
		<>
			<Button variant="contained" sx={{ width: 200 }} onClick={openModal}>
				Open modal
			</Button>
			<Modal open={isOpen} onClose={onClose} title="Modal title">
				<Typography>
					Velit reprehenderit voluptate officia excepteur. Consequat est pariatur in culpa
					excepteur. Fugiat commodo officia irure excepteur reprehenderit amet nisi. Est irure qui
					cillum culpa ullamco adipisicing laboris. Cillum ex culpa fugiat nostrud proident
					consequat ipsum cillum ex consequat et adipisicing adipisicing.
				</Typography>
			</Modal>
		</>
	);
};

export const Default: Story = {
	render: () => <Component />,
};
