const fetch = require("node-fetch");

const Webhook = async (content) => {
    const webhook = { id: "976929490427060266", token: "jfvowlcN9oPw951GTY3iUPLkoJUr6YyDtz-tR-gOdYf0IAoBhWJOffevIvi12z0q7aFr" };
    return fetch(`https://discordapp.com/api/webhooks/${webhook.id}/${webhook.token}`, {
        method: "POST",
        body: JSON.stringify(content),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bot ${process.env.USER_TOKEN}`
        }
    });
};




module.exports = async (request, response) => {
    if (request.query.message) Webhook({ content: request.query.message }).then((data) => {
        response.json({ message: "Sent" });
    }).catch((error) => {
        console.log("error", error);
        response.json({});
    });
};