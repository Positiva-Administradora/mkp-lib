import { Box, styled } from "@mui/material";

export const IconWrapper = styled(Box)<{
	color: "primary" | "secondary";
}>(({ theme, color = "secondary" }) => ({
	display: "grid",
	placeItems: "center",
	backgroundColor: theme.palette[color as "primary" | "secondary"].main,
	padding: "6px",
	borderRadius: "6px",
}));
