const express = require("../socket/node_modules/express");
const io = require("../socket/node_modules/socket.io");
const { v4: uuidV4 } = require("uuid");
const app = express();
const ejs = require("../ejs_express/node_modules/ejs");
const server = require("http").Server(app);

app.set("view engine", "ejs");

app.use(express.static("views"));

app.get("/", (req, res) => {
	res.redirect(`/${uuidV4}`);
});

app.get("/:room", (req, res) => {
	res.render("room", { roomid: req.params.room });
});

app.listen(3000, () => {
	console.log("run app ");
});
