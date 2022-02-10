import { byoActions } from "../../../context/buildyourown-slice";
import { useDispatch, useSelector } from "react-redux";

import SideButton from "../../ui/SideButton";
import axios from "../../../network/axios";

const NextPhaseButton = (props) => {
	const dispatch = useDispatch();

	const phase = useSelector((state) => state.byo.phase);
	const solution = useSelector((state) => state.byo.solution);
	const regions = useSelector((state) => state.byo.regions);
	const inputComplete = useSelector((state) => state.byo.completePhaseOne);

	const completePhaseOne = phase === 1 && inputComplete;
	const regionComplete = useSelector((state) => state.byo.completePhaseTwo);
	const completePhaseTwo = phase === 2 && regionComplete;
	const completePhase = completePhaseOne || completePhaseTwo;

	const handleNextPhase = () => {
		dispatch(byoActions.nextPhase());
	};

	const handleSubmit = async () => {
		props.isLoading(true);

		try {
			const response = await axios({
				method: "POST",
				url: "/boards",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("sdk-token")}`,
				},
				data: {
					regions,
					solution,
				},
			});

			if (response.status === 201) {
				console.log("Submit successfully!");
				props.isLoading(false);
				props.showSuccessModal(true);
			}
		} catch (e) {
			props.isLoading(false);
			props.showErrorModal(true);
		}
	};

	const buttonTitle = phase === 2 ? "Submit >>" : "Next >>";

	return (
		<>
			<SideButton
				enabled={completePhase}
				onClick={phase < 2 ? handleNextPhase : handleSubmit}
				title={buttonTitle}
			/>
		</>
	);
};

export default NextPhaseButton;
