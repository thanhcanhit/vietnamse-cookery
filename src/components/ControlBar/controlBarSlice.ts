import { createSlice } from "@reduxjs/toolkit";

const controlBarSlice = createSlice({
	name: "controlBar",
	initialState: "home",
	reducers: {
		changeCurrent: (_state, action) => action.payload,
	},
});

export const { changeCurrent } = controlBarSlice.actions;

export default controlBarSlice.reducer;
