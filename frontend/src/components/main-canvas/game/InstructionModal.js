import Modal from "../../ui/Modal";

const InstructionModal = (props) => {
	const closeModal = () => {
		props.closeInstruction();
	};

	const instructionContent = (
		<ul>
			HOW TO PLAY KILLER SUDOKU
			<br />
			<br />
			<li>
				Fille all rows, columns, and 3x3 blocks with numbers 1-9 exactly like in
				classic sudoku.
			</li>
			<li>
				Pay attention to the cages – groups of cells indicated by thin blue
				lines.
			</li>
			<li>
				Make sure the sum of numbers in each cage is equal to the number in the
				upper left corner of the cage.
			</li>
			<li>
				Numbers cannot repeat within cages, a single row, column, or 3x3 region.
			</li>
		</ul>
	);

	return (
		<Modal
			title="Instructions"
			content={instructionContent}
			closeModal={closeModal}
		/>
	);
};

export default InstructionModal;
