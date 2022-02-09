import styles from "./SideButton.module.css";

const SideButton = (props) => {
	return (
		<button
			className={`${props.className} ${styles.sideButton} ${
				props.enabled ? styles.sideButton__enabled : styles.sideButton__disabled
			}`}
			onClick={props.onClick}
			disabled={!props.enabled ? true : false}
		>
			{props.title}
		</button>
	);
};

export default SideButton;
