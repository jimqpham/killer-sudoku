import Header from "../components/ui/Header";
import BuildYourOwnGrid from "../components/base-grid/build-your-own/BuildYourOwnGrid";
import styles from "./BuildYourOwn.module.css";
import ProgressBar from "../components/base-grid/build-your-own/ProgressBar";

import { useState } from "react";
import arrayIncludes from "../helpers/arrayIncludes";
import HelperButtons from "../components/base-grid/build-your-own/HelperButtons";

const BuildYourOwn = () => {
	const [selectedCells, setSelectedCells] = useState([]);
	const [cellsInRegion, setCellsInRegion] = useState([]);
	const [doPopulateInput, setDoPopulateInput] = useState(false);
	const [doPopulateRegions, setDoPopulateRegions] = useState(false);

	const populate = (type) => {
		if (type === "input") {
			setDoPopulateInput(true);
		}
		if (type === "regions") {
			setDoPopulateRegions(true);
			setCellsInRegion(
				Array(81)
					.fill("")
					.map((x, index) => [Math.floor(index / 9), index % 9])
			);
		}
	};

	const addToSelection = (cellToAdd) => {
		if (!arrayIncludes(selectedCells, cellToAdd))
			setSelectedCells((state) => [...state, cellToAdd]);
	};

	const removeFromSelection = (cellToRemove) => {
		setSelectedCells((state) =>
			state.filter((cell) => cell.toString() !== cellToRemove.toString())
		);
	};

	const submitRegions = () => {
		setCellsInRegion((state) => [...state, ...selectedCells]);
		setSelectedCells([]);
	};

	const isBlankSelection = selectedCells.length === 0;

	return (
		<div className={styles.content}>
			<Header />
			<ProgressBar />
			<HelperButtons
				populate={populate}
				selectedCells={selectedCells}
				submitRegions={submitRegions}
				isBlankSelection={isBlankSelection}
			/>
			<BuildYourOwnGrid
				doPopulateInput={doPopulateInput}
				doPopulateRegions={doPopulateRegions}
				addToSelection={addToSelection}
				removeFromSelection={removeFromSelection}
				cellsInRegion={cellsInRegion}
			/>
		</div>
	);
};

export default BuildYourOwn;
