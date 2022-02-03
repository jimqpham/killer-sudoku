import { useDispatch } from "react-redux";
import { useState } from "react";
import { gameplayActions } from "../../../context/gameplay-slice";
import styles from "./DifficultyModal.module.css";

const DifficultyModal = () => {
	const dispatch = useDispatch();
	const [showDifficultyModal, setShowDifficultyModal] = useState(true);

	const handleChoosingDifficulty = (difficulty) => {
		dispatch(gameplayActions.fillCells({ difficulty }));
		setShowDifficultyModal(false);
	};

	return (
		showDifficultyModal && (
			<>
				<div className={styles.backdrop} />
				<div className={styles.errorModal}>
					<div className={styles.title}>Difficulty</div>
					<div className={styles.content}>
						<ul>
							<li onClick={handleChoosingDifficulty.bind(null, "Easy")}>
								Easy
							</li>
							<li onClick={handleChoosingDifficulty.bind(null, "Medium")}>
								Medium
							</li>
							<li onClick={handleChoosingDifficulty.bind(null, "Hard")}>
								Hard
							</li>
						</ul>
					</div>
				</div>
			</>
		)
	);
};

export default DifficultyModal;
