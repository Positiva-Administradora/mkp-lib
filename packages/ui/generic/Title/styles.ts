import { Theme, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import { TitleProps } from "./types";

export const gradientWrapper = (theme: Theme) => ({
	background: `linear-gradient(to right bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
	backgroundClip: "text",
	WebkitBackgroundClip: "text",
	color: "transparent",
});

export const StyledTypography = styled(Typography)<TitleProps>(({ theme, gradient }) => ({
	...(gradient ? gradientWrapper(theme) : {}),
}));
