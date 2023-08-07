import { createSlice } from "@reduxjs/toolkit";

type Language = ("en" | "vi");

const initialState: Language = "en";

const langSlice = createSlice({
	name: "language",
	initialState: initialState,
	reducers: {
		changeLanguage: (_state, action) => {
			_state = action.payload;
		},
	},
});

export const { changeLanguage } = langSlice.actions;

export default langSlice.reducer;
