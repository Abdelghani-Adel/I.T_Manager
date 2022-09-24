import { configureStore } from "@reduxjs/toolkit";
import ticketChatSlice from "./ticketChatSlice";
import ticketsSlice from "./ticketsSlice";

const reduxStore = configureStore({
  reducer: {
    tickets: ticketsSlice.reducer,
    ticketChat: ticketChatSlice.reducer,
  },
});

export default reduxStore;
