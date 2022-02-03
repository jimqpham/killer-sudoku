import { byoActions } from "../../../context/buildyourown-slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./NextPhaseButton.module.css";

const NextPhaseButton = () => {
	const dispatch = useDispatch();
	const phase = useSelector((state) => state.byo.phase);
	const inputComplete = useSelector((state) => state.byo.completePhaseOne);
	const completePhaseOne = phase === 1 && inputComplete;
	const regionComplete = useSelector((state) => state.byo.completePhaseTwo);
	const completePhaseTwo = phase === 2 && regionComplete;
	const completePhase = completePhaseOne || completePhaseTwo;

	const handleNextPhase = () => {
		dispatch(byoActions.nextPhase());
	};

	const handleSubmit = () => {
		console.log("submit board!");
	};

	return (
		<button
			className={`${styles.nextPhaseButton} ${
				completePhase
					? styles.nextPhaseButton__enabled
					: styles.nextPhaseButton__disabled
			}`}
			onClick={phase < 2 ? handleNextPhase : handleSubmit}
			disabled={!completePhase ? true : false}
		>
			{phase === 1 && <>Next &gt;&gt;</>}
			{phase === 2 && <>Submit &gt;&gt;</>}
		</button>
	);
};

export default NextPhaseButton;
