import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../assets/data/dataSlice";

const store = configureStore({
	reducer: {
		data: dataSlice
	},
});

export type RootState = ReturnType<typeof store.getState>

export default store;
