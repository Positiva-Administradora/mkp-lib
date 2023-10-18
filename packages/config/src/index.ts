import { whiteLabel } from "./white-label";
export * from "./fonts"

export const getWhiteLabel = (env: "wiz" | "positiva" | "help" | "meprotege") => {
	const currentEnv = env;
	return whiteLabel[currentEnv];
};