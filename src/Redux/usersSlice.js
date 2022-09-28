import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    firstName: "Abdelghani",
    lastName: "Adel",
    fullName: "Abdelghani Adel",
    userID: "1",
    departement: "Information Technology",
    position: "Director",
  },
  {
    firstName: "Ahmed",
    lastName: "Ibraheam",
    fullName: "Ahmed Ibraheam",
    userID: "2",
    departement: "Information Technology",
    position: "Manager",
  },
  {
    firstName: "Saleh",
    lastName: "Adel",
    fullName: "Saleh Adel",
    userID: "3",
    departement: "Eng Office",
    position: "Employee",
  },
  {
    firstName: "Mohamed",
    lastName: "Adel",
    fullName: "Mohamed Adel",
    userID: "4",
    departement: "Information Technology",
    position: "Employee",
  },
  {
    firstName: "Hamza",
    lastName: "Eladawy",
    fullName: "Hamza Eladawy",
    userID: "5",
    departement: "Eng Office",
    position: "Manager",
  },
  {
    firstName: "Eslam",
    lastName: "Eldeeb",
    fullName: "Eslam Eldeeb",
    userID: "6",
    departement: "Human Resources",
    position: "Employee",
  },
  {
    firstName: "Hossam",
    lastName: "Raslan",
    fullName: "Hossam Raslan",
    userID: "7",
    departement: "Accounting",
    position: "Employee",
  },
];

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    addUser: () => {},
    removeUser: () => {},
    editUser: () => {},
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice;
