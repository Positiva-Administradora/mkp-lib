
import { ButtonProps as MuiButtonProps } from "@mui/material";
import { ReactNode } from "react";

export type ButtonBaseProps = MuiButtonProps;

export interface ButtonProps extends ButtonBaseProps {
	children?: ReactNode;
}
