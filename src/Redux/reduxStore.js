import { configureStore } from "@reduxjs/toolkit";
import ticketsSlice from "./ticketsSlice";

const reduxStore = configureStore({
  reducer: {
    tickets: ticketsSlice.reducer,
  },
});

export default reduxStore;
