import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../sharedcomponents/cartSlice";

const store = configureStore({
    reducer : {
        cart : cartSlice
    }
});

export default store;