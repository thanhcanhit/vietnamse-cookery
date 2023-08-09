import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: { search: string; currentFoodView: number | null } = {
	search: "",
	currentFoodView: null,
};

const rootSlice = createSlice({
	name: "root",
	initialState: initialState,
	reducers: {
		searchTextChange: (state, action) => {
			state.search = action.payload.text;
		},
		setCurrentFoodView: (state, action) => {
			state.currentFoodView = action.payload.id;
		},
	},
});

const searchTextSelector = (state: RootState) => state.root.search;
const currentFoodViewSelector = (state: RootState) =>
	state.root.currentFoodView;

export { searchTextSelector, currentFoodViewSelector };

export const { searchTextChange, setCurrentFoodView } = rootSlice.actions;

export default rootSlice.reducer;
