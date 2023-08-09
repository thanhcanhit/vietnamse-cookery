import { createSlice } from "@reduxjs/toolkit";
import foods from "./foods";
import touristAttractions from "./touristAttractions";
import { RootState } from "../../app/store";

const dataSlice = createSlice({
	name: "data",
	initialState: {
		foods,
		touristAttractions,
	},
	reducers: {},
});

// Selector
const dataSelector = (state: RootState) => state.data;
const foodsSelector = (state: RootState) => state.data.foods;
const touristAttractionSelector = (state: RootState) =>
	state.data.touristAttractions;
export { dataSelector, foodsSelector, touristAttractionSelector };

export default dataSlice.reducer;
