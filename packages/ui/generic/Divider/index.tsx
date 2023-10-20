import { DividerProps } from "./types";
import { StyledDivider } from "./styles";

export const Divider = ({
	size = "md",
	decoration = "gradient",
	rounded = false,
	...props
}: DividerProps) => {
	return <StyledDivider size={size} decoration={decoration} rounded={rounded} {...props} />;
};

