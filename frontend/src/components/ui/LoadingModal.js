import Modal from "./Modal";
import LoadingSpinner from "./LoadingSpinner";

const LoadingModal = () => {
	return <Modal title="Loading" content={<LoadingSpinner />} />;
};

export default LoadingModal;
