import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Veeam Backup",
    purchasedOn: "5/23/2022, 02:30:00 PM",
    purchasedTo: "Abdelghani Adel",
    annualFees: true,
    monthlyFees: false,
    lifeTimeLicense: false,
    nextRenewal: "5/22/2022, 11:59:59 PM",
    currency: "USD",
    price: "570",
    renewPrice: "570",
    maintenancePrice: null,
    licenseKey: "ekutb-8itn2-N9L99-aieJ9-33BNw0",
    expired: false,
  },
  {
    id: 2,
    name: "IDM",
    purchasedOn: "9/18/2021, 02:30:00 PM",
    purchasedTo: "Abdelghani Adel",
    annualFees: false,
    monthlyFees: false,
    lifeTimeLicense: true,
    nextRenewal: null,
    currency: "EGP",
    price: "310",
    renewPrice: null,
    maintenancePrice: null,
    licenseKey: "ekutb-8itn2-N9L99-aieJ9-33BNw0",
    expired: false,
  },
  {
    id: 3,
    name: "Onyx ERP",
    purchasedOn: "3/29/2022, 02:30:00 PM",
    purchasedTo: "Mohamed Eladawy",
    annualFees: false,
    monthlyFees: false,
    lifeTimeLicense: true,
    nextRenewal: null,
    currency: "USD",
    price: "20000",
    renewPrice: null,
    maintenancePrice: null,
    licenseKey: "ekutb-8itn2-N9L99-aieJ9-33BNw0",
    expired: false,
  },
  {
    id: 4,
    name: "Alyasseer ERP",
    purchasedOn: "3/29/2022, 02:30:00 PM",
    purchasedTo: "Mohamed Eladawy",
    annualFees: false,
    monthlyFees: false,
    lifeTimeLicense: true,
    nextRenewal: null,
    currency: "EGP",
    price: "30000",
    renewPrice: null,
    maintenancePrice: null,
    licenseKey: "life-time license installed on the server",
    expired: false,
  },
  {
    id: 5,
    name: "Logikal Orgadata",
    purchasedOn: "3/29/2022, 02:30:00 PM",
    purchasedTo: "Mohamed Eladawy",
    annualFees: true,
    monthlyFees: false,
    lifeTimeLicense: false,
    nextRenewal: null,
    currency: "USD",
    price: "20000",
    renewPrice: "$ 20000",
    maintenancePrice: null,
    licenseKey: "ekutb-8itn2-N9L99-aieJ9-33BNw0",
    expired: false,
  },
];

const softwareSlice = createSlice({
  name: "software",
  initialState,
  reducers: {
    addSoftware: (state, action) => {
      state.push(action.payload);
    },
    removeSoftware: (state, action) => {},
    renewSoftware: (state, action) => {
      const objIndex = state.findIndex((obj) => obj.id === action.payload.id);
    },
  },
});

export const softwareActions = softwareSlice.actions;
export default softwareSlice;
