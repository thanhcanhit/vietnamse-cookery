import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type Language = "en" | "vi";

// Get local language
const localLanguage = (() => {
	const localDataText = localStorage.getItem("STORE");
	if (!localDataText) return null;
	const localData = JSON.parse(localDataText);
	return localData.language;
})();

const initialState: Language = localLanguage || "en";

const langSlice = createSlice({
	name: "language",
	initialState: initialState,
	reducers: {
		changeLanguage: (_state, action) => {
			return action.payload;
		},
	},
});

// Selector
const languageSelector = (state: RootState) => state.language;

export { languageSelector };

export const { changeLanguage } = langSlice.actions;

export default langSlice.reducer;
