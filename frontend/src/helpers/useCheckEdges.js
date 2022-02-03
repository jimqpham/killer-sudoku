import { useSelector } from "react-redux";
import arrayIncludes from "./arrayIncludes";

const useCheckEdges = (row, col, inCustomMode) => {
	const regions = useSelector((state) =>
		inCustomMode === "true" ? state.byo.regions : state.gameplay.regions
	);

	let containingRegion;
	for (let region of regions) {
		if (arrayIncludes(region.cells, [row, col])) {
			containingRegion = region;
			break;
		}
	}

	if (!containingRegion) {
		return {
			inRegion: false,
			isTopEdge: false,
			isBottomEdge: false,
			isLeftEdge: false,
			isRightEdge: false,
		};
	}

	const isTopEdge = !arrayIncludes(containingRegion.cells, [row - 1, col]);
	const isBottomEdge = !arrayIncludes(containingRegion.cells, [row + 1, col]);
	const isLeftEdge = !arrayIncludes(containingRegion.cells, [row, col - 1]);
	const isRightEdge = !arrayIncludes(containingRegion.cells, [row, col + 1]);
	const topLeftDiag =
		!isTopEdge &&
		!isLeftEdge &&
		arrayIncludes(containingRegion.cells, [row - 1, col - 1]);
	const topRightDiag =
		!isTopEdge &&
		!isRightEdge &&
		arrayIncludes(containingRegion.cells, [row - 1, col + 1]);
	const bottomLeftDiag =
		!isBottomEdge &&
		!isLeftEdge &&
		arrayIncludes(containingRegion.cells, [row + 1, col - 1]);
	const bottomRightDiag =
		!isBottomEdge &&
		!isRightEdge &&
		arrayIncludes(containingRegion.cells, [row + 1, col + 1]);

	return {
		inRegion: true,
		isTopEdge,
		isBottomEdge,
		isLeftEdge,
		isRightEdge,
		topLeftDiag,
		topRightDiag,
		bottomLeftDiag,
		bottomRightDiag,
	};
};

export default useCheckEdges;
