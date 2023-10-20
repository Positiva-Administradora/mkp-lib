import {
	Divider as MuiDivider,
	Theme,
	styled,
} from "@mui/material";
import { DividerProps } from "./types";

export const dividerWrapper = {
	size: {
		sm: () => ({
			height: 4,
		}),

		md: () => ({
			height: 5,
		}),

		lg: () => ({
			height: 8,
		}),
	},

	decoration: {
		dashed: (theme: Theme) => ({
			borderStyle: "dashed",
			borderColor: theme.palette.primary.main,
		}),

		gradient: (theme: Theme) => ({
			background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.terciary.main})`,
		}),

		solid: (theme: Theme) => ({
			background: theme.palette.primary.main,
		}),
	},
};

export const borderWrapper = {
	rounded: (rounded: boolean) => ({
		borderRadius: rounded ? "100px" : 0,
	}),
};

export const StyledDivider = styled(MuiDivider)<DividerProps>(
	({ theme, size = "md", decoration = "solid", rounded = false }) => ({
		...dividerWrapper.size[size](),
		...dividerWrapper.decoration[decoration](theme),
		...borderWrapper.rounded(rounded),
	}),
);
