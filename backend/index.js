const express = require("express");
const userRouter = require("./routers/users");
const boardRouter = require("./routers/boards");

require("./db/mongoose");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});
app.use(userRouter);
app.use(boardRouter);

app.listen(port, () => {
	console.log("Server is up on port " + port);
});
