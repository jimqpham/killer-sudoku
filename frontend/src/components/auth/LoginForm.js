import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router";

const LoginForm = () => {
	const navigate = useNavigate();

	const handleLoginSubmit = () => {
		// Add authentication here when connecting to backend services
		navigate("/game");
	};

	return (
		<form className={styles.loginForm} onSubmit={handleLoginSubmit}>
			<label className={styles.label} htmlFor="username">
				Username
			</label>
			<input className={styles.input} type="text" id="username" />
			<label className={styles.label} htmlFor="password">
				Password
			</label>
			<input className={styles.input} type="text" id="password" />
			<button className={styles.button}>Play!</button>
		</form>
	);
};

export default LoginForm;
