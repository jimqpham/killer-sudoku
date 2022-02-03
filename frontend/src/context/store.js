import { configureStore } from "@reduxjs/toolkit";
import gameplaySlice from "./gameplay-slice";
import byoSlice from "./buildyourown-slice";

const store = configureStore({
	reducer: {
		gameplay: gameplaySlice.reducer,
		byo: byoSlice.reducer,
	},
});

export default store;
