import { configureStore } from "@reduxjs/toolkit";
import softwareSlice from "./slices/softwareSlices";
import ticketsSlice from "./slices/ticketsSlice";
import usersSlice from "./slices/usersSlice";

const reduxStore = configureStore({
  reducer: {
    tickets: ticketsSlice.reducer,
    users: usersSlice.reducer,
    software: softwareSlice.reducer,
  },
});

export default reduxStore;
