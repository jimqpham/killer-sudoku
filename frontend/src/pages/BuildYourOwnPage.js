import { useState } from "react";

import styles from "./BuildYourOwnPage.module.css";

import Header from "../components/ui/Header";
import Modal from "../components/ui/Modal";
import BuildYourOwnGrid from "../components/main-canvas/byo/BuildYourOwnGrid";
import ProgressBar from "../components/main-canvas/byo/ProgressBar";
import HelperButtons from "../components/main-canvas/byo/HelperButtons";
import RequireAdminAuthUser from "../components/auth/RequireAdminAuthUser";
import arrayIncludes from "../helpers/arrayIncludes";
import LoadingModal from "../components/ui/LoadingModal";

const BuildYourOwn = () => {
	const [selectedCells, setSelectedCells] = useState([]);
	const [cellsInRegion, setCellsInRegion] = useState([]);
	const [doPopulateInput, setDoPopulateInput] = useState(false);
	const [doPopulateRegions, setDoPopulateRegions] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const [showErrorModal, setShowErrorModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

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

	const successModal = showSuccessModal && (
		<Modal
			title="Submission Successful"
			content="Board has been submitted!"
			closeModal={() => {
				setShowSuccessModal(false);
			}}
		/>
	);

	const errorModal = showErrorModal && (
		<Modal
			title="Submission Failed"
			content="Board failed to submit!"
			closeModal={() => {
				setShowErrorModal(false);
			}}
		/>
	);

	const isBlankSelection = selectedCells.length === 0;

	return (
		<RequireAdminAuthUser>
			{isLoading && <LoadingModal />}
			<div className={styles.content}>
				<Header />
				<ProgressBar />
				<HelperButtons
					populate={populate}
					selectedCells={selectedCells}
					submitRegions={submitRegions}
					isBlankSelection={isBlankSelection}
					showSuccessModal={() => setShowSuccessModal(true)}
					showErrorModal={() => {
						setShowErrorModal(true);
					}}
					setIsLoading={(loading) => setIsLoading(loading)}
				/>
				<BuildYourOwnGrid
					doPopulateInput={doPopulateInput}
					doPopulateRegions={doPopulateRegions}
					addToSelection={addToSelection}
					removeFromSelection={removeFromSelection}
					cellsInRegion={cellsInRegion}
				/>
				{successModal}
				{errorModal}
			</div>
		</RequireAdminAuthUser>
	);
};

export default BuildYourOwn;
