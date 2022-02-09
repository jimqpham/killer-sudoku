import LoginForm from "../components/auth/LoginForm";
import LoadingModal from "../components/ui/LoadingModal";

import { useState } from "react";

const LoginPage = () => {
	const [isLoading, setIsLoading] = useState(false);

	const setLoading = (loadingState) => {
		setIsLoading(loadingState);
	};

	return (
		<>
			{isLoading && <LoadingModal />}
			<LoginForm setLoading={setLoading} />
		</>
	);
};

export default LoginPage;
