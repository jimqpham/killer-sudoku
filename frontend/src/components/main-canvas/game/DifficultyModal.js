import styles from "./DifficultyModal.module.css";

import Modal from "../../ui/Modal";

const DifficultyModal = (props) => {
	const handleChoosingDifficulty = (difficulty) => {
		props.startNewGame(difficulty);
	};

	const modalContent = (
		<ul className={styles.listWrap}>
			<li
				className={styles.listItem}
				onClick={handleChoosingDifficulty.bind(null, "Demo")}
			>
				One Cell Left (Demo Purpose)
			</li>
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
