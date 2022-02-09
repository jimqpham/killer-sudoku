const express = require("express");
const userRouter = require("./routers/users");
const boardRouter = require("./routers/boards");

require("./db/mongoose");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(boardRouter);

module.exports = app;
