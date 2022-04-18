import { container } from "@sapphire/framework";
import type { Snowflake } from "discord.js";

export async function GiveRole(
	userID: Snowflake,
	roleID: Snowflake,
	guildID: Snowflake
) {
	const guild = await container.client.guilds.fetch(guildID);
	if (!guild) return;
	const role = await guild.roles.fetch(roleID);
	if (!role) return;
	const member = await guild.members.fetch(userID);
	if (!member) return;
	return member.roles.add(role);
}
