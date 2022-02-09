import { useSelector } from "react-redux";

import styles from "./ProgressBar.module.css";

import ProgressNode from "./ProgressNode";

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
