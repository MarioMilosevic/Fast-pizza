import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

export const useCartSlice = () => {
  const cart = useSelector((state: RootState) => state.cart);
  return cart;
};

export const useLoadingSlice = () => {
  const loading = useSelector((state: RootState) => state.loading);
  return loading;
};

export const useUserSlice = () => {
  const user = useSelector((state: RootState) => state.user);
  return user;
};
