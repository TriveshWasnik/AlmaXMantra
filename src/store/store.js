import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";

// Create a store

const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
  },
});
export default store;
