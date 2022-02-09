import styles from "./AreaSum.module.css";

import useGetSumCells from "../../../helpers/useGetSumCells";

const AreaSum = (props) => {
	const { row, col } = props;
	const sumCells = useGetSumCells(props.inCustomMode);
	let sum = -1;
	for (let sumCell of sumCells) {
		if (sumCell.topLeftCell.toString() === [row, col].toString())
			sum = sumCell.sum;
	}

	return sum !== -1 && <div className={styles.areaSum}>{sum}</div>;
};

export default AreaSum;
