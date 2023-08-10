import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const isHasLocalData = (() => {
	const localData = localStorage.getItem("STORE");
	return Boolean(!localData);
})();

const initialState: {
	search: string;
	currentFoodView: number | null;
	isFirstTime: boolean;
} = {
	search: "",
	currentFoodView: null,
	isFirstTime: isHasLocalData,
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
		setIsFirstTimeFalse: (state) => {
			state.isFirstTime = false;
		},
	},
});

const searchTextSelector = (state: RootState) => state.root.search;
const currentFoodViewSelector = (state: RootState) =>
	state.root.currentFoodView;
const isFirstTimeSelector = (state: RootState) => state.root.isFirstTime;

export { searchTextSelector, currentFoodViewSelector, isFirstTimeSelector };

export const { searchTextChange, setCurrentFoodView, setIsFirstTimeFalse } =
	rootSlice.actions;

export default rootSlice.reducer;
