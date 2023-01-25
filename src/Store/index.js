import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./Slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export * from "./Thunks/fetchUsers";
export * from "./Thunks/addUser";
