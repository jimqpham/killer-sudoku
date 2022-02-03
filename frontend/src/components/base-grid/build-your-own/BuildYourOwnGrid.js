import styles from "./BuildYourOwnGrid.module.css";
import BlankCell from "./BlankCell";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { byoActions } from "../../../context/buildyourown-slice";
import populatedRegions from "../../../helpers/populatedRegions";

const BuildYourOwnGrid = (props) => {
	const { doPopulateRegions } = props;
	const dispatch = useDispatch();

	useEffect(() => {
		if (doPopulateRegions) {
			dispatch(byoActions.resetRegions());
			populatedRegions.forEach((region) =>
				dispatch(byoActions.updateRegions({ region }))
			);
		}
	}, [dispatch, doPopulateRegions]);

	return (
		<table className={styles.mainGrid}>
			<tbody>
				{[...Array(9).keys()].map((i, x) => (
					<tr key={`row${x}}`} className={styles.gridRow}>
						{[...Array(9).keys()].map((j) => (
							<BlankCell
								key={`row${i}col${j}`}
								className={styles.gridCell}
								row={i}
								col={j}
								onSelect={props.addToSelection.bind(null, [i, j])}
								onDeselect={props.removeFromSelection.bind(null, [i, j])}
								doPopulateInput={props.doPopulateInput}
								cellsInRegion={props.cellsInRegion}
							/>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default BuildYourOwnGrid;
