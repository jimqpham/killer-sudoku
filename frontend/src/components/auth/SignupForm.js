import Modal from "../ui/Modal";
import DemoCredentialsModal from "./DemoCredentialsModal";
import axios from "../../network/axios";

import styles from "./Form.module.css";

import { useNavigate } from "react-router";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import { Link } from "react-router-dom";

const SignupForm = (props) => {
	const navigate = useNavigate();

	const [showSignupError, setShowSignupError] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");
	const [retypedPassword, setRetypedPassword] = useState("");

	const [passwordMismatch, setPasswordMismatch] = useState(false);
	const [isValidEmail, setIsValidEmail] = useState(true);
	const [isValidPassword, setIsValidPassword] = useState(true);

	const [retypedPasswordBlurred, setRetypedPasswordBlurred] = useState(false);
	const [emailBlurred, setEmailBlurred] = useState(false);
	const [passwordBlurred, setPasswordBlurred] = useState(false);

	const [showDemoCredentials, setShowDemoCredentials] = useState(false);

	const handleSignupSubmit = async (event) => {
		event.preventDefault();

		if (isValidEmail && isValidPassword && !passwordMismatch) {
			props.setLoading(true);
			try {
				const response = await axios.post("/users", {
					email: enteredEmail,
					password: enteredPassword,
				});

				props.setLoading(false);
				if (response.status === 201) {
					localStorage.setItem("sdk-token", response.data.token);
					setShowSuccessModal(true);
					setTimeout(() => {
						navigate("/game");
					}, 2000);
				}
			} catch (e) {
				props.setLoading(false);
				setShowSignupError(true);
				console.log(e);
			}
		}
	};

	const handleEnterEmail = (event) => {
		setEnteredEmail(event.target.value);
		setIsValidEmail(isEmail(event.target.value));
	};

	const handleEnterPassword = (event) => {
		setEnteredPassword(event.target.value);
		setIsValidPassword(event.target.value.length >= 4);
	};

	const handleRetypePassword = (event) => {
		setRetypedPassword(event.target.value);
		setPasswordMismatch(event.target.value !== enteredPassword);
	};

	const handleBlurEmail = () => {
		setEmailBlurred(true);
	};

	const handleBlurPassword = () => {
		setPasswordBlurred(true);
	};

	const handleBlurRetypedPassword = () => {
		setRetypedPasswordBlurred(true);
	};

	const signupErrorModal = showSignupError && (
		<Modal
			title="Signup Error"
			content="Unable to sign up!"
			closeModal={() => {
				setShowSignupError(false);
			}}
		/>
	);

	const signupSuccessModal = showSuccessModal && (
		<Modal
			title="Signup Success"
			content="Signup successful! Logging you in..."
		/>
	);

	const demoCredentialsModal = showDemoCredentials && (
		<DemoCredentialsModal
			showDemoCredentials={() => setShowDemoCredentials(false)}
		/>
	);

	const passwordMismatchText = retypedPasswordBlurred && passwordMismatch && (
		<span className={styles.errorText}>Retyped password does not match</span>
	);

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
			{signupErrorModal}
			{signupSuccessModal}
			{demoCredentialsModal}
			<form className={styles.loginForm} onSubmit={handleSignupSubmit}>
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
				<label className={styles.label} htmlFor="password">
					Retype Password
				</label>
				<input
					className={styles.input}
					type="password"
					id="password-retyped"
					value={retypedPassword}
					onChange={handleRetypePassword}
					onBlur={handleBlurRetypedPassword}
				/>
				{passwordMismatchText}
				<button className={styles.button}>Sign Up</button>
				<Link to="/login" className={styles.link}>
					Log in
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

export default SignupForm;
