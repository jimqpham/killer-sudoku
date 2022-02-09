import { useDispatch } from "react-redux";

import styles from "./RestartButton.module.css";

import SideButton from "../../ui/SideButton";
import { gameplayActions } from "../../../context/gameplay-slice";

const RestartButton = (props) => {
	const dispatch = useDispatch();

	const handleRestart = async () => {
		dispatch(gameplayActions.clear());
		props.chooseDifficulty();
	};

	return (
		<SideButton
			className={styles.restartButton}
			onClick={handleRestart}
			title="Restart"
			enabled={true}
		/>
	);
};

export default RestartButton;
