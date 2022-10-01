import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Veeam Backup",
    purchasedOn: "9/23/2022",
    purchasedTo: "Abdelghani Adel",
    website: "https://www.veeam.com/",
    licenseType: "lifeTimeLicense",
    lifeTimeLicense: false,
    annualFees: true,
    monthlyFees: false,
    nextRenewal: "5/22/2022, 11:59:59 PM",
    currency: "USD",
    price: "570",
    renewPrice: "570",
    maintenancePrice: null,
    licenseKey: "ekutb-8itn2-N9L99-aieJ9-33BNw",
    expired: false,
  },
  {
    id: "2",
    name: "IDM",
    purchasedOn: "9/18/2021",
    purchasedTo: "Abdelghani Adel",
    website: "https://www.internetdownloadmanager.com/",
    lifeTimeLicense: true,
    annualFees: false,
    monthlyFees: false,
    nextRenewal: null,
    currency: "EGP",
    price: "310",
    renewPrice: null,
    maintenancePrice: null,
    licenseKey: "ekutb-8itn2-N9L99-aieJ9-33BNw",
    expired: true,
  },
  {
    id: "3",
    name: "Onyx ERP",
    purchasedOn: "3/29/2022",
    purchasedTo: "Mohamed Eladawy",
    website: "https://www.ultimate-erp.com/",
    lifeTimeLicense: false,
    annualFees: true,
    monthlyFees: false,
    nextRenewal: null,
    currency: "USD",
    price: "20000",
    renewPrice: "2000",
    maintenancePrice: null,
    licenseKey: "ekutb-8itn2-N9L99-aieJ9-33BNw",
    expired: false,
  },
  {
    id: "4",
    name: "Alyasseer ERP",
    purchasedOn: "3/29/2022",
    purchasedTo: "Mohamed Eladawy",
    website: "http://alyaseerapp.com/",
    lifeTimeLicense: true,
    annualFees: false,
    monthlyFees: false,
    nextRenewal: null,
    currency: "EGP",
    price: "30000",
    renewPrice: null,
    maintenancePrice: null,
    licenseKey: "life-time license installed on the server",
    expired: false,
  },
  {
    id: "5",
    name: "Logikal Orgadata",
    purchasedOn: "3/29/2022",
    purchasedTo: "Mohamed Eladawy",
    website: "https://www.orgadata.com/",
    lifeTimeLicense: false,
    annualFees: true,
    monthlyFees: false,
    nextRenewal: null,
    currency: "USD",
    price: "20000",
    renewPrice: "$ 20000",
    maintenancePrice: null,
    licenseKey: "ekutb-8itn2-N9L99-aieJ9-33BNw",
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
      const objIndex = state.findIndex((obj) => obj.id === action.payload);
      state[objIndex].expired = false;
    },
    editSoftware: (state, action) => {
      const objIndex = state.findIndex((obj) => obj.id === action.payload.id);
      state[objIndex].licenseKey = action.payload.licenseKey;
    },
  },
});

export const softwareActions = softwareSlice.actions;
export default softwareSlice;
