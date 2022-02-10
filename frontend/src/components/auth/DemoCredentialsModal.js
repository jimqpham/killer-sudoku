import Modal from "../ui/Modal";

import styles from "./DemoCredentialsModal.module.css";

const DemoCredentialsModal = (props) => {
	const closeModal = () => {
		props.showDemoCredentials(false);
	};

	return (
		<Modal
			title="Demo Credentials"
			closeModal={closeModal}
			content={
				<>
					<ul>
						<li>
							Admin:
							<ul>
								<li>Email: admin@admin.com</li>
								<li>Password: iamtheadmin</li>
								<li>
									Admin can play game, create and submit custom sudoku boards
								</li>
							</ul>
						</li>
						<li>
							Player:{" "}
							<ul>
								<li>Email: user@gmail.com</li>
								<li>Password: iamtheuser</li>
								<li>User can play game only</li>
							</ul>
						</li>
					</ul>
					<button className={styles.button} onClick={closeModal}>
						Close
					</button>
				</>
			}
		/>
	);
};

export default DemoCredentialsModal;
