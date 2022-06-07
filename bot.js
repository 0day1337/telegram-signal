const { Client, Intents } = require("discord.js");

const messages = new Array();

/*
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
    console.log("bot connected", { id: client.user.id, username: client.user.username });
});

client.on("messageCreate", (message) => {
    const received = {
        id: message.author.id,
        username: message.author.username,
        message: message.content || message.embeds.map((item) => item.description)
    };
    messages.push(received);
    console.log("bot received", received);
});
*/

module.exports = async (request, response) => {
    response.json(messages);
};