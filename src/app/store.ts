import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../assets/data/dataSlice";
import langSlice from "./langSlice";
import rootSlice from "./rootSlice";
import favoriteSlice from './../pages/Favorite/favoriteSlice';
import cookingSlice from "../components/Cooking/cookingSlice";



const store = configureStore({
	reducer: {
		data: dataSlice,
		language: langSlice,
		favorite: favoriteSlice,
		cooking: cookingSlice,
		root: rootSlice,
	},
});

store.subscribe(() => {
	localStorage.setItem("STORE", JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
