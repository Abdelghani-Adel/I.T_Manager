import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    time: "02:13 PM",
    date: "02/26/2022",
    subject: "I can't access my business email",
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
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 2,
    time: "02:13 PM",
    date: "06/06/2022",
    subject: "I can't print from the new system!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hazem",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "low",
    assignedTo: "Ali",
    chat: [],
  },
  {
    id: 3,
    time: "02:13 PM",
    date: "08/26/2022",
    subject: "I forgot my system login password",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Ahmed",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "opened",
    priority: "Medium",
    assignedTo: "Saleh",
    chat: [
      {
        time: "02:13 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 4,
    time: "02:13 PM",
    date: "02/13/2022",
    subject: "My mouse is not functioning well!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hamza",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "opened",
    priority: "low",
    assignedTo: "Mahmoud",
    chat: [
      {
        time: "02:13 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 5,
    time: "02:13 PM",
    date: "08/20/2022",
    subject: "How to print to the printer in the HR room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "low",
    assignedTo: "Mohamed",
    chat: [
      {
        time: "02:13 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 6,
    time: "02:13 PM",
    date: "12/30/2021",
    subject: "How to print to the printer in the HR room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "opened",
    priority: "low",
    assignedTo: "Mohamed",
    chat: [
      {
        time: "02:13 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 7,
    time: "02:13 PM",
    date: "02/18/2022",
    subject: "How to print to the printer in the HR room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "low",
    assignedTo: "Mohamed",
    chat: [
      {
        time: "02:13 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 8,
    time: "02:13 PM",
    date: "07/23/2022",
    subject: "How to print to the printer in the HR room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "low",
    assignedTo: "Mohamed",
    chat: [
      {
        time: "02:13 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 9,
    time: "02:13 PM",
    date: "05/18/2022",
    subject: "How to print to the printer in the HR room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "overdue",
    priority: "low",
    assignedTo: "Mohamed",
    chat: [
      {
        time: "02:13 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 10,
    time: "02:13 PM",
    date: "09/13/2022",
    subject: "How to print to the printer in the HR room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "overdue",
    priority: "low",
    assignedTo: "Mohamed",
    chat: [
      {
        time: "02:13 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 11,
    time: "02:13 PM",
    date: "01/30/2022",
    subject: "How to print to the printer in the HR room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "low",
    assignedTo: "Mohamed",
    chat: [
      {
        time: "02:13 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 3",
      },
    ],
  },
  {
    id: 12,
    time: "02:13 PM",
    date: "03/30/2022",
    subject: "How to print to the printer in the HR room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia dolorum at odit fugit. Quas repellendus exercitationem, soluta in modi iusto? Dignissimos, exercitationem? Eos consequuntur, esse maiores ex commodi fuga? Unde perspiciatis tempore odio voluptas accusamus, nam excepturi officiis nesciunt praesentium autem recusandae rerum dignissimos aut, eos, ratione rem perferendis.",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "opened",
    priority: "low",
    assignedTo: "Mohamed",
    chat: [
      {
        time: "02:13 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 1",
      },
      {
        time: "02:15 PM",
        date: "02/26/2022",
        author: "User",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
        comment: "This is a comment 2",
      },
      {
        time: "02:19 PM",
        date: "02/26/2022",
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
    addTicket: () => {},
    editTicket: (state, action) => {
      const objIndex = state.findIndex((obj) => obj.id == action.payload.id);

      state[objIndex] = action.payload;
    },
    addComment: (state, action) => {
      const objIndex = state.findIndex((obj) => obj.id == action.payload.id);
      state[objIndex].chat.push(action.payload.comment);
    },
  },
});

export const ticketActions = ticketsSlice.actions;
export default ticketsSlice;
