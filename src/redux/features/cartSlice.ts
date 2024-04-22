import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

type PizzaItem = {
  id: number;
  name: string;
  unitPrice: number;
  quantity: number;
};

export type cartState = {
  cart: PizzaItem[];
};

const initialState: cartState = {
  cart: [],
};

export const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addFirstItem: (state, action: PayloadAction<PizzaItem>) => {
      state.cart.push(action.payload);
    },

    incrementItemQuantity: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decrementItemQuantity: (state, action: PayloadAction<number>) => {
      state.cart = state.cart
        .map((item) =>
          item.id === action.payload && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    },

    removeAllItems: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((pizza) => pizza.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = []
    }
  },
});

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce(
    (acc, curr) => acc + curr.unitPrice * curr.quantity,
    0
  );

export const {
  addFirstItem,
  incrementItemQuantity,
  removeAllItems,
  decrementItemQuantity,
  clearCart
} = userSlice.actions;
export default userSlice.reducer;
