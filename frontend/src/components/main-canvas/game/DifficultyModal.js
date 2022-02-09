import { useDispatch } from "react-redux";

import styles from "./DifficultyModal.module.css";

import Modal from "../../ui/Modal";
import { gameplayActions } from "../../../context/gameplay-slice";

const DifficultyModal = (props) => {
	const dispatch = useDispatch();

	const handleChoosingDifficulty = (difficulty) => {
		dispatch(gameplayActions.fillCells({ difficulty }));
		props.hideDifficultyModal();
	};

	const modalContent = (
		<ul className={styles.listWrap}>
			<li
				className={styles.listItem}
				onClick={handleChoosingDifficulty.bind(null, "Easy")}
			>
				Easy
			</li>
			<li
				className={styles.listItem}
				onClick={handleChoosingDifficulty.bind(null, "Medium")}
			>
				Medium
			</li>
			<li
				className={styles.listItem}
				onClick={handleChoosingDifficulty.bind(null, "Hard")}
			>
				Hard
			</li>
		</ul>
	);

	return <Modal title="Difficulty Level" content={modalContent} />;
};

export default DifficultyModal;
