import Modal from "../ui/Modal";
import DemoCredentialsModal from "./DemoCredentialsModal";

import styles from "./Form.module.css";

import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "../../network/axios";
import isEmail from "validator/lib/isEmail";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
	const navigate = useNavigate();

	const [showLoginError, setShowLoginError] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");

	const [isValidEmail, setIsValidEmail] = useState(true);
	const [isValidPassword, setIsValidPassword] = useState(true);

	const [emailBlurred, setEmailBlurred] = useState(false);
	const [passwordBlurred, setPasswordBlurred] = useState(false);

	const [showDemoCredentials, setShowDemoCredentials] = useState(false);

	const handleLoginSubmit = async (event) => {
		event.preventDefault();

		if (isValidEmail && isValidPassword) {
			props.setLoading(true);
			try {
				const response = await axios.post("/users/login", {
					email: enteredEmail,
					password: enteredPassword,
				});

				props.setLoading(false);
				if (response.status === 200) {
					localStorage.setItem("sdk-token", response.data.token);
					setShowSuccessModal(true);
					setTimeout(() => {
						navigate("/game");
					}, 2000);
				}
			} catch (e) {
				props.setLoading(false);
				setShowLoginError(true);
				console.log(e);
			}
		}
	};

	const loginErrorModal = showLoginError && (
		<Modal
			title="Login Error"
			content="Unable to log in!"
			closeModal={() => {
				setShowLoginError(false);
			}}
		/>
	);

	const loginSuccessModal = showSuccessModal && (
		<Modal title="Login Success" content="Logging you in..." />
	);

	const demoCredentialsModal = showDemoCredentials && (
		<DemoCredentialsModal
			showDemoCredentials={() => setShowDemoCredentials(false)}
		/>
	);

	const handleEnterEmail = (event) => {
		setEnteredEmail(event.target.value);
		setIsValidEmail(isEmail(event.target.value));
	};

	const handleEnterPassword = (event) => {
		setEnteredPassword(event.target.value);
		setIsValidPassword(event.target.value.length >= 4);
	};

	const handleBlurEmail = () => {
		setEmailBlurred(true);
	};

	const handleBlurPassword = () => {
		setPasswordBlurred(true);
	};

	const emailInvalidText = emailBlurred && !isValidEmail && (
		<span className={styles.errorText}>Email address is invalid</span>
	);

	const passwordInvalidText = passwordBlurred && !isValidPassword && (
		<span className={styles.errorText}>
			Password must have at least 4 characters
		</span>
	);

	return (
		<>
			{loginErrorModal}
			{loginSuccessModal}
			{demoCredentialsModal}
			<form className={styles.loginForm} onSubmit={handleLoginSubmit}>
				<img src="/logo.png" className={styles.logo} alt="Logo" />
				<label className={styles.label} htmlFor="email">
					Email
				</label>
				<input
					className={styles.input}
					type="text"
					id="email"
					value={enteredEmail}
					onChange={handleEnterEmail}
					onBlur={handleBlurEmail}
				/>
				{emailInvalidText}
				<label className={styles.label} htmlFor="password">
					Password
				</label>
				<input
					className={styles.input}
					type="password"
					id="password"
					value={enteredPassword}
					onChange={handleEnterPassword}
					onBlur={handleBlurPassword}
				/>
				{passwordInvalidText}
				<button className={styles.button}>Log In</button>
				<Link to="/signup" className={styles.link}>
					Sign up
				</Link>
				<div
					className={styles.helperText}
					onClick={() => {
						setShowDemoCredentials(true);
					}}
				>
					Use demo credentials
				</div>
			</form>
		</>
	);
};

export default LoginForm;
