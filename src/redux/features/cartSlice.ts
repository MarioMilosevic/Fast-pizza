import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type PizzaItem = {
    id: number;
    name: string;
    unitPrice: number;
}

export type cartState = {
  value:PizzaItem[]
};

const initialState: cartState = {
  value: [],
};

export const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // createUser: (state, action: PayloadAction<string>) => {
    //   state.name += action.payload;
      // },
      dodajPicu: (state, action: PayloadAction<PizzaItem>) => {
          state.value.push(action.payload)
          console.log(action.payload)
          console.log(state.value)
    }
  },
});
export const {dodajPicu } = userSlice.actions;
export default userSlice.reducer;
