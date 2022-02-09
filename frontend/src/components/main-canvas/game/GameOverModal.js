import { useDispatch } from "react-redux";

import styles from "./GameOverModal.module.css";

import Modal from "../../ui/Modal";
import { gameplayActions } from "../../../context/gameplay-slice";

const GameOverModal = () => {
	const dispatch = useDispatch();

	const handleTryAgain = () => {
		dispatch(gameplayActions.reset());
	};

	const gameOverModalContent = (
		<>
			Sorry, you lost! Better luck next time :(
			<button className={styles.button} onClick={handleTryAgain}>
				Try again
			</button>
		</>
	);

	return <Modal title="Game Over" content={gameOverModalContent} />;
};

export default GameOverModal;
