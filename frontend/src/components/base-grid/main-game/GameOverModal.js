import { useDispatch } from "react-redux";
import { gameplayActions } from "../../../context/gameplay-slice";
import styles from "./GameOverModal.module.css";

const GameOverModal = () => {
	const dispatch = useDispatch();

	const handleTryAgain = () => {
		dispatch(gameplayActions.reset());
	};

	return (
		<>
			<div className={styles.backdrop} />
			<div className={styles.errorModal}>
				<div className={styles.title}>GAME OVER</div>
				<div className={styles.content}>
					Sorry, you lost! Better luck next time :(
					<button className={styles.button} onClick={handleTryAgain}>
						Try again
					</button>
				</div>
			</div>
		</>
	);
};

export default GameOverModal;
