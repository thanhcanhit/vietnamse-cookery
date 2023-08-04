import { createSlice } from "@reduxjs/toolkit";
import foods from "./food";
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