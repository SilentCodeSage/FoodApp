import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["burger", "pizza"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});


//cartSlice will be an object of this type after createSlice method is finished executing it returns an object of this type

// cartSlice:{
//   actions:{
//     addItem,
//     removeItem,
//     clearCart
//   },
//   reducer,
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
