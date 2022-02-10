const getRandomCoords = (numCoords) => {
	const coords = [];

	let pool = Array(81)
		.fill(0)
		.map((x, i) => [Math.floor(i / 9), i % 9]);

	while (coords.length < numCoords) {
		const randomIndex = Math.floor(Math.random() * pool.length);

		coords.push(pool[randomIndex]);
		pool.splice(randomIndex, 1);
	}

	return coords;
};
// min inclusive, max exclusive

export default getRandomCoords;
