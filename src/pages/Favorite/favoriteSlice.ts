import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const localData = (() => {
	const localDataText = localStorage.getItem("STORE");
	if (!localDataText) return null;
	const localData = JSON.parse(localDataText);
	return localData.favorite;
})();

const initialState: number[] = localData || [];

const favoriteSlice = createSlice({
	name: "favorite",
	initialState: initialState,
	reducers: {
		toggleFavoriteItem: (state, action) => {
			if (state.includes(action.payload.id)) {
				state.splice(state.indexOf(action.payload.id, 1));
			} else {
				state.push(Number(action.payload.id));
			}
		},
	},
});

const favoriteSelector = (state: RootState) => state.favorite;

export { favoriteSelector };

export const { toggleFavoriteItem } = favoriteSlice.actions;

export default favoriteSlice.reducer;
