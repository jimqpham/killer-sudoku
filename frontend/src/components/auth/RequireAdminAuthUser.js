import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import getUserRole from "../../helpers/getUserRole";
import LoadingModal from "../ui/LoadingModal";
import Modal from "../ui/Modal";

const RequireAdminAuthUser = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const authenticate = async () => {
			setIsLoading(true);
			const userRole = await getUserRole();
			setIsLoading(false);

			if (userRole === "admin") setIsAuthenticated(true);
		};

		authenticate();
	}, []);

	const unauthorizedAccessModal = (
		<Modal
			title="Authorization Error"
			content={
				<>
					Unauthorized access! Please authenticate.
					<Link to="/login">Log In</Link>
				</>
			}
		/>
	);

	return (
		<>
			{isLoading ? (
				<LoadingModal />
			) : isAuthenticated ? (
				props.children
			) : (
				unauthorizedAccessModal
			)}
		</>
	);
};

export default RequireAdminAuthUser;
