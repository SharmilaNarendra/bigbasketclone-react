import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:0,
    reducers:{
        addItem:(state)=> state +1,
        removeItem:(state)=> state - 1,
    }

});

export const {addItem,removeItem} = cartSlice.actions;
export default cartSlice.reducer;