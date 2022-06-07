const fetch = require("node-fetch");

const messages = new Array();

const channels = new Object(); // input  => output
channels["884218520521551972"] = "https://bots.binance.web.id/check.php"; //bens-corner Signal
channels["944029814485037096"] = "https://bots.binance.web.id/check.php"; //binance360
channels["965753781650350130"] = "https://bots.binance.web.id/check.php"; //trading-by-cf
channels["965408421488754709"] = "https://bots.binance.web.id/check.php"; //smith-margin
channels["846002566797590578"] = "https://bots.binance.web.id/check.php"; //Forex-tradings-premium
channels["859043208393785344"] = "https://bots.binance.web.id/check.php"; //Always Win
channels["822801333941174312"] = "https://bots.binance.web.id/check.php"; //Bitmex Premium Signals
channels["976932379010695189"] = "https://bots.binance.web.id/check.php"; //INPUT 1
channels["977243501223882773"] = "https://bots.binance.web.id/check.php"; //INPUT 2
channels["977230743757537290"] = "https://bots.binance.web.id/check.php"; //INPUT 3


const Webhook = async (url, content) => {
    return await fetch(url, {
        method: "POST",
        body: JSON.stringify({ content }),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bot ${process.env.USER_TOKEN}`
        }
    });
};

import("selfcore").then((selfcore) => {
    const gateway = new selfcore.default.Gateway(process.env.USER_TOKEN);
    gateway.on("message", async (message) => {
        const channel = channels[message.channel_id];
        if (channel) {
                const received = {
                    id: message.author.id,
                    username: message.author.username,
                    message: message.content || message.embeds.map((item) => item.description)
                };
                messages.push(received); console.log("user received", received);
                Webhook(channel, received.message).then((data) => {
                    console.log("done");
                }).catch((error) => {
                    console.log("error", error);
                });
        }
    });
}).catch((error) => {
    console.log("error", error);
});

module.exports = async (request, response) => {
    response.json(messages);
};