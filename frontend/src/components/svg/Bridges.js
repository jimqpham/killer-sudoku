import DashedLine from "./DashedLine";

const padding = 7;
const paddingComplement = 100 - padding;

const topBridge = (topLeftDiag, topRightDiag) => (
	<>
		{!topLeftDiag && (
			<DashedLine x1={padding} y1={0} x2={padding} y2={padding} />
		)}
		{!topRightDiag && (
			<DashedLine
				x1={paddingComplement}
				y1={0}
				x2={paddingComplement}
				y2={padding}
			/>
		)}
	</>
);

const bottomBridge = (bottomLeftDiag, bottomRightDiag) => (
	<>
		{!bottomLeftDiag && (
			<DashedLine x1={padding} y1={paddingComplement} x2={padding} y2={100} />
		)}
		{!bottomRightDiag && (
			<DashedLine
				x1={paddingComplement}
				y1={paddingComplement}
				x2={paddingComplement}
				y2={100}
			/>
		)}
	</>
);

const leftBridge = (topLeftDiag, bottomLeftDiag) => (
	<>
		{!topLeftDiag && (
			<DashedLine x1={0} y1={padding} x2={padding} y2={padding} />
		)}
		{!bottomLeftDiag && (
			<DashedLine
				x1={0}
				y1={paddingComplement}
				x2={padding}
				y2={paddingComplement}
			/>
		)}
	</>
);

const rightBridge = (topRightDiag, bottomRightDiag) => (
	<>
		{!topRightDiag && (
			<DashedLine x1={paddingComplement} y1={padding} x2={100} y2={padding} />
		)}
		{!bottomRightDiag && (
			<DashedLine
				x1={paddingComplement}
				y1={paddingComplement}
				x2={100}
				y2={paddingComplement}
			/>
		)}
	</>
);

export { topBridge, bottomBridge, leftBridge, rightBridge };
