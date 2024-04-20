import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type UserCartItem = {
  name: string;
  unitPrice: number;
  id: number;
};

export type UserState = {
  name: string;
  totalNumber:number;
  totalPrice:number;
};

const initialState: UserState = {
  name: "",
  totalNumber: 0,
  totalPrice:0
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<string>) => {
      state.name += action.payload;
    },
    resetUser: (state) => {
      state.name = "";
    },
    // addItemToCart: (state, action: PayloadAction<UserCartItem>) => {
    //   state.cart.push(action.payload);
    // },
    // deleteItem: (state, action: PayloadAction<number>) => {
    //   state.cart = state.cart.filter((item) => item.id !== action.payload);
    // },
  },
});
export const { createUser, resetUser} = userSlice.actions;
export default userSlice.reducer;
