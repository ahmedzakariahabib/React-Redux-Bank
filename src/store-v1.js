// we divde store to components slice
//and every slice contain initial state and reducer and action creator

import { type } from "@testing-library/user-event/dist/type";

import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationlID: "",
  createdAt: "",
};

function accountreducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

function customerreducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationlID: action.payload.nationlID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.fullName,
      };
    default:
      return state;
  }
}

//combine all reducers that we have to create one so-called root reducer
//about way combineReducers
//because this reducer that createstore receive root reducer

const rootReducer = combineReducers({
  account: accountreducer,
  customer: customerreducer,
});

const store = createStore(rootReducer);

///////////////////////////////////////////////////////////////////////
// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log(store.getState());
// //getState to show current state for store
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "Buy a car" },
// });
// console.log(store.getState());

// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

//old way for make name for action-->const ACCOUNT_DEPOSIT="account/deposit"
//////////////////////////////////////////////////////////////
//we do action creators are function return action
// create action creators for every possible action-->instead of above way

function deposit(amount) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}

function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
function payload() {
  return {
    type: "account/payLoan",
  };
}

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(1000, "Buy a cheap car"));
console.log(store.getState());
store.dispatch(payload());
console.log(store.getState());

function createCustomer(fullName, nationlID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationlID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}

store.dispatch(createCustomer("ahmed zakaria", "01060785736"));
console.log(store.getState());
store.dispatch(deposit(250));
console.log(store.getState());
