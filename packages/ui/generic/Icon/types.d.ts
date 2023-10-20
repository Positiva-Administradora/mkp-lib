import { CSSProperties, ElementType } from "react";

export interface IconProps {
	element: ElementType;
	onClick?: () => void;
	style?: CSSProperties;
}