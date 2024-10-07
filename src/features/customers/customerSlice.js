// used redux toolkit
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fullName: "",
  nationlID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationlID) {
        return {
          //if you want create date or assign random id you shoud do in prepare funtion
          //don't in reducer
          payload: { fullName, nationlID, createdAt: new Date().toISOString() },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationlID = action.payload.nationlID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;
