import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import styles from "./GameInterfacePage.module.css";

import DifficultyModal from "../components/main-canvas/game/DifficultyModal";
import GameOverModal from "../components/main-canvas/game/GameOverModal";
import Hearts from "../components/main-canvas/game/Hearts";
import MainGrid from "../components/main-canvas/game/MainGrid";
import DraftModeToggle from "../components/main-canvas/game/DraftModeToggle";
import RestartButton from "../components/main-canvas/game/RestartButton";
import Header from "../components/ui/Header";
import LoadingModal from "../components/ui/LoadingModal";
import { gameplayActions } from "../context/gameplay-slice";
import axios from "../network/axios";
import Modal from "../components/ui/Modal";

const GameInterfacePage = () => {
	const hearts = useSelector((state) => state.gameplay.hearts);
	const [difficulty, setDifficulty] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [showingError, setShowingError] = useState(false);
	const dispatch = useDispatch();

	const startNewGame = async (difficulty) => {
		setDifficulty(difficulty);
		setIsLoading(true);

		try {
			const response = await axios({
				method: "get",
				url: "/boards",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("sdk-token")}`,
				},
			});

			setIsLoading(false);

			const { regions, solution } = response.data;

			dispatch(
				gameplayActions.loadNewGame({
					regions,
					solution,
				})
			);

			dispatch(gameplayActions.fillCells({ difficulty }));
		} catch (e) {
			setIsLoading(false);
			setShowingError(true);
		}
	};

	return (
		<>
			{showingError && (
				<Modal
					title="Error Fetching Board"
					content="Cannot fetch sudoku board. Try refresh the page!"
				/>
			)}
			{isLoading && <LoadingModal />}
			<div className={styles.content}>
				<Header />
				<Hearts />
				<DraftModeToggle />
				<RestartButton
					chooseDifficulty={() => {
						setDifficulty(null);
					}}
				/>
				<MainGrid />
				{hearts <= 0 && <GameOverModal />}
				{difficulty === null && <DifficultyModal startNewGame={startNewGame} />}
			</div>
		</>
	);
};

export default GameInterfacePage;
