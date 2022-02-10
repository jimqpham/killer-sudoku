import styles from "./Modal.module.css";

const Modal = (props) => {
	const closeModal = () => {
		if (props.closeModal) {
			props.closeModal();
		}
	};

	return (
		<>
			<div className={styles.backdrop} onClick={closeModal} />
			<div className={styles.modal}>
				<div className={styles.title}>{props.title}</div>
				<div className={styles.content}>{props.content}</div>
			</div>
		</>
	);
};

export default Modal;
