const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../../src/models/users");
const Board = require("../../src/models/boards");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
	_id: userOneId,
	email: "jimqpham@gmail.com",
	password: "56what!!",
	role: "admin",
	tokens: [
		{
			token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
		},
	],
};

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
	_id: userTwoId,
	email: "andrew@example.com",
	password: "789what??",
	tokens: [
		{
			token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET),
		},
	],
};

const boardOne = {
	_id: new mongoose.Types.ObjectId(),
	regions: [
		{
			cells: Array(36)
				.fill(0)
				.map((x, i) => [Math.floor(i / 6), i % 6]),
			sum: 180,
		},
		{
			cells: Array(18)
				.fill(0)
				.map((x, i) => [Math.floor(i / 3), 6 + (i % 3)]),
			sum: 90,
		},
		{
			cells: Array(18)
				.fill(0)
				.map((x, i) => [6 + Math.floor(i / 6), i % 6]),
			sum: 90,
		},
		{
			cells: Array(18)
				.fill(0)
				.map((x, i) => [6 + Math.floor(i / 3), 6 + (i % 3)]),
			sum: 45,
		},
	],
	solution: Array(9)
		.fill(0)
		.map((x, i) =>
			Array(9)
				.fill(0)
				.map((x, j) => ((i + j) % 9) + 1)
		),
};

const setupDatabase = async () => {
	await User.deleteMany();
	await Board.deleteMany();
	await new User(userOne).save();
	await new User(userTwo).save();
	await new Board(boardOne).save();
};

module.exports = {
	userOneId,
	userTwoId,
	userOne,
	userTwo,
	boardOne,
	setupDatabase,
};
