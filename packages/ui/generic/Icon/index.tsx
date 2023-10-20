import { IconProps } from "./types";

export const Icon = ({ element: Element, onClick, ...rest }: IconProps) => {
	return <Element onClick={onClick} {...rest} />;
};

