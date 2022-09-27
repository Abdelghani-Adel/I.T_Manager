import { configureStore } from "@reduxjs/toolkit";
import ticketsSlice from "./ticketsSlice";
import usersSlice from "./usersSlice";

const reduxStore = configureStore({
  reducer: {
    tickets: ticketsSlice.reducer,
    users: usersSlice.reducer,
  },
});

export default reduxStore;
