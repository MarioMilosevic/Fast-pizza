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
  // treba mi broj, treba mi ukupnaCijena i trebace mi
};

export const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza: (state, action: PayloadAction<PizzaItem>) => {
      state.cart.push(action.payload);
      // nadjem objekat sa tim id-em i incrementujem quantity
    },
    removePizza: (state, action: PayloadAction<number>) => {
        const indexToRemove = state.cart.findIndex(
            (pizza) => pizza.id === action.payload
        );
        state.cart = state.cart.filter((pizza, index) => index !== indexToRemove);
        // nadjem objekat sa tim id-em i decrementujem quantity
    },
    removeAllPizzas: (state, action: PayloadAction<number>) => {
        state.cart = state.cart.filter((pizza) => pizza.id !== action.payload);
    },
  },
});
export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce(
    (acc, curr) => acc + curr.unitPrice * curr.quantity,
    0
  );

export const { addPizza, removePizza, removeAllPizzas } = userSlice.actions;
export default userSlice.reducer;
