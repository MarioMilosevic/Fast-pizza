import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type PizzaItem = {
  id: number;
  name: string;
  unitPrice: number;
  quantity: number;
};

export type cartState = {
  value: PizzaItem[];
};

const initialState: cartState = {
  value: [],
  // treba mi broj, treba mi ukupnaCijena i trebace mi
};

export const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // createUser: (state, action: PayloadAction<string>) => {
    //   state.name += action.payload;
    // },
    addPizza: (state, action: PayloadAction<PizzaItem>) => {
      state.value.push(action.payload);
    },
    removePizza: (state, action: PayloadAction<number>) => {
      const indexToRemove = state.value.findIndex(
        (pizza) => pizza.id === action.payload
      );
      state.value = state.value.filter(
        (pizza, index) => index !== indexToRemove
      );
    },
    removeAllPizzas: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((pizza) => pizza.id !== action.payload);
    },
  },
});
export const { addPizza, removePizza, removeAllPizzas } = userSlice.actions;
export default userSlice.reducer;
