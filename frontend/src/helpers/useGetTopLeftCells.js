import { useSelector } from "react-redux";

const useGetTopLeftCellsAndSum = (inCustomMode) => {
	const regions = useSelector((state) =>
		inCustomMode === "true" ? state.byo.regions : state.gameplay.regions
	);
	let topLeftCellsAndSum = [];
	for (let region of regions) {
		topLeftCellsAndSum.push({ topLeftCell: region.cells[0], sum: region.sum });
	}

	return topLeftCellsAndSum;
};

export default useGetTopLeftCellsAndSum;
