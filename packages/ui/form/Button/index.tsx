import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "./types";

export const Button = ({ children, ...rest }: ButtonProps) => (
	<MuiButton {...rest}>{children}</MuiButton>
);
