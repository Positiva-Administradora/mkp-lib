import { ComponentProps } from "react";

import {
	TextField as MuiTextField
} from "@mui/material";

export interface TextFieldProps extends ComponentProps<typeof MuiTextField> {
	isLoading?: boolean;
	borderless?: boolean;
	inputLabelSx?: ComponentProps<typeof InputLabel>["sx"];
}