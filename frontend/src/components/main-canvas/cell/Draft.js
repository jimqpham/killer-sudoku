import styles from "./Draft.module.css";

const Draft = (props) => {
	return <span className={styles.draft}>{props.value}</span>;
};

export default Draft;
