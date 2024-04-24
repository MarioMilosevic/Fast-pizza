import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import loadingReducer from "../features/loadingSlice";
import cartReducer from "../features/cartSlice"
import ordersReducer from "../features/orderSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    cart: cartReducer,
    orders:ordersReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
