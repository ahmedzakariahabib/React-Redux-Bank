// only file which use redux is right here
//redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

//configurestore add alot of things automatically
//1-automatically combine reducers 2-automatically add thunk middleware
//3-automatically set up developer tools
const store = configureStore({
  //reducer are root reducer
  reducer: { account: accountReducer, customer: customerReducer },
});

export default store;
