import arrayIncludes from "./arrayIncludes";

const checkDuplicates = (rowIndex, colIndex, inputs) => {
	console.log("Hi!");
	const duplicateCoords = [];
	const duplicateCoordsInRow = detectDuplicatesInRow(rowIndex, inputs);
	const duplicateCoordsInCol = detectDuplicatesInCol(colIndex, inputs);
	const duplicateCoordsInBlock = detectDuplicatesInBlock(
		rowIndex,
		colIndex,
		inputs
	);
	for (let coords of [
		...duplicateCoordsInRow,
		...duplicateCoordsInCol,
		...duplicateCoordsInBlock,
	]) {
		if (!arrayIncludes(duplicateCoords, coords)) duplicateCoords.push(coords);
	}
	return duplicateCoords;
};

const detectDuplicates = (arr) => {
	const duplicateIndex = [];
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				if (!duplicateIndex.includes(i)) duplicateIndex.push(i);
				if (!duplicateIndex.includes(j)) duplicateIndex.push(j);
			}
		}
	}
	return duplicateIndex;
};

const detectDuplicatesInRow = (rowIndex, inputs) => {
	const row = inputs[rowIndex];
	const duplicateCoords = detectDuplicates(row).map((index) => [
		rowIndex,
		index,
	]);
	return duplicateCoords;
};

const detectDuplicatesInCol = (colIndex, inputs) => {
	const col = inputs.map((row) => row[colIndex]);
	const duplicateCoords = detectDuplicates(col).map((index) => [
		index,
		colIndex,
	]);
	return duplicateCoords;
};

const detectDuplicatesInBlock = (rowIndex, colIndex, inputs) => {
	const flattener = (prev, current) => [...prev, ...current];
	const block = inputs
		.filter((row, x) => Math.floor(x / 3) === Math.floor(rowIndex / 3))
		.map((row) =>
			row.slice(Math.floor(colIndex / 3) * 3, Math.floor(colIndex / 3) * 3 + 3)
		)
		.reduce(flattener);
	const duplicateCoords = [];
	detectDuplicates(block).forEach((index) => {
		const localRow = Math.floor(index / 3);
		const localCol = index % 3;
		const row = Math.floor(rowIndex / 3) + localRow;
		const col = Math.floor(colIndex / 3) + localCol;
		duplicateCoords.push([row, col]);
	});
	return duplicateCoords;
};

export default checkDuplicates;
