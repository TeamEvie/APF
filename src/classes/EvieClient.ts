import { getNumberSecret, getSecret } from "#root/utils/parsers/envUtils";
import { oAuth2Transformer } from "#root/utils/transformers/oauth";
import { LogLevel, SapphireClient } from "@sapphire/framework";
import { Intents } from "discord.js";

export class EvieClient extends SapphireClient {
	public constructor() {
		super({
			api: {
				auth: {
					id: getSecret("DISCORD_CLIENT_ID"),
					secret: getSecret("DISCORD_SECRET"),
					cookie: getSecret("COOKIE_NAME"),
					redirect: getSecret("REDIRECT_URL"),
					scopes: ["identify", "connections"],
					transformers: [oAuth2Transformer],
				},
				origin: getSecret("ORIGIN_URL"),
				listenOptions: {
					port: getNumberSecret("API_PORT") || 4000,
				},
			},
			intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
			logger: {
				level: LogLevel.Info,
			},
			loadMessageCommandListeners: true,
			shards: "auto",
			allowedMentions: { users: [], roles: [] },
		});
	}
}
