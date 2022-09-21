import { createSlice } from "@reduxjs/toolkit";

const initialTickets = [
  {
    id: 1,
    time: "02:13 PM",
    date: "29/03/2021",
    subject: "I can't access my business email",
    user: "Eslam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "Medium",
    assignedTo: "Abdelghani",
  },
  {
    id: 2,
    time: "02:13 PM",
    date: "29/03/2021",
    subject: "I can't print from the new system!",
    user: "Hazem",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "low",
    assignedTo: "Ali",
  },
  {
    id: 3,
    time: "02:13 PM",
    date: "29/03/2021",
    subject: "I forgot my system login password",
    user: "Ahmed",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "opened",
    priority: "Medium",
    assignedTo: "Saleh",
  },
  {
    id: 4,
    time: "02:13 PM",
    date: "29/03/2021",
    subject: "My mouse is not functioning well!",
    user: "Hamza",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "opened",
    priority: "low",
    assignedTo: "Mahmoud",
  },
  {
    id: 5,
    time: "02:13 PM",
    date: "29/03/2021",
    subject: "How to print to the printer in the HR room",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "low",
    assignedTo: "Mohamed",
  },
  {
    id: 6,
    time: "02:13 PM",
    date: "29/03/2021",
    subject: "How to print to the printer in the HR room",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "opened",
    priority: "low",
    assignedTo: "Mohamed",
  },
  {
    id: 7,
    time: "02:13 PM",
    date: "29/03/2021",
    subject: "How to print to the printer in the HR room",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "low",
    assignedTo: "Mohamed",
  },
  {
    id: 8,
    time: "02:13 PM",
    date: "29/03/2021",
    subject: "How to print to the printer in the HR room",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "low",
    assignedTo: "Mohamed",
  },
  {
    id: 9,
    time: "02:13 PM",
    date: "29/03/2021",
    subject: "How to print to the printer in the HR room",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "overdue",
    priority: "low",
    assignedTo: "Mohamed",
  },
  {
    id: 10,
    time: "02:13 PM",
    date: "29/03/2021",
    subject: "How to print to the printer in the HR room",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "overdue",
    priority: "low",
    assignedTo: "Mohamed",
  },
  {
    id: 11,
    time: "02:13 PM",
    date: "29/03/2021",
    subject: "How to print to the printer in the HR room",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "low",
    assignedTo: "Mohamed",
  },
  {
    id: 12,
    time: "02:13 PM",
    date: "29/03/2021",
    subject: "How to print to the printer in the HR room",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "opened",
    priority: "low",
    assignedTo: "Mohamed",
  },
  {
    id: 13,
    subject: "How to print to the printer in the HR room",
    user: "Hossam",
    avatar:
      "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
    status: "pending",
    priority: "low",
    assignedTo: "Mohamed",
  },
];

const ticketsSlice = createSlice({
  name: "ticketsSlice",
  initialState: initialTickets,
  reducers: {
    addTicket: () => {},
    editTicket: (state, payload) => {},
  },
});

export const ticketActions = ticketsSlice.actions;
export default ticketsSlice;
