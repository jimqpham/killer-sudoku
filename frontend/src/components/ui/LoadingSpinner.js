import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
	return (
		<span className={styles.span}>
			<svg
				width="40"
				height="40"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				className={styles.svg}
			>
				<circle cx="20" cy="20" r="15" />
			</svg>
		</span>
	);
};

export default LoadingSpinner;
