import { createSlice } from "@reduxjs/toolkit";

import initialGameplayState from "./initial-gameplay-state";
import validateInputKey from "../helpers/validateInputKey";
import getRandomCoords from "../helpers/getRandomCoords";

const gameplaySlice = createSlice({
	name: "gameplay",
	initialState: initialGameplayState,
	reducers: {
		updateAndCheckInput(state, action) {
			const { row, col, input } = action.payload;
			if (validateInputKey(input)) {
				state.input[row][col] = input;
				if (+input !== state.solution[row][col])
					if (state.hearts > 0) state.hearts--;
			}
		},
		toggleDraftMode(state) {
			state.inDraftMode = !state.inDraftMode;
		},
		reset(state) {
			state.hearts = 3;
			state.input = Array(9).fill(Array(9).fill(" "));
		},
		fillCells(state, action) {
			const numCellsFilled =
				action.payload.difficulty === "Easy"
					? 20
					: action.payload.difficulty === "Medium"
					? 15
					: 10;
			const randomCoords = getRandomCoords(numCellsFilled);
			randomCoords.forEach(([row, col]) => {
				state.input[row][col] = state.solution[row][col];
			});
		},
		newGame(state) {
			state.input = Array(9).fill(Array(9).fill(" "));
			state.hearts = 3;
		},
	},
});

export const gameplayActions = gameplaySlice.actions;

export default gameplaySlice;
