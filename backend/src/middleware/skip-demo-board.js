const Board = require("../models/boards");

const isDemoBoard = (board) => {
	const demoSolution = [
		[2, 1, 5, 6, 4, 7, 3, 9, 8],
		[3, 6, 8, 9, 5, 2, 1, 7, 4],
		[7, 9, 4, 3, 8, 1, 6, 5, 2],
		[5, 8, 6, 2, 7, 4, 9, 3, 1],
		[1, 4, 2, 5, 9, 3, 8, 6, 7],
		[9, 7, 3, 8, 1, 6, 4, 2, 5],
		[8, 2, 1, 7, 3, 9, 5, 4, 6],
		[6, 5, 9, 4, 2, 8, 7, 1, 3],
		[4, 3, 7, 1, 6, 5, 2, 8, 9],
	];

	for (let row = 0; row < 9; row++)
		for (let col = 0; col < 9; col++)
			if (demoSolution[row][col] !== board.solution[row][col]) return false;

	return true;
};

const skipDemoBoard = (req, res, next) => {
	// If got submit a board generated from the Populate input button, don't save it and send back 200

	const board = new Board(req.body);

	if (!isDemoBoard(board)) next();
	else res.status(201).send("Demo board submitted successfully.");
};

module.exports = skipDemoBoard;
