export const registeredGuilds = process.env.GUILD_ID
	? [process.env.GUILD_ID]
	: [];

export const botAdmins = process.env.BOT_ADMINS
	? process.env.BOT_ADMINS.split(",")
	: ["97470053615673344"];

export function getSecret(key: string) {
	return process.env[key] || "";
}

export function getNumberSecret(key: string) {
	const value = process.env[key];
	return value ? parseInt(value) ?? null : null;
}
