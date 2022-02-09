import Modal from "../../ui/Modal";

const WinningModal = () => {
	const handleNewGame = () => {
		console.log("Start a new game!");
	};

	const modalContent = (
		<>
			You win!
			<button onClick={handleNewGame}>Start A New Game</button>
		</>
	);

	return <Modal title="Congratulations!" content={modalContent} />;
};
