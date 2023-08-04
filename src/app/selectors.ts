import { RootState } from "./store";

const dataSelector = (state: RootState) => state.data;
const foodsSelector = (state: RootState) => state.data.foods;
const touristAttractionSelector = (state: RootState) =>
	state.data.touristAttractions;

export { dataSelector, foodsSelector, touristAttractionSelector };
