import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { gameplayActions } from "../context/gameplay-slice";

import DifficultyModal from "../components/base-grid/main-game/DifficultyModal";
import GameOverModal from "../components/base-grid/main-game/GameOverModal";
import Hearts from "../components/base-grid/main-game/Hearts";
import MainGrid from "../components/base-grid/main-game/MainGrid";
import DraftModeToggle from "../components/base-grid/main-game/DraftModeToggle";
import Header from "../components/ui/Header";
import RestartButton from "../components/base-grid/main-game/RestartButton";

import styles from "./GameInterfacePage.module.css";
import axios from "axios";

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
