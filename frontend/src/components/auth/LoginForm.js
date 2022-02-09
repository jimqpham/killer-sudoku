import styles from "./LoginForm.module.css";

import { useNavigate } from "react-router";
import { useRef, useState } from "react";
import axios from "../../network/axios";

const LoginForm = (props) => {
	const navigate = useNavigate();
	const usernameRef = useRef();
	const passwordRef = useRef();

	const handleLoginSubmit = async (event) => {
		event.preventDefault();
		props.setLoading(true);

		const response = await axios.post("/users/login", {
			email: usernameRef.current.value,
			password: passwordRef.current.value,
		});

		props.setLoading(false);
		if (response.status === 200) navigate("/game");
	};

	return (
		<>
			<form className={styles.loginForm} onSubmit={handleLoginSubmit}>
				<img src="/logo.png" className={styles.logo} alt="Logo" />
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
		</>
	);
};

export default LoginForm;
