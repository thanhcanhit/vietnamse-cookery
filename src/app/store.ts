import { configureStore } from "@reduxjs/toolkit";
import "../components/ControlBar/controlBarSlice";
import controlBarSlice from "../components/ControlBar/controlBarSlice";

const store = configureStore({
	reducer: {
		controlBar: controlBarSlice,
	},
});

export default store;
