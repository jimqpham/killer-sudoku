import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameplayActions } from "../../../context/gameplay-slice";
import styles from "./DraftModeToggle.module.css";

const DraftModeToggle = () => {
	const inDraftMode = useSelector((state) => state.gameplay.inDraftMode);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(gameplayActions.toggleDraftMode(inDraftMode));
	}, [inDraftMode, dispatch]);

	const turnOffDraftMode = () => {
		dispatch(gameplayActions.toggleDraftMode({ inDraftMode: false }));
	};
	const turnOnDraftMode = () => {
		dispatch(gameplayActions.toggleDraftMode({ inDraftMode: true }));
	};

	const toggleAtOn = (
		<div className={styles.toggle} onClick={turnOffDraftMode}>
			<img className={styles.draftIcon} src="draft-on.png" alt="draft-icon" />
			Draft Mode: On
		</div>
	);
	const toggleAtOff = (
		<div className={styles.toggle} onClick={turnOnDraftMode}>
			<img className={styles.draftIcon} src="draft-off.png" alt="draft-icon" />
			Draft Mode: Off
		</div>
	);

	return inDraftMode ? toggleAtOn : toggleAtOff;
};

export default DraftModeToggle;
