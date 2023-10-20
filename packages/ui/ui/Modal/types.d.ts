import { DialogProps, SxProps } from "@mui/material";

export interface ModalProps extends DialogProps {
	title: string;
	onClose: () => void;
	titleSx?: SxProps;
	contentSx?: SxProps;
}