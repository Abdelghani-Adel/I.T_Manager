import { configureStore } from "@reduxjs/toolkit";
import ticketsSlice from "./slices/ticketsSlice";
import usersSlice from "./slices/usersSlice";

const reduxStore = configureStore({
  reducer: {
    tickets: ticketsSlice.reducer,
    users: usersSlice.reducer,
  },
});

export default reduxStore;
