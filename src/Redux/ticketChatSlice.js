import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    chat: [
      {
        time: "02:13 PM",
        date: "02/26/2022",
        author: "User",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "02/26/2022",
        author: "User",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "02/26/2022",
        author: "User",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 2,
    chat: [
      {
        time: "02:13 PM",
        date: "02/26/2022",
        author: "User",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "02/26/2022",
        author: "User",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "02/26/2022",
        author: "User",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 3,
    chat: [
      {
        time: "02:13 PM",
        date: "02/26/2022",
        author: "User",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "02/26/2022",
        author: "User",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "02/26/2022",
        author: "User",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 4,
    chat: [
      {
        time: "02:13 PM",
        date: "02/26/2022",
        author: "User",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "02/26/2022",
        author: "User",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "02/26/2022",
        author: "User",
        comment: "This is a comment 3",
      },
    ],
  },
];

const ticketChatSlice = createSlice({
  name: "ticketChatSlice",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const objIndex = state.findIndex((obj) => obj.id == action.payload.id);
      state[objIndex].chat.push(action.payload.comment);
    },
  },
});

export const ticketChatActions = ticketChatSlice.actions;
export default ticketChatSlice;
