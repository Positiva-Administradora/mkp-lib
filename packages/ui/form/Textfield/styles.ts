import {
	TextField as MuiTextField,
	styled
} from "@mui/material";

export const StyledTextField = styled(MuiTextField)<{
	borderless: boolean;
}>(({ borderless }) => ({
	"& fieldset": { border: borderless ? "none" : undefined },
}));
