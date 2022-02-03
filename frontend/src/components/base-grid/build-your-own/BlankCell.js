import DashedOverlay from "../../regions/DashedOverlay";
import AreaSum from "../../regions/AreaSum";
import populatedInputs from "../../../helpers/populateInput";

import styles from "./BlankCell.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { byoActions } from "../../../context/buildyourown-slice";
import arrayIncludes from "../../../helpers/arrayIncludes";

const BlankCell = (props) => {
	const { row, col, doPopulateInput } = props;
	const [isSelected, setIsSelected] = useState(false);
	const inputs = useSelector((state) => state.byo.solution);
	const phase = useSelector((state) => state.byo.phase);
	const cellsInRegion = props.cellsInRegion;
	const dispatch = useDispatch();

	const handleClickCell = () => {
		if (phase === 2 && !arrayIncludes(cellsInRegion, [row, col])) {
			if (isSelected) {
				setIsSelected(false);
				props.onDeselect([row, col]);
			} else {
				setIsSelected(true);
				props.onSelect([row, col]);
			}
		}
	};

	const handleKeyPress = (event) => {
		if (phase === 1)
			if (event.key >= "1" && event.key <= "9") {
				dispatch(byoActions.updateInputs({ input: event.key, row, col }));
			}
	};

	const blankCellClassName =
		phase === 1
			? styles.cellGrid__phaseOne
			: isSelected || arrayIncludes(cellsInRegion, [row, col])
			? styles.cellGrid__selected__phaseTwo
			: styles.cellGrid__unselected__phaseTwo;

	useEffect(() => {
		if (doPopulateInput)
			dispatch(
				byoActions.updateInputs({
					input: populatedInputs[row][col].toString(),
					row,
					col,
				})
			);
	}, [row, col, doPopulateInput, dispatch]);

	return (
		<>
			<td
				className={`${props.className} ${blankCellClassName}`}
				tabIndex={1}
				onClick={handleClickCell}
				onKeyPress={handleKeyPress}
			>
				<DashedOverlay row={row} col={col} inCustomMode="true" />
				<AreaSum row={row} col={col} inCustomMode="true" />
				{inputs[row][col]}
			</td>
		</>
	);
};

export default BlankCell;
