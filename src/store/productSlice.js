import { createSlice } from "@reduxjs/toolkit";

// create store slice for Product
const productSlice = createSlice({
  name: "product",
  initialState: {
    slidesPerRow: 1,
    products: [],
  },
  reducers: {
    setSlidesPerRow: (state, action) => {
      state.slidesPerRow = action.payload;
    },
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setSlidesPerRow, getProducts } = productSlice.actions;
export default productSlice.reducer;
