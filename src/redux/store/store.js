import { configureStore } from "@reduxjs/toolkit";
import Customerinformation from "../slice/CustomerSlice";
const store = configureStore({
  reducer: {
    customerinfo: Customerinformation,
  },
});
export default store;
