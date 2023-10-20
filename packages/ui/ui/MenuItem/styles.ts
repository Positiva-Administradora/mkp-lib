import { Theme, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import { MenuItemProps } from "./types";

export const colorVariant = {
	light: (theme: Theme, active: boolean, behavior: MenuItemProps["behavior"]) => ({
		color: active ? theme.palette.primary.main : "white",
		borderColor: active ? theme.palette.primary.main : "none",

		":hover": {
			color: theme.palette.primary.main,
			borderColor: theme.palette.primary.main,
			transform: behavior === "animated" ? "translateY(-10px)" : "none",
		},
	}),

	dark: (theme: Theme, active: boolean, behavior: MenuItemProps["behavior"]) => ({
		color: active ? theme.palette.secondary.main : "black",
		borderColor: active ? theme.palette.secondary.main : "none",
		transform: active ? "translateY(-10px)" : "none",

		":hover": {
			color: theme.palette.secondary.main,
			borderColor: theme.palette.secondary.main,
			transform: behavior === "animated" ? "translateY(-10px)" : "none",
		},
	}),
};

export const StyledTypography = styled(Typography)<MenuItemProps>(
	({ theme, color = "dark", active, behavior = "animated" }) => ({
		width: "fit-content",
		cursor: "pointer",

		paddingBottom: "8px",
		marginBottom: "-8px",
		transition: "transform 0.2s linear",
		borderBottom: "3px solid transparent",
		transform: active ? "translateY(-10px)" : "none",

		...colorVariant[color](theme, !!active, behavior),
	}),
);