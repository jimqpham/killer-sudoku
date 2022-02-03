import { useSelector } from "react-redux";
import DifficultyModal from "../components/base-grid/main-game/DifficultyModal";
import GameOverModal from "../components/base-grid/main-game/GameOverModal";
import Hearts from "../components/base-grid/main-game/Hearts";
import MainGrid from "../components/base-grid/main-game/MainGrid";
import DraftModeToggle from "../components/base-grid/main-game/DraftModeToggle";

import styles from "./GameInterface.module.css";
import Header from "../components/ui/Header";

const GameInterface = () => {
	const hearts = useSelector((state) => state.gameplay.hearts);

	return (
		<div className={styles.content}>
			<Header />
			<Hearts />
			<br />
			<br />
			<DraftModeToggle />
			<br />
			<br />
			<MainGrid />
			{hearts <= 0 && <GameOverModal />}
			<DifficultyModal />
		</div>
	);
};

export default GameInterface;
