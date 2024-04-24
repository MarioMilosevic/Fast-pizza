import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { PizzaType } from "../../utils/types";

type OrderType = {
  address: string;
  cart: PizzaType[];
  createdAt: string;
  customer: string;
  estimatedDeliver: string;
  id: string;
  orderPrice: number;
  phone: string;
  position: string;
  priority: boolean;
  priorityPrice: number;
  status: string;
};

export type orderState = {
  orders: OrderType[];
};

const initialState: orderState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<OrderType>) => {
      state.orders.push(action.payload);
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
