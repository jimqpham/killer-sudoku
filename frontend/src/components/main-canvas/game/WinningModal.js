import { useDispatch } from "react-redux";

import styles from "./WinningModal.module.css";

import Modal from "../../ui/Modal";
import { gameplayActions } from "../../../context/gameplay-slice";

const WinningModal = (props) => {
	const dispatch = useDispatch();

	const handleNewGame = () => {
		props.closeModal();
		dispatch(gameplayActions.clear());
		props.chooseDifficulty();
	};

	const modalContent = (
		<>
			You win!
			<button className={styles.button} onClick={handleNewGame}>
				Start A New Game
			</button>
		</>
	);

	return <Modal title="Congratulations!" content={modalContent} />;
};

export default WinningModal;
