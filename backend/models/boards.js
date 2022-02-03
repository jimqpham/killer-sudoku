const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
	regions: {
		type: [
			{
				cells: { type: [[Number]] },
				sum: Number,
			},
		],
		required: true,
	},
	solution: {
		type: [[Number]],
		required: true,
	},
	flattenedSolution: {
		type: String,
		unique: true,
	},
});

boardSchema.methods.toJSON = function () {
	const board = this;
	const boardObject = board.toObject();

	delete boardObject.flattenedSolution;

	return boardObject;
};

boardSchema.pre("save", function (next) {
	const board = this;

	let flattenedSolution = "";
	for (let i = 0; i < 9; i++)
		for (let j = 0; j < 9; j++)
			flattenedSolution += String(board.solution[i][j]);

	board.flattenedSolution = flattenedSolution;
	next();
});

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;
