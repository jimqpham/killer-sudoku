import ProgressNode from "./ProgressNode";
import styles from "./ProgressBar.module.css";
import { useSelector } from "react-redux";

const ProgressBar = () => {
	const phase = useSelector((state) => state.byo.phase);

	return (
		<div className={styles.progressBar}>
			<ProgressNode number="1" content="Fill In Numbers" active={phase === 1} />
			<ProgressNode number="2" content="Create Regions" active={phase === 2} />
		</div>
	);
};

export default ProgressBar;
