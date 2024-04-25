import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

export const useCartSlice = () => {
  const user = useSelector((state: RootState) => state.user);
  const loading = useSelector((state: RootState) => state.loading);
  const cart = useSelector((state: RootState) => state.cart);
  const orders = useSelector((state: RootState) => state.orders);

  return { user, loading, cart, orders };
};
