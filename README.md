# APF Checker

The Anime Pillow Fund (APF) Checker is a tool to give out the "Sponsor" role automatically to anyone that can complete the
oAuth2 authentication process and have a linked GitHub account that sponsors [discord.js](https://github.com/sponsors/discordjs).

## How it works?

It simply creates a route on `/oauth/callback` that is used as the callback for Discord's oAuth2 authentication process.
Once it gets a valid code, it will find out the user's linked GitHub accounts and if one of them is a sponsor, it will give out the "Sponsor" role.
As a bonus it will return the `user` object and an extra `supportsAPF` boolean property to be used on a frontend of your choice.

## Example Flow

1. User visits https://example.com/apf
2. User is redirected to Discord's oAuth2 authentication page
3. User is redirected to https://example.com/oauth/callback?code=<code>
4. Frontend fetches back the user object and the `supportsAPF` boolean property to see if the user is a sponsor to give an indicator to the user
    ```ts
    const data: APILogin = await Nico.post(`/oauth/callback`, {
        code,
        clientId: process.env.CLIENT_ID,
        redirectUri: `${process.env.LIVE_URL}/oauth/callback`,
    });
    ```
