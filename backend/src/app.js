const express = require("express");
const userRouter = require("./routers/users");
const boardRouter = require("./routers/boards");
const cors = require("cors");

require("./db/mongoose");

const app = express();

app.use(express.json());

app.options("/users/login", cors());
app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST"],
	})
);

app.use(userRouter);
app.use(boardRouter);

module.exports = app;
