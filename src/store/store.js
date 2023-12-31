import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userslice/userSlice";

export const store = configureStore({
  reducer: {
    userSlice,
  },
});
