import SideButton from "../../ui/SideButton";
import styles from "./RestartButton.module.css";

const RestartButton = (props) => {
	const handleRestart = () => {
		props.restart();
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
