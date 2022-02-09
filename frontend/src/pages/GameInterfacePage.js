import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "../network/axios";

import styles from "./GameInterfacePage.module.css";

import DifficultyModal from "../components/main-canvas/game/DifficultyModal";
import GameOverModal from "../components/main-canvas/game/GameOverModal";
import Hearts from "../components/main-canvas/game/Hearts";
import MainGrid from "../components/main-canvas/game/MainGrid";
import DraftModeToggle from "../components/main-canvas/game/DraftModeToggle";
import RestartButton from "../components/main-canvas/game/RestartButton";
import Header from "../components/ui/Header";
import { gameplayActions } from "../context/gameplay-slice";

const GameInterfacePage = () => {
	const hearts = useSelector((state) => state.gameplay.hearts);
	const [showDifficultyModal, setShowDifficultyModal] = useState(true);
	const [restartCount, setRestartCount] = useState(0);
	const dispatch = useDispatch();

	const restart = () => {
		setRestartCount((state) => state + 1);
	};

	const hideDifficultyModal = () => {
		setShowDifficultyModal(false);
	};

	useEffect(() => {
		async function startNewGame() {
			const response = await axios.get(
				process.env.REACT_APP_BACKEND_URL + "/boards",
				{},
				{
					Authorization: `Bearer ${localStorage.getItem("sdk-token")}`,
				}
			);
			console.log(response);
			dispatch(gameplayActions.newGame());
			setShowDifficultyModal(true);
		}
		startNewGame();
	}, [dispatch, restartCount]);

	return (
		<div className={styles.content}>
			<Header />
			<Hearts />
			<DraftModeToggle />
			<RestartButton restart={restart} />
			<MainGrid />
			{hearts <= 0 && <GameOverModal />}
			{showDifficultyModal && (
				<DifficultyModal hideDifficultyModal={hideDifficultyModal} />
			)}
		</div>
	);
};

export default GameInterfacePage;
