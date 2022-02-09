import { byoActions } from "../../../context/buildyourown-slice";
import { useDispatch, useSelector } from "react-redux";

import SideButton from "../../ui/SideButton";

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

	const buttonTitle = phase === 2 ? "Submit >>" : "Next >>";

	return (
		<SideButton
			enabled={completePhase}
			onClick={phase < 2 ? handleNextPhase : handleSubmit}
			title={buttonTitle}
		/>
	);
};

export default NextPhaseButton;
