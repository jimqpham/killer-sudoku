const mongoose = require("mongoose");

const boardTwo = {
	_id: new mongoose.Types.ObjectId(),
	regions: [
		{
			cells: Array(54)
				.fill(0)
				.map((x, i) => [Math.floor(i / 6), i % 9]),
			sum: 180,
		},
		{
			cells: Array(27)
				.fill(0)
				.map((x, i) => [3 + Math.floor(i / 6), i % 9]),
			sum: 45,
		},
	],
	solution: Array(9)
		.fill(0)
		.map((x, i) =>
			Array(9)
				.fill(0)
				.map((x, j) => ((i + j + 5) % 9) + 1)
		),
};

const boardThree = {
	_id: new mongoose.Types.ObjectId(),
	regions: [
		{
			cells: Array(54)
				.fill(0)
				.map((x, i) => [Math.floor(i / 6), i % 9]),
			sum: 180,
		},
		{
			cells: Array(27)
				.fill(0)
				.map((x, i) => [3 + Math.floor(i / 6), i % 9]),
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

module.exports = [boardTwo, boardThree];
