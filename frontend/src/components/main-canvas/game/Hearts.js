import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./Hearts.module.css";

const Hearts = () => {
	const hearts = useSelector((state) => state.gameplay.hearts);
	const [heartDroppedFlags, setHeartDroppedFlags] = useState([
		false,
		false,
		false,
	]);

	const heartBar = Array(3)
		.fill(" ")
		.map((x, i) => (
			<img
				key={i}
				className={`${styles.heartImg} ${
					heartDroppedFlags[i] ? styles.heartDropped : " "
				}`}
				src="heart.png"
				alt="heart-img"
			></img>
		));

	useEffect(() => {
		if (hearts === 3) setHeartDroppedFlags([false, false, false]);

		setHeartDroppedFlags((state) =>
			state.map((x, i) => (i === hearts ? true : x))
		);
	}, [hearts]);

	return <div className={styles.heartbar}>{heartBar}</div>;
};

export default Hearts;
