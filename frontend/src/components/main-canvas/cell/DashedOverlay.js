import styles from "./DashedOverlay.module.css";

import {
	topBridge,
	bottomBridge,
	leftBridge,
	rightBridge,
} from "./svg-lines/Bridges";
import { topEdge, bottomEdge, leftEdge, rightEdge } from "./svg-lines/Edges";
import useCheckEdges from "../../../helpers/useCheckEdges";

const DashedOverlay = (props) => {
	const { row, col } = props;

	const {
		inRegion,
		isTopEdge,
		isBottomEdge,
		isLeftEdge,
		isRightEdge,
		topLeftDiag,
		topRightDiag,
		bottomLeftDiag,
		bottomRightDiag,
	} = useCheckEdges(row, col, props.inCustomMode);

	return (
		inRegion && (
			<svg width="100%" viewBox="0 0 100 100" className={styles.dashedOverlay}>
				{isTopEdge ? topEdge : topBridge(topLeftDiag, topRightDiag)}
				{isBottomEdge
					? bottomEdge
					: bottomBridge(bottomLeftDiag, bottomRightDiag)}
				{isLeftEdge ? leftEdge : leftBridge(topLeftDiag, bottomLeftDiag)}
				{isRightEdge ? rightEdge : rightBridge(topRightDiag, bottomRightDiag)}
			</svg>
		)
	);
};

export default DashedOverlay;
