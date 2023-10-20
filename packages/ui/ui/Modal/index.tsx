import CloseIcon from "@mui/icons-material/Close";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	IconButton,
	useTheme,
} from "@mui/material";
import { ModalProps } from "./types";

export const Modal = ({
	title,
	children,
	open,
	onClose,
	sx,
	titleSx,
	contentSx,
	...props
}: ModalProps) => {
	const { palette } = useTheme();

	return (
		<Dialog
			open={open}
			onClose={onClose}
			PaperProps={{ sx: { borderRadius: "30px", ...sx } }}
			{...props}
		>
			<DialogTitle sx={{ fontSize: { xs: 20, md: 25 }, ...titleSx }}>{title}</DialogTitle>
			<IconButton
				onClick={onClose}
				sx={{
					position: "absolute",
					right: 16,
					top: 18,
					width: 36,
					height: 36,
					border: `2px solid ${palette.secondary.main}`,
					color: palette.secondary.main,
				}}
			>
				<CloseIcon />
			</IconButton>

			<DialogContent sx={{ px: 6, py: 3, ...contentSx }}>{children}</DialogContent>
		</Dialog>
	);
};