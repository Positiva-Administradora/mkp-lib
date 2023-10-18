import { createTheme } from "@mui/material";
import { darken } from "polished";
import { defaultTheme } from "../themes";
import { buttonVariants } from "../buttonsVariants";

export const paletteColors = {
	primary: "#00b2e2",
	secondary: "#2b328c",
	terciary: "#1672B7",
	black: "#50555A",
	neutral: "#808080",
	background: "#CECECE",
	gray: "#868686",
	red: "#f44336",
	success: "#4caf50",
};

export const positivaTheme = createTheme(defaultTheme, {
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
			main: paletteColors.background,
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
			secondary: "#EAEAEA",
			overLight: "#F8F7F5",
			chart: "#E5E5E5",
		},
		table: {
			evenLine: "#EAEAEA",
		},
		title: {
			kpis: paletteColors.secondary,
		},
		report: {
			text: paletteColors.secondary,
			table: {
				primary: paletteColors.secondary,
				secondary: "#FFF",
				terciary: "#969798",
			},
			circleLine: paletteColors.primary,
			line: paletteColors.secondary,
		},
	},

	logo: {
		width: 130,
		height: 50,
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
					color: paletteColors.secondary,
					fontSize: "0.875rem",
					"&.Mui-focused": {
						color: paletteColors.secondary,
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
	name: "Positiva",
	theme: positivaTheme,
	favicon: "/icons/positiva.png",
	link: "https://portal.positiva.com.br/",
};
