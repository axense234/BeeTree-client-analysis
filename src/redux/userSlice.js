import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser:null,
    isFetching:false,
    error:false
  
  },
  reducers: {
   loginStart: (state) => {
      state.isFetching = true;
    },
   loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
   loginFailure: (state) => {
      state.error = true;
      state.isFetching = null;
    },
   registerStart: (state) => {
      state.isFetching = true;
    },
  registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
  registerFailure: (state) => {
      state.error = true;
      state.isFetching = null;
    },
   
  },
});
export const { loginStart, loginSuccess, loginFailure,registerStart, registerSuccess, registerFailure } =
  userSlice.actions;
export default userSlice.reducer;
