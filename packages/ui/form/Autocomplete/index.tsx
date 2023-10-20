
import { uuid } from "../../utils/uuid";
import { KeyboardArrowDown } from "@mui/icons-material";
import {
	CircularProgress,
	InputLabel,
	Autocomplete as MuiAutocomplete
} from "@mui/material";
import { AutocompleteProps } from "./types";
import { Fragment } from "react";

export const Autocomplete = ({ isLoading, label, inputLabelSx, ...props }: AutocompleteProps) => {
	props.disabled = isLoading || props.disabled;

	const id = props.id || uuid();

	return (
		<Fragment>
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
		</Fragment>
	);
};