import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state, action) => {
            state.items.push(action.payload)
        },
        clearcart : (state,action) => {
            state.items = [];
        }
    }
});

export const {addItem, clearcart} = cartSlice.actions;
export default cartSlice.reducer;