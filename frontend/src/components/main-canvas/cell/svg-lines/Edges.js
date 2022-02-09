import DashedLine from "./DashedLine";

const padding = 7;
const paddingComplement = 100 - padding;

const topEdge = (
	<DashedLine x1={padding} y1={padding} x2={paddingComplement} y2={padding} />
);
const bottomEdge = (
	<DashedLine
		x1={padding}
		y1={paddingComplement}
		x2={paddingComplement}
		y2={paddingComplement}
	/>
);
const leftEdge = (
	<DashedLine x1={padding} y1={padding} x2={padding} y2={paddingComplement} />
);
const rightEdge = (
	<DashedLine
		x1={paddingComplement}
		y1={padding}
		x2={paddingComplement}
		y2={paddingComplement}
	/>
);

export { topEdge, bottomEdge, leftEdge, rightEdge };
