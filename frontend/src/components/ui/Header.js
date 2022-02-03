import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className={styles.header}>
			<img className={styles.logo} src="logo.png" alt="Killer Sudoku" />
			<nav className={styles.nav}>
				<Link className={styles.navLink} to="/game">
					New Game
				</Link>
				<Link className={styles.navLink} to="/buildyourown">
					Build Your Own
				</Link>
			</nav>
		</div>
	);
};

export default Header;
