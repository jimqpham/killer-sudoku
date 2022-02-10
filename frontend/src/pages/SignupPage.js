import SignupForm from "../components/auth/SignupForm";
import LoadingModal from "../components/ui/LoadingModal";

import { useState } from "react";

const SignupPage = () => {
	const [isLoading, setIsLoading] = useState(false);

	const setLoading = (loadingState) => {
		setIsLoading(loadingState);
	};

	return (
		<>
			{isLoading && <LoadingModal />}
			<SignupForm setLoading={setLoading} />
		</>
	);
};

export default SignupPage;
