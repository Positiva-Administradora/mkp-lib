import { Box } from "@mui/material";

import { Divider } from "../Divider";
import { TitleProps } from "./types";
import { StyledTypography } from "./styles";

export const Title = ({
	children,
	borderBottom = false,
	gradient = false,
	sx,
	boxSx,
}: TitleProps) => {
	return (
		<Box sx={{ width: "fit-content", ...boxSx }}>
			<StyledTypography
				gradient={gradient}
				sx={{
					lineHeight: "130%",
					...sx,
				}}
			>
				{children}
			</StyledTypography>

			{borderBottom && <Divider rounded size="lg" sx={{ mt: 1.5 }} />}
		</Box>
	);
};

