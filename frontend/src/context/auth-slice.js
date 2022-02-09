import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: "",
	},
	reducers: {
		updateToken(state, action) {
			state.token = action.payload.token;
		},
		removeToken(state, action) {
			state.token = "";
		},
	},
});

export const authActions = authSlice.actions;
export default authSlice;
