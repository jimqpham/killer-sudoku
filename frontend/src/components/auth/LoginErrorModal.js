import Modal from "../ui/Modal";

const LoginErrorModal = (props) => {
	const hideErrorModal = () => {
		props.hideErrorModal();
	};

	const loginErrorContent = (
		<>
			Login unsuccessful!
			<button onClick={hideErrorModal}>Try Again</button>
		</>
	);

	return <Modal title="Login Error" content={loginErrorContent} />;
};

export default LoginErrorModal;
