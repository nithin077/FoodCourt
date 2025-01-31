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
        clearcart : (state) => {
            state.items = [];
        },
        removeItem : (state,action) => {
            state.items.splice(action.payload,1)
        }
    }
});

export const {addItem, clearcart, removeItem} = cartSlice.actions;
export default cartSlice.reducer;