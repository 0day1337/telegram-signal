const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// SETUP
require("dotenv").config();
app.set("json spaces", 2);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
app.use("/bot", require("./bot"));
app.use("/user", require("./user"));
app.use("/send", require("./send"));

// LISTEN
app.listen(port, () => {
	console.log("Server listening to port %s", port);
});

// CATCH
process.on("uncaughtException", (error) => {
	console.log(`Uncaught Exception: ${error.message}`);
	process.exit(1);
});