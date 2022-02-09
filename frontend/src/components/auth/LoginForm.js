import styles from "./LoginForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { useRef } from "react";

const LoginForm = (props) => {
	const navigate = useNavigate();
	const usernameRef = useRef();
	const passwordRef = useRef();

	const handleLoginSubmit = async (event) => {
		event.preventDefault();

		axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
		const response = await axios.post("/users/login", {
			email: usernameRef.current.value,
			password: passwordRef.current.value,
		});

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
