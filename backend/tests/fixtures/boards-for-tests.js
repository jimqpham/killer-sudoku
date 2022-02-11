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

const demoBoard = {
	_id: new mongoose.Types.ObjectId(),
	regions: [
		{
			cells: [
				[0, 0],
				[1, 0],
			],
		},
		{
			cells: [
				[0, 1],
				[1, 1],
			],
		},
		{
			cells: [
				[0, 2],
				[0, 3],
			],
		},
		{
			cells: [
				[0, 4],
				[1, 4],
			],
		},
		{
			cells: [
				[0, 5],
				[0, 6],
				[0, 7],
			],
		},
		{
			cells: [
				[0, 8],
				[1, 8],
				[2, 8],
			],
		},
		{
			cells: [
				[1, 2],
				[1, 3],
			],
		},
		{
			cells: [
				[1, 5],
				[1, 6],
			],
		},
		{
			cells: [
				[1, 7],
				[2, 7],
			],
		},
		{
			cells: [
				[2, 0],
				[2, 1],
			],
		},
		{
			cells: [
				[2, 2],
				[3, 1],
				[3, 2],
			],
		},
		{
			cells: [
				[2, 3],
				[3, 3],
			],
		},
		{
			cells: [
				[2, 4],
				[3, 4],
				[3, 5],
			],
		},
		{
			cells: [
				[2, 5],
				[2, 6],
			],
		},
		{
			cells: [
				[3, 0],
				[4, 0],
			],
		},
		{
			cells: [
				[3, 6],
				[3, 7],
			],
		},
		{
			cells: [
				[3, 8],
				[4, 8],
			],
		},
		{
			cells: [
				[4, 1],
				[4, 2],
			],
		},
		{
			cells: [
				[4, 3],
				[5, 3],
			],
		},
		{
			cells: [
				[4, 4],
				[5, 4],
			],
		},
		{
			cells: [
				[4, 5],
				[5, 5],
			],
		},
		{
			cells: [
				[4, 6],
				[4, 7],
			],
		},
		{
			cells: [
				[5, 0],
				[5, 1],
			],
		},
		{
			cells: [
				[5, 2],
				[6, 2],
			],
		},
		{
			cells: [
				[5, 6],
				[5, 7],
			],
		},
		{
			cells: [
				[5, 8],
				[6, 8],
				[7, 8],
			],
		},
		{
			cells: [
				[6, 0],
				[7, 0],
			],
		},
		{
			cells: [
				[6, 1],
				[7, 1],
			],
		},
		{
			cells: [
				[6, 3],
				[7, 2],
				[7, 3],
			],
		},
		{
			cells: [
				[6, 4],
				[7, 4],
			],
		},
		{
			cells: [
				[6, 5],
				[6, 6],
				[6, 7],
			],
		},
		{
			cells: [
				[7, 5],
				[7, 6],
			],
		},
		{
			cells: [
				[7, 7],
				[8, 7],
				[8, 8],
			],
		},
		{
			cells: [
				[8, 0],
				[8, 1],
			],
		},
		{
			cells: [
				[8, 2],
				[8, 3],
				[8, 4],
			],
		},
		{
			cells: [
				[8, 5],
				[8, 6],
			],
		},
	],
	solution: [
		[2, 1, 5, 6, 4, 7, 3, 9, 8],
		[3, 6, 8, 9, 5, 2, 1, 7, 4],
		[7, 9, 4, 3, 8, 1, 6, 5, 2],
		[5, 8, 6, 2, 7, 4, 9, 3, 1],
		[1, 4, 2, 5, 9, 3, 8, 6, 7],
		[9, 7, 3, 8, 1, 6, 4, 2, 5],
		[8, 2, 1, 7, 3, 9, 5, 4, 6],
		[6, 5, 9, 4, 2, 8, 7, 1, 3],
		[4, 3, 7, 1, 6, 5, 2, 8, 9],
	],
};

module.exports = [boardTwo, boardThree, demoBoard];
