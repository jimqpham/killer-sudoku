import { createSlice } from "@reduxjs/toolkit";

import arrayIncludes from "../helpers/arrayIncludes";
import checkContiguous from "../helpers/checkContiguous";

const byoSlice = createSlice({
	name: "byo",
	initialState: {
		regions: [],
		solution: Array(9)
			.fill("")
			.map((x) => Array(9).fill("")),
		phase: 1,
		completePhaseOne: false,
		completePhaseTwo: false,
	},
	reducers: {
		updateInputs(state, action) {
			const { input, row, col } = action.payload;
			state.solution[row][col] = input;
			let isComplete = true;
			for (let i = 0; i < 9; i++)
				for (let j = 0; j < 9; j++) {
					if (state.solution[i][j] === "") isComplete = false;
				}
			state.completePhaseOne = isComplete;
		},
		validateAndAddRegion(state, action) {
			const { cells, sum } = action.payload;
			if (checkContiguous(cells)) {
				const newRegion = { cells, sum };
				state.regions.push(newRegion);
			}
		},
		nextPhase(state) {
			if (state.phase < 3) state.phase++;
		},
		resetRegions(state, action) {
			state.regions = [];
		},
		updateRegions(state, action) {
			let regionSum = 0;
			for (let cell of action.payload.region.cells)
				regionSum += +state.solution[cell[0]][cell[1]];

			const cells = action.payload.region.cells.sort(
				([row1, col1], [row2, col2]) => {
					if (row1 - row2 !== 0) return row1 - row2;
					return col1 - col2;
				}
			);
			state.regions.push({
				cells,
				sum: regionSum,
			});
			const cellsInRegions = [];
			state.regions.forEach(({ cells }) => {
				cells.forEach((cell) => {
					if (!arrayIncludes(cellsInRegions, cell)) {
						cellsInRegions.push(cell);
					}
				});
			});
			if (cellsInRegions.length === 81) state.completePhaseTwo = true;
		},
	},
});

export const byoActions = byoSlice.actions;

export default byoSlice;
