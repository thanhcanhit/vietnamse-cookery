import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../assets/data/dataSlice";
import langSlice from "./langSlice";


const store = configureStore({
	reducer: {
		data: dataSlice,
		language: langSlice
	},
});

export type RootState = ReturnType<typeof store.getState>

export default store;
