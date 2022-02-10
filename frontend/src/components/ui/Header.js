import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./Header.module.css";

import { Link } from "react-router-dom";
import getUserRole from "../../helpers/getUserRole";
import gameplayActions from "../../context/gameplay-slice";

const Header = (props) => {
	const [userRole, setUserRole] = useState(null);

	const dispatch = useDispatch();

	useEffect(() => {
		const getRole = async () => {
			const role = await getUserRole();
			setUserRole(role);
		};

		getRole();
	}, []);

	const clearSession = () => {
		dispatch(gameplayActions.clear());
		localStorage.setItem("sdk-token", "");
	};

	const showInstruction = () => {
		props.showInstruction();
	};

	return (
		<div className={styles.header}>
			<img className={styles.logo} src="logo.png" alt="Killer Sudoku" />
			<nav className={styles.nav}>
				<Link className={styles.navLink} onClick={showInstruction} to="/game">
					Instructions
				</Link>
				{userRole === "admin" && (
					<Link className={styles.navLink} to="/buildyourown">
						Build Your Own
					</Link>
				)}
				<Link className={styles.navLink} onClick={clearSession} to="/">
					Logout
				</Link>
			</nav>
		</div>
	);
};

export default Header;
