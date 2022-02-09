const DashedLine = (props) => {
	return (
		<line
			x1={props.x1}
			y1={props.y1}
			x2={props.x2}
			y2={props.y2}
			stroke="navy"
			strokeWidth={1}
		/>
	);
};

export default DashedLine;
