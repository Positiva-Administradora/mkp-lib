import {
	Box,
	CircularProgress,
	InputLabel,
	Typography,
} from "@mui/material";
import { uuid } from "../../utils/uuid";
import { TextFieldProps } from "./types";
import { StyledTextField } from "./styles";

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

