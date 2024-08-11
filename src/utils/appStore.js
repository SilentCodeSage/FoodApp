import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //this reducer willl contain all the reducers from different slices
  // here the cartReducer is the reducer that was created inside the cartSlice
  //since it is a default export we can name it any way we wanted!!!!!
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
