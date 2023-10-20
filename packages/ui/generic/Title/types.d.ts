export type TypographyProps = Pick<MuiTypographyProps, "sx">;

export interface TitleProps extends TypographyProps {
	children: React.ReactNode;
	borderBottom?: boolean;
	gradient?: boolean;
	boxSx?: SxProps;
}