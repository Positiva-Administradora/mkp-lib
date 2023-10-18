import { ComponentProps } from "react";

import {
	TextField as MuiTextField,
	Box,
	CircularProgress,
	styled,
	InputLabel,
	Typography,
} from "@mui/material";


interface TextFieldProps extends ComponentProps<typeof MuiTextField> {
	isLoading?: boolean;
	borderless?: boolean;
	inputLabelSx?: ComponentProps<typeof InputLabel>["sx"];
}

const uuid = () => {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0,
			v = c === "x" ? r : (r & 0x3) | 0x8;

		return v.toString(16);
	});
};

export const TextField = ({
	isLoading,
	borderless = false,
	label,
	InputProps,
	inputLabelSx,
	...props
}: TextFieldProps) => {
	props.disabled = isLoading || props.disabled;
	props.placeholder = isLoading ? "Carregando..." : props.placeholder;
	const id = props.id || uuid();

	return (
		<Box>
			<InputLabel
				htmlFor={id}
				sx={{
					color: "black.main",
					mb: 1,
					...inputLabelSx,
				}}
			>
				<Typography>{label}</Typography>
			</InputLabel>
			<StyledTextField
				id={id}
				size="small"
				InputLabelProps={{ shrink: true }}
				InputProps={{
					...InputProps,
					...(isLoading && {
						endAdornment: (
							<Box sx={{ display: "grid", placeItems: "center" }}>
								<CircularProgress
									size={16}
									sx={{
										color: "secondary.main",
									}}
								/>
							</Box>
						),
					}),
				}}
				borderless={borderless}
				{...props}
			/>
		</Box>
	);
};

const StyledTextField = styled(MuiTextField)<{
	borderless: boolean;
}>(({ borderless }) => ({
	"& fieldset": { border: borderless ? "none" : undefined },
}));
