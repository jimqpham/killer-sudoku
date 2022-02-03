import styles from "./LoginForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { useRef } from "react";

const LoginForm = () => {
	const navigate = useNavigate();
	const usernameRef = useRef();
	const passwordRef = useRef();

	const handleLoginSubmit = async (event) => {
		event.preventDefault();

		console.log(
			JSON.stringify({
				email: usernameRef.current.value,
				password: passwordRef.current.value,
			})
		);

		axios.defaults.baseURL = "https://killer-sudoku-backend.herokuapp.com";

		const response = await axios.post(
			"/users/login",
			JSON.stringify({
				email: usernameRef.current.value,
				password: passwordRef.current.value,
			}),
			{
				headers: {
					"Access-Control-Allow-Origin":
						"https://killer-sudoku-backend.herokuapp.com/users/login",
				},
			}
		);

		if (response) navigate("/game");
	};

	return (
		<form className={styles.loginForm} onSubmit={handleLoginSubmit}>
			<label className={styles.label} htmlFor="username">
				Username
			</label>
			<input
				className={styles.input}
				type="text"
				id="username"
				ref={usernameRef}
			/>
			<label className={styles.label} htmlFor="password">
				Password
			</label>
			<input
				className={styles.input}
				type="text"
				id="password"
				ref={passwordRef}
			/>
			<button className={styles.button}>Play!</button>
		</form>
	);
};

export default LoginForm;
