const arrayIncludes = (includingArr, arr) => {
	for (let el of includingArr)
		if (el.toString() === arr.toString()) return true;

	return false;
};

export default arrayIncludes;
