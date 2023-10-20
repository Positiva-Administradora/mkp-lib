import { IconButton as MuiIconButton } from "@mui/material";
import { IconButtonProps } from "./types";

export const IconButton = ({ ...props }: IconButtonProps) => {
	return <MuiIconButton {...props} />;
};
