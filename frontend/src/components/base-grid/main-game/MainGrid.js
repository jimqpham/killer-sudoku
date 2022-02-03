import styles from "./MainGrid.module.css";
import Cell from "./Cell";

const MainGrid = (props) => {
	return (
		<table className={styles.mainGrid}>
			<tbody>
				{[...Array(9).keys()].map((i, x) => (
					<tr key={`row${x}}`} className={styles.gridRow}>
						{[...Array(9).keys()].map((j) => (
							<Cell
								key={`row${i}col${j}`}
								className={styles.gridCell}
								row={i}
								col={j}
							/>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default MainGrid;
