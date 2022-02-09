import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import styles from "./Cell.module.css";
import DashedOverlay from "../cell/DashedOverlay";
import AreaSum from "../cell/AreaSum";
import Draft from "./Draft";

import { gameplayActions } from "../../../context/gameplay-slice";
import validateInputKey from "../../../helpers/validateInputKey";

const Cell = (props) => {
	const { row, col } = props;
	const dispatch = useDispatch();
	const displayedValue = useSelector((state) => state.gameplay.input[row][col]);
	const isCorrectAnswer =
		useSelector((state) => state.gameplay.solution[row][col]) ===
		+displayedValue;
	const inDraftMode = useSelector((state) => state.gameplay.inDraftMode);
	const [draft, setDraft] = useState("");

	const handleKeyPress = (event) => {
		const didUpdateValue = event.key !== displayedValue;
		if (!inDraftMode && !isCorrectAnswer && didUpdateValue) {
			dispatch(
				gameplayActions.updateAndCheckInput({ row, col, input: event.key })
			);
		} else if (inDraftMode) {
			if (validateInputKey(event.key)) {
				setDraft(event.key);
			}
		}
	};

	const correctnessCSSClasses = isCorrectAnswer
		? styles["cellGrid__correct-input"]
		: displayedValue.trim().length !== 0
		? styles["cellGrid__incorrect-input"]
		: styles["cellGrid__blank"];

	return (
		<>
			<td
				className={`${props.className} ${correctnessCSSClasses}`}
				tabIndex={1}
				onKeyPress={handleKeyPress}
			>
				<>
					<DashedOverlay row={row} col={col} />
					<AreaSum row={row} col={col} inCustomMode="false" />
					{!isCorrectAnswer && <Draft value={draft} />}
					{displayedValue}
				</>
			</td>
		</>
	);
};

export default Cell;
