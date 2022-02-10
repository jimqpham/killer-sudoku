import { createSlice } from "@reduxjs/toolkit";

import validateInputKey from "../helpers/validateInputKey";
import getRandomCoords from "../helpers/getRandomCoords";

const gameplaySlice = createSlice({
	name: "gameplay",
	initialState: {
		input: Array(9).fill(Array(9).fill(" ")),
		regions: [],
		solution: Array(9).fill(Array(9).fill(-1)),
		hearts: 3,
		inDraftMode: false,
		score: 0,
	},
	reducers: {
		updateAndCheckInput(state, action) {
			const { row, col, input } = action.payload;
			if (validateInputKey(input)) {
				state.input[row][col] = input;
				if (input !== state.solution[row][col].toString()) {
					if (state.hearts > 0) state.hearts--;
				} else {
					state.score++;
				}
			}
		},
		toggleDraftMode(state) {
			state.inDraftMode = !state.inDraftMode;
		},
		fillCells(state, action) {
			const numCellsFilled =
				action.payload.difficulty === "Demo"
					? 80
					: action.payload.difficulty === "Easy"
					? 30
					: action.payload.difficulty === "Medium"
					? 20
					: 10;
			const randomCoords = getRandomCoords(numCellsFilled);
			randomCoords.forEach(([row, col]) => {
				state.input[row][col] = state.solution[row][col];
			});
			state.score += numCellsFilled;
		},
		clear(state) {
			state.input = Array(9).fill(Array(9).fill(" "));
			state.hearts = 3;
			state.inDraftMode = false;
			state.solution = Array(9).fill(Array(9).fill(-1));
			state.regions = [];
			state.score = 0;
		},
		loadNewGame(state, action) {
			state.regions = action.payload.regions;
			state.solution = action.payload.solution;
		},
	},
});

export const gameplayActions = gameplaySlice.actions;

export default gameplaySlice;
