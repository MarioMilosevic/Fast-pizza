import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import loadingReducer from "../features/globalLoadingSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
