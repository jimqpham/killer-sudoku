import { useSelector } from "react-redux";

import styles from "./PopulateButton.module.css";

const PopulateButton = (props) => {
	const phase = useSelector((state) => state.byo.phase);

	const populateInput = () => {
		props.onClick("input");
	};

	const populateRegions = () => {
		props.onClick("regions");
	};

	const submitRegions = () => {
		console.log("Submit custom board!");
	};

	let helperButton;
	if (phase === 1)
		helperButton = (
			<button className={styles.populateInputButton} onClick={populateInput}>
				Populate Inputs
			</button>
		);
	else if (phase === 2)
		helperButton = (
			<button className={styles.populateInputButton} onClick={populateRegions}>
				Populate Regions
			</button>
		);
	else
		helperButton = (
			<button className={styles.populateInputButton} onClick={submitRegions}>
				Submit
			</button>
		);

	return helperButton;
};

export default PopulateButton;
