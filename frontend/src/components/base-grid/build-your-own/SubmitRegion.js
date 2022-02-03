import { useDispatch } from "react-redux";
import { byoActions } from "../../../context/buildyourown-slice";
import styles from "./SubmitRegion.module.css";

const SubmitRegion = (props) => {
	const dispatch = useDispatch();

	const submitRegion = () => {
		dispatch(
			byoActions.updateRegions({ region: { cells: props.selectedCells } })
		);
		props.submit(props.selectedCells);
	};

	const isDisabled = props.isBlankSelection;

	return (
		<button
			className={`${styles.submitRegionButton} ${
				isDisabled
					? styles.submitRegionButton__disabled
					: styles.submitRegionButton__enabled
			}`}
			onClick={submitRegion}
			disabled={isDisabled}
		>
			Create Region
		</button>
	);
};

export default SubmitRegion;
