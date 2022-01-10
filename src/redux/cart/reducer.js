import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { indexOf } from "lodash";
import { fetchcart } from "./action";

export const cart = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    showMiniCart: false,
  },
  reducers: {
    addtocart: (state, action) => {
      const newItem = action.payload;
      const { product, quantity, id } = newItem;
      console.log("state.......", state.cartItems);
      const index = state.cartItems.filter((x) => x._id === id);
      if (index >= 0) {
        state.cartItems[index].quantity += quantity;
      } else {
        state.push(newItem);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    setquantity: (state, action) => {
      const { id, quantity } = action.payload;
      const index = state.cartItems.filter((x) => x._id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },
    removeFormCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((x) => x._id !== productId);
    },
  },

  extraReducers: {
    [fetchcart.pending]: (state, action) => {
      state.item.loading = true;
    },
    [fetchcart.fulfilled]: (state, action) => {
      state.item.loading = false;
      state.item.result = action.payload;
    },
    [fetchcart.rejected]: (state, action) => {
      state.item.loading = false;
    },
  },
});
const { reducer, actions } = cart;
export const { addtocart, removeFormCart, setquantity } = actions;
export default reducer;
