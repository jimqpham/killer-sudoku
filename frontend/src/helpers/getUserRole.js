import axios from "../network/axios";

const getUserRole = async () => {
	try {
		const authResponse = await axios({
			method: "GET",
			url: "/users",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("sdk-token")}`,
			},
		});

		return authResponse.data.role;
	} catch (e) {
		return null;
	}
};

export default getUserRole;
