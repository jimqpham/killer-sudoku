const generateMatrix = (cells) => {
	const matrix = Array(9)
		.fill(-1)
		.map((x) => Array(9).fill(0));

	for (let cell of cells) {
		const [row, col] = cell;
		matrix[row][col] = 2;
	}
	return matrix;
};

const turnNeighborsToOne = (matrix, [row, col]) => {
	matrix[row][col] = 1;
	if (row > 0 && matrix[row - 1][col] === 2) {
		matrix[row - 1][col] = 1;
		turnNeighborsToOne(matrix, [row - 1, col]);
	}
	if (row < 8 && matrix[row + 1][col] === 2) {
		matrix[row + 1][col] = 1;
		turnNeighborsToOne(matrix, [row + 1, col]);
	}
	if (col > 0 && matrix[row][col - 1] === 2) {
		matrix[row][col - 1] = 1;
		turnNeighborsToOne(matrix, [row, col - 1]);
	}
	if (col < 8 && matrix[row][col + 1] === 2) {
		matrix[row][col + 1] = 1;
		turnNeighborsToOne(matrix, [row, col + 1]);
	}
};

const checkContiguous = (cells) => {
	const matrix = generateMatrix(cells);
	turnNeighborsToOne(matrix, cells[0]);
	let doesTwoExist = false;
	matrix.forEach((row) =>
		row.forEach((cell) => {
			if (cell === 2) doesTwoExist = true;
		})
	);
	return !doesTwoExist;
};

export default checkContiguous;
