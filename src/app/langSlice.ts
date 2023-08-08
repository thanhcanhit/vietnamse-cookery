import { createSlice } from "@reduxjs/toolkit";

export type Language = "en" | "vi";

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

export const { changeLanguage } = langSlice.actions;

export default langSlice.reducer;
