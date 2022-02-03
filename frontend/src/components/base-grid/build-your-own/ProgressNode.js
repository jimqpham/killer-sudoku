import styles from "./ProgressNode.module.css";

const ProgressNode = (props) => {
	return (
		<div className={styles.nodeWrapper}>
			<div
				className={`${styles.nodeNumber} ${
					props.active ? styles.nodeNumber__active : styles.nodeNumber__inactive
				}`}
			>
				{props.number}
			</div>
			<div
				className={`${styles.nodeContent} ${
					props.active
						? styles.nodeContent__active
						: styles.nodeContent__inactive
				}`}
			>
				{props.content}
			</div>
		</div>
	);
};

export default ProgressNode;
