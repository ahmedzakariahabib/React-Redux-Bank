import { useSelector } from "react-redux";

function Customer() {
  // to read date from reduxstore used useSelector
  const customer = useSelector((store) => store.customer.fullName);

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
