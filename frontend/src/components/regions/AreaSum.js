import styles from "./AreaSum.module.css";
import useGetTopLeftCellsAndSum from "../../helpers/useGetTopLeftCells";

const AreaSum = (props) => {
	const { row, col } = props;
	const topLeftCellsAndSum = useGetTopLeftCellsAndSum(props.inCustomMode);
	let sum = -1;
	for (let topLeftCellAndSum of topLeftCellsAndSum) {
		if (topLeftCellAndSum.topLeftCell.toString() === [row, col].toString())
			sum = topLeftCellAndSum.sum;
	}

	return sum !== -1 && <div className={styles.areaSum}>{sum}</div>;
};

export default AreaSum;
