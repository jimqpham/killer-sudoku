import styles from "./HelperButtons.module.css";
import PopulateButton from "./PopulateButton";
import SubmitRegion from "./SubmitRegion";
import NextPhaseButton from "./NextPhaseButton";
import { useSelector } from "react-redux";

const HelperButtons = (props) => {
	const phase = useSelector((state) => state.byo.phase);

	return (
		<div className={styles.helperWrapper}>
			<NextPhaseButton />
			{phase === 2 && (
				<SubmitRegion
					selectedCells={props.selectedCells}
					submit={props.submitRegions}
					isBlankSelection={props.isBlankSelection}
				/>
			)}
			<PopulateButton onClick={props.populate} />
		</div>
	);
};

export default HelperButtons;
