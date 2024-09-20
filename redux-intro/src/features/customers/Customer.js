import { useSelector } from "react-redux";

function Customer() {
  // name from combineReducers
  const customer = useSelector((store) => store.customer.fullName);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
