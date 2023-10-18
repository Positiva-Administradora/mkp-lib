
import { KeyboardArrowDown } from "@mui/icons-material";
import {
	CircularProgress,
	InputLabel,
	Autocomplete as MuiAutocomplete,
	SxProps,
} from "@mui/material";

interface AutocompleteProps extends React.ComponentProps<typeof MuiAutocomplete> {
	label?: string;
	isLoading?: boolean;
	inputLabelSx?: SxProps;
}

const uuid = () => {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0,
			v = c === "x" ? r : (r & 0x3) | 0x8;

		return v.toString(16);
	});
};

export const Select = ({ isLoading, label, inputLabelSx, ...props }: AutocompleteProps) => {
	props.disabled = isLoading || props.disabled;

	const id = props.id || uuid();

	return (
		<>
			{!!label && (
				<InputLabel htmlFor={id} sx={{ fontSize: 16, mb: 1, color: "inherit", ...inputLabelSx }}>
					{label}
				</InputLabel>
			)}
			<MuiAutocomplete
				id={id}
				disablePortal
				size="small"
				popupIcon={
					!isLoading ? (
						<KeyboardArrowDown />
					) : (
						<CircularProgress
							size={16}
							sx={{
								mt: 0.5,
								color: "primary.main",
							}}
						/>
					)
				}
				noOptionsText="Nenhuma opção encontrada."
				{...props}
			/>
		</>
	);
};
