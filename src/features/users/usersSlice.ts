import { createSlice } from "@reduxjs/toolkit";
import { getOneUser, getAllUsers } from "./usersAction";

const initialState = {
  loading: false,
  usersData: {},
  userInfo: {},
  error: false,
  success: false,
  message: "",
};
export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.usersData = action.payload;
        state.success = true;
      })
      .addCase(getAllUsers.rejected, (state, action: any) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.usersData = {};
      })
      .addCase(getOneUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.success = true;
      })
      .addCase(getOneUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.userInfo = {};
      });
  },
});

export default usersSlice.reducer;
