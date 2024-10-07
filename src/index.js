import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store";
import { payload } from "./features/accounts/accountSlice";

// store.dispatch({ type: "account/deposit", payload: 250 });
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* store prop pass to reduxstore */}
    {/* connect redux with react */}
    {/* now application knows about redux store */}
    {/*any component in application can read data from store and can dispatch action */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
