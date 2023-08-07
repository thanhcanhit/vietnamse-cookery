import { createSlice } from "@reduxjs/toolkit";

const initialState = "en";

const langSlice = createSlice({
	name: "language",
	initialState: initialState,
	reducers: {
		changeToVI: () => "vi",
		changeToEN: () => "en",
	},
});

export const { changeToEN, changeToVI } = langSlice.actions;

export default langSlice.reducer;
