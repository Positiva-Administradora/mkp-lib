import { Autocomplete as MuiAutocomplete, SxProps } from "@mui/material";
import { ComponentProps } from "react";

export interface AutocompleteProps extends ComponentProps<typeof MuiAutocomplete> {
	label?: string;
	isLoading?: boolean;
	inputLabelSx?: SxProps;
}