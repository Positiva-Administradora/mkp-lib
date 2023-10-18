import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

type ButtonBaseProps = MuiButtonProps;

export interface ButtonProps extends ButtonBaseProps {
	children?: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => (
	<MuiButton {...rest}>{children}</MuiButton>
);
