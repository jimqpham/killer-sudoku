const getRandomCoords = (numCoords) => {
	const coords = Array(numCoords)
		.fill(-1)
		.map((x) => {
			const row = Math.floor(Math.random() * 9);
			const col = Math.floor(Math.random() * 9);
			return [row, col];
		});

	return coords;
};
// min inclusive, max exclusive

export default getRandomCoords;
