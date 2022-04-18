import type { LoginData } from "@sapphire/plugin-api";

export interface TransformedLoginData extends LoginData {
	supportsAPF: boolean;
}
