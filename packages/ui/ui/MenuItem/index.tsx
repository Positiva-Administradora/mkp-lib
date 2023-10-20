import Link from "next/link";
import { MenuItemProps } from "./types";
import { StyledTypography } from "./styles";

export const MenuItem = ({
	children,
	color = "dark",
	active = false,
	behavior = "animated",
	sx,
	href,
	linkProps,
	...rest
}: MenuItemProps) => {
	const menuItemProps = {
		sx,
		color,
		active,
		behavior,
		...rest,
	};

	if (href) {
		return (
			<Link href={href} style={{ textDecoration: "none" }} {...linkProps}>
				<StyledTypography whiteSpace="nowrap" {...menuItemProps}>
					{children}
				</StyledTypography>
			</Link>
		);
	}

	return (
		<StyledTypography whiteSpace="nowrap" {...menuItemProps}>
			{children}
		</StyledTypography>
	);
};