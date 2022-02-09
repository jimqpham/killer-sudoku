import styles from "./Modal.module.css";

const Modal = (props) => {
	return (
		<>
			<div className={styles.backdrop} />
			<div className={styles.modal}>
				<div className={styles.title}>{props.title}</div>
				<div className={styles.content}>{props.content}</div>
			</div>
		</>
	);
};

export default Modal;
