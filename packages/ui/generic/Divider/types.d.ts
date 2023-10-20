import { DividerProps as MuiDividerProps } from "@mui/material";

export interface DividerProps extends MuiDividerProps {
	size?: "sm" | "md" | "lg";
	decoration?: "dashed" | "gradient" | "solid";
	rounded?: boolean;
}