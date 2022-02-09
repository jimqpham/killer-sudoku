import { useDispatch, useSelector } from "react-redux";

import styles from "./DraftModeToggle.module.css";

import SideButton from "../../ui/SideButton";
import { gameplayActions } from "../../../context/gameplay-slice";

const DraftModeToggle = () => {
	const inDraftMode = useSelector((state) => state.gameplay.inDraftMode);
	const dispatch = useDispatch();

	const toggleDraftMode = () => {
		dispatch(gameplayActions.toggleDraftMode());
	};

	const buttonTitle = (
		<>
			<img
				className={styles.draftIcon}
				src={inDraftMode ? "draft-on.png" : "draft-off.png"}
				alt="draft-icon"
			/>
			Draft Mode: {inDraftMode ? "On" : "Off"}
		</>
	);

	return (
		<SideButton
			className={styles.draftModeToggle}
			onClick={toggleDraftMode}
			enabled={true}
			title={buttonTitle}
		/>
	);
};

export default DraftModeToggle;
