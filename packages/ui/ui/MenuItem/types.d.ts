import { TypographyProps } from "@mui/material";

export type TypographyBaseProps = Pick<TypographyProps, "sx" | "onClick">;

export interface MenuItemProps extends TypographyBaseProps {
	children: string;
	active?: boolean;
	color?: "light" | "dark";
	href?: string;
	linkProps?: React.ComponentProps<typeof Link>;
	behavior?: "standard" | "animated";
}