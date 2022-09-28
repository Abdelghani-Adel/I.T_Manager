import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    date: "8/28/2022, 12:25:06 PM",
    subject: "I can't access my business email",
    departement: "Accounting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Eslam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "Medium",
    assignedTo: "Abdelghani",
    chat: [
      {
        time: "02:13 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "Eslam",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "Abdelghani Adel",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "Eslam",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 2,
    date: "8/28/2022, 12:25:06 PM",
    subject: "I can't print from the new system!",
    departement: "Accounting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hazem",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "opened",
    priority: "Low",
    assignedTo: "Ali",
    chat: [],
  },
  {
    id: 3,
    time: "02:13 PM",
    date: "8/28/2022, 12:25:06 PM",
    subject: "I forgot my system login password",
    departement: "Accounting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Ahmed",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "overdue",
    priority: "High",
    assignedTo: "Saleh",
    chat: [
      {
        time: "02:13 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 4,
    date: "8/28/2022, 12:25:06 PM",
    subject: "My mouse is not functioning well!",
    departement: "Accounting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hamza",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "solved",
    priority: "Low",
    assignedTo: "Mahmoud",
    chat: [
      {
        time: "02:13 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 5,
    date: "8/28/2022, 12:25:06 PM",
    subject: "How to print to the printer in the HR room",
    departement: "Accounting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hamza",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "Low",
    assignedTo: "Mohamed",
    chat: [
      {
        time: "02:13 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 6,
    date: "8/28/2022, 12:25:06 PM",
    subject: "How to print to the printer in the HR room",
    departement: "Accounting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Eslam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "opened",
    priority: "High",
    assignedTo: "Mohamed",
    chat: [
      {
        time: "02:13 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 7,
    date: "8/28/2022, 12:25:06 PM",
    subject: "How to print to the printer in the HR room",
    departement: "Accounting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Eslam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "High",
    assignedTo: "Mohamed",
    chat: [
      {
        time: "02:13 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 8,
    date: "8/28/2022, 12:25:06 PM",
    subject: "How to print to the printer in the HR room",
    departement: "Accounting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hamza",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "High",
    assignedTo: "Mohamed",
    chat: [
      {
        time: "02:13 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 9,
    date: "8/28/2022, 12:25:06 PM",
    subject: "How to print to the printer in the HR room",
    departement: "Accounting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hamza",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "overdue",
    priority: "Medium",
    assignedTo: "Mohamed",
    chat: [
      {
        time: "02:13 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 10,
    date: "8/28/2022, 12:25:06 PM",
    subject: "How to print to the printer in the HR room",
    departement: "Accounting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "overdue",
    priority: "Medium",
    assignedTo: "Mohamed",
    chat: [
      {
        time: "02:13 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 11,
    date: "8/28/2022, 12:25:06 PM",
    subject: "How to print to the printer in the HR room",
    departement: "Accounting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "opened",
    priority: "High",
    assignedTo: "Mohamed",
    chat: [
      {
        time: "02:13 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 12,
    date: "8/28/2022, 12:25:06 PM",
    subject: "How to print to the printer in the HR room",
    departement: "Accounting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "overdue",
    priority: "Medium",
    assignedTo: "Mohamed",
    chat: [
      {
        time: "02:13 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "8/28/2022, 12:25:06 PM",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
];

const ticketsSlice = createSlice({
  name: "ticketsSlice",
  initialState,
  reducers: {
    addTicket: (state, action) => {
      state.push(action.payload);
    },
    editTicket: (state, action) => {
      const objIndex = state.findIndex((obj) => obj.id === action.payload.id);

      state[objIndex] = action.payload;
    },
    addComment: (state, action) => {
      const objIndex = state.findIndex((obj) => obj.id === action.payload.id);
      state[objIndex].chat.push(action.payload.comment);
    },
  },
});

export const ticketActions = ticketsSlice.actions;
export default ticketsSlice;
