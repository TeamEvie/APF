import type { LoginData } from "@sapphire/plugin-api";
import { DoesUserSupportTheAPF } from "../api/GitHubTools";
import { GiveRole } from "../api/GiveRole";
import { getSecret } from "../parsers/envUtils";
import type { TransformedLoginData } from "./types";

export async function oAuth2Transformer({
	user,
	connections,
}: LoginData): Promise<TransformedLoginData> {
	if (!connections || !user) return { user, supportsAPF: false };

	const githubConnections = connections.filter((c) => c.type === "github");

	if (!githubConnections.length) return { user, supportsAPF: false };

	const supportsAPF = githubConnections.some(
		async (c) => await DoesUserSupportTheAPF(c.name)
	);

	if (!supportsAPF) return { user, supportsAPF: false };

	console.log(`Discord: ${user?.username} supports the APF!`);
	await GiveRole(user.id, getSecret("ROLE_ID"), getSecret("GUILD_ID"));
	return { user, supportsAPF: true };
}
