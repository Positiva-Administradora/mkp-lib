import { createTheme } from "@mui/material";
import { darken } from "polished";
import { defaultTheme } from "../themes";
import { buttonVariants } from "../buttonsVariants";

export const paletteColors = {
	primary: "#D9782D",
	secondary: "#5AA69D",
	terciary: "#9A8F65",
	background: "#E4E4E4",
	black: "#4F4F4F",
	neutral: "#E4E4E4",
	gray: "#868686",
	red: "#f44336",
	success: "#4caf50",
};

export const helpTheme = createTheme(defaultTheme, {
	palette: {
		primary: {
			main: paletteColors.primary,
		},
		secondary: {
			main: paletteColors.secondary,
		},
		terciary: {
			main: paletteColors.terciary,
		},
		background: {
			main: "#F4F5F6",
			secondary: "#FFF",
		},
		black: {
			main: paletteColors.black,
		},
		neutral: {
			main: paletteColors.neutral,
		},
		gray: {
			main: paletteColors.gray,
			secondary: "#B9BFC7",
		},
		red: {
			main: paletteColors.red,
		},
		success: {
			main: paletteColors.success,
		},
		contrastBox: {
			main: "#FFF",
			secondary: "#F5F5F5",
			overLight: "#F5F5F5",
			chart: "#eae1d8",
		},
		table: {
			evenLine: "#F5F5F5",
		},
		title: {
			kpis: paletteColors.primary,
		},
		report: {
			text: paletteColors.primary,
			table: {
				primary: paletteColors.primary,
				secondary: paletteColors.primary,
				terciary: "#969798",
			},
			circleLine: paletteColors.secondary,
			line: paletteColors.primary,
		},
	},

	logo: {
		width: 132,
		height: 74,
	},

	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					"& fieldset": {
						borderColor: paletteColors.primary,
					},

					"&:hover fieldset": {
						borderColor: paletteColors.secondary,
					},

					"&.Mui-focused fieldset": {
						borderColor: paletteColors.primary,
					},

					"input.Mui-disabled": {
						WebkitTextFillColor: paletteColors.secondary,
						color: paletteColors.secondary,
						backgroundColor: "#EEE",
					},
				},
			},
		},

		MuiInputBase: {
			styleOverrides: {
				root: {
					".MuiOutlinedInput-input": {
						WebkitTextFillColor: paletteColors.secondary,
						color: paletteColors.secondary,
					},
					fontSize: "0.875rem",

					"&.Mui-disabled": {
						WebkitTextFillColor: paletteColors.secondary,
						color: paletteColors.secondary,
						backgroundColor: "#EEE",
					},

					input: {
						color: paletteColors.secondary,
					},

					"&.Mui-focused": {
						input: {
							color: paletteColors.secondary,
						},
					},
				},
			},
		},

		MuiInputLabel: {
			styleOverrides: {
				root: {
					color: paletteColors.primary,
					fontSize: "0.875rem",
					"&.Mui-focused": {
						color: paletteColors.primary,
					},

					"&.Mui-disabled": {
						color: paletteColors.primary,
						fontWeight: "bold",
					},
				},
			},
		},

		MuiListItemButton: {
			styleOverrides: {
				root: {
					"&:hover": {
						background: `linear-gradient(to right, ${darken(
							0.05,
							paletteColors.primary,
						)} 0%, transparent 100%) 0% 0% no-repeat !important`,

						".MuiListItemIcon-root .MuiSvgIcon-root": {
							color: paletteColors.secondary,
						},

						".MuiListItemText-primary": {
							fontWeight: "bold",
						},
					},

					".MuiListItemText-primary": {
						color: "white !important",
						fontSize: "0.875rem",
					},

					"&.Mui-selected": {
						background: darken(0.04, paletteColors.primary),

						".MuiListItemText-primary": {
							color: paletteColors.primary,
							fontWeight: "bold",
						},
						".MuiSvgIcon-root": {
							color: paletteColors.secondary,
						},
					},
				},
			},
		},

		MuiButton: {
			styleOverrides: {
				containedPrimary: {
					"&:hover": {
						backgroundColor: darken(0.05, paletteColors.primary),
					},
				},
				containedSecondary: {
					"&:hover": {
						backgroundColor: darken(0.05, paletteColors.secondary),
					},
				},
				containedGray: {
					color: "#FFF",

					"&:hover": {
						backgroundColor: darken(0.05, paletteColors.gray),
					},
				},

				textPrimary: {
					"&:hover": {
						textDecoration: "underline",
						backgroundColor: "transparent",
					},
				},
				textSecondary: {
					"&:hover": {
						textDecoration: "underline",
						backgroundColor: "transparent",
					},
				},
				textGray: {
					"&:hover": {
						textDecoration: "underline",
						backgroundColor: "transparent",
					},
				},
			},

			variants: buttonVariants,
		},

		MuiTab: {
			styleOverrides: {
				root: {
					color: paletteColors.primary,
				},
			},
		},

		MuiStep: {
			styleOverrides: {
				root: {
					"& .MuiTypography-root.MuiTypography-caption": {
						color: "#000000DE",
					},
					"&.Mui-completed .MuiTypography-root.MuiTypography-caption": {
						color: paletteColors.secondary,
					},
				},
			},
		},

		MuiAutocomplete: {
			styleOverrides: {
				noOptions: {
					fontSize: "0.875rem",
				},

				root: {
					"& .MuiSvgIcon-root": {
						color: paletteColors.secondary,
					},
				},
				paper: {
					border: `1px solid ${paletteColors.primary}`,

					"& .MuiAutocomplete-option": {
						fontSize: "0.875rem",
						"&:hover": {
							backgroundColor: "#E3E4E5",
						},
					},
				},
			},
		},

		MuiFormHelperText: {
			styleOverrides: {
				root: {
					color: paletteColors.red,
					marginLeft: 0,
				},
			},
		},
	},
});

export default {
	name: "Help",
	theme: helpTheme,
	favicon: "/icons/help.png",
	link: "https://portal.wizsaude.com.br/",
};
