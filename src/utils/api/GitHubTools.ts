import axios from "axios";

export async function DoesUserSupportTheAPF(
	username: string
): Promise<boolean> {
	const data = await axios.get(
		`https://github.com/${username}?tab=sponsoring`
	);
	const htmlGH = data.data;
	return htmlGH.includes(
		`<span class="Link--secondary pl-1">discordjs</span>`
	);
}
