import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/Cart"



const appStore = configureStore({
  reducer:{
   cart: cartReducer
  }
  
});

export default appStore;