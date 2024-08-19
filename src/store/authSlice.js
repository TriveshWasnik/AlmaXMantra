import { createSlice } from "@reduxjs/toolkit";

// create a auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.status = true;
    },
    logoutUser: (state) => {
      state.status = false;
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
