import { RootState } from "./store";

const dataSelector = (state: RootState) => state.data;
const foodsSelector = (state: RootState) => state.data.foods;
const touristAttractionSelector = (state: RootState) =>
	state.data.touristAttractions;

// Language
const languageSelector = (state: RootState) => state.language;


export {
	dataSelector,
	foodsSelector,
	touristAttractionSelector,
	languageSelector,
};
