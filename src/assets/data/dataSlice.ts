import { createSlice } from "@reduxjs/toolkit";
import foods from "./foods";
import touristAttractions from "./touristAttractions";

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    foods,
    touristAttractions
  },
  reducers: {}
});

export default dataSlice.reducer;